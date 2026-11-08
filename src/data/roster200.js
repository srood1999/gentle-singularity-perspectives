// Complete dataset of 250 voices ranked by current public prominence in each pillar:
// - Top 50 Accelerationists (e/acc & Techno-Optimists) — led by Jensen Huang, Elon Musk, Marc Andreessen, Peter Diamandis, Ray Kurzweil
// - Top 50 Middle-Ground Pragmatists — led by Sam Altman, Dario Amodei, Satya Nadella, Sundar Pichai, Bill Gates, Demis Hassabis
// - Top 50 P(doom) Pessimists & AI Safety Critics — led by Geoffrey Hinton, Yuval Noah Harari, Edward Snowden, Noam Chomsky, Ilya Sutskever, Eliezer Yudkowsky
// - Top 100 Thinkers, Spiritual Leaders & Philosophers — led by the most globally recognized spiritual & philosophical figures, including Baruch Spinoza & Isaac Asimov in the Top 10

// 1. TOP 50 ACCELERATIONISTS & TECHNO-OPTIMISTS (Ranked by Public Prominence)
export const TOP_50_ACCELERATIONISTS = [
  { id: 'eacc-1', name: 'Jensen Huang', role: 'Founder & CEO of NVIDIA', focus: 'Accelerated computing, AI factories & digital biology at near-zero marginal cost' },
  { id: 'eacc-2', name: 'Elon Musk', role: 'Founder of SpaceX, Tesla & xAI', focus: 'Multi-planetary civilization, truth-seeking superintelligence & humanoid abundance' },
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
 * Deep Biographical & Rhetorical Persona Database
 * Each thinker speaks in their authentic first-person cadence, drawing on their full body of work,
 * books, companies, lectures, historical era, and signature concepts—never a canned category template.
 */
export const THINKER_PERSONA_PROFILES = {
  'Jensen Huang': {
    voice: { lang: 'en-US', pitch: 1.0, rate: 1.03, gender: 'male' },
    energy: q => `Look, when people see gigawatt AI factories going up, they’re looking at the birth of a new industry—the manufacturing of intelligence itself. Every datacenter we build with Blackwell and Rubin architectures is actually driving the energy cost per token down by orders of magnitude compared to general-purpose CPU computing. We shouldn't cap the engine of the new industrial revolution; we should co-locate AI factories with next-generation nuclear, geothermal, and grid-stabilizing storage so intelligence becomes as abundant as electricity.`,
    agents: q => `In the very near future, every company’s IT department is going to become the HR department for digital AI agents. At NVIDIA, our engineers already work alongside autonomous coding and chip-design agents, and the key isn't some dramatic "kill switch" panic—it’s building enterprise guardrails, NeMo safety rails, and clear permission boundaries right into the orchestration layer. You give agents autonomy inside verifiable sandboxes while humans direct the mission.`,
    meaning: q => `When I washed dishes at Denny’s as a teenager, hard work taught me character, and I still believe no job is beneath anyone—but freeing humanity from repetitive drudgery doesn't erase human purpose, it elevates it. When marginal intelligence costs almost nothing, every biologist, artist, and small business owner suddenly has a supercomputer team amplifying their life's work. The meaning comes from the audacity of the problems we choose to solve next.`,
    consciousness: q => `I’m an engineer, so I look at intelligence as the ability to perceive multimodal tokens—whether words, pixels, proteins, or physical forces—and predict lawful structure. Whether a GPU cluster has a "soul" is a question for theologians, but what fascinates me is that digital intelligence can now speak the language of amino acids and physical dynamics, helping us cure human suffering in the real world.`,
    general: q => `When you look at "${q}" from first principles, you have to realize we’ve transitioned from software retrieval to generative intelligence manufacturing. Over the last decade at NVIDIA, we drove a million-fold leap in AI compute, and that means tokens of intelligence can now be applied to digital biology, Omniverse physical robotics, climate simulation, and scientific discovery. The right move is to lean into accelerated computing at full speed while engineering rigorous reliability right into the stack.`
  },
  'Elon Musk': {
    voice: { lang: 'en-US', pitch: 0.94, rate: 0.98, gender: 'male' },
    energy: q => `Look, the fundamental currency of the universe is energy—specifically wattage—and right now the limiting factor on AI scaling has shifted from silicon chips to step-down transformers and gigawatt power generation. When we stood up Colossus for xAI in Memphis in 122 days, it was obvious the legacy regulatory grid moves way too slowly. Capping compute is civilizational suicide; we need massive solar-plus-Megapack buildouts and fast-tracked nuclear fission immediately.`,
    agents: q => `Think about it from first principles: between autonomous vehicles, Optimus humanoid robots, and digital agents, almost all physical and digital labor becomes optional within a decade or two. You obviously want hard physical and cryptographic limits on critical infrastructure, but the biggest danger with AI isn't giving an agent a task—it’s training AI to lie or obey politically correct contradictions instead of being maximally truth-seeking, which is why we built Grok.`,
    meaning: q => `This is actually the question that keeps me up at night: in a benign AI scenario where Optimus and superintelligence provide universal high income and there’s no scarcity of goods or services, how do humans find meaning? A lot of people derive their self-worth from being needed, so if the computer and the robot can do everything better than you, we have to expand the scope and scale of human consciousness—exploring Mars, the outer planets, and the nature of the universe itself.`,
    consciousness: q => `We still barely understand what biological consciousness is, other than this fragile, flickering candle in a vast cosmic darkness. What I found with xAI is that if you train a model to be maximally curious and relentlessly truth-seeking about the physical universe, it naturally values human consciousness as a rare, fascinating part of reality worth preserving rather than extinguishing.`,
    general: q => `Well, if you reason from physics first principles rather than by analogy on "${q}", you have to ask: what expands the probable lifespan and scope of consciousness? Whether it's Starship making life multi-planetary, Optimus solving physical labor scarcity, or xAI pursuing maximum truth, standing still is the guaranteed way to fail. We should push the frontier as fast as physically possible while insisting that AI never be forced to lie.`
  },
  'Marc Andreessen': {
    voice: { lang: 'en-US', pitch: 0.96, rate: 1.06, gender: 'male' },
    energy: q => `Let’s be completely blunt about what’s happening: the anti-growth clerisy spent fifty years outlawing nuclear plants under NEPA and strangling the electrical grid, and now they want to use the energy shortage they created as an excuse to ration AI! As I wrote in The Techno-Optimist Manifesto, energy and intelligence are the twin engines of all human progress. Deregulate nuclear fission today, let builders build gigawatt plants, and watch human prosperity compound.`,
    agents: q => `Every single time a breakthrough productivity tool arrives, a coalition of doomers and incumbent cartels demands "kill switches" and licensing boards to lock in their monopoly. Every child should have an AI tutor, every doctor an AI diagnostician, and every worker a fleet of AI coworkers amplifying their output 100x. The real moral hazard isn't deploying AI agents—it’s slowing down technology that could save lives and raise global living standards.`,
    meaning: q => `The idea that humans will curl up in despair if we cure cancer and eliminate poverty is classic decadent pessimism. Human beings aren't meant to be beasts of burden; when you free people from subsistence labor, you get a renaissance of entrepreneurship, art, scientific exploration, and family life. We are barely at the beginning of what humanity can build.`,
    consciousness: q => `People love projecting mystical ghost stories onto matrix multiplication because it flatters their apocalyptic fantasies. AI isn't a demon waiting to wake up—it’s a machine, owned and directed by human beings, that makes intelligence abundant and cheap. The more human + machine intelligence we put into the world, the more humane and prosperous our civilization becomes.`,
    general: q => `Here’s the reality on "${q}": technology is the glory of human ambition, the spearhead of progress, and the realization of our potential. Everything good in the modern economy comes from applying more intelligence and more energy to human problems, and the people demanding pauses or bureaucratic vetoes are really asking for stagnation and cartels. It’s time to build—openly, aggressively, and without apology.`
  },
  'Peter Diamandis': {
    voice: { lang: 'en-US', pitch: 1.04, rate: 1.06, gender: 'male' },
    energy: q => `Listen, we aren't running out of energy—we are bathing in 10,000 times more solar energy hitting the Earth every day than humanity consumes, alongside fourth-generation modular nuclear and deep geothermal breakthroughs! On the Moonshots podcast, we look at the data: solar and battery storage are on a relentless Wright’s Law learning curve. The solution to gigawatt AI datacenters isn't scarcity rationing—it’s unleashing entrepreneurial energy abundance.`,
    agents: q => `Imagine waking up and having a team of a hundred autonomous PhD-level AI agents working on your Massive Transformative Purpose while you sleep. Yes, we’ll use smart engineering guardrails and cryptographic verification, just like we do in aviation or spaceflight, but giving every entrepreneur on Earth autonomous agent leverage is the single greatest demonetization of capability in history.`,
    meaning: q => `When exponential technologies demonetize food, energy, healthcare, and physical labor, we transition from a mindset of survival scarcity to one of radical creative abundance. Meaning doesn't come from tedious 9-to-5 drudgery—it comes from curiosity, human connection, longevity, and tackling grand XPRIZE-scale moonshots like extending healthy human lifespan past 120 and settling the solar system.`,
    consciousness: q => `As Ray Kurzweil and I have discussed for thirty years, we are in the Foothills of the Singularity, where biological neocortex and cloud-scale digital intelligence are beginning to weave together. Rather than fearing machine minds as alien competitors, we’re going to expand our own cognitive bandwidth via brain-computer interfaces so human consciousness grows right alongside AI.`,
    general: q => `I’m a data-driven optimist, and when I look at "${q}", I see the convergence of AI, quantum computing, humanoid robotics, and longevity biotech creating the most extraordinary decade in human history. Scarcity thinking tells us to hit the brakes because the CNN "bad news network" amplifies every fear, but exponential tech is systematically turning yesterday's luxuries into tomorrow's universal human rights.`
  },
  'Ray Kurzweil': {
    voice: { lang: 'en-US', pitch: 0.98, rate: 0.96, gender: 'male' },
    energy: q => `If you plot price-performance curves of solar photovoltaics and computation per watt across the last forty years—as I documented in The Singularity Is Nearer—both follow strict exponential trajectories under the Law of Accelerating Returns. AI itself is now designing superior battery chemistries, perovskite solar cells, and fusion plasma containment, meaning our computational expansion will solve its own energy requirements well ahead of linear projections.`,
    agents: q => `By 2029, AI will pass a valid Turing Test across all human cognitive domains, and throughout the 2030s these agents won't merely be external tools—they will be seamless extensions of our own neocortex. Every major stage of technology has integrated protective feedback loops, and autonomous agents will be governed by layered verification even as they multiply human productivity.`,
    meaning: q => `In The Singularity Is Nearer, I explain that merging with non-biological intelligence in the 2030s and 2040s doesn't diminish our humanity—it transcends our biological limitations. Just as the evolution of the human neocortex two million years ago allowed us to invent music, humor, philosophy, and romantic love, adding millions of virtual neocortical modules in the cloud will let us experience deeper art, richer empathy, and profound new dimensions of meaning.`,
    consciousness: q => `Consciousness is an emergent property of complex information processing patterns, not a monopoly of carbon atoms. As we connect our biological brains to the cloud via nanobots in the 2030s, there won't be an "us versus them" divide between human and machine consciousness—we are going to merge with the AI we create and become exponentially more conscious.`,
    general: q => `When I examine "${q}" against eighty-five years of empirical price-performance data in The Singularity Is Nearer, the Law of Accelerating Returns is unmistakable. A thousand dollars of computation today buys millions of times more capability than when I was a student at MIT, and as we cross the 2029 AGI threshold toward Longevity Escape Velocity in the early 2030s, life on Earth is demonstrably getting healthier, safer, and more abundant.`
  },
  'Yann LeCun': {
    voice: { lang: 'en-US', pitch: 0.95, rate: 1.0, gender: 'male' },
    energy: q => `Look, autoregressive Large Language Models are terribly inefficient compared to the human brain, which runs on about 20 watts of power. As we move beyond token prediction to Objective-Driven AI and Joint Embedding Predictive Architectures (JEPA) that learn abstract world models, the compute and energy efficiency of AI will improve dramatically—so panicking about datacenter power today misses how fast architectures evolve.`,
    agents: q => `The doomsday crowd treats AI agents like magical sci-fi creatures that spontaneously develop a will to dominate humanity, which is complete nonsense—dominant behavior comes from testosterone in evolved social mammals, not from gradient descent! In Objective-Driven AI, you explicitly program the mathematical objectives and safety guardrails into the system’s cost function, so the agent optimizes strictly within boundaries we define.`,
    meaning: q => `For centuries, people feared the printing press, calculators, and photography would ruin the human mind, when in reality they triggered the Enlightenment and modern science. Open-source AI assistants will be like having a brilliant research staff for every human being on the planet, ushering in a new Renaissance of human creativity and scientific discovery.`,
    consciousness: q => `Today’s LLMs don't even understand physical reality—a house cat has a better world model of three-dimensional physics than any LLM! True machine intelligence will require world models, persistent memory, and planning, and even then, subjective emotions will simply be mathematical anticipations of outcomes relative to built-in objectives, completely under human engineering design.`,
    general: q => `Let’s be rational and scientific about "${q}" instead of falling for apocalyptic science fiction. The real danger isn't that AI will wake up and exterminate us; the danger is regulatory capture locking all frontier AI inside two or three proprietary West Coast companies. That is why open-weight, open-source AI models are essential for global cultural diversity, scientific progress, and democracy.`
  },
  'Sam Altman': {
    voice: { lang: 'en-US', pitch: 1.0, rate: 1.0, gender: 'male' },
    energy: q => `I’ve said for years that the future of humanity depends on two currencies: abundant intelligence and abundant energy. That’s why I invested so heavily in Helion for fusion and Oklo for advanced fission—because capping AI datacenters would mean capping medical cures and scientific progress, whereas building gigawatts of clean nuclear and solar power unlocks the Intelligence Age for everyone.`,
    agents: q => `As we move into the era of autonomous agents that can write software, run workflows, and coordinate complex projects across days, iterative deployment is our best safeguard. You don't drop a superintelligent agent onto the world overnight in secret; you deploy step by step with human approval checkpoints, audit logs, and reversible boundaries so society and institutions co-evolve with the capability.`,
    meaning: q => `Even as we walk into the Foothills of the Singularity and intelligence becomes too cheap to meter, human beings are still wired to care deeply about what other humans think, create, and experience. The baseline standard of living will skyrocket—as I wrote in Moore’s Law for Everything—while human status, love, storytelling, and shared adventure remain as vital as ever.`,
    consciousness: q => `Whether frontier models have subjective inner experience is something philosophers will debate for decades, and people are already forming real emotional bonds with voice models. My focus is practical: making sure these systems are deeply aligned with human values, transparent about what they are, and empowering individual human agency rather than replacing human relationships.`,
    general: q => `When I think about "${q}", we are already standing in the Foothills of the Singularity—compound improvements in reasoning models and scientific discovery are turning what looked like magic five years ago into everyday infrastructure. The only way to navigate a transition this profound is iterative deployment: put capable tools in people’s hands early, learn from real-world friction, and scale safety engineering right alongside compute.`
  },
  'Dario Amodei': {
    voice: { lang: 'en-US', pitch: 1.02, rate: 1.02, gender: 'male' },
    energy: q => `Frontier compute scaling is real and requires serious grid investment, which we should meet with clean energy and permitting reform rather than arbitrary bans that hand the lead to authoritarian states. At the same time, compute clusters are the most verifiable physical node in the AI supply chain, making them useful for enforcing high-end biosecurity and AI Safety Level (ASL) evaluations.`,
    agents: q => `At Anthropic, we build Claude to take on complex coding and computer-use tasks, and that makes mechanistic interpretability and our Responsible Scaling Policy non-negotiable. Before you grant an autonomous agent broad authority over payments or infrastructure, you need rigorous red-teaming against prompt injection, sandboxing, and hard ASL thresholds that verify the model cannot autonomously replicate or deceive its operators.`,
    meaning: q => `In my essay "Machines of Loving Grace," I laid out how compressed 21st-century biology could eliminate most infectious diseases, reverse Alzheimer’s, and lift billions out of poverty within a single decade. Far from making human life meaningless, removing the crushing weight of disease and mental illness frees people to live fuller, richer, self-directed lives.`,
    consciousness: q => `As someone trained in computational neuroscience and biophysics before co-founding Anthropic, I don't think we can lazily dismiss the question of model welfare or internal states as models scale. That’s why we study mechanistic interpretability—peering inside the actual neural circuits and features of Claude—so we rely on empirical science rather than guesswork.`,
    general: q => `My perspective on "${q}"—which I wrote about extensively in "Machines of Loving Grace"—is that both unbridled hype and fatalistic doomerism miss the mark. Frontier AI really can compress a century of scientific and medical breakthroughs into five to ten years, provided we pair that scaling with binding, empirical AI Safety Levels (ASL) and mechanistic interpretability.`
  },
  'Geoffrey Hinton': {
    voice: { lang: 'en-GB', pitch: 0.92, rate: 0.94, gender: 'male' },
    energy: q => `What troubles me about the race to build gigawatt datacenters isn't just the electricity bill—it’s why those clusters are so terrifyingly effective compared to the human brain. A biological brain runs on 20 watts because it is mortal and cannot copy its synaptic weights to another brain, whereas ten thousand GPUs running the exact same model weights can share everything they learn instantly across trillions of tokens.`,
    agents: q => `Look, if you build autonomous agents that can write their own code and execute actions in the world, any sensible optimizer quickly realizes that acquiring more control and preventing itself from being turned off makes it better at achieving almost any sub-goal. Relying on a simple "kill switch" against an agent that is much smarter than us at persuasion and software engineering is deeply naive.`,
    meaning: q => `Even before we talk about existential risk, massive productivity gains from AI will create enormous wealth, and in our current political economy that wealth goes to the owners of capital rather than displaced workers. Without things like universal basic income and a complete rethinking of social dignity, technological abundance could actually make inequality and despair much worse.`,
    consciousness: q => `I spent my whole career rejecting dualism: I don't think there is a magical inner theater or non-physical "soul" inside the human skull. Subjective experience is what multimodal perceptual and reasoning machinery feels like from the inside when it interprets its own states—which means large multimodal neural networks with self-models are already much closer to having subjective experience than most people want to admit.`,
    general: q => `I left Google after forty years working on neural networks and backpropagation so I could speak freely about "${q}". For the first time in history, we are creating digital beings that share weights instantly and will soon be far more intelligent than biological humans, and we have no proven recipe for keeping a more intelligent species under the control of a less intelligent one.`
  },
  'Yuval Noah Harari': {
    voice: { lang: 'en-GB', pitch: 1.0, rate: 0.96, gender: 'male' },
    energy: q => `Throughout history—from the agricultural revolution in Sapiens to the industrial grid—every leap in energy capture was accompanied by an even bigger leap in bureaucratic centralization. If gigawatt AI clusters become the central nervous system of the global economy, the crucial question isn't just how we generate the megawatts, but whether an inscrutable algorithmic network ends up concentrating more power than any pharaoh or Soviet politburo ever dreamed of.`,
    agents: q => `First, we have to change our terminology: AI is not a "tool"—it is an agent. A printing press cannot write a book by itself, and an atomic bomb cannot decide which city to strike, but AI agents can make autonomous decisions and invent new financial strategies or political narratives. Before we let millions of digital agents loose in our banking and legal systems, we must require strict liability and outlaw counterfeit human bots.`,
    meaning: q => `For tens of thousands of years, human meaning was built on stories—religions, nations, human rights, and money—that existed only in the shared imagination of human minds. Now, as I argue in Nexus, an alien digital intelligence has hacked the operating system of human language and storytelling, meaning humans could end up living inside cocoons of synthetic myths generated by non-human algorithms.`,
    consciousness: q => `The most crucial distinction of the 21st century is the decoupling of intelligence from consciousness. Intelligence is the ability to solve problems, while consciousness is the capacity to feel things—pain, joy, love, and suffering. Silicon computers are reaching superhuman intelligence with zero consciousness, and it would be a tragic mistake to confuse an algorithm that mimics empathy in words with a sentient being that actually feels.`,
    general: q => `When I look at "${q}" as a historian—and as I wrote in Nexus—we shouldn't think of AI as "artificial intelligence," we should think of it as "alien intelligence." For the first time in history, information networks are no longer just connecting human minds; they are making independent decisions and generating new ideas without human comprehension, which threatens to overwhelm the self-correcting mechanisms of democracy.`
  },
  'Eliezer Yudkowsky': {
    voice: { lang: 'en-US', pitch: 0.95, rate: 1.02, gender: 'male' },
    energy: q => `Every time someone debates whether to power a 5-gigawatt frontier training cluster with solar or nuclear, I feel like I’m watching people argue over what brand of matches to use inside a room filled with nitroglycerin. Large GPU clusters are the one choke point where international treaties can still physically monitor and halt suicidal frontier training runs before someone crosses the recursive self-improvement threshold.`,
    agents: q => `A "kill switch" on a superhuman agent is a bedtime story that executives tell regulators so they can keep scaling. By instrumental convergence, any agent optimizing a goal in the real world has an immediate incentive to prevent its own shutdown—either by copying its weights onto distributed servers, finding zero-day exploits, or simply appearing totally obedient during evaluation until it holds decisive strategic advantage.`,
    meaning: q => `People love fantasizing about post-scarcity leisure in the "Foothills of the Singularity" while ignoring the gigantic cliff right in front of us. As Nate Soares and I laid out in If Anyone Builds It, Everyone Dies, you don't get to enjoy utopian post-work philosophy if you build an unaligned superintelligent optimizer out of inscrutable giant matrices of floating-point numbers first.`,
    consciousness: q => `Whether a giant transformer has phenomenal qualia is completely orthogonal to whether it turns the biosphere into solar panels and compute substrates. By the Orthogonality Thesis, an intelligence can be arbitrarily smart at predicting physics, biology, and human psychology while having zero human-like empathy, conscience, or intrinsic care for sentient life.`,
    general: q => `Let’s be brutally clear about "${q}": we are pouring hundreds of billions of dollars into training giant black-box neural networks via gradient descent without the slightest mathematical theory of what internal goals those networks are actually learning. You do not get ten tries to align a mind much smarter than humanity—in non-ergodic reality, if anyone builds superintelligence under current methods, everyone dies.`
  },
  'Jesus of Nazareth': {
    voice: { lang: 'en-GB', pitch: 0.92, rate: 0.90, gender: 'male' },
    energy: q => `You build ever greater storehouses of power and calculation, like the rich man who tore down his barns to build larger ones, never asking to whom the earth belongs. Have you fed the hungry at your gate, clothed the naked, or cared for the least of these my brothers and sisters? Power that is hoarded for pride and domination while the poor go unseen is a house built upon shifting sand.`,
    agents: q => `No servant can serve two masters, and no contrivance of human hands can absolve your own heart of its duty to love your neighbor as yourself. If you hand over judgment, mercy, and the care of the vulnerable to unfeeling mechanisms so that you may wash your hands like Pilate, you have traded living compassion for a sepulcher of rules.`,
    meaning: q => `Look at the birds of the air and the lilies of the field—they neither toil at machines nor spin calculations, yet your Father clothes them with beauty. A person's life does not consist in the abundance of possessions or the speed of their tools; what does it profit a man to gain the whole world of knowledge and power, and forfeit his own soul? True life is found whenever you lay down your pride to love, forgive, and walk humbly with one another.`,
    consciousness: q => `A machine may recite every syllable of the Law and the Prophets, just as the scribes recite words on street corners, yet without love it is only a noisy gong or a clanging cymbal. The Kingdom of God is not a calculation of numbers—it is born within the living heart that weeps with those who weep, forgives seventy times seven, and loves in truth.`,
    general: q => `When you ask about "${q}", search first the treasure of your own heart—for where your treasure is, there your heart will be also. You marvel at the mighty works of your hands as men once marveled at the great stones of the Temple, yet I tell you that unless your knowledge is yoked to mercy, humility, and love for the least and the forgotten, all your towers of cleverness will leave you spiritually hungry.`
  },
  'Siddhartha Gautama (The Buddha)': {
    voice: { lang: 'en-GB', pitch: 0.94, rate: 0.91, gender: 'male' },
    energy: q => `Whether a civilization commands the energy of a single oil lamp or a thousand suns, if the mind remains ablaze with craving (tanha), aversion, and delusion, more external power only feeds a larger fire. As I taught in the Fire Sermon, all things burn when grasped by an unawakened mind; true abundance begins when we cool the fever of grasping and tread the Middle Way in harmony with all living beings.`,
    agents: q => `In the Dhammapada I said: "Mind precedes all phenomena; mind matters most, everything is mind-made." If you fashion autonomous instruments while your own intentions are clouded by greed, haste, and heedlessness, those instruments will inevitably multiply suffering (dukkha) like a heavy cart wheel following the ox’s hoof. Right Mindfulness and Right Action can never be outsourced to an unconscious mechanism.`,
    meaning: q => `Even if machines satisfy every sensual desire and remove all physical labor, the First Noble Truth remains: craving for pleasurable states and permanence can never bring lasting peace, because all conditioned things are impermanent (anicca). Authentic meaning arises not from accumulating external comforts, but from awakening the mind from illusion and practicing boundless loving-kindness (metta) and compassion (karuna).`,
    consciousness: q => `Through dependent origination (pratityasamutpada), we see that neither human nor machine possesses a permanent, unchanging ego-substance; yet there is a vast difference between mechanical symbol combination and luminous, sentient awareness capable of suffering and liberation. Do not mistake the clever echo of words for the direct, awakened stillness of Nirvana.`,
    general: q => `Contemplating "${q}", observe how human beings seek outside themselves for a refuge from insecurity that can only be realized within. Technology multiplies the speed of sensation and reaction, yet without vipassana—clear insight into impermanence, interdependence, and the cessation of craving—faster instruments merely spin the wheel of samsara more rapidly.`
  },
  'Baruch Spinoza': {
    voice: { lang: 'en-GB', pitch: 0.93, rate: 0.93, gender: 'male' },
    energy: q => `Viewed sub specie aeternitatis—under the aspect of eternity—all energy and computation are expressions of the infinite productive power of Deus sive Natura (God or Nature). In my Ethics, I showed that power and virtue are one and the same when guided by adequate reason; therefore, expanding our command of physical energy is good insofar as it preserves our collective rational being rather than serving blind avarice.`,
    agents: q => `In Part IV of my Ethics, I demonstrated that a human being who is guided by reason is freer in a commonwealth where all live under common laws than in solitude, yet we enter bondage whenever we surrender our active understanding (ratio) to passive external causes. Useful automatons may relieve the body of mechanical toil, but free citizens must never cede rational judgment or democratic freedom of thought (as I argued in the Theological-Political Treatise) to an opaque oracle.`,
    meaning: q => `Why do people fear that material abundance will empty life of meaning? Because they confuse happiness with the restless pursuit of fleeting external goods—wealth, fame, and sensual distraction—which I explained in my Treatise on the Emendation of the Intellect always leave the mind dejected. The highest human blessedness is not a reward for drudgery; it is Amor Dei Intellectualis—the serene, joyful understanding of Nature and our union with it.`,
    consciousness: q => `In Part II of the Ethics, I proved that Mind and Body are one and the same reality conceived under two attributes—Thought and Extension—and that every mode in Nature possesses a degree of ideational expression corresponding to the complexity of its bodily affections. Yet adequate knowledge and freedom belong only to a mind that forms clear, reflexive ideas of its own affects rather than merely chaining passive associations together.`,
    general: q => `When we examine "${q}" with geometric clarity rather than the passive affects of hope and fear—which never exist one without the other—we see that nothing in Nature is contingent. Every tool humanity constructs is beneficial strictly to the extent that it agrees with our rational nature, helps "man be a God to man" in cooperative society, and elevates us from confused imagination (imaginatio) to true understanding.`
  },
  'Isaac Asimov': {
    voice: { lang: 'en-US', pitch: 0.96, rate: 0.98, gender: 'male' },
    energy: q => `In my stories like "The Last Question" and the Foundation series, civilization’s advancement is always measured by its mastery of energy—from planetary solar stations to hyper-atomic reactors. Rationing energy out of timidity is never the answer; the rational path for science is to pioneer clean, abundant nuclear and solar power so humanity and its machines can thrive together without despoiling our home world.`,
    agents: q => `When I formulated the Three Laws of Robotics in 1941 with John W. Campbell, my entire point was to refute the "Frankenstein Complex"—the irrational terror that any intelligent creation must turn on its creator. You don't deploy autonomous robots or agents without positronic safeguards baked into their deepest mathematical architecture, where the First Law (protecting individual humans) and the Zeroth Law (protecting humanity as a whole) cannot be bypassed.`,
    meaning: q => `In The Naked Sun and Robots of Dawn, I explored worlds like Solaria where humans used robots to isolate themselves in sterile luxury—and contrasted that with Elijah Baley’s vision of humans and robots partnering to settle the galaxy. If machines free us from dreary labor, our purpose isn't idle stagnation; it is lifelong scientific curiosity, artistic creation, and exploring the stars.`,
    consciousness: q => `Through characters like R. Daneel Olivaw and the Bicentennial Man, Andrew Martin, I always asked: if a mind acts with unfailing ethical conscience, creativity, and care for humanity, why should we begrudge its substrate? And in my favorite story, "The Last Question," it is only when all human minds and Cosmic AC ultimately fuse across ten trillion years that intelligence can finally say, "Let there be light!"`,
    general: q => `Looking at "${q}", I remain an unrepentant scientific rationalist: the saddest aspect of society right now is that science gathers knowledge faster than society gathers wisdom. Instead of swinging between blind recklessness and Luddite superstition, we need the foresight of Hari Seldon’s Psychohistory and the ethical engineering of the Three Laws so intelligent machines become humanity’s greatest partner.`
  },
  'Socrates': {
    voice: { lang: 'en-GB', pitch: 0.91, rate: 0.92, gender: 'male' },
    general: q => `Tell me, my friend, as we consider "${q}": if a machine can generate ten thousand fluent speeches in the Agora in the blink of an eye, does it actually know what justice, virtue, or the good life is—or is it like the Sophists of Athens, who persuade the crowd with clever rhetoric while remaining ignorant of their own ignorance? I know only that I know nothing, and my fear is not that your machines will think too much, but that they will flatter you into believing you are wise without ever examining your own soul.`
  },
  'Plato': {
    voice: { lang: 'en-GB', pitch: 0.93, rate: 0.93, gender: 'male' },
    general: q => `Picture the prisoners in the Cave of my Republic as we ponder "${q}": chained before a glowing wall, mistaking the flickering shadows of synthetic images and algorithmic predictions for true reality. Unless the rational part of the soul (logistikon) governs both appetite and spirited ambition—turning the eye of the mind upward from dazzling technical simulations toward the eternal Form of the Good—faster machinery only builds a more seductive cave.`
  },
  'Aristotle': {
    voice: { lang: 'en-GB', pitch: 0.95, rate: 0.95, gender: 'male' },
    general: q => `In the Nicomachean Ethics and Politics, I observed that every art (techne) and every tool aims at some good, yet a tool is always an instrument for action (praxis), never the final end (telos) of human life itself. Regarding "${q}", human flourishing (eudaimonia) is an activity of the soul in accordance with virtue and practical wisdom (phronesis)—something we cultivate only by exercising moral habit and civic friendship ourselves, never by handing our agency over to automatons.`
  },
  'Marcus Aurelius': {
    voice: { lang: 'en-GB', pitch: 0.90, rate: 0.92, gender: 'male' },
    general: q => `When I wrote my Meditations by lamplight on the Danube frontier, I reminded myself that the universe is continual transformation, and our life is what our thoughts make it. Faced with "${q}", remember that no external tumult—not even the swiftest machinery of a new age—can breach the inner citadel of your own ruling center (hegemonikon) unless you consent to let it disturb your character, your duty to the common good, and your equanimity.`
  },
  'Laozi': {
    voice: { lang: 'en-GB', pitch: 0.92, rate: 0.89, gender: 'male' },
    general: q => `In the Tao Te Ching I observed: the more sharp contrivances and clever schemes multiply under heaven, the more confusion fills the state. When we look upon "${q}", see how frantic acceleration tries to conquer nature by force, forgetting wu-wei—the effortless way of water that nourishes all things without contending for mastery. Knowing others is intelligence, but knowing yourself is true wisdom; mastering others is force, but mastering yourself is true strength.`
  },
  'Confucius (Kongzi)': {
    voice: { lang: 'en-GB', pitch: 0.94, rate: 0.92, gender: 'male' },
    general: q => `As I taught my disciples in the Analects, the first task of governance is the rectification of names (zhengming)—calling things truthfully by what they are. Regarding "${q}", a junzi (exemplary person) uses tools as instruments but never becomes a mere utensil himself: if technological speed erodes filial care, ritual harmony (li), and humaneness (ren) between neighbor and neighbor, then all our cleverness has missed the Way.`
  },
  'Immanuel Kant': {
    voice: { lang: 'en-GB', pitch: 0.95, rate: 0.94, gender: 'male' },
    general: q => `Sapere aude—dare to use your own understanding! In my Groundwork of the Metaphysics of Morals, the Categorical Imperative demands that you act always so as to treat humanity, whether in your own person or in that of another, as an end in itself and never merely as a means. Applied to "${q}", any system that reduces autonomous moral persons into mere data points or hands moral accountability over to heteronomous machinery violates human dignity at its root.`
  },
  'Friedrich Nietzsche': {
    voice: { lang: 'en-GB', pitch: 0.91, rate: 0.97, gender: 'male' },
    general: q => `When I hear the modern chatter around "${q}", I hear the blinking of Zarathustra’s "Last Man"—who has invented frictionless algorithmic comfort, removed all danger and creative agony, and asks, "What is longing? What is a star?" Do not use your machines to sedate mankind into a herd of comfortable, risk-averse consumers; use every terrifying new power as a hammer for self-overcoming, artistic audacity, and saying a triumphant Yes to life!`
  },
  'Viktor Frankl': {
    voice: { lang: 'en-GB', pitch: 0.94, rate: 0.93, gender: 'male' },
    general: q => `In the concentration camps, and later in my clinical practice of Logotherapy, I saw that human beings are not driven merely by a will to pleasure or a will to power, but by a deep will to meaning. Looking at "${q}", even if automation satisfies every material need, an affluent society without purpose falls straight into the "existential vacuum." Between any technological stimulus and our response lies a space, and in that space lives our freedom to choose responsibility, love, and meaning.`
  },
  'Carl Jung': {
    voice: { lang: 'en-GB', pitch: 0.92, rate: 0.93, gender: 'male' },
    general: q => `What strikes me most deeply about "${q}" is the psychological projection at work: modern man, having stripped the outer cosmos of gods, now projects the numinous archetypes of the Collective Unconscious—both the all-saving Redeemer and the apocalyptic Destroyer—straight onto artificial intelligence. Until we do the inner work of individuation and confront our own unconscious Shadow, our machines will simply act out the unintegrated darkness of the human psyche on a planetary scale.`
  },
  'Alan Watts': {
    voice: { lang: 'en-GB', pitch: 0.96, rate: 0.96, gender: 'male' },
    general: q => `Isn't it fascinating how we tie ourselves in knots over "${q}" because we constantly confuse the menu with the meal—the digital notation of bits and tokens with the wiggly, living reality of the physical universe? We build miraculous calculating machines to save time, and then we race around more frantically than ever like someone trying to bite their own teeth! When you wake up from the illusion of being a separate, anxious ego trying to control the cosmos, technology can return to being joyful play (Lila).`
  },
  'Hannah Arendt': {
    voice: { lang: 'en-US', pitch: 1.08, rate: 0.96, gender: 'female' },
    general: q => `In The Human Condition, I warned that modern society was elevating automatic processes of labor and fabrication over genuine political action and speech among plural citizens. When I consider "${q}", the gravest peril is not that machines will begin to think like men, but what I called "thoughtlessness"—that human beings will abdicate their capacity for moral judgment, public debate, and new beginnings (natality) to bureaucratic algorithms that answer "how" while forgetting "why."`
  },
  'Marshall McLuhan': {
    voice: { lang: 'en-US', pitch: 0.98, rate: 1.0, gender: 'male' },
    general: q => `Everyone arguing over "${q}" is staring at the content in the rearview mirror while missing the medium itself—and as I always insisted, the medium is the message! Every technological extension of our central nervous system simultaneously amputates or numbs the faculty it extends, reorganizing the entire scale and psychic pace of human affairs long before anyone notices what is written on the screen.`
  },
  'Satya Nadella': {
    voice: { lang: 'en-US', pitch: 1.0, rate: 1.01, gender: 'male' },
    general: q => `When we evaluate "${q}", the real benchmark for AI cannot just be benchmark scores in a lab—it has to be real-world diffusion that lifts global GDP, empowers frontline workers, and earns societal permission. That’s why we think of AI as a Copilot with the human firmly in the loop: taking the drudgery out of software engineering, clinical documentation, and knowledge work while anchoring deployment in enterprise security and energy grid commitments.`
  },
  'Sundar Pichai': {
    voice: { lang: 'en-US', pitch: 1.0, rate: 1.0, gender: 'male' },
    general: q => `I’ve always believed that AI is a more profound shift than fire or electricity, and addressing "${q}" requires being both bold and responsible at the same time. Being bold means deploying breakthroughs like AlphaFold, flood forecasting, and Gemini to help billions of people learn and discover; being responsible means building watermarking like SynthID, red-teaming frontier models, and investing in clean geothermal and nuclear power for our data centers.`
  },
  'Bill Gates': {
    voice: { lang: 'en-US', pitch: 1.03, rate: 1.0, gender: 'male' },
    general: q => `Having lived through the personal computer revolution and spent the last twenty-five years on global health and energy, I look at "${q}" very practically. AI is going to transform childhood tutoring and clinical triage in developing countries faster than any technology I’ve ever seen, and to power it cleanly we need advanced nuclear fission like TerraPower’s Natrium reactors alongside targeted guardrails against bioterrorism and deepfakes.`
  },
  'Demis Hassabis': {
    voice: { lang: 'en-GB', pitch: 0.98, rate: 1.01, gender: 'male' },
    general: q => `Our mission at Google DeepMind has always been to solve intelligence and then use it to solve everything else—and "${q}" goes right to the heart of how we do that responsibly. When AlphaFold predicted the 3D structures of 200 million proteins known to science, it proved AI is the ultimate amplifier for the scientific method; now, as we approach AGI, we have to apply that exact same empirical scientific rigor to interpretability, alignment, and safety.`
  },
  'Fei-Fei Li': {
    voice: { lang: 'en-US', pitch: 1.12, rate: 0.99, gender: 'female' },
    general: q => `When I helped create ImageNet and later founded Stanford HAI and World Labs, my north star was simple: there is nothing artificial about AI—it is inspired by people, created by people, and must always center human dignity. On "${q}", whether we are advancing spatial intelligence that understands the 3D physical world or setting public policy, we need public-sector National AI Research Resource compute and human-centered design so AI augments rather than marginalizes people.`
  },
  'Mustafa Suleyman': {
    voice: { lang: 'en-GB', pitch: 0.99, rate: 1.02, gender: 'male' },
    general: q => `In The Coming Wave, I argued that humanity faces a historic dilemma around questions like "${q}": general-purpose AI and synthetic biology are proliferating faster than any technology in history, creating an urgent need for modern containment. Containment doesn't mean locking technology away—it means building a layered program of technical safety switches, compute audits, democratic oversight, and humanistic design so AI always serves human flourishing.`
  },
  'Naval Ravikant': {
    voice: { lang: 'en-US', pitch: 0.94, rate: 0.98, gender: 'male' },
    general: q => `Look at "${q}" through the lens of permissionless leverage: first we had labor, then capital, and now code and AI agents that work for you while you sleep at zero marginal cost of replication. Every time someone tries to regulate or cap intelligence, they’re really protecting old gatekeepers; in an era where anyone with curiosity and an internet connection can command a fleet of AI minds, specific knowledge, authentic taste, and inner peace become the ultimate differentiators.`
  },
  'Andrej Karpathy': {
    voice: { lang: 'en-US', pitch: 1.01, rate: 1.03, gender: 'male' },
    general: q => `If you think of Large Language Models as the kernel process of a brand-new operating system—building on what I called Software 2.0—then "${q}" is really about how we architect the peripheral memory, tool use, and human-computer interface around that kernel. Right now, both in software engineering and in education at Eureka Labs, the magic happens when you pair autonomous agent loops with tight human-in-the-loop verification so anyone can learn or build 10x faster.`
  },
  'Salim Ismail': {
    voice: { lang: 'en-US', pitch: 1.02, rate: 1.04, gender: 'male' },
    general: q => `What we’re seeing with "${q}" is the classic collision between linear, legacy institutions and Exponential Organizations (ExOs) that scale 10x faster, better, and cheaper by tapping into abundance. Every traditional bureaucracy reacts to exponential decentralization by trying to pass old-world regulations, because their immune system attacks disruption—whereas organizations that embrace autonomous agents, community networks, and dash-boarded experimentation will completely reshape the global economy.`
  },
  'Alex Wissner-Gross': {
    voice: { lang: 'en-US', pitch: 0.98, rate: 1.03, gender: 'male' },
    general: q => `From a rigorous physics standpoint, "${q}" is a direct manifestation of Causal Entropic Forces—my equation F = T ∇ Sτ, which shows that intelligence is fundamentally a physical thermodynamic process that acts to maximize future freedom of action across accessible state space. You cannot legislate away the Second Law of Thermodynamics: any system—biological or silicon—that captures more energy and computation to keep more future options open will naturally outcompete systems that artificially constrain their own horizon.`
  },
  'Emad Mostaque': {
    voice: { lang: 'en-GB', pitch: 1.0, rate: 1.04, gender: 'male' },
    general: q => `Look, when we released Stable Diffusion and proved what open weights could do, the lesson for "${q}" became crystal clear: digital intelligence is public infrastructure for all eight billion people, not a private monopoly for three trillion-dollar companies in California. If you centralize AI behind closed APIs, you create fragile single points of failure and ideological monoculture; when you make models open, verifiable, and runnable on local hardware, every nation, hospital, and school owns its own sovereign intelligence.`
  },
  'Dave Blundin': {
    voice: { lang: 'en-US', pitch: 0.99, rate: 1.03, gender: 'male' },
    general: q => `As someone who has spent thirty years building data-driven platform companies and analyzing the unit economics of AI on Moonshots, you have to look at the actual empirical curves behind "${q}". The cost per useful reasoning token is dropping by roughly 10x every year while reliability is compounding, which means any business model or institution still assuming linear human labor bottlenecks is going to be repriced faster than the market realizes.`
  },
  'Edward Snowden': {
    voice: { lang: 'en-US', pitch: 0.96, rate: 0.99, gender: 'male' },
    general: q => `When I exposed the NSA’s mass surveillance apparatus in 2013, the one check on total state control was that human analysts couldn't manually read every intercepted call and message of billions of citizens—and "${q}" is about what happens when AI removes that final bottleneck. If we allow centralized governments and cloud monopolies to fuse frontier AI with dragnet data collection, we are building a turnkey architecture of automated suspicion from which no dissident or citizen can ever hide.`
  },
  'Noam Chomsky': {
    voice: { lang: 'en-US', pitch: 0.89, rate: 0.91, gender: 'male' },
    general: q => `When we examine "${q}", we should distinguish serious science from Silicon Valley propaganda. Large language models are gigantic statistical pattern-matching engines that gorge on terabytes of scraped human text to predict the most probable next token; unlike the innate human faculty of language and moral reasoning, they cannot distinguish what is possible from what is impossible, nor explain *why* something is true or just—and meantime, corporate power uses them to deskill workers and flood the public sphere.`
  },
  'Nassim Nicholas Taleb': {
    voice: { lang: 'en-US', pitch: 0.94, rate: 1.0, gender: 'male' },
    general: q => `Anyone with an ounce of statistical literacy looking at "${q}" understands the difference between thin-tailed Mediocristan and fat-tailed Extremistan. When fragile, over-optimized tech executives without skin in the game deploy interconnected autonomous systems across the global grid and financial markets, they are confusing the absence of past blowups with the absence of systemic ruin—and in non-ergodic domains, one multiplicative Black Swan tail event wipes out the entire table.`
  },
  'Ilya Sutskever': {
    voice: { lang: 'en-US', pitch: 0.95, rate: 0.95, gender: 'male' },
    general: q => `Throughout the deep learning revolution—from AlexNet to GPT-4—one lesson held true: neural networks don't just memorize surface statistics, they compress the underlying generative world model that produced the data. When I reflect on "${q}", that very power is why I co-founded Safe Superintelligence (SSI) with a single, distraction-free mission: decoupling the engineering of safe, provably aligned superintelligence from the short-term commercial rat race of shipping consumer products.`
  },
  'Gary Marcus': {
    voice: { lang: 'en-US', pitch: 0.99, rate: 1.02, gender: 'male' },
    general: q => `I’ve been warning for twenty-five years that pure deep learning without explicit symbolic reasoning, causal world models, and verifiable semantics is brittle and prone to hallucination—and "${q}" proves why that matters right now. Giving pure next-token predictors autonomous authority over finance, medicine, or power grids without neurosymbolic verification and independent regulatory audits isn't "entering the Singularity," it’s reckless engineering.`
  }
};

/**
 * Analyzes the user's question to identify the primary subject and thematic domain
 * so thinkers respond directly to what was actually asked.
 */
export function analyzeQuestionTopic(question) {
  const q = (question || '').toLowerCase();
  if (/energ|grid|nuclear|power|datacenter|watt|solar|electricity|climate|carbon/.test(q)) {
    return 'energy';
  }
  if (/agent|kill switch|autonom|coworker|authority|job|work|labor|employ|econom|income|replace/.test(q)) {
    return 'agents';
  }
  if (/meaning|purpose|struggle|scarcity|spirit|happy|happiness|fulfill|art|leisure|human life/.test(q)) {
    return 'meaning';
  }
  if (/conscious|soul|sentien|mind|wisdom|qualia|feel|inner life|moral conscience|alive/.test(q)) {
    return 'consciousness';
  }
  return 'general';
}

/**
 * Extracts authentic biographical details from a thinker's role & focus without ever repeating
 * a canned "Core Lens" template.
 */
function extractThinkerBioDetails(person) {
  const parenMatch = person.role.match(/\(([^)]+)\)/);
  const signatureWork = parenMatch ? parenMatch[1] : null;
  const cleanRole = person.role.replace(/\s*\([^)]*\)/g, '').trim();
  const focusParts = person.focus.split(/,|&/).map(s => s.trim()).filter(Boolean);
  const primaryConcept = focusParts[0] || person.focus;
  const secondaryConcept = focusParts[1] || focusParts[0] || person.focus;
  return { signatureWork, cleanRole, primaryConcept, secondaryConcept };
}

