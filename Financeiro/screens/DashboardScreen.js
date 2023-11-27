import { View, Text } from "react-native";

import Botao from "../components/ui/Botao";

function DashboardScreen({navigation, route}) {

    const usuario = route.params.usuario;
    const senha = route.params.psw;

    function novaTransacao() {
        navigation.navigate('NovaTransacaoScreen');
    }

    return(
        <View>
            <View>
                <View>
                    <Text>BEM-VINDO!</Text>
                </View>
                <View>
                    <Text>{usuario}</Text>
                    <Text>{senha}</Text>
                </View>
                <Botao onPress={novaTransacao}>NOVA TRANSAÇÃO</Botao>
            </View>
        </View>
    );
}

export default DashboardScreen;