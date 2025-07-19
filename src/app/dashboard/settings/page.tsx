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
