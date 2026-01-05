import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Slider from "@react-native-community/slider";
import { Button } from "@react-navigation/elements";
import React, { useState } from "react";
import { Alert, Appearance, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

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

      <View style={{ flexDirection: "row", justifyContent: "space-between", width: 300, marginTop: 40 }}>
        <Pressable onPress={() => setSliderValue(0)}>
          <FontAwesomeIcon icon={sliderValue >= 0 ? faStarSolid : faStarRegular} color={colorScheme === "dark" ? "white" : "black"} size={24} />
        </Pressable>
        <Pressable onPress={() => setSliderValue(1)}>
          <FontAwesomeIcon icon={sliderValue >= 1 ? faStarSolid : faStarRegular} color={colorScheme === "dark" ? "white" : "black"} size={24} />
        </Pressable>
        <Pressable onPress={() => setSliderValue(2)}>
          <FontAwesomeIcon icon={sliderValue >= 2 ? faStarSolid : faStarRegular} color={colorScheme === "dark" ? "white" : "black"} size={24} />
        </Pressable>
        <Pressable onPress={() => setSliderValue(3)}>
          <FontAwesomeIcon icon={sliderValue >= 3 ? faStarSolid : faStarRegular} color={colorScheme === "dark" ? "white" : "black"} size={24} />
        </Pressable>
        <Pressable onPress={() => setSliderValue(4)}>
          <FontAwesomeIcon icon={sliderValue >= 4 ? faStarSolid : faStarRegular} color={colorScheme === "dark" ? "white" : "black"} size={24} />
        </Pressable>
        <Pressable onPress={() => setSliderValue(5)}>
          <FontAwesomeIcon icon={sliderValue >= 5 ? faStarSolid : faStarRegular} color={colorScheme === "dark" ? "white" : "black"} size={24} />
        </Pressable>
        <Pressable onPress={() => setSliderValue(6)}>
          <FontAwesomeIcon icon={sliderValue >= 6 ? faStarSolid : faStarRegular} color={colorScheme === "dark" ? "white" : "black"} size={24} />
        </Pressable>
      </View>
      <Slider
        style={{ width: 300, height: 40 }}
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