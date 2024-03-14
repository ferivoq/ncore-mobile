import React, { useState } from 'react';
import { View } from 'react-native';
import { Provider as PaperProvider, BottomNavigation, Text, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import DownloadScreen from './screens/download/DownloadScreen';
import HomeScreen from './screens/home/HomeScreen';
import SettingsScreen from './screens/settings/SettingsScreen';

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();
  const paperTheme = colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'download', title: 'Letöltés', focusedIcon: 'download', unfocusedIcon: 'download-outline' },
    { key: 'requests', title: 'Kérések', focusedIcon: 'magnify', unfocusedIcon: 'magnify' },
    { key: 'profile', title: 'Fiókom', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    download: DownloadScreen,
    requests: () => <Text>Kérések</Text>,
    profile: () => <Text>Fiókom</Text>,
  });

  return (
    <PaperProvider theme={paperTheme}>
      <View style={{ flex: 1 }}>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<BottomNavigation navigationState={{ index, routes }} onIndexChange={setIndex} renderScene={renderScene} />} />
            <Route path="/settings" element={<SettingsScreen />} />
          </Routes>
        </NativeRouter>
      </View>
    </PaperProvider>
  );
}
