import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"
import { NavLink, useParams } from "react-router-dom";
 
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
} from "../components/ui/sidebar"
 
// Menu items.
const items = [
  { title: "All", url: "/products/all", icon: Home },
  { title: "Clothes", url: "/products/clothes", icon: Inbox },
  { title: "Posters", url: "/products/posters", icon: Calendar },
  { title: "Electronics", url: "/products/electronics", icon: Search },
  { title: "Footwear", url: "/products/footwear", icon: Settings },
];
 
export function AppSidebar() {
  const { category } = useParams();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Categories</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={
                      category === item.url.split("/").pop()
                        ? "bg-muted text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }
                    asChild
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>                
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </SidebarProvider>
  )
}