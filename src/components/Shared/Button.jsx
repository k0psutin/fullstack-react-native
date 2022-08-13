import { Pressable, View } from "react-native";
import Text from "./Text"

const Button = ({ text, onPress }) => {
    return (
        <View>
            <Pressable onPress={onPress}>
                <Text button>{ text }</Text>
            </Pressable>
        </View>
    )
}

export default Button