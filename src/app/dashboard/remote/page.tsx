
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

    React.useEffect(() => {
        const getCameraPermission = async () => {
          if (isScreenMirroring || typeof navigator === 'undefined' || !navigator.mediaDevices) {
            setHasCameraPermission(false);
            return;
          }
      
          try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            setHasCameraPermission(true);
      
            if (videoRef.current) {
              videoRef.current.srcObject = stream;
            }
          } catch (error) {
            console.error('Error accessing camera:', error);
            setHasCameraPermission(false);
            toast({
              variant: 'destructive',
              title: 'Camera Access Denied',
              description: 'Please enable camera permissions in your browser settings to use this feature.',
            });
          }
        };
      
        getCameraPermission();
      
        return () => {
          if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject as MediaStream;
            stream.getTracks().forEach(track => track.stop());
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
                                        <video ref={videoRef} className="w-full h-full rounded-md object-cover" autoPlay muted playsInline hidden={!hasCameraPermission} />
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
                                                        Please allow camera access in your browser to use this feature.
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
                                    <Button disabled={!hasCameraPermission}>
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
