import { NativeBaseProvider } from "native-base";

import NavigationContainer from "features/navigation/NavigationContainer";
import { UserProvider } from "features/user/providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <NativeBaseProvider>
        <NavigationContainer />
      </NativeBaseProvider>
    </UserProvider>
  );
}
