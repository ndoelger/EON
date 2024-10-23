import React, { useState } from 'react';
import { Text, TextInput, StyleSheet, View, Pressable } from 'react-native';
import { supabase } from '../util/supabaseClient';

function Login() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');

  const loginChangeHandler = (inputIdentifier, e) => {
    setUser((curUser) => {
      return { ...curUser, [inputIdentifier]: e };
    });
  };

  async function sendOtp() {
    const { user, error } = await supabase.auth.signInWithOtp({
      phone: `+1${phone}`,
    });
  }

  const verifyOtp = async () => {
    const {
      data: { session },
      error,
    } = await supabase.auth.verifyOtp({
      phone: `+1${phone}`,
      token: otp,
      type: 'sms',
    });
  };

  return (
    <View>
      <Text>Phone Number</Text>
      <TextInput onChangeText={(text) => setPhone(text)} value={phone} />
      <Text>OTP</Text>
      <TextInput onChangeText={(text) => setOtp(text)} value={phone} />

      <Pressable
        style={{
          ...styles.pressable,
          
        }}
        onPress={sendOtp}
      >
        <Text style={styles.text}>OTP</Text>
      </Pressable>
    </View>
  );
}

export default Login;

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
