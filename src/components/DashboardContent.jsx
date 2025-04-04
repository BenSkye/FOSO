'use client'

import { Table, Skeleton, Progress } from 'antd'
import { Column } from '@ant-design/plots'
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons'
import { Card, CardHeader } from './ui/Card'
import { Select, TimeRangeSelect } from './ui/Select'
import {  CircleProgress, LineProgress } from './ui/Progress'
import { Empty } from './ui/Empty'


const LoadingSkeleton = () => (
  <div className="space-y-6 p-6 bg-neutral-input">
    {/* Top Products Skeleton */}
    <div className="grid grid-cols-5 gap-4">
      {[...Array(5)].map((_, i) => (
        <Card key={i}>
          <Skeleton active paragraph={{ rows: 2 }} />
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-2 gap-6">
      {/* Charts Skeleton */}
      <Card>
        <Skeleton.Input style={{ width: '100%', height: 300 }} active />
      </Card>
      <Card>
        <Skeleton.Input style={{ width: '100%', height: 300 }} active />
      </Card>
    </div>

    <div className="grid grid-cols-3 gap-6">
      <Card>
        <Skeleton active paragraph={{ rows: 4 }} />
      </Card>
      <Card className="col-span-2">
        <Skeleton active paragraph={{ rows: 6 }} />
      </Card>
    </div>

    <Card>
      <Skeleton active paragraph={{ rows: 5 }} />
    </Card>
  </div>
)

const EmptyState = () => (
  <div className="space-y-6 p-6 bg-white">
    {/* Top Products Empty State */}
    <div className="grid grid-cols-5 gap-4">
      {[...Array(5)].map((_, i) => (
        <Card key={i}>
          <div className="text-2xl font-bold text-primary">0</div>
          <div className="text-sm text-neutral-label">Chưa có mặt hàng</div>
        </Card>
      ))}
    </div>

    <div className="grid grid-cols-2 gap-6">
      {/* Production Plan Chart */}
      <Card>
        <CardHeader
          title="Kế Hoạch Sản Xuất"
          extra={<TimeRangeSelect defaultValue="quarter" />}
        />
        <Empty />
      </Card>

      {/* Top Customers */}
      <Card>
        <CardHeader
          title="Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất"
          extra={<TimeRangeSelect defaultValue="year" />}
        />
        <Empty />
      </Card>
    </div>

    <div className="grid grid-cols-3 gap-6">
      {/* Production Status */}
      <Card>
        <CardHeader
          title="Tình Hình Sản Xuất"
          extra={<TimeRangeSelect defaultValue="today" />}
        />
        <div className="text-center">
          <CircleProgress value={0} total={0} />
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div>
              <div className="text-xl font-bold text-warning">0</div>
              <div className="text-sm text-neutral-label">Chưa hoàn thành</div>
            </div>
            <div>
              <div className="text-xl font-bold text-primary">0</div>
              <div className="text-sm text-neutral-label">Đang sản xuất</div>
            </div>
            <div>
              <div className="text-xl font-bold text-secondary">0</div>
              <div className="text-sm text-neutral-label">Hoàn thành</div>
            </div>
          </div>
        </div>
      </Card>

      {/* Production Progress */}
      <Card className="col-span-2">
        <CardHeader
          title="Tiến Độ Sản Xuất Theo Nhóm"
          extra={
            <Select
              defaultValue="completed"
              options={[
                { value: 'all', label: 'Tất cả' },
                { value: 'completed', label: 'Hoàn thành' },
                { value: 'pending', label: 'Chưa hoàn thành' },
              ]}
            />
          }
        />
        <div className="space-y-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className="bg-neutral-input p-3 rounded">
              <div className="text-sm text-neutral-label">Chưa có mặt hàng</div>
            </div>
          ))}
        </div>
      </Card>
    </div>

    {/* Materials Table */}
    <Card>
      <CardHeader
        title="Nguyên Vật Liệu Cần Mua"
        extra={<TimeRangeSelect defaultValue="week" />}
      />
      <Empty />
    </Card>
  </div>
)

