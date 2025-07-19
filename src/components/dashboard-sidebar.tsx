
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
  FileText,
  KeyRound,
  Calendar,
  Download,
  Users,
  Shield,
  Phone,
  Camera,
  Record,
  Mic,
  Clapperboard,
  Monitor,
  VideoIcon,
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

export function DashboardSidebar() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path || (pathname.startsWith(path) && path !== '/dashboard');
  }
  
  const isSubActive = (paths: string[]) => {
    return paths.some(p => isActive(p));
  }

  const phoneFilesPaths = ["/dashboard/messages", "/dashboard/media", "/dashboard/history", "/dashboard/apps"];
  const locationPaths = ["/dashboard/location"];
  const remoteControlPaths = ["/dashboard/remote"];
  const socialAppPaths = ["/dashboard/social"];


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
                isActive={pathname === '/dashboard'}
                tooltip="Dashboard"
              >
                <LayoutDashboard />
                <span>Dashboard</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
          
          <Collapsible defaultOpen={isSubActive(phoneFilesPaths)}>
            <CollapsibleTrigger asChild className="w-full">
                 <SidebarMenuButton isActive={isSubActive(phoneFilesPaths)} className="w-full">
                    <FileText />
                    <span>Phone Files</span>
                    <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenu className="pl-6 py-1">
                    <SidebarMenuItem>
                        <Link href="/dashboard/messages" passHref>
                          <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/messages')}><Phone className="w-3.5 h-3.5" /> <span>Call Logs</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/dashboard/messages" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/messages')}><MessageSquare className="w-3.5 h-3.5" /> <span>Messages</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/dashboard/history" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/history')}><Globe className="w-3.5 h-3.5" /> <span>Browser History</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/dashboard/media" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/media')}><ImageIcon className="w-3.5 h-3.5" /> <span>Photos</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <Link href="/dashboard/media" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/media')}><VideoIcon className="w-3.5 h-3.5" /> <span>Video Preview</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <Link href="/dashboard/apps" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/apps')}><AppWindow className="w-3.5 h-3.5" /> <span>App Activities</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </CollapsibleContent>
          </Collapsible>
        
          <Collapsible defaultOpen={isSubActive(locationPaths)}>
            <CollapsibleTrigger asChild className="w-full">
                 <SidebarMenuButton isActive={isSubActive(locationPaths)} className="w-full">
                    <MapPin />
                    <span>Location Tracking</span>
                    <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenu className="pl-6 py-1">
                     <SidebarMenuItem>
                        <Link href="/dashboard/location" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/location')}><MapPin className="w-3.5 h-3.5" /> <span>Location</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <Link href="/dashboard/location" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/location')}><Shield className="w-3.5 h-3.5" /> <span>Geofence</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </CollapsibleContent>
          </Collapsible>

          <Collapsible defaultOpen={isSubActive(remoteControlPaths)}>
            <CollapsibleTrigger asChild className="w-full">
                 <SidebarMenuButton isActive={isSubActive(remoteControlPaths)} className="w-full">
                    <Clapperboard />
                    <span>Remote Control</span>
                    <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenu className="pl-6 py-1">
                     <SidebarMenuItem>
                        <Link href="/dashboard/remote" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/remote')}><Monitor className="w-3.5 h-3.5" /> <span>Record Screen</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                     <SidebarMenuItem>
                        <Link href="/dashboard/remote" passHref>
                           <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/remote')}><Camera className="w-3.5 h-3.5" /> <span>Take Photos</span></SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                </SidebarMenu>
            </CollapsibleContent>
          </Collapsible>
          
           <Collapsible defaultOpen={isSubActive(socialAppPaths)}>
            <CollapsibleTrigger asChild className="w-full">
                 <SidebarMenuButton isActive={isSubActive(socialAppPaths)} className="w-full">
                    <Users />
                    <span>Social Apps</span>
                    <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
                <SidebarMenu className="pl-6 py-1">
                    {socialApps.map(app => (
                        <SidebarMenuItem key={app.name}>
                            <Link href="/dashboard/messages" passHref>
                               <SidebarMenuButton variant="ghost" size="sm" isActive={isActive('/dashboard/messages')}>
                                   {app.icon}
                                   <span>{app.name}</span>
                                </SidebarMenuButton>
                            </Link>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </CollapsibleContent>
          </Collapsible>

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
