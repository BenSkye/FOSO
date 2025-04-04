'use client'

import { useState } from 'react'
import { useQuery } from 'react-query'
import { Layout } from 'antd'

import { Navigation } from '@/components/Navigation'
import { DashboardHeader } from '@/components/DashboardHeader'
import { DashboardContent } from '@/components/DashboardContent'
import { fetchDashboardData } from '@/services/api'

const { Content } = Layout

export default function Home() {
  const [timeFilter, setTimeFilter] = useState('month')
  
  const { data, isLoading } = useQuery(['dashboard', timeFilter], () =>
    fetchDashboardData(timeFilter)
  )

  return (
    <Layout className="min-h-screen">
      <Navigation />
      <DashboardHeader timeFilter={timeFilter} onTimeFilterChange={setTimeFilter} />
      <Content className="bg-gray-50">
        <DashboardContent data={data} isLoading={isLoading} />
      </Content>
    </Layout>
  )
} 