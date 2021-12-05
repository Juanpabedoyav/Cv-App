import AppRouter from "../router/AppRouter";
import { GlobalStyles } from "../styles/GlobalStyles";
import { ChakraProvider } from "@chakra-ui/react";
function App() {
  return (
    <>
      <ChakraProvider>
        <GlobalStyles />
        <AppRouter />
      </ChakraProvider>
    </>
  );
}

export default App;
