import { Text, VStack, Stack } from "@chakra-ui/react";
import ListaDeTareas from "./componentes/ListaDeTareas";

function App() {
  return (
    <Stack
      h={"100vh"}
      w="full"
      color={"white"}
      backgroundColor={"#1b1b32"}
      alignItems="center"
      justifyContent="center"
    >
      <Text margin={0} fontSize="50px" textAlign={"center"} py="20px">
        Mis Tareas
      </Text>

      <VStack
        w={"600px"}
        minH={"500px"}
        h="full"
        backgroundColor="#d0d5d5"
        p="20px"
        margin={"10px"}
        borderRadius="25px"
        color={"#1b1b32"}
      >
        <Text as={"b"} fontSize="30px">
          Lista de Tareas
        </Text>
        <VStack pt={"20px"}>
          <ListaDeTareas />
        </VStack>
      </VStack>
    </Stack>
  );
}

export default App;
