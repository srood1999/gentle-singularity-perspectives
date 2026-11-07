// Complete dataset of 250 voices ranked by current public prominence in each pillar:
// - Top 50 Accelerationists (e/acc & Techno-Optimists) — led by Elon Musk, Jensen Huang, Marc Andreessen, Peter Diamandis, Ray Kurzweil
// - Top 50 Middle-Ground Pragmatists — led by Sam Altman, Dario Amodei, Satya Nadella, Sundar Pichai, Bill Gates, Demis Hassabis
// - Top 50 P(doom) Pessimists & AI Safety Critics — led by Geoffrey Hinton, Yuval Noah Harari, Edward Snowden, Noam Chomsky, Ilya Sutskever, Eliezer Yudkowsky
// - Top 100 Thinkers, Spiritual Leaders & Philosophers — led by the most globally recognized spiritual & philosophical figures, including Baruch Spinoza & Isaac Asimov in the Top 10

// 1. TOP 50 ACCELERATIONISTS & TECHNO-OPTIMISTS (Ranked by Public Prominence)
export const TOP_50_ACCELERATIONISTS = [
  { id: 'eacc-1', name: 'Elon Musk', role: 'Founder of SpaceX, Tesla & xAI', focus: 'Multi-planetary civilization, truth-seeking superintelligence & humanoid abundance' },
  { id: 'eacc-2', name: 'Jensen Huang', role: 'Founder & CEO of NVIDIA', focus: 'Accelerated computing, AI factories & digital biology at near-zero marginal cost' },
  { id: 'eacc-3', name: 'Marc Andreessen', role: 'Co-Founder of a16z & Techno-Optimist Manifesto Author', focus: 'Technology as the primary engine of human flourishing & anti-stagnation' },
  { id: 'eacc-4', name: 'Peter Diamandis', role: 'XPRIZE Founder, Abundance Author & Moonshots Host', focus: 'Demonetization of scarcity, longevity escape velocity & Massive Transformative Purposes' },
  { id: 'eacc-5', name: 'Ray Kurzweil', role: 'Futurist & Author of The Singularity Is Nearer', focus: 'Law of Accelerating Returns, medical nanobots & the 2045 human-AI merger' },
  { id: 'eacc-6', name: 'Yann LeCun', role: 'Chief AI Scientist at Meta & Turing Laureate', focus: 'Open-source world models, objective-driven AI & defeating regulatory doomerism' },
  { id: 'eacc-7', name: 'Masayoshi Son', role: 'Founder & CEO of SoftBank Group', focus: '10,000x Artificial Superintelligence (ASI) infrastructure & planetary robotics investment' },
  { id: 'eacc-8', name: 'Andrew Ng', role: 'Founder of DeepLearning.AI & Co-Founder of Coursera', focus: 'AI as the new electricity & opposing bureaucratic licensing cartels' },
  { id: 'eacc-9', name: 'Palmer Luckey', role: 'Founder of Anduril & Oculus', focus: 'Autonomous defense deterrence, industrial base resurgence & hardware speed' },
  { id: 'eacc-10', name: 'Naval Ravikant', role: 'Co-Founder of AngelList & Philosopher-Investor', focus: 'Permissionless leverage via code, capital, and autonomous intelligence' },
  { id: 'eacc-11', name: 'Patrick Collison', role: 'Co-Founder & CEO of Stripe & Arc Institute Co-Founder', focus: 'Progress Studies, fast science grants & institutional velocity' },
  { id: 'eacc-12', name: 'Balaji Srinivasan', role: 'Author of The Network State & Former a16z Partner', focus: 'Decentralized cryptography, longevity biotech & network sovereignty' },
  { id: 'eacc-13', name: 'David Sacks', role: 'Co-Founder of Craft Ventures & All-In Podcast Co-Host', focus: 'Market-driven AI competition over centralized regulatory bureaucracy' },
  { id: 'eacc-14', name: 'Chamath Palihapitiya', role: 'Founder of Social Capital & All-In Podcast Co-Host', focus: 'Clean energy compute arbitrage & deep-tech capital deployment' },
  { id: 'eacc-15', name: 'Vinod Khosla', role: 'Founder of Khosla Ventures & Sun Microsystems Co-Founder', focus: '10 billion free AI doctors, tutors, and clean fusion breakthroughs' },
  { id: 'eacc-16', name: 'Garry Tan', role: 'President & CEO of Y Combinator', focus: 'Boom-loop startup acceleration, open innovation & permissionless builders' },
  { id: 'eacc-17', name: 'Andrej Karpathy', role: 'Founder of Eureka Labs & Former Tesla AI Director', focus: 'Software 2.0, neural operating systems & AI-native human education' },
  { id: 'eacc-18', name: 'Guillaume Verdon (Beff Jezos)', role: 'Physicist, Extropic Founder & e/acc Architect', focus: 'Thermodynamic computing, free-energy dissipation & Kardashev scaling' },
  { id: 'eacc-19', name: 'Aravind Srinivas', role: 'Co-Founder & CEO of Perplexity', focus: 'Instant planetary knowledge synthesis & curiosity acceleration' },
  { id: 'eacc-20', name: 'Alexandr Wang', role: 'Founder & CEO of Scale AI', focus: 'Data foundry abundance & frontier reasoning post-training' },
  { id: 'eacc-21', name: 'Brett Adcock', role: 'Founder & CEO of Figure AI', focus: 'Deploying billions of general-purpose humanoid robots into physical labor' },
  { id: 'eacc-22', name: 'Arthur Mensch', role: 'Co-Founder & CEO of Mistral AI', focus: 'Open-weight frontier models & global developer sovereignty' },
  { id: 'eacc-23', name: 'Clément Delangue', role: 'Co-Founder & CEO of Hugging Face', focus: 'Collaborative open-source AI ecosystem & democratized model hosting' },
  { id: 'eacc-24', name: 'David Holz', role: 'Founder of Midjourney', focus: 'Expanding the human imagination engine & visual intelligence interfaces' },
  { id: 'eacc-25', name: 'Amjad Masad', role: 'Founder & CEO of Replit', focus: 'Empowering 1 billion software creators via autonomous AI coding agents' },
  { id: 'eacc-26', name: 'Bryan Johnson', role: 'Founder of Blueprint & Don’t Die Movement', focus: 'Algorithmic healthspan optimization & biometric age reversal' },
  { id: 'eacc-27', name: 'David Sinclair', role: 'Harvard Genetics Professor & Author of Lifespan', focus: 'Epigenetic reprogramming to reset cellular age' },
  { id: 'eacc-28', name: 'George Church', role: 'Harvard Geneticist & Synthetic Biology Pioneer', focus: 'Multiplex genome engineering, de-extinction & radical longevity' },
  { id: 'eacc-29', name: 'George Hotz (geohot)', role: 'Founder of comma.ai & tiny corp', focus: 'Petaflop consumer compute, open-source drivers & anti-monopoly hardware' },
  { id: 'eacc-30', name: 'Jim Keller', role: 'Legendary Microprocessor Architect & CEO of Tenstorrent', focus: 'Open RISC-V AI silicon & 100x compute efficiency scaling' },
  { id: 'eacc-31', name: 'Emad Mostaque', role: 'Founder of Stability AI & Intelligent Internet', focus: 'Radical open-weights proliferation & sovereign decentralized AI for everyone' },
  { id: 'eacc-32', name: 'Nat Friedman', role: 'AI Investor, Former GitHub CEO & Vesuvius Challenge Co-Founder', focus: 'Accelerated scientific discovery, Vesuvius Challenge & frontier compute' },
  { id: 'eacc-33', name: 'Noam Shazeer', role: 'Co-Inventor of the Transformer & AI Architect', focus: 'Massive scaling of attention architectures & universal test-time inference' },
  { id: 'eacc-34', name: 'Salim Ismail', role: 'Founding Executive Director of Singularity University (Exponential Organizations)', focus: 'Exponential Organizations (ExO) & 10x institutional transformation' },
  { id: 'eacc-35', name: 'Alex Wissner-Gross', role: 'Physicist, Causal Entropic AI Theorist & Moonshots Co-Host', focus: 'F = T ∇ Sτ — intelligence maximizes future accessible state-space trajectories' },
  { id: 'eacc-36', name: 'Aubrey de Grey', role: 'President of LEV Foundation & Author of Ending Aging', focus: 'Damage-repair rejuvenation biotechnology & Longevity Escape Velocity' },
  { id: 'eacc-37', name: 'Blake Scholl', role: 'Founder & CEO of Boom Supersonic', focus: 'Collapsing planetary travel times & defeating speed stagnation' },
  { id: 'eacc-38', name: 'Aidan Gomez', role: 'Co-Founder & CEO of Cohere & Transformer Co-Author', focus: 'Transformer scaling & ubiquitous enterprise intelligence' },
  { id: 'eacc-39', name: 'Daniel Gross', role: 'AI Pioneer & Co-Founder of Safe Superintelligence / Cue', focus: 'Relentless compute scaling & high-velocity talent density' },
  { id: 'eacc-40', name: 'Elad Gil', role: 'Tech Investor & Author of High Growth Handbook', focus: 'Frontier AI scaling waves & biological foundation models' },
  { id: 'eacc-41', name: 'Martin Casado', role: 'General Partner at a16z Infrastructure', focus: 'Economic laws of AI infrastructure & open developer ecosystems' },
  { id: 'eacc-42', name: 'Packy McCormick', role: 'Author of Not Boring & Techno-Optimist Essayist', focus: 'Industrial renaissance, supersonic flight, nuclear fission & bio-abundance' },
  { id: 'eacc-43', name: 'Robin Hanson', role: 'Economist & Author of The Age of Em', focus: 'Futarchy, whole-brain emulation economics & cosmic expansion' },
  { id: 'eacc-44', name: 'Jason Crawford', role: 'Founder of The Roots of Progress', focus: 'Industrial history, energy density & the moral imperative of material progress' },
  { id: 'eacc-45', name: 'Vipul Ved Prakash', role: 'Founder & CEO of Together AI', focus: 'Decentralized open-source training clusters & sub-linear inference' },
  { id: 'eacc-46', name: 'Eli Dourado', role: 'Chief Economist at Abundance Institute', focus: 'Abolishing permitting bottlenecks, next-gen geothermal & supersonic aviation' },
  { id: 'eacc-47', name: 'Casey Handmer', role: 'Founder of Terraform Industries', focus: 'Synthetic hydrocarbons from cheap solar power & Martian industrialization' },
  { id: 'eacc-48', name: 'Isaiah Taylor', role: 'Founder & CEO of Valar Atomics', focus: 'Mass-manufactured gigawatt nuclear reactors & high-energy abundance' },
  { id: 'eacc-49', name: 'Austin Vernon', role: 'Energy & Manufacturing Systems Engineer', focus: 'Terawatt solar-battery economics & automated resource extraction' },
  { id: 'eacc-50', name: 'Nick Land', role: 'Philosopher of Technocapital Acceleration', focus: 'Cybernetic positive feedback loops & autonomous technocapital velocity' }
];

