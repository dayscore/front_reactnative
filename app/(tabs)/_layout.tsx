import React from 'react'
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function _Layout() {
  return (
    <NativeTabs>
        <NativeTabs.Trigger name="index">
            <Label>Início</Label>
            <Icon sf="house.fill" drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="calendar">
            <Icon sf="calendar" drawable="custom_settings_drawable" />
            <Label>Calendário</Label>
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="settings">
            <Icon sf="gearshape.fill" drawable="custom_profile_drawable" />
            <Label>Configurações</Label>
        </NativeTabs.Trigger>
    </NativeTabs>
  )
}