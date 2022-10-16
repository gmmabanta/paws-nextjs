import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Center, Text } from '@mantine/core';
import Link from 'next/link';
import { setNavbarTitle } from '../../components/shared/reducers/navbar';
import { useDispatch } from 'react-redux';

import styles from '../../styles/Mobile.module.css';


export default function ScanInput() {
    const dispatch = useDispatch();
    const [data, setData] = useState("No result");

    useEffect(()=>{
        dispatch(setNavbarTitle('QR Scan'));
    });

    return (
        <>
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
                constraints={{ facingMode:  "environment"  }}
                style={{ height: "100%" }}
            />
            <p>{data}</p>
            <Text >Go to <Link href="/mobile/222111">Animal Page</Link></Text>
        </>
    );
}