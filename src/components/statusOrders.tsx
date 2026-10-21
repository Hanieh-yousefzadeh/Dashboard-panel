import {statusorders} from "@/data/mock-dashboard"

export default function StatusOrders(){

    return (
    <section className="rounded-xl border bg-card p-5 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold">Latest Orders</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-right text-sm">
          <thead>
            <tr className="border-b ">
              <th className="pb-3 pl-4 font-medium">Order Number</th>

              <th className="pb-3 pl-4 font-medium">Customer</th>

              <th className="pb-3 pl-4 font-medium">Amount</th>

              <th className="pb-3 font-medium"> Status</th>
            </tr>
          </thead>

          <tbody>
            {statusorders.map((order) => (
              <tr key={order.id}  className="border-b last:border-0" >
                <td className="py-4 pl-4"> #{order.id}</td>

                <td className="py-4 pl-4"> {order.customer}</td>

                <td className="whitespace-nowrap py-4 pl-4">{order.amount} $</td>

                <td className="py-4">
                  <span className="rounded-full  px-2 py-1 text-xs"> {order.status} </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}