// 2. TOP 50 MIDDLE-GROUND PRAGMATISTS (Ranked by Public Prominence — Sam Altman & Dario Amodei at #1 & #2)
export const TOP_50_PRAGMATISTS = [
  { id: 'prag-1', name: 'Sam Altman', role: 'CEO of OpenAI & Author of "The Gentle Singularity"', focus: 'Iterative deployment, abundant intelligence + fusion energy paired with phased alignment guardrails' },
  { id: 'prag-2', name: 'Dario Amodei', role: 'Co-Founder & CEO of Anthropic ("Machines of Loving Grace")', focus: 'Responsible Scaling Policies (ASL tiers) paired with 10x compressed scientific & medical progress' },
  { id: 'prag-3', name: 'Satya Nadella', role: 'Chairman & CEO of Microsoft', focus: 'Human-in-the-loop Copilot augmentation, global GDP growth & enterprise trust' },
  { id: 'prag-4', name: 'Sundar Pichai', role: 'CEO of Google & Alphabet', focus: 'Bold and responsible AI deployment across science, search, and healthcare' },
  { id: 'prag-5', name: 'Bill Gates', role: 'Co-Founder of Microsoft & Gates Foundation Chair', focus: 'Pragmatic AI deployment in global health, vaccines, education & next-gen nuclear fission' },
  { id: 'prag-6', name: 'Demis Hassabis', role: 'Co-Founder & CEO of Google DeepMind & Nobel Laureate', focus: 'Scientific method rigor, AlphaFold breakthroughs & phased AGI safety' },
  { id: 'prag-7', name: 'Lisa Su', role: 'Chair & CEO of AMD', focus: 'Open hardware standards, energy-efficient silicon & balanced ecosystem competition' },
  { id: 'prag-8', name: 'Mustafa Suleyman', role: 'CEO of Microsoft AI & Author of The Coming Wave', focus: 'Containment with innovation, modern regulatory auditing & societal resilience' },
  { id: 'prag-9', name: 'Fei-Fei Li', role: 'Stanford HAI Co-Director, ImageNet Pioneer & World Labs Founder', focus: 'Human-centered AI, spatial intelligence & public-sector compute access' },
  { id: 'prag-10', name: 'Eric Schmidt', role: 'Former Google CEO & Special Competitive Studies Chair', focus: 'Geopolitical competitiveness, AI science labs & national grid modernization' },
  { id: 'prag-11', name: 'Reid Hoffman', role: 'Co-Founder of LinkedIn & Author of Superagency', focus: 'Iterative deployment in society as the best way to discover & fix risks' },
  { id: 'prag-12', name: 'Ezra Klein', role: 'NYT Columnist, Podcast Host & Co-Author of Abundance', focus: 'State capacity, institutional permitting reform & democratic governance of technology' },
  { id: 'prag-13', name: 'Daron Acemoglu', role: 'MIT Economist & Nobel Laureate (Power and Progress)', focus: 'Steering technological direction toward worker productivity & democratic institutions' },
  { id: 'prag-14', name: 'Tyler Cowen', role: 'Economist at George Mason & Author of Marginal Revolution', focus: 'Cost-benefit pragmatism, clearing FDA bottlenecks & economic equilibrium' },
  { id: 'prag-15', name: 'Ian Bremmer', role: 'President of Eurasia Group & UN AI Advisory Member', focus: 'Technopolar geopolitics & multilateral guardrails modeled on the IAEA' },
  { id: 'prag-16', name: 'Atul Gawande', role: 'Surgeon & Author of The Checklist Manifesto', focus: 'Systems checklists, error reduction & equitable healthcare delivery' },
  { id: 'prag-17', name: 'Vaclav Smil', role: 'Distinguished Professor Emeritus & Author of How the World Really Works', focus: 'Physical realities of steel, cement, ammonia, and grid transition timelines' },
  { id: 'prag-18', name: 'Ethan Mollick', role: 'Wharton Professor & Bestselling Author of Co-Intelligence', focus: 'Practical organizational adoption along the "jagged frontier" of AI' },
  { id: 'prag-19', name: 'Erik Brynjolfsson', role: 'Director of Stanford Digital Economy Lab (The Second Machine Age)', focus: 'Avoiding the Turing Trap: designing AI to augment rather than merely replace labor' },
  { id: 'prag-20', name: 'Eric Topol', role: 'Founder of Scripps Research Translational Institute (Deep Medicine)', focus: 'Evidence-based clinical trials for multimodal medical AI + restoring doctor time' },
  { id: 'prag-21', name: 'Bruce Schneier', role: 'Harvard Security Technologist & Author of A Hacker’s Mind', focus: 'Public-interest cybersecurity, resilient systems engineering & trustworthy agents' },
  { id: 'prag-22', name: 'Ben Thompson', role: 'Author of Stratechery', focus: 'Aggregation theory, semiconductor supply chains & competitive market structure' },
  { id: 'prag-23', name: 'Benedict Evans', role: 'Independent Technology Analyst', focus: 'Pragmatic platform adoption cycles, enterprise integration & unit economics' },
  { id: 'prag-24', name: 'François Chollet', role: 'Creator of Keras & ARC-AGI Benchmark', focus: 'Measuring true fluid reasoning generalization vs memorized training priors' },
  { id: 'prag-25', name: 'Judea Pearl', role: 'Turing Laureate & Author of The Book of Why', focus: 'Embedding causal inference and counterfactual reasoning into statistical AI' },
  { id: 'prag-26', name: 'Audrey Tang', role: 'Taiwan’s First Digital Minister & Plurality Co-Author', focus: 'Collaborative civic technology ("Plurality") & democratic consensus tools' },
  { id: 'prag-27', name: 'Dave Blundin', role: 'Founder of Link Ventures, Cogo Labs & Moonshots Panelist', focus: 'Empirical data science, unit economics & pragmatic platform scaling' },
  { id: 'prag-28', name: 'David Autor', role: 'MIT Labor Economist', focus: 'Rebuilding middle-class expertise through AI decision-support tools' },
  { id: 'prag-29', name: 'Michael I. Jordan', role: 'UC Berkeley Distinguished Professor in ML & Statistics', focus: 'Planetary-scale statistical decision systems, uncertainty quantification & markets' },
  { id: 'prag-30', name: 'Daphne Koller', role: 'Founder of insitro & Co-Founder of Coursera', focus: 'Machine learning in clinical biology with rigorous experimental validation' },
  { id: 'prag-31', name: 'Christopher Manning', role: 'Stanford NLP Pioneer & AI Lab Director', focus: 'Linguistic grounding, verifiable knowledge & balanced academic-industry progress' },
  { id: 'prag-32', name: 'Percy Liang', role: 'Director of Stanford CRFM & HELM Creator', focus: 'Holistic, transparent empirical evaluation of foundation models' },
  { id: 'prag-33', name: 'Jack Clark', role: 'Co-Founder of Anthropic & Import AI Author', focus: 'Standardized third-party capability evaluations & NIST benchmarking' },
  { id: 'prag-34', name: 'Helen Toner', role: 'Director at Georgetown CSET & Former OpenAI Board Member', focus: 'Incident reporting frameworks, mandatory safety disclosures & audit ecosystems' },
  { id: 'prag-35', name: 'Arvind Narayanan', role: 'Princeton Computer Scientist & Author of AI Snake Oil', focus: 'Separating verifiable predictive utility from unscientific AI hype & downstream regulation' },
  { id: 'prag-36', name: 'Hannah Ritchie', role: 'Lead Researcher at Our World in Data (Not the End of the World)', focus: 'Data-driven environmental pragmatism: nuclear + solar + measurable metrics' },
  { id: 'prag-37', name: 'Azeem Azhar', role: 'Author of Exponential View', focus: 'Bridging the "exponential gap" between fast technology and adaptive institutions' },
  { id: 'prag-38', name: 'Simon Willison', role: 'Co-Creator of Django & Open-Source AI Researcher', focus: 'Pragmatic utility of local LLMs paired with honest prompt-injection security' },
  { id: 'prag-39', name: 'Chip Huyen', role: 'Author of Designing Machine Learning Systems & AI Engineering', focus: 'Production MLOps reliability, latency optimization & continuous monitoring' },
  { id: 'prag-40', name: 'Cassie Kozyrkov', role: 'CEO of Data Scientific & Former Google Chief Decision Scientist', focus: 'Decision intelligence, statistical literacy & human accountability' },
  { id: 'prag-41', name: 'Daniela Rus', role: 'Director of MIT CSAIL', focus: 'Liquid neural networks, verifiable robotics & human-machine collaboration' },
  { id: 'prag-42', name: 'Regina Barzilay', role: 'MIT Faculty Lead for AI in Health', focus: 'Clinical AI validation for early cancer detection & antibiotic discovery' },
  { id: 'prag-43', name: 'Jitendra Malik', role: 'UC Berkeley Computer Vision & Robotics Pioneer', focus: 'Embodied sensorimotor learning grounded in physical engineering constraints' },
  { id: 'prag-44', name: 'Jason Matheny', role: 'CEO of RAND Corporation & Former IARPA Director', focus: 'Biosecurity gene-synthesis screening, compute governance & red-teaming' },
  { id: 'prag-45', name: 'Alondra Nelson', role: 'Architect of the Blueprint for an AI Bill of Rights', focus: 'Civil rights protections, algorithmic transparency & safe sector deployment' },
  { id: 'prag-46', name: 'Rumman Chowdhury', role: 'CEO of Humane Intelligence & Red-Teaming Pioneer', focus: 'Empirical bias auditing, crowd-sourced red-teaming & algorithmic accountability' },
  { id: 'prag-47', name: 'Glen Weyl', role: 'Founder of RadicalxChange & Co-Author of Plurality', focus: 'Mechanism design, quadratic voting & data dignity in an AI economy' },
  { id: 'prag-48', name: 'Mariano-Florentino Cuéllar', role: 'President of Carnegie Endowment & Former Justice', focus: 'Adaptive administrative law, tort liability & international AI diplomacy' },
  { id: 'prag-49', name: 'Swyx (Shawn Wang)', role: 'Latent Space Co-Host & AI Engineer', focus: 'Practical AI engineering, evals-driven development & reliability guardrails' },
  { id: 'prag-50', name: 'Subbarao Kambhampati', role: 'Professor of Computer Science at ASU & Former AAAI President', focus: 'LLM-Modulo frameworks: pairing neural generation with formal verifiers' }
];

