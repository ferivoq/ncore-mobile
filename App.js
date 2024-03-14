import React from 'react'; // Make sure to import React
import { StyleSheet, View } from 'react-native';
import { Provider as PaperProvider, BottomNavigation, Text, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';
import { useTheme } from 'react-native-paper';
import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useColorScheme } from 'react-native';

import HomeScreen from './screens/home/HomeScreen';

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme =
    colorScheme === 'dark'
      ? { ...MD3DarkTheme, colors: theme.dark }
      : { ...MD3LightTheme, colors: theme.light };

  const DownloadRoute = () => <Text>Letöltés</Text>;
  const RequestsRoute = () => <Text>Kérések</Text>;
  const ProfileRoute = () => <Text>Fiókom</Text>;

  // Move the state and variables here
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', focusedIcon: 'home', unfocusedIcon: 'home-outline' },
    { key: 'download', title: 'Letöltés', focusedIcon: 'download', unfocusedIcon: 'download-outline' },
    { key: 'requests', title: 'Kérések', focusedIcon: 'magnify', unfocusedIcon: 'magnify' },
    { key: 'profile', title: 'Fiókom', focusedIcon: 'account', unfocusedIcon: 'account-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: () => <HomeScreen />,
    download: DownloadRoute,
    requests: RequestsRoute,
    profile: ProfileRoute,
  });

  return (
    <PaperProvider theme={paperTheme}>
      <View style={{ flex: 1 }}>
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
      </View>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  // Define your styles here if needed
});
