
"use client";

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from '@/components/ui/skeleton';
import { listenToChildData, type ChildData } from '@/lib/child-data';
import { type RealtimeChannel } from '@supabase/supabase-js';

const ACTIVE_DEVICE_ID = "device-1"; // This should be dynamic based on the selected device

interface HistoryItem {
  url: string;
  category: string;
  time: string;
  incognito: boolean;
  query?: string;
}

export default function HistoryPage() {
  const [webHistory, setWebHistory] = React.useState<HistoryItem[] | null>(null);

  React.useEffect(() => {
    // We need to listen to the whole telemetry object and extract webHistory.
    const channel: RealtimeChannel | null = listenToChildData(ACTIVE_DEVICE_ID, (data: ChildData | null) => {
      if (data && data.webHistory) {
        // With Supabase, we might get the whole history log. Let's handle both cases.
        // Assuming the child app sends the full history on each update for simplicity.
        setWebHistory(data.webHistory);
      } else {
        // Set to empty array if data is null or webHistory is missing
        setWebHistory([]); 
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
        if (channel) {
            channel.unsubscribe();
        }
    };
  }, []);

  const renderSkeleton = () => (
    Array.from({ length: 5 }).map((_, index) => (
      <TableRow key={index}>
        <TableCell><Skeleton className="h-4 w-[250px]" /></TableCell>
        <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
        <TableCell><Skeleton className="h-4 w-[100px]" /></TableCell>
        <TableCell><Skeleton className="h-4 w-[80px]" /></TableCell>
      </TableRow>
    ))
  );

  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Web &amp; Search History</h1>
      <Card>
        <CardHeader>
          <CardTitle>Browsing Activity</CardTitle>
          <CardDescription>A real-time log of visited websites and search queries from the selected device.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>URL / Search Query</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Mode</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {webHistory === null ? (
                renderSkeleton()
              ) : webHistory.length > 0 ? (
                webHistory.map((item, index) => (
                  <TableRow key={`${item.url}-${index}`}>
                    <TableCell className="font-medium">
                      {item.url}
                      {item.query && <p className="text-sm text-muted-foreground">"{item.query}"</p>}
                    </TableCell>
                    <TableCell>
                      <Badge variant="secondary">{item.category}</Badge>
                    </TableCell>
                    <TableCell>{item.time}</TableCell>
                    <TableCell>
                      {item.incognito && <Badge variant="destructive">Incognito</Badge>}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} className="h-24 text-center">
                    No browsing history found for this device. Listening for new data...
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
