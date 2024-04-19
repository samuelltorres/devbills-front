import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useFetchAPI } from '../../hooks/useFetchAPI';
import { theme } from '../../styles/theme';
import { createCategorySchema } from '../../validators/schemas';
import { CreateCategoryData } from '../../validators/types';
import { Button } from '../button';
import { ErrorMessage } from '../create-transaction-dialog/styles';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import { Container } from './styles';

export function CreateCategoryDialog() {
  const { createCategory, fetchCategories } = useFetchAPI();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCategoryData>({
    defaultValues: {
      title: '',
      color: theme.zinc[500],
    },
    resolver: zodResolver(createCategorySchema),
  });

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(
    async (data: CreateCategoryData) => {
      await toast.promise(createCategory(data), {
        loading: 'Carregando...',
        success: () => {
          return 'Categoria criada com sucesso!';
        },
        error: 'Algo deu errado',
      });
      handleClose();
      await fetchCategories();
    },
    [handleClose, createCategory, fetchCategories],
  );

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova categoria</Button>}
    >
      <Container>
        <Title
          title="Nova Categoria"
          subtitle="Crie uma nova categoria para suas transações"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <Input
                label="Nome"
                placeholder="Nome da categoria..."
                variant="black"
                {...register('title')}
              />
              {errors.title && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
              )}
            </div>
            <Input
              label="Cor"
              type="color"
              variant="black"
              {...register('color')}
            />
          </div>
          <footer>
            <Button variant="outline" type="button" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit">Cadastrar</Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
