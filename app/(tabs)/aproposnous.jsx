// ... existing code ...
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Animated } from 'react-native';
import { useRef, useEffect } from 'react';

export default function AproposNous() {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);

return (
    <ScrollView style={styles.container}>
      {/* Section Header */}
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Text style={styles.title}>École JAH de Formation Professionnelle</Text>
        <Text style={styles.subtitle}>L'excellence en formation professionnelle depuis 2006</Text>
      </Animated.View>

      {/* Section Mot du Directeur */}
      <Animated.View style={[styles.section, { opacity: fadeAnim }]}>
        <Text style={styles.sectionTitle}>Mot du Directeur</Text>
        <Text style={styles.text}>
          Bonjour à toutes et à tous, Je suis le Dr Jamal Nouiti, directeur de l'établissement Jah de la formation professionnelle à Marrakech.{'\n\n'}
          Comme vous le savez, la formation professionnelle a commencé à s'imposer sur le marché du travail et est devenue le principal pilier de la promotion de l'économie nationale, et cela en parallèle avec le développement technologique et scientifique.
        </Text>
      </Animated.View>

      {/* Section Présentation */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notre Institution</Text>
        <Text style={styles.text}>
          Créée en 2006 et accréditée par l'État, l'école Jah de formation professionnelle délivre des diplômes qui permettent à ses étudiants d'intégrer le monde du travail, que ce soit dans le secteur public ou le secteur privé, ou de créer leurs propres projets tout en leur donnant tous les atouts nécessaires à la réussite.
        </Text>
      </View>

      {/* Section Formations */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nos Formations</Text>
        <Text style={styles.text}>
          L'établissement vous propose des diplômes agréés par l'état:{'\n\n'}
          • Qualification opérateur de saisi{'\n'}
          • Technicien{'\n'}
          • Technicien spécialisé{'\n'}
          • Licence professionnelle{'\n'}
          • Master professionnel{'\n\n'}
          Dans le domaine de l'administration, de la gestion des entreprises et de l'informatique.
        </Text>
      </View>

      {/* Section Domaines */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Domaines de Formation</Text>
        <Text style={styles.text}>
          L'établissement dispense également des formations professionnelles dans divers domaines :{'\n\n'}
          • Informatique et gestion{'\n'}
          • Développement humain et accompagnement{'\n'}
          • Machines de forage et excavateurs{'\n'}
          • Stylisme et couture{'\n'}
          • Pâtisserie et cosmétologie{'\n'}
          • Journalisme et secourisme{'\n'}
          • Formation de professeurs d'éducation physique{'\n'}
          • Préparateur physique{'\n'}
          • Assistant(e) médical(e){'\n'}
          • Système de sécurité incendie{'\n'}
          • Langues vivantes
        </Text>
      </View>

      {/* Section Accompagnement */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Accompagnement des Étudiants</Text>
        <Text style={styles.text}>
          L'établissement occupe une place privilégiée auprès des diplômés en leur assurant le suivi et l'accompagnement nécessaires pour la réalisation de leurs projets. Pour ce faire, l'école diversifie les moyens pour maintenir un contact permanent avec les lauréats comme elle organise des réunions et des séances gratuites pour la sensibilisation et l'orientation.{'\n\n'}
          L'établissement Jah garantit aux étudiants des stages sur terrain, des visites d'entreprises, et des activités culturelles, touristiques et sportives.
        </Text>
      </View>

      {/* Section Album reste la même */}
      // ... existing album section code ...

    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#1e88e5',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
    textAlign: 'center',
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1e88e5',
    textAlign: 'right',
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'right',
  },
  albumContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  albumImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
});
// ... existing styles remain the same ...