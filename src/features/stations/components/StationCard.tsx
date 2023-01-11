import { HStack, Box } from "native-base";
import React from "react";

import StationIcon from "assets/icons/station.svg";
import { MainText } from "components/StyledText";

import { Station } from "../types";

const StationCard: React.FC<Station> = ({ name, id }) => (
  <HStack alignItems={"center"} space={27} flex={1} width="100%">
    <StationIcon />
    <Box>
      <MainText fontWeight={"SemiBold"} fontSize={18}>
        {id}
      </MainText>
      <MainText fontWeight={"SemiBold"} fontSize={14} color="#ADB7C6">
        {name}
      </MainText>
    </Box>
  </HStack>
);

export default StationCard;
