import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import formationData from '../data/formationData.json';

export default function NosDiplomes() {
  const router = useRouter();
  const [diplomes, setDiplomes] = useState([])

  useEffect(() => {
    setDiplomes(formationData.diplomes)
  }, [])

  const [hoveredCard, setHoveredCard] = useState(null); 

  const navigateToFormation = (id) => {
    router.push(`/formation/${id}`);
  };
  return (
    <View style={styles.container}>
        {diplomes.map((diplome) => (
          <TouchableOpacity
            key={diplome.id}
            style={[
              styles.diplomeCard,
              hoveredCard === diplome.id && styles.diplomeCardHover
            ]}
            onPress={() => navigateToFormation(diplome.id)}
            onMouseEnter={() => setHoveredCard(diplome.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Icône ajoutée à chaque carte */}
            <Ionicons
              name={diplome.icone}
              size={40}
              color="#0000FF"
              style={styles.icon}
            />
            <Text style={styles.diplomeTitle}>{diplome.titre}</Text>
            <Text style={styles.diplomeDuree}>{diplome.duree}</Text>
          </TouchableOpacity>
        ))}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10,
    marginBottom: 10,
    
  },
  diplomeCard: {
    width: '48%',
    backgroundColor: '#F0FDFA',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  diplomeCardHover: {
    backgroundColor: '#0EB582',
  },
  diplomeTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
  },
  
  
});
