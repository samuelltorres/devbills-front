import { zodResolver } from '@hookform/resolvers/zod';
import { InputMask } from '@react-input/mask';
import dayjs from 'dayjs';
import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { useFetchAPI } from '../../hooks/useFetchAPI';
import {
  createTransactionSchema,
  transactionsFilterSchema,
} from '../../validators/schemas';
import {
  CreateTransactionData,
  FinancialEvolutionFilterData,
  TransactionsFilterData,
} from '../../validators/types';
import { Button } from '../button';
import { Dialog } from '../dialog';
import { Input } from '../input';
import { Title } from '../title';
import {
  Container,
  Content,
  CurrencyInput,
  ErrorMessage,
  InputGroup,
  RadioForm,
  RadioGroup,
} from './styles';

export function CreateTransactionDialog() {
  const transactionsFilterForm = useForm<TransactionsFilterData>({
    defaultValues: {
      title: '',
      categoryId: '',
      beginDate: dayjs().startOf('month').format('DD/MM/YYYY'),
      endDate: dayjs().endOf('month').format('DD/MM/YYYY'),
    },
    resolver: zodResolver(transactionsFilterSchema),
  });
  const {
    categories,
    fetchCategories,
    createTransaction,
    fetchTransactions,
    fetchDashboard,
    fetchFinancialEvolution,
  } = useFetchAPI();
  const [open, setOpen] = useState(false);

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<CreateTransactionData>({
    defaultValues: {
      categoryId: 'null',
      title: '',
      amount: '',
      date: dayjs().format('DD/MM/YYYY'),
      type: 'income',
    },
    resolver: zodResolver(createTransactionSchema),
  });

  const financialEvolutionFilterForm = useForm<FinancialEvolutionFilterData>({
    defaultValues: {
      year: dayjs().get('year').toString(),
    },
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleClose = useCallback(() => {
    const { beginDate, endDate } = transactionsFilterForm.getValues();

    reset();
    setOpen(false);
    fetchTransactions(transactionsFilterForm.getValues());
    fetchDashboard({ beginDate, endDate });
    fetchFinancialEvolution(financialEvolutionFilterForm.getValues());
  }, [
    reset,
    fetchTransactions,
    transactionsFilterForm,
    fetchDashboard,
    fetchFinancialEvolution,
    financialEvolutionFilterForm,
  ]);

  const onSubmit = useCallback(
    async (data: CreateTransactionData) => {
      await createTransaction(data);
      handleClose();
    },
    [handleClose, createTransaction],
  );

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>Nova transação</Button>}
    >
      <Container>
        <Title
          title="Nova Transação"
          subtitle="Crie uma nova transação para seu controle financeiro"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Content>
            <InputGroup>
              <label>Categoria</label>
              <select {...register('categoryId')}>
                <option value="null">Selecione uma categoria...</option>
                {categories?.length &&
                  categories.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.title}
                    </option>
                  ))}
              </select>
              {errors.categoryId && (
                <ErrorMessage>{errors.categoryId.message}</ErrorMessage>
              )}
            </InputGroup>

            <div>
              <Input
                variant="black"
                label="Nome"
                placeholder="Nome da transação..."
                {...register('title')}
              />
              {errors.title && (
                <ErrorMessage>{errors.title.message}</ErrorMessage>
              )}
            </div>

            <InputGroup>
              <label>Valor</label>
              <CurrencyInput
                placeholder="R$ 0,00"
                format="currency"
                currency="BRL"
                {...register('amount')}
              />
              {errors.amount && (
                <ErrorMessage>{errors.amount.message}</ErrorMessage>
              )}
            </InputGroup>

            <div>
              <InputMask
                component={Input}
                mask="dd/mm/aaaa"
                replacement={{
                  d: /\d/,
                  m: /\d/,
                  a: /\d/,
                }}
                label="Data"
                variant="black"
                placeholder="dd/mm/aaaa"
                {...register('date')}
              />
              {errors.date && (
                <ErrorMessage>{errors.date.message}</ErrorMessage>
              )}
            </div>

            <RadioForm>
              <RadioGroup>
                <input
                  type="radio"
                  id="income"
                  value="income"
                  {...register('type')}
                />
                <label htmlFor="income">Receita</label>
              </RadioGroup>
              <RadioGroup>
                <input
                  type="radio"
                  id="expense"
                  value="expense"
                  {...register('type')}
                />
                <label htmlFor="expense">Gasto</label>
              </RadioGroup>
              {errors.type && (
                <ErrorMessage>{errors.type.message}</ErrorMessage>
              )}
            </RadioForm>
          </Content>

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
