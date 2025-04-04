'use client'

import { Select } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'

export const DashboardHeader = ({ timeFilter, onTimeFilterChange }) => {
  return (
    <div className="flex items-center justify-between w-full bg-white px-6 py-4 border-b">
      <h1 className="text-xl font-medium">Top Sản Phẩm Sản Xuất Nhiều Nhất</h1>
      <Select
        value={timeFilter}
        onChange={onTimeFilterChange}
        className="w-32"
        suffixIcon={<CalendarOutlined />}
        options={[
          { value: 'day', label: 'Hôm nay' },
          { value: 'week', label: 'Tuần này' },
          { value: 'month', label: 'Tháng này' },
          { value: 'quarter', label: 'Quý này' },
          { value: 'year', label: 'Năm nay' },
        ]}
        popupClassName="custom-select-dropdown"
      />
    </div>
  )
} 