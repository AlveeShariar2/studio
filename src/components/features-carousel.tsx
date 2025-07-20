"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Crop, Monitor, Mic, Camera as CameraIcon, Phone, MessageSquare } from "lucide-react"

// Simple SVG for WhatsApp
const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-white fill-current">
    <path d="M16 2.1C8.3 2.1 2.1 8.3 2.1 16c0 3.1 1 6 2.6 8.4l-1.6 5.8 6-1.6c2.3 1.5 5 2.3 7.9 2.3h.1c7.7 0 13.9-6.2 13.9-13.9C29.9 8.3 23.7 2.1 16 2.1zM22.9 18.4c-.2.5-.9.9-1.7 1-.7.1-1.5.2-2.3-.1-.8-.3-2.1-1-3.6-2.5-1.9-1.8-3.1-4-3.3-4.3-.2-.3-.5-1 .1-1.5.5-.5 1.1-.6 1.4-.6.3 0 .5-.1.7.4l.7 1.6c.1.3.1.6 0 .8l-.5.8c-.1.1-.3.3-.1.6.4.7 1 1.6 2.1 2.6.9.9 1.8 1.3 2.5 1.5.3.1.6 0 .8-.2l.7-.8c.2-.2.5-.1.8 0l1.5.8c.3.2.5.4.5.7z"></path>
  </svg>
)

// Simple SVG for Messenger
const MessengerIcon = () => (
  <svg viewBox="0 0 32 32" className="h-8 w-8 text-white fill-current">
    <path d="M16 2.1C8.3 2.1 2.1 8.3 2.1 16c0 5.4 3.4 10.1 8.2 12.2.7.3 1.5.1 2.1-.4l2.1-1.9c.2-.2.5-.2.7 0l2.5 2.5c.6.6 1.4.9 2.3.9 1.7 0 3.1-1.4 3.1-3.1v-2.1c4.8-2.1 8.2-6.8 8.2-12.2C29.9 8.3 23.7 2.1 16 2.1zm-3.6 17.5l-3.3 3.3c-.3.3-.8.2-1.1-.2-.2-.3-.2-.7 0-1l3.3-3.3c.3-.3.8-.2 1.1.2.3.4.3.8 0 1zm5.8 0l-3.3 3.3c-.3.3-.8.2-1.1-.2-.2-.3-.2-.7 0-1l3.3-3.3c.3-.3.8-.2 1.1.2.3.4.3.8 0 1zm4.1-3.4l-7.7 4.5c-.3.2-.7.2-1 0l-7.7-4.5c-.3-.2-.5-.5-.5-.8v-5c0-.3.2-.6.5-.8l7.7-4.5c.3-.2.7-.2 1 0l7.7 4.5c.3.2.5.5.5.8v5c0 .3-.2.6-.5.8z"></path>
  </svg>
)

const features = [
  { name: "Capture Screenshots", icon: <Crop className="h-8 w-8" />, color: "bg-indigo-500", notification: 0 },
  { name: "Live Screen", icon: <Monitor className="h-8 w-8" />, color: "bg-red-500", notification: 0 },
  { name: "Record Surround", icon: <Mic className="h-8 w-8" />, color: "bg-blue-500", notification: 0 },
  { name: "Take Photos", icon: <CameraIcon className="h-8 w-8" />, color: "bg-orange-500", notification: 0 },
  { name: "WhatsApp", icon: <WhatsAppIcon />, color: "bg-green-500", notification: 7 },
  { name: "Messenger", icon: <MessengerIcon />, color: "bg-purple-500", notification: 0 },
  { name: "Calls", icon: <Phone className="h-8 w-8" />, color: "bg-teal-400", notification: 3 },
  { name: "Messages", icon: <MessageSquare className="h-8 w-8" />, color: "bg-sky-500", notification: 15 },
];

export function FeaturesCarousel() {
  return (
    <Card className="w-full">
        <CardContent className="p-4">
            <Carousel
                opts={{
                align: "start",
                loop: false,
                }}
                className="w-full"
            >
                <CarouselContent>
                {features.map((feature, index) => (
                    <CarouselItem key={index} className="basis-1/4 sm:basis-1/6 md:basis-1/8 lg:basis-[12%]">
                        <div className="flex flex-col items-center gap-2 cursor-pointer group">
                            <div className={`relative w-16 h-16 rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110 ${feature.color}`}>
                                {feature.icon}
                                {feature.notification > 0 && (
                                    <Badge variant="destructive" className="absolute -top-1 -right-1 rounded-full p-0 h-5 w-5 flex items-center justify-center text-xs">
                                        {feature.notification}
                                    </Badge>
                                )}
                            </div>
                            <p className="text-xs text-center text-muted-foreground truncate w-full">{feature.name}</p>
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4" />
            </Carousel>
        </CardContent>
    </Card>
  )
}
