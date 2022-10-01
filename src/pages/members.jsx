import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'
import img1 from '@/images/members/vinutha.png'
import img2 from '@/images/members/megha.png'
import img3 from '@/images/members/vijayakumar.png'
import img4 from '@/images/members/sumana.png'
import img5 from '@/images/members/kishore.png'

const members = [
  {
    name: 'Dr. Megha. P. Arakeri',
    designation: 'Chair',
    image: img2,
    profile: '/documents/Megha-profile.pdf',
  },
  {
    name: 'Mr. A. T. Kishore',
    designation: 'Vice Chair',
    image: img5,
    profile: '/documents/Kishore-profile.pdf',
  },
  {
    name: 'Dr. Vinutha. D.C',
    designation: 'Secretary',
    image: img1,
    profile: '/documents/Vinutha-profile.pdf',
  },
  {
    name: 'Dr. Sumana. M',
    designation: 'Treasurer',
    image: img4,
    profile: '/documents/Sumana-profile.pdf',
  },
  {
    name: 'Dr. Vijaya Kumar B. P',
    designation: 'Advisor',
    image: img3,
    profile: '/documents/Vijayakumar-profile.pdf',
  },
]

export default function Login() {
  return (
    <>
      <Head>
        <title>Members - IEEE | Computational Intelligence Society</title>
      </Head>
      <Header />
      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-12">
          <div class="mb-20 flex w-full flex-col text-center">
            <h1 class="title-font mb-4 text-2xl font-medium text-gray-900">
              Office Bearers
            </h1>
            <p class="mx-auto text-base leading-relaxed lg:w-2/3">
              IEEE Computational Intelligence Society, Bangalore
            </p>
          </div>
          <div class="-m-4 flex flex-wrap justify-center gap-2.5 md:gap-3 lg:gap-5">
            {members.map((member) => (
              <div class="rounded-xl border px-14 py-6 shadow sm:w-full md:w-1/2 lg:w-1/4">
                <div class="flex h-full flex-col items-center text-center">
                  <div alt="team">
                    <Image
                      class="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                      src={member.image}
                      height={192}
                      width={192}
                    />
                  </div>
                  <div class="w-full">
                    <h2 class="title-font text-lg font-medium text-gray-900">
                      {member.name}
                    </h2>
                    <h3 class="mb-3 text-gray-500">Chair Person</h3>
                    <a
                      href={member.profile}
                      target="_blank"
                      rel="noreferrer"
                      class="inline-flex items-center justify-center py-2 px-4 text-center text-sky-500 lg:px-8 xl:px-10"
                    >
                      View Profile
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="ml-2 h-4 w-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
