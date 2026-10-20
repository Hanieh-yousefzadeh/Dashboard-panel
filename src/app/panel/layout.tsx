import Header from "@/components/header";
import SideBar from "@/components/sideBar";


export default function PanelLayout({children}: {children: React.ReactNode}) {
  return (
    <section className="flex flex-col">
      <Header/>
      <SideBar/>
      {children}
    </section>
  );
}