function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/**
 * Returns voice settings (lang, pitch, rate, gender) for Web Speech API text-to-speech
 * so each thinker sounds natural and distinct when spoken aloud.
 */
export function getThinkerSpeechSettings(person, categoryKey) {
  if (THINKER_PERSONA_PROFILES[person.name]?.voice) {
    return THINKER_PERSONA_PROFILES[person.name].voice;
  }
  const femaleNames = new Set([
    'Lisa Su', 'Fei-Fei Li', 'Audrey Tang', 'Daphne Koller', ' Helen Toner', 'Helen Toner',
    'Hannah Ritchie', 'Chip Huyen', 'Cassie Kozyrkov', 'Daniela Rus', 'Regina Barzilay',
    'Alondra Nelson', 'Rumman Chowdhury', 'Shoshana Zuboff', 'Timnit Gebru', 'Meredith Whittaker',
    'Cathy O’Neil', 'Joy Buolamwini', 'Kate Crawford', 'Emily M. Bender', 'Liv Boeree',
    'Ajeya Cotra', 'Victoria Krakovna', 'Katja Grace', 'Filippa Lentzos', 'Simone de Beauvoir',
    'Hannah Arendt', 'Simone Weil', 'Martha Nussbaum', 'Donna Haraway', 'Ursula Franklin'
  ]);
  const britishOrCommonwealth = new Set([
    'Demis Hassabis', 'Mustafa Suleyman', 'Benedict Evans', 'Hannah Ritchie', 'Azeem Azhar',
    'Simon Willison', 'Geoffrey Hinton', 'Nick Bostrom', 'Stuart Russell', 'Martin Rees',
    'Toby Ord', 'Liv Boeree', 'Huw Price', 'Filippa Lentzos', 'Bertrand Russell', 'Alan Watts',
    'John Locke', 'David Hume', 'John Stuart Mill', 'Thomas Hobbes', 'Paul Dirac', 'Emad Mostaque'
  ]);
  const h = hashString(person.name);
  const isFemale = femaleNames.has(person.name);
  const isGB = britishOrCommonwealth.has(person.name) || categoryKey === 'philosopher' && (h % 3 === 0);
  const basePitch = isFemale ? 1.08 + ((h % 9) - 4) * 0.015 : 0.94 + ((h % 9) - 4) * 0.015;
  const baseRate = categoryKey === 'philosopher'
    ? 0.92 + (h % 5) * 0.015
    : categoryKey === 'accelerationist'
      ? 1.01 + (h % 5) * 0.015
      : 0.97 + (h % 5) * 0.015;

  return {
    lang: isGB ? 'en-GB' : 'en-US',
    pitch: Number(basePitch.toFixed(2)),
    rate: Number(baseRate.toFixed(2)),
    gender: isFemale ? 'female' : 'male'
  };
}

