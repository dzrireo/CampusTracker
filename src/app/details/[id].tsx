import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useCampus } from '@/context/CampusContext';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { campusItems } = useCampus();

  const event = campusItems.find((item) => item.id === id);

  if (!event) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Event Not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{event.title}</Text>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Date</Text>
        <Text style={styles.info}>{event.date}</Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.info}>{event.location}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 30,
  },

  infoBox: {
    backgroundColor: '#ffffff',
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
  },

  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },

  info: {
    fontSize: 18,
  },
});