import { NativeBaseProvider } from "native-base";

import NavigationContainer from "./features/navigation/NavigationContainer";

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer />
    </NativeBaseProvider>
  );
}
