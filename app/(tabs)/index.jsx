import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import ImageSlider from '../components/ImageSlider';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; // Import des icônes

export default function HomeScreen() {
  const router = useRouter();

  // Tableau des diplômes
  const [diplomes, setDiplomes] = useState([
    { id: 1, titre: "Master Professionnel Européen (FEDE)", duree: "2 ans", icone: "calculator" },
    { id: 2, titre: "Licence Professionnelle Européenne (FEDE)", duree: "1 an", icone: "code-slash" },
    { id: 3, titre: "Technicien Spécialisé en Gestion d’Entreprise", duree: "2 ans", icone: "server" },
    { id: 4, titre: "Technicien en Gestion Informatisée", duree: "1 an", icone: "laptop" },
  ]);

  const [hoveredCard, setHoveredCard] = useState(null); // Gère l'effet hover

  const navigateToFormation = (diplome) => {
    router.push(`/formation/${diplome.id}`);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageSlider />

      <View style={styles.content}>
        <View style={styles.titleContainer}>
          <ChevronRight size={20} color="#000000" style={styles.titleIcon} />
          <Text style={styles.title}> Bienvenue chez JAH Informatique</Text>
        </View>
        <Text style={styles.subtitle}>Votre partenaire informatique de confiance</Text>

        {/* NOS FORMATIONS */}
        <View style={styles.moreCard}>
          <Text style={styles.moreTitle}>JAH Formation Professionnelle</Text>
          <Text style={styles.moreText}>
            Découvrez nos formations en informatique, gestion, stylisme, pâtisserie, et bien plus encore !
          </Text>
          <TouchableOpacity style={styles.moreButton} onPress={() => router.push('/aproposnous')}>
            <Text style={styles.moreButtonText}>Plus</Text>
          </TouchableOpacity>
        </View>

        {/* NOS DIPLÔMES */}
        <View style={styles.moreCard}>
          <Text style={styles.moreTitle}>NOS DIPLÔMES</Text>
          <View style={styles.CardInform}>
            {diplomes.map((diplome) => (
              <TouchableOpacity
                key={diplome.id}
                style={[
                  styles.diplomeCard,
                  hoveredCard === diplome.id && styles.diplomeCardHover,
                ]}
                onPress={() => navigateToFormation(diplome)}
                onMouseEnter={() => setHoveredCard(diplome.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icône ajoutée à chaque carte */}
                <Ionicons name={diplome.icone} size={40} color="#0066cc" style={styles.icon} />
                <Text style={styles.diplomeTitle}>{diplome.titre}</Text>
                <Text style={styles.diplomeDuree}>{diplome.duree}</Text>
              </TouchableOpacity>
            ))}
          </View>
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
  content: {
    padding: 20,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    padding: 5,
    borderRadius: 5,
  },
  title: {
    fontFamily: 'TimesNewRomanBold',
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: '#666666',
    marginBottom: 24,
  },
  moreCard: {
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  moreTitle: {
    textTransform: 'uppercase',
    fontSize: 13,
    fontFamily: 'TimesNewRomanBold',
    fontWeight: 'bold',
    color: '#004080',
    marginBottom: 10,
  },
  moreText: {
    fontSize: 12,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Poppins-Regular',
  },
  moreButton: {
    backgroundColor: '#fe5e20',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  moreButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
  CardInform: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  diplomeCard: {
    width: '48%',
    backgroundColor: '#F0FDFA',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  diplomeCardHover: {
    backgroundColor: '#ddd',
  },
  diplomeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  diplomeDuree: {
    fontSize: 12,
    color: '#666666',
    marginTop: 4,
  },
  icon: {
    marginBottom: 10,
  },
});

