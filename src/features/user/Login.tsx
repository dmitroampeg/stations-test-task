import { Box, Text, Input, VStack, Icon, FormControl } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import Logo from "assets/icons/logo.svg";
import MainButton from "components/buttons/MainButton";
import ArrowIcon from "components/icons/Arrow";
import LockIcon from "components/icons/Lock";
import UsernameIcon from "components/icons/Username";
import useUser, {
  USER_STORAGE_KEY,
} from "features/user/providers/UserProvider";

const Login: React.FC = () => {
  const { login, setUser } = useUser();

  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [error, setError] = useState<string>();

  const handleLogin = async () => {
    if (!email || !password) return;

    try {
      const { data } = await login(email, password);
      const user = { email, ...data };

      setUser(user);
      await AsyncStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    } catch (e: any) {
      setError(e.response?.data.error as string);
    }
  };

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
        <FormControl>
          <VStack w={"100%"} mt={54} space={28}>
            <Input
              value={email}
              onChangeText={(text) => setEmail(text)}
              variant="underlined"
              borderBottomColor="#F0F4F5"
              pb={14}
              InputLeftElement={
                <Icon as={<UsernameIcon />} mb={1} mr={1} ml={2} />
              }
            />
            <Input
              value={password}
              onChangeText={(text) => setPassword(text)}
              variant="underlined"
              borderBottomColor="#F0F4F5"
              pb={14}
              InputLeftElement={<Icon as={<LockIcon />} m={1} ml={2} />}
              type={"password"}
            />
            {error?.length && <Text color={"red.500"}>{error}</Text>}
          </VStack>

          <MainButton
            mt={34}
            text="Login"
            rightIcon={<Icon as={<ArrowIcon />} ml={"8px"} />}
            onPress={handleLogin}
          />
        </FormControl>
      </Box>
    </SafeAreaView>
  );
};

export default Login;
