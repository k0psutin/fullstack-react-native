import SignIn from "./SignIn"
import { useNavigate } from 'react-router-native'
import useSignIn from "../../hooks/useSignIn";

const SignInContainer = () => {
    const [signIn] = useSignIn()
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { username, password } = values

        try {
          await signIn({ username, password })
          navigate('/', { replace: true })
        } catch (e) {
            console.log(e)
        }
    }

    return <SignIn onSubmit={onSubmit} />
}

export default SignInContainer