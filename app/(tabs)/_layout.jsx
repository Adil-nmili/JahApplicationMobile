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
            <Text style={styles.headerTitle} >JAH Informatique</Text>
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
          tabBarIcon: ({ color, size }) => <Tool size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="products"
        options={{
          title: 'Produits',
          tabBarIcon: ({ color, size }) => <Laptop size={size} color={color} />,
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
    width: '100%',
  },
  tabBarLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  header: {
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
    fontFamily: 'Poppins-Bold',
    color: '#FE5E20',
    fontSize: 20,
    letterSpacing: 1,
  },
}); 