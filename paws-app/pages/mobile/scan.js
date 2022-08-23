import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Center, Text } from '@mantine/core';
import Navbar from '../../components/navbar';
import styles from '../../styles/Mobile.module.css';

export default function ScanInput() {
    const [data, setData] = useState("No result");

    return (
        <>
            <Navbar title={'QR Scan'}/>
            <Center className={styles.topSpacer}>
                <Text weight={500}>Position QR code within the frame</Text>
            </Center>
            <QrReader
                onResult={(result, error) => {
                    if (!!result) {
                    setData(result?.text);
                    }

                    if (!!error) {
                    console.info(error);
                    }
                } 
                }
                //this is facing mode : "environment " it will open backcamera of the smartphone and if not found will 
                // open the front camera
                constraints={{ facingMode:  "user"  }}
                style={{ height: "100%" }}
            />
            <p>{data}</p>
        </>
    );
}