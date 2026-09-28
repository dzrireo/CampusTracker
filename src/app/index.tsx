import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  Pressable,
  View,
} from 'react-native';
import { router } from 'expo-router';
import { useCampus } from '@/context/CampusContext';

export default function HomeScreen() {
  const { campusItems } = useCampus();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>CampusTracker</Text>

        <Text style={styles.subtitle}>
          Stay updated with campus events
        </Text>
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          pressed && styles.buttonPressed,
        ]}
        onPress={() => router.push('/add')}
      >
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </Pressable>

      <Text style={styles.sectionTitle}>Upcoming Events</Text>

      <FlatList
        data={campusItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() =>
              router.push({
                pathname: '/details/[id]',
                params: { id: item.id },
              })
            }
          >
            <View style={styles.cardTop}>
              <Text style={styles.itemTitle}>
                {item.title}
              </Text>
            </View>

            <Text style={styles.itemInfo}>
              📅 {item.date}
            </Text>

            <Text style={styles.itemInfo}>
              📍 {item.location}
            </Text>

            <View style={styles.divider} />

            <Text style={styles.viewDetails}>
              View details →
            </Text>
          </Pressable>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No campus events yet.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#F2EFE6',
  },

  header: {
    backgroundColor: '#164A35',
    padding: 22,
    borderRadius: 18,
    marginBottom: 18,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },

  subtitle: {
    fontSize: 15,
    color: '#C8DCCF',
    marginTop: 5,
  },

  addButton: {
    backgroundColor: '#3E8E68',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 24,
  },

  buttonPressed: {
    opacity: 0.7,
  },

  addButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: 'bold',
  },

  sectionTitle: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#164A35',
    marginBottom: 12,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    marginBottom: 13,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,

    elevation: 2,
  },

  cardPressed: {
    opacity: 0.7,
  },

  cardTop: {
    borderLeftWidth: 4,
    borderLeftColor: '#3E8E68',
    paddingLeft: 12,
    marginBottom: 10,
  },

  itemTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#164A35',
  },

  itemInfo: {
    fontSize: 15,
    color: '#5C665F',
    marginTop: 6,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginVertical: 14,
  },

  viewDetails: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#3E8E68',
  },

  emptyText: {
    textAlign: 'center',
    color: '#777',
    marginTop: 30,
    fontSize: 16,
  },
});