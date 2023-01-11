import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

import { NavigationContainer } from "@react-navigation/native";
import useUser from "features/user/providers/UserProvider";

import { isNil } from "../../utils";

import LoggedInStask from "./LoggedInStask";
import LoggedOutStack from "./LoggedOutStack";

const FONTS = {
  "Poppins-Regular": require("assets/fonts/Poppins-Regular.ttf"),
  "Poppins-Medium": require("assets/fonts/Poppins-Medium.ttf"),
  "Poppins-Bold": require("assets/fonts/Poppins-Bold.ttf"),
  "Poppins-SemiBold": require("assets/fonts/Poppins-SemiBold.ttf"),
};

export default () => {
  const { user } = useUser();

  const [isLoaded] = useFonts(FONTS);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
  }, []);

  const hideSplash = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  if (!isLoaded) return null;

  return (
    <NavigationContainer onReady={hideSplash}>
      {!isNil(user) ? <LoggedInStask /> : <LoggedOutStack />}
    </NavigationContainer>
  );
};
