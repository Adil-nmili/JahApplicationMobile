import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import image3 from '../../assets/images/image3.jpg'

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* <Image
        source={{ uri: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=800&auto=format&fit=crop' }}
        style={styles.heroImage}
      /> */}
      <Image
        source={image3}
        style={styles.heroImage}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenue chez JAH Informatique</Text>
        <Text style={styles.subtitle}>Votre partenaire informatique de confiance</Text>
        
        <View style={styles.servicesGrid}>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Réparation PC</Text>
            <ChevronRight size={20} color="#0066cc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Maintenance</Text>
            <ChevronRight size={20} color="#0066cc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Vente Matériel</Text>
            <ChevronRight size={20} color="#0066cc" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Formation</Text>
            <ChevronRight size={20} color="#0066cc" />
          </TouchableOpacity>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Pourquoi nous choisir ?</Text>
          <Text style={styles.infoText}>
            • Plus de 10 ans d'expérience{'\n'}
            • Service professionnel et rapide{'\n'}
            • Prix compétitifs{'\n'}
            • Expertise technique pointue
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  heroImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#333333',
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 4,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#666666',
    marginBottom: 24,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  serviceCard: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  serviceTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#333333',
  },
  infoSection: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
  },
  infoTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 12,
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
    lineHeight: 24,
  },
  sliderContainer: {
    height: 200,
    marginBottom: 24,
  },
  slider: {
    flex: 1,
  },
}); 