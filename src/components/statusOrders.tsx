import {statusorders} from "@/data/mock-dashboard"

export default function StatusOrders(){

    return (
    <section className="w-[50%] rounded-xl border  border-[#7a3ffa1a] bg-card p-5 shadow-sm ">
      <h2 className="mb-7 text-lg font-semibold">Latest Orders</h2>

      <div className="">
        <table className="w-full text-right text-sm ">
          <thead>
            <tr className="border-b border-[#9468fc47] font-semibold text-[#7B29FB]">
              <th className="pb-3 text-center w-30">Order Number</th>

              <th className="pb-3 text-center pl-4">Customer</th>

              <th className="pb-3 text-center pl-4">Amount</th>

              <th className="pb-3 text-center pl-4"> Status</th>
            </tr>
          </thead>

          <tbody>
            {statusorders.map((order) => (
              <tr key={order.id}  className="border-b border-[#9468fc47]" >
                <td className="py-4 text-center"> #{order.id}</td>

                <td className="py-4 pl-4 text-center"> {order.customer}</td>

                <td className="py-4 text-center pl-4">{order.amount} $</td>

                <td className="py-4 text-center pl-4">
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