export interface Degree {
  degree: string
  field: string
  institution: string
  location: string
  date: string
  advisor?: string
  thesisLabel?: string
  thesis?: string
}

const education: Degree[] = [
  {
    degree: 'Ph.D.',
    field: 'Construction Management Technology',
    institution: 'Purdue University',
    location: 'West Lafayette, IN',
    date: 'Expected May 2027',
    advisor: 'Dr. Yunfeng (Cindy) Chen',
    thesisLabel: 'Dissertation',
    thesis:
      'A Computer Vision and Multi-Sensor Framework for Human Pose Estimation and Integrated Workplace Risk Assessment in Field Maintenance Tasks',
  },
  {
    degree: 'M.S.',
    field: 'Civil Engineering, Project Management',
    institution: 'Wuhan University',
    location: 'Wuhan, China',
    date: 'June 2022',
    advisor: 'Dr. Lin Yang',
    thesisLabel: 'Thesis',
    thesis:
      'Research on Dynamic Evolution Mechanism of Inter-organization Field in Complex Projects',
  },
  {
    degree: 'B.S.',
    field: 'Civil Engineering',
    institution: 'Wuhan University',
    location: 'Wuhan, China',
    date: 'June 2019',
    advisor: 'Dr. Lin Yang',
    thesisLabel: 'Thesis',
    thesis:
      'Organizational Synchronization Strategies for Addressing Construction Delays in Complex Projects',
  },
]

export default education
