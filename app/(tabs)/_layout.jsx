import { Tabs } from 'expo-router';
import { Chrome as Home, Laptop, Phone, Settings, PenTool as Tool } from 'lucide-react-native';
import { StyleSheet, View, Image, Text } from 'react-native';
import LOGO from '../../assets/images/LOGO.jpg';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#0066cc',
        tabBarInactiveTintColor: '#666666',
        tabBarLabelStyle: styles.tabBarLabel,
        headerStyle: styles.header,
        headerTitle: () => (
          <View style={styles.headerTitleContainer}>
            <Image source={LOGO} style={styles.headerLogo} />
            <Text style={styles.headerTitle} >JAH INFORMATIQUE </Text>
          </View>
        ),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, size }) => <Laptop size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="aproposnous"
        options={{
          title: 'A propos',
          tabBarIcon: ({ color, size }) => <Tool size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, size }) => <Phone size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 60,
    paddingBottom: 5,
    elevation: 8, // Ajout d'une ombre pour Android
    shadowColor: '#000', // Ombre pour iOS
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  tabBarLabel: {
    fontFamily: 'TimesNewRomanItalic',
    fontSize: 12,
  },
  header: {
    elevation: 4, // Ajout d'une ombre pour Android
    shadowColor: '#000', // Ombre pour iOS
    backgroundColor: '#ffffff',
    
  },
  headerTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerLogo: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  headerTitle: {
    fontFamily: 'TimesNewRomanItalic',
    color: '#000',
    fontSize: 16,
    letterSpacing: 1,
  },
}); 