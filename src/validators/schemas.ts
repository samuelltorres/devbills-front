import { z } from 'zod';

export const createCategorySchema = z.object({
  title: z
    .string()
    .min(1, { message: 'O nome da categoria é obrigatório' })
    .max(50),
  color: z.string().regex(/^#[A-Fa-f0-9]{6}$/, {
    message: 'A cor deve estar no formato "#RRGGBB"',
  }),
});
