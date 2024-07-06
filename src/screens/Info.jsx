import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

const Info = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Info Aplikasi Al-Quran</Text>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>Nama Aplikasi:</Text>
          <Text>Al-Quran Digital</Text>
          <Text style={styles.infoTitle}>Versi Aplikasi:</Text>
          <Text>2.1.0</Text>
          <Text style={styles.infoTitle}>Pengembang:</Text>
          <Text>QuranApps Co.</Text>
          <Text style={styles.infoTitle}>Deskripsi:</Text>
          <Text>Aplikasi Al-Quran Digital ini menyediakan teks lengkap Al-Quran beserta terjemahan dalam berbagai bahasa. Dilengkapi dengan fitur tafsir, pencarian ayat, dan bacaan audio.</Text>
          <Text style={styles.infoTitle}>Fitur Utama:</Text>
          <Text>- Teks Al-Quran dan terjemahan dalam 30 bahasa.</Text>
          <Text>- Tafsir Al-Quran.</Text>
          <Text>- Pencarian ayat berdasarkan kata kunci.</Text>
          <Text>- Audio bacaan dari qari terkenal.</Text>
          <Text>- Bookmark untuk menyimpan ayat favorit.</Text>
          <Text style={styles.infoTitle}>Kontak Pengembang:</Text>
          <Text onPress={() => Linking.openURL('mailto:ifan.syarifuddin21@gmail.com')} style={styles.link}>QuranaTafsirpps.com</Text>
          <Text style={styles.infoTitle}>Rating:</Text>
          <Text>⭐️⭐️⭐️⭐️ (4.5/5) - Berdasarkan 10,000 ulasan.</Text>
        </View>
      </View>

      
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

export default Info;
