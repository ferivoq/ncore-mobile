import React from 'react'
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import SettingsAppbar from '../../components/SettingsAppbar';

const SettingsScreen = () => {
    return (
        <View>
            <SettingsAppbar />
            <Text>Settings</Text>
        </View>
    )
}

export default SettingsScreen