import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        DayScore App
      </Text>
      <Text
        style={{
          marginTop: 20, fontSize: 16,
          color: '#888',
        }}
      >
        Welcome to your app!
      </Text>
    </View>
  );
}
