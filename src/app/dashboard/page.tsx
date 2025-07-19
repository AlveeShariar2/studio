import {
  Activity,
  AppWindow,
  BatteryFull,
  Calendar,
  Clock,
  Image as ImageIcon,
  KeyRound,
  MapPin,
  MessageCircle,
  Phone,
  Wifi,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const topCalls = [
  {
    name: "John Doe",
    number: "(555) 123-4567",
    type: "Outgoing",
    duration: "5m 21s",
    date: "2024-07-29 10:15",
  },
  {
    name: "Jane Smith",
    number: "Unknown",
    type: "Incoming",
    duration: "10m 02s",
    date: "2024-07-29 09:30",
  },
  {
    name: "Tech Support",
    number: "(555) 987-6543",
    type: "Missed",
    duration: "0s",
    date: "2024-07-29 08:00",
  },
];

const topMessages = [
  {
    from: "John Doe",
    message: "Hey, are you coming to the park?",
    time: "20m ago",
  },
  {
    from: "(555) 555-5555",
    message: "URGENT: Your account is locked. Click here...",
    time: "2h ago",
  },
  {
    from: "Mom",
    message: "Dinner is at 7 PM!",
    time: "4h ago",
  },
];

export default function DashboardPage() {
  return (
    <div className="py-6 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold">Sam's Phone Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>
            Account Status:{" "}
            <Badge
              variant="default"
              className="bg-accent text-accent-foreground"
            >
              Premium
            </Badge>
          </span>
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
                  alt="Live map showing tracked device location"
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
              <CardDescription>
                A summary of the most recent calls.
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[300px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Contact</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topCalls.map((call, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="font-medium">{call.name}</div>
                        <div className="text-xs text-muted-foreground">
                          {call.number}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            call.type === "Missed" ? "destructive" : "outline"
                          }
                        >
                          {call.type}
                        </Badge>
                      </TableCell>
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
              <CardDescription>
                A summary of the most recent messages.
              </CardDescription>
            </CardHeader>
            <CardContent className="max-h-[300px] overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>From</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Time</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topMessages.map((msg, i) => (
                    <TableRow key={i}>
                      <TableCell className="font-medium">{msg.from}</TableCell>
                      <TableCell className="max-w-xs truncate">
                        {msg.message}
                      </TableCell>
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
                <p className="text-muted-foreground">
                  123 Park Ave, Springfield
                </p>
                <p className="text-muted-foreground">Updated: 2m ago</p>
                <Button variant="link" className="p-0 h-auto">
                  View on map
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Photos</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="aspect-square bg-muted rounded-md">
                  <Image
                    src={`https://placehold.co/100x100.png?id=${i}`}
                    alt={`Recent photo ${i + 1}`}
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
