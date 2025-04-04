import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { ChevronRight } from 'lucide-react-native';
import ImageSlider from '../components/ImageSlider';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import  image3  from '../../assets/images/image3.jpg';
import SectionTitle from '../components/SectionTitle';
import NosDiplomes from '../components/NosDiplomes';
import { Image } from 'react-native';
import ObjectifCard from '../components/ObjectifCard';

export default function HomeScreen() {
  const router = useRouter();
  const [pressedCard, setPressedCard] = useState(null);

  const handlePressIn = (id) => {
    setPressedCard(id);
  };

  const handlePressOut = () => {
    setPressedCard(null);
  };

  return (
    <ScrollView style={styles.container}>
      <ImageSlider />
      <View style={styles.content}>
        {/* NOS FORMATIONS */}
        <View style={styles.moreCard}>
          <SectionTitle title="JAH Formation Professionnelle" />
          <Text style={styles.moreText}>
            Découvrez nos formations en informatique, gestion, stylisme, pâtisserie, et bien plus encore !
          </Text>
          <TouchableOpacity 
            style={[
              styles.moreButton,
              pressedCard === 'formations' && styles.moreButtonPressed
            ]} 
            onPress={() => router.push('/aproposnous')}
            onPressIn={() => handlePressIn('formations')}
            onPressOut={handlePressOut}
            onHoverIn={() => handlePressIn('formations')}
            onHoverOut={handlePressOut}
          >
            <Text style={[
              styles.moreButtonText,
              pressedCard === 'formations' && styles.moreButtonTextPressed
            ]}>Plus</Text>
          </TouchableOpacity>
        </View>

        {/* DIPLÔMES composant */}
        <View style={styles.moreCard}>
          <SectionTitle title="NOS DIPLÔMES" />
          <NosDiplomes />
        </View>
        <View>
          <SectionTitle title=" Objectif de l'école" />
          <Text style={styles.moreText}>
          Dispenser une formation de qualité aux participants motivés par une volonté d'évoluer dans leur carrière professionnelle.
          Assurer des formations dans des filières sélectives et répondant aux besoins des entreprises.
          </Text>
          <Image source={image3} resizeMode="contain" alt='objectif' style={styles.objectifImage} />
          <ObjectifCard />
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
    backgroundColor: '#f5f5f5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  moreButtonPressed: {
    backgroundColor: '#0EB582',
  },
  moreButtonText: {
    color: '#333333',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  moreButtonTextPressed: {
    color: '#ffffff',
  },
  objectifImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  },
});

