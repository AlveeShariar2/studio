
"use client";

import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from '@/components/ui/skeleton';
import { listenToChildData } from '@/lib/child-data';

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
    const unsubscribe = listenToChildData((data) => {
      if (data && data.webHistory) {
        setWebHistory(data.webHistory);
      } else {
        setWebHistory([]);
      }
    });

    return () => unsubscribe();
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
          <CardDescription>A complete log of visited websites and search engine queries.</CardDescription>
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
                  <TableCell colSpan={4} className="text-center">No browsing history found.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
