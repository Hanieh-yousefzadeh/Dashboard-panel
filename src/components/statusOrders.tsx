import { statusorders } from "@/data/mock-dashboard"
import { useTranslations } from "next-intl"

export default function StatusOrders() {

  const t = useTranslations("AdminDashboard.latestOrders")

  const tStatus = useTranslations("AdminDashboard.orderStatus")
  return (
    <section className="xl:w-1/2 rounded-xl border  border-[#7a3ffa1a] bg-card p-5 shadow-sm ">
      <h2 className="mb-7 text-lg font-semibold">  {t("title")}</h2>

      <div className="">
        <table className="w-full text-right text-sm ">
          <thead>
            <tr className="border-b border-[#9468fc47] font-semibold text-[#7B29FB]">
              <th className="pb-3 text-center w-30">  {t("orderNumber")}</th>

              <th className="pb-3 text-center pl-4">{t("customer")}</th>

              <th className="pb-3 text-center pl-4"> {t("amount")}</th>

              <th className="pb-3 text-center pl-4"> {t("status")}</th>
            </tr>
          </thead>

          <tbody>
            {statusorders.map((order) => (
              <tr key={order.id} className="border-b border-[#9468fc47]" >
                <td className="py-4 text-center"> #{order.id}</td>

                <td className="py-4 pl-4 text-center"> {order.customer}</td>

                <td className="py-4 text-center pl-4">{order.amount} $</td>

                <td className="py-4 text-center pl-4">
                  <span className="rounded-full  px-2 py-1 text-xs"> {tStatus(order.status.toLowerCase())} </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}