import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import FormulaireContact from '../components/FormulaireContact';
import ContactMaps from '../components/ContactMaps';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';

export default function contact() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Salut!</Text>
      <Text style={styles.subHeader}>Nous aimerions parler avec vous.</Text>

      <FormulaireContact />
      <SectionTitle title={'Localisation'}/>
      <ContactMaps />
    
      <Footer/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 4, color: '#111',textAlign:"center" },
  subHeader: { fontSize: 16, marginBottom: 24, color: '#555' },
});
