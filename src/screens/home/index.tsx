import { InputMask } from '@react-input/mask';

import { Button } from '../../components/button';
import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { Input } from '../../components/input';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { Balance, Filters, Header, InputGroup, Main, Section } from './styles';

export function Home() {
  return (
    <>
      <Header>
        <Logo />
        <div>
          <Button variant="outline">Nova transação</Button>
          <Button>Nova categoria</Button>
        </div>
      </Header>
      <Main>
        <Section>
          <Filters>
            <Title title="Saldo" subtitle="Receitas e despesas no período" />
            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{
                  d: /\d/,
                  m: /\d/,
                  y: /\d/,
                }}
                variant="black"
                label="Início"
                placeholder="dd/mm/aaaa"
              />
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{
                  d: /\d/,
                  m: /\d/,
                  y: /\d/,
                }}
                variant="black"
                label="Fim"
                placeholder="dd/mm/aaaa"
              />
              <ButtonIcon />
            </InputGroup>
          </Filters>
          <Balance>
            <Card title="Saldo" amount={1000000} variant="balance" />
            <Card title="Receitas" amount={1000000} variant="incomes" />
            <Card title="Gastos" amount={1000000} variant="expenses" />
          </Balance>
        </Section>
      </Main>
    </>
  );
}
