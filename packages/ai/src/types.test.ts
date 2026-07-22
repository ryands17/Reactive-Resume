import { describe, expect, it } from "vitest";
import { AI_PROVIDER_DEFAULT_BASE_URLS, aiProviderSchema } from "./types";

const supportedProviderDefaults = {
	openai: "https://api.openai.com/v1",
	anthropic: "https://api.anthropic.com/v1",
	"vercel-ai-gateway": "https://ai-gateway.vercel.sh/v3/ai",
	openrouter: "https://openrouter.ai/api/v1",
	mistral: "https://api.mistral.ai/v1",
	groq: "https://api.groq.com/openai/v1",
	ollama: "https://ollama.com/api",
	"openai-compatible": "",
} as const;

const removedProviders = [
	"cerebras",
	"cohere",
	"deepseek",
	"fireworks",
	"gemini",
	"perplexity",
	"togetherai",
	"xai",
] as const;

describe("AI provider types", () => {
	it("accepts the supported providers with their default base URLs", () => {
		for (const [provider, baseURL] of Object.entries(supportedProviderDefaults)) {
			expect(aiProviderSchema.parse(provider)).toBe(provider);
			expect(AI_PROVIDER_DEFAULT_BASE_URLS[provider as keyof typeof AI_PROVIDER_DEFAULT_BASE_URLS]).toBe(baseURL);
		}
	});

	it("covers exactly the supported providers", () => {
		expect(Object.keys(AI_PROVIDER_DEFAULT_BASE_URLS).sort()).toEqual(Object.keys(supportedProviderDefaults).sort());
	});

	it("rejects removed providers", () => {
		for (const provider of removedProviders) {
			expect(aiProviderSchema.safeParse(provider).success).toBe(false);
		}
	});
});
