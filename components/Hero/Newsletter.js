import BLOG from '@/blog.config'
import Link from 'next/link'
import Social from '../Social.js'
import { useState } from 'react'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import { NewspaperIcon } from '@heroicons/react/outline'

const NewsletterHero = () => {
  const [showLoading, setShowLoading] = useState(false)
  const { locale } = useRouter()
  const t = lang[locale]
  return (
    <>
      <div className='container mx-auto flex px-5 py-2 mb-10 md:flex-row flex-col items-center'>
        <div className='flex flex-col md:w-4/5 md:items-start mb-6 md:mb-0 md:text-left'>
          <p className='mb-2 leading-relaxed'>
            {t.HERO.NEWSLETTER.TEXT_HEAD}
          </p>
          <ul className='m-4 leading-relaxed'>
            <li className='list-disc'>{t.HERO.NEWSLETTER.TEXT_1}</li>
            <li className='list-disc'>{t.HERO.NEWSLETTER.TEXT_2}</li>
            <li className='list-disc'>{t.HERO.NEWSLETTER.TEXT_3}</li>
          </ul>
          <Social />

          <h2 className='text-xl pt-8 pb-4 font-light text-gray-500 dark:text-day'>
            {t.HERO.NEWSLETTER.SUBSCRIPTION_HEAD}
          </h2>

          <div className='flex flex-col sm:flex-row sm:justify-center gap-4'>
            <Link passHref href={BLOG.telegramChannelUrl}>
              <button className='bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='text-gray-600 dark:text-day w-7 h-7'
                  viewBox='0 0 24 24'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z' />
                </svg>
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.NEWSLETTER.TG_CHANNEL}
                  </span>
                  <span className='font-medium'>@{BLOG.telegramChannelName}</span>
                </span>
              </button>
            </Link>
            {showLoading ? (
              <button
                disabled
                className='bg-gray-200 dark:bg-gray-600 cursor-not-allowed inline-flex py-3 px-5 rounded-lg items-center'
              >
                <svg
                  className='animate-spin -ml-1 mr-3 h-5 w-5 text-gray-600 dark:text-day'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='gray'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
                <span className='ml-4 flex items-start flex-col leading-none'>
                  <span className='text-xs text-gray-600 dark:text-day mb-1'>
                    {t.HERO.RSS_BUTTON_DES_LOADING}
                  </span>
                  <span className='font-medium'>{t.HERO.RSS_BUTTON_LOADING}</span>
                </span>
              </button>
            ) : (
              <Link passHref href='#'>
                <button
                  onClick={() => setShowLoading(true)}
                  className='bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    className='text-gray-600 dark:text-day w-6 h-6'
                    viewBox='0 0 24 24'
                  >
                    <path fill='none' d='M0 0h24v24H0z' />
                    <path d='M3 17a4 4 0 0 1 4 4H3v-4zm0-7c6.075 0 11 4.925 11 11h-2a9 9 0 0 0-9-9v-2zm0-7c9.941 0 18 8.059 18 18h-2c0-8.837-7.163-16-16-16V3z' />
                  </svg>
                  <span className='ml-4 flex items-start flex-col leading-none'>
                    <span className='text-xs text-gray-600 dark:text-day mb-1'>
                      {t.HERO.RSS_BUTTON_DES}
                    </span>
                    <span className='font-medium'>{t.HERO.NEWSLETTER.RSS_BUTTON}</span>
                  </span>
                </button>
              </Link>
            )}
          </div>
        </div>
        <div className='w-1/5'>
          <NewspaperIcon className='object-cover object-center text-gray-500 dark:text-gray-300' />
        </div>
      </div>
    </>
  )
}

export default NewsletterHero
