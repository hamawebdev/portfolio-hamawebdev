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

  // Animation variants for title
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Animation variants for underline
  const underlineVariants = {
    hidden: { width: '0%', opacity: 0 },
    visible: {
      width: '100%',
      opacity: 0.3,
      transition: { duration: 0.7, delay: 0.3 }
    }
  };

  // Animation variants for accent line
  const accentVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: '4rem',
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={cn("mb-16", alignments[align])}>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative"
      >
        <motion.h2
          variants={titleVariants}
          className={cn(
            "text-4xl md:text-5xl font-bold mb-4",
            `bg-gradient-to-r ${gradients[titleGradient]} bg-clip-text text-transparent`,
            "relative pb-2 font-heading tracking-tight",
            "text-shadow-sm",
            className
          )}
        >
          {title}
          <motion.span
            variants={underlineVariants}
            className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent"
          ></motion.span>
          <motion.span
            variants={accentVariants}
            className={cn(
              "absolute bottom-0 left-1/2 transform -translate-x-1/2 h-1 rounded-full",
              `bg-gradient-to-r ${gradients[titleGradient]}`
            )}
          ></motion.span>
        </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={cn(
            "max-w-3xl text-lg text-gray-300 font-subheading relative",
            alignments[align],
            subtitleClassName
          )}
        >
          {subtitle}

          {/* Subtle decorative element */}
          {align === 'center' && (
            <motion.span
              initial={{ width: 0 }}
              whileInView={{ width: '30px' }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.9 }}
              className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-px bg-gradient-to-r ${gradients[titleGradient]} opacity-50`}
            ></motion.span>
          )}
        </motion.p>
      )}
      </motion.div>
    </div>
  )
}
