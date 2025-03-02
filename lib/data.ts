export type Subject = 'Physics' | 'Chemistry' | 'Mathematics';

export type Difficulty = 'Easy' | 'Medium' | 'Hard';

export type Question = {
  id: string;
  year: number;
  subject: Subject;
  topic: string;
  difficulty: Difficulty;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
};

// Generate years from current year - 10 to current year - 1
const currentYear = new Date().getFullYear();
export const years = Array.from({ length: 10 }, (_, i) => currentYear - 10 + i);

export const subjects: Subject[] = ['Physics', 'Chemistry', 'Mathematics'];

export const topics: Record<Subject, string[]> = {
  Physics: [
    'Mechanics',
    'Electromagnetism',
    'Optics',
    'Modern Physics',
    'Thermodynamics',
    'Waves',
  ],
  Chemistry: [
    'Organic Chemistry',
    'Inorganic Chemistry',
    'Physical Chemistry',
    'Coordination Chemistry',
    'Electrochemistry',
  ],
  Mathematics: [
    'Calculus',
    'Algebra',
    'Coordinate Geometry',
    'Trigonometry',
    'Vectors',
    'Probability',
  ],
};

export const difficulties: Difficulty[] = ['Easy', 'Medium', 'Hard'];

// Sample questions data
export const questions: Question[] = [
  {
    id: '1',
    year: 2023,
    subject: 'Physics',
    topic: 'Mechanics',
    difficulty: 'Medium',
    question: 'A particle moves in a circle of radius R with a constant angular velocity ω. The magnitude of its acceleration is:',
    options: ['Rω', 'Rω²', '2Rω', 'R²ω'],
    correctAnswer: 'Rω²',
    explanation: 'For circular motion with constant angular velocity, the centripetal acceleration is given by a = Rω².',
  },
  {
    id: '2',
    year: 2023,
    subject: 'Chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'Hard',
    question: 'Which of the following compounds will show optical isomerism?',
    options: ['2-butanol', 'Propanoic acid', '2-methylpropane', 'Butane'],
    correctAnswer: '2-butanol',
    explanation: '2-butanol has a chiral carbon atom (carbon-2) with four different groups attached to it, making it optically active.',
  },
  {
    id: '3',
    year: 2022,
    subject: 'Mathematics',
    topic: 'Calculus',
    difficulty: 'Medium',
    question: 'The value of ∫(0 to π/2) sin²x dx is:',
    options: ['π/4', 'π/2', 'π', '2π'],
    correctAnswer: 'π/4',
    explanation: 'Using the identity sin²x = (1-cos2x)/2, we get ∫(0 to π/2) sin²x dx = ∫(0 to π/2) (1-cos2x)/2 dx = [x/2 - sin2x/4](0 to π/2) = π/4.',
  },
  {
    id: '4',
    year: 2022,
    subject: 'Physics',
    topic: 'Electromagnetism',
    difficulty: 'Hard',
    question: 'A charged particle with charge q and mass m is moving in a uniform magnetic field B with velocity v perpendicular to B. The radius of its circular path is:',
    options: ['qB/mv', 'mv/qB', 'qBv/m', 'mB/qv'],
    correctAnswer: 'mv/qB',
    explanation: 'The magnetic force provides the centripetal force: qvB = mv²/r, so r = mv/qB.',
  },
  {
    id: '5',
    year: 2021,
    subject: 'Chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'Easy',
    question: 'The pH of a 0.1 M solution of NaOH is:',
    options: ['1', '7', '13', '14'],
    correctAnswer: '13',
    explanation: 'For a 0.1 M NaOH solution, pOH = -log(0.1) = 1, so pH = 14 - pOH = 14 - 1 = 13.',
  },
  {
    id: '6',
    year: 2021,
    subject: 'Mathematics',
    topic: 'Algebra',
    difficulty: 'Medium',
    question: 'If α and β are the roots of the equation x² - 5x + 6 = 0, then the value of α² + β² is:',
    options: ['13', '25', '11', '17'],
    correctAnswer: '13',
    explanation: 'If α and β are roots, then α + β = 5 and αβ = 6. Now, α² + β² = (α + β)² - 2αβ = 5² - 2(6) = 25 - 12 = 13.',
  },
  {
    id: '7',
    year: 2020,
    subject: 'Physics',
    topic: 'Optics',
    difficulty: 'Medium',
    question: 'In Young\'s double-slit experiment, the separation between the slits is 0.15 mm and the screen is placed at a distance of 1.5 m. If the wavelength of light used is 589 nm, the fringe width is:',
    options: ['5.89 mm', '5.89 μm', '0.589 mm', '0.589 cm'],
    correctAnswer: '0.589 cm',
    explanation: 'Fringe width β = λD/d = (589 × 10⁻⁹ × 1.5)/(0.15 × 10⁻³) = 5.89 × 10⁻³ m = 0.589 cm.',
  },
  {
    id: '8',
    year: 2020,
    subject: 'Chemistry',
    topic: 'Inorganic Chemistry',
    difficulty: 'Easy',
    question: 'Which of the following elements has the highest electronegativity?',
    options: ['Oxygen', 'Nitrogen', 'Fluorine', 'Chlorine'],
    correctAnswer: 'Fluorine',
    explanation: 'Fluorine has the highest electronegativity (3.98 on the Pauling scale) among all elements in the periodic table.',
  },
  {
    id: '9',
    year: 2019,
    subject: 'Mathematics',
    topic: 'Coordinate Geometry',
    difficulty: 'Hard',
    question: 'The equation of the circle passing through the origin and making intercepts a and b on the coordinate axes is:',
    options: ['x² + y² - ax - by = 0', 'x² + y² + ax + by = 0', 'x² + y² - 2ax - 2by = 0', 'x² + y² + 2ax + 2by = 0'],
    correctAnswer: 'x² + y² - ax - by = 0',
    explanation: 'If the circle passes through (0,0), (a,0), and (0,b), then its equation can be derived as x² + y² - ax - by = 0.',
  },
  {
    id: '10',
    year: 2019,
    subject: 'Physics',
    topic: 'Modern Physics',
    difficulty: 'Hard',
    question: 'The energy of a photon of wavelength λ is:',
    options: ['hc/λ', 'hλ/c', 'hcλ', 'h/cλ'],
    correctAnswer: 'hc/λ',
    explanation: 'The energy of a photon is given by E = hf = hc/λ, where h is Planck\'s constant, f is frequency, c is speed of light, and λ is wavelength.',
  },
  {
    id: '11',
    year: 2018,
    subject: 'Chemistry',
    topic: 'Electrochemistry',
    difficulty: 'Medium',
    question: 'The standard reduction potential for Zn²⁺/Zn is -0.76 V and that for Cu²⁺/Cu is +0.34 V. The emf of the cell Zn|Zn²⁺||Cu²⁺|Cu is:',
    options: ['0.42 V', '1.10 V', '-1.10 V', '-0.42 V'],
    correctAnswer: '1.10 V',
    explanation: 'The emf of the cell is E°cell = E°cathode - E°anode = E°Cu²⁺/Cu - E°Zn²⁺/Zn = 0.34 - (-0.76) = 1.10 V.',
  },
  {
    id: '12',
    year: 2018,
    subject: 'Mathematics',
    topic: 'Trigonometry',
    difficulty: 'Easy',
    question: 'The value of sin 15° is:',
    options: ['(√6 - √2)/4', '(√6 + √2)/4', '(√3 - 1)/2√2', '(√3 + 1)/2√2'],
    correctAnswer: '(√6 - √2)/4',
    explanation: 'Using the formula sin(A-B) = sinA cosB - cosA sinB, we get sin 15° = sin(45° - 30°) = sin 45° cos 30° - cos 45° sin 30° = (1/√2)(√3/2) - (1/√2)(1/2) = (√6 - √2)/4.',
  },
  {
    id: '13',
    year: 2017,
    subject: 'Physics',
    topic: 'Thermodynamics',
    difficulty: 'Medium',
    question: 'A heat engine operates between temperatures T₁ and T₂ (T₁ > T₂). If the efficiency of the engine is 40%, then T₁/T₂ is:',
    options: ['5/3', '3/2', '5/2', '3/5'],
    correctAnswer: '5/3',
    explanation: 'For a heat engine, efficiency η = 1 - T₂/T₁. Given η = 0.4, we have 0.4 = 1 - T₂/T₁, so T₂/T₁ = 0.6, which gives T₁/T₂ = 1/0.6 = 5/3.',
  },
  {
    id: '14',
    year: 2017,
    subject: 'Chemistry',
    topic: 'Coordination Chemistry',
    difficulty: 'Hard',
    question: 'The IUPAC name of the complex [Pt(NH₃)₂Cl₂] is:',
    options: ['Diamminedichloroplatinum(II)', 'Dichlorodiammineplatinum(II)', 'Platinum(II) diammine dichloride', 'Platinum(II) dichloride diammine'],
    correctAnswer: 'Diamminedichloroplatinum(II)',
    explanation: 'Following IUPAC nomenclature for coordination compounds, the name is diamminedichloroplatinum(II), where the ligands are listed in alphabetical order followed by the metal with its oxidation state.',
  },
  {
    id: '15',
    year: 2016,
    subject: 'Mathematics',
    topic: 'Vectors',
    difficulty: 'Medium',
    question: 'If a, b, c are unit vectors such that a + b + c = 0, then the value of a·b + b·c + c·a is:',
    options: ['-3/2', '-3', '3/2', '3'],
    correctAnswer: '-3/2',
    explanation: 'From a + b + c = 0, we get (a + b + c)² = 0. Expanding, we get a² + b² + c² + 2(a·b + b·c + c·a) = 0. Since a, b, c are unit vectors, a² = b² = c² = 1, so 3 + 2(a·b + b·c + c·a) = 0, which gives a·b + b·c + c·a = -3/2.',
  },
  {
    id: '16',
    year: 2016,
    subject: 'Physics',
    topic: 'Waves',
    difficulty: 'Easy',
    question: 'The speed of sound in air at 0°C is 332 m/s. At 22°C, it will be approximately:',
    options: ['332 m/s', '344 m/s', '354 m/s', '322 m/s'],
    correctAnswer: '344 m/s',
    explanation: 'The speed of sound in air varies with temperature according to the formula v = v₀√(T/T₀), where v₀ is the speed at temperature T₀. So, v = 332√(295/273) ≈ 344 m/s.',
  },
  {
    id: '17',
    year: 2015,
    subject: 'Chemistry',
    topic: 'Organic Chemistry',
    difficulty: 'Medium',
    question: 'Which of the following compounds will give a positive iodoform test?',
    options: ['Propanone', 'Propanol', 'Propane', 'Propanoic acid'],
    correctAnswer: 'Propanone',
    explanation: 'Propanone (acetone) has a methyl ketone group (CH₃CO-) which gives a positive iodoform test. The reaction produces yellow precipitate of iodoform (CHI₃).',
  },
  {
    id: '18',
    year: 2015,
    subject: 'Mathematics',
    topic: 'Probability',
    difficulty: 'Easy',
    question: 'Two dice are thrown simultaneously. The probability of getting a sum of 8 is:',
    options: ['5/36', '1/6', '1/8', '7/36'],
    correctAnswer: '5/36',
    explanation: 'The favorable outcomes are (2,6), (3,5), (4,4), (5,3), (6,2), which are 5 in number. Total number of outcomes is 6 × 6 = 36. So, the probability is 5/36.',
  },
  {
    id: '19',
    year: 2014,
    subject: 'Physics',
    topic: 'Mechanics',
    difficulty: 'Hard',
    question: 'A body of mass m is attached to the lower end of a spring of spring constant k. The body is pulled down slightly and released. The time period of oscillation is:',
    options: ['2π√(m/k)', '2π√(k/m)', 'π√(m/k)', 'π√(k/m)'],
    correctAnswer: '2π√(m/k)',
    explanation: 'For a spring-mass system, the time period of oscillation is given by T = 2π√(m/k), where m is the mass and k is the spring constant.',
  },
  {
    id: '20',
    year: 2014,
    subject: 'Chemistry',
    topic: 'Physical Chemistry',
    difficulty: 'Medium',
    question: 'The half-life of a first-order reaction is 693 s. The time required for 90% completion of the reaction is:',
    options: ['1520 s', '1386 s', '2303 s', '2079 s'],
    correctAnswer: '2303 s',
    explanation: 'For a first-order reaction, t₁/₂ = 0.693/k, so k = 0.693/693 = 0.001 s⁻¹. For 90% completion, t = (2.303/k)log(1/(1-0.9)) = (2.303/0.001)log(10) = 2303 s.',
  },
];

// Helper functions for filtering
export function getFilteredQuestions({
  year,
  subject,
  topic,
  difficulty,
  searchQuery,
}: {
  year?: number;
  subject?: Subject;
  topic?: string;
  difficulty?: Difficulty;
  searchQuery?: string;
}) {
  let filtered = [...questions];

  if (year) {
    filtered = filtered.filter(q => q.year === year);
  }

  if (subject) {
    filtered = filtered.filter(q => q.subject === subject);
  }

  if (topic) {
    filtered = filtered.filter(q => q.topic === topic);
  }

  if (difficulty) {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(
      q =>
        q.question.toLowerCase().includes(query) ||
        q.options.some(opt => opt.toLowerCase().includes(query)) ||
        q.explanation.toLowerCase().includes(query)
    );
  }

  return filtered;
}