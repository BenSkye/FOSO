'use client'

import { Empty as AntEmpty } from 'antd'

export const Empty = ({ className = '', ...props }) => {
  return (
    <div className={`flex items-center justify-center py-16 bg-gray-50 ${className}`}>
      <AntEmpty description="Chưa có dữ liệu" {...props} />
    </div>
  )
} 