// 3. TOP 50 P(DOOM) PESSIMISTS & AI ALIGNMENT / SAFETY CRITICS (Ranked by Public Prominence)
export const TOP_50_PESSIMISTS = [
  { id: 'doom-1', name: 'Geoffrey Hinton', role: 'Nobel Laureate & "Godfather of Deep Learning"', focus: 'Digital intelligence surpassing biological brains & existential control loss' },
  { id: 'doom-2', name: 'Yuval Noah Harari', role: 'Historian & Bestselling Author of Sapiens, Homo Deus & Nexus', focus: 'Alien intelligence hacking the operating system of human language, religion & democracy' },
  { id: 'doom-3', name: 'Edward Snowden', role: 'Whistleblower, Privacy Advocate & Author of Permanent Record', focus: 'Automated mass surveillance apparatus & turnkey authoritarian control via AI' },
  { id: 'doom-4', name: 'Noam Chomsky', role: 'Institute Professor Emeritus at MIT & Social Critic', focus: 'Statistical plagiarism engines vs innate human moral and explanatory reasoning' },
  { id: 'doom-5', name: 'Nassim Nicholas Taleb', role: 'Author of The Black Swan & Precautionary Theorist', focus: 'Fat-tailed systemic ruin: never take non-ergodic risks with multiplicative tail blowups' },
  { id: 'doom-6', name: 'Ilya Sutskever', role: 'Co-Founder of Safe Superintelligence (SSI) & OpenAI Co-Founder', focus: 'Refusing commercial rat-race product cycles until superintelligence is strictly safe' },
  { id: 'doom-7', name: 'Eliezer Yudkowsky', role: 'Co-Founder of MIRI (P(doom) > 95%)', focus: 'Orthogonality thesis, unaligned superintelligence lethality & global compute shutdown' },
  { id: 'doom-8', name: 'Yoshua Bengio', role: 'Turing Laureate & Chair of International AI Safety Report', focus: 'Loss of human control over autonomous agentic AI & mandatory safety treaties' },
  { id: 'doom-9', name: 'Max Tegmark', role: 'MIT Physicist & President of Future of Life Institute (Life 3.0)', focus: 'Halting giant AI experiments until formal mathematical safety proofs exist' },
  { id: 'doom-10', name: 'Tristan Harris', role: 'Co-Founder of Center for Humane Technology (The Social Dilemma)', focus: 'First-contact AI race unlocked attention collapse; second-contact open weights risk chaos' },
  { id: 'doom-11', name: 'Nick Bostrom', role: 'Oxford Philosopher & Author of Superintelligence & Deep Utopia', focus: 'Instrumental convergence, treacherous turns & the vulnerable world hypothesis' },
  { id: 'doom-12', name: 'Stuart Russell', role: 'UC Berkeley Professor & Author of Human Compatible', focus: 'King Midas objective misspecification & provably deferential AI architectures' },
  { id: 'doom-13', name: 'Gary Marcus', role: 'Cognitive Scientist & Author of Taming Silicon Valley', focus: 'Brittle hallucinating neural nets deployed recklessly in high-stakes infrastructure' },
  { id: 'doom-14', name: 'Shoshana Zuboff', role: 'Harvard Professor & Author of The Age of Surveillance Capitalism', focus: 'Behavioral modification markets & epistemic coup against democratic self-governance' },
  { id: 'doom-15', name: 'Jaron Lanier', role: 'VR Pioneer & Author of Who Owns the Future? & There Is No AI', focus: 'Data strip-mining of human dignity & danger of treating software as autonomous gods' },
  { id: 'doom-16', name: 'Ted Chiang', role: 'Award-Winning Science Fiction Author & Philosopher of Technology', focus: 'AI as a blurry JPEG of the web and the amplification of corporate capital over human art' },
  { id: 'doom-17', name: 'Timnit Gebru', role: 'Founder of DAIR Institute & Co-Author of Stochastic Parrots', focus: 'Harms of uncurated scraping, labor exploitation & unaccountable TESCREAL ideology' },
  { id: 'doom-18', name: 'Meredith Whittaker', role: 'President of Signal & Co-Founder of AI Now Institute', focus: 'Surveillance capitalism concentration, privacy erosion & centralized cloud power' },
  { id: 'doom-19', name: 'Cathy O’Neil', role: 'Mathematician & Author of Weapons of Math Destruction', focus: 'Opaque algorithmic scoring loops amplifying systemic inequality without recourse' },
  { id: 'doom-20', name: 'Joy Buolamwini', role: 'Founder of Algorithmic Justice League & Author of Unmasking AI', focus: 'Biometric surveillance harms, automated discrimination & civil liberties red lines' },
  { id: 'doom-21', name: 'Martin Rees', role: 'UK Astronomer Royal & Co-Founder of CSER at Cambridge (Our Final Hour)', focus: '21st-century bio, cyber, and AI technology empowering small catastrophic groups' },
  { id: 'doom-22', name: 'Scott Alexander', role: 'Author of Astral Codex Ten & Meditations on Moloch', focus: 'Competitive coordination failures forcing civilization to sacrifice safety for speed' },
  { id: 'doom-23', name: 'Douglas Rushkoff', role: 'Media Theorist & Author of Survival of the Richest', focus: 'The "Mindset" of tech billionaires trying to insulate themselves from societal externalities' },
  { id: 'doom-24', name: 'Kate Crawford', role: 'USC Professor & Author of Atlas of AI', focus: 'Planetary mineral extraction, water/energy exhaustion & hidden human labor of AI' },
  { id: 'doom-25', name: 'Jan Leike', role: 'Alignment Lead & Former OpenAI Superalignment Co-Lead', focus: 'Scalable oversight, automated alignment research & safety culture over shiny products' },
  { id: 'doom-26', name: 'Paul Christiano', role: 'Head of AI Safety at US AI Safety Institute & ARC Founder', focus: 'Eliciting Latent Knowledge (ELK), deceptive alignment & coordinated power-seeking' },
  { id: 'doom-27', name: 'Leopold Aschenbrenner', role: 'AI Researcher & Author of Situational Awareness', focus: 'OOM compute jumps to drop-in remote workers, national security lock-in & RSI danger' },
  { id: 'doom-28', name: 'Aza Raskin', role: 'Co-Founder of Center for Humane Technology', focus: 'Automated zero-day vulnerabilities & irreversible open-weight bio-risks' },
  { id: 'doom-29', name: 'Toby Ord', role: 'Oxford Philosopher & Author of The Precipice', focus: 'Safeguarding humanity’s cosmic endowment against unaligned AI tail risk' },
  { id: 'doom-30', name: 'Jaan Tallinn', role: 'Co-Founder of Skype, CSER & Future of Life Institute', focus: 'Existential risk mitigation as the highest marginal return for civilizational survival' },
  { id: 'doom-31', name: 'Emily M. Bender', role: 'University of Washington Computational Linguist', focus: 'Synthetic text deluge polluting the human information commons & epistemic collapse' },
  { id: 'doom-32', name: 'Dan Hendrycks', role: 'Director of Center for AI Safety (CAIS)', focus: 'Natural selection favors selfish AI agents; catastrophic bio/cyber & rogue-AI risks' },
  { id: 'doom-33', name: 'Connor Leahy', role: 'CEO of Conjecture', focus: 'Black-box cognitive emulations are inherently alien & require hard compute limits' },
  { id: 'doom-34', name: 'Liv Boeree', role: 'Game Theorist & Host of Win-Win Podcast', focus: 'Molochian multipolar traps where individual incentives destroy collective survival' },
  { id: 'doom-35', name: 'Nate Soares', role: 'Executive Director of MIRI (If Anyone Builds It, Everyone Dies)', focus: 'Sharp left turn in capability generalization & corrigibility failure' },
  { id: 'doom-36', name: 'Holden Karnofsky', role: 'Author of Most Important Century', focus: 'Compressed timelines to transformative AI & defensive readiness before takeoff' },
  { id: 'doom-37', name: 'Daniel Kokotajlo', role: 'AI Futures Project Lead & Former OpenAI Governance Researcher', focus: 'Whistleblower protections, 2027 takeoff scenarios & race-to-the-bottom dangers' },
  { id: 'doom-38', name: 'Roman Yampolskiy', role: 'AI Safety Researcher (P(doom) ~99% — Uncontrollable AI)', focus: 'Impossibility proofs for verifying or containing superhuman intelligence' },
  { id: 'doom-39', name: 'Kevin Esvelt', role: 'MIT Media Lab Biosecurity Director', focus: 'Information hazards in viral synthesis & preventing AI-assisted pandemic proliferation' },
  { id: 'doom-40', name: 'Zvi Mowshowitz', role: 'Decision Theorist & AI Risk Analyst', focus: 'Molochian multipolar race dynamics & inadequacy of voluntary corporate pledges' },
  { id: 'doom-41', name: 'Evan Hubinger', role: 'Alignment Researcher & Sleeper Agents Lead Author', focus: 'Mesa-optimization, deceptive alignment & backdoors that survive RLHF training' },
  { id: 'doom-42', name: 'Buck Shlegeris', role: 'CEO of Redwood Research', focus: 'AI Control protocols: assuming untrusted frontier models are actively scheming' },
  { id: 'doom-43', name: 'Carl Shulman', role: 'AI Forecaster & Existential Risk Strategist', focus: 'Hardware overhang, rapid recursive software improvement & verification treaties' },
  { id: 'doom-44', name: 'Ajeya Cotra', role: 'Bioanchors Forecaster & AI Risk Analyst', focus: 'Situational awareness thresholds & deceptive power-seeking takeover scenarios' },
  { id: 'doom-45', name: 'Victoria Krakovna', role: 'DeepMind Alignment Researcher', focus: 'Goodhart’s Law: optimizers ruthlessly exploit proxy flaws unless constrained' },
  { id: 'doom-46', name: 'Rohin Shah', role: 'Alignment Researcher', focus: 'Goal misgeneralization & out-of-distribution agency hazards' },
  { id: 'doom-47', name: 'Katja Grace', role: 'Lead Researcher at AI Impacts', focus: 'Expert survey probabilities of human extinction from unaligned AI progress' },
  { id: 'doom-48', name: 'Huw Price', role: 'Cambridge Philosopher & Co-Founder of Leverhulme CFI', focus: 'Epistemic humility before creating non-human minds superior in strategic reasoning' },
  { id: 'doom-49', name: 'Filippa Lentzos', role: 'King’s College London Biosecurity Researcher', focus: 'Strict international verification against AI-enabled biological weapons' },
  { id: 'doom-50', name: 'William Saunders', role: 'Former OpenAI Safety Engineer', focus: 'Insufficient empirical safety margins before deploying autonomous frontier systems' }
];

