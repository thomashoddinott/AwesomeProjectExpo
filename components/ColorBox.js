import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

function ColorBox({colorName, hexCode}) {
  console.log(colorName, hexCode)
  const boxColor = {
    backgroundColor: hexCode
  }
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>{colorName}: {hexCode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33682'
  },
  orange: {
    backgroundColor: '#cb4b16'
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold'
  }
})

export default ColorBox;
