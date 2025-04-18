'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { cn } from '@/lib/utils'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  subtitleClassName?: string
  align?: 'left' | 'center' | 'right'
  titleGradient?: 'blue-purple' | 'cyan-blue' | 'purple-pink' | 'white-slate' | 'green-blue'
}

export function SectionTitle({
  title,
  subtitle,
  className,
  subtitleClassName,
  align = 'center',
  titleGradient = 'blue-purple'
}: SectionTitleProps) {
  const gradients = {
    'blue-purple': 'from-blue-500 to-purple-600',
    'cyan-blue': 'from-cyan-400 to-blue-500',
    'purple-pink': 'from-purple-500 to-pink-500',
    'white-slate': 'from-white to-slate-400',
    'green-blue': 'from-emerald-400 to-blue-500'
  }

  const alignments = {
    'left': 'text-left',
    'center': 'text-center mx-auto',
    'right': 'text-right ml-auto'
  }

  return (
    <div className={cn("mb-16", alignments[align])}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn(
          "text-4xl md:text-5xl font-bold mb-4",
          `bg-gradient-to-r ${gradients[titleGradient]} bg-clip-text text-transparent`,
          "relative pb-2 font-heading tracking-tight",
          "text-shadow-sm",
          className
        )}
      >
        {title}
        <span className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-30"></span>
        <span className={cn(
          "absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 rounded-full",
          `bg-gradient-to-r ${gradients[titleGradient]}`
        )}></span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "max-w-3xl text-lg text-gray-300 font-subheading",
            alignments[align],
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  )
}
