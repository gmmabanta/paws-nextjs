import { Box, Container, Text } from '@mantine/core';

export default function PetDetails({ animal }) {
  function formatDateInput(date) {
    var date_components = date.split("/");
    var day = date_components[0];
    var month = date_components[1];
    var year = date_components[2];
    return new Date(year, month - 1, day);
  }

  function formatBirthdate (birthdate)  {
    if (birthdate) {
      const date = formatDateInput(birthdate)
      return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }); // @TODO: check if locale is correct
    }
  }

  function computeAge (birthdate) {
    if (birthdate) {
      const date = formatDateInput(birthdate);
      const year = new Date().getFullYear() - date.getFullYear();
      return year;
    }
  }

  function fullGender (sex) {
    return sex === 'F' ? 'Female' : 'Male'; 
  }

  return (
    <Container style={{ backgroundColor: '#E4F2E4', color: 'black', borderRadius: 30, width: '100%', maxWidth: '500px', gap: '20px', display: 'grid' }} p={'20px'} mb={'20px'}>
      <Box>
        <Text weight={400} size='xl' align='center'>Age</Text>
        <Text weight={700} size='xl' align='center'>{computeAge(animal.birthdate) || 'N/A'}</Text>
      </Box>
      <Box>
        <Text weight={400} size='xl' align='center'>Birthdate</Text>
        <Text weight={700} size='xl' align='center'>{formatBirthdate(animal.birthdate) || 'N/A'}</Text>
      </Box>
      <Box>
        <Text weight={400} size='xl' align='center'>Gender</Text>
        <Text weight={700} size='xl' align='center'>{fullGender(animal.sex) || 'N/A'}</Text>
      </Box>
      <Box>
        <Text weight={400} size='xl' align='center'>Weight</Text>
        <Text weight={700} size='xl' align='center'>{animal.initial_weight || 'N/A'}</Text>
      </Box>
      <Box>
        <Text weight={400} size='xl' align='center'>Breed</Text>
        <Text weight={700} size='xl' align='center'>{animal.breed.breed || 'N/A'}</Text>
      </Box>
    </Container>
  );
}