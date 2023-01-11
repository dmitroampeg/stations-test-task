import { Box } from "native-base";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Logo from "assets/icons/logo.svg";

interface Props {
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({ children }) => {
  const { top } = useSafeAreaInsets();

  return (
    <Box flex={1} bg="#fff" alignItems={"center"} pt={top + 50}>
      <Logo />
      <Box
        flex={1}
        width="100%"
        bg="#fff"
        borderTopRadius={50}
        px={35}
        pt={33}
        mt={43}
        alignItems={"center"}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 8,
          },
          shadowOpacity: 0.44,
          shadowRadius: 10.32,

          elevation: 16,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageTemplate;
