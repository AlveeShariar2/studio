import { Activity, AppWindow, Clock, MessageCircleWarning } from "lucide-react";
import Image from "next/image";
import { StatsCard } from "@/components/stats-card";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ContentAnalysis } from "@/components/content-analysis";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const recentActivities = [
  {
    icon: <AppWindow className="h-4 w-4" />,
    description: "New app installed: 'GameZone'",
    time: "5m ago",
    bgColor: "bg-blue-100 dark:bg-blue-900/50",
    iconColor: "text-blue-500",
  },
  {
    icon: <MessageCircleWarning className="h-4 w-4" />,
    description: "Flagged message detected in WhatsApp",
    time: "1h ago",
    bgColor: "bg-red-100 dark:bg-red-900/50",
    iconColor: "text-red-500",
  },
  {
    icon: <Clock className="h-4 w-4" />,
    description: "Screen time limit reached for YouTube",
    time: "3h ago",
    bgColor: "bg-yellow-100 dark:bg-yellow-900/50",
    iconColor: "text-yellow-500",
  },
  {
    icon: <Activity className="h-4 w-4" />,
    description: "Unusual activity detected after 10 PM",
    time: "5h ago",
    bgColor: "bg-purple-100 dark:bg-purple-900/50",
    iconColor: "text-purple-500",
  },
];

export default function DashboardPage() {
  return (
    <div className="py-6 space-y-6">
       <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Sam's Phone Dashboard</h1>
        </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Screen Time Today"
          value="3h 45m"
          description="+15% from yesterday"
          icon={<Clock className="h-5 w-5 text-muted-foreground" />}
        />
        <StatsCard
          title="Flagged Messages"
          value="2"
          description="In WhatsApp & SMS"
          icon={<MessageCircleWarning className="h-5 w-5 text-muted-foreground" />}
          variant="destructive"
        />
        <StatsCard
          title="Most Used App"
          value="YouTube"
          description="1h 30m of usage"
          icon={<AppWindow className="h-5 w-5 text-muted-foreground" />}
        />
         <StatsCard
          title="Current Location"
          value="Greenwood Park"
          description="Updated 2m ago"
          icon={<Activity className="h-5 w-5 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Live Screen View</CardTitle>
                    <CardDescription>A real-time mirror of the device screen.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                        <Image 
                            src="https://placehold.co/1280x720.png" 
                            alt="Live screen placeholder" 
                            width={1280} 
                            height={720} 
                            className="rounded-md object-cover"
                            data-ai-hint="mobile phone screen"
                        />
                    </div>
                </CardContent>
            </Card>
            
            <ContentAnalysis />
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>A log of the latest events from the device.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${activity.bgColor} ${activity.iconColor}`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.description}</p>
                  </div>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
