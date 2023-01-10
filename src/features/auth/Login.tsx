import { Box, Text, Input, VStack, Icon, Image } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";

import Logo from "assets/icons/logo.svg";
import MainButton from "components/buttons/MainButton";
import ArrowIcon from "components/icons/Arrow";
import LockIcon from "components/icons/Lock";
import UsernameIcon from "components/icons/Username";

const Login: React.FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Box h={"100%"} alignItems="center" px={55} pt={125}>
        <Logo />
        <Text
          mt={44}
          fontWeight={"700"}
          fontSize={21}
          lineHeight={32}
          color="#000"
        >
          Login
        </Text>
        <VStack w={"100%"} mt={54} space={28}>
          <Input
            borderWidth={0}
            borderBottomWidth={1}
            borderBottomColor="#F0F4F5"
            borderBottomRadius={0}
            pb={14}
            InputLeftElement={<Icon as={<UsernameIcon />} ml={2} />}
          />
          <Input
            borderWidth={0}
            borderBottomWidth={1}
            borderBottomColor="#F0F4F5"
            borderBottomRadius={0}
            pb={14}
            InputLeftElement={<Icon as={<LockIcon />} ml={2} />}
          />
        </VStack>
        <MainButton
          mt={34}
          text="Login"
          rightIcon={<Icon as={<ArrowIcon />} ml={"8px"} />}
        />
        <Image src={"../../../assets/BG.png"} />
      </Box>
    </SafeAreaView>
  );
};

export default Login;
