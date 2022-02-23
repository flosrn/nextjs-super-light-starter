import React from 'react';

import Layout from '@/components/layout/Layout';

import Vercel from '~/svg/Vercel.svg';

function HomePage() {
  return (
    <Layout>
      <main>
        <section>
          <div className="tw-layout tw-flex tw-min-h-screen tw-flex-col tw-items-center tw-justify-center tw-text-center">
            <Vercel className="tw-text-5xl" />
            <h1 className="tw-mt-4 tw-font-bold">
              <span className="tw-bg-gradient-to-r tw-from-indigo-500 tw-via-purple-500 tw-to-pink-500 tw-bg-clip-text tw-text-transparent">
                Demo
              </span>{' '}
              Mangling{' '}
              <span className="tw-bg-gradient-to-r tw-from-indigo-500 tw-via-purple-500 tw-to-pink-500 tw-bg-clip-text tw-text-transparent">
                TailwindCSS{' '}
              </span>
              class
            </h1>
            <p className="text-tw-primary-dark tw-mt-2 tw-text-sm">
              A minimal starter for Next.js, Tailwind CSS, and TypeScript with
              Absolute Import and pre-configured with Husky{' '}
            </p>
            <p className="text-tw-primary-medium tw-mt-2 tw-text-sm">
              <a
                href="https://github.com/flosrn/nextjs-super-light-starter/tree/with-mangle-css-class"
                className="tw-block tw-py-1 tw-font-medium tw-font-medium tw-text-indigo-500 hover:tw-underline"
              >
                See the repository
              </a>
            </p>

            <footer className="tw-absolute tw-bottom-2">
              © {new Date().getFullYear()} By{' '}
              <a
                href="https://github.com/flosrn"
                className="tw-font-bold tw-text-indigo-500 hover:tw-underline"
              >
                Flosrn
              </a>
            </footer>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default HomePage;
