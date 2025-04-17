import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

export default function App() {

  const headingRef = useRef(null)
  const textRef = useRef(null)

  useGSAP(() => {
    // Animate paragraph
    gsap.from(textRef.current, {
      y: 20,
      opacity: 0,
      duration: 2,
    })

    // Animate each character in heading
    gsap.from(headingRef?.current?.querySelectorAll('span'), {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.05,
      ease: "power2.out",
    })
  }, [])

  // Heading text to animate
  const heading = "Animation Web"

  return (
    <div className='flex justify-center items-center min-h-screen overflow-x-hidden'>
      <div className='w-full h-[100vh] flex ps-16 items-center bg-gradient-to-br from-blue-200 via-white to-neutral-300'>
        <div className='flex flex-col gap-4'>
          <h1 ref={headingRef} className=' text-5xl font-semibold'>
            {
              heading.split('').map((char, index) => (
                <span
                  key={index}
                  className='inline-block bg-clip-text text-transparent bg-gradient-to-b from-slate-100 to-neutral-400'
                  style={{ whiteSpace: 'pre' }} // keeps spaces visible
                >
                  {char}
                </span>
              ))
            }
          </h1>
          <p ref={textRef} className='text-neutral-800/[0.4] text-lg font-semibold'>
            this is animation web to learn amazing Animations
          </p>
        </div>
      </div>
    </div>
  )
}
