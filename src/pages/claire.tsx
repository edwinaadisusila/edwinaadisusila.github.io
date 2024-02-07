import { Box, Button} from '@chakra-ui/react'
import MyConfetti from '../components/MyConfetti';
import { useState } from 'react';

function Claire() {
  const [confetti, setConfetti] = useState(false);

  const triggerConfetti = () => {
    setConfetti(true);
  }

  return (
    <Box>
      <Button onClick={triggerConfetti}>Click for a surprise</Button>
      <MyConfetti confetti={confetti} setConfetti={setConfetti}/> 
    </Box>

  )
}

export default Claire;