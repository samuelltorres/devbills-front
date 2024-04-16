import { z } from 'zod';

import { createCategorySchema } from './schemas';

export type CreateCategoryData = z.infer<typeof createCategorySchema>;
