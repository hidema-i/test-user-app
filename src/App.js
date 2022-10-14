import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Routers } from "./Routers";
import Header from "./organisms/layout/Header";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Routers />
    </ChakraProvider>
  );
}

export default App;
