import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Keyboard } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Provider, Menu, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const CommentRegistration = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    const [department, setDepartment] = useState('');
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [commentType, setCommentType] = useState('Tipo');
    const [menuVisible, setMenuVisible] = useState(false);

    const handleDateChange = (event: any, selectedDate?: Date) => {
        if (event.type === "set" && selectedDate) {
            setDate(selectedDate);
        }
        setShowDatePicker(false);
    };

    const handleSave = () => {
        if (!title || !message || !author || !department || commentType === 'Tipo') {
            Alert.alert('Aviso', 'Por favor, preencha todos os campos.');
            return;
        }

       

        Alert.alert('Sucesso', 'Comentário cadastrado com sucesso!');
        Keyboard.dismiss(); 
    };

    return (
        <Provider>
            <View style={styles.container}>
                <Image source={require('../../assets/images/Fala_campus-logo.png')} style={styles.logo} />

                <View style={styles.card}>
                    <Text style={styles.title}>Cadastro de Comentário</Text>

                    <Text style={styles.label}>Título: *</Text>
                    <TextInput
                        style={styles.input}
                        value={title}
                        onChangeText={setTitle}
                        placeholder="Digite o título do comentário"
                        placeholderTextColor="#333"
                        onBlur={() => Keyboard.dismiss()} 
                    />

                    <Text style={styles.label}>Mensagem: *</Text>
                    <TextInput
                        style={styles.input}
                        value={message}
                        onChangeText={setMessage}
                        placeholder="Digite a sugestão, crítica ou elogio"
                        placeholderTextColor="#333"
                        multiline
                        onBlur={() => Keyboard.dismiss()} 
                    />

                    <Text style={styles.label}>Data: *</Text>
                    <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
                        <Text>{date.toLocaleDateString('pt-BR')}</Text>
                    </TouchableOpacity>
                    {showDatePicker && (
                        <DateTimePicker
                            value={date}
                            mode="date"
                            onChange={handleDateChange}
                        />
                    )}

                    <Text style={styles.label}>Autor do comentário: *</Text>
                    <TextInput
                        style={styles.input}
                        value={author}
                        onChangeText={setAuthor}
                        placeholder="Digite seu nome"
                        placeholderTextColor="#333"
                        onBlur={() => Keyboard.dismiss()} 
                    />

                    <Text style={styles.label}>Nome do Departamento: *</Text>
                    <TextInput
                        style={styles.input}
                        value={department}
                        onChangeText={setDepartment}
                        placeholder="Digite nome do departamento"
                        placeholderTextColor="#333"
                        onBlur={() => Keyboard.dismiss()} 
                    />

                    <View style={styles.dropdownContainer}>
                        <Menu
                            visible={menuVisible}
                            onDismiss={() => setMenuVisible(false)}
                            anchor={
                                <Button
                                    mode="outlined"
                                    onPress={() => setMenuVisible(true)}
                                    style={styles.dropdownButton}
                                    labelStyle={styles.dropdownButtonText}
                                >
                                    {commentType} <AntDesign name="down" size={14} color="black" />
                                </Button>
                            }
                        >
                            <Menu.Item onPress={() => { setCommentType("Crítica"); setMenuVisible(false); }} title="Crítica" />
                            <Menu.Item onPress={() => { setCommentType("Elogio"); setMenuVisible(false); }} title="Elogio" />
                            <Menu.Item onPress={() => { setCommentType("Sugestão"); setMenuVisible(false); }} title="Sugestão" />
                        </Menu>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cancelButton}>
                            <Text style={styles.buttonText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    logo: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    card: {
        backgroundColor: 'white',
        width: '90%',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        marginTop: 5,
        color: '#333',
    },
    dropdownContainer: {
        marginTop: 10,
        alignSelf: 'flex-start',
    },
    dropdownButton: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 5,
        width: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dropdownButtonText: {
        fontSize: 14,
        color: 'black'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    saveButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
        marginRight: 10,
    },
    cancelButton: {
        backgroundColor: 'purple',
        padding: 15,
        borderRadius: 5,
        flex: 1,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    }
});

export default CommentRegistration;