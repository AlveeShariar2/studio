
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const mediaItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  type: i % 3 === 0 ? 'video' : 'photo',
  src: `https://placehold.co/400x400.png?id=${i}`,
  alt: `Media item ${i + 1}`,
  timestamp: `${i + 2} hours ago`,
  aiHint: 'children playing'
}));

export default function MediaPage() {
  return (
    <div className="py-6 space-y-6">
      <h1 className="text-2xl font-bold">Photos &amp; Videos</h1>
      <Card>
        <CardHeader>
          <CardTitle>Device Gallery</CardTitle>
          <CardDescription>View photos and videos saved on the device.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {mediaItems.map((item) => (
              <div key={item.id} className="group relative aspect-square">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover rounded-lg transition-transform group-hover:scale-105"
                  data-ai-hint={item.aiHint}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-2 rounded-lg">
                  <div className="text-white">
                    <p className="text-xs font-semibold">{item.type === 'video' ? 'Video' : 'Photo'}</p>
                    <p className="text-xs">{item.timestamp}</p>
                  </div>
                </div>
                 {item.type === 'video' && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon></svg>
                    </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
