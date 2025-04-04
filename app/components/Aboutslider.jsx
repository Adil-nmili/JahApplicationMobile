import React, { useRef, useEffect, useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';

import image1 from '../../assets/images/jahimage.png';
import image2 from '../../assets/images/diplome.png';
// import gestion from '../../assets/images/gestion.png';
// import fedeFlayer from '../../assets/images/fedeFlayer.jpeg';

const { width } = Dimensions.get('window');

const images = [image1, image2]; // Tu peux en ajouter ici

const Aboutslider = () => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 3000); // change every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        data={images}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />
    </View>
  );
};

export default Aboutslider;
const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  imageContainer: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
});
