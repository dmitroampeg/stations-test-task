import { NativeBaseProvider } from "native-base";

import { UserProvider } from "features/auth/providers/UserProvider";
import NavigationContainer from "features/navigation/NavigationContainer";

export default function App() {
  return (
    <UserProvider>
      <NativeBaseProvider>
        <NavigationContainer />
      </NativeBaseProvider>
    </UserProvider>
  );
}
