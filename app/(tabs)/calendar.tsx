import { StyleSheet, Text, View, Appearance,  } from 'react-native'
import React from 'react'

const colorScheme = Appearance.getColorScheme();

export default function Calendar() {
  return (
    <View style={styles["container"]}>
      
      <View style={styles["calendar"]}>
        <Text style={styles["text"]}>Calendário</Text>
      </View>
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
  },
  calendar: {
    borderColor: '#ffffff',
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'solid',
    color: "#ffffff",
    padding: 12,
    marginTop: 20
  }
})