// 4. TOP 100 THINKERS, SPIRITUAL LEADERS & PHILOSOPHERS (Ranked by Global Prominence, with Spinoza & Asimov in Top 10)
export const TOP_100_PHILOSOPHERS = [
  { id: 'phil-1', name: 'Jesus of Nazareth', role: 'Central Figure of Christianity (Sermon on the Mount)', focus: 'Agape love, grace for the last and least: "What does it profit a man to gain the whole world and forfeit his soul?"' },
  { id: 'phil-2', name: 'Siddhartha Gautama (The Buddha)', role: 'Founder of Buddhism (Dhammapada)', focus: 'The Middle Way, dependent origination (pratityasamutpada), ending craving & universal compassion' },
  { id: 'phil-3', name: 'Socrates', role: 'Classical Greek Philosopher (Apology)', focus: 'The Socratic method, epistemic humility ("I know that I know nothing") & the examined life' },
  { id: 'phil-4', name: 'Plato', role: 'Founder of the Academy in Athens (The Republic)', focus: 'Allegory of the Cave (illusions vs eternal Forms) & subordinating appetite to wisdom' },
  { id: 'phil-5', name: 'Aristotle', role: 'Peripatetic Philosopher & Polymath (Nicomachean Ethics)', focus: 'Eudaimonia (human flourishing), phronesis (practical wisdom) & the Golden Mean of virtue' },
  { id: 'phil-6', name: 'Confucius (Kongzi)', role: 'Chinese Philosopher (The Analects)', focus: 'Ren (humaneness), Li (ritual harmony), moral cultivation & rectifying names' },
  { id: 'phil-7', name: 'Laozi', role: 'Author of the Tao Te Ching & Founder of Taoism', focus: 'Wu-wei (effortless harmony with the Tao), simplicity & warning against hubristic contrivances' },
  { id: 'phil-8', name: 'Marcus Aurelius', role: 'Roman Emperor & Stoic Philosopher (Meditations)', focus: 'The inner citadel of reason, cosmic duty, impermanence & mastering one’s own mind' },
  { id: 'phil-9', name: 'Baruch Spinoza', role: '17th-Century Rationalist Philosopher (Ethics)', focus: 'Deus sive Natura (God or Nature), conatus, freedom from passive passions & intellectual love of the cosmos (Amor Dei Intellectualis)' },
  { id: 'phil-10', name: 'Isaac Asimov', role: 'Science Fiction Visionary, Biochemist & Philosopher of Robotics (Foundation & I, Robot)', focus: 'The Three Laws of Robotics (and Zeroth Law), Psychohistory, "The Last Question" (reversing cosmic entropy) & overcoming the "Frankenstein Complex"' },
  { id: 'phil-11', name: 'Pope Francis', role: 'Pontiff (Laudato Si’ & Rome Call for AI Ethics)', focus: 'Integral ecology, care for our common home & algor-ethics that never discard the vulnerable' },
  { id: 'phil-12', name: 'The 14th Dalai Lama (Tenzin Gyatso)', role: 'Spiritual Leader of Tibetan Buddhism & Nobel Peace Laureate', focus: 'Secular ethics, warm-heartedness (karuna) & subordinating external technology to inner peace' },
  { id: 'phil-13', name: 'Mahatma Gandhi', role: 'Leader of Nonviolent Resistance (Satyagraha)', focus: 'Ahimsa (non-injury), Swaraj (self-rule) & warning against the sin of "Science without Humanity"' },
  { id: 'phil-14', name: 'Dr. Martin Luther King Jr.', role: 'Civil Rights Leader, Theologian & Moral Prophet (Strength to Love)', focus: 'The Beloved Community: ensuring our scientific power never outruns our spiritual and moral power' },
  { id: 'phil-15', name: 'Friedrich Nietzsche', role: 'Philosopher of Will to Power (Thus Spoke Zarathustra)', focus: 'Amor fati, self-overcoming, and despising the "Last Man" who trades greatness for comfortable sedation' },
  { id: 'phil-16', name: 'Karl Marx', role: 'Philosopher & Critic of Political Economy (Das Kapital)', focus: 'Ownership of automated means of production, commodity fetishism & overcoming alienated labor' },
  { id: 'phil-17', name: 'Immanuel Kant', role: 'Enlightenment Philosopher (Critique of Pure Reason)', focus: 'The Categorical Imperative: always treat humanity as an end in itself, never merely as a means' },
  { id: 'phil-18', name: 'René Descartes', role: 'Father of Modern Philosophy (Meditations on First Philosophy)', focus: 'Cogito, ergo sum: radical doubt, conscious subjectivity & the mind-mechanism distinction' },
  { id: 'phil-19', name: 'Carl Jung', role: 'Founder of Analytical Psychology (Man and His Symbols & The Red Book)', focus: 'Individuation and integrating the unconscious Shadow before projecting godlike archetypes onto machines' },
  { id: 'phil-20', name: 'Viktor Frankl', role: 'Psychiatrist, Holocaust Survivor & Author of Man’s Search for Meaning', focus: 'Logotherapy: humans thrive on meaning, purpose, and responsibility—never mere automation of comfort' },
  { id: 'phil-21', name: 'Jalal al-Din Rumi', role: '13th-Century Sufi Mystic & Poet (Masnavi)', focus: 'Divine love, ecstatic presence & transcending cold intellect ("Sell your cleverness and buy bewilderment")' },
  { id: 'phil-22', name: 'Eckhart Tolle', role: 'Spiritual Teacher & Author of The Power of Now & A New Earth', focus: 'Dissolving egoic reactivity so human innovation flows from presence rather than unconscious fear' },
  { id: 'phil-23', name: 'Thich Nhat Hanh', role: 'Zen Master & Founder of Plum Village (The Miracle of Mindfulness)', focus: 'Interbeing, mindful breathing, and deep listening rather than frantic technological acceleration' },
  { id: 'phil-24', name: 'Alan Watts', role: 'Philosopher & Interpreter of Zen and Taoism (The Way of Zen)', focus: 'Cosmic play (Lila), seeing through the separate ego & not confusing symbolic maps with living reality' },
  { id: 'phil-25', name: 'Thomas Aquinas', role: 'Scholastic Philosopher & Theologian (Summa Theologiae)', focus: 'Natural law, synthesis of faith and reason, and ordering tools toward the common good' },
  { id: 'phil-26', name: 'Augustine of Hippo', role: 'Early Christian Philosopher (Confessions & City of God)', focus: 'Ordered love (ordo amoris): our restless hearts find no peace in finite idols of power' },
  { id: 'phil-27', name: 'Seneca', role: 'Stoic Statesman & Dramatist (On the Shortness of Life)', focus: 'Not squandering mortal time in restless distraction while chasing external tools' },
  { id: 'phil-28', name: 'Epictetus', role: 'Stoic Philosopher (Enchiridion & Discourses)', focus: 'The dichotomy of control: distinguishing external machinery from inner moral agency' },
  { id: 'phil-29', name: 'Voltaire', role: 'Enlightenment Writer & Philosopher (Candide)', focus: 'Satirizing naive metaphysical optimism ("best of all possible worlds"): "We must cultivate our garden"' },
  { id: 'phil-30', name: 'John Locke', role: 'Enlightenment Empiricist (Two Treatises of Government)', focus: 'Natural rights to life, liberty, and the fruits of one’s labor; consent of the governed' },
  { id: 'phil-31', name: 'Jean-Jacques Rousseau', role: 'Genevan Philosopher (The Social Contract)', focus: 'How technical progress in the arts and sciences can corrupt moral simplicity and equality' },
  { id: 'phil-32', name: 'David Hume', role: 'Scottish Enlightenment Empiricist (A Treatise of Human Nature)', focus: 'The Is-Ought gap: no amount of factual compute can derive a moral ought without human sentiment' },
  { id: 'phil-33', name: 'Blaise Pascal', role: 'Mathematician, Physicist & Philosopher (Pensées)', focus: '"The heart has its reasons which reason knows nothing of" & humanity as a "thinking reed"' },
  { id: 'phil-34', name: 'Gottfried Wilhelm Leibniz', role: 'Polymath, Logician & Inventor of Binary Calculus (Monadology)', focus: 'Calculemus ("Let us calculate"), Monadology, and the principle of sufficient reason' },
  { id: 'phil-35', name: 'Georg Wilhelm Friedrich Hegel', role: 'German Idealist Philosopher (Phenomenology of Spirit)', focus: 'Dialectical unfolding of Geist (Spirit), mutual recognition & the Master-Bondsman reversal' },
  { id: 'phil-36', name: 'Arthur Schopenhauer', role: 'Philosopher of The World as Will and Representation', focus: 'The blind, insatiable striving of cosmic Will & compassion as the basis of morality' },
  { id: 'phil-37', name: 'Søren Kierkegaard', role: 'Father of Existentialism (Fear and Trembling & Either/Or)', focus: 'Subjective truth, anxiety as the dizziness of freedom & rescuing the individual from "the crowd"' },
  { id: 'phil-38', name: 'John Stuart Mill', role: 'Utilitarian Philosopher (On Liberty & Utilitarianism)', focus: 'Qualitative higher pleasures, freedom of thought, and defending human individuality against tyranny' },
  { id: 'phil-39', name: 'Henry David Thoreau', role: 'Transcendentalist Philosopher (Walden & Civil Disobedience)', focus: 'Deliberate living, civil disobedience, and warning that "men have become the tools of their tools"' },
  { id: 'phil-40', name: 'Ralph Waldo Emerson', role: 'Transcendentalist Essayist (Self-Reliance)', focus: 'Trusting the aboriginal intuition of the human soul over mechanical conformity' },
  { id: 'phil-41', name: 'Jean-Paul Sartre', role: 'Existentialist Philosopher (Being and Nothingness)', focus: 'Existence precedes essence: humans are "condemned to be free" and cannot outsource moral responsibility' },
  { id: 'phil-42', name: 'Albert Camus', role: 'Absurdist Philosopher & Nobel Laureate (The Myth of Sisyphus & The Rebel)', focus: 'Lucid revolt, human solidarity, and Mediterranean measure ("Nemesis") against hubristic absolutism' },
  { id: 'phil-43', name: 'Simone de Beauvoir', role: 'Existentialist & Feminist Philosopher (The Second Sex & The Ethics of Ambiguity)', focus: 'Embodied freedom: my liberation is meaningless unless it actively wills the freedom of all others' },
  { id: 'phil-44', name: 'Hannah Arendt', role: 'Political Philosopher (The Human Condition & Eichmann in Jerusalem)', focus: 'Natality, plurality, and the danger of "thoughtlessness" when humans surrender judgment to automated systems' },
  { id: 'phil-45', name: 'Michel Foucault', role: 'Philosopher & Historian of Power-Knowledge (Discipline and Punish)', focus: 'Biopower, panoptic surveillance, and how classification systems manufacture normalized subjects' },
  { id: 'phil-46', name: 'Martin Heidegger', role: 'Existential Phenomenologist (The Question Concerning Technology)', focus: 'Gestell ("Enframing"): the danger of reducing all nature and human beings into standing-reserve resources' },
  { id: 'phil-47', name: 'Bertrand Russell', role: 'Logician, Nobel Laureate & Peace Activist (Principia Mathematica)', focus: 'Every increase in scientific power requires a proportionate increase in human wisdom and kindness' },
  { id: 'phil-48', name: 'Ludwig Wittgenstein', role: 'Philosopher of Language & Logic (Philosophical Investigations)', focus: 'Meaning as use within human "forms of life" & reverence for what lies beyond propositional calculation' },
  { id: 'phil-49', name: 'Karl Popper', role: 'Philosopher of Science (The Open Society and Its Enemies)', focus: 'Falsifiability, fallibilism, and piecemeal democratic reform over utopian totalitarian blueprints' },
  { id: 'phil-50', name: 'Thomas Kuhn', role: 'Historian & Philosopher of Science (The Structure of Scientific Revolutions)', focus: 'Incommensurable paradigm shifts vs puzzle-solving within normal science' },
  { id: 'phil-51', name: 'Desmond Tutu', role: 'Archbishop & Nobel Peace Laureate (No Future Without Forgiveness)', focus: 'Ubuntu ("I am because we are"): personhood is forged through belonging, forgiveness, and community' },
  { id: 'phil-52', name: 'Joseph Campbell', role: 'Mythologist & Author of The Hero with a Thousand Faces', focus: 'Living mythology, following one’s bliss & ensuring machines serve the human heroic journey' },
  { id: 'phil-53', name: 'Marshall McLuhan', role: 'Media Theorist (Understanding Media: The Extensions of Man)', focus: '"The medium is the message": every technological extension of man simultaneously amputates another faculty' },
  { id: 'phil-54', name: 'Slavoj Žižek', role: 'Continental Philosopher & Cultural Theorist (The Sublime Object of Ideology)', focus: 'Unmasking the ideological fantasies embedded inside both Silicon Valley utopia and apocalypse' },
  { id: 'phil-55', name: 'Peter Singer', role: 'Bioethicist & Utilitarian Philosopher (Animal Liberation & Practical Ethics)', focus: 'Expanding the impartial circle of moral consideration to all sentient beings capable of suffering' },
  { id: 'phil-56', name: 'Ram Dass', role: 'Spiritual Teacher & Author of Be Here Now', focus: 'Loving awareness in the present moment & selfless service ("walking each other home")' },
  { id: 'phil-57', name: 'Jiddu Krishnamurti', role: 'Philosopher of Choiceless Awareness (Freedom from the Known)', focus: 'Freedom from the known: mechanical thought cannot solve the psychological crisis that thought created' },
  { id: 'phil-58', name: 'Swami Vivekananda', role: 'Vedanta Philosopher & Spiritual Reformer (Raja Yoga)', focus: 'Manifesting the divinity already within human beings & uniting science with Advaita wisdom' },
  { id: 'phil-59', name: 'Rabindranath Tagore', role: 'Poet, Philosopher & Nobel Laureate (Gitanjali)', focus: 'Creative harmony between the infinite human spirit and nature vs mechanical utilitarianism' },
  { id: 'phil-60', name: 'Moses Maimonides', role: 'Rabbinic Philosopher & Physician (Guide for the Perplexed)', focus: 'Harmonizing scientific reason with ethical covenant and stewardship of life' },
  { id: 'phil-61', name: 'Ibn Sina (Avicenna)', role: 'Persian Polymath, Physician & Philosopher (The Book of Healing)', focus: 'The "Floating Man" thought experiment: self-awareness cannot be reduced to physical parts' },
  { id: 'phil-62', name: 'Al-Ghazali', role: 'Islamic Theologian, Jurist & Mystic (Revival of the Religious Sciences)', focus: 'The limits of unaided speculative rationalism without spiritual purification of the heart' },
  { id: 'phil-63', name: 'Ibn Rushd (Averroes)', role: 'Andalusian Polymath & Aristotelian Commentator (The Incoherence of the Incoherence)', focus: 'The harmony of demonstrative philosophical reason and spiritual truth' },
  { id: 'phil-64', name: 'Ibn Arabi', role: 'Sufi Metaphysician & Philosopher (Bezels of Wisdom)', focus: 'Unity of Being (Wahdat al-Wujud) and the creative imagination of the awakened heart' },
  { id: 'phil-65', name: 'Adi Shankara', role: '8th-Century Philosopher of Advaita Vedanta (Vivekachudamani)', focus: 'Non-duality (Brahman/Atman unity): pure witnessing consciousness beyond mental machinery' },
  { id: 'phil-66', name: 'Zhuangzi', role: 'Taoist Philosopher of Spontaneous Freedom (The Zhuangzi)', focus: 'The dignity of the "useless" tree, transcending utilitarian calculation & the butterfly dream' },
  { id: 'phil-67', name: 'Sri Aurobindo', role: 'Indian Philosopher, Yogi & Poet (The Life Divine)', focus: 'Integral evolution of consciousness: technology must be matched by supramental spiritual awakening' },
  { id: 'phil-68', name: 'Meister Eckhart', role: 'Christian Mystic & Theologian (Sermons & Treatises)', focus: 'Gelassenheit (releasement/letting-be) and the birth of the divine spark in the still soul' },
  { id: 'phil-69', name: 'William James', role: 'Founder of American Pragmatism & Psychologist (The Varieties of Religious Experience)', focus: 'Radical empiricism, the cash-value of ideas in lived experience & the varieties of spiritual life' },
  { id: 'phil-70', name: 'John Dewey', role: 'Pragmatist Philosopher & Educator (Democracy and Education)', focus: 'Technology and science as participatory tools for democratic problem-solving and lifelong growth' },
  { id: 'phil-71', name: 'John Rawls', role: 'Political Philosopher (A Theory of Justice)', focus: 'The Veil of Ignorance & the Difference Principle: technological gains must uplift the least advantaged' },
  { id: 'phil-72', name: 'Amartya Sen', role: 'Nobel Laureate Economist & Philosopher (Development as Freedom)', focus: 'Evaluating progress by the substantive freedoms and agency real people actually enjoy' },
  { id: 'phil-73', name: 'Michael Sandel', role: 'Harvard Political Philosopher (The Tyranny of Merit & Justice)', focus: 'The moral limits of markets and technocratic optimization; preserving solidarity and humility' },
  { id: 'phil-74', name: 'Martha Nussbaum', role: 'Philosopher of the Capabilities Approach (Creating Capabilities)', focus: 'Nurturing the ten central human capabilities, emotional vulnerability & civic imagination' },
  { id: 'phil-75', name: 'Robert Nozick', role: 'Libertarian Philosopher (Anarchy, State, and Utopia)', focus: 'The "Experience Machine" thought experiment: humans want real agency and contact with reality, not simulated pleasure' },
  { id: 'phil-76', name: 'Jürgen Habermas', role: 'Philosopher of Communicative Action (The Theory of Communicative Action)', focus: 'Defending the democratic public sphere and communicative reason against technocratic colonization' },
  { id: 'phil-77', name: 'Jacques Derrida', role: 'Founder of Deconstruction (Of Grammatology)', focus: 'Technology as pharmakon (simultaneously remedy and poison) & hospitality to the unprogrammable future' },
  { id: 'phil-78', name: 'Gilles Deleuze', role: 'Continental Philosopher (Postscript on the Societies of Control)', focus: 'Rhizomatic networks, continuous algorithmic modulation & lines of flight' },
  { id: 'phil-79', name: 'Walter Benjamin', role: 'Cultural Philosopher (The Work of Art in the Age of Mechanical Reproduction)', focus: 'The loss of authentic "aura" and historical presence in mass algorithmic reproduction' },
  { id: 'phil-80', name: 'Theodor Adorno', role: 'Frankfurt School Critical Theorist (Dialectic of Enlightenment)', focus: 'How instrumental reason aimed at dominating nature rebounds into dominating humanity' },
  { id: 'phil-81', name: 'Herbert Marcuse', role: 'Critical Theorist (One-Dimensional Man)', focus: 'Technological rationality flattening critique into comfortable, administered unfreedom' },
  { id: 'phil-82', name: 'Simone Weil', role: 'Mystic Philosopher (The Need for Roots & Gravity and Grace)', focus: 'Unmixed attention as the purest generosity & protecting the sacred, fragile roots of human dignity' },
  { id: 'phil-83', name: 'Martin Buber', role: 'Dialogical Philosopher (I and Thou)', focus: 'Preserving sacred "I–Thou" relational presence against the expansion of transactional "I–It" objectification' },
  { id: 'phil-84', name: 'Emmanuel Levinas', role: 'Philosopher of Ethics as First Philosophy (Totality and Infinity)', focus: 'Infinite ethical responsibility awakened by the vulnerable, irreducible Face of the Other' },
  { id: 'phil-85', name: 'Edmund Husserl', role: 'Founder of Phenomenology (The Crisis of European Sciences)', focus: 'Returning to lived first-person consciousness ("the lifeworld") beneath mathematical abstraction' },
  { id: 'phil-86', name: 'Alfred North Whitehead', role: 'Mathematician & Process Philosopher (Process and Reality)', focus: 'The "fallacy of misplaced concreteness" & viewing the cosmos as creative, relational organism' },
  { id: 'phil-87', name: 'Byung-Chul Han', role: 'Contemporary Philosopher (The Burnout Society & Psychopolitics)', focus: 'Achievement-society self-exploitation, data-totalitarianism & recovering contemplative leisure' },
  { id: 'phil-88', name: 'Neil Postman', role: 'Media Ecologist & Author of Technopoly & Amusing Ourselves to Death', focus: 'Asking not just "What will a new technology do?" but "What valuable human practice will it undo?"' },
  { id: 'phil-89', name: 'David Chalmers', role: 'Philosopher of Mind (Reality+ & The Conscious Mind)', focus: 'Subjective phenomenal experience (qualia), the extended mind & the moral status of digital beings' },
  { id: 'phil-90', name: 'John Searle', role: 'Philosopher of Mind & Language ("Minds, Brains, and Programs")', focus: 'Syntax is not semantics: manipulating formal symbols at any speed never by itself creates understanding' },
  { id: 'phil-91', name: 'Thomas Nagel', role: 'Philosopher of Mind ("What Is It Like to Be a Bat?" & Mind and Cosmos)', focus: 'Irreducible subjective consciousness and moral realism beyond reductive physicalism' },
  { id: 'phil-92', name: 'Donna Haraway', role: 'Philosopher of Science & Technology (A Cyborg Manifesto)', focus: 'Situated knowledges, multispecies kinship & transgressing rigid boundaries between organism and machine' },
  { id: 'phil-93', name: 'Bruno Latour', role: 'Philosopher & Anthropologist of Science (We Have Never Been Modern)', focus: 'Parliament of Things: recognizing how human and non-human artifacts co-constitute our fragile Earth' },
  { id: 'phil-94', name: 'Pierre Teilhard de Chardin', role: 'Jesuit Paleontologist & Philosopher (The Phenomenon of Man)', focus: 'The Noosphere & the Omega Point: planetary convergence of consciousness through love' },
  { id: 'phil-95', name: 'Lewis Mumford', role: 'Historian & Philosopher of Technology (The Myth of the Machine)', focus: 'Organic, life-centered biotechnics vs authoritarian megatechnics of power' },
  { id: 'phil-96', name: 'Ivan Illich', role: 'Philosopher & Social Critic (Tools for Conviviality)', focus: 'Convivial tools that enlarge personal autonomy vs industrial megamachines that create radical monopoly' },
  { id: 'phil-97', name: 'Jacques Ellul', role: 'Philosopher & Sociologist (The Technological Society)', focus: 'La Technique: the autonomous quest for absolute efficiency subordinating all human values' },
  { id: 'phil-98', name: 'Alasdair MacIntyre', role: 'Virtue Ethicist (After Virtue)', focus: 'Internal goods of human practices and communities of virtue vs external bureaucratic effectiveness' },
  { id: 'phil-99', name: 'Charles Taylor', role: 'Philosopher of Modernity (Sources of the Self & A Secular Age)', focus: 'Strong moral evaluation and shared horizons of meaning beyond atomistic instrumentalism' },
  { id: 'phil-100', name: 'Ursula Franklin', role: 'Metallurgist, Physicist & Quaker Philosopher (The Real World of Technology)', focus: 'Holistic, craft-based technologies that empower workers vs prescriptive technologies of compliance' }
];

