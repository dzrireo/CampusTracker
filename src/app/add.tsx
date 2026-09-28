import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import { router } from 'expo-router';
import { useCampus } from '@/context/CampusContext';

export default function AddEventScreen() {
  const { addItem } = useCampus();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');

  const handleAddEvent = () => {
    if (!title || !date || !location) {
      return;
    }

    addItem(title, date, location);

    router.back();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Campus Event</Text>

      <Text style={styles.label}>Event Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter event name"
        value={title}
        onChangeText={setTitle}
      />

      <Text style={styles.label}>Date</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter date"
        value={date}
        onChangeText={setDate}
      />

      <Text style={styles.label}>Location</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter location"
        value={location}
        onChangeText={setLocation}
      />

      <Pressable
        style={styles.button}
        onPress={handleAddEvent}
      >
        <Text style={styles.buttonText}>Add Event</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 25,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },

  input: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
    fontSize: 16,
  },

  button: {
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
  },

  buttonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});