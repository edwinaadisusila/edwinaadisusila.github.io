import logo from './test.svg';
import './App.css';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import ToggleModeButton from './components/ToggleModeButton';

const theme = extendTheme({
  colors: {
    brand: {
      100: "#5C4033"
    }
  },
  styles: {
    global: (props) => ({
      "html, body": {
        background: mode("#FEFAE0", "#2D2424")(props),
        color: mode("#2D2424", "#F3DEBA")(props),
      },
    }),
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Box className="navbar">
          <img src={logo} id="logo"></img>
          <Box className="navbar-tabs">
            <ToggleModeButton />
          </Box>
          
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
