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
            {/* <p class="mx-auto text-base leading-relaxed lg:w-2/3">
             sample text
            </p> */}
          </div>
          <div class="-m-4 flex flex-wrap justify-center gap-2.5 md:gap-3 lg:gap-5">
            <div class="rounded-xl border px-14 py-6 shadow sm:w-full md:w-1/2 lg:w-1/4">
              <div class="flex h-full flex-col items-center text-center">
                <div alt="team">
                  <Image
                    class="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                    src={img2}
                    height={192}
                    width={192}
                  />
                </div>
                <div class="w-full">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Dr. Megha. P. Arakeri
                  </h2>
                  <h3 class="mb-3 text-gray-500">Chair Person</h3>
                  <a
                    href="/documents/Megha-profile.pdf"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center justify-center rounded-md bg-sky-500 py-2 px-4 text-center text-sm font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10 "
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div class="rounded-xl border px-14 py-6 shadow md:w-1/2 lg:w-1/4">
              <div class="flex h-full flex-col items-center text-center">
                <div alt="team">
                  <Image
                    class="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                    src={img5}
                    height={192}
                    width={192}
                  />
                </div>
                <div class="w-full">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Mr. A. T. Kishore
                  </h2>
                  <h3 class="mb-3 text-gray-500">Vice Chair</h3>
                  <a
                    href="/documents/Kishore-profile.pdf"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center justify-center rounded-md bg-sky-500 py-2 px-4 text-center text-sm font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10 "
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div class="rounded-xl border px-14 py-6 shadow md:w-1/2 lg:w-1/4">
              <div class="flex h-full flex-col items-center text-center">
                <div alt="team">
                  <Image
                    class="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                    src={img1}
                    height={192}
                    width={192}
                  />
                </div>
                <div class="w-full">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Dr. Vinutha. D.C
                  </h2>
                  <h3 class="mb-3 text-gray-500">Secretary</h3>
                  <a
                    href="/documents/Vinutha-profile.pdf"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center justify-center rounded-md bg-sky-500 py-2 px-4 text-center text-sm font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10 "
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div class="rounded-xl border py-6 px-14 shadow md:w-1/2 lg:w-1/4">
              <div class="flex h-full flex-col items-center text-center">
                <div alt="team">
                  <Image
                    class="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                    src={img4}
                    height={192}
                    width={192}
                  />
                </div>
                <div class="w-full">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Dr. Sumana. M
                  </h2>
                  <h3 class="mb-3 text-gray-500">Treasurer</h3>
                  <a
                    href="/documents/Sumana-profile.pdf"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center justify-center rounded-md bg-sky-500 py-2 px-4 text-center text-sm font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10 "
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div class="rounded-xl border px-14 py-6 shadow md:w-1/2 lg:w-1/4">
              <div class="flex h-full flex-col items-center text-center">
                <div alt="team">
                  <Image
                    class="mb-4 h-48 w-48 flex-shrink-0 rounded-lg object-cover object-center sm:mb-0"
                    src={img3}
                    height={192}
                    width={192}
                  />
                </div>
                <div class="w-full">
                  <h2 class="title-font text-lg font-medium text-gray-900">
                    Dr. Vijaya Kumar B. P
                  </h2>
                  <h3 class="mb-3 text-gray-500">Advisor</h3>
                  <a
                    href="/documents/Vijaya Kumar-profile.pdf"
                    target="_blank"
                    rel="noreferrer"
                    class="inline-flex items-center justify-center rounded-md bg-sky-500 py-2 px-4 text-center text-sm font-normal text-white hover:bg-opacity-90 lg:px-8 xl:px-10 "
                  >
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
