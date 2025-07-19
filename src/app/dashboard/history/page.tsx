import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge";

const webHistory = [
    { url: "youtube.com", category: "Entertainment", time: "10m ago", incognito: false },
    { url: "google.com", query: "how to build a volcano", category: "Education", time: "25m ago", incognito: false },
    { url: "coolmathgames.com", category: "Games", time: "45m ago", incognito: true },
    { url: "wikipedia.org", query: "Solar System", category: "Education", time: "1h ago", incognito: false },
    { url: "friv.com", category: "Games", time: "2h ago", incognito: true },
];


export default function HistoryPage() {
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
              {webHistory.map((item, index) => (
                <TableRow key={index}>
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
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
