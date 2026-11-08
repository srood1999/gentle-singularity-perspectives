import React, { useState, useEffect, useRef } from 'react';
import {
  Send,
  Loader2,
  Sparkles,
  AlertCircle,
  MessageSquare,
  Shuffle,
  RotateCcw,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Volume2,
  VolumeX
} from 'lucide-react';
import {
  TOP_50_ACCELERATIONISTS,
  TOP_50_PRAGMATISTS,
  TOP_50_PESSIMISTS,
  TOP_100_PHILOSOPHERS,
  CATEGORIES,
  SUGGESTED_QUESTIONS,
  fetchLiveTenDayTechQuestions,
  synthesizeThinkerResponse,
  synthesizeExpandedReasoning,
  getThinkerSources,
  getThinkerSpeechSettings,
  buildThinkerSystemPrompt
} from './data/roster200';

export default function App() {
  // Selected IDs for each of the 4 Dropdowns (50 + 50 + 50 + 100 = 250 voices)
  const [selectedFour, setSelectedFour] = useState({
    accelerationist: TOP_50_ACCELERATIONISTS[0].id, // #1 Jensen Huang
    pragmatist: TOP_50_PRAGMATISTS[0].id,           // #1 Sam Altman
    pessimist: TOP_50_PESSIMISTS[0].id,             // #1 Geoffrey Hinton
    philosopher: TOP_100_PHILOSOPHERS[0].id         // #1 Jesus of Nazareth
  });

  // Sample questions state: Top 2 = Last 10 Days Tech (refreshed on page load), Bottom 2 = Philosophical & Spiritual
  const [sampleQuestions, setSampleQuestions] = useState(SUGGESTED_QUESTIONS);

  useEffect(() => {
    let active = true;
    fetchLiveTenDayTechQuestions().then((liveQuestions) => {
      if (active && Array.isArray(liveQuestions) && liveQuestions.length === 4) {
        setSampleQuestions(liveQuestions);
      }
    });
    return () => {
      active = false;
    };
  }, []);

  // Track which cards have their "Expand Your Reasoning More" section open: key = `${cIdx}-${catId}`
  const [expandedCards, setExpandedCards] = useState({});

  // Track active Text-to-Speech playback: key = `${cIdx}-${catId}` or `row-${cIdx}` or null
  const [speakingKey, setSpeakingKey] = useState(null);
  const speechQueueRef = useRef([]);
  const isCancelledRef = useRef(false);

  // Stop speech on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopSpeaking = () => {
    isCancelledRef.current = true;
    speechQueueRef.current = [];
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingKey(null);
  };

  const pickBestVoice = (settings) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;

    const langPrefix = (settings.lang || 'en-US').toLowerCase();
    const enVoices = voices.filter((v) => v.lang && v.lang.toLowerCase().startsWith('en'));
    const pool = enVoices.length ? enVoices : voices;

    const femaleHints = /female|samantha|victoria|karen|moira|tessa|fiona|veena|zira|aria|jenny|sonia|libby|natasha|google uk english female|google us english/i;
    const maleHints = /male|daniel|alex|fred|oliver|arthur|thomas|david|mark|guy|ryan|christopher|eric|roger|google uk english male/i;

    const langMatches = pool.filter((v) => v.lang.toLowerCase().startsWith(langPrefix));
    const searchPool = langMatches.length ? langMatches : pool;

    if (settings.gender === 'female') {
      const fMatch = searchPool.find((v) => femaleHints.test(v.name));
      if (fMatch) return fMatch;
    } else {
      const mMatch = searchPool.find((v) => maleHints.test(v.name));
      if (mMatch) return mMatch;
    }
    return searchPool[0] || pool[0];
  };

  const speakSingleUtterance = (text, person, catId, activeKey, onDone) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    const settings = getThinkerSpeechSettings(person, catId);
    const utterance = new SpeechSynthesisUtterance(text);
    const chosenVoice = pickBestVoice(settings);
    if (chosenVoice) {
      utterance.voice = chosenVoice;
      utterance.lang = chosenVoice.lang;
    } else {
      utterance.lang = settings.lang || 'en-US';
    }
    utterance.pitch = settings.pitch || 1.0;
    utterance.rate = settings.rate || 1.0;

    utterance.onend = () => {
      if (!isCancelledRef.current && onDone) {
        onDone();
      }
    };
    utterance.onerror = () => {
      if (!isCancelledRef.current && onDone) {
        onDone();
      }
    };

    setSpeakingKey(activeKey);
    window.speechSynthesis.speak(utterance);
  };

  const handleToggleSpeakCard = (cIdx, catId, entry, isExpanded, question) => {
    const cardKey = `${cIdx}-${catId}`;
    if (speakingKey === cardKey) {
      stopSpeaking();
      return;
    }

    stopSpeaking();
    isCancelledRef.current = false;

    const expandedParagraphs =
      entry.expandedParagraphs || synthesizeExpandedReasoning(catId, entry.person, question);
    const textToRead = isExpanded
      ? `${entry.person.name}. ${entry.text} Deep-dive reasoning: ${expandedParagraphs.join(' ')}`
      : `${entry.person.name}. ${entry.text}`;

    speakSingleUtterance(textToRead, entry.person, catId, cardKey, () => {
      setSpeakingKey(null);
    });
  };

  const handleToggleSpeakRow = (cIdx, item) => {
    const rowKey = `row-${cIdx}`;
    if (speakingKey && (speakingKey === rowKey || speakingKey.startsWith(`${cIdx}-`))) {
      stopSpeaking();
      return;
    }

    stopSpeaking();
    isCancelledRef.current = false;

    const steps = CATEGORIES.map((cat) => {
      const entry = item.answers[cat.id];
      return {
        catId: cat.id,
        person: entry.person,
        text: `${entry.person.name}: ${entry.text}`,
        cardKey: `${cIdx}-${cat.id}`
      };
    });

    const runStep = (idx) => {
      if (isCancelledRef.current || idx >= steps.length) {
        setSpeakingKey(null);
        return;
      }
      const step = steps[idx];
      speakSingleUtterance(step.text, step.person, step.catId, step.cardKey, () => {
        runStep(idx + 1);
      });
    };

    runStep(0);
  };

  const buildAnswerEntry = (catId, person, question) => ({
    person,
    text: synthesizeThinkerResponse(catId, person, question),
    expandedParagraphs: synthesizeExpandedReasoning(catId, person, question),
    sources: getThinkerSources(person)
  });

  // Side-by-side comparison feed (newest at the top so answers appear right below the input & sample questions)
  const [comparisons, setComparisons] = useState(() => {
    const initialQuestion = SUGGESTED_QUESTIONS[0];
    return [
      {
        question: initialQuestion,
        answers: {
          accelerationist: buildAnswerEntry(
            'accelerationist',
            TOP_50_ACCELERATIONISTS[0],
            initialQuestion
          ),
          pragmatist: buildAnswerEntry(
            'pragmatist',
            TOP_50_PRAGMATISTS[0],
            initialQuestion
          ),
          pessimist: buildAnswerEntry(
            'pessimist',
            TOP_50_PESSIMISTS[0],
            initialQuestion
          ),
          philosopher: buildAnswerEntry(
            'philosopher',
            TOP_100_PHILOSOPHERS[0],
            initialQuestion
          )
        }
      }
    ];
  });

  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getPersonById = (catId, personId) => {
    const cat = CATEGORIES.find((c) => c.id === catId);
    return cat.roster.find((p) => p.id === personId) || cat.roster[0];
  };

  const toggleExpandCard = (cIdx, catId) => {
    const key = `${cIdx}-${catId}`;
    setExpandedCards((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleExpandAllInRow = (cIdx) => {
    const allOpen = CATEGORIES.every((cat) => expandedCards[`${cIdx}-${cat.id}`]);
    setExpandedCards((prev) => {
      const next = { ...prev };
      CATEGORIES.forEach((cat) => {
        next[`${cIdx}-${cat.id}`] = !allOpen;
      });
      return next;
    });
  };

  const queryVoiceOrFallback = async (person, catId, question, fallbackFn) => {
    const systemPrompt = buildThinkerSystemPrompt(person, catId);
    const payload = {
      contents: [{ role: 'user', parts: [{ text: question }] }],
      systemInstruction: { parts: [{ text: systemPrompt }] },
      tools: [{ googleSearch: {} }]
    };

    const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';
    if (apiKey) {
      const models = ['gemini-2.5-flash', 'gemini-2.0-flash', 'gemini-3.7-flash'];
      for (const modelName of models) {
        try {
          const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
          const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          });
          if (res.ok) {
            const data = await res.json();
            const txt = data?.candidates?.[0]?.content?.parts?.[0]?.text;
            if (txt) return txt;
          }
        } catch {
          // Try next model or serverless route
        }
      }
    }

    // Try Vercel serverless endpoint /api/chat if available
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        const data = await res.json();
        if (data?.text) return data.text;
      }
    } catch {
      // Fallback to deep persona synthesis engine
    }

    return fallbackFn();
  };

  const handleSelectDropdown = async (catId, newPersonId) => {
    stopSpeaking();
    setSelectedFour((prev) => ({
      ...prev,
      [catId]: newPersonId
    }));

    const person = getPersonById(catId, newPersonId);
    const currentQuestion = comparisons[0]?.question || SUGGESTED_QUESTIONS[0];

    // Immediately show the rich persona synthesis so the UI feels instant
    setComparisons((prev) => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      const top = { ...updated[0], answers: { ...updated[0].answers } };
      top.answers[catId] = buildAnswerEntry(catId, person, top.question);
      updated[0] = top;
      return updated;
    });

    // Also query live Gemini with Google Search grounding if configured
    const liveReply = await queryVoiceOrFallback(person, catId, currentQuestion, () => null);
    if (liveReply) {
      setComparisons((prev) => {
        if (prev.length === 0 || prev[0].question !== currentQuestion) return prev;
        const updated = [...prev];
        const top = { ...updated[0], answers: { ...updated[0].answers } };
        if (top.answers[catId]?.person?.id === person.id) {
          top.answers[catId] = {
            ...top.answers[catId],
            text: liveReply
          };
          updated[0] = top;
        }
        return updated;
      });
    }
  };

  const handleRandomizeFour = () => {
    stopSpeaking();
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const nextAcc = pick(TOP_50_ACCELERATIONISTS);
    const nextPrag = pick(TOP_50_PRAGMATISTS);
    const nextDoom = pick(TOP_50_PESSIMISTS);
    const nextPhil = pick(TOP_100_PHILOSOPHERS);

    setSelectedFour({
      accelerationist: nextAcc.id,
      pragmatist: nextPrag.id,
      pessimist: nextDoom.id,
      philosopher: nextPhil.id
    });

    setComparisons((prev) => {
      if (prev.length === 0) return prev;
      const updated = [...prev];
      const q = updated[0].question;
      updated[0] = {
        question: q,
        answers: {
          accelerationist: buildAnswerEntry('accelerationist', nextAcc, q),
          pragmatist: buildAnswerEntry('pragmatist', nextPrag, q),
          pessimist: buildAnswerEntry('pessimist', nextDoom, q),
          philosopher: buildAnswerEntry('philosopher', nextPhil, q)
        }
      };
      return updated;
    });
  };

  const submitQuestion = async (questionOverride) => {
    const q = (questionOverride ?? inputText).trim();
    if (!q || isLoading) return;

    stopSpeaking();
    setInputText('');
    setIsLoading(true);
    setError(null);

    try {
      const answers = {};
      for (const cat of CATEGORIES) {
        const person = getPersonById(cat.id, selectedFour[cat.id]);
        const reply = await queryVoiceOrFallback(person, cat.id, q, () =>
          synthesizeThinkerResponse(cat.id, person, q)
        );
        answers[cat.id] = {
          person,
          text: reply,
          expandedParagraphs: synthesizeExpandedReasoning(cat.id, person, q),
          sources: getThinkerSources(person)
        };
      }
      setComparisons((prev) => [{ question: q, answers }, ...prev]);
    } catch (err) {
      console.error(err);
      setError('Failed to get a response. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    submitQuestion();
  };

  const handleClearFeed = () => {
    stopSpeaking();
    const q = SUGGESTED_QUESTIONS[0];
    setExpandedCards({});
    setComparisons([
      {
        question: q,
        answers: {
          accelerationist: buildAnswerEntry(
            'accelerationist',
            getPersonById('accelerationist', selectedFour.accelerationist),
            q
          ),
          pragmatist: buildAnswerEntry(
            'pragmatist',
            getPersonById('pragmatist', selectedFour.pragmatist),
            q
          ),
          pessimist: buildAnswerEntry(
            'pessimist',
            getPersonById('pessimist', selectedFour.pessimist),
            q
          ),
          philosopher: buildAnswerEntry(
            'philosopher',
            getPersonById('philosopher', selectedFour.philosopher),
            q
          )
        }
      }
    ]);
  };

  return (
    /* Outer Ambient Canvas + Self-Contained Framed Application Border */
    <div className="min-h-screen bg-[#EAE5DB] p-2.5 sm:p-5 lg:p-7 font-sans text-slate-900">
      <div className="max-w-[1440px] mx-auto rounded-3xl border-2 border-stone-300/95 ring-4 ring-stone-200/70 bg-[#FAF8F5] shadow-[0_14px_44px_-12px_rgba(28,25,23,0.16)] overflow-hidden flex flex-col">
        {/* Top 4-Pillar Accent Ribbon */}
        <div className="h-1.5 w-full bg-gradient-to-r from-emerald-500 via-blue-500 via-rose-500 to-amber-500" />

        {/* Unified Light Header */}
        <header className="bg-white border-b border-stone-200/90 px-4 sm:px-8 py-5 shadow-sm">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-4xl">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700 shadow-sm flex-shrink-0 mt-0.5">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                  Comparing Perspectives on Living in an Era of Accelerated Progress AKA &ldquo;The Foothills of the Singularity&rdquo;
                </h1>
                <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                  Each voice is modeled as an AI digital twin drawing on the full breadth of that individual&apos;s published books, essays, interviews, debates, and personal worldview—with a speaker icon on every card to listen out loud.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start lg:self-center flex-shrink-0">
              <button
                type="button"
                onClick={handleRandomizeFour}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-300/80 transition-colors shadow-sm"
              >
                <Shuffle className="w-3.5 h-3.5" />
                Randomize 4 Voices
              </button>
              {comparisons.length > 1 && (
                <button
                  type="button"
                  onClick={handleClearFeed}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-white hover:bg-stone-100 text-slate-600 border border-stone-200 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Reset
                </button>
              )}
            </div>
          </div>
        </header>

        {/* 4 Dropdown Selector Bar (50 + 50 + 50 + 100 = 250 Voices) */}
        <section
          aria-label="Perspective dropdown selectors"
          className="bg-[#F4F1EA] border-b border-stone-200/90 px-4 sm:px-8 py-4"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {CATEGORIES.map((cat, idx) => {
              const selectedPerson = getPersonById(cat.id, selectedFour[cat.id]);
              return (
                <div
                  key={cat.id}
                  className={`bg-white rounded-2xl p-3.5 border shadow-sm transition-all ${cat.cardBorder}`}
                >
                  <label
                    htmlFor={`select-${cat.id}`}
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                  >
                    {idx + 1}. {cat.label}
                  </label>
                  <select
                    id={`select-${cat.id}`}
                    value={selectedFour[cat.id]}
                    onChange={(e) => handleSelectDropdown(cat.id, e.target.value)}
                    className={`w-full bg-stone-50/90 hover:bg-white border border-stone-300 rounded-xl px-3 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 transition-all cursor-pointer ${cat.selectRing}`}
                  >
                    {cat.roster.map((person, pIdx) => (
                      <option key={person.id} value={person.id}>
                        #{pIdx + 1} — {person.name}
                      </option>
                    ))}
                  </select>
                  <div className="mt-2 flex items-center justify-between gap-2 text-xs text-slate-600">
                    <span className="font-medium text-slate-800 truncate" title={selectedPerson.role}>
                      {selectedPerson.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Ask Any Question Input Field + Sample Questions Directly Below It */}
        <section className="bg-white border-b border-stone-200/90 px-4 sm:px-8 py-5 shadow-sm">
          <div className="max-w-5xl mx-auto space-y-4">
            {/* Primary Question Input Form */}
            <form
              onSubmit={handleSendMessage}
              className="relative flex items-center"
            >
              <input
                id="chatInput"
                name="chatInput"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask any question to compare the 4 selected voices side by side..."
                disabled={isLoading}
                className="w-full bg-[#FAF8F5] border-2 border-stone-300 focus:bg-white focus:border-amber-600 focus:ring-2 focus:ring-amber-100 rounded-2xl py-3.5 pl-5 pr-32 text-sm sm:text-base text-slate-900 shadow-inner transition-all duration-200 disabled:opacity-50 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isLoading}
                className={`absolute right-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 ${
                  inputText.trim() && !isLoading
                    ? 'bg-slate-900 hover:bg-slate-800 text-white shadow-sm'
                    : 'bg-stone-200 text-stone-400 cursor-not-allowed'
                }`}
              >
                <span>Compare</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {/* Clearly Labeled Sample Questions Section (Last 10 Days Tech Topics + Philosophical) */}
            <div className="bg-[#FAF8F5] rounded-xl p-3 border border-stone-200/80">
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 mb-2">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Sample Questions — Predominant Tech Topics (Last 10 Days) &amp; Deep Philosophy:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    type="button"
                    disabled={isLoading}
                    onClick={() => submitQuestion(q)}
                    className="text-left text-xs bg-white hover:bg-amber-50 text-slate-700 hover:text-amber-950 border border-stone-200/90 hover:border-amber-300 px-3.5 py-2 rounded-xl shadow-sm transition-all disabled:opacity-50"
                  >
                    &ldquo;{q}&rdquo;
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Side-by-Side Comparison Feed */}
        <main className="flex-1 px-4 sm:px-8 py-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {isLoading && (
              <div className="flex justify-center py-4">
                <div className="bg-white border border-stone-300 rounded-full px-5 py-2.5 shadow-sm flex items-center gap-2 text-sm text-slate-700">
                  <Loader2 className="w-4 h-4 animate-spin text-amber-700" />
                  Generating authentic side-by-side responses...
                </div>
              </div>
            )}

            {error && (
              <div className="flex justify-center my-4">
                <div className="bg-red-50 text-red-700 px-4 py-2 rounded-full text-sm flex items-center gap-2 shadow-sm border border-red-200">
                  <AlertCircle className="w-4 h-4" />
                  {error}
                </div>
              </div>
            )}

            {comparisons.map((item, cIdx) => {
              const allExpanded = CATEGORIES.every(
                (cat) => expandedCards[`${cIdx}-${cat.id}`]
              );
              const isRowSpeaking =
                speakingKey &&
                (speakingKey === `row-${cIdx}` || speakingKey.startsWith(`${cIdx}-`));

              return (
                <div key={cIdx} className="space-y-4">
                  {/* Clean Light Question Header */}
                  <div className="bg-white border border-stone-200/90 px-5 py-3.5 rounded-2xl shadow-sm flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-bold uppercase px-2.5 py-1 rounded-lg bg-amber-100/90 text-amber-900 border border-amber-200">
                        Active Question
                      </span>
                      <h2 className="font-bold text-base sm:text-lg text-slate-900">
                        {item.question}
                      </h2>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        type="button"
                        onClick={() => handleToggleSpeakRow(cIdx, item)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl border transition-colors ${
                          isRowSpeaking
                            ? 'bg-amber-600 text-white border-amber-700 shadow-sm'
                            : 'bg-amber-50 hover:bg-amber-100 text-amber-900 border-amber-300/80'
                        }`}
                        title="Listen to all 4 panelists speak their answers in sequence"
                      >
                        {isRowSpeaking ? (
                          <>
                            <VolumeX className="w-3.5 h-3.5 animate-pulse" />
                            <span>Stop Panel Audio</span>
                          </>
                        ) : (
                          <>
                            <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                            <span>Listen to All 4</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => toggleExpandAllInRow(cIdx)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-stone-100 hover:bg-amber-50 text-slate-700 hover:text-amber-900 border border-stone-200/90 transition-colors"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                        <span>
                          {allExpanded
                            ? 'Collapse All 4 Deep Dives'
                            : 'Expand All 4 Reasoning & Sources'}
                        </span>
                      </button>
                      <span className="hidden sm:inline-flex text-xs text-slate-500 items-center gap-1">
                        <MessageSquare className="w-3.5 h-3.5" />
                        4 Voices Compared
                      </span>
                    </div>
                  </div>

                  {/* 4 Side-by-Side Answer Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
                    {CATEGORIES.map((cat) => {
                      const entry = item.answers[cat.id];
                      if (!entry) return null;
                      const cardKey = `${cIdx}-${cat.id}`;
                      const isExpanded = !!expandedCards[cardKey];
                      const isSpeakingCard = speakingKey === cardKey;
                      const expandedParagraphs =
                        entry.expandedParagraphs ||
                        synthesizeExpandedReasoning(cat.id, entry.person, item.question);
                      const sources =
                        entry.sources || getThinkerSources(entry.person);

                      return (
                        <article
                          key={cat.id}
                          className={`bg-white rounded-2xl border shadow-sm flex flex-col justify-between overflow-hidden transition-all ${
                            isSpeakingCard ? 'ring-2 ring-amber-500 ' : ''
                          }${cat.cardBorder}`}
                        >
                          <div>
                            {/* Card Top Header with Speaker Icon Button */}
                            <div className={`px-4 py-3.5 ${cat.cardHeader}`}>
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <span
                                  className={`inline-block text-xs font-bold uppercase px-2 py-0.5 rounded-md border ${cat.pillClass}`}
                                >
                                  {cat.badge}
                                </span>
                                <button
                                  type="button"
                                  onClick={() =>
                                    handleToggleSpeakCard(
                                      cIdx,
                                      cat.id,
                                      entry,
                                      isExpanded,
                                      item.question
                                    )
                                  }
                                  aria-label={
                                    isSpeakingCard
                                      ? `Stop speaking ${entry.person.name}'s response`
                                      : `Listen to ${entry.person.name}'s response out loud`
                                  }
                                  title={
                                    isSpeakingCard
                                      ? 'Stop speaking'
                                      : `Listen to ${entry.person.name} out loud`
                                  }
                                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold border transition-all shadow-sm ${
                                    isSpeakingCard
                                      ? 'bg-amber-600 text-white border-amber-700 animate-pulse'
                                      : 'bg-white/90 hover:bg-white text-slate-800 border-stone-300/90 hover:border-amber-400'
                                  }`}
                                >
                                  {isSpeakingCard ? (
                                    <>
                                      <VolumeX className="w-3.5 h-3.5" />
                                      <span>Stop</span>
                                    </>
                                  ) : (
                                    <>
                                      <Volume2 className="w-3.5 h-3.5 text-amber-700" />
                                      <span>Listen</span>
                                    </>
                                  )}
                                </button>
                              </div>
                              <h3 className="font-bold text-base text-slate-900 leading-snug">
                                {entry.person.name}
                              </h3>
                              <p className="text-xs text-slate-600 mt-0.5 line-clamp-1" title={entry.person.role}>
                                {entry.person.role}
                              </p>
                            </div>

                            {/* Lifelike First-Person Response + Expand Your Reasoning More Button */}
                            <div className="p-4 sm:p-5 space-y-3.5">
                              <p className="text-sm leading-relaxed text-slate-800">
                                {entry.text}
                              </p>

                              {/* Expand Your Reasoning More Toggle Button */}
                              <button
                                type="button"
                                onClick={() => toggleExpandCard(cIdx, cat.id)}
                                className="w-full inline-flex items-center justify-between gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#FAF8F5] hover:bg-amber-50/90 text-slate-800 hover:text-amber-950 border border-stone-200/90 hover:border-amber-300 transition-all shadow-sm"
                              >
                                <span className="inline-flex items-center gap-1.5">
                                  <BookOpen className="w-3.5 h-3.5 text-amber-700 flex-shrink-0" />
                                  <span>
                                    {isExpanded
                                      ? 'Hide Expanded Reasoning & Sources'
                                      : 'Expand Your Reasoning More'}
                                  </span>
                                </span>
                                {isExpanded ? (
                                  <ChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                                )}
                              </button>

                              {/* Expanded Multi-Paragraph Reasoning + Legitimate Sources / Bibliography */}
                              {isExpanded && (
                                <div className="pt-3 border-t border-stone-200/90 space-y-3.5 animate-fadeIn">
                                  <div className="space-y-2.5 bg-[#FAF8F5] p-3.5 rounded-xl border border-stone-200/80">
                                    <div className="text-xs font-bold uppercase tracking-wider text-amber-900">
                                      Deep-Dive Reasoning ({entry.person.name})
                                    </div>
                                    {expandedParagraphs.map((para, pIdx) => (
                                      <p
                                        key={pIdx}
                                        className="text-xs sm:text-sm leading-relaxed text-slate-700"
                                      >
                                        {para}
                                      </p>
                                    ))}
                                  </div>

                                  {/* Legitimate Sources & Bibliography */}
                                  <div className="bg-stone-50/90 p-3.5 rounded-xl border border-stone-200/90 space-y-2">
                                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-700">
                                      <BookOpen className="w-3.5 h-3.5 text-amber-700" />
                                      <span>Primary Sources &amp; Bibliography</span>
                                    </div>
                                    <ul className="space-y-2">
                                      {sources.map((src, sIdx) => (
                                        <li
                                          key={sIdx}
                                          className="text-xs bg-white p-2.5 rounded-lg border border-stone-200/80 shadow-sm"
                                        >
                                          <div className="font-semibold text-slate-900 leading-snug">
                                            {src.title}
                                          </div>
                                          <div className="text-amber-800 font-medium mt-0.5">
                                            {src.type} • {src.year}
                                          </div>
                                          <p className="text-slate-600 mt-1 leading-relaxed">
                                            {src.detail}
                                          </p>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Card Footer: Biographical Background & Domains */}
                          <div className="px-4 py-3 bg-stone-50/80 border-t border-stone-200/80 text-xs text-slate-600">
                            <span className="font-semibold text-slate-800">Known For:</span>{' '}
                            {entry.person.focus}
                          </div>
                        </article>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </main>

        {/* Subtle Framed Application Footer */}
        <footer className="bg-white border-t border-stone-200/90 px-6 py-3.5 text-xs text-slate-500 flex flex-wrap items-center justify-between gap-2">
          <span>
            The Foothills of the Singularity Perspectives Panel • 250 Voices Across 4 Intellectual Pillars
          </span>
          <span>
            Click &ldquo;Listen&rdquo; on any card to hear the response spoken aloud, or &ldquo;Expand Your Reasoning More&rdquo; for deep-dive analysis
          </span>
        </footer>
      </div>
    </div>
  );
}
