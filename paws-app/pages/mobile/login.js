import { useState } from 'react';
import Link from 'next/link';

import { Button, Container, Text, Center, TextInput } from '@mantine/core';
import Navbar from '../../components/navbar';
import styles from '../../styles/Mobile.module.css';

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  return (
    <>
      <Navbar title={'Login'}/>
      <Center className={styles.topSpacer}>
        <Text weight={500}>Enter your credentials</Text>
      </Center>
      <Center>
        <Container style={{backgroundColor: '#E4F2E4', borderRadius: 30, width: '100%', maxWidth: '500px' }} py={30} m={15}>
          <TextInput 
            placeholder="Username" 
            label="Username" 
            required 
            radius="xl" 
            size="md" 
            m={10} 
            styles={{
              input: { 
                '&:focus': {
                  border: '1px solid #458642'
                }, 
              }
            }}
            value={username} 
            onChange={(event) => setUsername(event.currentTarget.value)}
          />
          <TextInput 
            placeholder="Password" 
            label="Password" 
            required 
            radius="xl" 
            size="md" 
            m={10} 
            styles={{
              input: { 
                '&:focus': {
                  border: '1px solid #458642'
                }, 
              }
            }}
            value={password} 
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
          <Center>
            <Link href={'/mobile/23342/rescue-story'}>
              <Button 
                radius='xl' 
                size='md' 
                uppercase 
                style={{ backgroundColor: '#458642'}} 
                m={10}
                onClick={() =>{

                }}
              >Login</Button>
            </Link>
          </Center>
        </Container>
      </Center>
      
    </>
  );
}