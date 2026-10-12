export interface Course {
  code: string
  title: string
  terms: string
  enrollment?: string
}

export const teachingInterests = [
  'Construction Safety',
  'Construction Financial Management',
  'Human Factors in Construction and Transportation',
  'Building Information Modeling',
  'Construction Methods',
  'Scheduling',
  'Estimating',
]

export const courses: Course[] = [
  {
    code: 'CM 301',
    title: 'Introduction to Construction Company Financial Management',
    terms: 'Fall 2024 – Fall 2026',
    enrollment: 'Fall 2026 (120 undergraduates); Fall 2025 (91); Spring 2025 (88); Fall 2024 (60)',
  },
  {
    code: 'CM 535',
    title: 'Construction Accounting and Financial Management',
    terms: 'Spring 2024, Spring 2026',
    enrollment: 'Spring 2026 (42 graduate students); Spring 2024 (46)',
  },
  {
    code: 'CM 200',
    title: 'Intermediate Pre-Construction Management',
    terms: 'Fall 2022 – Spring 2024',
    enrollment: 'Spring 2024 (70 undergraduates); Fall 2023 (87); Spring 2023 (98); Fall 2022 (98)',
  },
  {
    code: 'CM 581',
    title: 'Construction Finance and Company Management',
    terms: 'Spring 2023',
    enrollment: 'Spring 2023 (11 graduate students)',
  },
]

export interface Mentee {
  name: string
  level: string
  role: string
  period: string
}

export const mentoring: Mentee[] = [
  {
    name: 'Ze Wang',
    level: 'Ph.D. candidate, Purdue University',
    role: 'Teaching mentor',
    period: 'Fall 2023 – Present',
  },
  {
    name: 'Bingzhen Li',
    level: 'Ph.D. student, Purdue University',
    role: 'Research mentor',
    period: 'Fall 2025 – Present',
  },
  {
    name: 'Hongyu Tu and Yipeng Wei',
    level: 'Ph.D. students, Purdue University',
    role: 'Research mentor',
    period: 'Fall 2026',
  },
  {
    name: 'Vivek Reddy Puttha',
    level: "Master's student, Purdue University",
    role: 'Research mentor',
    period: 'Summer 2026',
  },
]

export const professionalSocieties = [
  { name: 'American Society of Civil Engineers', period: 'Fall 2023 – Present' },
  { name: 'American Society for Engineering Education', period: 'Fall 2026 – Present' },
]

export const journalReviewing = [
  'Human Factors and Ergonomics in Manufacturing',
  'Journal of Construction Engineering and Management',
]

export const conferenceReviewing = [
  'Associated Schools of Construction Annual Conference 2025, 2026',
  'Construction Research Congress 2026',
  'Transportation Research Board Annual Meeting 2027',
]

export interface Award {
  title: string
  org: string
  year: string
}

export const awards: Award[] = [
  {
    title: 'Best Paper Award',
    org: '14th International Conference on Applied Human Factors and Ergonomics',
    year: '2023',
  },
  { title: "Dean's Graduate Student Travel Award", org: 'Purdue University', year: '2023 & 2024' },
  {
    title: 'Bowen School of Construction Graduate Student Travel Grant',
    org: 'Purdue University',
    year: '2023 & 2024',
  },
  { title: 'Postgraduate Academic Scholarship', org: 'Wuhan University', year: '2020 & 2021' },
  { title: 'Excellent Teaching Assistant', org: 'Wuhan University', year: '2020' },
  { title: 'Excellent Undergraduate Graduation Thesis', org: 'Wuhan University', year: '2019' },
  { title: 'Merit Student Model', org: 'Wuhan University', year: '2018' },
  {
    title: 'First Place, Student Structural Design Competition',
    org: 'Wuhan University',
    year: '2018',
  },
  {
    title: 'Third Prize, National MathorCup Mathematical Modeling Challenge',
    org: 'National',
    year: '2018',
  },
  {
    title: 'Second Place, Student Structural Design Competition',
    org: 'Wuhan University',
    year: '2016 & 2017',
  },
  { title: 'Merit Student', org: 'Wuhan University', year: '2016, 2017 & 2020' },
  { title: 'Wuhan University Scholarship', org: 'Wuhan University', year: '2016 – 2018' },
]
