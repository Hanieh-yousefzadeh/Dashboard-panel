export const vendorMonthSales = [
  { month: "January", sales: 10 },
  { month: "February", sales: 22 },
  { month: "March", sales: 20 },
  { month: "April", sales: 35 },
  { month: "May", sales: 43 },
  { month: "June", sales: 60 }
];

export const vendorDashboardCard = [
  {
    title: "My Products",
    value: "48",
    icon: "package",
    description: "Total Products",
  },
  {
    title: "Total Orders",
    value: "156",
    icon: "shopping-cart",
    description: "All Orders",
  },
  {
    title: "Total Sales",
    value: "$ 12,450",
    icon: "wallet",
    description: "Total Revenue",
  },
  {
    title: "Pending Orders",
    value: "12",
    icon: "clock",
    description: "Need Attention",
  },
  {
    title: "Total Reviews",
    value: "35",
    icon: "message-square",
    description: "Customer Reviews",
  },
] as const

export const vendorRecentOrders = [
  {
    id: 1024,
    product: "Running Shoes",
    customer: "Sara Nori",
    amount: 120,
    status: "Pending",
  },
  {
    id: 1023,
    product: "Wireless Headphones",
    customer: "Qazal esfandi",
    amount: 85,
    status: "Processing",
  },
  {
    id: 1022,
    product: "Classic Watch",
    customer: "Mehdi Ekram",
    amount: 210,
    status: "Delivered",
  },
  {
    id: 1021,
    product: "Cotton T-Shirt",
    customer: "Narges Habibi",
    amount: 40.65,
    status: "Delivered",
  },
  {
    id: 1020,
    product: "Sunscreen",
    customer: "Sara Heydari",
    amount: 20.45,
    status: "Cancelled",
  },
];