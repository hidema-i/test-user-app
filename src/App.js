import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Routers } from "./Routers";

function App() {
  return (
    <ChakraProvider>
      <Routers />
    </ChakraProvider>
  );
}

export default App;
