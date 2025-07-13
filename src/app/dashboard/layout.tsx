import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./AppSidebar"
import { Card } from "@/components/ui/card"
import Header from "@/components/custom/atoms/Header"
import TanStak from "./tanStack"




export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {

   return (
    <>
    <TanStak>
      

    <SidebarProvider className="hidden xl:flex">
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
    <section>
      <Header />
      <div className="xl:hidden h-screen w-11/12 max-w-2xl mx-auto flex items-center justify-center">
        <Card className="p-4">
          <h2 className="font-bold text-xl ">⚠️ Desktop Only </h2>
          <p className="text-sm">
            {" "}
            For the best experience, please open the Dashboard on a desktop or
            laptop device. Mobile view is currently not supported.
          </p>
        </Card>
      </div>
    </section>

    </TanStak>
    </>
  )

}