
"use client"

import * as React from "react"
import { Bell, Camera, Crop, Download, PanelTopOpen, Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth"
import { auth } from "@/lib/firebase"
import { useToast } from "@/hooks/use-toast"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { SidebarProvider, Sidebar, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [search, setSearch] = React.useState("")
  const router = useRouter()
  const { toast } = useToast()

  const handleLogout = async () => {
    try {
      await signOut(auth)
      toast({ title: "Logged out successfully." })
      router.push('/')
    } catch (error) {
      console.error("Logout failed:", error)
      toast({
        title: "Logout Failed",
        description: "An error occurred while logging out.",
        variant: "destructive",
      })
    }
  }

  return (
    <SidebarProvider>
      <Sidebar>
        <DashboardSidebar search={search} />
      </Sidebar>
      <SidebarInset className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-card px-4 lg:h-[60px] lg:px-6 sticky top-0 z-30">
          <SidebarTrigger className="md:hidden" />
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search features..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </form>
          </div>
          <ThemeToggle />
          <Button variant="outline" size="icon" className="h-8 w-8">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Toggle notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                    <AvatarImage src="https://placehold.co/100x100.png" alt="@admin" data-ai-hint="person user" />
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex-1 p-4 sm:px-6 sm:py-0 md:gap-8 bg-background relative">
          {children}
          <div className="fixed bottom-6 left-6 z-50">
             <Popover>
              <PopoverTrigger asChild>
                <Button variant="default" size="icon" className="rounded-full w-14 h-14 shadow-lg">
                    <PanelTopOpen className="h-6 w-6" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-2" side="top" align="start">
                <div className="flex flex-col gap-2">
                   <Button variant="ghost" className="justify-start">
                     <Camera className="mr-2 h-4 w-4" />
                    Selfie
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Crop className="mr-2 h-4 w-4" />
                    Screenshot
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Data Export
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}
