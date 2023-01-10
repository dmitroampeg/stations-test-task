import { NavigationContainer } from "@react-navigation/native";
import useUser from "features/user/providers/UserProvider";

import { isNil } from "../../utils";

import LoggedInStask from "./LoggedInStask";
import LoggedOutStack from "./LoggedOutStack";

export default () => {
  const { user } = useUser();

  return (
    <NavigationContainer>
      {!isNil(user) ? <LoggedInStask /> : <LoggedOutStack />}
    </NavigationContainer>
  );
};
