import React from 'react'
import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function _Layout() {
  return (
    <NativeTabs>
        <NativeTabs.Trigger name="index">
            <Label>Início</Label>
            <Icon sf="house.fill" drawable="custom_android_drawable" />
        </NativeTabs.Trigger>
        <NativeTabs.Trigger name="onboarding">
            <Icon sf="macwindow.and.pointer.arrow" drawable="custom_settings_drawable" />
            <Label>Tela</Label>
        </NativeTabs.Trigger>
    </NativeTabs>
  )
}