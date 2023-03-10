import { differenceInSeconds } from "date-fns";
import { Box, HStack, Circle } from "native-base";
import React, { useState, useRef, useEffect, useMemo } from "react";
import { StyleSheet, InteractionManager } from "react-native";

import { StackScreenProps } from "@react-navigation/stack";
import MainButton from "components/buttons/MainButton";
import ShortArrow from "components/icons/ShortArrow";
import PageTemplate from "components/PageTemplate";
import { MainText } from "components/StyledText";
import { RootStackParamList, Routes } from "features/navigation/types";
import { isNil } from "utils/index";

import useStations from "./providers/StationsProvider";

const StationDetails = ({
  route,
}: StackScreenProps<RootStackParamList, Routes.StationDetails>) => {
  const { id } = route.params;

  const { stationsMap, setStation } = useStations();
  const station = stationsMap?.[id];

  const activityDurationInSeconds = useMemo(
    () =>
      station?.activeFrom
        ? differenceInSeconds(new Date(), station.activeFrom)
        : 0,
    [station?.activeFrom]
  );
  const [activityCounter, setActivityCounter] = useState(
    activityDurationInSeconds
  );
  const timerRef = useRef<NodeJS.Timer>();

  const onStart = () => {
    if (!station) return;

    setStation(id, { activeFrom: station.activeFrom ? null : new Date() });
  };

  useEffect(() => {
    if (!station) return;

    if (isNil(station.activeFrom)) {
      clearInterval(timerRef.current);
      setActivityCounter(0);

      return;
    }

    InteractionManager.runAfterInteractions(() => {
      timerRef.current = setInterval(() => {
        setActivityCounter((prev) => prev + 1);
      }, 1000);
    });

    return () => clearInterval(timerRef.current);
  }, [station]);

  return (
    <PageTemplate title="Details">
      <Box width={"100%"}>
        <MainText fontWeight={"Bold"} fontSize={21}>
          Station Subscribed
        </MainText>
        <Box
          mt={15}
          px={25}
          py={"20px"}
          bgColor="#fff"
          borderRadius={16}
          style={styles.shadow}
        >
          <MainText fontWeight={"SemiBold"} fontSize={16} lineHeight={24}>
            ACTIVE FROM
          </MainText>
          <HStack
            justifyContent={"space-between"}
            alignItems="center"
            flexWrap="wrap"
          >
            <HStack mt={"13px"} space={"5px"}>
              <MainText fontWeight={"Bold"} fontSize={36} letterSpacing={0.4}>
                {activityCounter}
              </MainText>
              <MainText
                fontWeight={"SemiBold"}
                fontSize={11}
                letterSpacing={0.4}
                pt={"7px"}
              >
                seconds
              </MainText>
            </HStack>
            <MainButton
              text={station?.activeFrom ? "Stop" : "Start"}
              h={"38px"}
              px={"45px"}
              py={"5px"}
              onPress={onStart}
              textStyle={{ fontWeight: "SemiBold" }}
            />
          </HStack>
          <HStack mt={"4px"} space={11} alignItems="center">
            <MainText fontWeight={"SemiBold"} fontSize={10} letterSpacing={0.4}>
              MORE INFO
            </MainText>
            <Circle size={21} bg="#E2E8E1">
              <ShortArrow />
            </Circle>
          </HStack>
        </Box>
      </Box>
    </PageTemplate>
  );
};

export default StationDetails;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.08,
    shadowRadius: 10.32,

    elevation: 16,
  },
});
