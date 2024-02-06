import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useColorMode, Button } from "@chakra-ui/react"

function ToggleModeButton() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Button variant='ghost' colorScheme='brand' onClick={toggleColorMode}>
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  )
}

export default ToggleModeButton;