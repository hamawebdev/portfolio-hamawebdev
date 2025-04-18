'use client'

import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface FancyTitleProps {
  title: string
  subtitle?: string
  className?: string
  subtitleClassName?: string
  align?: 'left' | 'center' | 'right'
  variant?: '3d' | 'glowing' | 'outlined'
  size?: 'sm' | 'md' | 'lg'
}

export function FancyTitle({
  title,
  subtitle,
  className,
  subtitleClassName,
  align = 'center',
  variant = '3d',
  size = 'lg'
}: FancyTitleProps) {
  const alignments = {
    'left': 'text-left',
    'center': 'text-center mx-auto',
    'right': 'text-right ml-auto'
  }

  const sizes = {
    'sm': 'text-3xl md:text-4xl',
    'md': 'text-4xl md:text-5xl',
    'lg': 'text-5xl md:text-6xl'
  }

  const variants = {
    '3d': cn(
      "font-extrabold",
      "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600",
      "drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",
      "filter contrast-150 brightness-110",
      "[text-shadow:3px_3px_0_#2563eb,-1px_-1px_0_#7c3aed,1px_-1px_0_#7c3aed,-1px_1px_0_#7c3aed,1px_1px_0_#7c3aed]"
    ),
    'glowing': cn(
      "font-bold",
      "text-white",
      "relative",
      "after:content-[attr(data-text)] after:absolute after:left-0 after:top-0",
      "after:text-white after:z-10",
      "before:content-[attr(data-text)] before:absolute before:left-0 before:top-0",
      "before:text-blue-500 before:z-[-1]",
      "before:blur-[0.02em] after:blur-[0.02em]",
      "before:animate-pulse"
    ),
    'outlined': cn(
      "font-black",
      "text-transparent",
      "bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600",
      "stroke-blue-500 stroke-[1px] paint-order-stroke",
      "[text-shadow:2px_2px_8px_rgba(104,117,245,0.5)]"
    )
  }

  return (
    <div className={cn("mb-16", alignments[align])}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        data-text={variant === 'glowing' ? title : undefined}
        className={cn(
          sizes[size],
          "font-bold mb-4 font-heading",
          variants[variant],
          className
        )}
      >
        {title}
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
