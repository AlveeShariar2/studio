"use client"
import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Mic, ScreenShare, Video, X, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { ContentAnalysis } from '@/components/content-analysis';
import { sendCommandToDevice } from '@/lib/firebase';
import { listenToScreenData, type ScreenData } from '@/lib/child-data';
import Image from 'next/image';

const ACTIVE_DEVICE_ID = "device-1"; // This should be dynamic based on selected device

export default function RemotePage() {
    const { toast } = useToast();
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const [hasCameraPermission, setHasCameraPermission] = React.useState<boolean | null>(null);
    const [isScreenMirroring, setIsScreenMirroring] = React.useState(false);
    const [isSendingCommand, setIsSendingCommand] = React.useState(false);
    const [screenData, setScreenData] = React.useState<ScreenData | null>(null);
    const [isDeviceResponding, setIsDeviceResponding] = React.useState(true);
    const toastShownRef = React.useRef(false);
    const screenDataTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    React.useEffect(() => {
        let stream: MediaStream | null = null;
    
        const getCameraPermission = async () => {
            // Camera logic remains the same
        };
    
        if (!isScreenMirroring) {
            getCameraPermission();
        }
    
        return () => {
            // Cleanup logic remains the same
        };
    }, [isScreenMirroring, toast]);

    React.useEffect(() => {
        if (!isScreenMirroring) {
            setScreenData(null);
            return;
        }

        const unsubscribe = listenToScreenData(ACTIVE_DEVICE_ID, (data) => {
            if (data?.url) {
                setScreenData(data);
                setIsDeviceResponding(true);

                if (screenDataTimeoutRef.current) {
                    clearTimeout(screenDataTimeoutRef.current);
                }
                screenDataTimeoutRef.current = setTimeout(() => {
                    setIsDeviceResponding(false);
                }, 5000); // 5 seconds timeout
            }
        });

        return () => {
            unsubscribe();
            if (screenDataTimeoutRef.current) {
                clearTimeout(screenDataTimeoutRef.current);
            }
        }
    }, [isScreenMirroring]);
    
    const handleCommand = async (commandType: string, params: Record<string, any> = {}) => {
        setIsSendingCommand(true);
        try {
            await sendCommandToDevice(ACTIVE_DEVICE_ID, commandType, params);
            toast({
                title: 'Command Sent',
                description: `The '${commandType}' command was sent to the device.`,
            });

            if (commandType === 'startScreenMirroring') {
                setIsScreenMirroring(true);
                setIsDeviceResponding(true); // Assume it will respond initially
            } else if (commandType === 'stopScreenMirroring') {
                setIsScreenMirroring(false);
            }
        } catch (error) {
            console.error(`Failed to send command '${commandType}':`, error);
            toast({
                variant: 'destructive',
                title: 'Command Failed',
                description: `Could not send the '${commandType}' command.`,
            });
        } finally {
            setIsSendingCommand(false);
        }
    };
    
    const renderScreenMirroring = () => {
        if (screenData?.url && isDeviceResponding) {
            return (
                <Image
                    key={screenData.timestamp}
                    src={screenData.url}
                    alt="Live screen feed"
                    fill
                    className="object-contain rounded-md"
                    unoptimized // Avoid Next.js image optimization for fast-changing images
                />
            );
        }
        return (
            <div className="w-full h-full bg-black rounded-lg p-4 flex flex-col justify-center items-center text-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground mb-4" />
                <p className="text-muted-foreground">
                    {isDeviceResponding ? "Waiting for device screen..." : "Device offline or not responding."}
                </p>
            </div>
        );
    };

    const renderCameraFeed = () => (
        <div className="w-full h-full relative">
            <video ref={videoRef} className="w-full h-full rounded-md object-cover" autoPlay muted playsInline hidden={hasCameraPermission !== true} />
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
    );

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
                                {isScreenMirroring ? renderScreenMirroring() : renderCameraFeed()}
                            </div>
                            {!isScreenMirroring && (
                                <div className="flex items-center justify-between mt-4">
                                   <div className="flex items-center space-x-2">
                                    <Switch id="camera-switch" defaultChecked/>
                                    <Label htmlFor="camera-switch">Front Camera</Label>
                                   </div>
                                    <Button onClick={() => handleCommand('take_snapshot')} disabled={isSendingCommand || hasCameraPermission !== true}>
                                        {isSendingCommand ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Camera className="mr-2 h-4 w-4" />}
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
                                onClick={() => handleCommand(isScreenMirroring ? 'stopScreenMirroring' : 'startScreenMirroring')}
                                variant={isScreenMirroring ? "destructive" : "default"}
                                disabled={isSendingCommand}
                            >
                                {isSendingCommand ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : (isScreenMirroring ? <X className="mr-2 h-4 w-4" /> : <ScreenShare className="mr-2 h-4 w-4" />)}
                                {isScreenMirroring ? "Stop Live Screen Sharing" : "Start Live Screen Sharing"}
                            </Button>
                            <Button className="w-full justify-start" onClick={() => handleCommand('startScreenRecording')} disabled={isSendingCommand}>
                                {isSendingCommand ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Video className="mr-2 h-4 w-4" />}
                                Start Screen Recording
                            </Button>
                            <Button className="w-full justify-start" onClick={() => handleCommand('startSurroundRecording')} disabled={isSendingCommand}>
                                {isSendingCommand ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mic className="mr-2 h-4 w-4" />}
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