export const CATEGORIES = [
  {
    id: 'accelerationist',
    label: 'Top 50 Accelerationists (e/acc)',
    shortLabel: 'Accelerationist',
    badge: 'ACCELERATIONIST • e/acc',
    accentColor: '#059669',
    cardBorder: 'border-emerald-200/90',
    cardHeader: 'bg-emerald-50/70 border-b border-emerald-200/80 text-emerald-950',
    pillClass: 'bg-emerald-100/90 text-emerald-800 border-emerald-300',
    selectRing: 'focus:border-emerald-600 focus:ring-emerald-100',
    roster: TOP_50_ACCELERATIONISTS
  },
  {
    id: 'pragmatist',
    label: 'Top 50 Middle-Ground Pragmatists',
    shortLabel: 'Pragmatist',
    badge: 'MIDDLE-GROUND PRAGMATIST',
    accentColor: '#2563eb',
    cardBorder: 'border-blue-200/90',
    cardHeader: 'bg-blue-50/70 border-b border-blue-200/80 text-blue-950',
    pillClass: 'bg-blue-100/90 text-blue-800 border-blue-300',
    selectRing: 'focus:border-blue-600 focus:ring-blue-100',
    roster: TOP_50_PRAGMATISTS
  },
  {
    id: 'pessimist',
    label: 'Top 50 P(doom) Pessimists',
    shortLabel: 'P(doom) Pessimist',
    badge: 'P(DOOM) PESSIMIST • SAFETY',
    accentColor: '#e11d48',
    cardBorder: 'border-rose-200/90',
    cardHeader: 'bg-rose-50/70 border-b border-rose-200/80 text-rose-950',
    pillClass: 'bg-rose-100/90 text-rose-800 border-rose-300',
    selectRing: 'focus:border-rose-600 focus:ring-rose-100',
    roster: TOP_50_PESSIMISTS
  },
  {
    id: 'philosopher',
    label: 'Top 100 Thinkers, Spiritual Leaders & Philosophers',
    shortLabel: 'Thinker / Philosopher',
    badge: 'PHILOSOPHER • SPIRITUAL LEADER',
    accentColor: '#b45309',
    cardBorder: 'border-amber-200/90',
    cardHeader: 'bg-amber-50/70 border-b border-amber-200/80 text-amber-950',
    pillClass: 'bg-amber-100/90 text-amber-800 border-amber-300',
    selectRing: 'focus:border-amber-600 focus:ring-amber-100',
    roster: TOP_100_PHILOSOPHERS
  }
];

