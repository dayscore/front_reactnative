import { StyleSheet, Text, View, Appearance } from 'react-native'
import React from 'react'
import { Picker, PickerIOS } from '@react-native-picker/picker';

const colorScheme = Appearance.getColorScheme();

export default function Calendar() {
  return (
    <View style={styles["container"]}>
      <Text style={styles["text"]}>Selecione um ano</Text>
      <Picker
        style={{ width: 200, height: 40 }}
        selectedValue={1}
        onValueChange={(itemValue) => console.log(itemValue)}
      >
        <Picker.Item label="2023" value={1} />
        <Picker.Item label="2024" value={2} />
        <Picker.Item label="2025" value={3} />
      </Picker>

      <Text style={styles["text"]}>Selecione um mês</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorScheme === "dark" ? "black" : "white",
    color: "white"
  },
  text: {
    color: colorScheme === "dark" ? "white" : "black"
  }
})