export interface Publication {
  /** Citation key shown as a badge, e.g. "J02" */
  key?: string
  authors: string
  year: string
  title: string
  venue: string
  doi?: string
  url?: string
  /** e.g. "Best Paper Award", "Abstract only", "Full draft completed" */
  note?: string
  /** Featured on the home page */
  selected?: boolean
  /** Theme label shown beside a featured entry, e.g. "Usability" */
  topic?: string
}

export interface PublicationGroup {
  heading: string
  /** Optional short line under the heading */
  blurb?: string
  items: Publication[]
}

/** Used to bold your own name in author lists. */
export const selfName = 'Hu, X.'

const publications: PublicationGroup[] = [
  {
    heading: 'Journal Articles',
    items: [
      {
        key: 'J02',
        authors: 'Yang, L., Hu, X., & Zhao, X.',
        year: '2025',
        title:
          'Influence on BIM project performance at project life-cycle stages: A network perspective',
        venue: 'Journal of Building Design and Environment, 3(3), 202578',
        doi: 'https://doi.org/10.70401/jbde.2025.0022',
      },
      {
        key: 'J01',
        authors: 'Yang, L., Hu, X., & Zhao, X.',
        year: '2022',
        title:
          'Organization synchronization in response to complex project delays: Network-based analysis',
        venue: 'Buildings, 12(5), 662',
        doi: 'https://doi.org/10.3390/buildings12050662',
      },
    ],
  },
  {
    heading: 'Manuscripts in Preparation',
    items: [
      {
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2026',
        title:
          'Effects of an add-on ergonomic handle on trunk and shoulder kinematics during simulated highway maintenance shoveling: A markerless 3D motion capture study',
        venue: 'Applied Ergonomics',
        note: 'To be submitted',
      },
      {
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2026',
        title:
          'Effects of ergonomic handle and back exoskeleton on physical fatigue during shoveling: Physiological and subjective responses',
        venue: 'Applied Ergonomics',
        note: 'To be submitted',
      },
      {
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2026',
        title:
          'Accuracy of markerless human pose estimation models in field transportation maintenance work: A validation study using Xsens motion capture',
        venue: 'Automation in Construction',
        note: 'In preparation',
      },
    ],
  },
  {
    heading: 'Conference Proceedings',
    items: [
      {
        key: 'C11',
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2026',
        title:
          'Impact of body mass index, tenure length, and age on physical exertion of transportation maintenance workers during simulated asphalt shoveling',
        venue:
          'AHFE International Conference on Human Factors in Design, Engineering, and Computing, Honolulu, HI',
        note: 'Full draft completed',
      },
      {
        key: 'C10',
        selected: true,
        topic: 'Usability',
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2025',
        title:
          'Usability of passive back exoskeletons and ergonomic handles for transportation maintenance workers: A field-based study in shoveling',
        venue: 'CIB Conferences, 1(1), 175',
        doi: 'https://doi.org/10.7771/3067-4883.1930',
      },
      {
        key: 'C09',
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2025',
        title:
          'The impacts of back exoskeletons and ergonomic handles on joint mechanics during shoveling activities',
        venue: 'Transportation Research Board Annual Meeting, Washington, DC',
        note: 'Abstract only',
      },
      {
        key: 'C08',
        selected: true,
        topic: 'Ergonomics',
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2024',
        title:
          'Video-based ergonomic risk assessment among transportation maintenance workers in shoveling',
        venue:
          'AHFE International Conference on Human Factors in Design, Engineering, and Computing, Honolulu, HI',
        doi: 'http://doi.org/10.54941/ahfe1005718',
      },
      {
        key: 'C07',
        selected: true,
        topic: 'Fatigue',
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2024',
        title:
          'Classification of physical fatigue levels in shoveling using heart rate, electrodermal data, and skin temperature',
        venue:
          'International Conference on Computing in Civil and Building Engineering (pp. 259–269), Springer',
        doi: 'https://doi.org/10.1007/978-3-031-84224-5_21',
      },
      {
        key: 'C06',
        authors: 'Guo, X., Hu, X., Chen, Y., & Zhang, J.',
        year: '2024',
        title:
          'Assessing physical fatigue in highway maintenance workers through electromyography: The impact of lifting weights and heights on bag handling',
        venue: 'Computing in Civil Engineering 2024 (pp. 821–829)',
        doi: 'https://doi.org/10.1061/9780784486139.088',
      },
      {
        key: 'C05',
        selected: true,
        topic: 'BIM',
        authors: 'Hu, X., Guo, X., & Chen, Y.',
        year: '2024',
        title: "BIM's impact on project management performance",
        venue: 'Construction Research Congress 2024 (pp. 711–721), Des Moines, IA',
        doi: 'https://doi.org/10.1061/9780784485286.07',
      },
      {
        key: 'C04',
        authors: 'Guo, X., Hu, X., & Chen, Y.',
        year: '2023',
        title:
          "Exploration of back exoskeleton's effectiveness on transportation maintenance workers during lifting activities",
        venue:
          '14th International Conference on Applied Human Factors and Ergonomics, San Francisco, CA',
        doi: 'https://dx.doi.org/10.54941/ahfe1003044',
      },
      {
        key: 'C03',
        authors: 'Hu, X., & Chen, Y.',
        year: '2023',
        title: 'Impact of BIM on project performance',
        venue:
          'European Conference on Computing in Construction & 40th International CIB W78 Conference, 4(1–8)',
        doi: 'https://doi.org/10.35490/EC3.2023.293',
      },
      {
        key: 'C02',
        authors: 'Yang, L., Lou, J., & Hu, X.',
        year: '2021',
        title:
          'Increasing resilience of utility tunnel PPP projects through risk management: A case in Shiyan City',
        venue:
          'International Symposium on Advancement of Construction Management and Real Estate (pp. 1577–1591), Springer',
        doi: 'https://doi.org/10.1007/978-981-19-5256-2_121',
      },
      {
        key: 'C01',
        authors: 'Yang, L., Hu, X., & Lou, J.',
        year: '2020',
        title:
          'Organizational interaction and dilemma governance strategies in response to the COVID-19 epidemic',
        venue:
          'International Symposium on Advancement of Construction Management and Real Estate (pp. 85–105), Springer',
        doi: 'https://doi.org/10.1007/978-981-16-3587-8_8',
      },
    ],
  },
  {
    heading: 'Technical Reports',
    items: [
      {
        key: 'R01',
        authors:
          'Dunlop, S. R., Ukkusuri, S. V., Chen, Y., Thakkar, D. J., Ka, E., Mittal, S., Hu, X., Wang, Z., Khanna, I., & Tammineni, R.',
        year: '2026',
        title:
          'INDOT training gap analysis, developing a training program for INDOT workforce development (new, front-line, supervisors) and smart tool for effective planning for workforce',
        venue:
          'Joint Transportation Research Program Publication No. FHWA/IN/JTRP-2026/12, Purdue University',
        doi: 'https://doi.org/10.5703/1288284318620',
      },
    ],
  },
  {
    heading: 'Presentations & Posters',
    items: [
      {
        key: 'P04',
        authors: 'Hu, X., Guo, X., Chen, Y., & Zhang, J.',
        year: '2025',
        title:
          'The impacts of back exoskeletons and ergonomic handles on joint mechanics during shoveling activities',
        venue: 'Transportation Research Board Annual Meeting, Washington, DC',
        note: 'Lecture presentation',
      },
      {
        key: 'P03',
        authors: 'Guo, X., Hu, X., Chen, Y., & Zhang, J.',
        year: '2024',
        title: 'Applied ergonomics',
        venue: 'Construction Advisory Council, West Lafayette, IN',
      },
      {
        key: 'P02',
        authors: 'Guo, X., Hu, X., Chen, Y., & Zhang, J.',
        year: '2023–2026',
        title: 'Applied ergonomics',
        venue: 'Purdue Road School, West Lafayette, IN',
      },
      {
        key: 'P01',
        authors: 'Guo, X., Hu, X., Chen, Y., & Zhang, J.',
        year: '2023–2026',
        title: 'Applied ergonomics',
        venue: 'Joint Transportation Research Program Poster Session, Indianapolis, IN',
      },
    ],
  },
]

export default publications