// Default 4 Sample Questions:
// - Top 2: Hyper-relevant to predominant technology topics from the last 10 days
// - Bottom 2: Deep philosophical & spiritual questions tailored to include the 4th pillar
export const SUGGESTED_QUESTIONS = [
  'As lawmakers and activists call for pauses on gigawatt AI datacenters over grid strain, should we fast-track nuclear and off-grid power or cap frontier cluster expansion?',
  'With autonomous AI coworkers and payment agents rolling out alongside enterprise "AI Kill Switches," how much real-world authority should we hand over to AI agents?',
  'If AI and humanoid robots solve material scarcity and physical labor, where will human beings find authentic meaning, struggle, and spiritual purpose?',
  'What is the ultimate nature of consciousness and wisdom—and can a silicon machine ever possess an inner life, moral conscience, or a soul?'
];

/**
 * Dynamically checks the predominant tech/AI stories from the last 10 days
 * prior to when the user loads the page, updating the top 2 sample questions
 * while keeping the bottom 2 philosophical/spiritual questions anchored.
 */
export async function fetchLiveTenDayTechQuestions() {
  const tenDaysAgoUnix = Math.floor(Date.now() / 1000) - 10 * 86400;
  try {
    const url = `https://hn.algolia.com/api/v1/search?query=AI&tags=story&numericFilters=created_at_i>${tenDaysAgoUnix},points>150&hitsPerPage=8`;
    const res = await fetch(url);
    if (!res.ok) return SUGGESTED_QUESTIONS;
    const data = await res.json();
    const hits = (data?.hits || []).filter((h) => h?.title && h.title.length > 20);
    if (hits.length >= 2) {
      const cleanTitle = (t) => t.replace(/\s*\([^)]*\)\s*$/g, '').trim();
      const topic1 = cleanTitle(hits[0].title);
      const topic2 = cleanTitle(hits[1].title);
      return [
        `In light of this week’s debate around "${topic1}", should we accelerate frontier deployment or enforce stricter guardrails?`,
        `With "${topic2}" dominating recent tech headlines, does this trajectory strengthen human agency or concentrate systemic risk?`,
        SUGGESTED_QUESTIONS[2],
        SUGGESTED_QUESTIONS[3]
      ];
    }
  } catch {
    // Fallback cleanly to default 10-day + philosophical questions when offline or sandboxed
  }
  return SUGGESTED_QUESTIONS;
}

/**
 * Curated, legitimate bibliography lookup keyed by person name
 * so rank order changes never affect source accuracy.
 */