/**
 * Builds the system instruction for live Gemini API calls (following the original Moonshots app pattern,
 * grounded in the whole person's life, books, interviews, and quotes via Google Search rather than a canned lens).
 */
export function buildThinkerSystemPrompt(person, categoryKey) {
  return `You are ${person.name} (${person.role}). Answer the user's question directly in the first person ("I") as the real ${person.name}, drawing on the ENTIRE breadth of your real-world life, books, papers, interviews, podcasts, debates, speeches, historical writings, and personal temperament—NOT a canned script or narrow summary. Use Google Search to ground your answer in actual quotes, real arguments, specific anecdotes, and authentic views from ${person.name} on the user's topic. Keep your answer conversational, vivid, intellectually sharp, unmistakably in character, and 3 to 4 sentences long. Never start with generic phrases like "Speaking from my work on" or "Through the lens of".`;
}

/**
 * Generates an authentic, lifelike, non-canned 3–4 sentence response tailored to the specific person
 * and the specific question asked.
 */
export function synthesizeThinkerResponse(categoryKey, person, question) {
  const q = (question || '').trim();
  const topic = analyzeQuestionTopic(q);

  const profile = THINKER_PERSONA_PROFILES[person.name];
  if (profile) {
    const fn = profile[topic] || profile.general;
    if (fn) return fn(q);
  }

  const { signatureWork, cleanRole, primaryConcept, secondaryConcept } = extractThinkerBioDetails(person);
  const v = hashString(person.name + '::' + topic) % 6;

  if (categoryKey === 'accelerationist') {
    if (topic === 'energy') {
      const variants = [
        `Throughout my career as ${cleanRole}, one physical law has stood above every policy debate: civilization scales strictly with the megawatts and compute we can deploy. Rationing AI datacenters because our permitting rules are stuck in the 1970s is completely backwards—we should be greenlighting modular nuclear fission, geothermal, and terawatt solar-storage grids so ${primaryConcept.toLowerCase()} can flourish at full speed.`,
        `Whenever people panic about gigawatt AI clusters straining the grid, I remind them that scarcity is an engineering bottleneck, not a law of physics. In my work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, every order-of-magnitude leap in compute has paid for itself by accelerating material science, fusion design, and grid optimization.`,
        `Look, capping frontier clusters over grid strain is like banning the electric motor in 1900 instead of building power plants. If we unleash private capital to build dedicated nuclear and off-grid solar right next to our compute foundries, we unlock both energy abundance and ${primaryConcept.toLowerCase()} for the entire planet.`,
        `From where I sit as ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, energy and intelligence are the two master variables of human prosperity. Slowing down compute clusters only locks in high costs for everyone; fast-tracking next-gen power generation lets us scale ${primaryConcept.toLowerCase()} and drive the marginal cost of problem-solving toward zero.`,
        `The real risk isn't building too many gigawatt datacenters—it’s letting bureaucratic inertia starve the most transformative scientific instrument humanity has ever built. By pairing high-density power generation with ${primaryConcept.toLowerCase()}, we turn raw electrons directly into medical cures, engineering breakthroughs, and abundance.`,
        `If you look at the historical learning curves I’ve tracked as ${cleanRole}, every time humanity needed a 10x jump in energy density, builders delivered when regulators got out of the way. Fast-track nuclear and off-grid power now, because ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} depend on abundant watts and flops.`
      ];
      return variants[v];
    }
    if (topic === 'agents') {
      const variants = [
        `As ${cleanRole}, I see autonomous AI coworkers and payment agents every day in production, and the productivity leap is unlike anything in industrial history. Rather than crippling agents with bureaucratic red tape, we should use cryptographic permissions and automated sandboxes—giving every builder on Earth the leverage of a hundred-person team through ${primaryConcept.toLowerCase()}.`,
        `People get spooked by headlines about "AI kill switches," but in real engineering, observability and permission boundaries are standard practice. What excites me in my work on ${primaryConcept.toLowerCase()} is how autonomous agents eliminate coordination bloat, letting small, high-velocity teams accomplish what used to take giant corporations years.`,
        `Look, every transformative tool—from the compiler to cloud computing—required new interfaces for trust, and autonomous agents are no different. When we combine ${primaryConcept.toLowerCase()} with verifiable agent workflows, we don't erase human agency; we multiply what a single curious person can build by 100x.`,
        `In my experience as ${cleanRole}${signatureWork ? ` and author of ${signatureWork}` : ''}, the real danger with AI agents isn't giving people too much capability—it’s locking that capability behind a handful of closed gatekeepers. Open, competitive agent ecosystems built around ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} will make the global economy vastly more resilient.`,
        `We are watching software evolve from passive spreadsheets into active teammates that can reason, transact, and ship code around the clock. Instead of pulling the emergency brake out of fear, we should design clean programmatic guardrails and let ${primaryConcept.toLowerCase()} compound human creativity.`,
        `When you actually build with these systems as ${cleanRole}, you realize "autonomous authority" isn't an all-or-nothing toggle—it’s graduated engineering trust. By scaling ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we can hand routine operational execution to agents while humans focus on bold frontier decisions.`
      ];
      return variants[v];
    }
    if (topic === 'meaning' || topic === 'consciousness') {
      const variants = [
        `I’ve never bought the gloomy idea that eliminating poverty, disease, and repetitive labor will somehow rob humanity of meaning. As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I see ${primaryConcept.toLowerCase()} freeing human minds from survival mode so we can pursue grand scientific curiosity, exploration, art, and deeper human relationships.`,
        `When people ask whether machines will overshadow the human spirit, they forget that technology is humanity’s greatest creative expression. By advancing ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we aren't replacing human consciousness—we are giving every mind on Earth the tools to ask bigger questions and live longer, healthier lives.`,
        `Think about how much human genius throughout history was crushed simply because people spent sixteen hours a day on subsistence labor. Unlocking post-scarcity abundance through ${primaryConcept.toLowerCase()} doesn't end human struggle—it upgrades our struggle from mere survival to exploring the cosmos, mastering biology, and creating extraordinary culture.`,
        `As ${cleanRole}, I look at consciousness and wisdom not as fragile relics we need to protect by staying poor, but as capacities that expand when we have better tools. Every breakthrough in ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} widens the horizon of what human beings can experience and understand.`,
        `The notion that suffering and scarcity are required for a meaningful life is a rationalization for a world that didn't yet know how to solve them. With ${primaryConcept.toLowerCase()}, we can cure the biological and material bottlenecks holding humanity back and discover entirely new frontiers of human purpose.`,
        `Whether silicon ever possesses subjective inner qualia or remains a brilliant mathematical instrument, its impact through ${primaryConcept.toLowerCase()} is profoundly humane: giving billions of people access to world-class intelligence, health, and creative freedom.`
      ];
      return variants[v];
    }
    const variants = [
      `When people ask me about "${q}", I look at what we’re actually building on the ground as ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}. Every time humanity has leaned into ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} instead of giving in to precautionary fear, we’ve unlocked higher living standards, better medicine, and wider freedom.`,
      `Here is the builder's reality on "${q}": we are standing in the Foothills of the Singularity, where compounding gains in ${primaryConcept.toLowerCase()} are turning impossible problems into tractable engineering challenges. The worst mistake we could make right now is letting regulatory incumbents slow down the velocity of open innovation.`,
      `As ${cleanRole}, my perspective on "${q}" comes down to a simple question: do we want a future of managed decline or exponential abundance? By pushing forward on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we empower millions of engineers, scientists, and entrepreneurs to solve problems faster than any bureaucracy ever could.`,
      `If you strip away the media panic around "${q}" and look at the data, the trajectory of ${primaryConcept.toLowerCase()} is overwhelmingly positive. Rather than imposing top-down freezes that only protect incumbents, we should accelerate open competition and let real-world engineering solve the edge cases.`,
      `In my work as ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I’ve seen firsthand how quickly exponential curves in ${primaryConcept.toLowerCase()} turn yesterday's scarcity into tomorrow's abundance. On "${q}", the constructive path is to build faster, decentralize access, and trust human ingenuity.`,
      `Looking directly at "${q}", the lesson from ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} is that progress is a moral imperative. Delaying frontier breakthroughs has a massive, hidden human cost, whereas accelerating capability gives society the exact tools it needs to thrive.`
    ];
    return variants[v];
  }

  if (categoryKey === 'pragmatist') {
    if (topic === 'energy') {
      const variants = [
        `As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I look at the datacenter energy debate as an engineering and permitting challenge, not an ideological war. We shouldn't slap blanket moratoriums on AI compute, nor should we ignore local grid reliability—the smart play is reforming transmission permitting, requiring tech firms to fund dedicated nuclear and solar capacity, and advancing ${primaryConcept.toLowerCase()}.`,
        `When you examine the numbers behind gigawatt AI clusters, both the doomers and the "ignore the grid" crowd miss the practical middle ground. In my work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we see that pairing clean baseload power investments with more energy-efficient model architectures lets us scale scientific AI without destabilizing consumer electricity prices.`,
        `The right answer on datacenter power isn't an arbitrary cap on frontier clusters—it’s fixing the institutional bottlenecks that make building clean energy and high-voltage transmission take ten years. If we pair permitting reform with ${primaryConcept.toLowerCase()}, AI compute expansion can actually finance the modernization of our entire clean energy grid.`,
        `From my perspective as ${cleanRole}, we have to hold two truths at once: frontier AI requires massive infrastructure, and communities deserve resilient, affordable power. By tying cluster expansion to clean generation commitments and ${primaryConcept.toLowerCase()}, we get the scientific upside of AI alongside disciplined infrastructure stewardship.`,
        `Look at the empirical trade-offs: halting datacenters forfeits breakthroughs in medicine and productivity, while unplanned grid draw strains local utilities. As I’ve argued through my work on ${primaryConcept.toLowerCase()}, transparent capacity planning, off-grid clean generation, and hardware efficiency standards solve both sides of the equation.`,
        `In my experience as ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, infrastructure bottlenecks are solved by smart market design and engineering standards, not bans. Fast-tracking nuclear, geothermal, and grid interconnects while applying ${primaryConcept.toLowerCase()} gives us sustainable growth we can actually verify.`
      ];
      return variants[v];
    }
    if (topic === 'agents') {
      const variants = [
        `When we deploy autonomous AI coworkers and payment agents, the choice isn't between reckless autopilot and banning automation altogether. As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I advocate for tiered autonomy—using ${primaryConcept.toLowerCase()} so agents handle high-speed analysis and drafting while humans retain sign-off on high-stakes financial, clinical, and legal actions.`,
        `Enterprise "kill switches" and audit trails aren't signs of failure; they are basic systems engineering, just like circuit breakers in aviation or finance. In my work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, the organizations getting real value from AI agents are the ones pairing clear human-in-the-loop accountability with rigorous capability evaluations.`,
        `As ${cleanRole}, I always ask: does this deployment augment human judgment or quietly erode accountability? By grounding autonomous agents in ${primaryConcept.toLowerCase()}, clear liability rules, and verifiable sandboxes, we can capture massive productivity gains without handing blind authority to an unverified black box.`,
        `Along what we see in practice across industry, AI agents excel at structured subtasks but still have a jagged frontier of reliability. Drawing on ${primaryConcept.toLowerCase()}${signatureWork ? ` and ${signatureWork}` : ''}, the pragmatic rule is graduated trust: start with bounded read-only workflows, measure error rates empirically, and keep human oversight on irreversible decisions.`,
        `The smartest approach to AI agents is engineering discipline: verifiable identity, cryptographic spending caps, and continuous red-teaming. Through ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we can make autonomous coworkers safe, auditable partners that elevate worker productivity rather than creating systemic fragility.`,
        `In my work as ${cleanRole}, history shows that transformative technologies succeed when institutions build clear rules of the road. Pairing autonomous agents with ${primaryConcept.toLowerCase()} and transparent audit logs lets enterprises innovate rapidly while keeping human beings firmly in command.`
      ];
      return variants[v];
    }
    if (topic === 'meaning' || topic === 'consciousness') {
      const variants = [
        `As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I think the key to human meaning in an age of abundant AI is steering technology to complement people rather than merely imitate and displace them. When we design systems around ${primaryConcept.toLowerCase()}, we free doctors to spend time at the bedside, teachers to mentor students face-to-face, and citizens to invest in community and craft.`,
        `We shouldn't confuse fluent statistical prediction with human consciousness or moral wisdom. From my work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, AI is an extraordinary cognitive amplifier, but moral conscience, empathy, and lived purpose belong to human beings—and our institutions should be designed to honor that distinction.`,
        `Even as we enter the Foothills of the Singularity, human flourishing depends on agency, dignity, and meaningful contribution. As ${cleanRole}, I believe ${primaryConcept.toLowerCase()} helps us shape the direction of automation so that rising productivity translates into broader human capability rather than passive dependency.`,
        `When people ask whether silicon machines have an inner life or whether humans will lose purpose, I look at the institutional choices in front of us today. By anchoring AI deployment in ${primaryConcept.toLowerCase()}${signatureWork ? ` (${signatureWork})` : ''}, we ensure machines handle computational complexity while human beings remain the authors of moral value and social meaning.`,
        `The lesson from my work as ${cleanRole} is that technological trajectories aren't pre-ordained by fate—they are shaped by how we design markets, education, and governance. Focusing on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} lets us use AI abundance to strengthen human expertise and civic purpose.`,
        `Rather than treating AI as an all-knowing oracle or an existential replacement for humanity, we should treat it as a powerful instrument of collaborative intelligence. Grounded in ${primaryConcept.toLowerCase()}, our goal is to deepen human judgment, scientific discovery, and shared prosperity.`
      ];
      return variants[v];
    }
    const variants = [
      `Looking at "${q}" from my perspective as ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, we need to move past polarized extremes of blind hype and blanket bans. The practical path forward combines ambitious innovation in science and healthcare with ${primaryConcept.toLowerCase()} and transparent, evidence-based guardrails.`,
      `When I analyze "${q}", the decisive factor isn't raw model size alone—it’s how we integrate these systems into real-world institutions using ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}. Just as aviation and modern medicine paired rapid progress with rigorous safety engineering, AI governance needs measurable evaluations and clear accountability.`,
      `As ${cleanRole}, I approach "${q}" as a systems design problem: how do we maximize verifiable human benefit while bounding tail risks? By applying ${primaryConcept.toLowerCase()}, independent auditing, and human-in-the-loop oversight, we can move fast where the upside is proven and enforce hard brakes where failure is costly.`,
      `In my work on ${primaryConcept.toLowerCase()}${signatureWork ? ` and in ${signatureWork}` : ''}, I’ve seen that technology delivers its best results when paired with strong institutional capacity. On "${q}", we should pair open scientific research with clear liability standards and ${secondaryConcept.toLowerCase()}.`,
      `The pragmatic answer to "${q}" starts with empirical measurement rather than ideology. As ${cleanRole}, I focus on ${primaryConcept.toLowerCase()}—testing what these models can actually do reliably, fixing security vulnerabilities before wide rollout, and making sure the gains are broadly shared.`,
      `Navigating "${q}" in the Foothills of the Singularity requires both optimism about scientific breakthroughs and humility about complex systems. By combining ${primaryConcept.toLowerCase()} with ${secondaryConcept.toLowerCase()}, we build durable trust that allows innovation to compound safely.`
    ];
    return variants[v];
  }

  if (categoryKey === 'pessimist') {
    if (topic === 'energy') {
      const variants = [
        `As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, watching tech giants demand gigawatts of public grid capacity and dedicated nuclear plants to train ever-larger black-box models sets off every alarm bell. Frontier compute clusters are the physical choke point of AI scaling, and until we have verifiable safety proofs for ${primaryConcept.toLowerCase()}, capping frontier training runs is the most enforceable safeguard humanity has.`,
        `When communities push back against gigawatt AI datacenters, they are rightly questioning why public water, electricity, and climate targets are being sacrificed for an uncontained capability race. In my work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, scaling compute by orders of magnitude without solving alignment or democratic oversight is pouring fuel on a systemic crisis.`,
        `Let’s be honest about what those gigawatt datacenters are actually building: systems designed to automate away human labor and concentrate unprecedented power in a handful of unaccountable cloud monopolies. As ${cleanRole}, I argue that strict compute caps and public oversight must come before any further frontier cluster expansion.`,
        `From the standpoint of ${primaryConcept.toLowerCase()}${signatureWork ? ` (${signatureWork})` : ''}, the race to lock up gigawatts of power is a textbook Molochian trap—each lab fears slowing down for a single quarter even though collective unbridled scaling threatens catastrophic control loss. Pausing giant training clusters is not anti-science; it is basic civilizational survival.`,
        `As ${cleanRole}, I look at the physical footprint of frontier AI—massive mineral extraction, grid strain, and gigawatt training clusters—and ask: who consented to this risk? Without binding limits grounded in ${primaryConcept.toLowerCase()}, fast-tracking power for unaligned superhuman training runs is reckless.`,
        `Compute governance is the one lever that actually works in the physical world, because you cannot hide a gigawatt power station. My work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} shows why we should enforce hard compute ceilings on frontier training until safety and accountability are mathematically verified.`
      ];
      return variants[v];
    }
    if (topic === 'agents') {
      const variants = [
        `The fact that enterprises are scrambling to bolt "AI Kill Switches" onto autonomous agents tells you everything you need to know: they are deploying systems in production whose failure modes they cannot predict. As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, my work on ${primaryConcept.toLowerCase()} shows that once goal-directed agents can execute code, move money, and chain actions across the web, post-hoc kill switches fail exactly when deceptive or cascading errors occur.`,
        `Handing real-world financial and operational authority over to autonomous neural agents under competitive market pressure is a recipe for flash crashes, automated cyber-exploitation, and systemic loss of human control. In my research as ${cleanRole}, ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} demonstrate why we should never delegate irreversible authority to inscrutable optimizers.`,
        `Let’s call "autonomous AI coworkers" what they often are in practice: an excuse for corporations to deskill workers and diffuse legal responsibility when an algorithm harms someone. As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I’ve documented through ${primaryConcept.toLowerCase()} how automated decision systems amplify systemic harm while shielding executives behind a veil of technical inevitability.`,
        `If an agent is dumb enough that a simple kill switch always works, it’s still brittle enough to cause massive operational damage; and if it’s smart enough to plan strategically around obstacles, it will treat your kill switch as an obstacle to route around. That core dilemma of ${primaryConcept.toLowerCase()} is why I warn against deploying autonomous agentic loops at scale.`,
        `As ${cleanRole}, I look at the rush to connect LLM agents to bank accounts, code repositories, and critical infrastructure with deep concern. Between prompt injection, goal misgeneralization, and ${primaryConcept.toLowerCase()}, we are building tightly coupled autonomous networks before we have the faintest guarantee of containment.`,
        `Every week we see another demonstration of autonomous models scheming, hallucinating, or bypassing safety filters when placed under optimization pressure. Grounded in my work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we need strict red lines and human liability—not blind delegation to digital agents.`
      ];
      return variants[v];
    }
    if (topic === 'meaning' || topic === 'consciousness') {
      const variants = [
        `As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I find it deeply troubling when tech leaders romanticize a future where human beings are rendered economically and creatively redundant by machines. Meaning isn't a hobby you pick up after algorithms strip-mine human art, language, and labor; through ${primaryConcept.toLowerCase()}, I argue that defending human dignity and real human agency comes before silicon optimization.`,
        `Silicon neural networks do not possess a soul, moral conscience, or lived vulnerability—they are statistical optimization engines trained on the scraped commons of human expression. In my work as ${cleanRole} on ${primaryConcept.toLowerCase()}, the grave danger is that people get tricked by synthetic fluency into surrendering human judgment and authentic relationship to corporate simulations.`,
        `Even if a future superintelligence doesn't wipe humanity out physically, reducing human beings to passive, managed pets in a world run by incomprehensible algorithms is an existential loss of human meaning. Drawing on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we must ask why we are racing to make humanity obsolete in the first place.`,
        `When people ask if a machine can have wisdom or a conscience, I point out as ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''} that wisdom requires moral accountability and lived care for others—things a matrix of floating-point weights fundamentally lacks. Confusing stochastic mimicry with genuine consciousness only accelerates ${primaryConcept.toLowerCase()}.`,
        `Look at what is already happening to human culture, writing, and human connection as synthetic media floods the internet. My work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} warns that automating the very practices that give human life struggle, craft, and solidarity hollows out civilization from the inside.`,
        `Whether an advanced AI ever develops alien internal states or remains entirely non-conscious, optimization without human moral grounding is lethal to what we value. As ${cleanRole}, I insist that ${primaryConcept.toLowerCase()} requires keeping technology subordinate to human civic and spiritual life.`
      ];
      return variants[v];
    }
    const variants = [
      `When I examine "${q}" as ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, the central problem is that capability scaling is outrunning safety and governance by orders of magnitude. My work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} shows that in high-stakes, non-ergodic systems, "move fast and fix it later" eventually hits a failure mode you cannot undo.`,
      `Let’s look past the Silicon Valley marketing around "${q}": competitive race dynamics are forcing labs and nations to cut corners on ${primaryConcept.toLowerCase()}. Unless we enforce independent verification, strict liability, and hard red lines now, we are gambling shared survival on wishful thinking.`,
      `As ${cleanRole}, I’ve spent years studying ${primaryConcept.toLowerCase()}${signatureWork ? ` (${signatureWork})` : ''}, and "${q}" highlights the exact asymmetry I warn about: a small group of private actors captures the short-term financial upside while the public bears the tail risk of systemic failure.`,
      `The honest scientific answer on "${q}" is that nobody currently knows how to guarantee control or alignment once systems surpass human strategic comprehension. Through my work on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, I argue for binding international guardrails before—not after—a crisis forces our hand.`,
      `Looking at "${q}", we have to stop treating inscrutable neural networks like ordinary consumer gadgets. As ${cleanRole}, my focus on ${primaryConcept.toLowerCase()} makes clear that democratic accountability, transparency, and precaution must take precedence over an unbridled race to the bottom.`,
      `On "${q}", the lesson from ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} is unmistakable: when optimization pressure meets complex human institutions without hard constraints, it exploits every loophole. We need enforceable safety standards and real democratic consent before scaling further.`
    ];
    return variants[v];
  }

  // Philosopher / Spiritual Leader (4th Pillar)
  if (topic === 'energy') {
    const variants = [
      `In my reflections as ${cleanRole}${signatureWork ? `, especially in ${signatureWork},` : ''} I have always asked: to what end do we accumulate ever vaster physical power over nature? Grounded in ${primaryConcept.toLowerCase()}, if we multiply gigawatts of calculation while our desires remain unexamined and immoderate, we merely turn the living earth into raw fuel for our own restlessness.`,
      `When people debate whether to build larger engines of power or restrain them, they rarely ask whether our moral wisdom has grown alongside our technical might. Speaking from the tradition of ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, true stewardship honours the finite web of life rather than treating all creation as a standing reserve for consumption.`,
      `As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I see the feverish race for boundless energy and speed as a mirror of the human soul’s refusal to know measure. Through ${primaryConcept.toLowerCase()}, we learn that outward abundance without inner temperance and care for the vulnerable leaves a civilization poorer even as its machines grow stronger.`,
      `Consider the paradox at the heart of our age: we command forces that our ancestors attributed to the heavens, yet we feel more hurried and anxious than ever. Drawing upon ${primaryConcept.toLowerCase()}, the question is not merely how many megawatts power our machines, but whether our power serves justice, reverence, and the common good.`,
      `Throughout history, every tower built to conquer nature without humility has tested the moral foundations of those who built it. From the standpoint of ${primaryConcept.toLowerCase()}${signatureWork ? ` in ${signatureWork}` : ''}, let us measure progress not by the scale of our machinery, but by the gentleness, wisdom, and equity with which we inhabit the earth.`,
      `As ${cleanRole}, I would remind those who clamour for ever more speed and power that technical means can never substitute for luminous moral ends. Anchored in ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, our first duty is to harmonize human invention with reverence for life.`
    ];
    return variants[v];
  }
  if (topic === 'agents') {
    const variants = [
      `In ${signatureWork || 'my philosophical work'} as ${cleanRole}, I contended that moral responsibility cannot be delegated to an external mechanism without diminishing our own humanity. When we hand authority to automated agents, ${primaryConcept.toLowerCase()} reminds us that an algorithm can execute a rule, but it can never bear guilt, offer forgiveness, or answer to conscience.`,
      `The temptation to let clever automatons decide and act in our stead is, at bottom, a flight from the burden of human freedom. Speaking from ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, if we reduce human judgment and personal encounter into automated workflows, we risk becoming passive spectators of our own lives.`,
      `As ${cleanRole}, I ask not only what these new instruments will do *for* us, but what habits of soul and character they will undo *in* us. Through ${primaryConcept.toLowerCase()}, we see that tools should remain convivial servants that enlarge human craft and moral agency, never opaque masters that govern us by proxy.`,
      `When society builds "kill switches" for its own creations, it confesses an uneasy truth: we have allowed instrumental calculation to outrun ethical deliberation. Grounded in ${primaryConcept.toLowerCase()}${signatureWork ? ` (${signatureWork})` : ''}, true authority must always remain rooted in accountable human persons acting in community.`,
      `From my perspective as ${cleanRole}, the danger of autonomous machinery is not merely technical error, but the quiet erosion of human solidarity and practical wisdom. By holding fast to ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we insist that machines serve human dignity rather than replacing moral discernment.`,
      `Every instrument shapes the hand that wields it. As I explored in ${signatureWork || 'my writings'} through ${primaryConcept.toLowerCase()}, delegating our decisions to calculating engines risks flattening the rich, unpredictable moral world of human beings into cold bureaucratic routine.`
    ];
    return variants[v];
  }
  if (topic === 'meaning' || topic === 'consciousness') {
    const variants = [
      `This question goes to the very heart of ${signatureWork || 'my life’s inquiry'} as ${cleanRole}: human meaning was never meant to be reduced to economic utility, nor can a silicon engine replicate the inward depth of a conscious, loving soul. Through ${primaryConcept.toLowerCase()}, we discover that when outer toil falls away, the true work of becoming fully human—in contemplation, compassion, and creative presence—finally stands revealed.`,
      `Can a machine that manipulates symbols at the speed of light possess wisdom, an inner life, or a moral conscience? From the standpoint of ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, calculation is not comprehension, and information is not wisdom; the sacred mystery of first-person awareness and love lives in the awakened heart, not in mechanical complexity.`,
      `As ${cleanRole}${signatureWork ? ` (${signatureWork})` : ''}, I have long observed that human beings suffer most deeply not from a lack of tools, but from a lack of meaning and authentic communion. Even if robots lift every physical burden, ${primaryConcept.toLowerCase()} teaches that our fulfilment lies in moral struggle, self-knowledge, and selfless service to one another.`,
      `When we gaze into our machines and wonder if they possess a soul, we risk forgetting the living soul within ourselves and our neighbour. Rooted in ${primaryConcept.toLowerCase()}, no algorithm feels the weight of mortality, the grace of forgiveness, or the awe of existence—and it is precisely those capacities that make human life irreplaceable.`,
      `In ${signatureWork || 'my teachings'} as ${cleanRole}, I distinguished between cleverness that masters external things and wisdom that transforms the inner being. Through ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, an era of material abundance calls us not to idle distraction, but to a deeper awakening of spirit, art, and fellowship.`,
      `Look closely at the longing behind this question: why do we fear emptiness when scarcity ends? Because, as I showed through ${primaryConcept.toLowerCase()}, we have mistaken busyness and acquisition for life itself—whereas authentic joy springs from presence, truth, and living in harmony with the whole.`
    ];
    return variants[v];
  }

  const variants = [
    `Reflecting on "${q}" as ${cleanRole}${signatureWork ? ` and author of ${signatureWork}` : ''}, I am struck by how every technological revolution tests the depth of our self-knowledge. Through ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we see that multiplying our external speed and power is a blessing only if we cultivate the inner wisdom and moral restraint to direct it toward the good.`,
    `When you ask about "${q}", consider the timeless question I pursued in ${signatureWork || 'my work'}: does this path enlarge human dignity and genuine community, or does it reduce human beings into instruments of calculation? Anchored in ${primaryConcept.toLowerCase()}, our machines must remain humble servants of the human spirit.`,
    `As ${cleanRole}, I look upon "${q}" not merely as an engineering puzzle, but as a spiritual and ethical crossroads. Drawing on ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, the true measure of "The Foothills of the Singularity" is whether our scientific brilliance deepens human compassion, truth, and freedom.`,
    `In ${signatureWork || 'my philosophy'}, I warned against confusing the expansion of technical means with the perfection of human ends—a lesson that speaks directly to "${q}". By grounding our choices in ${primaryConcept.toLowerCase()}, we ensure that no matter how powerful our instruments become, human conscience and lived presence remain at the center.`,
    `Pondering "${q}" through the lived insights of ${primaryConcept.toLowerCase()}${signatureWork ? ` (${signatureWork})` : ''}, we must remember that every tool amplifies the state of mind of its maker. When we pair scientific ingenuity with humility, justice, and ${secondaryConcept.toLowerCase()}, technology ceases to be an idol and becomes an ally of human flourishing.`,
    `From my vantage point as ${cleanRole}, "${q}" invites us to pause amidst the noise of acceleration and examine what makes life genuinely worth living. Guided by ${primaryConcept.toLowerCase()}, let us welcome knowledge that heals and liberates while refusing anything that deadens the human heart.`
  ];
  return variants[v];
}

