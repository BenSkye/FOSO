'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Input } from 'antd'
import { SearchOutlined, BellOutlined, QuestionCircleOutlined, UserOutlined } from '@ant-design/icons'

export const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-[#0747A6] text-white">
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="FOSO Logo" width={100} height={32} />
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/danh-muc" className="hover:text-gray-200">Danh mục</Link>
          <Link href="/ban-va-xuat-hang" className="hover:text-gray-200">Bán & Xuất hàng</Link>
          <Link href="/mua-va-nhap-hang" className="hover:text-gray-200">Mua & Nhập hàng</Link>
          <Link href="/kho-va-san-xuat" className="hover:text-gray-200">Kho & Sản xuất</Link>
          <Link href="/ke-toan" className="hover:text-gray-200">Kế toán</Link>
          <Link href="/bao-cao-va-thong-ke" className="hover:text-gray-200">Báo cáo & Thống kê</Link>
          <Link href="/tien-ich" className="hover:text-gray-200">Tiện ích</Link>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Input
          prefix={<SearchOutlined className="text-gray-400" />}
          placeholder="Tìm kiếm"
          className="w-64 rounded-md bg-white/10"
          bordered={false}
        />
        <div className="flex items-center space-x-3">
          <BellOutlined className="text-xl cursor-pointer hover:text-gray-200" />
          <QuestionCircleOutlined className="text-xl cursor-pointer hover:text-gray-200" />
          <UserOutlined className="text-xl cursor-pointer hover:text-gray-200" />
        </div>
      </div>
    </nav>
  )
} 