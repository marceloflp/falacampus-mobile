import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; 

const FeedbackScreen = () => {
  const router = useRouter(); 

  return (
    <View style={styles.colorcontainer}>
      <Text>Página de Feedback</Text>
      <Button title="Voltar" onPress={() => router.back()} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  colorcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
});

export default FeedbackScreen;
