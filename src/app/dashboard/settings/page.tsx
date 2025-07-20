
"use client"

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function SettingsPage() {
    const { toast } = useToast();
    const [profileName, setProfileName] = React.useState("Sam's Phone");
    const [deviceName, setDeviceName] = React.useState("Samsung Galaxy S22");
    const [keywords, setKeywords] = React.useState(["casino", "violence", "hate speech"]);
    const [newKeyword, setNewKeyword] = React.useState("");
    const [stealthMode, setStealthMode] = React.useState(false);
    const [remoteControl, setRemoteControl] = React.useState(true);
    const [callRecording, setCallRecording] = React.useState(true);

    const handleAddKeyword = () => {
        if (newKeyword.trim() && !keywords.includes(newKeyword.trim().toLowerCase())) {
            setKeywords([...keywords, newKeyword.trim().toLowerCase()]);
            setNewKeyword("");
            toast({ title: "Keyword added!" });
        }
    };

    const handleRemoveKeyword = (keywordToRemove: string) => {
        setKeywords(keywords.filter(k => k !== keywordToRemove));
        toast({ title: "Keyword removed.", variant: "destructive" });
    };

    const handleSaveChanges = () => {
        toast({ title: "Changes saved!" });
    };

    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Settings</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Application Configuration</CardTitle>
                    <CardDescription>Manage profiles, content filters, and other settings.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Profile Settings</AccordionTrigger>
                            <AccordionContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="profileName">Profile Name</Label>
                                    <Input id="profileName" value={profileName} onChange={(e) => setProfileName(e.target.value)} />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="deviceName">Device Name</Label>
                                    <Input id="deviceName" value={deviceName} onChange={(e) => setDeviceName(e.target.value)} />
                                </div>
                                <Button onClick={handleSaveChanges}>Save Changes</Button>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Content Filtering</AccordionTrigger>
                            <AccordionContent className="space-y-4">
                               <p className="text-sm text-muted-foreground">Block websites and content containing specific keywords.</p>
                               <div className="space-y-2">
                                    <Label>Blocked Keywords</Label>
                                    <div className="space-y-2">
                                        {keywords.map(keyword => (
                                            <div key={keyword} className="flex items-center justify-between p-2 bg-muted rounded-md">
                                                <span className="text-sm">{keyword}</span>
                                                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleRemoveKeyword(keyword)}>
                                                    <Trash2 className="h-4 w-4 text-destructive" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                               </div>
                                <div className="flex gap-2">
                                    <Input 
                                        placeholder="Add a new keyword..." 
                                        value={newKeyword} 
                                        onChange={(e) => setNewKeyword(e.target.value)}
                                        onKeyDown={(e) => e.key === 'Enter' && handleAddKeyword()}
                                    />
                                    <Button variant="outline" onClick={handleAddKeyword}><Plus className="mr-2 h-4 w-4" /> Add</Button>
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
                                    <Switch id="stealth-mode" checked={stealthMode} onCheckedChange={setStealthMode} />
                                </div>
                                <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div>
                                        <Label htmlFor="remote-control" className="font-semibold">Remote Control</Label>
                                        <p className="text-xs text-muted-foreground">Enable remote commands like screenshots and data export.</p>
                                    </div>
                                    <Switch id="remote-control" checked={remoteControl} onCheckedChange={setRemoteControl} />
                                </div>
                                 <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div>
                                        <Label htmlFor="call-recording" className="font-semibold">Call Recording</Label>
                                        <p className="text-xs text-muted-foreground">Automatically record incoming and outgoing calls.</p>
                                    </div>
                                    <Switch id="call-recording" checked={callRecording} onCheckedChange={setCallRecording} />
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    );
}
