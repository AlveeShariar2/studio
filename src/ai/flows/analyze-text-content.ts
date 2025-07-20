'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing text content to flag potential risks such as cyberbullying or inappropriate content.
 *
 * - analyzeTextContent - The primary function exported to be used in the application.
 * - AnalyzeTextContentInput - The Zod schema for the input.
 * - AnalyzeTextContentOutput - The Zod schema for the output.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeTextContentInputSchema = z.object({
  text: z.string().describe('The text content to analyze for potential risks.'),
});
export type AnalyzeTextContentInput = z.infer<typeof AnalyzeTextContentInputSchema>;

const AnalyzeTextContentOutputSchema = z.object({
  riskAssessment: z.object({
    hasRisks: z.boolean().describe('Whether the text content contains potential risks.'),
    riskTypes: z.array(z.string()).describe('The types of risks identified in the text content (e.g., "Cyberbullying", "Hate Speech").'),
    severity: z.enum(['low', 'medium', 'high']).describe('The severity of the identified risks.'),
    explanation: z.string().describe('A detailed explanation of the identified risks.'),
  }).describe('The risk assessment of the text content.'),
});
export type AnalyzeTextContentOutput = z.infer<typeof AnalyzeTextContentOutputSchema>;

const analyzeTextContentPrompt = ai.definePrompt({
  name: 'analyzeTextContentPrompt',
  input: { schema: AnalyzeTextContentInputSchema },
  output: { schema: AnalyzeTextContentOutputSchema },
  prompt: `You are an AI assistant designed to analyze text content for potential risks, such as cyberbullying, hate speech, inappropriate content, or other harmful elements.

Analyze the following text and determine if it contains any risks. Provide a detailed risk assessment, including:
- the types of risks identified,
- the severity of the risks (low, medium, or high),
- and a detailed explanation.

Text: {{{text}}}

Respond in JSON format.`,
});

const analyzeTextContentFlow = ai.defineFlow(
  {
    name: 'analyzeTextContentFlow',
    inputSchema: AnalyzeTextContentInputSchema,
    outputSchema: AnalyzeTextContentOutputSchema,
  },
  async (input) => {
    const { output } = await analyzeTextContentPrompt(input);
    if (!output) {
      throw new Error('AI prompt failed to return an output for the risk analysis.');
    }
    return output;
  }
);

export async function analyzeTextContent(input: AnalyzeTextContentInput): Promise<AnalyzeTextContentOutput> {
  return analyzeTextContentFlow(input);
}
