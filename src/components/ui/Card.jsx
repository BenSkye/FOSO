'use client'

import { Card as AntCard } from 'antd'

export const Card = ({ children, className = '', ...props }) => {
  return (
    <AntCard className={`shadow-sm hover:shadow-md transition-shadow ${className}`} {...props}>
      {children}
    </AntCard>
  )
}

export const CardHeader = ({ title, extra }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-base font-medium">{title}</h3>
      {extra}
    </div>
  )
} 