import { useState } from "react";
import { View, Text, FlatList } from "react-native";

import Botao from "../components/ui/Botao";
import Card from "../components/ui/Card";

function DashboardScreen({navigation, route}) {

    const login = route.params.usuario;
    const senha = route.params.senha;

    const [saldo, setSaldo] = useState(50.90);
    const [transacoes, setTransacoes] = useState([
        {horario: '12/02/2020', valor: 24.50},
        {horario: '25/11/2021', valor: 11.75},
        {horario: '22/11/2021', valor: 11.75},
        {horario: '15/11/2021', valor: 11.75}
    ]);

    function novaTransacao() {
        navigation.navigate('NovaTransacaoScreen', {usuario: login, senha: senha});
    }

    return(
        <View>
            <View>
                <View>
                    <Text>{login}</Text>
                    <Text>{senha}</Text>
                </View>
                <Botao onPress={novaTransacao}>NOVA TRANSAÇÃO</Botao>
                <View>
              <Text>SALDO: R${saldo.toFixed(2)}</Text>
            </View>
            <View>
              <FlatList data={transacoes} 
              keyExtractor={transacao => transacao.horario} 
              renderItem={transacao => 
                <Card horario={transacao.item.horario} valor={transacao.item.valor}/>
              }/>
            </View> 
            </View>
        </View>
    );
}

export default DashboardScreen;