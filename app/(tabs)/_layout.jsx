import { Tabs } from 'expo-router';
import { Chrome as Home, Laptop, Laptop2, Phone, Settings, PenTool as Tool } from 'lucide-react-native';
import { StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#0066cc',
        tabBarInactiveTintColor: '#666666',
        tabBarLabelStyle: styles.tabBarLabel,
        headerStyle: styles.header,
        headerTitleStyle: styles.headerTitle,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          headerTitle: 'JAH Informatique plus',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="services"
        options={{
          title: 'Services',
          tabBarIcon: ({ color, size }) => <Laptop2 size={size} color={color} />,
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
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  header: {
    elevation: 4, // Ajout d'une ombre pour Android
    shadowColor: '#000', // Ombre pour iOS
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    color: 'yellow',
    fontSize: 20,
  },
}); 