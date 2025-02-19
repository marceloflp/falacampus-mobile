import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert, Keyboard } from 'react-native';
import { Provider, Menu, Button } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

const SearchComments = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchType, setSearchType] = useState('Buscar por');
    const [menuVisible, setMenuVisible] = useState(false);

    const handleSearch = () => {
        if (!searchQuery.trim()) {
            Alert.alert('Aviso', 'Por favor, preencha o campo de título antes de pesquisar.');
            return;
        }
        Alert.alert('Pesquisar', `Buscando por: ${searchQuery} - Tipo: ${searchType}`);
    };

    return (
        <Provider>
            <View style={styles.outerContainer}>
                <Image source={require('../../assets/images/Fala_campus-logo.png')} style={styles.logo} />
                <View style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Buscar Comentários</Text>

                        <Text style={styles.label}>Título: *</Text>
                        <TextInput
                            style={styles.input}
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                            placeholder="Digite o título"
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
                                        {searchType} <AntDesign name="down" size={14} color="black" />
                                    </Button>
                                }
                            >
                                <Menu.Item onPress={() => { setSearchType("Título"); setMenuVisible(false); }} title="Título" />
                                <Menu.Item onPress={() => { setSearchType("Autor"); setMenuVisible(false); }} title="Autor" />
                                <Menu.Item onPress={() => { setSearchType("Comentário"); setMenuVisible(false); }} title="Comentário" />
                            </Menu>
                        </View>

                        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                            <Text style={styles.buttonText}>Pesquisar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={styles.responseCard}>
                    <Text style={styles.responseTitle}>Comentários Respondidos</Text>
                </View>
            </View>
        </Provider>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        padding: 20,
    },
    container: {
        width: '100%',
        alignItems: 'center',
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
        alignItems: 'center',
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
        alignSelf: 'flex-start',
    },
    input: {
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        marginTop: 5,
        color: '#333',
        width: '100%',
    },
    dropdownContainer: {
        marginTop: 10,
        alignSelf: 'flex-start',
        width: '100%',
    },
    dropdownButton: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CCC',
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    dropdownButtonText: {
        fontSize: 14,
        color: 'black',
    },
    searchButton: {
        backgroundColor: 'green',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    responseCard: {
        backgroundColor: 'white',
        width: '90%',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        marginTop: 20,
    },
    responseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default SearchComments;
