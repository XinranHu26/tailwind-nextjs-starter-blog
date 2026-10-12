import {
  awards,
  conferenceReviewing,
  courses,
  journalReviewing,
  mentoring,
  professionalSocieties,
  teachingInterests,
} from '@/data/teachingData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Teaching & Service' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          Teaching &amp; Service
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Teaching assistantships, mentoring, peer review, and awards.
        </p>
      </div>

      <section className="py-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Teaching Interests
        </h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {teachingInterests.map((item) => (
            <span
              key={item}
              className="rounded bg-gray-100 px-2.5 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Teaching Assistant
        </h2>
        <div className="mt-6 space-y-8">
          {courses.map((course) => (
            <div key={course.code} className="border-l-2 border-gray-200 pl-5 dark:border-gray-700">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-mono text-sm">
                  {course.code}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{course.terms}</span>
              </div>
              <h3 className="mt-1 font-semibold text-gray-900 dark:text-gray-100">
                {course.title}
              </h3>
              {course.enrollment && (
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{course.enrollment}</p>
              )}
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-400">
                {course.duties.map((duty) => (
                  <li key={duty}>{duty}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Mentoring
        </h2>
        <div className="mt-6 space-y-6">
          {mentoring.map((mentee) => (
            <div key={mentee.name}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{mentee.name}</h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">{mentee.period}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {mentee.level} &middot; {mentee.role}
              </p>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {mentee.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Service
        </h2>
        <div className="mt-6 grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Professional Societies
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {professionalSocieties.map((society) => (
                <li key={society.name}>
                  {society.name}
                  <span className="block text-xs text-gray-500 dark:text-gray-500">
                    {society.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Journal Reviewing
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {journalReviewing.map((journal) => (
                <li key={journal}>{journal}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
              Conference Reviewing
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {conferenceReviewing.map((conf) => (
                <li key={conf}>{conf}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-8">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Honors &amp; Awards
        </h2>
        <ul className="mt-6 space-y-3">
          {awards.map((award) => (
            <li key={`${award.title}-${award.year}`} className="flex gap-x-4 text-sm">
              <span className="w-28 shrink-0 text-gray-500 dark:text-gray-400">{award.year}</span>
              <span>
                <span className="font-medium text-gray-900 dark:text-gray-100">{award.title}</span>
                <span className="block text-gray-500 dark:text-gray-400">{award.org}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
