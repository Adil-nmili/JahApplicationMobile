import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { MapPin, Phone, Mail, Clock } from 'lucide-react-native';

export default function ContactScreen() {
  const handleCall = () => {
    Linking.openURL('tel:+33123456789');
  };

  const handleEmail = () => {
    Linking.openURL('mailto:contact@jahinformatique.com');
  };

  const handleLocation = () => {
    Linking.openURL('https://maps.google.com/?q=JAH+Informatique');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Contactez-nous</Text>

      <View style={styles.card}>
        <View style={styles.contactItem}>
          <Phone size={24} color="#0066cc" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Téléphone</Text>
            <TouchableOpacity onPress={handleCall}>
              <Text style={styles.contactValue}>+33 1 23 45 67 89</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contactItem}>
          <Mail size={24} color="#0066cc" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Email</Text>
            <TouchableOpacity onPress={handleEmail}>
              <Text style={styles.contactValue}>contact@jahinformatique.com</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contactItem}>
          <MapPin size={24} color="#0066cc" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Adresse</Text>
            <TouchableOpacity onPress={handleLocation}>
              <Text style={styles.contactValue}>123 Rue de l'Informatique{'\n'}75000 Paris, France</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contactItem}>
          <Clock size={24} color="#0066cc" />
          <View style={styles.contactInfo}>
            <Text style={styles.contactLabel}>Horaires d'ouverture</Text>
            <Text style={styles.contactValue}>
              Lundi - Vendredi: 9h00 - 18h00{'\n'}
              Samedi: 9h00 - 12h00{'\n'}
              Dimanche: Fermé
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.emergencySection}>
        <Text style={styles.emergencyTitle}>Assistance urgente ?</Text>
        <Text style={styles.emergencyText}>
          Pour toute urgence informatique, nous sommes disponibles par téléphone pendant nos heures d'ouverture.
        </Text>
        <TouchableOpacity style={styles.emergencyButton} onPress={handleCall}>
          <Text style={styles.emergencyButtonText}>Appeler maintenant</Text>
        </TouchableOpacity>
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
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 24,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  contactInfo: {
    marginLeft: 16,
    flex: 1,
  },
  contactLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#333333',
    marginBottom: 4,
  },
  contactValue: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
  emergencySection: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 40,
  },
  emergencyTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 12,
  },
  emergencyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
    lineHeight: 20,
  },
  emergencyButton: {
    backgroundColor: '#0066cc',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  emergencyButtonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#ffffff',
    fontSize: 16,
  },
});