import { Pressable, View, StyleSheet } from "react-native";
import { Formik } from 'formik'
import * as yup from 'yup'
import Text from "./Text";
import FormikTextInput from "./FormikTextInput";
import theme from "../theme";
import useSignIn from "../hooks/useSignIn";
import AuthStorage from "../utils/authStorage";

const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.repositoryItemBackground,
      paddingBottom: 10
    },
  });

const initialValues = {
    username: '',
    password: ''
}

const validationSchema = yup.object().shape({
    username: yup
      .string()
      .min(1, 'Username is required')
      .required('Username is required'),
    password: yup
      .string()
      .min(1, 'Password is required')
      .required('Password is required')
})

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput name='username' placeholder='Username'/>
            <FormikTextInput name='password' placeholder='Password'/>
            <Pressable onPress={onSubmit}>
                <Text button>Log in</Text>
            </Pressable>
        </View>
    )
}

const SignIn = () => {
    const [signIn] = useSignIn()
    
    const onSubmit = async (values) => {
        const { username, password } = values

        try {
          const { data } = await signIn({ username, password })
          const authStorage = new AuthStorage('user')
          await authStorage.setAccessToken(data.authenticate.accessToken)
        } catch (e) {
            console.log(e)
        }
    }
    
    return (
        <Formik 
            validationSchema={validationSchema}
            initialValues={initialValues}
            onSubmit={onSubmit}>
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    )
}

export default SignIn;