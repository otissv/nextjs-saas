'use client'

import * as React from 'react'
import Balancer from 'react-wrap-balancer'

import { cn } from '@/lib/utils'
import { TypographyDivProps } from '@/components/typography/types.typography'

export const TypographyLarge = React.forwardRef<
  HTMLDivElement,
  TypographyDivProps
>(({ children, className, ...props }, ref) => {
  return (
    <div
      className={cn('text-lg font-semibold', className)}
      ref={ref}
      {...props}
    >
      <Balancer>{children}</Balancer>
    </div>
  )
})
TypographyLarge.displayName = 'TypographyLarge'
