import { Text } from "native-base";
import React from "react";

import MainButton from "components/buttons/MainButton";
import PageTemplate from "components/PageTemplate";

const TermsOfService: React.FC = () => {
  return (
    <PageTemplate>
      <Text fontWeight={700} fontSize={21} textAlign={"center"}>
        Disclaimer
      </Text>
      <Text mt={13} fontWeight="400" fontSize={14}>
        The information provided by the Zdaly Fuel Network Optimizer app is
        based on historical data. Data on Zdaly Light is updated once daily at
        8:00 a.m. eastern time. Any prospective information is based on that
        data and should not be relied on as a estimation of future performance.
        Any future product prices are the manufacturer's suggested retail price
        (MSRP) only. Sites are independent operators free to set their retail
        price
      </Text>
      <MainButton
        mt={24}
        px={86}
        text="I Accept"
        maxW="100%"
        alignItems={"center"}
      />
    </PageTemplate>
  );
};

export default TermsOfService;
