import { z } from "zod";

const AI_PROVIDERS = [
	"openai",
	"anthropic",
	"vercel-ai-gateway",
	"openrouter",
	"mistral",
	"groq",
	"ollama",
	"openai-compatible",
] as const;

export type AIProvider = (typeof AI_PROVIDERS)[number];

export const aiProviderSchema = z.enum(AI_PROVIDERS);

export const AI_PROVIDER_DEFAULT_BASE_URLS: Record<AIProvider, string> = {
	openai: "https://api.openai.com/v1",
	anthropic: "https://api.anthropic.com/v1",
	"vercel-ai-gateway": "https://ai-gateway.vercel.sh/v3/ai",
	openrouter: "https://openrouter.ai/api/v1",
	mistral: "https://api.mistral.ai/v1",
	groq: "https://api.groq.com/openai/v1",
	ollama: "https://ollama.com/api",
	"openai-compatible": "",
};
