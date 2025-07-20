
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const recentLocations = [
    { name: "Greenwood Park", time: "2m ago", coordinates: "40.7128° N, 74.0060° W" },
    { name: "Central Library", time: "1h ago", coordinates: "40.7159° N, 74.0021° W" },
    { name: "Maple Street", time: "3h ago", coordinates: "40.7182° N, 74.0085° W" },
    { name: "Home", time: "5h ago", coordinates: "40.7201° N, 74.0112° W" },
];

const geoFences = [
    { name: "Home", status: "active" },
    { name: "School", status: "active" },
    { name: "Danger Zone", status: "active" },
]

export default function LocationPage() {
    return (
        <div className="py-6 space-y-6">
            <h1 className="text-2xl font-bold">Location Tracking</h1>
            <div className="grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Live Location</CardTitle>
                            <CardDescription>Real-time map view of the device's location.</CardDescription>
                        </CardHeader>
                        <CardContent>
                             <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative">
                                <Image
                                    src="https://placehold.co/1280x720.png"
                                    alt="Map placeholder"
                                    fill
                                    className="rounded-md object-cover"
                                    data-ai-hint="world map"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="space-y-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between">
                           <div>
                            <CardTitle>Geofencing</CardTitle>
                            <CardDescription>Safe zones and restricted areas.</CardDescription>
                           </div>
                           <Button size="sm" variant="outline"><Plus className="mr-2 h-4 w-4" /> Add</Button>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Zone Name</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {geoFences.map((fence, index) => (
                                        <TableRow key={`${fence.name}-${index}`}>
                                            <TableCell className="font-medium">{fence.name}</TableCell>
                                            <TableCell><Badge variant="default" className="bg-accent text-accent-foreground">{fence.status}</Badge></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            </div>
             <Card>
                <CardHeader>
                    <CardTitle>Location History</CardTitle>
                    <CardDescription>Log of recently visited places.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Place</TableHead>
                                <TableHead>Time</TableHead>
                                <TableHead>Coordinates</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {recentLocations.map((location, index) => (
                                <TableRow key={`${location.name}-${index}`}>
                                    <TableCell className="font-medium">{location.name}</TableCell>
                                    <TableCell>{location.time}</TableCell>
                                    <TableCell>{location.coordinates}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
