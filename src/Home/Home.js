import React, {useEffect, useState} from 'react';
import {
  Box,
  Text,
  HStack,
  Stack,
  // useColorMode,
  useColorModeValue,
  Center,
  Heading,
  ScrollView,
  Circle,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {getIndonesiaData} from '../api/clients';

const CardData = ({name, totalCase}) => {
  const diverges = tname => {
    let choice;
    switch (tname) {
      case 'positif':
        choice = ['primary.400', 'user-injured', 'Kasus Positif'];
        break;
      case 'sembuh':
        choice = ['tertiary.400', 'user-alt', 'Kasus Sembuh'];
        break;
      case 'meninggal':
        choice = ['danger.400', 'user-alt-slash', 'Kasus Meninggal'];
        break;
      case 'dirawat':
        choice = ['yellow.400', 'pump-medical', 'Kasus Dirawat'];
        break;
      default:
        break;
    }
    return choice;
  };

  console.log(totalCase);

  return (
    <Box bg={diverges(name)[0]} px={3} py={6} rounded="md">
      <HStack space={'sm'}>
        <Circle size={55} bg="yellow.50">
          <FontAwesome5 name={diverges(name)[1]} size={20} />
        </Circle>
        <Center>
          <Box>
            <Heading fontSize={{base: 'lg', md: 'xl'}}>
              {diverges(name)[2]}
            </Heading>
            <Text>{totalCase}</Text>
          </Box>
        </Center>
      </HStack>
    </Box>
  );
};

const Home = () => {
  // const {toggleColorMode} = useColorMode();
  const [covData, setCovData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isError, setisError] = useState(false);

  const getData = async () => {
    try {
      const response = await getIndonesiaData();
      setCovData(response.data);
      setLoading(false);
    } catch (error) {
      setisError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box
      bg={useColorModeValue('yellow.50', 'coolGray.800')}
      py={4}
      px={4}
      safeArea
      flex={1}>
      <ScrollView>
        {loading ? (
          <Box>
            <Text>Loading</Text>
          </Box>
        ) : (
          <Stack space="sm">
            {Object.keys(covData[0]).map((item, idx) => {
              if (item !== 'name') {
                return (
                  <CardData
                    name={item}
                    key={idx}
                    totalCase={covData[0][item]}
                  />
                );
              }
            })}
          </Stack>
        )}
      </ScrollView>
    </Box>
  );
};

export default Home;
