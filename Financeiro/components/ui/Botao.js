import { View, Text, Pressable } from "react-native";

function Botao({children, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View>
                <Text>{children}</Text>
            </View>
        </Pressable>
    );
}

export default Botao;