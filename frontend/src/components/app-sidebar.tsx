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
import { Inbox, Mail, Send, Trash2, Settings } from "lucide-react"

const items = [
  {
    title: "Inbox",
    url: "/user/inbox",
    icon: Inbox,
  },
  {
    title: "All Emails",
    url: "/user/emails",
    icon: Mail,
  },
  {
    title: "Sent",
    url: "/user/sent",
    icon: Send,
  },
  {
    title: "Trash",
    url: "/user/trash",
    icon: Trash2,
  },
  {
    title: "Settings",
    url: "/user/settings",
    icon: Settings,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Femailer</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
