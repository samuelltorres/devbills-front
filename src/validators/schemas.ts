import { z } from 'zod';

export const createCategorySchema = z.object({
  name: z.string().min(1, 'O nome da categoria é obrigatório').max(50),
  color: z
    .string()
    .regex(/^#[0-9A-Fa-f]{6}$/, 'A cor deve estar no formato "#RRGGBB"'),
});
