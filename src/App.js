import logo from './edwina_logo.svg';
import './App.css';
import { Box, Button, ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from "@chakra-ui/theme-tools"
import ToggleModeButton from './components/ToggleModeButton';
import MyConfetti from './components/MyConfetti';
import { useState } from 'react';

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
    global: (props) => ({
      "html, body": {
        background: mode(colors.background.lightMode, colors.background.darkMode)(props),
        color: mode(colors.font.lightMode, colors.font.darkMode)(props),
      },
    }),
  },
})

function App() {
  const [confetti, setConfetti] = useState(false);

  const triggerConfetti = () => {
    setConfetti(true);
  }

  return (
    <ChakraProvider theme={theme}>
      <Box>
        <Box className="navbar">
            <img src={logo} id="logo" alt="edwina logo"></img>
          <Box className="navbar-tabs">
            <ToggleModeButton />
          </Box>
        </Box>
      </Box>
      <Box>
        <Button onClick={triggerConfetti}>Click for a surprise</Button>
        <MyConfetti confetti={confetti} setConfetti={setConfetti}/> 
      </Box>
    </ChakraProvider>
  );
}

export default App;
