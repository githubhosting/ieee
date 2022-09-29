import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import Image from 'next/image'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'

import { ButtonLink } from '@/components/Button'
import { SectionHeading } from '@/components/SectionHeading'
import { Container } from '@/components/Cointainer1'

export default function Aboutus() {
  return (
    <>
      <div className="neumorphismbg">
        <Head>
          <title>About Us - IEEE | Computational Intelligence Society</title>
        </Head>
        <Header />
        <section>
          <div>
            <p className="bg-teal-accent-400 mt-8 mb-4 flex justify-center rounded-full px-3 py-px text-xl font-bold uppercase tracking-wider text-teal-900">
              About Us
            </p>
          </div>
          <div className="mt-6 flex justify-center px-4">
            <div class="max-w-2xl overflow-hidden rounded-lg bg-white shadow-md ">
              <img
                class="h-64 w-full object-cover"
                src="https://ieee-cis-sbc.org/assets/img/IEEE.jpg"
                alt="Article"
              />

              <div class="p-6">
                <div>
                  <a
                    href="https://www.ieee.org/"
                    class="mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline "
                  >
                    IEEE
                  </a>
                  <p class="mt-2 text-sm text-gray-600">
                    IEEE and its members inspire a global community to innovate
                    for a better tomorrow through highly cited publications,
                    conferences, technology standards, and professional and
                    educational activities. IEEE is the trusted “voice” for
                    engineering, computing, and technology information around
                    the globe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 mb-10 flex justify-center px-4">
            <div class="max-w-2xl overflow-hidden rounded-lg bg-white shadow-md ">
              <img
                class="h-40 w-full rounded-md object-cover shadow-md lg:h-60"
                src="https://ieee-cis-sbc.org/assets/img/CIS.png"
                alt="Article"
              />

              <div class="p-6">
                <div>
                  <a
                    href="https://cis.ieee.org/"
                    class="mt-2 block transform text-2xl font-semibold text-gray-800 transition-colors duration-300 hover:text-gray-600 hover:underline "
                  >
                    CIS Bangalore Chapter
                  </a>
                  <p class="mt-2 text-sm text-gray-600">
                    <b>IEEE Computational Intelligence Society (CIS)</b> is a
                    professional society of IEEE focusing on “the theory,
                    design, application, and development of biologically and
                    linguistically motivated computational paradigms emphasising
                    neural networks, connectionist systems, genetic algorithms,
                    evolutionary programming, fuzzy systems, and hybrid
                    intelligent systems in which these paradigms are contained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
