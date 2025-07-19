'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AppWindow,
  ChevronDown,
  Globe,
  Image as ImageIcon,
  LayoutDashboard,
  MapPin,
  MessageSquare,
  Settings,
  Smartphone,
  Video,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Logo } from "@/components/icons/logo"

export function DashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || (path.length > 10 && pathname.startsWith(path))
  }

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8 text-primary" />
          <span className="text-lg font-semibold">SurokkhaNet</span>
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarGroup>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4" />
                  <span>Sam's Phone</span>
                </div>
                <ChevronDown className="w-4 h-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[var(--sidebar-width)]">
              <DropdownMenuItem>
                <Smartphone className="w-4 h-4 mr-2" />
                <span>Sam's Phone</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Smartphone className="w-4 h-4 mr-2" />
                <span>Aria's Tablet</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarGroup>

        <SidebarMenu>
          <SidebarMenuItem>
            <Link href="/dashboard" passHref>
              <SidebarMenuButton
                isActive={isActive('/dashboard')}
                tooltip="Dashboard"
              >
                <LayoutDashboard />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <Link href="/dashboard/remote" passHref>
              <SidebarMenuButton
                isActive={isActive('/dashboard/remote')}
                tooltip="Remote"
              >
                <Video />
                <span>Remote</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/dashboard/location" passHref>
              <SidebarMenuButton
                isActive={isActive('/dashboard/location')}
                tooltip="Location"
              >
                <MapPin />
                <span>Location</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/dashboard/apps" passHref>
              <SidebarMenuButton
                isActive={isActive('/dashboard/apps')}
                tooltip="Apps"
              >
                <AppWindow />
                <span>Apps</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/dashboard/history" passHref>
              <SidebarMenuButton
                isActive={isActive('/dashboard/history')}
                tooltip="Web History"
              >
                <Globe />
                <span>Web History</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <Link href="/dashboard/media" passHref>
              <SidebarMenuButton
                isActive={isActive('/dashboard/media')}
                tooltip="Media"
              >
                <ImageIcon />
                <span>Photos & Videos</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/dashboard/messages" passHref>
              <SidebarMenuButton
                isActive={isActive('/dashboard/messages')}
                tooltip="Messages"
              >
                <MessageSquare />
                <span>Communications</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <Link href="/dashboard/settings" passHref>
              <SidebarMenuButton
                isActive={isActive('/dashboard/settings')}
                tooltip="Settings"
              >
                <Settings />
                <span>Settings</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter>
        <Separator className="my-2" />
        <div className="flex items-center gap-3 p-2 rounded-md hover:bg-sidebar-accent">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://placehold.co/100x100.png" data-ai-hint="person user"/>
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">Admin</span>
            <span className="text-sm text-muted-foreground">
              admin@surokkha.net
            </span>
          </div>
        </div>
      </SidebarFooter>
    </>
  )
}
