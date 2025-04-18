'use client'

import React from 'react'
import { SectionTitle } from './ui/section-title'
import { FancyTitle } from './ui/fancy-title'

export function TitleShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-24">
        <div>
          <h3 className="text-xl font-medium mb-8 text-gray-400">Standard Section Titles</h3>
          
          <div className="space-y-16">
            <SectionTitle 
              title="Blue to Purple Gradient" 
              subtitle="This title uses a blue to purple gradient with a subtle underline"
              titleGradient="blue-purple"
            />
            
            <SectionTitle 
              title="Cyan to Blue Gradient" 
              subtitle="This title uses a cyan to blue gradient with a subtle underline"
              titleGradient="cyan-blue"
            />
            
            <SectionTitle 
              title="Purple to Pink Gradient" 
              subtitle="This title uses a purple to pink gradient with a subtle underline"
              titleGradient="purple-pink"
            />
            
            <SectionTitle 
              title="White to Slate Gradient" 
              subtitle="This title uses a white to slate gradient with a subtle underline"
              titleGradient="white-slate"
            />
            
            <SectionTitle 
              title="Green to Blue Gradient" 
              subtitle="This title uses a green to blue gradient with a subtle underline"
              titleGradient="green-blue"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-8 text-gray-400">Fancy Section Titles</h3>
          
          <div className="space-y-16">
            <FancyTitle 
              title="3D Text Effect" 
              subtitle="This title uses CSS to create a 3D text effect without heavy animations"
              variant="3d"
            />
            
            <FancyTitle 
              title="Glowing Text Effect" 
              subtitle="This title uses CSS to create a subtle glowing effect"
              variant="glowing"
            />
            
            <FancyTitle 
              title="Outlined Text Effect" 
              subtitle="This title uses CSS to create an outlined text effect"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
