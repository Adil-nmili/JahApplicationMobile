import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const products = [
  {
    id: 1,
    category: 'Ordinateurs',
    items: [
      {
        id: 'pc1',
        name: 'PC de Bureau Pro',
        price: '799 €',
        image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&auto=format&fit=crop'
      },
      {
        id: 'pc2',
        name: 'Portable Business',
        price: '999 €',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&auto=format&fit=crop'
      }
    ]
  },
  {
    id: 2,
    category: 'Accessoires',
    items: [
      {
        id: 'acc1',
        name: 'Souris Sans Fil',
        price: '29.99 €',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop'
      },
      {
        id: 'acc2',
        name: 'Clavier Mécanique',
        price: '89.99 €',
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop'
      }
    ]
  }
];

export default function ProductsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Nos Produits</Text>
      
      {products.map((category) => (
        <View key={category.id} style={styles.categorySection}>
          <Text style={styles.categoryTitle}>{category.category}</Text>
          
          {category.items.map((item) => (
            <TouchableOpacity key={item.id} style={styles.productCard}>
              <Image source={{ uri: item.image }} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productPrice}>{item.price}</Text>
                <TouchableOpacity style={styles.detailsButton}>
                  <Text style={styles.detailsButtonText}>Voir détails</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>Information</Text>
        <Text style={styles.infoText}>
          Les prix peuvent varier. Contactez-nous pour connaître la disponibilité et obtenir un devis personnalisé.
        </Text>
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
  categorySection: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: '#333333',
    marginBottom: 16,
  },
  productCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  productInfo: {
    padding: 16,
  },
  productName: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
  productPrice: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#0066cc',
    marginBottom: 12,
  },
  detailsButton: {
    backgroundColor: '#0066cc',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  detailsButtonText: {
    fontFamily: 'Poppins-SemiBold',
    color: '#ffffff',
    fontSize: 14,
  },
  infoBox: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 40,
  },
  infoTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#333333',
    marginBottom: 8,
  },
  infoText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#666666',
    lineHeight: 20,
  },
});