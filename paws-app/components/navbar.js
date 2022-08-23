import { Header, UnstyledButton, Center,Text, Group, Title } from '@mantine/core';
import { ChevronLeft } from 'tabler-icons-react';

export default function Navbar(props) {
  return (
    <Header height={60} p="xs" style={{backgroundColor: '#458642'}}>
      <Group>
        <UnstyledButton>
          <ChevronLeft size={40} strokeWidth={1.5} color={'white'}/>
        </UnstyledButton>
          <Title order={3}><Text transform='uppercase' weight={700} align='center' color={'white'}>{props.title}</Text></Title>
      </Group>
    </Header>
  );
}