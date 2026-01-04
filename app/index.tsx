import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: "white"
        }}
      >
        DayScore
      </Text>
      <Text
        style={{
          fontSize: 18,
          color: '#ccc',
        }}
      >
        (antigo YearTracker)
      </Text>
      <Text
        style={{
          marginTop: 20, fontSize: 16,
          color: '#888',
        }}
      >
        Avalie seu dia
      </Text>
      <Link href="/onboarding"
        style={{
          marginTop: 30,
          fontSize: 18,
          color: 'blue',
        }}
      >
        Começar
      </Link>
    </View>
  );
}
