import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { name: 'shaun',id: '1' },
    { name: 'alesa',id: '2' },
    { name: 'dix',id: '3' },
    { name: 'flower', id: '4' },
    { name: 'ale',id: '5' },
    { name: 'vale',id: '6' },
    { name: 'dembe',id: '7' },
  ]);


  return (
    <View style={styles.container}>

      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
            <Text style={styles.item}>{item.name}</Text>
        )}
      />


      {/* <ScrollView>
      { people.map(item =>
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24

  }
});
