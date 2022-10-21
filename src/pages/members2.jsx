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
    name: 'Dr. Vijaya Kumar B. P',
    designation: 'Advisor',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.',
    image: img3,
    profile: '/documents/Vijaya Kumar-profile.pdf',
  },
  {
    name: 'Dr. Megha. P. Arakeri',
    designation: 'Chair',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.',
    image: img2,
    profile: '/documents/Megha-profile.pdf',
  },
  {
    name: 'Mr. A. T. Kishore',
    designation: 'Vice Chair',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.',
    image: img5,
    profile: '/documents/Kishore-profile.pdf',
  },
  {
    name: 'Dr. Vinutha. D.C',
    designation: 'Secretary',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.',
    image: img1,
    profile: '/documents/Vinutha-profile.pdf',
  },
  {
    name: 'Dr. Sumana. M',
    designation: 'Treasurer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.',
    image: img4,
    profile: '/documents/Sumana-profile.pdf',
  },
]

export default function Login() {
  return (
    <>
      <Head>
        <title>
          Office Bearers - IEEE | Computational Intelligence Society
        </title>
      </Head>
      <Header />
      <section class="bg-white">
        <div class="container mx-auto px-6 py-10">
          <h1 class="text-center text-3xl font-semibold capitalize text-gray-800">
            Our <span class="text-blue-500">Executive Team</span>
          </h1>

          <p class="mx-auto my-6 max-w-2xl text-center text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            incidunt ex placeat modi magni quia error alias, adipisci rem
            similique, at omnis eligendi optio eos harum.
          </p>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-2">
            {members.map((member) => (
              <div class="group transform cursor-pointer rounded-xl border px-12 py-8 transition-colors duration-300 hover:border-transparent hover:bg-blue-600 ">
                <div class="flex flex-col sm:-mx-4 sm:flex-row">
                  <div>
                    <Image
                      class="flex-shrink-0 rounded-lg object-cover  sm:mx-4"
                      src={member.image}
                      alt=""
                    />
                  </div>

                  <div class="mt-4 sm:mx-4 sm:mt-0">
                    <h1 class="text-xl font-semibold capitalize text-gray-700 group-hover:text-white ">
                      {member.name}
                    </h1>

                    <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 ">
                      {member.designation}
                    </p>
                  </div>
                </div>

                <p class="mt-4 capitalize text-gray-500 group-hover:text-gray-300 ">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}