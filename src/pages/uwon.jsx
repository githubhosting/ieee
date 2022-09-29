import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from '@react-hook/window-size'

import { AuthLayout } from '@/components/AuthLayout'
import { Input } from '@/components/Input'
import { Logo } from '@/components/Logo'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer1'
import Confetti from 'react-confetti'

export default function Projects() {
  const [width, height] = useWindowSize()
  const onlyWidth = useWindowWidth()
  const onlyHeight = useWindowHeight()
  return (
    <>
      <Confetti width={width} height={height} />

      <div class="bg-white  ">
        <div class="z-20 mx-auto w-full py-12 px-4 text-center sm:px-6 lg:py-16 lg:px-8">
          <h2 class="text-3xl font-extrabold text-black  sm:text-4xl">
            <span class="block">Congratulations  !!</span>
            <span class="block text-indigo-500">U found it !!!.</span>
          </h2>
          <p class="mx-auto mt-4 max-w-md text-xl text-gray-400">
            Yeeeee
          </p>
          <div class="lg:mt-0 lg:flex-shrink-0">
            <div class="mt-12 inline-flex rounded-md shadow">
              <a
                href="https://www.youtube.com/watch?v=QH2-TGUlwu4"
                type="button"
                class="w-full rounded-lg  bg-indigo-600 py-4 px-6 text-center text-base font-semibold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  focus:ring-offset-indigo-200 "
              >
                Claim here
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
