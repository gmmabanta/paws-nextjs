import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Center, Text } from '@mantine/core';
import { useRouter } from 'next/router';
import styles from '../../styles/Mobile.module.css';

export default function ScanInput() {
  const router = useRouter();
  const [data, setData] = useState();

  return (
    <>
      <Center className={styles.topSpacer}>
        <Text weight={500}>Position QR code within the frame</Text>
      </Center>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setData(result?.text);
            router.push(`/mobile/${result?.text}`);
          }
        }}
        constraints={{ facingMode:  "environment"  }}
        style={{ height: "100%" }}
      />
    </>
  );
}