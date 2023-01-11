import { Text, HStack, Box } from "native-base";
import React from "react";

import StationIcon from "assets/icons/station.svg";

import { Station } from "../types";

const StationCard: React.FC<Station> = ({ name, id }) => (
  <HStack alignItems={"center"} space={27} flex={1} width="100%">
    <StationIcon />
    <Box>
      <Text fontWeight={600} fontSize={18}>
        {id}
      </Text>
      <Text fontWeight={600} fontSize={14} color="#ADB7C6">
        {name}
      </Text>
    </Box>
  </HStack>
);

export default StationCard;
