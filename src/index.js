import React, { useEffect, useState } from 'react';
import {View, SafeAreaView, FlatList, Text, StyleSheet, StatusBar, TouchableOpacity, button} from 'react-native';

import api from './services/api';

export default function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    api.get('/categories.php').then(response => {
      setMeals(response.data.categories);
    })
  }, [])

  function handleProject() {
    setMeals('');
  }

  async function mount() {
    await api.get('./categories.php').then(response => {
      setMeals(response.data.categories)
    });
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7519c1" />
      <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Título</Text>
      <Text style={styles.title}>Sub-título</Text>
      <FlatList
        justifyContent={'center'}
        alignItems={'center'}
        style={styles.container}
        data={meals}
        keyExtractor={meal => meal.idCategory}
        renderItem={({ item: meal }) => (
          <Text style={styles.categories}>{meal.strCategory}</Text>
        )}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={handleProject}
      >
        <Text style={styles.buttonText}>Apagar tudo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={styles.button}
        onPress={mount}
      >
        <Text style={styles.buttonText}>Montar tudo</Text>
      </TouchableOpacity>
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
      textAlign: 'center',
      marginTop: 20,
    },
    categories: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    button: {
      alignSelf: "stretch",
      backgroundColor: '#fff',
      margin: 20,
      height: 50,
      borderRadius: 4,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
    }
})
