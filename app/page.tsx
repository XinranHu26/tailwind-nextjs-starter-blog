import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import { coreContent } from 'pliny/utils/contentlayer'
import Image from '@/components/Image'
import Link from '@/components/Link'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import publications from '@/data/publicationsData'
import { researchThemes } from '@/data/researchData'

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const { name, avatar, occupation, company } = mainContent

  const journals = publications.find((g) => g.heading === 'Journal Articles')?.items ?? []
  const conferences = publications.find((g) => g.heading === 'Conference Proceedings')?.items ?? []
  const selected = [...journals, ...conferences].slice(0, 4)

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Intro */}
      <div className="items-start space-y-6 pt-8 pb-10 md:grid md:grid-cols-3 md:space-y-0 md:gap-x-10">
        <div className="flex flex-col items-center md:items-start">
          {avatar && (
            <Image
              src={avatar}
              alt={name}
              width={256}
              height={256}
              className="h-44 w-44 rounded-full object-cover md:h-56 md:w-56"
              priority
            />
          )}
          <div className="mt-5 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
            <SocialIcon kind="scholar" href={siteMetadata.scholar} size={6} />
          </div>
        </div>

        <div className="md:col-span-2">
          <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            {name}
          </h1>
          <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">{occupation}</p>
          <p className="text-gray-500 dark:text-gray-400">{company}</p>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
            <a
              className="hover:text-primary-500 dark:hover:text-primary-400"
              href={`mailto:${siteMetadata.email}`}
            >
              {siteMetadata.email}
            </a>
            <a
              className="hover:text-primary-500 dark:hover:text-primary-400"
              href={`mailto:${siteMetadata.altEmail}`}
            >
              {siteMetadata.altEmail}
            </a>
          </div>
          <div className="prose dark:prose-invert mt-6 max-w-none">
            <MDXLayoutRenderer code={author.body.code} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/static/Hu_Xinran_CV.pdf"
              className="bg-primary-500 hover:bg-primary-600 rounded-md px-4 py-2 text-sm font-medium text-white"
            >
              Download CV
            </Link>
            <Link
              href="/publications"
              className="rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:border-gray-400 dark:border-gray-600 dark:text-gray-200 dark:hover:border-gray-500"
            >
              All publications
            </Link>
          </div>
        </div>
      </div>

      {/* Research themes */}
      <div className="py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Research
          </h2>
          <Link
            href="/research"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
          >
            All projects &rarr;
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {researchThemes.slice(0, 4).map((theme) => (
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
      </div>

      {/* Selected publications */}
      <div className="py-10">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Selected Publications
          </h2>
          <Link
            href="/publications"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-medium"
          >
            See all &rarr;
          </Link>
        </div>
        <ul className="mt-6 space-y-5">
          {selected.map((pub) => (
            <li key={pub.title} className="text-sm leading-6">
              <p className="text-gray-500 dark:text-gray-400">
                {pub.authors} ({pub.year}).
              </p>
              <p className="font-medium text-gray-900 dark:text-gray-100">
                {pub.doi ? (
                  <Link href={pub.doi} className="hover:text-primary-500">
                    {pub.title}
                  </Link>
                ) : (
                  pub.title
                )}
              </p>
              <p className="text-gray-500 italic dark:text-gray-400">{pub.venue}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
