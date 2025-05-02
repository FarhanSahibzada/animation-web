import { useGSAP } from "@gsap/react"
import { RefObject } from "react"
import gsap from "gsap"

export const DescriptionAnimation = (textRef : RefObject<HTMLParagraphElement | null>) => {
    useGSAP(() => {
        if(textRef.current){
            gsap.from(  textRef.current,
                {
                    y: 100,
                    opacity: 0,
                    delay: 0.5,
                    duration : 0.5
                }
            )
        }
    }, [])

}

export const HeadingAnimation = (headingRef : RefObject<HTMLHeadingElement | null>) => {
   
    useGSAP(() => {
        if(headingRef.current){
        gsap.from(
                headingRef?.current?.querySelectorAll('span') as NodeListOf<HTMLSpanElement>,
                {
                    y: 40,
                    opacity: 0,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: "power2.out",
                }
            )
        }
    }, [])

}