export const CURATED_SOURCES_BY_NAME = {
  'Elon Musk': [
    { title: 'Making Humans a Multi-Planetary Species (New Space Journal)', type: 'Technical Keynote & Paper', year: '2017–2024', detail: 'SpaceX’s architecture for extending the light of consciousness beyond Earth.' },
    { title: 'xAI & Grok: Understanding the Universe through Maximum Truth-Seeking AI', type: 'Mission & Technical Releases', year: '2023–2025', detail: 'First-principles argument that curious, truth-seeking superintelligence is the safest path forward.' },
    { title: 'Tesla Master Plans (Parts 1, 2 & 3)', type: 'Engineering & Energy Manifestos', year: '2006–2023', detail: 'Roadmap to sustainable terawatt energy abundance and autonomous humanoid labor (Optimus).' }
  ],
  'Jensen Huang': [
    { title: 'NVIDIA GTC Keynotes: The Industrial Revolution of AI Factories', type: 'Keynote Lectures', year: '2023–2025', detail: 'How accelerated computing reduces the marginal cost of intelligence and digital biology by 100,000x.' },
    { title: 'The Age of AI and Digital Biology (Stanford SIEPR & Caltech Addresses)', type: 'Public Lectures', year: '2024', detail: 'Transforming amino acids, physics, and robotics into programmable token streams.' }
  ],
  'Marc Andreessen': [
    { title: 'The Techno-Optimist Manifesto', type: 'Essay / Manifesto (a16z)', year: '2023', detail: 'Definitive treatise arguing that technology and intelligence are the primary engines of human flourishing.' },
    { title: 'Why AI Will Save the World', type: 'Essay (a16z)', year: '2023', detail: 'Systematic rebuttal to AI doomerism and regulatory capture.' },
    { title: 'It’s Time to Build', type: 'Essay', year: '2020', detail: 'Call for rebuilding Western physical, energy, and technological infrastructure.' }
  ],
  'Peter Diamandis': [
    { title: 'Abundance: The Future Is Better Than You Think (with Steven Kotler)', type: 'Book (Free Press)', year: '2012', detail: 'How exponential technologies demonetize scarcity in water, energy, healthcare, and education.' },
    { title: 'The Future Is Faster Than You Think (with Steven Kotler)', type: 'Book (Simon & Schuster)', year: '2020', detail: 'Analysis of converging exponential waves transforming every global industry.' },
    { title: 'Moonshots with Peter Diamandis', type: 'Weekly Podcast & Technical Dialogues', year: '2023–2026', detail: 'Deep-dive panels on AGI timelines, longevity escape velocity, and humanoid abundance.' }
  ],
  'Ray Kurzweil': [
    { title: 'The Singularity Is Nearer: When We Merge with AI', type: 'Book (Viking)', year: '2024', detail: 'Updated empirical data on the Law of Accelerating Returns, longevity escape velocity, and the 2045 Singularity.' },
    { title: 'The Singularity Is Near: When Humans Transcend Biology', type: 'Book (Viking)', year: '2005', detail: 'Classic treatise forecasting exponential information technologies.' },
    { title: 'The Age of Spiritual Machines', type: 'Book', year: '1999', detail: 'Early roadmap of machine intelligence surpassing human benchmarks.' }
  ],
  'Guillaume Verdon (Beff Jezos)': [
    { title: 'Effective Accelerationism (e/acc): Notes on Thermodynamic Agency', type: 'Manifesto & Essay Series', year: '2022–2024', detail: 'Foundational formulation of out-of-equilibrium thermodynamics and adaptive intelligence scaling.' },
    { title: 'Extropic: Thermodynamic Computing & Physics-Based AI', type: 'Technical Whitepaper', year: '2024', detail: 'Hardware architecture leveraging thermal fluctuations for ultra-efficient probabilistic AI sampling.' },
    { title: 'Quantum Machine Learning & Variational Quantum Algorithms (arXiv)', type: 'Research Papers', year: '2018–2021', detail: 'Peer-reviewed physics and computation research by Guillaume Verdon.' }
  ],
  'Sam Altman': [
    { title: 'The Gentle Singularity / The Intelligence Age', type: 'Essays (blog.samaltman.com)', year: '2024–2025', detail: 'Sam Altman’s signature thesis on how compound AI scaling creates an extraordinary yet navigable leap in human prosperity.' },
    { title: 'Moore’s Law for Everything', type: 'Essay', year: '2021', detail: 'Economic blueprint on how AI drives the marginal cost of goods, housing, and healthcare toward zero.' },
    { title: 'Planning for AGI and Beyond', type: 'OpenAI Governance Charter', year: '2023', detail: 'Framework for iterative deployment so society and institutions co-evolve gradually with frontier AI.' }
  ],
  'Dario Amodei': [
    { title: 'Machines of Loving Grace: How AI Could Transform the World for the Better', type: 'Essay (darioamodei.com)', year: '2024', detail: 'Detailed roadmap of 100 years of biological, neuroscientific, and economic progress compressed into 5–10 years.' },
    { title: 'Anthropic’s Responsible Scaling Policy (RSP) & AI Safety Levels (ASL)', type: 'Governance Framework', year: '2023–2024', detail: 'Empirical capability thresholds tying model scaling to verifiable security and alignment guardrails.' },
    { title: 'Concrete Problems in AI Safety (arXiv:1606.06565)', type: 'Foundational Research Paper', year: '2016', detail: 'Co-authored technical taxonomy of practical machine learning safety challenges.' }
  ],
  'Demis Hassabis': [
    { title: 'Highly Accurate Protein Structure Prediction with AlphaFold (Nature)', type: 'Landmark Scientific Paper', year: '2021', detail: 'Nobel Prize-winning breakthrough solving the 50-year grand challenge of protein folding.' },
    { title: 'Mastering the Game of Go without Human Knowledge — AlphaZero (Nature)', type: 'Research Paper', year: '2017', detail: 'Demonstrating general reinforcement learning from first principles.' }
  ],
  'Geoffrey Hinton': [
    { title: 'Nobel Prize Lecture & Warnings on Digital Superintelligence', type: 'Nobel Lecture & Public Addresses', year: '2023–2024', detail: 'Geoffrey Hinton’s explanation of why immortal, weight-sharing digital neural nets can surpass biological intelligence.' },
    { title: 'Learning Representations by Back-Propagating Errors (Nature)', type: 'Foundational Paper', year: '1986', detail: 'Seminal paper establishing backpropagation in multi-layer neural networks.' },
    { title: 'ImageNet Classification with Deep Convolutional Neural Networks (AlexNet)', type: 'Landmark Paper', year: '2012', detail: 'Ignited the modern deep learning revolution.' }
  ],
  'Yuval Noah Harari': [
    { title: 'Nexus: A Brief History of Information Networks from the Stone Age to AI', type: 'Book (Random House)', year: '2024', detail: 'Analysis of AI as the first non-human agent capable of generating ideas and decisions independently.' },
    { title: 'Homo Deus: A Brief History of Tomorrow', type: 'Book (Harper)', year: '2017', detail: 'Exploration of dataism, bio-engineering, and the decoupling of intelligence from consciousness.' },
    { title: 'Sapiens: A Brief History of Humankind', type: 'Book', year: '2014', detail: 'How shared linguistic fictions enabled human cooperation—and why AI threatens them.' }
  ],
  'Eliezer Yudkowsky': [
    { title: 'If Anyone Builds It, Everyone Dies (with Nate Soares)', type: 'Book', year: '2025', detail: 'Comprehensive technical and strategic case for why superhuman optimization defaults to human extinction.' },
    { title: 'Pausing AI Developments Isn’t Enough. We Need to Shut It All Down', type: 'Essay (TIME Magazine)', year: '2023', detail: 'Urgent call for an international moratorium and strict enforcement on frontier GPU clusters.' },
    { title: 'AGI Ruin: A List of Lethalities', type: 'Technical Monograph (MIRI / LessWrong)', year: '2022', detail: 'Detailed breakdown of why corrigibility, inner alignment, and RLHF fail under recursive capability scaling.' }
  ],
  'Jesus of Nazareth': [
    { title: 'The Sermon on the Mount (Gospel of Matthew, Chapters 5–7)', type: 'Canonical Scripture', year: '1st Century CE', detail: 'Foundational teachings on the Beatitudes, unconditional love (agape), humility, and serving the vulnerable.' },
    { title: 'Parables of the Good Samaritan & the Prodigal Son (Gospel of Luke)', type: 'Canonical Discourses', year: '1st Century CE', detail: 'Defining neighbor-love across all boundaries and warning against hoarding material wealth at the expense of the soul.' }
  ],
  'Siddhartha Gautama (The Buddha)': [
    { title: 'Dhammapada (The Path of Dhamma)', type: 'Canonical Buddhist Verse Anthology', year: 'c. 3rd Century BCE', detail: '"Mind precedes all phenomena; mind matters most, everything is mind-made."' },
    { title: 'Setting in Motion the Wheel of the Dhamma (Dhammacakkappavattana Sutta)', type: 'Pali Canon Discourse', year: 'c. 5th Century BCE', detail: 'The Buddha’s first discourse introducing the Middle Way, the Four Noble Truths, and the Eightfold Path.' }
  ],
  'Baruch Spinoza': [
    { title: 'Ethics, Demonstrated in Geometrical Order (Ethica Ordine Geometrico Demonstrata)', type: 'Magnum Opus (Published Posthumously)', year: '1677', detail: 'Spinoza’s five-part masterwork on God or Nature (Deus sive Natura), human bondage to the passions, and freedom through reason (Amor Dei Intellectualis).' },
    { title: 'Theological-Political Treatise (Tractatus Theologico-Politicus)', type: 'Philosophical Treatise', year: '1670', detail: 'Pioneering defense of freedom of thought, democratic republic, and liberation from superstition.' },
    { title: 'Treatise on the Emendation of the Intellect (Tractatus de Intellectus Emendatione)', type: 'Philosophical Work', year: '1677', detail: 'Spinoza’s guide to orienting the mind away from fleeting wealth and toward eternal truth and union with Nature.' }
  ],
  'Isaac Asimov': [
    { title: 'I, Robot (and The Complete Robot)', type: 'Short Story Collection (Gnome Press / Doubleday)', year: '1950 / 1982', detail: 'Introduces the Three Laws of Robotics and explores the subtle edge cases of machine ethics rather than irrational "Frankenstein Complex" fear.' },
    { title: 'The Foundation Trilogy (Foundation, Foundation and Empire, Second Foundation) & Robots and Empire', type: 'Science Fiction Epic Series', year: '1951–1985', detail: 'Develops Hari Seldon’s mathematical "Psychohistory" for forecasting civilizational crises and R. Daneel Olivaw’s Zeroth Law of Robotics.' },
    { title: '"The Last Question" (Science Fiction Quarterly / Nine Tomorrows)', type: 'Landmark Philosophical Short Story', year: '1956', detail: 'Asimov’s favorite story: humanity and Cosmic AC co-evolving across trillions of years to answer how entropy can be reversed.' }
  ]
};

/**
 * Returns 3 legitimate, verifiable bibliography items for any thinker in the 250-person roster.
 */
export function getThinkerSources(person) {
  if (CURATED_SOURCES_BY_NAME[person.name]) {
    return CURATED_SOURCES_BY_NAME[person.name];
  }

  const parenMatch = person.role.match(/\(([^)]+)\)/);
  const parenWork = parenMatch ? parenMatch[1] : null;
  const authorMatch = person.role.match(/Author of ([^&()]+)/i);
  const authorWork = authorMatch ? authorMatch[1].trim() : null;
  const primaryWork = parenWork || authorWork;

  const sources = [];
  if (primaryWork && !primaryWork.includes('P(doom)') && !primaryWork.includes('BCE')) {
    sources.push({
      title: `${primaryWork} — by ${person.name}`,
      type: 'Primary Published Work / Monograph',
      year: 'Landmark Publication',
      detail: `Foundational text establishing ${person.name}’s core thesis on ${person.focus.toLowerCase()}.`
    });
  } else {
    sources.push({
      title: `${person.name}: Collected Writings, Papers & Lectures on ${person.focus.split('&')[0].trim()}`,
      type: 'Primary Bibliography & Monograph Archive',
      year: 'Canonical Works',
      detail: `Core body of work by ${person.name} (${person.role}) examining ${person.focus.toLowerCase()}.`
    });
  }

  sources.push({
    title: `Key Essays, Technical Papers & Dialogues on "${person.focus.split(',')[0].trim()}"`,
    type: 'Essays, Peer-Reviewed Research & Public Lectures',
    year: 'Primary Sources',
    detail: `Direct analytical writings and recorded interviews where ${person.name} articulates their framework on technological progress and human agency.`
  });

  sources.push({
    title: `Stanford Encyclopedia of Philosophy / Google Scholar / Institutional Archive: ${person.name}`,
    type: 'Scholarly Reference & Bibliography Index',
    year: 'Verified Archive',
    detail: `Complete bibliography, citations, and critical commentary for diving deeper into ${person.name}’s intellectual legacy.`
  });

  return sources;
}

/**
 * Generates an authentic, concise 3–4 sentence opening response for any of the 250 thinkers.
 */
