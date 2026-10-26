import { z } from "zod";

// Browser sessions must have a finite lifetime. The existing defaults (300s
// session, 90s code submission) fit within this upper bound.
const timeout = z.number().int().positive().max(600_000).optional();

export const volcengineLoginSchema = z.object({
  phone: z.string().trim().max(64).optional(),
  timeout,
});

export const volcengineCodeSchema = z.object({
  code: z.string().trim().min(1).max(32),
  captcha: z.string().trim().max(128).optional(),
  timeout,
});

export const volcengineIdentitySchema = z.object({
  index: z.number().int().min(0).max(Number.MAX_SAFE_INTEGER),
  timeout,
});
