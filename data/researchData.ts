export interface Grant {
  id: string
  title: string
  sponsor: string
  period: string
  role: string
  amount?: string
  investigators: string
}

export const totalAwarded = '$916,250'

export const grantsAwarded: Grant[] = [
  {
    id: 'SPR-5000',
    title:
      'Retention of the Early-Career Highway Technician Workforce: Exploring and Addressing Their Career Trajectories and Challenges',
    sponsor: 'Indiana Department of Transportation (INDOT)',
    period: 'Oct 2025 – May 2027',
    role: 'Research Assistant',
    amount: '$276,248',
    investigators: 'Dr. Yunfeng Chen (PI), Dr. Jiansong Zhang (Co-PI), Dr. Steven Dunlop (Co-PI)',
  },
  {
    id: 'SPR-4838',
    title: 'Automated Personalized Ergonomic Risk Report Generation System',
    sponsor: 'Indiana Department of Transportation (INDOT)',
    period: 'Aug 2023 – Jun 2028',
    role: 'Lead Research Assistant',
    amount: '$283,508',
    investigators: 'Dr. Yunfeng Chen (PI), Dr. Yiheng Feng (Co-PI), Dr. Jiansong Zhang (Co-PI)',
  },
  {
    id: 'SPR-4806',
    title:
      'INDOT Training Gap Analysis, Developing a Training Program for INDOT Workforce Development and Smart Tool for Effective Planning for Workforce',
    sponsor: 'Indiana Department of Transportation (INDOT)',
    period: 'Oct 2023 – Oct 2025',
    role: 'Research Assistant',
    amount: '$256,665',
    investigators: 'Dr. Steven Dunlop (PI), Dr. Satish Ukkusuri (Co-PI), Dr. Yunfeng Chen (Co-PI)',
  },
  {
    id: 'SPR-4523',
    title: 'Applied Ergonomics',
    sponsor: 'Indiana Department of Transportation (INDOT)',
    period: 'Aug 2020 – Mar 2023',
    role: 'Research Assistant',
    amount: '$99,829',
    investigators: 'Dr. Yunfeng Chen (PI), Dr. Jiansong Zhang (Co-PI)',
  },
]

export interface Theme {
  title: string
  description: string
  tags: string[]
}

export const researchThemes: Theme[] = [
  {
    title: 'Markerless Human Pose Estimation in the Field',
    description:
      'Validating computer vision pose estimation models against Xsens inertial motion capture in real transportation maintenance work, so that ergonomic risk can be assessed from ordinary video rather than a lab setup.',
    tags: ['Computer Vision', 'Motion Capture', 'Validation'],
  },
  {
    title: 'Exoskeletons and Ergonomic Tools for Highway Crews',
    description:
      'Field studies measuring how passive back exoskeletons and add-on ergonomic shovel handles change trunk and shoulder kinematics, muscle activity, and perceived exertion during shoveling and lifting.',
    tags: ['Wearable Sensing', 'EMG', 'Usability'],
  },
  {
    title: 'Physiological Sensing of Physical Fatigue',
    description:
      'Classifying fatigue levels from heart rate, electrodermal activity, and skin temperature collected on working crews, and relating exertion to worker characteristics such as BMI, age, and tenure.',
    tags: ['Physiological Signals', 'Machine Learning', 'Occupational Health'],
  },
  {
    title: 'Workforce Development and Retention',
    description:
      'Analyzing exit survey data and career trajectories of early-career highway technicians to understand why workers leave and what training and support would keep them.',
    tags: ['Workforce', 'Survey Analysis', 'Transportation'],
  },
  {
    title: 'BIM and Project Organization Networks',
    description:
      'Earlier work using network analysis to study how building information modeling affects project performance across life-cycle stages, and how organizations synchronize in response to complex project delays.',
    tags: ['BIM', 'Network Analysis', 'Project Management'],
  },
]
