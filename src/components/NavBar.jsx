import { Pressable } from "react-native"
import Text from "./Text"

const NavBar = () => {
    return (
        <>
            <Pressable>
                <Text marginLeft color={'appBar'} fontSize={'appBar'} fontWeight={'bold'}>Repositories</Text>
            </Pressable>
        </>
    )
}

export default NavBar