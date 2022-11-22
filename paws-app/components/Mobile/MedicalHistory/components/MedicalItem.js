import { Center, Text, Container, Button } from '@mantine/core';
import Link from 'next/link';

export default function MedicalItem({title, content}) {
  return (
    <Center>
      <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }} py={30} m={15}>
        <Text weight={700} transform='uppercase' style={{ textAlign: 'center' }}>
        {title}  
        </Text>
        <Text style={{ textAlign: 'center' }}>
        {content}
        </Text>
      </Container>
    </Center>

    
  );
}