"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Profile } from "./components/Profile"
import { BarChart3, Settings, Users, Home, MessageSquare, LifeBuoy, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function AppSidebar() {
    const profileData = {
        userName: "sayed mojib",
        userImage: "",
        imageName: "My Image"
    }

    const menuItems = [
        { title: "Overview", icon: Home, href: "#" },
        { title: "Analytics", icon: BarChart3, href: "#" },
        { title: "Customers", icon: Users, href: "#" },
    ]

    const settingsItems = [
        { title: "Manager", icon: Settings, href: "#" },
        { title: "Customer Reviews", icon: MessageSquare, href: "#" },
        { title: "Help Center", icon: LifeBuoy, href: "#" },
    ]

    return (
        <Sidebar
            collapsible="none"
            className="p-3 border-r border-slate-800 bg-slate-950"
        >
            <SidebarHeader>
                <Profile profileData={profileData} />
                <div className="mt-4 relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                    <Input
                        placeholder="Search..."
                        className="pl-9 bg-slate-900 border-slate-700 text-sm"
                    />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wide">DASHBOARDS</SidebarGroupLabel>
                    <SidebarMenu>
                        {menuItems.map((item) => {
                            const IconComponent = item.icon
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        className="hover:bg-slate-200 text-slate-200"
                                    >
                                        <IconComponent className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wide">SETTINGS</SidebarGroupLabel>
                    <SidebarMenu>
                        {settingsItems.map((item) => {
                            const IconComponent = item.icon
                            return (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton
                                        className="hover:bg-slate-200 text-slate-200"
                                    >
                                        <IconComponent className="h-4 w-4" />
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )
                        })}
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                {/* Footer content can be added here */}
            </SidebarFooter>
        </Sidebar>
    )
}