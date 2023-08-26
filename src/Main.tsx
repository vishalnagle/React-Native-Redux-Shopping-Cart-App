import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Main = ({navigation}: {navigation: any}) => {
  return (
    <View style={styles.buttons}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ThemeScreen');
        }}
        style={styles.themeButton}>
        <Text style={styles.buttonText}>Change Theme</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Product Screen');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Language Screen');
        }}
        style={styles.button}>
        <Text style={styles.buttonText}>Change Language</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  themeButton: {
    height: 40,
    width: 200,
    backgroundColor: '#7d7ec7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    height: 40,
    width: 200,
    backgroundColor: '#7d7ec7',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Main;
