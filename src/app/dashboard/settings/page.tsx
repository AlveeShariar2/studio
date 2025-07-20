
"use client"

import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Plus, Trash2, Smartphone } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Device = {
  id: string
  name: string
  status: "Online" | "Offline"
  stealthMode: boolean
  blockedApps: string[]
  blockedKeywords: string[]
}

const initialDevices: Device[] = [
  {
    id: "device-1",
    name: "Sam's Phone",
    status: "Online",
    stealthMode: false,
    blockedApps: ["com.instagram.android", "com.tiktok.app"],
    blockedKeywords: ["casino", "violence", "hate speech"],
  },
  {
    id: "device-2",
    name: "Aria's Tablet",
    status: "Offline",
    stealthMode: true,
    blockedApps: ["com.snapchat.android"],
    blockedKeywords: ["adult content", "gambling"],
  },
]

export default function SettingsPage() {
  const { toast } = useToast()
  const [devices, setDevices] = React.useState<Device[]>(initialDevices)

  const handleSettingChange = <K extends keyof Device>(deviceId: string, key: K, value: Device[K]) => {
    setDevices(devices.map(device => 
      device.id === deviceId ? { ...device, [key]: value } : device
    ))
    toast({ title: "Setting updated!" })
  }

  const handleListChange = (deviceId: string, type: "blockedApps" | "blockedKeywords", action: "add" | "remove", value: string) => {
    setDevices(devices.map(device => {
      if (device.id === deviceId) {
        const list = device[type]
        let newList: string[]
        if (action === "add") {
          if (list.includes(value.trim().toLowerCase()) || !value.trim()) {
            toast({ title: "Item already exists or is empty", variant: "destructive"})
            return device
          }
          newList = [...list, value.trim().toLowerCase()]
          toast({ title: "Item added!" })
        } else {
          newList = list.filter(item => item !== value)
          toast({ title: "Item removed.", variant: "destructive" })
        }
        return { ...device, [type]: newList }
      }
      return device
    }))
  }

  const ListItemManager = ({ device, type }: { device: Device; type: "blockedApps" | "blockedKeywords" }) => {
    const [inputValue, setInputValue] = React.useState("")
    const title = type === "blockedApps" ? "Blocked Apps" : "Blocked Keywords"
    const placeholder = type === "blockedApps" ? "e.g., com.facebook.katana" : "Add a new keyword..."

    const handleAdd = () => {
      handleListChange(device.id, type, "add", inputValue)
      setInputValue("")
    }

    return (
      <div className="space-y-4">
        <p className="text-sm text-muted-foreground">
          {type === "blockedApps"
            ? "Add package names to block specific apps."
            : "Block websites and content containing these keywords."}
        </p>
        <div className="space-y-2">
          <Label>{title}</Label>
          <div className="space-y-2">
            {device[type].map((item) => (
              <div key={item} className="flex items-center justify-between p-2 bg-muted rounded-md">
                <span className="text-sm font-mono break-all">{item}</span>
                <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => handleListChange(device.id, type, "remove", item)}>
                  <Trash2 className="h-4 w-4 text-destructive" />
                </Button>
              </div>
            ))}
             {device[type].length === 0 && (
                <p className="text-xs text-muted-foreground text-center py-2">No items in the list.</p>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <Input
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          />
          <Button variant="outline" onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" /> Add
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Device Management</h1>
      <div className="space-y-6">
        {devices.map(device => (
          <Card key={device.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6" />
                  <CardTitle className="text-xl">{device.name}</CardTitle>
                </div>
                <Badge variant={device.status === 'Online' ? 'default' : 'secondary'} className={device.status === 'Online' ? "bg-accent text-accent-foreground" : ""}>
                  {device.status}
                </Badge>
              </div>
              <CardDescription>Manage settings for this specific device.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="general">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="general">General</TabsTrigger>
                  <TabsTrigger value="apps">Blocked Apps</TabsTrigger>
                  <TabsTrigger value="keywords">Blocked Keywords</TabsTrigger>
                </TabsList>
                <TabsContent value="general" className="pt-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between rounded-lg border p-4">
                      <div>
                        <Label htmlFor={`stealth-mode-${device.id}`} className="font-semibold">Stealth Mode</Label>
                        <p className="text-xs text-muted-foreground">Hide the SurokkhaNet app icon on the device.</p>
                      </div>
                      <Switch
                        id={`stealth-mode-${device.id}`}
                        checked={device.stealthMode}
                        onCheckedChange={(checked) => handleSettingChange(device.id, "stealthMode", checked)}
                      />
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="apps" className="pt-4">
                  <ListItemManager device={device} type="blockedApps" />
                </TabsContent>
                <TabsContent value="keywords" className="pt-4">
                  <ListItemManager device={device} type="blockedKeywords" />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
