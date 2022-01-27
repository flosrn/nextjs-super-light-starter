import React from 'react';

import Layout from '@/components/layout/Layout';

import Vercel from '~/svg/Vercel.svg';

function HomePage() {
  return (
    <Layout>
      <main>
        <section>
          <div className="layout flex min-h-screen flex-col items-center justify-center text-center">
            <Vercel className="text-5xl" />
            <h1 className="mt-4 font-bold">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Super light
              </span>{' '}
              Next.js + Tailwind CSS + TypeScript{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                starter
              </span>
            </h1>
            <p className="text-tw-primary-dark mt-2 text-sm">
              A starter for Next.js, Tailwind CSS, and TypeScript with Absolute
              Import, Seo, Link component, pre-configured with Husky{' '}
            </p>
            <p className="text-tw-primary-medium mt-2 text-sm">
              <a
                href="https://github.com/flosrn/nextjs-ts-starter"
                className="block py-1 font-medium font-medium text-indigo-500 hover:underline"
              >
                See the repository
              </a>
            </p>

            <footer className="absolute bottom-2">
              © {new Date().getFullYear()} By{' '}
              <a
                href="https://flosrn.com?ref=next-ts-starter"
                className="font-bold text-indigo-500 hover:underline"
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
