import { Button, Input } from "@app/ui-kit";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
//import { verifyInstallation } from "nativewind";

import "../global.css";

export default function App() {
  //verifyInstallation();

  return (
    <View style={styles.container}>
      <Text className="border-secondary min-w-96 rounded-md border-8 border-solid">
        Open ups App.tsx to start working on your app!
      </Text>
      <Input />
      <Button label="My Button" color="primary" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
