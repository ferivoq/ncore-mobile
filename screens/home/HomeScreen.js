import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar, IconButton, MD3Colors } from 'react-native-paper';

import MyComponent from '../../components/DownloadList';

const HomeScreen = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <View style={{ margin: 20, marginTop: 55 }}>
            <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
            />

            <MyComponent />
        </View>
    );
};

const styles = StyleSheet.create({

})

export default HomeScreen;