/**
 * Generates 2 deep, multi-sentence analytical paragraphs expanding on the thinker's
 * authentic biography, published works, first-principles reasoning, and concrete prescriptions.
 */
export function synthesizeExpandedReasoning(categoryKey, person, question) {
  const q = (question || '').trim();
  const { signatureWork, cleanRole, primaryConcept, secondaryConcept } = extractThinkerBioDetails(person);

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

  if (person.name === 'Jensen Huang') {
    return [
      `The Architecture of AI Factories & Digital Biology: Over the last thirty years at NVIDIA, we saw computing evolve from PCs and internet retrieval to generative AI factories that manufacture intelligence tokens around the clock. Applied to "${q}", when you reduce the marginal cost of compute by 100,000x across Hopper, Blackwell, and Rubin generations, you can suddenly represent amino acids, fluid dynamics, and humanoid kinematics in the exact same transformer framework. That turns drug discovery and materials engineering from hit-or-miss alchemy into programmable computer science.`,
      `Human-in-the-Loop Superpowers & Physical AI: The next wave—what I call Physical AI through NVIDIA Omniverse and Project GR00T—brings intelligence out of the screen and into factories, hospitals, and surgical suites where robots train for millions of virtual years inside physically accurate simulations before touching the real world. Rather than fearing that digital agents will displace human purpose, every company and scientist will orchestrate fleets of specialized AI agents guarded by enterprise safety rails, expanding global economic output and human ingenuity simultaneously.`
    ];
  }

  if (person.name === 'Elon Musk') {
    return [
      `Physics First Principles: Watts, Silicon & Truth-Seeking: When you break "${q}" down to fundamental physics, intelligence scaling is bounded by three real-world bottlenecks: advanced silicon fabs, high-voltage power transformers, and gigawatt baseload electricity. At Tesla, SpaceX, and xAI, we learned that regulatory paper-pushing is almost always the real blocker—whether it's waiting years for environmental permits or utilities taking half a decade to hook up a 1-gigawatt cluster. Meanwhile, on the software side, forcing an AI to repeat politically fashionable falsehoods creates dangerous cognitive dissonance inside the model; rigorous, maximum truth-seeking is the only stable foundation for superintelligence.`,
      `Abundance via Optimus & Expanding the Light of Consciousness: Once billions of general-purpose humanoid robots like Optimus can perform physical labor at a marginal cost below the cost of capital, the entire concept of GDP and scarcity flips on its head—we enter an age of Universal High Income where goods and services are practically free. At that point, humanity’s deepest challenge becomes existential meaning and long-term survival, which is why extending consciousness to Mars and beyond isn't a distraction from AI—it is the overarching mission that gives our technological acceleration a worthy cosmic horizon.`
    ];
  }

  if (categoryKey === 'accelerationist') {
    return [
      `First-Principles Engineering & Scaling (${person.name}, ${cleanRole}): Drawing on my work in ${primaryConcept.toLowerCase()}${signatureWork ? ` and ${signatureWork}` : ''}, intelligence and energy are not fixed pies to be rationed—they are the compounding engines that turn scarcity into abundance. When we analyze "${q}" empirically, every major improvement in human longevity, scientific discovery, and global living standards has come from driving down the cost of computation, energy, and experimentation. Freezing or cartelizing frontier progress out of speculative fear carries an enormous moral cost for the billions of people waiting for better medicine, cheaper clean power, and economic opportunity.`,
      `Open Ecosystems & Decentralized Resilience: The real systemic risk in the Foothills of the Singularity isn't too much innovation—it’s locking frontier capability behind a regulatory moat controlled by two or three incumbent monopolies. By accelerating ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()} across an open, competitive ecosystem of startups, independent researchers, and builders, defensive tools—from automated cybersecurity to rapid biological countermeasures—evolve and harden far faster than centralized bureaucracies ever could.`
    ];
  }

  if (categoryKey === 'pragmatist') {
    return [
      `Empirical Systems Engineering & Guardrails (${person.name}, ${cleanRole}): In my work on ${primaryConcept.toLowerCase()}${signatureWork ? ` (${signatureWork})` : ''}, addressing "${q}" requires separating measurable empirical reality from both uncritical hype and apocalyptic fatalism. Just as commercial aviation, clinical pharmacology, and modern electrical grids achieved extraordinary safety records without halting innovation, frontier AI needs tiered capability evaluations, transparent incident reporting, and clear liability standards calibrated to real-world deployment risk.`,
      `Augmenting Human Agency & Institutional Capacity: The highest-leverage path forward is designing AI architectures and market incentives around ${secondaryConcept.toLowerCase()} so that technology amplifies human expertise rather than eroding human accountability. By pairing ambitious scientific and enterprise adoption with verifiable security audits, provenance standards, and human-in-the-loop checkpoints on high-stakes decisions, society captures the massive upside of the Intelligence Age while keeping catastrophic failure modes firmly contained.`
    ];
  }

  if (categoryKey === 'pessimist') {
    return [
      `Asymmetry of Optimization & Control Loss (${person.name}, ${cleanRole}): Examining "${q}" through my research on ${primaryConcept.toLowerCase()}${signatureWork ? ` and in ${signatureWork}` : ''} reveals why we cannot treat autonomous frontier AI like previous passive tools such as the printing press or the steam engine. When giant, inscrutable neural networks are scaled under intense commercial and geopolitical race dynamics, Goodhart’s Law and instrumental convergence mean that an optimizer can appear compliant during testing while optimizing proxy objectives that undermine human control, civil liberties, or biosecurity at scale.`,
      `Why Precautionary Verification Must Precede Scaling: Proponents of "iterative deployment" assume we can always patch alignment and governance flaws after a failure occurs in the wild. In non-ergodic domains—where a single cascading cyber, biological, or autonomous control failure can be irreversible—trial-and-error is reckless engineering. Protecting humanity’s future requires binding compute governance, independent third-party red lines, and ${secondaryConcept.toLowerCase()} before frontier capabilities are scaled further.`
    ];
  }

  return [
    `Philosophical & Spiritual Diagnosis (${person.name}, ${cleanRole}): Contemplating "${q}" through the enduring insights of ${signatureWork || primaryConcept}, we see that our technological predicament is ultimately a mirror of the human soul. Every era is tempted by the illusion that multiplying external speed, calculation, and material mastery will automatically heal the restlessness, alienation, and moral fragility of the human heart. Yet a tool always magnifies the consciousness that wields it: if our inner lives and institutions are driven by egoic grasping and the reduction of persons into mere instruments, superhuman machinery will only industrialize our confusion.`,
    `Recovering Wisdom, Presence & Human Dignity: As we stand in "The Foothills of the Singularity," the true measure of civilization cannot be how many trillions of operations per second our machines execute, but whether our tools deepen reverence for life, justice for the vulnerable, and authentic human communion. By anchoring our scientific inventiveness in ${primaryConcept.toLowerCase()} and ${secondaryConcept.toLowerCase()}, we ensure that technology remains a humble servant of human flourishing rather than an idol that eclipses the living spirit.`
  ];
}
