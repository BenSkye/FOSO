'use client'

import { Select as AntSelect } from 'antd'

export const Select = ({ className = '', style = {}, ...props }) => {
  return (
    <AntSelect
      className={className}
      style={{ width: 120, ...style }}
      {...props}
    />
  )
}

export const TimeRangeSelect = ({ value = 'month', onChange, ...props }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      options={[
        { value: 'today', label: 'Hôm nay' },
        { value: 'week', label: 'Tuần này' },
        { value: 'month', label: 'Tháng này' },
        { value: 'quarter', label: 'Quý này' },
        { value: 'year', label: 'Năm này' },
      ]}
      {...props}
    />
  )
} 