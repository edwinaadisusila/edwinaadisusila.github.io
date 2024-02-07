import './App.css';
import { Box, ChakraProvider, extendTheme, Image } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import ToggleModeButton from './components/ToggleModeButton';
import logo from './edwina_logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Claire from './pages/claire';

const colors = {
  font: {
    lightMode: "#2D2424",
    darkMode: "#FFFFFF",
  },
  background: {
    lightMode: "#FFFFFF",
    darkMode: "#2D2424",
  },
  brand: {
    100: "#FFFFFF",
    900: "#2D2424",
  }
}

const theme = extendTheme({
  colors: colors,

  styles: {
    global: (props: any) => ({
      "html, body": {
        background: mode(colors.background.lightMode, colors.background.darkMode)(props),
        color: mode(colors.font.lightMode, colors.font.darkMode)(props),
      },
    }),
  },
})

function App() {


  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Box>
        <Box className="navbar">
            <Image src={logo.toString()} id="logo" alt="edwina logo"></Image>
          <Box className="navbar-tabs">
            <ToggleModeButton />
          </Box>
        </Box>
      </Box>
      <Link to="/">Home</Link>
      <Link to="/claire">Bdya</Link>

      
      <Routes>
          <Route path="claire" element={<Claire />}>
            
          </Route>
          </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  );
}

export default App;
