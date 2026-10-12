import Link from '@/components/Link'
import publications from '@/data/publicationsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Publications' })

export default function Page() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
          Publications
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Journal articles, conference proceedings, technical reports, and presentations.
        </p>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {publications.map((group) => (
          <section key={group.heading} className="py-8">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {group.heading}
            </h2>
            {group.blurb && (
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{group.blurb}</p>
            )}
            <ol className="mt-5 space-y-6">
              {group.items.map((pub) => (
                <li key={pub.title} className="flex gap-x-4">
                  <span className="mt-0.5 w-10 shrink-0 font-mono text-xs text-gray-400 dark:text-gray-500">
                    {pub.key ?? ''}
                  </span>
                  <div className="text-sm leading-6">
                    <p className="text-gray-600 dark:text-gray-400">
                      {pub.authors} ({pub.year}).
                    </p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {pub.doi || pub.url ? (
                        <Link
                          href={(pub.doi ?? pub.url) as string}
                          className="hover:text-primary-500 dark:hover:text-primary-400"
                        >
                          {pub.title}
                        </Link>
                      ) : (
                        pub.title
                      )}
                    </p>
                    <p className="text-gray-500 italic dark:text-gray-400">{pub.venue}</p>
                    {pub.note && (
                      <span className="mt-1 inline-block rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                        {pub.note}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>
    </div>
  )
}
