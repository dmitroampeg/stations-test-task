import { Text } from "native-base";
import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import useUser from "features/user/providers/UserProvider";
import TermsOfService from "features/user/TermsOfService";

import { Routes } from "./types";

const Stack = createStackNavigator();

export default () => {
  const { user } = useUser();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {user?.hasAcceptedTerms ? (
        <Stack.Screen
          name={Routes.Stations}
          component={() => <Text>Stations</Text>}
        />
      ) : (
        <Stack.Screen name={Routes.TermsOfService} component={TermsOfService} />
      )}
    </Stack.Navigator>
  );
};
