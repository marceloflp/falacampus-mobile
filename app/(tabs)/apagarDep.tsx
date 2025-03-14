import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, FlatList, Modal, RefreshControl, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ApagarDepartamento = () => {
  const [departments, setDepartments] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Carrega os departamentos salvos
  const loadDepartments = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const departmentKeys = keys.filter((key) => key.startsWith('department_'));
      const departmentsData = await AsyncStorage.multiGet(departmentKeys);
      const departmentsList = departmentsData.map(([key, value]) => JSON.parse(value));
      setDepartments(departmentsList);
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Ocorreu um erro ao carregar os departamentos.');
    }
  };

  // Abre o modal de confirmação para deletar
  const handleDeleteConfirmation = (department) => {
    setSelectedDepartment(department);
    setModalVisible(true);
  };

  // Deleta o departamento
  const handleDelete = async () => {
    if (!selectedDepartment) return;

    try {
      await AsyncStorage.removeItem(`department_${selectedDepartment.id}`);
      setModalVisible(false);
      loadDepartments(); // Recarrega a lista após a deleção
      Alert.alert('Sucesso', 'Departamento deletado com sucesso!');
    } catch (error) {
      console.log(error);
      Alert.alert('Erro', 'Ocorreu um erro ao deletar o departamento.');
    }
  };

  // Carrega os departamentos ao abrir a página
  useEffect(() => {
    loadDepartments();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    loadDepartments().then(() => setRefreshing(false));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/Fala_campus-logo.png')} style={styles.logo} />
      <Text style={styles.title}>Apagar Departamento</Text>

      {/* Lista de departamentos */}
      <FlatList
        data={departments}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.departmentItem}
            onPress={() => handleDeleteConfirmation(item)}
          >
            <Text style={styles.departmentName}>{item.nome}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal de confirmação */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>
              Tem certeza que deseja deletar o departamento "{selectedDepartment?.nome}"?
            </Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalButton} onPress={handleDelete}>
                <Text style={styles.buttonText}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Text style={styles.footer}>Projeto Fala Campus Mobile - IFPB - Guarabira 2025</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  departmentItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
  },
  departmentName: {
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  modalButton: {
    backgroundColor: '#6cb43f',
    padding: 10,
    borderRadius: 5,
    width: '40%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#82368c',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
    fontSize: 12,
    color: '#666',
  },
});

export default ApagarDepartamento;