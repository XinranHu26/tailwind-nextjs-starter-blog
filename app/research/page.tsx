import { grantsAwarded, researchThemes, totalAwarded } from '@/data/researchData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Research' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          Research
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Measuring and reducing physical risk in field maintenance work, using computer vision and
          wearable sensing.
        </p>
      </div>

      <section className="py-10">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Research Themes
        </h2>
        <div className="mt-6 space-y-6">
          {researchThemes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-lg border border-gray-200 p-5 dark:border-gray-700"
            >
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">{theme.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {theme.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {theme.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-primary-600 dark:text-primary-400 rounded bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Funded Projects
          </h2>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Total awarded: {totalAwarded}
          </span>
        </div>
        <div className="mt-6 space-y-8">
          {grantsAwarded.map((grant) => (
            <div key={grant.id} className="border-l-2 border-gray-200 pl-5 dark:border-gray-700">
              <div className="flex flex-wrap items-baseline gap-x-3">
                <span className="text-primary-600 dark:text-primary-400 font-mono text-xs">
                  {grant.id}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{grant.period}</span>
                {grant.amount && (
                  <span className="text-sm text-gray-500 dark:text-gray-400">{grant.amount}</span>
                )}
              </div>
              <h3 className="mt-1 font-semibold text-gray-900 dark:text-gray-100">{grant.title}</h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {grant.sponsor} &middot; <span className="font-medium">{grant.role}</span>
              </p>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{grant.investigators}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
