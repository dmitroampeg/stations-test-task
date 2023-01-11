import { NativeBaseProvider } from "native-base";

import NavigationContainer from "features/navigation/NavigationContainer";
import { StationsProvider } from "features/stations/providers/StationsProvider";
import { UserProvider } from "features/user/providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <StationsProvider>
        <NativeBaseProvider>
          <NavigationContainer />
        </NativeBaseProvider>
      </StationsProvider>
    </UserProvider>
  );
}