export const DashboardContent = ({ data, isLoading }) => {
  if (isLoading) {
    return <LoadingSkeleton />
  }

  if (!data) {
    return <EmptyState />
  }

  const chartData = [
    ...data.productionPlan.labels.slice(1).map((label, index) => ({
      category: label,
      value: data.productionPlan.planned[index + 1],
      type: 'Kế hoạch',
    })),
    ...data.productionPlan.labels.slice(1).map((label, index) => ({
      category: label,
      value: data.productionPlan.actual[index + 1],
      type: 'Thực hiện',
    })),
  ]

  const config = {
    data: chartData,
    isGroup: true,
    xField: 'category',
    yField: 'value',
    seriesField: 'type',
    groupField: 'type',
    columnStyle: {
      radius: [4, 4, 0, 0],
    },
    legend: {
      position: 'top-right',
    },
    label: {
      position: 'top',
      style: {
        fill: 'var(--neutral-body)',
        opacity: 0.9,
      },
    },
    color: ['primary.DEFAULT', 'secondary.DEFAULT'],
    tooltip: {
      shared: true,
    },
    yAxis: {
      label: {
        formatter: (v) => `${v} cái`,
      },
    },
  }

  return (
    <div className="space-y-6 p-6 bg-neutral-white">

      {/* Top Products */}
      <div className="grid grid-cols-5 gap-4">
        {data.topProducts.map((product) => (
          <Card key={product.id}>
            <div className="text-2xl font-bold text-primary">{product.count}</div>
            <div className="text-sm text-neutral-body mt-1">{product.name}</div>
            <div className={`text-xs mt-2 flex items-center ${product.growth >= 0 ? 'text-secondary' : 'text-danger'}`}>
              {product.growth >= 0 ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
              <span className="ml-1">{Math.abs(product.growth)}%</span>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Production Plan Chart */}
        <Card>
          <CardHeader
            title="Kế Hoạch Sản Xuất"
            extra={<TimeRangeSelect defaultValue="quarter" />}
          />
          <Column {...config} height={300} />
        </Card>

        {/* Top Customers */}
        <Card>
          <CardHeader
            title="Top 5 Khách Hàng Có Sản Lượng Nhiều Nhất"
            extra={<TimeRangeSelect defaultValue="year" />}
          />
          {data.topCustomers.map((customer, index) => (
            <div key={index} className="mb-4 last:mb-0">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-600">{customer.name}</span>
                <span className="text-sm font-medium">{customer.orders.toLocaleString()}</span>
              </div>
              <LineProgress
                value={customer.orders}
                total={Math.max(...data.topCustomers.map(c => c.orders))}
              />
            </div>
          ))}
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Production Status */}
        <Card>
          <CardHeader
            title="Tình Hình Sản Xuất"
            extra={<TimeRangeSelect defaultValue="today" />}
          />
          <div className="text-center">
            <Progress
              type="circle"
              percent={Math.round((data.productionStatus.completed / data.productionStatus.total) * 100)}
              format={(percent) => (
                <div>
                  <div className="text-2xl font-bold">{data.productionStatus.total}</div>
                  <div className="text-sm text-neutral-label">Lệnh sản xuất</div>
                </div>
              )}
              strokeColor={{
                '0%': 'warning.DEFAULT',
                '50%': 'primary.DEFAULT',
                '100%': 'secondary.DEFAULT',
              }}
              className="mb-4"
            />
            <div className="grid grid-cols-3 gap-4 mt-6">
              <div>
                <div className="text-xl font-bold text-warning">{data.productionStatus.pending}</div>
                <div className="text-sm text-neutral-label">Chưa hoàn thành</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary">{data.productionStatus.inProgress}</div>
                <div className="text-sm text-neutral-label">Đang sản xuất</div>
              </div>
              <div>
                <div className="text-xl font-bold text-secondary">{data.productionStatus.completed}</div>
                <div className="text-sm text-neutral-label">Hoàn thành</div>
              </div>
            </div>
          </div>
        </Card>

        {/* Production Progress */}
        <Card className="col-span-2">
          <CardHeader
            title="Tiến Độ Sản Xuất Theo Nhóm"
            extra={
              <Select
                defaultValue="completed"
                options={[
                  { value: 'all', label: 'Tất cả' },
                  { value: 'completed', label: 'Hoàn thành' },
                  { value: 'pending', label: 'Chưa hoàn thành' },
                ]}
              />
            }
          />
          {data.productionProgress.map((item) => (
            <div key={item.name} className="mb-4 last:mb-0">
              <div className="flex justify-between mb-1">
                <span className="text-sm text-neutral-body">{item.name}</span>
                <span className="text-sm font-medium text-neutral-title">
                  {item.total} cái ({item.progress}%)
                </span>
              </div>
              <Progress
                percent={item.progress}
                strokeColor={item.progress === 100 ? 'secondary.DEFAULT' : 'primary.DEFAULT'}
                size="small"
                showInfo={false}
              />
            </div>
          ))}
        </Card>
      </div>

      {/* Materials Table */}
      <Card>
        <CardHeader
          title="Nguyên Vật Liệu Cần Mua"
          extra={<TimeRangeSelect defaultValue="week" />}
        />
        <Table
          dataSource={data.materials}
          columns={[
            {
              title: 'STT',
              dataIndex: 'id',
              key: 'id',
              width: 80,
              align: 'center',
            },
            {
              title: 'Nguyên vật liệu',
              dataIndex: 'name',
              key: 'name',
              render: (text, record) => (
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-neutral-input rounded-full flex items-center justify-center mr-3">
                    <img
                      src={record.avatar || `https://ui-avatars.com/api/?name=${text}&background=f5f5f5&color=666666`}
                      alt={text}
                      className="w-6 h-6 rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-medium">{text}</div>
                    <div className="text-xs text-neutral-label">{record.code}</div>
                  </div>
                </div>
              ),
            },
            {
              title: 'Đơn vị tính',
              dataIndex: 'unit',
              key: 'unit',
              align: 'center',
            },
            {
              title: 'Số lượng',
              dataIndex: 'quantity',
              key: 'quantity',
              align: 'center',
            },
          ]}
          pagination={false}
          className="custom-table"
        />
      </Card>
    </div>
  )
} 