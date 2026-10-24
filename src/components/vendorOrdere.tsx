import { vendorRecentOrders } from "@/data/mock-vendorpanel";

export default function VendorOrders() {
  return (
    <section className="w-[50%] rounded-xl border border-[#7a3ffa1a] bg-card p-5 shadow-sm">
      <h2 className="mb-7 text-lg font-semibold"> Latest Orders</h2>

      <div className="w-full overflow-x-auto">
        <table className="w-full text-right text-sm">
          <thead>
            <tr className="border-b border-[#9468fc47] font-semibold text-[#7B29FB]">
              <th className="w-24 pb-3 text-center"> Order Number</th>
              <th className="pb-3 pl-4 text-center"> Product</th>
              <th className="pb-3 pl-4 text-center"> Customer </th>
              <th className="pb-3 pl-4 text-center"> Amount </th>
              <th className="pb-3 pl-4 text-center"> Status</th>
            </tr>
          </thead>

          <tbody>
            {vendorRecentOrders.map((order) => (
              <tr key={order.id} className="border-b border-[#9468fc47]" >
                <td className="py-4 text-center"> #{order.id} </td>
                <td className="py-4 pl-4 text-center"> {order.product}</td>
                <td className="py-4 pl-4 text-center">{order.customer}</td>
                <td className="py-4 pl-4 text-center"> ${order.amount.toFixed(2)} </td>

                <td className="py-4 pl-4 text-center">
                  <span
                    className={`whitespace-nowrap rounded-full px-2 py-1 text-xs ${
                      order.status === "Delivered" ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-[#F1EBFE] text-yellow-700"
                        : order.status === "Processing"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}