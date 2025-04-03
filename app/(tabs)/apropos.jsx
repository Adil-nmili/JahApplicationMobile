import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

export default function AProposScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>À Propos de JAH Informatique</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notre Histoire</Text>
        <Text style={styles.text}>
          Fondée en 2010, JAH Informatique est née de la passion pour la technologie et du désir d'offrir des solutions informatiques de qualité à nos clients. Depuis plus de 10 ans, nous nous engageons à fournir un service exceptionnel et des solutions adaptées aux besoins de chacun.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notre Mission</Text>
        <Text style={styles.text}>
          Notre mission est de simplifier l'accès à la technologie pour tous, en offrant des services informatiques professionnels, fiables et abordables. Nous croyons en la qualité, l'honnêteté et la transparence dans toutes nos interactions.
        </Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos Valeurs</Text>
        <View style={styles.valueItem}>
          <Text style={styles.valueTitle}>• Excellence</Text>
          <Text style={styles.valueText}>Nous visons l'excellence dans chaque service que nous fournissons.</Text>
        </View>
        <View style={styles.valueItem}>
          <Text style={styles.valueTitle}>• Intégrité</Text>
          <Text style={styles.valueText}>Nous agissons avec honnêteté et transparence envers nos clients.</Text>
        </View>
        <View style={styles.valueItem}>
          <Text style={styles.valueTitle}>• Innovation</Text>
          <Text style={styles.valueText}>Nous restons à la pointe de la technologie pour offrir les meilleures solutions.</Text>
        </View>
        <View style={styles.valueItem}>
          <Text style={styles.valueTitle}>• Service Client</Text>
          <Text style={styles.valueText}>La satisfaction de nos clients est notre priorité absolue.</Text>
        </View>
      </View>
      
      <View style={styles.teamSection}>
        <Text style={styles.sectionTitle}>Notre Équipe</Text>
        <Text style={styles.text}>
          Notre équipe est composée de professionnels passionnés et expérimentés, dédiés à vous offrir le meilleur service possible. Chaque membre apporte son expertise unique pour répondre à vos besoins informatiques.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  header: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#333333',
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 12,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666666',
    lineHeight: 24,
  },
  valueItem: {
    marginBottom: 16,
  },
  valueTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#FE5E20',
    marginBottom: 4,
  },
  valueText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  teamSection: {
    marginBottom: 40,
  },
}); 