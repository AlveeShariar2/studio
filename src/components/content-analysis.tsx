
"use client"

import { useState } from "react"
import { Bot, Loader2 } from "lucide-react"
import type { AnalyzeTextContentOutput } from "@/ai/flows/analyze-text-content"
import { analyzeTextContent } from "@/ai/flows/analyze-text-content"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"

export function ContentAnalysis() {
  const [text, setText] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<AnalyzeTextContentOutput | null>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text.trim()) return

    setLoading(true)
    setResult(null)
    try {
      const analysisResult = await analyzeTextContent({ text })
      setResult(analysisResult)
    } catch (error) {
      console.error("Analysis failed:", error)
      toast({
        title: "Analysis Failed",
        description: "An error occurred while analyzing the text. Please try again.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Bot />
          AI Content Risk Analysis
        </CardTitle>
        <CardDescription>
          Manually analyze any text to check for potential risks like cyberbullying or inappropriate content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Paste text here to analyze..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-[100px]"
            disabled={loading}
          />
          <Button type="submit" disabled={loading || !text.trim()}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              "Analyze Text"
            )}
          </Button>
        </form>

        {result && (
          <div className="mt-6 space-y-4 rounded-lg border bg-secondary/50 p-4">
            <h3 className="font-semibold">Analysis Result</h3>
            {result.riskAssessment.hasRisks ? (
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Status:</span>
                  <Badge variant="destructive">Risk Detected</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Severity:</span>
                  <Badge variant="secondary" className="capitalize">
                    {result.riskAssessment.severity}
                  </Badge>
                </div>
                <div>
                  <p className="font-medium">Risk Types:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {result.riskAssessment.riskTypes.map((risk, i) => (
                      <Badge key={i} variant="outline">{risk}</Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="font-medium">Explanation:</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {result.riskAssessment.explanation}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <span className="font-medium">Status:</span>
                <Badge className="bg-accent text-accent-foreground hover:bg-accent/80">No Risks Found</Badge>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
