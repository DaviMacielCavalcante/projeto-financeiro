import { View, Text, StyleSheet } from 'react-native'

function Card({horario, valor}) {
    return(
        <View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.txt}>TRANSFERÊNCIA</Text>                    
                </View>
                <View style={styles.txtContainer}>                  
                    <View>
                        <Text style={styles.txt}>{horario}</Text>
                    </View>
                    <View>
                        <Text style={styles.txt}>R$ {valor.toFixed(2)}</Text>
                    </View>  
                </View>  
            </View>                                               
        </View>
    );
        
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgb(94, 16, 95)',
        margin: 12,        
        borderRadius: 10,
        alignSelf: 'center',
        flex: 1,
        width: '90%'        
    },
    cardHeader :{
        alignItems: 'center',
    },
    txtContainer: {
        backgroundColor: 'rgb(94, 16, 95)',
        margin:  10,
        flex: 1,
        flexDirection: 'row',   
        justifyContent: 'space-between'
    }
    ,
    txt: {
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        fontSize: 20,
    }
});

export default Card;