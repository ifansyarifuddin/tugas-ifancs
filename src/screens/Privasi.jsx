import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const Privasi = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Kebijakan Privasi</Text>
        <View style={styles.info}>
          <Text>Privasi Pengguna: Kami menghormati privasi Anda dan tidak mengumpulkan informasi pribadi tanpa izin Anda.</Text>
          <Text>Data yang Kami Kumpulkan: Aplikasi kami hanya mengumpulkan data yang diperlukan untuk fungsi operasional, seperti preferensi bahasa dan bookmark ayat.</Text>
          <Text>Penggunaan Informasi: Informasi yang kami kumpulkan digunakan untuk meningkatkan pengalaman pengguna dalam aplikasi dan tidak akan dibagikan kepada pihak ketiga tanpa izin Anda.</Text>
          <Text>Keamanan: Kami menggunakan standar keamanan yang tinggi untuk melindungi data pengguna dari akses yang tidak sah.</Text>
          <Text onPress={() => Linking.openURL('mailto:ifan.syarifuddin21@gmail.com')} style={styles.link}>QuranaTafsirpps.com</Text>
        </View>
      </View>

      <Text style={styles.disclaimer}>Catatan Penting: Silakan perhatikan bahwa aplikasi ini hanya bertujuan untuk tujuan edukatif dan ibadah, dan penggunaan aplikasi ini harus sesuai dengan ketentuan hukum yang berlaku di tempat Anda tinggal.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#A7E6FF',
  },
  section: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    marginLeft: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
  disclaimer: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#666666',
  },
});

export default Privasi;
