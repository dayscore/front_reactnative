import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles["container"]}>
      <Text style={styles["title"]}>
        DayScore
      </Text>
      <Text style={styles["subtitle"]}>
        Avalie seu dia
      </Text>
      <Link href="/onboarding" style={styles["link"]}>
        Começar
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  subtitle: {
    fontSize: 18,
    color: '#787878'
  },
  link: {
    marginTop: 20,
    fontSize: 18,
    color: '#0373fc',
    textDecorationLine: 'underline'
  }
})