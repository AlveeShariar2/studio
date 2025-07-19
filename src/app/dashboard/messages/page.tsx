import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge";

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
  )
}
