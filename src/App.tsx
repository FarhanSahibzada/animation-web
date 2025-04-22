import { useRef } from 'react'
import { HeadingAnimation, textAnimation } from './Animations/herosection'
import { motion } from 'framer-motion'
import { FloatingPaths } from './text'

export default function App() {

  const textRef = useRef<HTMLParagraphElement>(null)

  textAnimation(textRef)

  const heading = "Animation World"
  const words = heading.split("");


  return (
    <>
      <div className='flex justify-center items-center min-h-screen overflow-x-hidden'>
        <div className='w-full h-[100vh] flex ps-16 items-center justify-center  bg-white'>
          <div className='flex flex-col gap-4 items-center'>
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
            <h1 className="text-xl sm:text-2xl md:text-7xl font-bold  tracking-tighter">
              {words.map((word, wordIndex) => (
                <span key={wordIndex} className="inline-block mr-1 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 80, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                      }}
                      className="inline-block text-transparent bg-clip-text 
                    bg-gradient-to-r from-neutral-900 to-neutral-700/80 
                    dark:from-white dark:to-white/80"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              ))}
            </h1>
            <p ref={textRef} className='text-neutral-800/[0.4] text-lg font-semibold'>
              this is animation web to learn amazing Animations
            </p>
          </div>
        </div>
      </div>

      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,192L48,181.3C96,171,192,149,288,117.3C384,85,480,43,576,53.3C672,64,768,128,864,128C960,128,1056,64,1152,53.3C1248,43,1344,85,1392,106.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

    </>
  )
}
