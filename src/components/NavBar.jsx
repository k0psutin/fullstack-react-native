import { Link } from "react-router-native"
import Text from "./Text"

const NavBar = () => {
    return (
        <>
            <Link to='/'>
                <Text marginLeft color={'appBar'} fontSize={'appBar'} fontWeight={'bold'}>Repositories</Text>
            </Link>
            <Link to='/signIn'>
                <Text marginLeft color={'appBar'} fontSize={'appBar'} fontWeight={'bold'}>Sign In</Text>
            </Link>
        </>
    )
}

export default NavBar