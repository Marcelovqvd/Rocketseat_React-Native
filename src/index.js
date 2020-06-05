import React, { useEffect, useState } from 'react';
import {SafeAreaView, FlatList, Text, StyleSheet, StatusBar} from 'react-native';

import api from './services/api';

export default function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    api.get('/categories.php').then(response => {
      setMeals(response.data.categories);
      console.log('->', meals)
    })
  }, [])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7519c1" />
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <FlatList 
        data={meals}
        keyExtractor={meal => meal.idCategory}
        renderItem={({ item: meal }) => (
          <Text style={styles.categories}>{meal.strCategory}</Text>
        )}
      />
      </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#7519c1',
    },
    title: {
      color: '#fff',
      fontSize: 32,
      fontWeight: 'bold',
    },
    categories: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    }
})
