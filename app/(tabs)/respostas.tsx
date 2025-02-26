import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';

export default function App() {
  const [mensagem, setMensagem] = useState('');

  const handleCadastrar = () => {
    alert('Cadastrar Nova Resposta');
  };

  const handlePesquisar = () => {
    throw new Error('Function not implemented.');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      {/* Cabeçalho: Logo Fala Campus à esquerda, Login à direita */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/Fala_campus-logo.png')} style={styles.logo} />
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Card para segurar todo o conteúdo central */}
      <View style={styles.card}>
        {/* Título "Respostas" */}
        <Text style={styles.title}>Respostas</Text>

        {/* Label e campo de texto para mensagem */}
        <Text style={styles.label}>Mensagem:</Text>
        <TextInput
          style={styles.input}
          placeholder="Incluir resposta"
          value={mensagem}
          onChangeText={setMensagem}
        />

        {/* Botão "Pesquisar" */}
        <TouchableOpacity style={styles.searchButton} onPress={handlePesquisar}>
          <Text style={styles.searchButtonText}>Pesquisar</Text>
        </TouchableOpacity>

        {/* "Tabela" de respostas */}
        <View style={styles.tableContainer}>
          {/* Cabeçalho da tabela */}
          <View style={styles.tableHeader}>
            <Text style={[styles.tableHeaderText, { flex: 0.5 }]}>Id</Text>
            <Text style={[styles.tableHeaderText, { flex: 2 }]}>Mensagem</Text>
            <Text style={[styles.tableHeaderText, { flex: 1 }]}>Id Comentário</Text>
            <Text style={[styles.tableHeaderText, { flex: 1.3 }]}>Data/Hora de Criação</Text>
          </View>
        </View>

        {/* Botão "Cadastrar Nova Resposta" */}
        <TouchableOpacity style={styles.newResponseButton} onPress={handleCadastrar}>
          <Text style={styles.newResponseButtonText}>+ Cadastrar Nova Resposta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
    borderRadius: 10,
    elevation: 3,
  },
  logo: {
    width: 120,
    height: 40,

  },
  loginButton: {
    backgroundColor: '#8bc34a',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
  },
  loginText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    padding: 30,
    margin: 30,
    borderRadius: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    alignContent: 'center', 
    marginTop: 160,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  searchButton: {
    backgroundColor: 'purple',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  searchButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  tableContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  tableHeaderText: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  newResponseButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-end',
  },
  newResponseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
