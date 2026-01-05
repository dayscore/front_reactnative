import { StyleSheet, Text, View, Appearance, Switch } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'

const colorScheme = Appearance.getColorScheme();

export default function Settings() {
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  return (
    <View style={styles["container"]}>
      <Text style={styles["text"]}>Notificações</Text>
      <Switch
        trackColor={{ false: "#7a7a7a", true: "#0373fc" }}
        thumbColor={"white"}
        style={{ margin: 'auto', marginTop: 10, marginBottom: 30 }}
        onValueChange={(value) => setNotificationsEnabled(value)}
        value={notificationsEnabled}
      />
      
      <Text style={styles["text"]}>Idioma</Text>
      <Picker
        selectedValue={selectedLanguage}
        style={{ height: 50, width: 150 }} // Styling is often necessary for visibility
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }
        mode='dropdown' // Use dropdown mode for better UX on mobile
      >
        <Picker.Item label="Português" value="pt-BR" />
        <Picker.Item label="English" value="en-US" />
      </Picker>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorScheme === "dark" ? "black" : "white",
    color: colorScheme === "dark" ? "white" : "black"
  },
  text: {
    color: colorScheme === "dark" ? "white" : "black"
  }
})