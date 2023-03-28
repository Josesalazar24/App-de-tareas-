import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();
    console.log(e);
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    props.onSubmit(tareaNueva);
  };

  return (
    <form>
      <Input
        placeholder="Escribe una Tarea"
        h={"50px"}
        w="350px"
        px={"16px"}
        borderRadius="4px"
        border={"2px solid #00471b"}
        outline="none"
        fontSize={"18px"}
        name="texto"
        type={"text"}
        onChange={manejarCambio}
      />
      <Button
        onClick={manejarEnvio}
        h={"54px"}
        p={"16px"}
        fontSize="18px"
        borderRadius={" 4px "}
        cursor="pointer"
        backgroundColor={"#1b1b32"}
        color="#fff"
        border="none"
        outline={"none"}
        textTransform="capitalize"
      >
        Agregar Tarea
      </Button>
    </form>
  );
}

export default TareaFormulario;
