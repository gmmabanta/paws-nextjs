import ButtonGroup from '../../../components/Mobile/Information/components/ButtonGroup';
import PetDetails from '../../../components/Mobile/Information/components/PetDetails';
import PetHeader from '../../../components/Mobile/Information/components/PetHeader';

export default function PetInformationPage({ animal }) {
  return (
    <>
      <PetHeader name={animal.name}/>
      <PetDetails animal={animal} />
      <ButtonGroup />
    </>
  );
}