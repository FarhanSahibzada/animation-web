import { useEffect, useRef } from 'react'
import { FloatingPaths } from '../hooks/FloatinglinesPath'
import { DescriptionAnimation } from '../hooks/HeroAnimationHooks'

function HeroAnimationPage() {
    const textRef = useRef(null)
    DescriptionAnimation(textRef)


    return (
        <div className='flex flex-col gap-4 items-center'>
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />

            <p ref={textRef} className='text-neutral-800/[0.4] text-lg font-semibold'>
                this is animation web to learn amazing Animations
            </p>
        </div>
    )

}

export default HeroAnimationPage