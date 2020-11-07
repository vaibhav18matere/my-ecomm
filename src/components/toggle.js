import react from 'react';
import {useColorMode,Button} from '@chakra-ui/core';

function ColorModeExample() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
      <header>
        <Button onClick={toggleColorMode}>
          Toggle {colorMode === "light" ? "Dark" : "Light"}
        </Button>
      </header>
    );
  }

  export default ColorModeExample;