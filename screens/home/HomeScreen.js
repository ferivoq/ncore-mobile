import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HomeCards from '../../components/HomeCards';
import HomeAppbar from '../../components/HomeAppbar';

const HomeScreen = () => {
    return (
        <View>
            <HomeAppbar />
            <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false} // This will hide the scroll indicator
            >
                {/* Added extra View wrapper with style for margin control */}
                <View style={styles.card}><HomeCards /></View>
                <View style={styles.card}><HomeCards /></View>
                <View style={styles.card}><HomeCards /></View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginTop: 10,
    },
    card: {
        marginBottom: 20, // Ensure margin is applied around HomeCards
    }
});

export default HomeScreen;
