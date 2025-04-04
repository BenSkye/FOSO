import axios from 'axios'

const mockData = {
  topProducts: [
    { id: 1, name: 'Áo sơ mi dài tay', count: 48, growth: 8.2 },
    { id: 2, name: 'Quần tây', count: 18, growth: 5 },
    { id: 3, name: 'Áo hoodie', count: 40, growth: 12 },
    { id: 4, name: 'Đầm maxi', count: 23, growth: 3.5 },
    { id: 5, name: 'Áo thun có trơn', count: 48, growth: 4.7 },
  ],
  productionPlan: {
    labels: ['Mặt hàng', 'Áo sơ lẻ', 'Áo sơ mi', 'Áo thun polo', 'Quần baggy', 'Quần jogger'],
    planned: [60, 100, 80, 70, 90, 85],
    actual: [40, 60, 20, 45, 55, 50],
  },
  topCustomers: [
    { name: 'Công ty Dệt may Happy Polo', orders: 2400 },
    { name: 'Công ty May mặc Saigon trendy', orders: 2100 },
    { name: 'Outlet Lemon squeeze', orders: 1800 },
    { name: 'Shop quần áo streetwear Next', orders: 1500 },
    { name: 'Shop thời trang công sở Basic Office', orders: 1200 },
  ],
  productionStatus: {
    total: 16,
    pending: 5,
    inProgress: 6,
    completed: 5,
  },
  productionProgress: [
    { name: 'Áo sơ mi dài tay', progress: 50, total: 123 },
    { name: 'Áo sơ mi cụt tay', progress: 75, total: 321 },
    { name: 'Quần baggy', progress: 45, total: 231 },
    { name: 'Quần tây', progress: 100, total: 999 },
    { name: 'Đầm maxi', progress: 100, total: 876 },
    { name: 'Áo hoodie', progress: 15, total: 765 },
    { name: 'Áo khoác bomber', progress: 24, total: 543 },
  ],
  materials: [
    { id: 1, name: 'Chỉ cotton', code: 'NYL_000014', unit: 'Cuộn', quantity: 8 },
    { id: 2, name: 'Vải lụa', code: 'NYL_000024', unit: 'Mét', quantity: 8 },
    { id: 3, name: 'Vải lót', code: 'NYL_000034', unit: 'Mét', quantity: 8 },
    { id: 4, name: 'Vải chống thấm', code: 'NYL_000044', unit: 'Mét', quantity: 8 },
    { id: 5, name: 'Vải nỉ', code: 'NYL_000054', unit: 'Mét', quantity: 8 },
  ],
}

export const fetchDashboardData = async (timeFilter) => {
  // In a real application, we would make an API call here
  // For now, we'll return mock data
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 1000)
  })
} 