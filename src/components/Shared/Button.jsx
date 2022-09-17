import { Pressable, View } from "react-native";
import Text from "./Text"

const Button = ({ text, onPress, marginLeft = 10, marginRight = 10, width = 'auto', red = false }) => {
    return (
        <View style={{ marginLeft, marginTop: 10, marginBottom: 10, marginRight, width }}>
            <Pressable onPress={onPress}>
                <Text backgroundColor={red ? 'error' : 'primary'} fontWeight='bold' button>{ text }</Text>
            </Pressable>
        </View>
    )
}

export default Button