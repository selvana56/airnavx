'use client' 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Cloudy, Scan, Activity  } from 'lucide-react';

// Menu items.
const items = [
  {
    title: "Weather Forecasting ",
    url: "weather",
    icon: Cloudy,
  },
  {
    title: "Weather image recognition",
    url: "weather-recognition",
    icon: Scan,
  },
  {
    title: "Real-Time Detection",
    url: "real-time",
    icon: Activity ,
  },

]
export function AppSidebar() {
  const pathName = usePathname();
  return (
     <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
           
                  <SidebarMenuButton
                  className={`${pathName === `/dashboard/${item.url}`?'bg-primary text-white py-5  transition ease-in-out  hover:bg-primary hover:text-white':''}`}
                  asChild>
                    <Link  href={item.url}>
                      <item.icon />
                      
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}