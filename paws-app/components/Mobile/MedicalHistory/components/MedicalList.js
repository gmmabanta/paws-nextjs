import { Center, Text, Container, Button } from '@mantine/core';
import Link from 'next/link';
import MedicalItem from '../components/MedicalItem';

export default function MedicalList() {
  return (
    <>
      <MedicalItem title={"Procedure A"} content={"May 27, 2022"}/>
      <MedicalItem title={"Procedure B"} content={"May 28, 2022"}/>
      <MedicalItem title={"Procedure C"} content={"May 29, 2022"}/>
    </>
  );
}