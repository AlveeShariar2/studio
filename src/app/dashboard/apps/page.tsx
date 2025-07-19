import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const appUsage = [
  { name: "YouTube", usage: "1h 30m", usagePercent: 40, status: "Allowed", icon: "/youtube.svg" },
  { name: "TikTok", usage: "45m", usagePercent: 20, status: "Allowed", icon: "/tiktok.svg" },
  { name: "Instagram", usage: "30m", usagePercent: 15, status: "Blocked", icon: "/instagram.svg" },
  { name: "GameZone", usage: "25m", usagePercent: 12, status: "Allowed", icon: "/gamezone.svg" },
  { name: "Browser", usage: "15m", usagePercent: 8, status: "Allowed", icon: "/browser.svg" },
];

const AppIcon = ({ name }: { name: string }) => {
    // In a real app, you'd have actual icons. We'll use initials as fallback.
    const initial = name.charAt(0).toUpperCase();
    return (
        <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center font-bold text-muted-foreground">
            {initial}
        </div>
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
                                            <AppIcon name={app.name} />
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
