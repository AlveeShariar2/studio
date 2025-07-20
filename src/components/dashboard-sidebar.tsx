'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import * as React from "react"
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
  VideoIcon,
  FileText,
  Shield,
  Phone,
  Camera,
  Monitor,
  Users,
  Clapperboard,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
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

const socialApps = [
    { name: "WhatsApp", icon: <MessageSquare /> },
    { name: "Facebook", icon: <MessageSquare /> },
    { name: "Snapchat", icon: <MessageSquare /> },
    { name: "Instagram", icon: <MessageSquare /> },
    { name: "Telegram", icon: <MessageSquare /> },
]

export function DashboardSidebar({ search }: { search?: string }) {
  const pathname = usePathname()

  const isActive = (path: string) => {
    // Exact match for dashboard, startsWith for others.
    if (path === '/dashboard') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  }
  
  const isSubActive = (paths: string[]) => {
    return paths.some(p => isActive(p));
  }

  const menuItems = React.useMemo(() => [
    {
      type: 'item' as const,
      href: '/dashboard',
      icon: <LayoutDashboard />,
      label: 'Dashboard',
    },
    {
      type: 'collapsible' as const,
      icon: <FileText />,
      label: 'Phone Files',
      paths: ["/dashboard/messages", "/dashboard/media", "/dashboard/history", "/dashboard/apps"],
      subItems: [
        { href: '/dashboard/messages', icon: <Phone />, label: 'Call Logs' },
        { href: '/dashboard/messages', icon: <MessageSquare />, label: 'Messages' },
        { href: '/dashboard/history', icon: <Globe />, label: 'Browser History' },
        { href: '/dashboard/media', icon: <ImageIcon />, label: 'Photos' },
        { href: '/dashboard/media', icon: <VideoIcon />, label: 'Video Preview' },
        { href: '/dashboard/apps', icon: <AppWindow />, label: 'App Activities' },
      ],
    },
    {
      type: 'collapsible' as const,
      icon: <MapPin />,
      label: 'Location Tracking',
      paths: ["/dashboard/location"],
      subItems: [
        { href: '/dashboard/location', icon: <MapPin />, label: 'Location' },
        { href: '/dashboard/location', icon: <Shield />, label: 'Geofence' },
      ],
    },
    {
      type: 'collapsible' as const,
      icon: <Clapperboard />,
      label: 'Remote Control',
      paths: ["/dashboard/remote"],
      subItems: [
        { href: '/dashboard/remote', icon: <Monitor />, label: 'Record Screen' },
        { href: '/dashboard/remote', icon: <Camera />, label: 'Take Photos' },
      ],
    },
    {
      type: 'collapsible' as const,
      icon: <Users />,
      label: 'Social Apps',
      paths: ["/dashboard/social"],
      subItems: socialApps.map(app => ({
        href: '/dashboard/messages',
        icon: app.icon,
        label: app.name,
      })),
    },
     {
      type: 'item' as const,
      href: '/dashboard/settings',
      icon: <Settings />,
      label: 'Settings',
    },
  ], []);

  const filteredMenuItems = React.useMemo(() => {
    if (!search?.trim()) return menuItems;

    const query = search.toLowerCase();

    return menuItems.map(item => {
      if (item.type === 'item') {
        return item.label.toLowerCase().includes(query) ? item : null;
      }
      if (item.type === 'collapsible') {
        const filteredSubItems = item.subItems.filter(sub => 
          sub.label.toLowerCase().includes(query)
        );

        if (item.label.toLowerCase().includes(query) || filteredSubItems.length > 0) {
          return { 
            ...item, 
            subItems: item.label.toLowerCase().includes(query) ? item.subItems : filteredSubItems 
          };
        }
      }
      return null;
    }).filter((item): item is NonNullable<typeof item> => item !== null);
  }, [search, menuItems]);

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
                <Smartphone className="h-4 w-4 mr-2" />
                <span>Sam's Phone</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Smartphone className="h-4 w-4 mr-2" />
                <span>Aria's Tablet</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarGroup>

        <SidebarMenu>
          {filteredMenuItems.map((item, i) => {
            if (item.type === 'item') {
              return (
                <SidebarMenuItem key={`${item.href}-${i}`}>
                  <Link href={item.href} passHref>
                    <SidebarMenuButton isActive={isActive(item.href)} tooltip={item.label}>
                      {item.icon}
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              );
            }
            if (item.type === 'collapsible') {
              return (
                <Collapsible key={`${item.label}-${i}`} defaultOpen={isSubActive(item.paths)}>
                  <CollapsibleTrigger asChild className="w-full">
                      <SidebarMenuButton isActive={isSubActive(item.paths)} className="w-full">
                          {item.icon}
                          <span>{item.label}</span>
                          <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                      </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                      <SidebarMenu className="pl-6 py-1">
                        {item.subItems.map((sub, j) => (
                           <SidebarMenuItem key={`${sub.href}-${j}`}>
                              <Link href={sub.href} passHref>
                                <SidebarMenuButton variant="ghost" size="sm" isActive={isActive(sub.href)}>
                                  {sub.icon} 
                                  <span>{sub.label}</span>
                                </SidebarMenuButton>
                              </Link>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                  </CollapsibleContent>
                </Collapsible>
              );
            }
            return null;
          })}
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
