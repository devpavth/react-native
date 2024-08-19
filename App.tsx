import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './components/header/Header';
import Services from './components/services/Services';
import FASTagRecharge from './components/fastagrecharge/FASTagRecharge';
import Discover from './components/discover/Discover';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Header />
        <Services />
        <FASTagRecharge />
        <Discover />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FFFA',
  },
});

export default App;
