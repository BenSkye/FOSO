'use client'

import { Progress as AntProgress } from 'antd'

export const Progress = ({ className = '', ...props }) => {
  return (
    <AntProgress className={className} {...props} />
  )
}

export const CircleProgress = ({ value, total, className = '', ...props }) => {
  return (
    <Progress
      type="circle"
      percent={Math.round((value / total) * 100)}
      format={() => (
        <div>
          <div className="text-2xl font-bold">{total}</div>
          <div className="text-sm text-gray-500">Lệnh sản xuất</div>
        </div>
      )}
      strokeColor={{
        '0%': '#FF8B26',
        '50%': '#1677FF',
        '100%': '#52C41A',
      }}
      className={`mb-4 ${className}`}
      {...props}
    />
  )
}

export const LineProgress = ({ value, total, color = '#1677FF', ...props }) => {
  return (
    <Progress
      percent={(value / total) * 100}
      showInfo={false}
      strokeColor={color}
      size="small"
      {...props}
    />
  )
} 