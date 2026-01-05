import { StyleSheet, Text, View, Alert, Appearance, TextInput } from "react-native";
import Slider from "@react-native-community/slider";
import React, { useState } from "react";
import { Button } from "@react-navigation/elements";

const colorScheme = Appearance.getColorScheme();

export default function Index() {
  const [sliderValue, setSliderValue] = useState(3);
  const [note, setNote] = useState("");

  return (
    <View style={styles["container"]}>
      <Text style={styles["title"]}>
        DayScore
      </Text>
      <Text style={styles["subtitle"]}>
        Como foi seu dia?
      </Text>

      <Slider
        style={{ width: 300, height: 40, marginTop: 40 }}
        minimumValue={0}
        maximumValue={6}
        minimumTrackTintColor="#0373fc"
        maximumTrackTintColor="#7a7a7a7a"
        step={1}
        value={sliderValue}
        onValueChange={(value) => setSliderValue(value)}
      />
      <Text style={styles["subtitle"]}>
        {["Horrível", "Muito Ruim", "Ruim", "Normal", "Bom", "Muito Bom", "Excelente"][sliderValue]}
      </Text>

      <TextInput
        placeholder="Adicione uma nota (opcional)..."
        multiline={false}
        value={note}
        onChangeText={(value) => setNote(value)}
        style={{marginTop: 20, color: colorScheme === "dark" ? "white" : "black", borderColor: '#7a7a7a7a', borderWidth: 1, width: 300, padding: 10, borderRadius: 12}}
      />

      <Button 
        color="#0373fc"
        style={{ marginTop: 40 }}
        onPressOut={() => {
          Alert.alert(`Você registrou um dia ${["Horrível", "Muito Ruim", "Ruim", "Normal", "Bom", "Muito Bom", "Excelente"][sliderValue]}${note ? ` com a nota: ${note}` : ""}`);
        }}
      >
        Registrar Dia
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colorScheme === "dark" ? "black" : "white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colorScheme === "dark" ? "white" : "black"
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