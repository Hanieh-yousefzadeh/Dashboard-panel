
import { LayoutDashboard, Users, Store, Package, ShoppingCart, Heart, MapPin, MessageSquare, BarChart3, Boxes ,Layers ,ClipboardList} from "lucide-react";


export const navigation = {
    Admin: [{
        title: "Dashboard",
        href: "/panel",
        icon: LayoutDashboard,
    }, {
        title: "Users",
        href: "/panel/users",
        icon: Users,
    }, {
        title: "Vendors",
        href: "/panel/vendors",
        icon: Store,
    }, {
        title: "Products",
        href: "/panel/products",
        icon: Package,
    }, {
    title: "Categories",
    href: "/admin/categories",
    icon: Layers,
  },{
        title: "Orders",
        href: "/panel/orders",
        icon: ShoppingCart,
    }, {
        title: "Reports",
        href: "/panel/reports",
        icon: ClipboardList,
    },{
    title: "Comments",
    href: "/admin/comments",
    icon: MessageSquare,
  },
    ],

    Vendor: [{
        title: "Dashboard",
        href: "/panel",
        icon: LayoutDashboard,
    }, {
        title: "My Products",
        href: "/panel/products",
        icon: Package,
    }, {
        title: "Orders",
        href: "/panel/orders",
        icon: ShoppingCart,
    }, {
        title: "Inventory",
        href: "/panel/inventory",
        icon: Boxes,
    }, {
        title: "Sales Report",
        href: "/panel/reports",
        icon: BarChart3,
    }
    ],

    User: [{
            title: "Dashboard",
            href: "/panel",
            icon: LayoutDashboard,
        },{
            title: "My Orders",
            href: "/panel/orders",
            icon: ShoppingCart,
        },{
            title: "Favorite",
            href: "/panel/favorites",
            icon: Heart,
        },{
            title: "Addresses",
            href: "/panel/addresses",
            icon: MapPin,
        },{
            title: "Reviews & Questions",
            href: "/panel/reviews",
            icon: MessageSquare,
        },
    ],
};