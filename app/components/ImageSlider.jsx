import { View, Text, Image, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image2.jpeg';
// import image2 from '../../assets/images/image4.JPG';

const { width } = Dimensions.get('window');
// const { height } = Dimensions.set('window');

const slides = [
  {
    id: '1',
    image: image3,
    title: 'Services Informatiques',
    description: 'Solutions professionnelles pour vos besoins',
  },
  {
    id: '2',
    image: image3,
    title: 'Support Technique',
    description: 'Assistance rapide et efficace',
  },
  {
    id: '3',
    image: image4,
    title: 'Formation',
    description: 'Apprenez à votre rythme',
  },
];

export default function ImageSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const flatListRef = useRef(null);
  const autoSlideTimer = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    // Start auto-sliding
    startAutoSlide();
    
    // Clean up timer on component unmount
    return () => {
      if (autoSlideTimer.current) {
        clearInterval(autoSlideTimer.current);
      }
    };
  }, []);

  const startAutoSlide = () => {
    // Clear any existing timer
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
    
    // Set new timer to advance slides every 5 seconds
    autoSlideTimer.current = setInterval(() => {
      const nextSlide = (activeSlide + 1) % slides.length;
      setActiveSlide(nextSlide);
      
      
      // Scroll to the next slide
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: nextSlide,
          animated: true,
        });
      }
    }, 2000); // 5 seconds interval
  };

  const renderSlide = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.slideImage} />
        <View style={styles.slideContent}>
          <Text style={styles.slideTitle}>{item.title}</Text>
          <Text style={styles.slideDescription}>{item.description}</Text>
        </View>
      </View>
    );
  };

  const renderPagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.paginationDot,
              index === activeSlide ? styles.paginationDotActive : null,
            ]}
          />
        ))}
      </View>
    );
  };

  const handleScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.height;
    const index = event.nativeEvent.contentOffset.x / slideSize;
    const newIndex = Math.round(index);
    
    if (newIndex !== activeSlide) {
      setActiveSlide(newIndex);
      
      // Reset the auto-slide timer when user manually scrolls
      startAutoSlide();
    }
  };

  return (
    <View style={styles.sliderContainer}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={renderSlide}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      />
      {renderPagination()}
    </View>
  );
}

const styles = StyleSheet.create({
  sliderContainer: {
    height: 300,
    position: 'relative',
  },
  slide: {
    width: width,
    height: 300,
  },
  slideImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  slideContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  slideTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 8,
  },
  slideDescription: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#ffffff',
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.5)',
    marginHorizontal: 4,
  },
  paginationDotActive: {
    backgroundColor: '#ffffff',
    width: 12,
    height: 12,
    borderRadius: 6,
  },
}); 