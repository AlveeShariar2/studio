"use client"
import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mic, ScreenShare, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function RemotePage() {
    const { toast } = useToast();
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hasCameraPermission, setHasCameraPermission] = React.useState<boolean | null>(null);

    React.useEffect(() => {
        const getCameraPermission = async () => {
            if (typeof navigator !== 'undefined' && navigator.mediaDevices) {
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
                        description: 'Please enable camera permissions in your browser settings to use this app.',
                    });
                }
            } else {
                 setHasCameraPermission(false);
                 toast({
                    variant: 'destructive',
                    title: 'Camera Not Supported',
                    description: 'Your browser does not support camera access.',
                });
            }
        };

        getCameraPermission();

        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                const stream = videoRef.current.srcObject as MediaStream;
                stream.getTracks().forEach(track => track.stop());
            }
        }
    }, [toast]);

    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Remote Control</h1>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Live Camera Feed</CardTitle>
                            <CardDescription>View a real-time feed from the device's camera.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative">
                                <video ref={videoRef} className="w-full h-full rounded-md object-cover" autoPlay muted playsInline />
                                {hasCameraPermission === false && (
                                    <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center p-4">
                                        <Camera className="w-16 h-16 text-muted-foreground mb-4" />
                                        <Alert variant="destructive" className="w-full max-w-sm">
                                            <AlertTitle>Camera Access Required</AlertTitle>
                                            <AlertDescription>
                                                Please allow camera access in your browser to use this feature.
                                            </AlertDescription>
                                        </Alert>
                                    </div>
                                )}
                                {hasCameraPermission === null && (
                                     <div className="absolute inset-0 bg-muted flex flex-col items-center justify-center">
                                        <p>Requesting camera permission...</p>
                                     </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between mt-4">
                               <div className="flex items-center space-x-2">
                                <Switch id="camera-switch" defaultChecked/>
                                <Label htmlFor="camera-switch">Front Camera</Label>
                               </div>
                                <Button>
                                    <Camera className="mr-2 h-4 w-4" />
                                    Take Snapshot
                                </Button>
                            </div>
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
                            <Button className="w-full justify-start">
                                <Video className="mr-2 h-4 w-4" />
                                Start Screen Recording
                            </Button>
                            <Button className="w-full justify-start">
                                <Mic className="mr-2 h-4 w-4" />
                                Start Surround Recording
                            </Button>
                             <Button className="w-full justify-start">
                                <ScreenShare className="mr-2 h-4 w-4" />
                                Start Live Screen Sharing
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
