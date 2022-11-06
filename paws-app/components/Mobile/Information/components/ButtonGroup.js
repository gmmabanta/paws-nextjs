import Link from 'next/link';
import { Button, Center } from '@mantine/core';
import { useRouter } from 'next/router';

export default function ButtonGroup() {
  const router = useRouter();

  return (
    <>
      <Center>
        <Link href={`/mobile/${router.query.id}/rescue-story`}>
        <Button 
            radius='xl' 
            size='md' 
            uppercase 
            style={{backgroundColor: '#458642', borderRadius: 30, width: '100%', maxWidth: '500px' }}
            m={10}
            onClick={() =>{
            }}
        >View Rescue Story</Button>
        </Link>
      </Center>
      <Center>
        <Link href={`/mobile/${router.query.id}/medical-info`}>
        <Button 
            radius='xl' 
            size='md' 
            uppercase 
            style={{backgroundColor: '#458642', borderRadius: 30, width: '100%', maxWidth: '500px' }}
            m={10}
            onClick={() =>{
            }}
        >View Medical History</Button>
        </Link>
      </Center>
      <Center>
        <Link href={'/mobile/login'}>
        <Button 
            radius='xl' 
            size='md' 
            uppercase 
            style={{backgroundColor: 'red', borderRadius: 30, width: '100%', maxWidth: '500px' }}
            m={10}
            onClick={() =>{
            }}
        >I am a Veterinarian</Button>
        </Link>
      </Center>
    </>
  );
}