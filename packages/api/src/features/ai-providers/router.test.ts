import { describe, expect, it } from "vitest";
import { providerInput, updateProviderInput } from "./inputs";

describe("AI provider router input", () => {
	it("does not default baseURL on switch-only updates", () => {
		expect(updateProviderInput.parse({ id: "provider-1", enabled: false })).not.toHaveProperty("baseURL");
	});

	it("accepts a supported provider", () => {
		const input = { label: "Groq", provider: "groq", model: "llama-3.3-70b", apiKey: "key" };

		expect(providerInput.safeParse(input).success).toBe(true);
	});

	it.each([
		"cerebras",
		"cohere",
		"deepseek",
		"fireworks",
		"gemini",
		"perplexity",
		"togetherai",
		"xai",
	])("rejects removed provider %s", (provider) => {
		const input = { label: "Removed", provider, model: "some-model", apiKey: "key" };

		expect(providerInput.safeParse(input).success).toBe(false);
		expect(updateProviderInput.safeParse({ id: "provider-1", provider }).success).toBe(false);
	});
});