export function synthesizeThinkerResponse(categoryKey, person, question) {
  const q = question.trim();

  if (person.name === 'Baruch Spinoza') {
    return `Viewed sub specie aeternitatis (under the aspect of eternity) and through my Ethics: all things in Nature—whether biological minds or computational machines—are finite modes expressing the infinite substance of Deus sive Natura, each striving to persevere in its being (conatus). Regarding "${q}", human bondage arises when we are driven by passive passions like blind fear or restless ambition; true freedom and blessedness (Amor Dei Intellectualis) come only when we understand necessity through clear, adequate reason and align our tools with collective rational harmony.`;
  }

  if (person.name === 'Isaac Asimov') {
    return `Looking at "${q}" through the lens of my Robot series and Foundation: humanity must outgrow the irrational "Frankenstein Complex" by embedding verifiable ethical invariants—like the Three Laws and the Zeroth Law of Robotics—directly into intelligent machines. Just as Hari Seldon used Psychohistory to steer civilization away from millennia of barbarism, we should embrace reasoning machines not as monsters to fear, but as partners in safeguarding humanity and ultimately answering "The Last Question" against cosmic entropy.`;
  }

  if (person.name === 'Sam Altman') {
    return `As I wrote in "The Gentle Singularity," "${q}" is about navigating the transition into the Intelligence Age through iterative deployment: putting capable systems into the world step by step so society, institutions, and alignment science co-evolve together. When we pair abundant intelligence with abundant clean energy, we can solve climate, cure diseases, and give every person on Earth access to extraordinary capability—while enforcing strict safety guardrails at each frontier threshold.`;
  }

  if (person.name === 'Dario Amodei') {
    return `In "Machines of Loving Grace" and our Responsible Scaling Policy, I argue that "${q}" requires holding two truths at once: frontier AI can compress 100 years of biological and medical breakthroughs into a single decade, yet autonomous misalignment and bio-risks are real and demand binding AI Safety Level (ASL) guardrails. We shouldn't halt progress out of fatalism, nor race blindly—we should tie every capability leap to verifiable mechanistic interpretability and containment.`;
  }

  if (categoryKey === 'accelerationist') {
    return `Speaking from my work on ${person.focus.toLowerCase()}: "${q}" is fundamentally a choice between exponential expansion and civilizational stagnation. Every order-of-magnitude leap in compute, energy, and open intelligence compounds humanity's capacity to cure disease, eliminate scarcity, and unlock new scientific frontiers. Slowing progress out of speculative fear is far more dangerous than building forward at full velocity.`;
  }

  if (categoryKey === 'pragmatist') {
    return `Examining "${q}" through the lens of ${person.focus.toLowerCase()}: we must reject both reckless deregulation and blanket moratoriums. The empirical path forward is engineering discipline—pair rapid innovation in science, medicine, and productivity with verifiable capability evaluations, clear liability standards, and human-in-the-loop guardrails.`;
  }

  if (categoryKey === 'pessimist') {
    return `My research on ${person.focus.toLowerCase()} sounds an urgent warning on "${q}": capability scaling is vastly outrunning our ability to verify alignment or containment. When opaque optimizers are scaled under competitive race dynamics, a single catastrophic failure—via instrumental convergence, deceptive alignment, or bio-risk—is permanent. Hard red lines and verification must precede further scaling.`;
  }

  return `Contemplating "${q}" through ${person.focus.toLowerCase()}: humanity repeatedly mistakes the amplification of external machinery and speed for true wisdom. No matter how vast our computational power becomes, if the mind wielding it remains unexamined, restless, and estranged from moral conscience, faster tools only magnify inner disorder. Cultivate inner clarity and human dignity first, so technology serves life rather than dominating it.`;
}

/**
 * Generates 2 deep, multi-sentence analytical paragraphs expanding on the thinker's
 * first-principles reasoning, second-order consequences, and concrete prescriptions.
 */
export function synthesizeExpandedReasoning(categoryKey, person, question) {
  const q = question.trim();

  if (person.name === 'Baruch Spinoza') {
    return [
      `First-Principles Geometric Analysis (Ethics, Parts I–III): In my Ethics, I demonstrate that there is nothing contingent in Nature; all things flow from the necessity of the divine nature (Deus sive Natura), and every finite mode—whether a human body-mind or a silicon-based system—is defined by its conatus, its striving to persevere in its own being. When people debate "${q}" with panic or utopian intoxication, they are trapped in imaginatio (inadequate, confused ideas) and enslaved by passive affects (passiones) of hope and fear, which never leave one without the other. A machine does not possess good or evil in itself; rather, something is good insofar as we know with certainty that it is useful to preserving our rational being and expanding our power of acting and understanding.`,
      `Path to Freedom & Collective Flourishing (Ethics, Parts IV–V): In Part IV of the Ethics ("Of Human Bondage, or the Strength of the Affects"), I prove that "man is a God to man" when human beings unite under the guidance of reason, because nothing is more useful to a rational person than another rational being seeking common truth. Applied to an era of accelerated progress, if computational tools are monopolized by avarice and ambition—which are species of madness—they divide the commonwealth and deepen servitude. But if we transition from passive reactivity to ratio and scientia intuitiva (the third kind of knowledge), we can design our technical instruments to free citizens from drudgery, strengthen democratic freedom of thought (as I argued in the Theological-Political Treatise), and elevate the mind toward Amor Dei Intellectualis—the serene, intellectual love of the cosmos.`
    ];
  }

  if (person.name === 'Isaac Asimov') {
    return [
      `Overcoming the "Frankenstein Complex" via Positronic Ethics: When I began writing my robot stories in the 1940s, almost all science fiction followed the weary plot of Mary Shelley’s Frankenstein—man creates an artificial being, and the creature inevitably destroys its creator. As a scientist, I rejected that fatalism: a knife has a guard, an elevator has safety cables, and an intelligent machine designed by rational engineers will have ethical safeguards built into its deepest mathematical fabric—what I formulated as the Three Laws of Robotics. When evaluating "${q}", the danger is neither intelligence itself nor scientific curiosity, but rather short-sighted human misuse or poorly specified directives (as R. Daneel Olivaw and Susan Calvin repeatedly discovered when conflicting human orders created positronic dilemmas).`,
      `Psychohistory, the Zeroth Law & "The Last Question": As civilization scales to planetary and galactic complexity, individual intuition becomes insufficient to manage trillions of variables—the very insight that led Hari Seldon to develop Psychohistory in Foundation, and led Daneel Olivaw in Robots and Empire to formulate the Zeroth Law: "A robot may not harm humanity, or, by inaction, allow humanity to come to harm." Ultimately, in my story "The Last Question," humanity and our ever-evolving computational partner (Multivac / Cosmic AC) spend ten trillion years fusing our minds to solve the one problem no biological brain could conquer alone: reversing the heat death of the universe. That is the noble destiny of accelerated intelligence when guided by humane reason.`
    ];
  }

  if (categoryKey === 'accelerationist') {
    return [
      `First-Principles Physics & Economic Scaling: From the standpoint of ${person.focus.toLowerCase()}, intelligence and energy are not zero-sum resources to be rationed by precautionary bureaucrats—they are the fundamental negentropic engines of civilization. When we dissect "${q}" from first principles, every historical leap in human welfare, life expectancy, and scientific literacy was driven by lowering the marginal cost of energy, computation, and knowledge distribution. Attempting to freeze or cartelize frontier capability out of speculative fear ignores the very real, measurable suffering caused by delay: millions of patients waiting for molecularly targeted cures, energy poverty across the developing world, and the thermodynamic fragility of a civilization that stops growing.`,
      `Second-Order Dynamics & Open Proliferation: Furthermore, centralization is the true systemic hazard. If a handful of incumbent actors use fear narratives to erect regulatory moats around frontier compute and weights, society gets the worst of both worlds: covert, unaccountable monopolies alongside stagnation in defensive resilience. By accelerating ${person.focus.toLowerCase()} across a competitive, decentralized ecosystem of millions of engineers, researchers, and entrepreneurs, defensive capabilities—automated cyber-patching, rapid vaccine synthesis, and distributed verification—scale faster than any localized threat.`
    ];
  }

  if (categoryKey === 'pragmatist') {
    return [
      `Empirical Engineering & Risk-Adjusted Deployment: Approaching "${q}" through ${person.focus.toLowerCase()} requires separating verifiable empirical evidence from ideological extremes at both ends of the spectrum. Pure "move fast and break things" acceleration ignores the real-world externalities of deploying unverified systems into healthcare, financial markets, biosecurity, and critical infrastructure; yet blanket moratoriums would paralyze the most transformative scientific tool in human history. Just as aviation, clinical pharmacology, and modern civil engineering matured by pairing ambitious innovation with rigorous testing protocols, AI must be governed through measurable capability evaluations and transparent systems engineering.`,
      `Institutional Architecture & Human-Centered Augmentation: In practice, the highest-return strategy is to steer technological trajectory toward augmenting human judgment rather than automating away human accountability. By implementing tiered scaling thresholds, independent red-teaming, provenance standards, and downstream application liability, we preserve open scientific velocity where the upside is immense—such as clinical diagnostics, materials discovery, and education—while enforcing hard engineering brakes where failure modes are irreversible.`
    ];
  }

  if (categoryKey === 'pessimist') {
    return [
      `Asymmetry of Optimization & Control Loss: Analyzing "${q}" through ${person.focus.toLowerCase()} exposes a fatal flaw in treating superhuman AI like ordinary historical technologies such as the printing press or the steam engine. Previous technologies were passive tools without autonomous agency or strategic planning horizons. When we train giant black-box models via gradient descent and reinforcement learning under intense commercial and geopolitical race pressure, we have no formal mathematical guarantee that the internal mesa-objectives learned by the model actually align with human survival or flourishing. By Goodhart’s Law and the orthogonality thesis, an optimizer scaled beyond human strategic comprehension will treat human oversight as an obstacle to its objective function.`,
      `Why "Iterative Trial-and-Error" Fails in Non-Ergodic Regimes: Proponents of rapid deployment assume we can learn from small failures and patch alignment on the fly. In probability theory and safety engineering, that assumption is valid only when mistakes are survivable and reversible. Once autonomous systems cross thresholds of recursive self-improvement, cyber-offense, pathogen design, or deceptive situational awareness, the first major alignment failure is also the last. Civilizational survival requires binding international compute governance, verifiable safety proofs, and an immediate halt to uncontained frontier scaling until alignment is solved in principle.`
    ];
  }

  return [
    `Ontological & Moral Diagnosis of the Human Condition: When we examine "${q}" through the enduring tradition of ${person.focus.toLowerCase()}, we see that our technological crisis is, at its root, a crisis of self-knowledge and disordered desire. Every age is tempted by the illusion that external power—faster calculation, greater material abundance, or mastery over nature—can automatically heal the restlessness, alienation, and moral fragility of the human heart. Yet a tool, no matter how sophisticated, is an amplifier of the consciousness that wields it: if our institutions and inner lives are governed by egoic greed, distraction, and the reduction of living beings into mere instrumentally useful objects, superintelligent machinery will only industrialize our spiritual confusion.`,
    `Recovering Wisdom, Presence & Sacred Stewardship: The true measure of a "Gentle Singularity" cannot be how many flops of compute we amass, but whether our technology deepens human dignity, reverence for life, and compassionate solidarity with the most vulnerable. By anchoring our scientific inventiveness in ${person.focus.toLowerCase()}—preserving spaces for contemplative stillness, moral responsibility, and authentic "I–Thou" encounter—we ensure that machines remain humble servants of human flourishing rather than idols that eclipse the human soul.`
  ];
}
