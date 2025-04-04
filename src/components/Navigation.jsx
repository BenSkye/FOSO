'use client'

import { Input } from 'antd'
import { SearchOutlined, BellOutlined, QuestionCircleOutlined, UserOutlined } from '@ant-design/icons'
import Image from 'next/image'
import Link from 'next/link'

const navItems = [
  { label: 'Danh mục', href: '/danh-muc' },
  { label: 'Bán & Xuất hàng', href: '/ban-xuat-hang' },
  { label: 'Mua & Nhập hàng', href: '/mua-nhap-hang' },
  { label: 'Kho & Sản xuất', href: '/kho-san-xuat' },
  { label: 'Kế toán', href: '/ke-toan' },
  { label: 'Báo cáo & Thống kê', href: '/bao-cao' },
  { label: 'Tiện ích', href: '/tien-ich' },
]

export const Navigation = () => {
  return (
    <nav className="bg-primary text-neutral-white h-14 flex items-center px-4 justify-between">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="MRP Logo" width={100} height={32} />
        </Link>
        <div className="flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm hover:text-primary-light/80 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Input
          prefix={<SearchOutlined className="text-neutral-placeholder" />}
          placeholder="Tìm kiếm"
          className="w-64 rounded-full bg-primary-light border-0 text-neutral-white placeholder-neutral-placeholder/80"
        />
        <div className="flex items-center space-x-4">
          <button className="hover:text-primary-light/80 transition-colors">
            <BellOutlined className="text-xl" />
          </button>
          <button className="hover:text-primary-light/80 transition-colors">
            <QuestionCircleOutlined className="text-xl" />
          </button>
          <button className="hover:text-primary-light/80 transition-colors">
            <UserOutlined className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  )
} 