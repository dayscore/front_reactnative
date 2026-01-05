import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Onboarding() {
  return (
    <View style={styles["container"]}>
      <Text style={styles["text"]}>Tela</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    color: "white"
  },
  text: {
    color: 'white'
  }
})