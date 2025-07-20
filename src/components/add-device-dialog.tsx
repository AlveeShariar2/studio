
'use client'

import * as React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Copy, Smartphone, Download } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

interface AddDeviceDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function AddDeviceDialog({ open, onOpenChange }: AddDeviceDialogProps) {
  const { toast } = useToast()
  // This would be dynamically generated in a real application
  const connectionCode = 'A4B-9K2-C7D' 

  const handleCopy = () => {
    navigator.clipboard.writeText(connectionCode)
    toast({ title: 'Connection code copied!' })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a New Device</DialogTitle>
          <DialogDescription>
            Follow these steps on your child's phone to connect it to your SurokkhaNet dashboard.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">1</span>
              Install the App
            </h4>
            <p className="text-sm text-muted-foreground pl-8">
              Download and install the SurokkhaNet child app on the new device.
            </p>
             <Button variant="outline" className="ml-8">
              <Download className="mr-2 h-4 w-4" />
              Download for Android
            </Button>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">2</span>
              Enter Connection Code
            </h4>
            <p className="text-sm text-muted-foreground pl-8">
              Open the app on your child's device and enter this unique code when prompted.
            </p>
            <div className="flex items-center space-x-2 pl-8">
              <div className="w-full flex-1 rounded-md border border-dashed p-3 text-center font-mono text-lg tracking-widest">
                {connectionCode}
              </div>
              <Button type="button" size="icon" variant="secondary" onClick={handleCopy}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
           <div className="space-y-2">
            <h4 className="font-semibold flex items-center gap-2">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm">3</span>
               Start Monitoring
            </h4>
            <p className="text-sm text-muted-foreground pl-8">
              Once connected, the device will appear in your dashboard and you can start monitoring.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
