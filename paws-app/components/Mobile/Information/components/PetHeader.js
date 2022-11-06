import { Container, Text } from '@mantine/core';

export default function PetHeader({ name }) {
  return (
    <Container my='20px'>
      <Text weight={600} size='xl' align='center'>
        Hello! My name is
      </Text>
      <Text transform='uppercase' weight={700} size='30px' align='center'>{name}</Text>
    </Container>
  );
}