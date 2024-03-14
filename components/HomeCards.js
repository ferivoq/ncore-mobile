import * as React from 'react';
import { Card, Text, Button } from 'react-native-paper';
import { View, Linking, StyleSheet } from 'react-native';

const HomeCards = () => (
  <Card>
    <Card.Content>
      <Text variant="titleLarge">19. születésnap</Text>
      <Text style={styles.link}
              onPress={() => Linking.openURL('https://ncore.pro/forum.php?action=comments&thread_id=36143')}>
          Hozzászólok a fórumban!
        </Text>
      <View>
        <Text>Kedves Felhasználóink!</Text>
        <Text>Örömmel értesítünk titeket arról, hogy 19 évesek lettünk.</Text>
        <Text>Köszönjük mindenkinek, aki velünk tartott az elmúlt években, és hozzájárult az oldal fejlődéséhez. Ti vagytok azok, akikkel együtt nőttünk, és akik nélkül ez az út nem lenne ugyanaz: lelkesedésetek, támogatásotok és visszajelzéseitek nélkül nem lennénk azok, akik ma vagyunk. Ti vagytok a motorja ennek az egésznek, közösségünk valódi értékei.</Text>
        <Text>Boldog születésnapot nekünk! Köszönjük, hogy velünk vagytok, és számítunk aktivitásotokra ebben az évben is!</Text>
        <Text>Az nCore Staff</Text>
      </View>
    </Card.Content>
  </Card>
);

export default HomeCards;

const styles = StyleSheet.create({
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  }
});
