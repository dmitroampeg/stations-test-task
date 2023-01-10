import { Box, Text } from "native-base";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Logo from "assets/icons/logo.svg";
import MainButton from "components/buttons/MainButton";

const TermsOfService: React.FC = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Box flex={1} bg="#fff" alignItems={"center"} pt={top + 50}>
      <Logo />
      <Box
        flex={1}
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
        <Text fontWeight={700} fontSize={21} textAlign={"center"}>
          Disclaimer
        </Text>
        <Text mt={13} fontWeight="400" fontSize={14}>
          The information provided by the Zdaly Fuel Network Optimizer app is
          based on historical data. Data on Zdaly Light is updated once daily at
          8:00 a.m. eastern time. Any prospective information is based on that
          data and should not be relied on as a estimation of future
          performance. Any future product prices are the manufacturer's
          suggested retail price (MSRP) only. Sites are independent operators
          free to set their retail price
        </Text>
        <MainButton
          mt={24}
          px={86}
          text="I Accept"
          maxW="100%"
          alignItems={"center"}
        />
      </Box>
    </Box>
  );
};

export default TermsOfService;
