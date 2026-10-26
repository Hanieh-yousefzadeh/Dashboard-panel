import type { Card } from "@/components/dashboard-card";

export const userDashboardCard : Card[] = [
  { title: "My Orders",
    value: 12,
    icon: "package",
    description: "Total Number",
  },
  {
    title: "My Favorite",
    value: 8,
    icon: "heart",
    description: "Saved products",
  },
  {
    title: "My Address",
    value: 3,
    icon: "map-pin",
    description: "Registered addresses",
  },
  {
    title: "My Opinions",
    value: 5,
    icon: "message-square",
    description: "Submitted comments",
  },
];