"use client"
import { motion } from "framer-motion"

export function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 1}, (_, i) => ({
    id: i,
    d: `M100,30    C20,80 40,80 20,60`,
    color: `rgba(15,23,42,100})`,
    width: 0.5 + i * 0.03,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full border-2 border-blue-600 text-slate-950 dark:text-white" viewBox="0 0 220 316" fill="none">
        {paths.map((path) => (
        //   <motion.path
        //     key={path.id}
        //     d={path.d}
        //     stroke="blue"
        //     strokeWidth={path.width}
        //     strokeOpacity={0.1 + path.id * 0.03}
        //     initial={{ pathLength: 0.3, opacity: 0.6 }}
        //     animate={{
        //       pathLength: 1,
        //       opacity: [0.3, 0.6, 0.3],
        //       pathOffset: [0, 1, 0],
        //     }}
        //     transition={{
        //       duration: 20 + Math.random() * 10,
        //       repeat: Number.POSITIVE_INFINITY,
        //       ease: "linear",
        //     }}
         // />
         <path
         d={path.d}
         stroke="blue"
         />
        ))}
      </svg>
    </div>
  )
}

