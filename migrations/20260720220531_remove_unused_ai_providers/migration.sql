-- Custom SQL migration file, put your code below! --

-- Remove stored configs for AI providers that are no longer supported.
-- Their provider names would fail enum validation on read and break provider listing.
DELETE FROM "ai_providers"
WHERE "provider" IN (
	'cerebras',
	'cohere',
	'deepseek',
	'fireworks',
	'gemini',
	'perplexity',
	'togetherai',
	'xai'
);
