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

export default function Execom() {
  return (
    <>
      <Head>
        <title>EXECOM - IEEE | Computational Intelligence Society</title>
      </Head>
      <Header />
      <section class="body-font text-gray-600">
        <div class="container mx-auto px-5 py-12">
          <div class="mb-10 text-center">
            <h1 class="title-font mb-4 text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
              Execom Members
            </h1>
            <p class="mx-auto text-base leading-relaxed lg:w-3/4 xl:w-2/4">
              The operation of the IEEE Bangalore Section is managed by the
              Section&#8217;s Executive committee.
            </p>
            <div class="container mx-auto px-5 py-12">
              <div class="mb-5 flex w-full flex-col text-center">
                <h1 class="title-font mb-4 text-2xl font-medium text-gray-900 sm:text-3xl">
                  Office Bearers
                </h1>
                {/* <p class="mx-auto text-base leading-relaxed lg:w-2/3">
                  Whatever cardigan tote bag tumblr hexagon brooklyn
                  asymmetrical gentrify, subway tile poke farm-to-table. Franzen
                  you probably haven't heard of them.
                </p> */}
              </div>
              <div class="-m-2 flex flex-wrap">
                <div class="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div class="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Image
                      alt="team"
                      class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                      src={img2}
                      height={64}
                      width={64}
                    />
                    <div class="flex-grow">
                      <h2 class="title-font font-medium text-gray-900">
                        Dr. Megha. P. Arakeri
                      </h2>
                      <p class="text-gray-500">Chairperson</p>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div class="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Image
                      alt="team"
                      class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                      src={img5}
                      height={64}
                      width={64}
                    />
                    <div class="flex-grow">
                      <h2 class="title-font font-medium text-gray-900">
                        Mr. A. T. Kishore
                      </h2>
                      <p class="text-gray-500">Vice Chairperson</p>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div class="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Image
                      alt="team"
                      class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                      src={img1}
                      height={64}
                      width={64}
                    />
                    <div class="flex-grow">
                      <h2 class="title-font font-medium text-gray-900">
                        Dr. Vinutha. D.C
                      </h2>
                      <p class="text-gray-500">Secretary</p>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div class="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Image
                      alt="team"
                      class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                      src={img4}
                      height={64}
                      width={64}
                    />
                    <div class="flex-grow">
                      <h2 class="title-font font-medium text-gray-900">
                        Dr. Sumana. M
                      </h2>
                      <p class="text-gray-500">Treasurer</p>
                    </div>
                  </div>
                </div>
                <div class="w-full p-2 md:w-1/2 lg:w-1/3">
                  <div class="flex h-full items-center rounded-lg border border-gray-200 p-4">
                    <Image
                      alt="team"
                      class="mr-4 h-16 w-16 flex-shrink-0 rounded-full bg-gray-100 object-cover object-center"
                      src={img3}
                      height={64}
                      width={64}
                    />
                    <div class="flex-grow">
                      <h2 class="title-font font-medium text-gray-900">
                        Dr. Vijaya Kumar B. P
                      </h2>
                      <p class="text-gray-500">Advisor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="justify-center lg:flex">
              <p class="mt-10 ml-4 text-left">
                <b className="text-xl text-slate-900">Office Bearers</b>
                <br />
                <u>Chairperson:</u> <b>Dr. Megha. P. Arakeri</b> <br />
                <u>Vice Chair:</u> <b>Mr. A. T. Kishore</b> <br />
                <u>Secretary</u>: <b>Dr. Vinutha. D.C</b>
                <br />
                <u>Treasurer:</u> <b>Dr. Sumana. M</b> <br />
                <u>Advisor:</u> <b>Dr. Vijaya Kumar B. P</b>
              </p>
            </div> */}
          </div>
          <div class="-mx-2 flex flex-wrap sm:mx-auto sm:mb-2 lg:w-4/5">
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M9.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">
                  Dr. Vijaya Kumar. B. P
                </span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">Anandi Giridharan</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">Samyama Gunjal. G. H</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.519 5.057c.22-.352.439-.703.657-1.055h1.933v5.332h1.008v1.107H10.11V12H8.85v-1.559H4.978V9.322c.77-1.427 1.656-2.847 2.542-4.265ZM6.225 9.281v.053H8.85V5.063h-.065c-.867 1.33-1.787 2.806-2.56 4.218Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">Gayathri Devi. B. R</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.994 12.158c-1.57 0-2.654-.902-2.719-2.115h1.237c.14.72.832 1.031 1.529 1.031.791 0 1.57-.597 1.57-1.681 0-.967-.732-1.57-1.582-1.57-.767 0-1.242.45-1.435.808H5.445L5.791 4h4.705v1.103H6.875l-.193 2.343h.064c.17-.258.715-.68 1.611-.68 1.383 0 2.561.944 2.561 2.585 0 1.687-1.184 2.806-2.924 2.806Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">Bonson Mapilli</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.21 3.855c1.612 0 2.515.99 2.573 1.899H9.494c-.1-.358-.51-.815-1.312-.815-1.078 0-1.817 1.09-1.805 3.036h.082c.229-.545.855-1.155 1.98-1.155 1.254 0 2.508.88 2.508 2.555 0 1.77-1.218 2.783-2.847 2.783-.932 0-1.84-.328-2.409-1.254-.369-.603-.597-1.459-.597-2.642 0-3.012 1.248-4.407 3.117-4.407Zm-.099 4.008c-.92 0-1.564.65-1.564 1.576 0 1.032.703 1.635 1.558 1.635.868 0 1.553-.533 1.553-1.629 0-1.06-.744-1.582-1.547-1.582Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">Mohan Gowda. V</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.37 5.11V4.001h5.308V5.15L7.42 12H6.025l3.317-6.82v-.07H5.369Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">Kusuma. S. M</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 9.803c0 1.394-1.218 2.355-2.988 2.355-1.763 0-2.953-.955-2.953-2.344 0-1.271.95-1.851 1.647-2.003v-.065c-.621-.193-1.33-.738-1.33-1.781 0-1.225 1.09-2.121 2.66-2.121s2.654.896 2.654 2.12c0 1.061-.738 1.595-1.336 1.782v.065c.703.152 1.647.744 1.647 1.992Zm-4.347-3.71c0 .739.586 1.255 1.383 1.255s1.377-.516 1.377-1.254c0-.733-.58-1.23-1.377-1.23s-1.383.497-1.383 1.23Zm-.281 3.645c0 .838.72 1.412 1.664 1.412.943 0 1.658-.574 1.658-1.412 0-.843-.715-1.424-1.658-1.424-.944 0-1.664.58-1.664 1.424Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">
                  Dr Manjunath R Kounte
                </span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="mr-4 h-6 w-6 flex-shrink-0 text-sky-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.777 12.146c-1.593 0-2.425-.89-2.52-1.798h1.296c.1.357.539.72 1.248.72 1.36 0 1.88-1.353 1.834-3.023h-.076c-.235.627-.873 1.184-1.934 1.184-1.395 0-2.566-.961-2.566-2.666 0-1.711 1.242-2.731 2.87-2.731 1.512 0 2.971.867 2.971 4.014 0 2.836-1.02 4.3-3.123 4.3Zm.118-3.972c.808 0 1.535-.528 1.535-1.594s-.668-1.676-1.56-1.676c-.838 0-1.517.616-1.517 1.659 0 1.072.708 1.61 1.54 1.61Z" />
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2Z" />
                </svg>
                <span class="title-font font-medium">Dr. Jagan. D</span>
              </div>
            </div>
            <div class="w-full p-2 sm:w-1/2">
              <div class="flex h-full items-center rounded bg-gray-100 p-4">
                <div class="-pt-1 numborder mr-4 h-6 w-6 flex-shrink-0 rounded border-sky-500 text-sky-500">
                  <p class="nummargin flex justify-center align-middle font-medium">
                    10
                  </p>
                </div>
                <span class="title-font font-medium">Dr. Rudresh. S</span>
              </div>
            </div>
          </div>
          {/* <button class="mx-auto mt-16 flex rounded border-0 bg-indigo-500 py-2 px-8 text-lg text-white hover:bg-indigo-600 focus:outline-none">
            Button
          </button> */}
        </div>
      </section>

      <Footer />
    </>
  )
}
