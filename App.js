import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import Login from './pages/Login';

export default function App() {
  const [mood, setMood] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <View style={styles.appContainer}>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <>
          <Pressable
            style={{
              ...styles.pressable,
              backgroundColor: mood === 'Exhausted' ? 'green' : 'white',
            }}
            onPress={() => {
              setMood('Exhausted');
            }}
          >
            <Text style={styles.text}>Exhausted</Text>
          </Pressable>
          <Pressable
            style={{
              ...styles.pressable,
              backgroundColor: mood === 'Nauseous' ? 'green' : 'white',
            }}
            onPress={() => {
              setMood('Nauseous');
            }}
          >
            <Text style={styles.text}>Nauseous</Text>
          </Pressable>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    margin: 'auto',
    padding: 50,
    paddingHorizontal: 16,
    marginTop: 20,
    height: '100%',
    gap: 20,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    padding: 10,
  },
  pressable: {
    borderWidth: 2,
  },
});
