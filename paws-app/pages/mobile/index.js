import Image from 'next/image';
import Link from 'next/link';

import { Center, Button, Text, Title } from '@mantine/core';
import styles from '../../styles/Mobile.module.css';

export default function MobileLandingPage() {
    return (
    <>
        <div className={`${styles.topSpacer}`}>
            <Center>
                <div className={`${styles.logoContainer}`}>
                    <Image src={'/paws_logo.png'} width={280} height={280} />
                </div>
            </Center>
            <Center>
                <Title order={3}><Text transform='uppercase' weight={700} align='center'>Welcome to PAWS</Text></Title>
            </Center>
            <Center>
                <div className={styles.textSubheader}>
                    <Text weight={500} align='center'>Learn more about our shelter animals with a quick qr code scan.</Text>
                </div>
            </Center>
        </div>
        <Center>
            <div className={`${styles.buttonSpacer}`}>
                <Link href='/mobile/login'>
                    <Button 
                        radius='xl' 
                        size='lg' 
                        fullWidth 
                        uppercase 
                        style={{ backgroundColor: '#458642'}}
                        onClick={() =>{
                            
                        }}
                    >Login</Button>
                </Link>
            </div>
        </Center>
    </>
    );
}