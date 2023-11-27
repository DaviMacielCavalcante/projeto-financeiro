import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

import Botao from "../components/ui/Botao";

function NovaTransacaoScreen({navigation}) {

    const [data, SetData] = useState(Date.now())
    const [tipo, SetTipo] = useState('');
    const [valor, SetValor] = useState(0);

    function tipoHandler(tipo) {
        SetTipo(tipo);
    }

    function valorHandler(valor) {
        SetValor(valor);
    }

    function confirmarTransacao() {
        navigation.navigate('DashboardScreen');
    }

    return(
    <View>
        <View>
            <Text>Tipo: </Text>
            <TextInput onChangeText={tipoHandler} style={styles.input}/>
        </View>
        <View>
            <Text>Valor: </Text>
            <TextInput onChangeText={valorHandler} style={styles.input}/>
        </View>
        <Botao onPress={confirmarTransacao}>CONFIRMAR</Botao>
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

export default NovaTransacaoScreen;