import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from 'expo-router';

const ApagarDepartamento = () => {
  const navigation = useNavigation();
  const [id, setId] = useState("");

  return (
    <View style={styles.container}>
                <Image source={require('../../assets/images/Fala_campus-logo.png')} style={styles.logo} />
<Text style={styles.title}>Apagar Departamento</Text>
      <Text style={styles.label}>Id do Departamento: *</Text>
      <TextInput
        style={styles.input}
        placeholder="0"
        keyboardType="numeric"
        value={id}
        onChangeText={setId}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>Projeto Fala Campus - DAC/ADS/IFPB 2022</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 10,
  },
  confirmButton: {
    backgroundColor: "#6cb43f",
    padding: 10,
    borderRadius: 5,
  },
  cancelButton: {
    backgroundColor: "#82368c",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    color: "#666",
  },
});

export default ApagarDepartamento;
