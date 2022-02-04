import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text
          style={styles.text}
        >Here are some boxes of different colors</Text>
      </View>
      <ColorBox colorName='cyan' hexCode='#2aa198' />
      <ColorBox colorName='blue' hexCode='#268bd2' />
      <ColorBox colorName='magenta' hexCode='#d33682' />
      <ColorBox colorName='orange' hexCode='#cb4b16' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 40
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },


})

export default App