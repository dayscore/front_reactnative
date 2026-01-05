import { StyleSheet, Text, View, Appearance } from 'react-native'
import React from 'react'

const colorScheme = Appearance.getColorScheme();

export default function Calendar() {
  return (
    <View style={styles["container"]}>
      <Text style={styles["text"]}>WIP</Text>
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