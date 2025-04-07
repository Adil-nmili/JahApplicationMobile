import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Linking,
} from 'react-native';
import { FontAwesome5 } from 'react-native-vector-icons'; // Icônes
import SectionTitle from './SectionTitle';

export default function FormulaireContact({ onFormSubmit }) {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [objet, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaCode, setCaptchaCode] = useState('');
  const [focusedInput, setFocusedInput] = useState('');

  const generateCaptcha = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000).toString();
    setCaptchaCode(randomCode);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = () => {
    if (!nom || !email || !objet || !message) {
      Alert.alert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }
    if (captcha !== captchaCode) {
      Alert.alert('Erreur CAPTCHA', 'Le code saisi est incorrect.');
      generateCaptcha();
      setCaptcha('');
      return;
    }

    const subject = encodeURIComponent(`Objet: ${objet}`);
    const body = encodeURIComponent(
      `Nom: ${nom}\nEmail: ${email}\n\nMessage:\n${message}`
    );

    const mailtoUrl = `mailto:nouhailaelansari61@gmail.com?subject=${subject}&body=${body}`;

    Linking.openURL(mailtoUrl)
      .then(() => {
        Alert.alert('Succès', 'Votre application mail va s’ouvrir.');
      })
      .catch(() => {
        Alert.alert('Erreur', 'Impossible d’ouvrir l’application mail.');
      });

    if (onFormSubmit) {
      onFormSubmit();
    }
  };

  // Fonction pour appeler
  const handleCall = () => {
    Linking.openURL('tel:+212661729887');
  };

  // Fonction pour envoyer un email
  const handleEmail = () => {
    Linking.openURL('mailto:jah.informatique@gmail.com');
  };

  // Fonction pour afficher la localisation sur Google Maps
  const handleLocation = () => {
    Linking.openURL('https://www.google.com/maps?q=Lot+al+Houssna+2+N%C2%B0697+Mhamid,+Marrakech');
  };

  const handleFocus = (inputName) => {
    setFocusedInput(inputName);
  };

  const handleBlur = () => {
    setFocusedInput('');
  };

  return (
    <View style={styles.form}>
      <TextInput
        style={[styles.input, focusedInput === 'nom' && styles.inputFocused]}
        placeholder="Nom et prénom"
        value={nom}
        onChangeText={setNom}
        onFocus={() => handleFocus('nom')}
        onBlur={handleBlur}
      />
      <TextInput
        style={[styles.input, focusedInput === 'email' && styles.inputFocused]}
        placeholder="Votre email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        onFocus={() => handleFocus('email')}
        onBlur={handleBlur}
      />
      <TextInput
        style={[styles.input, focusedInput === 'objet' && styles.inputFocused]}
        placeholder="Objet"
        value={objet}
        onChangeText={setObjet}
        onFocus={() => handleFocus('objet')}
        onBlur={handleBlur}
      />
      <TextInput
        style={[styles.input, styles.textArea, focusedInput === 'message' && styles.inputFocused]}
        placeholder="Je veux dire que..."
        value={message}
        onChangeText={setMessage}
        multiline
        numberOfLines={4}
        onFocus={() => handleFocus('message')}
        onBlur={handleBlur}
      />

      <Text style={styles.captchaLabel}>Entrer le texte dans l'image</Text>
      <View style={styles.captchaContainer}>
        <TextInput
          style={[styles.input, { flex: 1 }, focusedInput === 'captcha' && styles.inputFocused]}
          placeholder="Code"
          value={captcha}
          onChangeText={setCaptcha}
          keyboardType="numeric"
          onFocus={() => handleFocus('captcha')}
          onBlur={handleBlur}
        />
        <TouchableOpacity style={styles.captchaBox} onPress={generateCaptcha}>
          <Text style={styles.captchaText}>{captchaCode}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>ENVOYER</Text>
      </TouchableOpacity>

      <View style={styles.card}>
        <SectionTitle title={"Contact Information"}/>
        <Text style={styles.cardSubtitle}>
          Remplissez le formulaire et notre équipe vous répondra dans les 24 heures.
        </Text>

        <View style={styles.contactItem}>
          <FontAwesome5 name="phone" size={24} color="black"/>
          <TouchableOpacity onPress={handleCall}>
            <Text style={styles.contactText}>+212 6 61 72 98 87</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactItem}>
          <FontAwesome5 name="envelope" size={24} color="black" />
          <TouchableOpacity onPress={handleEmail}>
            <Text style={styles.contactText}>jah.informatique@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.contactItem}>
          <FontAwesome5 name="map-pin" size={24}color="black" />
          <TouchableOpacity onPress={handleLocation}>
            <Text style={styles.contactText}>Lot al Houssna 2 N°697 Mhamid, Marrakech</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: { marginBottom: 32 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 14,
  },
  inputFocused: {
    borderColor: '#0066cc', // Couleur du bord quand l'input est en focus
    backgroundColor: '#f0f8ff', // Ajout d'une légère couleur d'arrière-plan pour l'effet de focus
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  captchaLabel: { fontWeight: 'bold' },
  captchaContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
    // marginBottom: 16,
  },
  captchaBox: {
    backgroundColor: '#f44',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  captchaText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  submitButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: 'center',
  },
  submitButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },

  // Card Style
  card: { marginTop: 32, padding: 16, backgroundColor: '#f9f9f9', borderRadius: 8 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 8 },
  cardSubtitle: { fontSize: 14, marginBottom: 16, color: '#666' },
  contactItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  contactText: { fontSize: 16, marginLeft: 10, color: '#0066cc' },
});