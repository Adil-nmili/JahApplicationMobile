import { View, Image, StyleSheet, Text } from "react-native";
import cisco from '../../assets/images/cisco.png';
import fede from '../../assets/images/fede.png';
import fppa from '../../assets/images/fppa.png';
import office from '../../assets/images/office.jpg';
import LOGO from '../../assets/images/LOGO.jpg';


export default function Partenairs() {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        JAH Informatique collabore avec des partenaires de renom pour offrir des formations de qualité reconnues internationalement.
      </Text>
      
      <View style={styles.partnersContainer}>
        <View style={styles.partnerItem}>
          <Image source={cisco} style={styles.partnerImage} resizeMode="contain" />
          <Text style={styles.partnerName}>Cisco</Text>
        </View>
        
        <View style={styles.partnerItem}>
          <Image source={fede} style={styles.partnerImage} resizeMode="contain" />
          <Text style={styles.partnerName}>FEDE</Text>
        </View>
        
        <View style={styles.partnerItem}>
          <Image source={fppa} style={styles.partnerImage} resizeMode="contain" />
          <Text style={styles.partnerName}>FPPA</Text>
        </View>
        <View style={styles.partnerItem}>
          <Image source={office} style={styles.partnerImage} resizeMode="contain" />
          <Text style={styles.partnerName}>Microsoft Office</Text>
        </View>
        <View style={styles.partnerItem}>
          <Image source={LOGO} style={styles.partnerImage} resizeMode="contain" />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  description: {
    fontSize: 14,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Poppins-Regular',
    lineHeight: 20,
  },
  partnersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    flexWrap: 'wrap',
  },
  partnerItem: {
    alignItems: 'center',
    margin: 10,
    width: 100,
  },
  partnerImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  partnerName: {
    fontSize: 14,
    fontFamily: 'Poppins-SemiBold',
    color: '#333333',
    textAlign: 'center',
  },
});

