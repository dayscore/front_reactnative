import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

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
    backgroundColor: 'black',
    color: "white"
  },
  text: {
    color: 'white'
  }
})