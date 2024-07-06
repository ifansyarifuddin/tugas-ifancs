import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang</Text>
      <TouchableOpacity  
      onPress={() => 
            navigation.navigate('Tafsir')
          } style={styles.button}>
        <Text style={styles.buttonText}>Tekan Saya</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A7E6FF',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    color :'black',
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Home;
