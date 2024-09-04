"use client"

import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const AboutCoverSection = () => {
  return (
    <section className='w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light'>
        <div className='w-full md:w-1/2 h-4/5 border-r-2 border-solid border-dark dark:border-light flex justify-center'> 
            <DotLottieReact
              src="/hkFecAUzXR.lottie"
              autoplay
              loop
            >
            </DotLottieReact>
        </div>

        <div className='w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16'>
            <h2 className='font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left'>
              Illuminate the Unknown, Empower the Future!
            </h2>
            <p className='font-medium capitalize mt-4 text-base'>
              At Lighthouse Research, we believe that knowledge should be as open and expansive as the horizons we seek to explore. By challenging the norms and pushing beyond closed technologies, we aim to shed light on new possibilities, guiding innovation toward a future where every breakthrough is a shared triumph.
            </p>
        </div>
    </section>
  )
}

export default AboutCoverSection