import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'

import { ButtonLink } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

const images = [
  {
    link: 'https://www.officialmediaguide.com/ie06/wp-content/uploads/sites/73/2019/10/abstract01-1024x575.jpg',
  },
  {
    link: 'https://cis.ieee.org/images/files/slideshow/video-archive.jpg',
  },
  {
    link: 'https://pbs.twimg.com/media/Fb_Au2NWYAIIlMt.jpg',
  },
  {
    link: 'https://media-exp1.licdn.com/dms/image/C4D22AQHkoGeI2vPz8g/feedshare-shrink_2048_1536/0/1648835983648?e=2147483647&v=beta&t=gm23waWUjKeHFpl3-SYomM07jW19WQCiLlX1gtzFshQ',
  },
]

export function Hero() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        autoHeight={true}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              className="lg:h-128 h-96 w-full object-fill"
              src={image.link}
              alt={index}
              border-radius="10px"
            />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <img
            className="lg:h-128 h-96 w-full object-fill"
            src="https://www.officialmediaguide.com/ie06/wp-content/uploads/sites/73/2019/10/abstract01-1024x575.jpg"
            alt="image slide 1"
            border-radius="10px"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-128 h-96 w-full rounded-lg object-fill"
            src="https://www.annabellatham.com/wp-content/uploads/2019/12/ING_19043_260593-1024x890.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-128 h-96 w-full object-fill"
            src="https://media-exp1.licdn.com/dms/image/C4D22AQHkoGeI2vPz8g/feedshare-shrink_2048_1536/0/1648835983648?e=2147483647&v=beta&t=gm23waWUjKeHFpl3-SYomM07jW19WQCiLlX1gtzFshQ"
            alt="image slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-128 h-96 w-full object-fill"
            src="https://cis.ieee.org/images/files/slideshow/video-archive.jpg"
            alt="image slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="lg:h-128 h-96 w-full object-fill"
            src="https://pbs.twimg.com/media/Fb_Au2NWYAIIlMt.jpg"
            alt="image slide 5"
          />
        </SwiperSlide> */}
      </Swiper>
      <Container className="pt-5 pb-16 text-center lg:pt-8">
        <h1 className="mx-auto max-w-2xl font-display text-2xl font-medium tracking-tight text-slate-900 sm:text-2xl">
          IEEE Computational Intelligence Society Bangalore Chapter
        </h1>
        {/* <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          The <b>IEEE Computer Society</b> is a growing and diverse community of
          computing professionals and the most trusted source for information,
          inspiration, and collaboration in computer science and engineering.
          IEEE Computer Society Bangalore Chapter is a professional chapter of
          IEEE Computer Society focusing on the regions of the state of
          Karnataka, India.
        </p> */}
        <p class="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
          <b>IEEE Computational Intelligence Society (CIS)</b> is a professional
          society of IEEE focusing on “the theory, design, application, and
          development of biologically and linguistically motivated computational
          paradigms emphasising neural networks, connectionist systems, genetic
          algorithms, evolutionary programming, fuzzy systems, and hybrid
          intelligent systems in which these paradigms are contained.
        </p>
        <div className="mt-10 flex justify-center">
          {/* <ButtonLink href="/register">Get 6 months free</ButtonLink> */}
          {/* <ButtonLink href="https://youtu.be/dOmDu-kxWBM" variant="outline">
            <svg
              aria-hidden="true"
              className="h-3 w-3 flex-none fill-blue-600 group-active:fill-current"
            >
              <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
            </svg>
            <span className="ml-3">Watch video</span>
          </ButtonLink> */}
        </div>
      </Container>
    </>
  )
}
