import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, Dimensions } from 'react-native';

const CustomHeader = () => {
  const screenHeight = Dimensions.get('window').height;
  const headerHeight = screenHeight * 0.3; // 30% of screen height
  const title = "Any Title";
  return (
    <SafeAreaView style={[styles.headerContainer, { height: headerHeight }]}>
      <StatusBar barStyle="light-content" backgroundColor="#6a0dad" />
      
      {/* Header Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{title || 'App Header'}</Text>
        
        {/* Search Bar Example */}
        <View style={styles.searchBar}>
          <Text style={styles.searchText}>Search...</Text>
        </View>
        
        {/* Action Buttons */}
        <View style={styles.buttonRow}>
          <View style={styles.iconButton}>
            <Text style={styles.buttonIcon}>🔔</Text>
          </View>
          <View style={styles.iconButton}>
            <Text style={styles.buttonIcon}>⚙️</Text>
          </View>
          <View style={styles.iconButton}>
            <Text style={styles.buttonIcon}>👤</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#6a0dad',
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingHorizontal: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  title: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 10,
  },
  searchBar: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  searchText: {
    color: 'rgba(255, 255, 255, 0.7)',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20,
  },
  iconButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonIcon: {
    fontSize: 20,
  },
});

export default CustomHeader;