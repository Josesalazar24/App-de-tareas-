import { HStack, Text, Icon } from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../hojas-de-estilo/tarea.css";

function Tarea({ texto, completada, id, completarTarea, eliminarTarea }) {
  return (
    <HStack
      justifyContent={"space-between"}
      align="center"
      w="500px"
      minH="65px"
      backgroundColor={"#1b1b32"}
      color="white"
      borderRadius="7px"
      border="1px solid white"
      cursor={"pointer"}
      p="8px 15px 8px 20px"
      margin={"5px 0px"}
      fontSize={"20px"}
      overflowWrap="anywhere"
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <Text onClick={() => completarTarea(id)}>{texto}</Text>
      <Icon boxSize={"30px"} onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle />
      </Icon>
    </HStack>
  );
}

export default Tarea;
