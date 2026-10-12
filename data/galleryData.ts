export interface Photo {
  /** Path under /public */
  src: string
  /** Intrinsic size of the processed file, used by next/image */
  width: number
  height: number
  /** Sentence describing what is happening */
  caption: string
  /** Event name and city */
  event?: string
  /** e.g. "January 2025" */
  date?: string
}

export interface PhotoSection {
  heading: string
  blurb?: string
  photos: Photo[]
}

/**
 * HOW TO ADD A PHOTO
 * 1. Drop the original into content-inbox/photos-presentations/ (or photos-fieldwork/)
 * 2. Tell Claude, or resize it yourself into public/static/images/gallery/
 * 3. Add an entry below. Empty sections are hidden automatically.
 */
const gallery: PhotoSection[] = [
  {
    heading: 'Conferences & Presentations',
    blurb: 'Lecture presentations, poster sessions, and conference travel.',
    photos: [
      {
        src: '/static/images/gallery/trb-2025-podium.jpg',
        width: 1600,
        height: 1926,
        caption:
          'Presenting our work on how back exoskeletons and ergonomic handles change joint mechanics during shoveling.',
        event: 'Transportation Research Board Annual Meeting, Washington, DC',
        date: 'January 2025',
      },
      {
        src: '/static/images/gallery/trb-2025-signage.jpg',
        width: 1600,
        height: 1403,
        caption: 'At the Transportation Research Board Annual Meeting.',
        event: 'Transportation Research Board Annual Meeting, Washington, DC',
        date: 'January 2025',
      },
      {
        src: '/static/images/gallery/ahfe-2024-honolulu.jpg',
        width: 1080,
        height: 1440,
        caption:
          'With labmates at the AHFE International Conference, where I presented video-based ergonomic risk assessment for transportation maintenance workers.',
        event: 'AHFE International Conference, Honolulu, HI',
        date: '2024',
      },
      {
        src: '/static/images/gallery/wbc-2025-presentation.jpg',
        width: 1600,
        height: 1200,
        caption:
          'Presenting a field-based usability study of passive back exoskeletons and ergonomic handles.',
        event: 'CIB World Building Congress, West Lafayette, IN',
        date: '2025',
      },
      {
        src: '/static/images/gallery/wbc-2025-group.jpg',
        width: 1600,
        height: 1200,
        caption: 'With fellow presenters at the CIB World Building Congress.',
        event: 'CIB World Building Congress, West Lafayette, IN',
        date: '2025',
      },
      {
        src: '/static/images/gallery/jtrp-poster-session.jpg',
        width: 1600,
        height: 1200,
        caption: 'With labmates at the Joint Transportation Research Program poster session.',
        event: 'JTRP Poster Session, Indianapolis, IN',
      },
      {
        src: '/static/images/gallery/jtrp-poster-discussion.jpg',
        width: 870,
        height: 652,
        caption: 'Discussing our applied ergonomics results with visitors at the poster session.',
        event: 'JTRP Poster Session, Indianapolis, IN',
      },
      {
        src: '/static/images/gallery/road-school-poster.jpg',
        width: 1600,
        height: 1200,
        caption: 'Presenting the Applied Ergonomics poster at Purdue Road School.',
        event: 'Purdue Road School, West Lafayette, IN',
      },
      {
        src: '/static/images/gallery/road-school-poster-board.jpg',
        width: 1280,
        height: 1707,
        caption: 'At the Purdue Road School poster session.',
        event: 'Purdue Road School, West Lafayette, IN',
      },
    ],
  },
  {
    heading: 'Teaching',
    blurb: 'Lecturing for CM 301, Introduction to Construction Company Financial Management.',
    photos: [
      {
        src: '/static/images/gallery/lecture-hall-wide.jpg',
        width: 1600,
        height: 1067,
        caption: 'Delivering a lecture on statement analysis to the CM 301 class.',
        event: 'CM 301, Purdue University',
      },
      {
        src: '/static/images/gallery/lecture-podium.jpg',
        width: 1600,
        height: 2400,
        caption: 'Teaching line-item, horizontal, and vertical analysis.',
        event: 'CM 301, Purdue University',
      },
      {
        src: '/static/images/gallery/lecture-cm301.jpg',
        width: 1600,
        height: 1200,
        caption: 'A lecture session on construction company financial management.',
        event: 'CM 301, Purdue University',
      },
    ],
  },
  {
    heading: 'Field Work',
    blurb:
      'Data collection with INDOT highway maintenance crews for the automated ergonomic risk assessment project (SPR-4838).',
    photos: [
      {
        src: '/static/images/gallery/fieldwork-indot-trucks.jpg',
        width: 1600,
        height: 1620,
        caption: 'On site with the INDOT maintenance fleet before a data collection session.',
        event: 'INDOT field study, Indiana',
      },
      {
        src: '/static/images/gallery/fieldwork-camera-setup.jpg',
        width: 1178,
        height: 1466,
        caption: 'Setting up cameras to capture worker motion for markerless pose estimation.',
        event: 'INDOT field study, Indiana',
      },
      {
        src: '/static/images/gallery/fieldwork-roadside-crew.jpg',
        width: 1600,
        height: 1200,
        caption: 'Recording a maintenance crew at work along the roadway.',
        event: 'INDOT field study, Indiana',
      },
      {
        src: '/static/images/gallery/fieldwork-paving-operation.jpg',
        width: 1600,
        height: 2133,
        caption: 'Collecting data during an active pavement maintenance operation.',
        event: 'INDOT field study, Indiana',
      },
      {
        src: '/static/images/gallery/fieldwork-sensor-station.jpg',
        width: 1600,
        height: 2133,
        caption:
          'The roadside data station used to log physiological, motion, and environmental measurements.',
        event: 'INDOT field study, Indiana',
      },
      {
        src: '/static/images/gallery/fieldwork-crew-briefing.jpg',
        width: 1600,
        height: 1200,
        caption: 'Briefing the maintenance crew before a field session.',
        event: 'INDOT field study, Indiana',
      },
    ],
  },
]

export default gallery
