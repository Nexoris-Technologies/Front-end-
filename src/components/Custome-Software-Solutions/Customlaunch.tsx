'use client';

import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';

export default function CustomLaunch() {
  return (
    <div
      className="px-4 py-12"
      aria-labelledby="custom-launch-heading"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        <p
          id="custom-launch-heading"
          className="text-gray-800 text-lg leading-snug max-w-2xl"
        >
          Ready to stop forcing your team to work around bad tools? Let’s build
          software that works the way you do.
        </p>

        <Link
          href="/contact-us"
          className="inline-flex items-center justify-center gap-2 text-white bg-[#543CDA] hover:bg-primary-blue transition-colors duration-300 text-sm md:text-lg px-6 py-3 md:px-8 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#543CDA]"
          aria-label="Talk to our custom solutions team"
        >
          Talk to our team
          <BsArrowRight className="text-lg" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
