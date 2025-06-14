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
  { title: "All", url: "/movies/all", icon: Home },
  { title: "Clothes", url: "/movies/clothes", icon: Inbox },
  { title: "Posters", url: "/movies/posters", icon: Calendar },
  { title: "Electronics", url: "/movies/electronics", icon: Search },
  { title: "Footwear", url: "/movies/footwear", icon: Settings },
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