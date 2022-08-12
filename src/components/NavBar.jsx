import { Pressable } from "react-native"
import { Link } from "react-router-native"
import useCurrentUser from "../hooks/useCurrentUser"
import Text from "./Text"
import useSignOut from "../hooks/useSignOut"

const NavBar = () => {
    const { data: { me } } = useCurrentUser()
    const [signOut] = useSignOut()

    return (
        <>
            <Link to='/'>
                <Text marginLeft color={'appBar'} fontSize={'appBar'} fontWeight={'bold'}>Repositories</Text>
            </Link>
            {me === null &&
                <Link to='/signIn'>
                    <Text marginLeft color={'appBar'} fontSize={'appBar'} fontWeight={'bold'}>Sign In</Text>
                </Link>
            }
            {me !== null &&
                <Pressable onPress={async () => signOut()}>
                    <Text marginLeft color={'appBar'} fontSize={'appBar'} fontWeight={'bold'}>Sign Out</Text>
                </Pressable>
            }
        </>
    )
}

export default NavBar