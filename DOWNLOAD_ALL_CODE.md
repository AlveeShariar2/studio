
# SurokkhaNet - সম্পূর্ণ সোর্স কোড

এই ফাইলে আপনার SurokkhaNet অ্যাপ্লিকেশনের সমস্ত সোর্স কোড একত্রিত করা হয়েছে। আপনি প্রতিটি ফাইল সেকশন থেকে কোড কপি করে আপনার নিজের কম্পিউটারে সংশ্লিষ্ট নামের ফাইল তৈরি করে পেস্ট করতে পারেন।

---
---

## `package.json`

```json
{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/googleai": "^1.14.1",
    "@genkit-ai/next": "^1.14.1",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "genkit": "^1.14.1",
    "lucide-react": "^0.475.0",
    "next": "15.3.3",
    "next-themes": "^0.3.0",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "genkit-cli": "^1.14.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

---

## `tailwind.config.ts`

```ts
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
```

---

## `next.config.ts`

```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

## `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 20% 96%; /* #F0F4F8 */
    --foreground: 224 71% 4%;
    --card: 0 0% 100%;
    --card-foreground: 224 71% 4%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71% 4%;
    --primary: 207 90% 54%; /* #64B5F6 */
    --primary-foreground: 0 0% 100%;
    --secondary: 220 14% 91%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 220 14% 91%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 122 47% 64%; /* #81C784 */
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 13% 89%;
    --input: 220 13% 89%;
    --ring: 207 90% 54%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 222 47% 11%;
    --sidebar-foreground: 210 40% 98%;
    --sidebar-primary: 207 82% 67%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 222 47% 15%;
    --sidebar-accent-foreground: 210 40% 98%;
    --sidebar-border: 217 33% 17%;
    --sidebar-ring: 207 82% 67%;
  }
  .dark {
    --background: 215 28% 17%;
    --foreground: 210 40% 98%;
    --card: 215 28% 17%;
    --card-foreground: 210 40% 98%;
    --popover: 224 71% 4%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217 33% 17%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217 33% 17%;
    --muted-foreground: 215 20% 65%;
    --accent: 122 47% 64%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    --border: 217 33% 17%;
    --input: 217 33% 17%;
    --ring: 215 20% 65%;
    --sidebar-background: 224 71% 4%;
    --sidebar-foreground: 210 40% 98%;
    --sidebar-accent: 217 33% 17%;
    --sidebar-accent-foreground: 210 40% 98%;
    --sidebar-border: 217 33% 17%;
    --sidebar-ring: 207 82% 67%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## `src/app/layout.tsx`

```tsx
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'SurokkhaNet',
  description: 'Advanced Parental Control App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## `src/app/page.tsx`

```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">SurokkhaNet</CardTitle>
          <CardDescription>Sign in to access the parental control dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="admin@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">
                Sign in
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## `src/app/dashboard/layout.tsx`

```tsx
"use client"

import * as React from "react"
import { Bell, Camera, Crop, Download, PanelTopOpen, Search } from "lucide-react"

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
              <DropdownMenuItem>Logout</DropdownMenuItem>
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
```

---

## `src/app/dashboard/page.tsx`

```tsx
import { Activity, AppWindow, BatteryFull, Calendar, Clock, Image as ImageIcon, KeyRound, MapPin, MessageCircle, Phone, Wifi, Smartphone } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const topCalls = [
  { name: "John Doe", number: "(555) 123-4567", type: "Outgoing", duration: "5m 21s", date: "2024-07-29 10:15" },
  { name: "Jane Smith", number: "Unknown", type: "Incoming", duration: "10m 02s", date: "2024-07-29 09:30" },
  { name: "Tech Support", number: "(555) 987-6543", type: "Missed", duration: "0s", date: "2024-07-29 08:00" },
];

const topMessages = [
  { from: "John Doe", message: "Hey, are you coming to the park?", time: "20m ago" },
  { from: "(555) 555-5555", message: "URGENT: Your account is locked. Click here...", time: "2h ago" },
  { from: "Mom", message: "Dinner is at 7 PM!", time: "4h ago" },
]

export default function DashboardPage() {
  return (
    <div className="py-6 space-y-6">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Sam's Phone Dashboard</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Account Status: <Badge variant="default" className="bg-accent text-accent-foreground">Premium</Badge></span>
            <span>Expires: 2025-07-29</span>
          </div>
        </div>

      <Card>
        <CardHeader>
            <CardTitle>Device Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
                <BatteryFull className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Battery</p>
                    <p className="text-muted-foreground">95%</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">GPS Status</p>
                    <p className="text-muted-foreground">On</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Wi-Fi</p>
                    <p className="text-muted-foreground">Home_Network_5G</p>
                </div>
            </div>
             <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Device Status</p>
                    <p className="text-muted-foreground">Online</p>
                </div>
            </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Current Location & Geo-Fencing</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <Image 
                            src="https://placehold.co/1280x720.png" 
                            alt="Map showing current location" 
                            width={1280} 
                            height={720} 
                            className="rounded-md object-cover"
                            data-ai-hint="world map"
                        />
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Top 8 Call Logs</CardTitle>
                    <CardDescription>A summary of the most recent calls.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader><TableRow><TableHead>Contact</TableHead><TableHead>Type</TableHead><TableHead>Duration</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {topCalls.map((call, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="font-medium">{call.name}</div>
                                        <div className="text-xs text-muted-foreground">{call.number}</div>
                                    </TableCell>
                                    <TableCell><Badge variant={call.type === 'Missed' ? 'destructive' : 'outline'}>{call.type}</Badge></TableCell>
                                    <TableCell>{call.duration}</TableCell>
                                    <TableCell>{call.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Top 8 Messages</CardTitle>
                    <CardDescription>A summary of the most recent messages.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader><TableRow><TableHead>From</TableHead><TableHead>Message</TableHead><TableHead>Time</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {topMessages.map((msg, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{msg.from}</TableCell>
                                    <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                                    <TableCell>{msg.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
        
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Last Known Location</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2 text-sm">
                        <p className="font-semibold">Greenwood Park</p>
                        <p className="text-muted-foreground">123 Park Ave, Springfield</p>
                        <p className="text-muted-foreground">Updated: 2m ago</p>
                        <Button variant="link" className="p-0 h-auto">View on map</Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Photos</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-2">
                    {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className="aspect-square bg-muted rounded-md">
                             <Image 
                                src={`https://placehold.co/100x100.png?id=${i}`}
                                alt={`Recent photo ${i+1}`}
                                width={100}
                                height={100}
                                className="rounded-md object-cover w-full h-full"
                                data-ai-hint="children park"
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
```

... and so on for all other files. I will include every single project file in `DOWNLOAD_ALL_CODE.md`.
It's going to be a very long file, but it will contain everything needed.

The files included are:
- `package.json`
- `tailwind.config.ts`
- `next.config.ts`
- `src/app/globals.css`
- `src/app/layout.tsx`
- `src/app/page.tsx`
- All dashboard pages (`/dashboard/page.tsx`, `apps/page.tsx`, etc.)
- All components (`.tsx` files under `src/components/`)
- AI and Genkit files (`.ts` files under `src/ai/`)
- Utility and hook files (`.ts` and `.tsx` files under `src/lib/` and `src/hooks/`)
- Configuration files like `tsconfig.json`, `components.json`, `apphosting.yaml`.
- Markdown files like `README.md` and `PUBLISHING_GUIDE.md`.

This will be a comprehensive collection of the entire project.
I will structure the final `DOWNLOAD_ALL_CODE.md` file clearly.
The user's intent is clear: they want to extract the code. This is the best I can do within my constraints.
Okay, planning complete. I will now generate the `<changes>` block.
I will create one large `<change>` tag for the new file `/DOWNLOAD_ALL_CODE.md`.
The content will be a markdown file containing all other file contents inside code blocks.
This is the most robust way to handle this request.
```
# SurokkhaNet - Complete Source Code

This file consolidates all the source code for your SurokkhaNet application. You can copy the code from each file section and paste it into a file with the corresponding name on your own computer.

---
---

## `apphosting.yaml`

```yaml
# Settings to manage and configure a Firebase App Hosting backend.
# https://firebase.google.com/docs/app-hosting/configure

runConfig:
  # Increase this value if you'd like to automatically spin up
  # more instances in response to increased traffic.
  maxInstances: 1
```

---

## `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## `next.config.ts`

```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

## `package.json`

```json
{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/googleai": "^1.14.1",
    "@genkit-ai/next": "^1.14.1",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "genkit": "^1.14.1",
    "lucide-react": "^0.475.0",
    "next": "15.3.3",
    "next-themes": "^0.3.0",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "genkit-cli": "^1.14.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

---

## `PUBLISHING_GUIDE.md`

```md
# কীভাবে অ্যাপ্লিকেশন পাবলিশ করবেন এবং সন্তানের অ্যাপের সাথে সংযোগ করবেন

এই গাইডটি আপনাকে আপনার অ্যাডমিন ড্যাশবোর্ড পাবলিশ করতে এবং এটিকে সন্তানের ফোনে থাকা অ্যাপের সাথে কীভাবে সংযোগ করবেন তার একটি ধারণা দেবে।

## ১. অ্যাডমিন ড্যাশবোর্ড পাবলিশ করা

এই অ্যাপ্লিকেশনটি একটি Next.js ওয়েব অ্যাপ। এটিকে পাবলিশ করার সবচেয়ে সহজ উপায় হলো **Firebase App Hosting** ব্যবহার করা।

### ধাপসমূহ:

1.  **Firebase CLI ইনস্টল করুন:** যদি আপনার কম্পিউটারে Firebase Command Line Interface (CLI) ইনস্টল করা না থাকে, তবে এটি ইনস্টল করুন। টার্মিনালে এই কমান্ডটি চালান:
    ```bash
    npm install -g firebase-tools
    ```

2.  **Firebase-এ লগইন করুন:** আপনার গুগল অ্যাকাউন্ট দিয়ে Firebase-এ লগইন করুন।
    ```bash
    firebase login
    ```

3.  **প্রজেক্ট শুরু করুন:** আপনার প্রজেক্ট ফোল্ডারের টার্মিনাল থেকে, আপনার Firebase প্রজেক্টের সাথে এই ফোল্ডারটিকে সংযুক্ত করুন।
    ```bash
    firebase init apphosting
    ```
    CLI আপনাকে কিছু প্রশ্ন করবে। আপনার বিদ্যমান Firebase প্রজেক্টটি বেছে নিন এবং ডিফল্ট অপশনগুলো অনুসরণ করুন।

4.  **অ্যাপ ডিপ্লয় করুন:** চূড়ান্ত ধাপ হলো আপনার অ্যাপ্লিকেশনটি Firebase-এ আপলোড বা ডিপ্লয় করা।
    ```bash
    firebase apphosting:backends:deploy
    ```

ডিপ্লয় সম্পূর্ণ হলে, আপনি একটি URL পাবেন যেখানে আপনার অ্যাডমিন ড্যাশবোর্ড লাইভ দেখতে পারবেন।

---

## ২. সন্তানের ফোনের অ্যাপের সাথে সংযোগ স্থাপন

আপনার সিস্টেমটি সম্পূর্ণ করতে দুটি অংশ প্রয়োজন:

1.  **অ্যাডমিন ড্যাশবোর্ড:** এটি আমরা তৈরি করেছি। এটি একটি ওয়েব অ্যাপ।
2.  **চাইল্ড-সাইড অ্যাপ:** এটি একটি মোবাইল অ্যাপ (Android/iOS) যা সন্তানের ফোনে ইনস্টল করতে হবে। **এই অ্যাপটি আলাদাভাবে তৈরি করতে হবে।**

এই দুটি অ্যাপ **Firebase** ব্যবহার করে একে অপরের সাথে কথা বলবে।

### সংযোগের আর্কিটেকচার:



1.  **কমান্ড পাঠানো (ড্যাশবোর্ড থেকে):**
    *   আপনি যখন আপনার অ্যাডমিন ড্যাশবোর্ড থেকে একটি বোতাম চাপেন (যেমন একটি অ্যাপ ব্লক করা), তখন আপনার ড্যাশবোর্ড Firebase Firestore ডাটাবেসে একটি নির্দিষ্ট ডকুমেন্ট আপডেট করে।
    *   উদাহরণস্বরূপ, `devices/{deviceId}/settings` ডকুমেন্টে `isYoutubeBlocked` ফিল্ডটি `true` করে দেওয়া হয়।

2.  **রিয়েল-টাইম আপডেট শোনা (সন্তানের অ্যাপে):**
    *   সন্তানের ফোনে থাকা অ্যাপটি Firestore ডাটাবেসের `devices/{deviceId}/settings` ডকুমেন্টটি রিয়েল-টাইমে শুনতে (listen) থাকবে।
    *   যখনই `isYoutubeBlocked` ফিল্ডটি `true` হবে, সন্তানের অ্যাপটি সাথে সাথে ইউটিউব ব্লক করার জন্য প্রয়োজনীয় পদক্ষেপ নেবে।

3.  **ডেটা পাঠানো (সন্তানের অ্যাপ থেকে):**
    *   সন্তানের অ্যাপটি তার ফোনের তথ্য, যেমন কল লগ, মেসেজ বা লোকেশন, সংগ্রহ করে এবং সেগুলোকে Firestore ডাটাবেসে লেখে।
    *   উদাহরণস্বরূপ, একটি নতুন কল আসলে, অ্যাপটি `devices/{deviceId}/call_logs` কালেকশনে একটি নতুন ডকুমেন্ট তৈরি করে।

4.  **ডেটা প্রদর্শন (ড্যাশবোর্ডে):**
    *   আপনার অ্যাডমিন ড্যাশবোর্ড Firestore ডাটাবেস থেকে সেই ডেটা পড়ে এবং আপনাকে টেবিল এবং চার্টে সুন্দরভাবে প্রদর্শন করে।

সহজ কথায়, **Firebase Firestore** আপনার এবং আপনার সন্তানের ডিভাইসের মধ্যে একটি কেন্দ্রীয় হাব বা সেতু হিসাবে কাজ করে, যা উভয়ের মধ্যে ডেটা আদান-প্রদান নিশ্চিত করে।
```

---

## `README.md`

```md
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
```

---

## `tailwind.config.ts`

```ts
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
```

---

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---
---

# `src` Directory

---

## `src/ai/dev.ts`

```ts
import { config } from 'dotenv';
config();

import '@/ai/flows/analyze-text-content.ts';
```

---

## `src/ai/genkit.ts`

```ts
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
```

---

## `src/ai/flows/analyze-text-content.ts`

```ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing text content to flag potential risks such as cyberbullying or inappropriate content.
 *
 * - analyzeTextContent - A function that analyzes the text content and returns a risk assessment.
 * - AnalyzeTextContentInput - The input type for the analyzeTextContent function.
 * - AnalyzeTextContentOutput - The return type for the analyzeTextContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTextContentInputSchema = z.object({
  text: z
    .string()    
    .describe('The text content to analyze for potential risks.'),
});

export type AnalyzeTextContentInput = z.infer<typeof AnalyzeTextContentInputSchema>;

const AnalyzeTextContentOutputSchema = z.object({
  riskAssessment: z.object({
    hasRisks: z.boolean().describe('Whether the text content contains potential risks.'),
    riskTypes: z.array(z.string()).describe('The types of risks identified in the text content.'),
    severity: z.string().describe('The severity of the identified risks (e.g., low, medium, high).'),
    explanation: z.string().describe('A detailed explanation of the identified risks.'),
  }).describe('The risk assessment of the text content.'),
});

export type AnalyzeTextContentOutput = z.infer<typeof AnalyzeTextContentOutputSchema>;

export async function analyzeTextContent(input: AnalyzeTextContentInput): Promise<AnalyzeTextContentOutput> {
  return analyzeTextContentFlow(input);
}

const analyzeTextContentPrompt = ai.definePrompt({
  name: 'analyzeTextContentPrompt',
  input: {schema: AnalyzeTextContentInputSchema},
  output: {schema: AnalyzeTextContentOutputSchema},
  prompt: `You are an AI assistant designed to analyze text content for potential risks, such as cyberbullying, hate speech, inappropriate content, or other harmful elements.

  Analyze the following text and determine if it contains any risks. Provide a detailed risk assessment, including the types of risks identified, the severity of the risks, and a detailed explanation.

  Text: {{{text}}}

  Respond in JSON format:
  {{json schema=AnalyzeTextContentOutputSchema}}`,
});

const analyzeTextContentFlow = ai.defineFlow(
  {
    name: 'analyzeTextContentFlow',
    inputSchema: AnalyzeTextContentInputSchema,
    outputSchema: AnalyzeTextContentOutputSchema,
  },
  async input => {
    const {output} = await analyzeTextContentPrompt(input);
    return output!;
  }
);
```

---

## `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 20% 96%; /* #F0F4F8 */
    --foreground: 224 71% 4%;
    --card: 0 0% 100%;
    --card-foreground: 224 71% 4%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71% 4%;
    --primary: 207 90% 54%; /* #64B5F6 */
    --primary-foreground: 0 0% 100%;
    --secondary: 220 14% 91%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 220 14% 91%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 122 47% 64%; /* #81C784 */
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 13% 89%;
    --input: 220 13% 89%;
    --ring: 207 90% 54%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 222 47% 11%;
    --sidebar-foreground: 210 40% 98%;
    --sidebar-primary: 207 82% 67%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 222 47% 15%;
    --sidebar-accent-foreground: 210 40% 98%;
    --sidebar-border: 217 33% 17%;
    --sidebar-ring: 207 82% 67%;
  }
  .dark {
    --background: 215 28% 17%;
    --foreground: 210 40% 98%;
    --card: 215 28% 17%;
    --card-foreground: 210 40% 98%;
    --popover: 224 71% 4%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217 33% 17%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217 33% 17%;
    --muted-foreground: 215 20% 65%;
    --accent: 122 47% 64%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    --border: 217 33% 17%;
    --input: 217 33% 17%;
    --ring: 215 20% 65%;
    --sidebar-background: 224 71% 4%;
    --sidebar-foreground: 210 40% 98%;
    --sidebar-accent: 217 33% 17%;
    --sidebar-accent-foreground: 210 40% 98%;
    --sidebar-border: 217 33% 17%;
    --sidebar-ring: 207 82% 67%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## `src/app/layout.tsx`

```tsx
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'SurokkhaNet',
  description: 'Advanced Parental Control App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## `src/app/page.tsx`

```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">SurokkhaNet</CardTitle>
          <CardDescription>Sign in to access the parental control dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="admin@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">
                Sign in
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## `src/app/dashboard/layout.tsx`

```tsx
"use client"

import * as React from "react"
import { Bell, Camera, Crop, Download, PanelTopOpen, Search } from "lucide-react"

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
              <DropdownMenuItem>Logout</DropdownMenuItem>
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
```

---

## `src/app/dashboard/page.tsx`

```tsx
import { Activity, AppWindow, BatteryFull, Calendar, Clock, Image as ImageIcon, KeyRound, MapPin, MessageCircle, Phone, Wifi, Smartphone } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const topCalls = [
  { name: "John Doe", number: "(555) 123-4567", type: "Outgoing", duration: "5m 21s", date: "2024-07-29 10:15" },
  { name: "Jane Smith", number: "Unknown", type: "Incoming", duration: "10m 02s", date: "2024-07-29 09:30" },
  { name: "Tech Support", number: "(555) 987-6543", type: "Missed", duration: "0s", date: "2024-07-29 08:00" },
];

const topMessages = [
  { from: "John Doe", message: "Hey, are you coming to the park?", time: "20m ago" },
  { from: "(555) 555-5555", message: "URGENT: Your account is locked. Click here...", time: "2h ago" },
  { from: "Mom", message: "Dinner is at 7 PM!", time: "4h ago" },
]

export default function DashboardPage() {
  return (
    <div className="py-6 space-y-6">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Sam's Phone Dashboard</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Account Status: <Badge variant="default" className="bg-accent text-accent-foreground">Premium</Badge></span>
            <span>Expires: 2025-07-29</span>
          </div>
        </div>

      <Card>
        <CardHeader>
            <CardTitle>Device Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
                <BatteryFull className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Battery</p>
                    <p className="text-muted-foreground">95%</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">GPS Status</p>
                    <p className="text-muted-foreground">On</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Wi-Fi</p>
                    <p className="text-muted-foreground">Home_Network_5G</p>
                </div>
            </div>
             <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Device Status</p>
                    <p className="text-muted-foreground">Online</p>
                </div>
            </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Current Location & Geo-Fencing</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <Image 
                            src="https://placehold.co/1280x720.png" 
                            alt="Map showing current location" 
                            width={1280} 
                            height={720} 
                            className="rounded-md object-cover"
                            data-ai-hint="world map"
                        />
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Top 8 Call Logs</CardTitle>
                    <CardDescription>A summary of the most recent calls.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader><TableRow><TableHead>Contact</TableHead><TableHead>Type</TableHead><TableHead>Duration</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {topCalls.map((call, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="font-medium">{call.name}</div>
                                        <div className="text-xs text-muted-foreground">{call.number}</div>
                                    </TableCell>
                                    <TableCell><Badge variant={call.type === 'Missed' ? 'destructive' : 'outline'}>{call.type}</Badge></TableCell>
                                    <TableCell>{call.duration}</TableCell>
                                    <TableCell>{call.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Top 8 Messages</CardTitle>
                    <CardDescription>A summary of the most recent messages.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader><TableRow><TableHead>From</TableHead><TableHead>Message</TableHead><TableHead>Time</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {topMessages.map((msg, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{msg.from}</TableCell>
                                    <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                                    <TableCell>{msg.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
        
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Last Known Location</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2 text-sm">
                        <p className="font-semibold">Greenwood Park</p>
                        <p className="text-muted-foreground">123 Park Ave, Springfield</p>
                        <p className="text-muted-foreground">Updated: 2m ago</p>
                        <Button variant="link" className="p-0 h-auto">View on map</Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Photos</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-2">
                    {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className="aspect-square bg-muted rounded-md">
                             <Image 
                                src={`https://placehold.co/100x100.png?id=${i}`}
                                alt={`Recent photo ${i+1}`}
                                width={100}
                                height={100}
                                className="rounded-md object-cover w-full h-full"
                                data-ai-hint="children park"
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
```

---

## `src/app/dashboard/apps/page.tsx`

```tsx
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const appUsage = [
  { name: "YouTube", usage: "1h 30m", usagePercent: 40, status: "Allowed", icon: "https://placehold.co/32x32.png" },
  { name: "TikTok", usage: "45m", usagePercent: 20, status: "Allowed", icon: "https://placehold.co/32x32.png" },
  { name: "Instagram", usage: "30m", usagePercent: 15, status: "Blocked", icon: "https://placehold.co/32x32.png" },
  { name: "GameZone", usage: "25m", usagePercent: 12, status: "Allowed", icon: "https://placehold.co/32x32.png" },
  { name: "Browser", usage: "15m", usagePercent: 8, status: "Allowed", icon: "https://placehold.co/32x32.png" },
];

const AppIcon = ({ src, name }: { src: string, name: string }) => {
    return (
        <Image 
            src={src} 
            alt={`${name} icon`} 
            width={32} 
            height={32} 
            className="w-8 h-8 rounded-md"
            data-ai-hint="app logo"
        />
    )
}

export default function AppsPage() {
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">App Usage &amp; Control</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Installed Applications</CardTitle>
                    <CardDescription>Monitor usage and manage access for each app.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[250px]">App Name</TableHead>
                                <TableHead>Usage Time</TableHead>
                                <TableHead className="w-[200px]">Status</TableHead>
                                <TableHead className="text-right">Block App</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {appUsage.map((app) => (
                                <TableRow key={app.name}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <AppIcon src={app.icon} name={app.name} />
                                            <span>{app.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <span className="w-16">{app.usage}</span>
                                            <Progress value={app.usagePercent} className="h-2" />
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={app.status === 'Allowed' ? 'outline' : 'destructive'}>
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Switch defaultChecked={app.status === 'Blocked'} aria-label={`Block ${app.name}`} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
```

---

## `src/app/dashboard/history/page.tsx`

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";

const webHistory = [
    { url: "youtube.com", category: "Entertainment", time: "10m ago", incognito: false },
    { url: "google.com", query: "how to build a volcano", category: "Education", time: "25m ago", incognito: false },
    { url: "coolmathgames.com", category: "Games", time: "45m ago", incognito: true },
    { url: "wikipedia.org", query: "Solar System", category: "Education", time: "1h ago", incognito: false },
    { url: "friv.com", category: "Games", time: "2h ago", incognito: true },
];


export default function HistoryPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Web &amp; Search History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Browsing Activity</CardTitle>
          <CardDescription>A complete log of visited websites and search engine queries.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>URL / Search Query</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Mode</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {webHistory.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {item.url}
                    {item.query && <p className="text-sm text-muted-foreground">"{item.query}"</p>}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.category}</Badge>
                  </TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>
                    {item.incognito && <Badge variant="destructive">Incognito</Badge>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## `src/app/dashboard/location/page.tsx`

```tsx
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const recentLocations = [
    { name: "Greenwood Park", time: "2m ago", coordinates: "40.7128° N, 74.0060° W" },
    { name: "Central Library", time: "1h ago", coordinates: "40.7159° N, 74.0021° W" },
    { name: "Maple Street", time: "3h ago", coordinates: "40.7182° N, 74.0085° W" },
    { name: "Home", time: "5h ago", coordinates: "40.7201° N, 74.0112° W" },
];

const geoFences = [
    { name: "Home", status: "active" },
    { name: "School", status: "active" },
    { name: "Danger Zone", status: "active" },
]

export default function LocationPage() {
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Location Tracking</h1>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Live Location</CardTitle>
                            <CardDescription>Real-time map view of the device's location.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                <Image
                                    src="https://placehold.co/1280x720.png"
                                    alt="Map placeholder"
                                    width={1280}
                                    height={720}
                                    className="rounded-md object-cover"
                                    data-ai-hint="world map"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                           <div>
                            <CardTitle>Geofencing</CardTitle>
                            <CardDescription>Safe zones and restricted areas.</CardDescription>
                           </div>
                           <Button size="sm" variant="outline"><Plus className="mr-2 h-4 w-4" /> Add</Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Zone Name</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {geoFences.map((fence) => (
                                        <TableRow key={fence.name}>
                                            <TableCell className="font-medium">{fence.name}</TableCell>
                                            <TableCell><Badge variant="default" className="bg-accent text-accent-foreground">{fence.status}</Badge></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>Location History</CardTitle>
                    <CardDescription>Log of recently visited places.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Place</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Coordinates</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentLocations.map((location) => (
                                <TableRow key={location.name}>
                                    <TableCell className="font-medium">{location.name}</TableCell>
                                    <TableCell>{location.time}</TableCell>
                                    <TableCell>{location.coordinates}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
```

---

## `src/app/dashboard/media/page.tsx`

```tsx
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mediaItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  type: i % 3 === 0 ? 'video' : 'photo',
  src: `https://placehold.co/400x400.png?id=${i}`,
  alt: `Media item ${i + 1}`,
  timestamp: `${i + 2} hours ago`,
  aiHint: 'children playing'
}));

export default function MediaPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Photos &amp; Videos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Device Gallery</CardTitle>
          <CardDescription>View photos and videos saved on the device.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {mediaItems.map((item) => (
              <div key={item.id} className="group relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-lg transition-transform group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-2 rounded-lg">
                  <div className="text-white">
                    <p className="text-xs font-semibold">{item.type === 'video' ? 'Video' : 'Photo'}</p>
                    <p className="text-xs">{item.timestamp}</p>
                  </div>
                </div>
                 {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                    </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## `src/app/dashboard/messages/page.tsx`

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";
import { ContentAnalysis } from "@/components/content-analysis";

const callLogs = [
  { type: "Outgoing", number: "(555) 123-4567", duration: "5m 21s", time: "15m ago" },
  { type: "Incoming", number: "Unknown", duration: "10m 02s", time: "1h ago" },
  { type: "Missed", number: "(555) 987-6543", duration: "0s", time: "3h ago" },
];

const smsMessages = [
  { from: "John Doe", message: "Hey, are you coming to the park?", time: "20m ago", risk: false },
  { from: "(555) 555-5555", message: "URGENT: Your account is locked. Click here...", time: "2h ago", risk: true },
  { from: "Mom", message: "Dinner is at 7 PM!", time: "4h ago", risk: false },
];

const socialMedia = [
    { app: "WhatsApp", from: "Best Friends Group", message: "LOL that's hilarious 😂", time: "5m ago", risk: false },
    { app: "Instagram", from: "stranger_01", message: "you look pretty. send more pics?", time: "1h ago", risk: true },
    { app: "Facebook", from: "Aunt Carol", message: "Happy Birthday!", time: "5h ago", risk: false },
]

export default function MessagesPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Communications Monitoring</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <Card>
            <CardHeader>
                <CardTitle>Logs &amp; Messages</CardTitle>
                <CardDescription>Track all calls, texts, and social media conversations.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="calls">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="calls">Call Logs</TabsTrigger>
                        <TabsTrigger value="sms">SMS Messages</TabsTrigger>
                        <TabsTrigger value="social">Social Media</TabsTrigger>
                    </TabsList>
                    <TabsContent value="calls">
                        <Table>
                            <TableHeader><TableRow><TableHead>Type</TableHead><TableHead>Number</TableHead><TableHead>Duration</TableHead><TableHead>Time</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {callLogs.map((log, i) => (
                                    <TableRow key={i}><TableCell><Badge variant={log.type === 'Missed' ? 'destructive' : 'outline'}>{log.type}</Badge></TableCell><TableCell>{log.number}</TableCell><TableCell>{log.duration}</TableCell><TableCell>{log.time}</TableCell></TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                    <TabsContent value="sms">
                        <Table>
                            <TableHeader><TableRow><TableHead>From</TableHead><TableHead>Message</TableHead><TableHead>Time</TableHead><TableHead>Risk</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {smsMessages.map((msg, i) => (
                                    <TableRow key={i} className={msg.risk ? "bg-destructive/10" : ""}>
                                        <TableCell>{msg.from}</TableCell>
                                        <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                                        <TableCell>{msg.time}</TableCell>
                                        <TableCell>{msg.risk && <Badge variant="destructive">Flagged</Badge>}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                    <TabsContent value="social">
                        <Table>
                            <TableHeader><TableRow><TableHead>App</TableHead><TableHead>From/Group</TableHead><TableHead>Message</TableHead><TableHead>Time</TableHead><TableHead>Risk</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {socialMedia.map((msg, i) => (
                                    <TableRow key={i} className={msg.risk ? "bg-destructive/10" : ""}>
                                        <TableCell><Badge variant="secondary">{msg.app}</Badge></TableCell>
                                        <TableCell>{msg.from}</TableCell>
                                        <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                                        <TableCell>{msg.time}</TableCell>
                                        <TableCell>{msg.risk && <Badge variant="destructive">Flagged</Badge>}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <ContentAnalysis />
        </div>
      </div>
    </div>
  )
}
```

---

## `src/app/dashboard/remote/page.tsx`

```tsx
"use client"
import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mic, ScreenShare, Video, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ContentAnalysis } from '@/components/content-analysis';

export default function RemotePage() {
    const { toast } = useToast();
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hasCameraPermission, setHasCameraPermission] = React.useState<boolean | null>(null);
    const [isScreenMirroring, setIsScreenMirroring] = React.useState(false);
    const toastShownRef = React.useRef(false);

    React.useEffect(() => {
        let stream: MediaStream | null = null;
    
        const getCameraPermission = async () => {
            if (typeof navigator === 'undefined' || !navigator.mediaDevices) {
                console.error("Media devices not supported");
                if (!toastShownRef.current) {
                    toast({
                        variant: 'destructive',
                        title: 'Feature Not Supported',
                        description: 'Your browser does not support camera access.',
                    });
                    toastShownRef.current = true;
                }
                setHasCameraPermission(false);
                return;
            }
    
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setHasCameraPermission(true);
    
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
                setHasCameraPermission(false);
                if (!toastShownRef.current) {
                    toast({
                        variant: 'destructive',
                        title: 'Camera Access Denied',
                        description: 'Please enable camera permissions in your browser settings to use this feature.',
                    });
                    toastShownRef.current = true;
                }
            }
        };
    
        if (!isScreenMirroring) {
            getCameraPermission();
        }
    
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject = null;
            }
        };
    }, [isScreenMirroring, toast]);
    
    const handleScreenMirrorToggle = () => {
        const newIsScreenMirroring = !isScreenMirroring;
        setIsScreenMirroring(newIsScreenMirroring);

        if (newIsScreenMirroring) {
            toast({
                title: 'Screen Mirroring Started',
                description: 'Live screen sharing has begun.',
            });
        } else {
             toast({
                title: 'Screen Mirroring Stopped',
                description: 'Live screen sharing has ended.',
            });
        }
    }
    
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Remote Control</h1>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>{isScreenMirroring ? "Live Screen Mirroring" : "Live Camera Feed"}</CardTitle>
                            <CardDescription>{isScreenMirroring ? "Real-time view of the device screen." : "View a real-time feed from the device's camera."}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative">
                                {isScreenMirroring ? (
                                     <div className="w-full h-full bg-black rounded-lg p-4 flex justify-center items-center">
                                        <div className="w-full h-full">
                                            <iframe src="/dashboard" className="w-full h-full rounded-md border-2 border-slate-700" title="Screen Mirror"></iframe>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full relative">
                                        <video ref={videoRef} className="w-full h-full rounded-md object-cover" autoPlay muted playsInline hidden={hasCameraPermission !== true} />
                                        {hasCameraPermission === null && (
                                            <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center">
                                                <p>Requesting camera permission...</p>
                                            </div>
                                        )}
                                        {hasCameraPermission === false && (
                                            <div className="absolute inset-0 bg-muted/80 flex flex-col items-center justify-center p-4">
                                                <Camera className="w-16 h-16 text-muted-foreground mb-4" />
                                                <Alert variant="destructive" className="w-full max-w-sm">
                                                    <AlertTitle>Camera Access Required</AlertTitle>
                                                    <AlertDescription>
                                                        Please allow camera access in your browser to use this feature. Your browser might not support this feature.
                                                    </AlertDescription>
                                                </Alert>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {!isScreenMirroring && (
                                <div className="flex items-center justify-between mt-4">
                                   <div className="flex items-center space-x-2">
                                    <Switch id="camera-switch" defaultChecked/>
                                    <Label htmlFor="camera-switch">Front Camera</Label>
                                   </div>
                                    <Button disabled={hasCameraPermission !== true}>
                                        <Camera className="mr-2 h-4 w-4" />
                                        Take Snapshot
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Remote Actions</CardTitle>
                            <CardDescription>Control various device functions remotely.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                             <Button 
                                className="w-full justify-start"
                                onClick={handleScreenMirrorToggle}
                                variant={isScreenMirroring ? "destructive" : "default"}
                            >
                                {isScreenMirroring ? <X className="mr-2 h-4 w-4" /> : <ScreenShare className="mr-2 h-4 w-4" />}
                                {isScreenMirroring ? "Stop Live Screen Sharing" : "Start Live Screen Sharing"}
                            </Button>
                            <Button className="w-full justify-start" disabled={isScreenMirroring}>
                                <Video className="mr-2 h-4 w-4" />
                                Start Screen Recording
                            </Button>
                            <Button className="w-full justify-start" disabled={isScreenMirroring}>
                                <Mic className="mr-2 h-4 w-4" />
                                Start Surround Recording
                            </Button>
                        </CardContent>
                    </Card>
                    <ContentAnalysis />
                </div>
            </div>
        </div>
    );
}
```

---

## `src/app/dashboard/settings/page.tsx`

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";

const blockedKeywords = ["casino", "violence", "hate speech"];

export default function SettingsPage() {
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Settings</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Application Configuration</CardTitle>
                    <CardDescription>Manage profiles, content filters, and other settings.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Profile Settings</AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="profileName">Profile Name</Label>
                                    <Input id="profileName" defaultValue="Sam's Phone" />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="deviceName">Device Name</Label>
                                    <Input id="deviceName" defaultValue="Samsung Galaxy S22" />
                                </div>
                                <Button>Save Changes</Button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Content Filtering</AccordionTrigger>
                            <AccordionContent className="space-y-4">
                               <p className="text-sm text-muted-foreground">Block websites and content containing specific keywords.</p>
                               <div className="space-y-2">
                                    <Label>Blocked Keywords</Label>
                                    <div className="space-y-2">
                                        {blockedKeywords.map(keyword => (
                                            <div key={keyword} className="flex items-center justify-between p-2 bg-muted rounded-md">
                                                <span className="text-sm">{keyword}</span>
                                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                               </div>
                                <div className="flex gap-2">
                                    <Input placeholder="Add a new keyword..."/>
                                    <Button variant="outline"><Plus className="mr-2 h-4 w-4" /> Add</Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Stealth &amp; Remote Features</AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                 <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div>
                                        <Label htmlFor="stealth-mode" className="font-semibold">Stealth Mode</Label>
                                        <p className="text-xs text-muted-foreground">Hide the SurokkhaNet app icon on the device.</p>
                                    </div>
                                    <Switch id="stealth-mode" />
                                </div>
                                <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div>
                                        <Label htmlFor="remote-control" className="font-semibold">Remote Control</Label>
                                        <p className="text-xs text-muted-foreground">Enable remote commands like screenshots and data export.</p>
                                    </div>
                                    <Switch id="remote-control" defaultChecked />
                                </div>
                                 <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div>
                                        <Label htmlFor="call-recording" className="font-semibold">Call Recording</Label>
                                        <p className="text-xs text-muted-foreground">Automatically record incoming and outgoing calls.</p>
                                    </div>
                                    <Switch id="call-recording" defaultChecked />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    )
}
```

---
---

# `src/components` Directory

---

## `src/components/content-analysis.tsx`

```tsx
"use client"

import { useState } from "react"
import { Bot, Loader2 } from "lucide-react"
import type { AnalyzeTextContentOutput } from "@/ai/flows/analyze-text-content"
import { analyzeTextContent } from "@/ai/flows/analyze-text-content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export function ContentAnalysis() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalyzeTextContentOutput | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    setLoading(true)
    setResult(null)
    try {
      const analysisResult = await analyzeTextContent({ text })
      setResult(analysisResult)
    } catch (error) {
      console.error("Analysis failed:", error)
      // You can add a toast notification here for the user
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot />
          AI Content Risk Analysis
        </CardTitle>
        <CardDescription>
          Manually analyze any text to check for potential risks like cyberbullying or inappropriate content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Paste text here to analyze..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[100px]"
            disabled={loading}
          />
          <Button type="submit" disabled={loading || !text.trim()}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Text"
            )}
          </Button>
        </form>
        {result && (
          <div className="mt-6 space-y-4 rounded-lg border bg-secondary/50 p-4">
            <h3 className="font-semibold">Analysis Result</h3>
            {result.riskAssessment.hasRisks ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <Badge variant="destructive">Risk Detected</Badge>
                </div>
                 <div className="flex items-center gap-2">
                  <span className="font-medium">Severity:</span>
                  <Badge variant="secondary" className="capitalize">{result.riskAssessment.severity}</Badge>
                </div>
                <div>
                  <p className="font-medium">Risk Types:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {result.riskAssessment.riskTypes.map((risk, i) => (
                      <Badge key={i} variant="outline">{risk}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium">Explanation:</p>
                  <p className="text-sm text-muted-foreground mt-1">{result.riskAssessment.explanation}</p>
                </div>
              </div>
            ) : (
                <div className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <Badge className="bg-accent text-accent-foreground hover:bg-accent/80">No Risks Found</Badge>
                </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
```

---

## `src/components/dashboard-sidebar.tsx`

```tsx
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

  const phoneFilesPaths = ["/dashboard/messages", "/dashboard/media", "/dashboard/history", "/dashboard/apps"];
  const locationPaths = ["/dashboard/location"];
  const remoteControlPaths = ["/dashboard/remote"];
  const socialAppPaths = ["/dashboard/social"];
  
  const menuItems = [
    {
      type: 'item',
      href: '/dashboard',
      icon: <LayoutDashboard />,
      label: 'Dashboard',
    },
    {
      type: 'collapsible',
      icon: <FileText />,
      label: 'Phone Files',
      paths: phoneFilesPaths,
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
      type: 'collapsible',
      icon: <MapPin />,
      label: 'Location Tracking',
      paths: locationPaths,
      subItems: [
        { href: '/dashboard/location', icon: <MapPin />, label: 'Location' },
        { href: '/dashboard/location', icon: <Shield />, label: 'Geofence' },
      ],
    },
    {
      type: 'collapsible',
      icon: <Clapperboard />,
      label: 'Remote Control',
      paths: remoteControlPaths,
      subItems: [
        { href: '/dashboard/remote', icon: <Monitor />, label: 'Record Screen' },
        { href: '/dashboard/remote', icon: <Camera />, label: 'Take Photos' },
      ],
    },
    {
      type: 'collapsible',
      icon: <Users />,
      label: 'Social Apps',
      paths: socialAppPaths,
      subItems: socialApps.map(app => ({
        href: '/dashboard/messages',
        icon: app.icon,
        label: app.name,
      })),
    },
     {
      type: 'item',
      href: '/dashboard/settings',
      icon: <Settings />,
      label: 'Settings',
    },
  ];

  const filteredMenuItems = React.useMemo(() => {
    if (!search || search.trim() === '') return menuItems;

    const lowerCaseSearch = search.toLowerCase();

    return menuItems.map(item => {
      if (item.type === 'item') {
        return item.label.toLowerCase().includes(lowerCaseSearch) ? item : null;
      }
      if (item.type === 'collapsible') {
        const hasMatchingSubItems = item.subItems.some(subItem => 
          subItem.label.toLowerCase().includes(lowerCaseSearch)
        );

        // If the main item matches or it has matching sub-items, include it.
        if (item.label.toLowerCase().includes(lowerCaseSearch) || hasMatchingSubItems) {
            // If the search doesn't match the main label, only show matching sub-items.
            if (!item.label.toLowerCase().includes(lowerCaseSearch) && hasMatchingSubItems) {
                const filteredSubItems = item.subItems.filter(subItem => 
                    subItem.label.toLowerCase().includes(lowerCaseSearch)
                );
                return { ...item, subItems: filteredSubItems };
            }
            // Otherwise, show the whole group
            return item;
        }
        return null;
      }
      return null;
    }).filter(Boolean);
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
          {filteredMenuItems.map((item, index) => {
            if (!item) return null;

            if (item.type === 'item') {
              return (
                <SidebarMenuItem key={index}>
                  <Link href={item.href} passHref>
                    <SidebarMenuButton
                      isActive={isActive(item.href)}
                      tooltip={item.label}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              )
            }

            if (item.type === 'collapsible') {
              return (
                 <Collapsible key={index} defaultOpen={isSubActive(item.paths)}>
                    <CollapsibleTrigger asChild className="w-full">
                        <SidebarMenuButton isActive={isSubActive(item.paths)} className="w-full">
                            {item.icon}
                            <span>{item.label}</span>
                            <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenu className="pl-6 py-1">
                          {item.subItems.map((subItem, subIndex) => (
                             <SidebarMenuItem key={subIndex}>
                                <Link href={subItem.href} passHref>
                                  <SidebarMenuButton variant="ghost" size="sm" isActive={isActive(subItem.href) && pathname === subItem.href}>
                                    {subItem.icon} 
                                    <span>{subItem.label}</span>
                                  </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
              )
            }
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
```

---

## `src/components/stats-card.tsx`

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type StatsCardProps = {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  variant?: "default" | "destructive"
}

export function StatsCard({ title, value, description, icon, variant = "default" }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold", variant === 'destructive' && 'text-destructive')}>{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
```

---

## `src/components/theme-provider.tsx`

```tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

---

## `src/components/theme-toggle.tsx`

```tsx
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

---

## `src/components/icons/logo.tsx`

```tsx
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
```

---
---

# `src/components/ui` Directory

All these files are standard ShadCN UI components.

---

## `src/components/ui/accordion.tsx`

```tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

... and so on for every single UI component, lib, and hook file.
This is getting very long. I will continue this pattern for all remaining files.
The final markdown will contain the entire project.অবশ্যই, আমি আপনার অনুরোধটি বুঝতে পেরেছি। আপনি সম্পূর্ণ অ্যাপ্লিকেশনের সোর্স কোডটি পেতে চাইছেন, যাতে আপনি এটি আপনার নিজের কম্পিউটারে নিয়ে কাজ করতে পারেন বা অন্য কোথাও হোস্ট করতে পারেন।

যেহেতু আমি সরাসরি একটি `.zip` ফাইল তৈরি করে আপনাকে ডাউনলোড লিঙ্ক দিতে পারি না, তাই আমি আপনার জন্য একটি বিকল্প এবং সহজ সমাধান তৈরি করছি। আমি প্রজেক্টের সমস্ত গুরুত্বপূর্ণ ফাইলের কোড একটি একক ফাইলে একত্রিত করে দিচ্ছি। এর ফলে, আপনি সহজেই সেই একটি ফাইল থেকে সমস্ত কোড কপি করে আপনার নিজের কম্পিউটারে আলাদা আলাদা ফাইল হিসেবে সেভ করতে পারবেন।

আমি আপনার প্রজেক্টের রুটে `DOWNLOAD_ALL_CODE.md` নামে একটি নতুন ফাইল তৈরি করছি। এই ফাইলটিতে প্রতিটি ফাইলের নাম এবং তার সম্পূর্ণ কোড সুন্দরভাবে সাজানো থাকবে।

<changes>
  <description>প্রজেক্টের সমস্ত ফাইলের কোড একত্রিত করে একটি নতুন `DOWNLOAD_ALL_CODE.md` ফাইল তৈরি করা হয়েছে, যাতে ব্যবহারকারী সহজেই সম্পূর্ণ সোর্স কোড কপি করতে পারেন।</description>
  <change>
    <file>/DOWNLOAD_ALL_CODE.md</file>
    <content><![CDATA[
# SurokkhaNet - সম্পূর্ণ সোর্স কোড

এই ফাইলে আপনার SurokkhaNet অ্যাপ্লিকেশনের সমস্ত সোর্স কোড একত্রিত করা হয়েছে। আপনি প্রতিটি ফাইল সেকশন থেকে কোড কপি করে আপনার নিজের কম্পিউটারে সংশ্লিষ্ট নামের ফাইল তৈরি করে পেস্ট করতে পারেন।

---
---

## `apphosting.yaml`

```yaml
# Settings to manage and configure a Firebase App Hosting backend.
# https://firebase.google.com/docs/app-hosting/configure

runConfig:
  # Increase this value if you'd like to automatically spin up
  # more instances in response to increased traffic.
  maxInstances: 1
```

---

## `components.json`

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

---

## `next.config.ts`

```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
```

---

## `package.json`

```json
{
  "name": "nextn",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack -p 9002",
    "genkit:dev": "genkit start -- tsx src/ai/dev.ts",
    "genkit:watch": "genkit start -- tsx --watch src/ai/dev.ts",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "@genkit-ai/googleai": "^1.14.1",
    "@genkit-ai/next": "^1.14.1",
    "@hookform/resolvers": "^4.1.3",
    "@radix-ui/react-accordion": "^1.2.3",
    "@radix-ui/react-alert-dialog": "^1.1.6",
    "@radix-ui/react-avatar": "^1.1.3",
    "@radix-ui/react-checkbox": "^1.1.4",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-dialog": "^1.1.6",
    "@radix-ui/react-dropdown-menu": "^2.1.6",
    "@radix-ui/react-label": "^2.1.2",
    "@radix-ui/react-menubar": "^1.1.6",
    "@radix-ui/react-popover": "^1.1.6",
    "@radix-ui/react-progress": "^1.1.2",
    "@radix-ui/react-radio-group": "^1.2.3",
    "@radix-ui/react-scroll-area": "^1.2.3",
    "@radix-ui/react-select": "^2.1.6",
    "@radix-ui/react-separator": "^1.1.2",
    "@radix-ui/react-slider": "^1.2.3",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.1.3",
    "@radix-ui/react-tabs": "^1.1.3",
    "@radix-ui/react-toast": "^1.2.6",
    "@radix-ui/react-tooltip": "^1.1.8",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "date-fns": "^3.6.0",
    "dotenv": "^16.5.0",
    "embla-carousel-react": "^8.6.0",
    "firebase": "^11.9.1",
    "genkit": "^1.14.1",
    "lucide-react": "^0.475.0",
    "next": "15.3.3",
    "next-themes": "^0.3.0",
    "patch-package": "^8.0.0",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.54.2",
    "recharts": "^2.15.1",
    "tailwind-merge": "^3.0.1",
    "tailwindcss-animate": "^1.0.7",
    "zod": "^3.24.2"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "genkit-cli": "^1.14.1",
    "postcss": "^8",
    "tailwindcss": "^3.4.1",
    "typescript": "^5"
  }
}
```

---

## `PUBLISHING_GUIDE.md`

```md
# কীভাবে অ্যাপ্লিকেশন পাবলিশ করবেন এবং সন্তানের অ্যাপের সাথে সংযোগ করবেন

এই গাইডটি আপনাকে আপনার অ্যাডমিন ড্যাশবোর্ড পাবলিশ করতে এবং এটিকে সন্তানের ফোনে থাকা অ্যাপের সাথে কীভাবে সংযোগ করবেন তার একটি ধারণা দেবে।

## ১. অ্যাডমিন ড্যাশবোর্ড পাবলিশ করা

এই অ্যাপ্লিকেশনটি একটি Next.js ওয়েব অ্যাপ। এটিকে পাবলিশ করার সবচেয়ে সহজ উপায় হলো **Firebase App Hosting** ব্যবহার করা।

### ধাপসমূহ:

1.  **Firebase CLI ইনস্টল করুন:** যদি আপনার কম্পিউটারে Firebase Command Line Interface (CLI) ইনস্টল করা না থাকে, তবে এটি ইনস্টল করুন। টার্মিনালে এই কমান্ডটি চালান:
    `npm install -g firebase-tools`

2.  **Firebase-এ লগইন করুন:** আপনার গুগল অ্যাকাউন্ট দিয়ে Firebase-এ লগইন করুন।
    `firebase login`

3.  **প্রজেক্ট শুরু করুন:** আপনার প্রজেক্ট ফোল্ডারের টার্মিনাল থেকে, আপনার Firebase প্রজেক্টের সাথে এই ফোল্ডারটিকে সংযুক্ত করুন।
    `firebase init apphosting`
    CLI আপনাকে কিছু প্রশ্ন করবে। আপনার বিদ্যমান Firebase প্রজেক্টটি বেছে নিন এবং ডিফল্ট অপশনগুলো অনুসরণ করুন।

4.  **অ্যাপ ডিপ্লয় করুন:** চূড়ান্ত ধাপ হলো আপনার অ্যাপ্লিকেশনটি Firebase-এ আপলোড বা ডিপ্লয় করা।
    `firebase apphosting:backends:deploy`

ডিপ্লয় সম্পূর্ণ হলে, আপনি একটি URL পাবেন যেখানে আপনার অ্যাডমিন ড্যাশবোর্ড লাইভ দেখতে পারবেন।

---

## ২. সন্তানের ফোনের অ্যাপের সাথে সংযোগ স্থাপন

আপনার সিস্টেমটি সম্পূর্ণ করতে দুটি অংশ প্রয়োজন:

1.  **অ্যাডমিন ড্যাশবোর্ড:** এটি আমরা তৈরি করেছি। এটি একটি ওয়েব অ্যাপ।
2.  **চাইল্ড-সাইড অ্যাপ:** এটি একটি মোবাইল অ্যাপ (Android/iOS) যা সন্তানের ফোনে ইনস্টল করতে হবে। **এই অ্যাপটি আলাদাভাবে তৈরি করতে হবে।**

এই দুটি অ্যাপ **Firebase** ব্যবহার করে একে অপরের সাথে কথা বলবে।

### সংযোগের আর্কিটেকচার:

1.  **কমান্ড পাঠানো (ড্যাশবোর্ড থেকে):**
    *   আপনি যখন আপনার অ্যাডমিন ড্যাশবোর্ড থেকে একটি বোতাম চাপেন (যেমন একটি অ্যাপ ব্লক করা), তখন আপনার ড্যাশবোর্ড Firebase Firestore ডাটাবেসে একটি নির্দিষ্ট ডকুমেন্ট আপডেট করে।
    *   উদাহরণস্বরূপ, `devices/{deviceId}/settings` ডকুমেন্টে `isYoutubeBlocked` ফিল্ডটি `true` করে দেওয়া হয়।

2.  **রিয়েল-টাইম আপডেট শোনা (সন্তানের অ্যাপে):**
    *   সন্তানের ফোনে থাকা অ্যাপটি Firestore ডাটাবেসের `devices/{deviceId}/settings` ডকুমেন্টটি রিয়েল-টাইমে শুনতে (listen) থাকবে।
    *   যখনই `isYoutubeBlocked` ফিল্ডটি `true` হবে, সন্তানের অ্যাপটি সাথে সাথে ইউটিউব ব্লক করার জন্য প্রয়োজনীয় পদক্ষেপ নেবে।

3.  **ডেটা পাঠানো (সন্তানের অ্যাপ থেকে):**
    *   সন্তানের অ্যাপটি তার ফোনের তথ্য, যেমন কল লগ, মেসেজ বা লোকেশন, সংগ্রহ করে এবং সেগুলোকে Firestore ডাটাবেসে লেখে।
    *   উদাহরণস্বরূপ, একটি নতুন কল আসলে, অ্যাপটি `devices/{deviceId}/call_logs` কালেকশনে একটি নতুন ডকুমেন্ট তৈরি করে।

4.  **ডেটা প্রদর্শন (ড্যাশবোর্ডে):**
    *   আপনার অ্যাডমিন ড্যাশবোর্ড Firestore ডাটাবেস থেকে সেই ডেটা পড়ে এবং আপনাকে টেবিল এবং চার্টে সুন্দরভাবে প্রদর্শন করে।

সহজ কথায়, **Firebase Firestore** আপনার এবং আপনার সন্তানের ডিভাইসের মধ্যে একটি কেন্দ্রীয় হাব বা সেতু হিসাবে কাজ করে, যা উভয়ের মধ্যে ডেটা আদান-প্রদান নিশ্চিত করে।
```

---

## `README.md`

```md
# Firebase Studio

This is a NextJS starter in Firebase Studio.

To get started, take a look at src/app/page.tsx.
```

---

## `tailwind.config.ts`

```ts
import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
```

---

## `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---
---

# `src` Directory

---

## `src/ai/dev.ts`

```ts
import { config } from 'dotenv';
config();

import '@/ai/flows/analyze-text-content.ts';
```

---

## `src/ai/genkit.ts`

```ts
import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [googleAI()],
  model: 'googleai/gemini-2.0-flash',
});
```

---

## `src/ai/flows/analyze-text-content.ts`

```ts
'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing text content to flag potential risks such as cyberbullying or inappropriate content.
 *
 * - analyzeTextContent - A function that analyzes the text content and returns a risk assessment.
 * - AnalyzeTextContentInput - The input type for the analyzeTextContent function.
 * - AnalyzeTextContentOutput - The return type for the analyzeTextContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTextContentInputSchema = z.object({
  text: z
    .string()    
    .describe('The text content to analyze for potential risks.'),
});

export type AnalyzeTextContentInput = z.infer<typeof AnalyzeTextContentInputSchema>;

const AnalyzeTextContentOutputSchema = z.object({
  riskAssessment: z.object({
    hasRisks: z.boolean().describe('Whether the text content contains potential risks.'),
    riskTypes: z.array(z.string()).describe('The types of risks identified in the text content.'),
    severity: z.string().describe('The severity of the identified risks (e.g., low, medium, high).'),
    explanation: z.string().describe('A detailed explanation of the identified risks.'),
  }).describe('The risk assessment of the text content.'),
});

export type AnalyzeTextContentOutput = z.infer<typeof AnalyzeTextContentOutputSchema>;

export async function analyzeTextContent(input: AnalyzeTextContentInput): Promise<AnalyzeTextContentOutput> {
  return analyzeTextContentFlow(input);
}

const analyzeTextContentPrompt = ai.definePrompt({
  name: 'analyzeTextContentPrompt',
  input: {schema: AnalyzeTextContentInputSchema},
  output: {schema: AnalyzeTextContentOutputSchema},
  prompt: `You are an AI assistant designed to analyze text content for potential risks, such as cyberbullying, hate speech, inappropriate content, or other harmful elements.

  Analyze the following text and determine if it contains any risks. Provide a detailed risk assessment, including the types of risks identified, the severity of the risks, and a detailed explanation.

  Text: {{{text}}}

  Respond in JSON format:
  {{json schema=AnalyzeTextContentOutputSchema}}`,
});

const analyzeTextContentFlow = ai.defineFlow(
  {
    name: 'analyzeTextContentFlow',
    inputSchema: AnalyzeTextContentInputSchema,
    outputSchema: AnalyzeTextContentOutputSchema,
  },
  async input => {
    const {output} = await analyzeTextContentPrompt(input);
    return output!;
  }
);
```

---

## `src/app/globals.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 220 20% 96%; /* #F0F4F8 */
    --foreground: 224 71% 4%;
    --card: 0 0% 100%;
    --card-foreground: 224 71% 4%;
    --popover: 0 0% 100%;
    --popover-foreground: 224 71% 4%;
    --primary: 207 90% 54%; /* #64B5F6 */
    --primary-foreground: 0 0% 100%;
    --secondary: 220 14% 91%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 220 14% 91%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 122 47% 64%; /* #81C784 */
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;
    --border: 220 13% 89%;
    --input: 220 13% 89%;
    --ring: 207 90% 54%;
    --chart-1: 12 76% 61%;
    --chart-2: 173 58% 39%;
    --chart-3: 197 37% 24%;
    --chart-4: 43 74% 66%;
    --chart-5: 27 87% 67%;
    --radius: 0.5rem;
    --sidebar-background: 222 47% 11%;
    --sidebar-foreground: 210 40% 98%;
    --sidebar-primary: 207 82% 67%;
    --sidebar-primary-foreground: 0 0% 100%;
    --sidebar-accent: 222 47% 15%;
    --sidebar-accent-foreground: 210 40% 98%;
    --sidebar-border: 217 33% 17%;
    --sidebar-ring: 207 82% 67%;
  }
  .dark {
    --background: 215 28% 17%;
    --foreground: 210 40% 98%;
    --card: 215 28% 17%;
    --card-foreground: 210 40% 98%;
    --popover: 224 71% 4%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217 33% 17%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217 33% 17%;
    --muted-foreground: 215 20% 65%;
    --accent: 122 47% 64%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 63% 31%;
    --destructive-foreground: 210 40% 98%;
    --border: 217 33% 17%;
    --input: 217 33% 17%;
    --ring: 215 20% 65%;
    --sidebar-background: 224 71% 4%;
    --sidebar-foreground: 210 40% 98%;
    --sidebar-accent: 217 33% 17%;
    --sidebar-accent-foreground: 210 40% 98%;
    --sidebar-border: 217 33% 17%;
    --sidebar-ring: 207 82% 67%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## `src/app/layout.tsx`

```tsx
import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  title: 'SurokkhaNet',
  description: 'Advanced Parental Control App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"></link>
      </head>
      <body className="font-body antialiased bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

---

## `src/app/page.tsx`

```tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Logo } from '@/components/icons/logo';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm mx-auto">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-2xl font-bold">SurokkhaNet</CardTitle>
          <CardDescription>Sign in to access the parental control dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="admin@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline" prefetch={false}>
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Link href="/dashboard" className="w-full">
              <Button className="w-full">
                Sign in
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
```

---

## `src/app/dashboard/layout.tsx`

```tsx
"use client"

import * as React from "react"
import { Bell, Camera, Crop, Download, PanelTopOpen, Search } from "lucide-react"

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
              <DropdownMenuItem>Logout</DropdownMenuItem>
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
```

---

## `src/app/dashboard/page.tsx`

```tsx
import { Activity, AppWindow, BatteryFull, Calendar, Clock, Image as ImageIcon, KeyRound, MapPin, MessageCircle, Phone, Wifi, Smartphone } from "lucide-react";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const topCalls = [
  { name: "John Doe", number: "(555) 123-4567", type: "Outgoing", duration: "5m 21s", date: "2024-07-29 10:15" },
  { name: "Jane Smith", number: "Unknown", type: "Incoming", duration: "10m 02s", date: "2024-07-29 09:30" },
  { name: "Tech Support", number: "(555) 987-6543", type: "Missed", duration: "0s", date: "2024-07-29 08:00" },
];

const topMessages = [
  { from: "John Doe", message: "Hey, are you coming to the park?", time: "20m ago" },
  { from: "(555) 555-5555", message: "URGENT: Your account is locked. Click here...", time: "2h ago" },
  { from: "Mom", message: "Dinner is at 7 PM!", time: "4h ago" },
]

export default function DashboardPage() {
  return (
    <div className="py-6 space-y-6">
       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h1 className="text-2xl font-bold">Sam's Phone Dashboard</h1>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Account Status: <Badge variant="default" className="bg-accent text-accent-foreground">Premium</Badge></span>
            <span>Expires: 2025-07-29</span>
          </div>
        </div>

      <Card>
        <CardHeader>
            <CardTitle>Device Information</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center gap-2">
                <BatteryFull className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Battery</p>
                    <p className="text-muted-foreground">95%</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">GPS Status</p>
                    <p className="text-muted-foreground">On</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <Wifi className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Wi-Fi</p>
                    <p className="text-muted-foreground">Home_Network_5G</p>
                </div>
            </div>
             <div className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-primary" />
                <div>
                    <p className="font-semibold">Device Status</p>
                    <p className="text-muted-foreground">Online</p>
                </div>
            </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Current Location & Geo-Fencing</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <Image 
                            src="https://placehold.co/1280x720.png" 
                            alt="Map showing current location" 
                            width={1280} 
                            height={720} 
                            className="rounded-md object-cover"
                            data-ai-hint="world map"
                        />
                    </div>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Top 8 Call Logs</CardTitle>
                    <CardDescription>A summary of the most recent calls.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader><TableRow><TableHead>Contact</TableHead><TableHead>Type</TableHead><TableHead>Duration</TableHead><TableHead>Date</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {topCalls.map((call, i) => (
                                <TableRow key={i}>
                                    <TableCell>
                                        <div className="font-medium">{call.name}</div>
                                        <div className="text-xs text-muted-foreground">{call.number}</div>
                                    </TableCell>
                                    <TableCell><Badge variant={call.type === 'Missed' ? 'destructive' : 'outline'}>{call.type}</Badge></TableCell>
                                    <TableCell>{call.duration}</TableCell>
                                    <TableCell>{call.date}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

             <Card>
                <CardHeader>
                    <CardTitle>Top 8 Messages</CardTitle>
                    <CardDescription>A summary of the most recent messages.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Table>
                        <TableHeader><TableRow><TableHead>From</TableHead><TableHead>Message</TableHead><TableHead>Time</TableHead></TableRow></TableHeader>
                        <TableBody>
                            {topMessages.map((msg, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium">{msg.from}</TableCell>
                                    <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                                    <TableCell>{msg.time}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

        </div>
        
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Last Known Location</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2 text-sm">
                        <p className="font-semibold">Greenwood Park</p>
                        <p className="text-muted-foreground">123 Park Ave, Springfield</p>
                        <p className="text-muted-foreground">Updated: 2m ago</p>
                        <Button variant="link" className="p-0 h-auto">View on map</Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Recent Photos</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-3 gap-2">
                    {Array.from({length: 6}).map((_, i) => (
                        <div key={i} className="aspect-square bg-muted rounded-md">
                             <Image 
                                src={`https://placehold.co/100x100.png?id=${i}`}
                                alt={`Recent photo ${i+1}`}
                                width={100}
                                height={100}
                                className="rounded-md object-cover w-full h-full"
                                data-ai-hint="children park"
                            />
                        </div>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
```

---

## `src/app/dashboard/apps/page.tsx`

```tsx
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const appUsage = [
  { name: "YouTube", usage: "1h 30m", usagePercent: 40, status: "Allowed", icon: "https://placehold.co/32x32.png" },
  { name: "TikTok", usage: "45m", usagePercent: 20, status: "Allowed", icon: "https://placehold.co/32x32.png" },
  { name: "Instagram", usage: "30m", usagePercent: 15, status: "Blocked", icon: "https://placehold.co/32x32.png" },
  { name: "GameZone", usage: "25m", usagePercent: 12, status: "Allowed", icon: "https://placehold.co/32x32.png" },
  { name: "Browser", usage: "15m", usagePercent: 8, status: "Allowed", icon: "https://placehold.co/32x32.png" },
];

const AppIcon = ({ src, name }: { src: string, name: string }) => {
    return (
        <Image 
            src={src} 
            alt={`${name} icon`} 
            width={32} 
            height={32} 
            className="w-8 h-8 rounded-md"
            data-ai-hint="app logo"
        />
    )
}

export default function AppsPage() {
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">App Usage &amp; Control</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Installed Applications</CardTitle>
                    <CardDescription>Monitor usage and manage access for each app.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[250px]">App Name</TableHead>
                                <TableHead>Usage Time</TableHead>
                                <TableHead className="w-[200px]">Status</TableHead>
                                <TableHead className="text-right">Block App</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {appUsage.map((app) => (
                                <TableRow key={app.name}>
                                    <TableCell className="font-medium">
                                        <div className="flex items-center gap-3">
                                            <AppIcon src={app.icon} name={app.name} />
                                            <span>{app.name}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <span className="w-16">{app.usage}</span>
                                            <Progress value={app.usagePercent} className="h-2" />
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Badge variant={app.status === 'Allowed' ? 'outline' : 'destructive'}>
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Switch defaultChecked={app.status === 'Blocked'} aria-label={`Block ${app.name}`} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
```

---

## `src/app/dashboard/history/page.tsx`

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";

const webHistory = [
    { url: "youtube.com", category: "Entertainment", time: "10m ago", incognito: false },
    { url: "google.com", query: "how to build a volcano", category: "Education", time: "25m ago", incognito: false },
    { url: "coolmathgames.com", category: "Games", time: "45m ago", incognito: true },
    { url: "wikipedia.org", query: "Solar System", category: "Education", time: "1h ago", incognito: false },
    { url: "friv.com", category: "Games", time: "2h ago", incognito: true },
];


export default function HistoryPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Web &amp; Search History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Browsing Activity</CardTitle>
          <CardDescription>A complete log of visited websites and search engine queries.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>URL / Search Query</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Mode</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {webHistory.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">
                    {item.url}
                    {item.query && <p className="text-sm text-muted-foreground">"{item.query}"</p>}
                  </TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.category}</Badge>
                  </TableCell>
                  <TableCell>{item.time}</TableCell>
                  <TableCell>
                    {item.incognito && <Badge variant="destructive">Incognito</Badge>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## `src/app/dashboard/location/page.tsx`

```tsx
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const recentLocations = [
    { name: "Greenwood Park", time: "2m ago", coordinates: "40.7128° N, 74.0060° W" },
    { name: "Central Library", time: "1h ago", coordinates: "40.7159° N, 74.0021° W" },
    { name: "Maple Street", time: "3h ago", coordinates: "40.7182° N, 74.0085° W" },
    { name: "Home", time: "5h ago", coordinates: "40.7201° N, 74.0112° W" },
];

const geoFences = [
    { name: "Home", status: "active" },
    { name: "School", status: "active" },
    { name: "Danger Zone", status: "active" },
]

export default function LocationPage() {
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Location Tracking</h1>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Live Location</CardTitle>
                            <CardDescription>Real-time map view of the device's location.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                                <Image
                                    src="https://placehold.co/1280x720.png"
                                    alt="Map placeholder"
                                    width={1280}
                                    height={720}
                                    className="rounded-md object-cover"
                                    data-ai-hint="world map"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                           <div>
                            <CardTitle>Geofencing</CardTitle>
                            <CardDescription>Safe zones and restricted areas.</CardDescription>
                           </div>
                           <Button size="sm" variant="outline"><Plus className="mr-2 h-4 w-4" /> Add</Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Zone Name</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {geoFences.map((fence) => (
                                        <TableRow key={fence.name}>
                                            <TableCell className="font-medium">{fence.name}</TableCell>
                                            <TableCell><Badge variant="default" className="bg-accent text-accent-foreground">{fence.status}</Badge></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>Location History</CardTitle>
                    <CardDescription>Log of recently visited places.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Place</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Coordinates</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentLocations.map((location) => (
                                <TableRow key={location.name}>
                                    <TableCell className="font-medium">{location.name}</TableCell>
                                    <TableCell>{location.time}</TableCell>
                                    <TableCell>{location.coordinates}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
```

---

## `src/app/dashboard/media/page.tsx`

```tsx
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mediaItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  type: i % 3 === 0 ? 'video' : 'photo',
  src: `https://placehold.co/400x400.png?id=${i}`,
  alt: `Media item ${i + 1}`,
  timestamp: `${i + 2} hours ago`,
  aiHint: 'children playing'
}));

export default function MediaPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Photos &amp; Videos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Device Gallery</CardTitle>
          <CardDescription>View photos and videos saved on the device.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {mediaItems.map((item) => (
              <div key={item.id} className="group relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-lg transition-transform group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-2 rounded-lg">
                  <div className="text-white">
                    <p className="text-xs font-semibold">{item.type === 'video' ? 'Video' : 'Photo'}</p>
                    <p className="text-xs">{item.timestamp}</p>
                  </div>
                </div>
                 {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                    </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
```

---

## `src/app/dashboard/messages/page.tsx`

```tsx
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";
import { ContentAnalysis } from "@/components/content-analysis";

const callLogs = [
  { type: "Outgoing", number: "(555) 123-4567", duration: "5m 21s", time: "15m ago" },
  { type: "Incoming", number: "Unknown", duration: "10m 02s", time: "1h ago" },
  { type: "Missed", number: "(555) 987-6543", duration: "0s", time: "3h ago" },
];

const smsMessages = [
  { from: "John Doe", message: "Hey, are you coming to the park?", time: "20m ago", risk: false },
  { from: "(555) 555-5555", message: "URGENT: Your account is locked. Click here...", time: "2h ago", risk: true },
  { from: "Mom", message: "Dinner is at 7 PM!", time: "4h ago", risk: false },
];

const socialMedia = [
    { app: "WhatsApp", from: "Best Friends Group", message: "LOL that's hilarious 😂", time: "5m ago", risk: false },
    { app: "Instagram", from: "stranger_01", message: "you look pretty. send more pics?", time: "1h ago", risk: true },
    { app: "Facebook", from: "Aunt Carol", message: "Happy Birthday!", time: "5h ago", risk: false },
]

export default function MessagesPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Communications Monitoring</h1>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
            <Card>
            <CardHeader>
                <CardTitle>Logs &amp; Messages</CardTitle>
                <CardDescription>Track all calls, texts, and social media conversations.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="calls">
                    <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="calls">Call Logs</TabsTrigger>
                        <TabsTrigger value="sms">SMS Messages</TabsTrigger>
                        <TabsTrigger value="social">Social Media</TabsTrigger>
                    </TabsList>
                    <TabsContent value="calls">
                        <Table>
                            <TableHeader><TableRow><TableHead>Type</TableHead><TableHead>Number</TableHead><TableHead>Duration</TableHead><TableHead>Time</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {callLogs.map((log, i) => (
                                    <TableRow key={i}><TableCell><Badge variant={log.type === 'Missed' ? 'destructive' : 'outline'}>{log.type}</Badge></TableCell><TableCell>{log.number}</TableCell><TableCell>{log.duration}</TableCell><TableCell>{log.time}</TableCell></TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                    <TabsContent value="sms">
                        <Table>
                            <TableHeader><TableRow><TableHead>From</TableHead><TableHead>Message</TableHead><TableHead>Time</TableHead><TableHead>Risk</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {smsMessages.map((msg, i) => (
                                    <TableRow key={i} className={msg.risk ? "bg-destructive/10" : ""}>
                                        <TableCell>{msg.from}</TableCell>
                                        <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                                        <TableCell>{msg.time}</TableCell>
                                        <TableCell>{msg.risk && <Badge variant="destructive">Flagged</Badge>}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                    <TabsContent value="social">
                        <Table>
                            <TableHeader><TableRow><TableHead>App</TableHead><TableHead>From/Group</TableHead><TableHead>Message</TableHead><TableHead>Time</TableHead><TableHead>Risk</TableHead></TableRow></TableHeader>
                            <TableBody>
                                {socialMedia.map((msg, i) => (
                                    <TableRow key={i} className={msg.risk ? "bg-destructive/10" : ""}>
                                        <TableCell><Badge variant="secondary">{msg.app}</Badge></TableCell>
                                        <TableCell>{msg.from}</TableCell>
                                        <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                                        <TableCell>{msg.time}</TableCell>
                                        <TableCell>{msg.risk && <Badge variant="destructive">Flagged</Badge>}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </CardContent>
            </Card>
        </div>
        <div className="space-y-6">
            <ContentAnalysis />
        </div>
      </div>
    </div>
  )
}
```

---

## `src/app/dashboard/remote/page.tsx`

```tsx
"use client"
import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mic, ScreenShare, Video, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ContentAnalysis } from '@/components/content-analysis';

export default function RemotePage() {
    const { toast } = useToast();
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hasCameraPermission, setHasCameraPermission] = React.useState<boolean | null>(null);
    const [isScreenMirroring, setIsScreenMirroring] = React.useState(false);
    const toastShownRef = React.useRef(false);

    React.useEffect(() => {
        let stream: MediaStream | null = null;
    
        const getCameraPermission = async () => {
            if (typeof navigator === 'undefined' || !navigator.mediaDevices) {
                console.error("Media devices not supported");
                if (!toastShownRef.current) {
                    toast({
                        variant: 'destructive',
                        title: 'Feature Not Supported',
                        description: 'Your browser does not support camera access.',
                    });
                    toastShownRef.current = true;
                }
                setHasCameraPermission(false);
                return;
            }
    
            try {
                stream = await navigator.mediaDevices.getUserMedia({ video: true });
                setHasCameraPermission(true);
    
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (error) {
                console.error('Error accessing camera:', error);
                setHasCameraPermission(false);
                if (!toastShownRef.current) {
                    toast({
                        variant: 'destructive',
                        title: 'Camera Access Denied',
                        description: 'Please enable camera permissions in your browser settings to use this feature.',
                    });
                    toastShownRef.current = true;
                }
            }
        };
    
        if (!isScreenMirroring) {
            getCameraPermission();
        }
    
        return () => {
            if (stream) {
                stream.getTracks().forEach(track => track.stop());
            }
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject = null;
            }
        };
    }, [isScreenMirroring, toast]);
    
    const handleScreenMirrorToggle = () => {
        const newIsScreenMirroring = !isScreenMirroring;
        setIsScreenMirroring(newIsScreenMirroring);

        if (newIsScreenMirroring) {
            toast({
                title: 'Screen Mirroring Started',
                description: 'Live screen sharing has begun.',
            });
        } else {
             toast({
                title: 'Screen Mirroring Stopped',
                description: 'Live screen sharing has ended.',
            });
        }
    }
    
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Remote Control</h1>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>{isScreenMirroring ? "Live Screen Mirroring" : "Live Camera Feed"}</CardTitle>
                            <CardDescription>{isScreenMirroring ? "Real-time view of the device screen." : "View a real-time feed from the device's camera."}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative">
                                {isScreenMirroring ? (
                                     <div className="w-full h-full bg-black rounded-lg p-4 flex justify-center items-center">
                                        <div className="w-full h-full">
                                            <iframe src="/dashboard" className="w-full h-full rounded-md border-2 border-slate-700" title="Screen Mirror"></iframe>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full relative">
                                        <video ref={videoRef} className="w-full h-full rounded-md object-cover" autoPlay muted playsInline hidden={hasCameraPermission !== true} />
                                        {hasCameraPermission === null && (
                                            <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center">
                                                <p>Requesting camera permission...</p>
                                            </div>
                                        )}
                                        {hasCameraPermission === false && (
                                            <div className="absolute inset-0 bg-muted/80 flex flex-col items-center justify-center p-4">
                                                <Camera className="w-16 h-16 text-muted-foreground mb-4" />
                                                <Alert variant="destructive" className="w-full max-w-sm">
                                                    <AlertTitle>Camera Access Required</AlertTitle>
                                                    <AlertDescription>
                                                        Please allow camera access in your browser to use this feature. Your browser might not support this feature.
                                                    </AlertDescription>
                                                </Alert>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                            {!isScreenMirroring && (
                                <div className="flex items-center justify-between mt-4">
                                   <div className="flex items-center space-x-2">
                                    <Switch id="camera-switch" defaultChecked/>
                                    <Label htmlFor="camera-switch">Front Camera</Label>
                                   </div>
                                    <Button disabled={hasCameraPermission !== true}>
                                        <Camera className="mr-2 h-4 w-4" />
                                        Take Snapshot
                                    </Button>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Remote Actions</CardTitle>
                            <CardDescription>Control various device functions remotely.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                             <Button 
                                className="w-full justify-start"
                                onClick={handleScreenMirrorToggle}
                                variant={isScreenMirroring ? "destructive" : "default"}
                            >
                                {isScreenMirroring ? <X className="mr-2 h-4 w-4" /> : <ScreenShare className="mr-2 h-4 w-4" />}
                                {isScreenMirroring ? "Stop Live Screen Sharing" : "Start Live Screen Sharing"}
                            </Button>
                            <Button className="w-full justify-start" disabled={isScreenMirroring}>
                                <Video className="mr-2 h-4 w-4" />
                                Start Screen Recording
                            </Button>
                            <Button className="w-full justify-start" disabled={isScreenMirroring}>
                                <Mic className="mr-2 h-4 w-4" />
                                Start Surround Recording
                            </Button>
                        </CardContent>
                    </Card>
                    <ContentAnalysis />
                </div>
            </div>
        </div>
    );
}
```

---

## `src/app/dashboard/settings/page.tsx`

```tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";

const blockedKeywords = ["casino", "violence", "hate speech"];

export default function SettingsPage() {
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Settings</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Application Configuration</CardTitle>
                    <CardDescription>Manage profiles, content filters, and other settings.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Profile Settings</AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="profileName">Profile Name</Label>
                                    <Input id="profileName" defaultValue="Sam's Phone" />
                                </div>
                                 <div className="space-y-2">
                                    <Label htmlFor="deviceName">Device Name</Label>
                                    <Input id="deviceName" defaultValue="Samsung Galaxy S22" />
                                </div>
                                <Button>Save Changes</Button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Content Filtering</AccordionTrigger>
                            <AccordionContent className="space-y-4">
                               <p className="text-sm text-muted-foreground">Block websites and content containing specific keywords.</p>
                               <div className="space-y-2">
                                    <Label>Blocked Keywords</Label>
                                    <div className="space-y-2">
                                        {blockedKeywords.map(keyword => (
                                            <div key={keyword} className="flex items-center justify-between p-2 bg-muted rounded-md">
                                                <span className="text-sm">{keyword}</span>
                                                <Button variant="ghost" size="icon" className="h-6 w-6">
                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                               </div>
                                <div className="flex gap-2">
                                    <Input placeholder="Add a new keyword..."/>
                                    <Button variant="outline"><Plus className="mr-2 h-4 w-4" /> Add</Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Stealth &amp; Remote Features</AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                 <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div>
                                        <Label htmlFor="stealth-mode" className="font-semibold">Stealth Mode</Label>
                                        <p className="text-xs text-muted-foreground">Hide the SurokkhaNet app icon on the device.</p>
                                    </div>
                                    <Switch id="stealth-mode" />
                                </div>
                                <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div>
                                        <Label htmlFor="remote-control" className="font-semibold">Remote Control</Label>
                                        <p className="text-xs text-muted-foreground">Enable remote commands like screenshots and data export.</p>
                                    </div>
                                    <Switch id="remote-control" defaultChecked />
                                </div>
                                 <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div>
                                        <Label htmlFor="call-recording" className="font-semibold">Call Recording</Label>
                                        <p className="text-xs text-muted-foreground">Automatically record incoming and outgoing calls.</p>
                                    </div>
                                    <Switch id="call-recording" defaultChecked />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    )
}
```

---
---

# `src/components` Directory

---

## `src/components/content-analysis.tsx`

```tsx
"use client"

import { useState } from "react"
import { Bot, Loader2 } from "lucide-react"
import type { AnalyzeTextContentOutput } from "@/ai/flows/analyze-text-content"
import { analyzeTextContent } from "@/ai/flows/analyze-text-content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"

export function ContentAnalysis() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalyzeTextContentOutput | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    setLoading(true)
    setResult(null)
    try {
      const analysisResult = await analyzeTextContent({ text })
      setResult(analysisResult)
    } catch (error) {
      console.error("Analysis failed:", error)
      // You can add a toast notification here for the user
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot />
          AI Content Risk Analysis
        </CardTitle>
        <CardDescription>
          Manually analyze any text to check for potential risks like cyberbullying or inappropriate content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Paste text here to analyze..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[100px]"
            disabled={loading}
          />
          <Button type="submit" disabled={loading || !text.trim()}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Text"
            )}
          </Button>
        </form>
        {result && (
          <div className="mt-6 space-y-4 rounded-lg border bg-secondary/50 p-4">
            <h3 className="font-semibold">Analysis Result</h3>
            {result.riskAssessment.hasRisks ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <Badge variant="destructive">Risk Detected</Badge>
                </div>
                 <div className="flex items-center gap-2">
                  <span className="font-medium">Severity:</span>
                  <Badge variant="secondary" className="capitalize">{result.riskAssessment.severity}</Badge>
                </div>
                <div>
                  <p className="font-medium">Risk Types:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {result.riskAssessment.riskTypes.map((risk, i) => (
                      <Badge key={i} variant="outline">{risk}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium">Explanation:</p>
                  <p className="text-sm text-muted-foreground mt-1">{result.riskAssessment.explanation}</p>
                </div>
              </div>
            ) : (
                <div className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <Badge className="bg-accent text-accent-foreground hover:bg-accent/80">No Risks Found</Badge>
                </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
```

---

## `src/components/dashboard-sidebar.tsx`

```tsx
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

  const phoneFilesPaths = ["/dashboard/messages", "/dashboard/media", "/dashboard/history", "/dashboard/apps"];
  const locationPaths = ["/dashboard/location"];
  const remoteControlPaths = ["/dashboard/remote"];
  const socialAppPaths = ["/dashboard/social"];
  
  const menuItems = [
    {
      type: 'item',
      href: '/dashboard',
      icon: <LayoutDashboard />,
      label: 'Dashboard',
    },
    {
      type: 'collapsible',
      icon: <FileText />,
      label: 'Phone Files',
      paths: phoneFilesPaths,
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
      type: 'collapsible',
      icon: <MapPin />,
      label: 'Location Tracking',
      paths: locationPaths,
      subItems: [
        { href: '/dashboard/location', icon: <MapPin />, label: 'Location' },
        { href: '/dashboard/location', icon: <Shield />, label: 'Geofence' },
      ],
    },
    {
      type: 'collapsible',
      icon: <Clapperboard />,
      label: 'Remote Control',
      paths: remoteControlPaths,
      subItems: [
        { href: '/dashboard/remote', icon: <Monitor />, label: 'Record Screen' },
        { href: '/dashboard/remote', icon: <Camera />, label: 'Take Photos' },
      ],
    },
    {
      type: 'collapsible',
      icon: <Users />,
      label: 'Social Apps',
      paths: socialAppPaths,
      subItems: socialApps.map(app => ({
        href: '/dashboard/messages',
        icon: app.icon,
        label: app.name,
      })),
    },
     {
      type: 'item',
      href: '/dashboard/settings',
      icon: <Settings />,
      label: 'Settings',
    },
  ];

  const filteredMenuItems = React.useMemo(() => {
    if (!search || search.trim() === '') return menuItems;

    const lowerCaseSearch = search.toLowerCase();

    return menuItems.map(item => {
      if (item.type === 'item') {
        return item.label.toLowerCase().includes(lowerCaseSearch) ? item : null;
      }
      if (item.type === 'collapsible') {
        const hasMatchingSubItems = item.subItems.some(subItem => 
          subItem.label.toLowerCase().includes(lowerCaseSearch)
        );

        // If the main item matches or it has matching sub-items, include it.
        if (item.label.toLowerCase().includes(lowerCaseSearch) || hasMatchingSubItems) {
            // If the search doesn't match the main label, only show matching sub-items.
            if (!item.label.toLowerCase().includes(lowerCaseSearch) && hasMatchingSubItems) {
                const filteredSubItems = item.subItems.filter(subItem => 
                    subItem.label.toLowerCase().includes(lowerCaseSearch)
                );
                return { ...item, subItems: filteredSubItems };
            }
            // Otherwise, show the whole group
            return item;
        }
        return null;
      }
      return null;
    }).filter(Boolean);
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
          {filteredMenuItems.map((item, index) => {
            if (!item) return null;

            if (item.type === 'item') {
              return (
                <SidebarMenuItem key={index}>
                  <Link href={item.href} passHref>
                    <SidebarMenuButton
                      isActive={isActive(item.href)}
                      tooltip={item.label}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              )
            }

            if (item.type === 'collapsible') {
              return (
                 <Collapsible key={index} defaultOpen={isSubActive(item.paths)}>
                    <CollapsibleTrigger asChild className="w-full">
                        <SidebarMenuButton isActive={isSubActive(item.paths)} className="w-full">
                            {item.icon}
                            <span>{item.label}</span>
                            <ChevronDown className="ml-auto h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <SidebarMenu className="pl-6 py-1">
                          {item.subItems.map((subItem, subIndex) => (
                             <SidebarMenuItem key={subIndex}>
                                <Link href={subItem.href} passHref>
                                  <SidebarMenuButton variant="ghost" size="sm" isActive={isActive(subItem.href) && pathname === subItem.href}>
                                    {subItem.icon} 
                                    <span>{subItem.label}</span>
                                  </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                          ))}
                        </SidebarMenu>
                    </CollapsibleContent>
                  </Collapsible>
              )
            }
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
```

---

## `src/components/stats-card.tsx`

```tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type StatsCardProps = {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  variant?: "default" | "destructive"
}

export function StatsCard({ title, value, description, icon, variant = "default" }: StatsCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold", variant === 'destructive' && 'text-destructive')}>{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
```

---

## `src/components/theme-provider.tsx`

```tsx
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
```

---

## `src/components/theme-toggle.tsx`

```tsx
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="h-8 w-8">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

---

## `src/components/icons/logo.tsx`

```tsx
import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
}
```

---
---

# `src/components/ui` Directory

All these files are standard ShadCN UI components.

---

## `src/components/ui/accordion.tsx`

```tsx
"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
```

---

## `src/components/ui/alert-dialog.tsx`

```tsx
"use client"

import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialog = AlertDialogPrimitive.Root

const AlertDialogTrigger = AlertDialogPrimitive.Trigger

const AlertDialogPortal = AlertDialogPrimitive.Portal

const AlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
AlertDialogOverlay.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <AlertDialogPortal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </AlertDialogPortal>
))
AlertDialogContent.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
AlertDialogHeader.displayName = "AlertDialogHeader"

const AlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
AlertDialogFooter.displayName = "AlertDialogFooter"

const AlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
AlertDialogTitle.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
AlertDialogDescription.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogAction = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Action>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action
    ref={ref}
    className={cn(buttonVariants(), className)}
    {...props}
  />
))
AlertDialogAction.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof AlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof AlertDialogPrimitive.Cancel>
>(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    )}
    {...props}
  />
))
AlertDialogCancel.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}
```

---

## `src/components/ui/alert.tsx`

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
```

---

## `src/components/ui/avatar.tsx`

```tsx
"use client"

import * as React from "react"
import * as AvatarPrimitive from "@radix-ui/react-avatar"

import { cn } from "@/lib/utils"

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />
))
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export { Avatar, AvatarImage, AvatarFallback }
```

---

## `src/components/ui/badge.tsx`

```tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
```

---

## `src/components/ui/button.tsx`

```tsx
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

---

## `src/components/ui/card.tsx`

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
```

---

## `src/components/ui/input.tsx`

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
```

---

## `src/components/ui/label.tsx`

```tsx
"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
```

---

## `src/components/ui/progress.tsx`

```tsx
"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
```

---

## `src/components/ui/switch.tsx`

```tsx
"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
```

---

## `src/components/ui/table.tsx`

```tsx
import * as React from "react"

import { cn } from "@/lib/utils"

const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn("w-full caption-bottom text-sm", className)}
      {...props}
    />
  </div>
))
Table.displayName = "Table"

const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...props} />
))
TableHeader.displayName = "TableHeader"

const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn("[&_tr:last-child]:border-0", className)}
    {...props}
  />
))
TableBody.displayName = "TableBody"

const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    )}
    {...props}
  />
))
TableFooter.displayName = "TableFooter"

const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    )}
    {...props}
  />
))
TableRow.displayName = "TableRow"

const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
      className
    )}
    {...props}
  />
))
TableHead.displayName = "TableHead"

const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}
    {...props}
  />
))
TableCell.displayName = "TableCell"

const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn("mt-4 text-sm text-muted-foreground", className)}
    {...props}
  />
))
TableCaption.displayName = "TableCaption"

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
```

---

## `src/components/ui/tabs.tsx`

```tsx
"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

const Tabs = TabsPrimitive.Root

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
```

---

## `src/components/ui/toaster.tsx`

```tsx
"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}
```

---

## `src/components/ui/toast.tsx`

```tsx
"use client"

import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn("text-sm font-semibold", className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}
```

---

## `src/hooks/use-toast.ts`

```ts
"use client"

// Inspired by react-hot-toast library
import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, "id">

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
```

---

## `src/lib/utils.ts`

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```
