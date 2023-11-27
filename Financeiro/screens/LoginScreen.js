import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Botao from "../components/ui/Botao";

function LoginScreen({navigation}) {

    const dados = [{
        usuario: "admin",
        senha: 'admin',
    }]   

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    function criarContaHandler() {
        dados.push({
            usuario: login,
            senha: senha
        });
        navigation.navigate('DashboardScreen', {usuario: login, senha: senha});        
    }

    function loginHandler(text) {
        setLogin(text);
    }

    function senhaHandler(text) {
        setSenha(text);
    }

    return (
        <View>
            <View>
                <Text>Login: </Text>
                <TextInput onChangeText={loginHandler} style={styles.input}/>
            </View>
            <View>
                <Text>Senha: </Text>
                <TextInput onChangeText={senhaHandler} style={styles.input}/>
            </View>
            <Botao onPress={criarContaHandler}>CRIAR CONTA</Botao>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }
});

export default LoginScreen;