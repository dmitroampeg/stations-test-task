import { Box, Pressable, Text } from "native-base";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Logo from "assets/icons/logo.svg";
import { RootStackParamList, Routes } from "features/navigation/types";

import ArrowIcon from "./icons/Arrow";

interface Props {
  title?: string;
  hasLogoIcon?: boolean;
  hasBackBtn?: boolean;
  children: React.ReactNode;
}

const PageTemplate: React.FC<Props> = ({
  title,
  hasLogoIcon = false,
  hasBackBtn = true,
  children,
}) => {
  const { top } = useSafeAreaInsets();
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, Routes>>();

  return (
    <Box flex={1} bg="#fff" alignItems={"center"} pt={top + 50}>
      {hasLogoIcon && <Logo />}
      <Box w={"100%"}>
        {title?.length && (
          <Text
            px={"50px"}
            mb={"56px"}
            fontWeight={"700"}
            fontSize={21}
            textAlign="center"
          >
            {title}
          </Text>
        )}
        {hasBackBtn && (
          <Pressable
            position={"absolute"}
            top={"12px"}
            left={"32px"}
            width={"22px"}
            height={"10px"}
            onPress={() => navigation.goBack()}
            style={{
              transform: [{ rotate: "180deg" }],
            }}
            hitSlop={{ top: 5, right: 5, bottom: 5, left: 5 }}
          >
            <ArrowIcon fill="#000" width={22} height={10} />
          </Pressable>
        )}
      </Box>
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
