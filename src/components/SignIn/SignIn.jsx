import { View, StyleSheet } from "react-native";

import { Formik } from 'formik'
import * as yup from 'yup'
import FormikTextInput from "../Shared/FormikTextInput";
import theme from "../../theme";
import Button from "../Shared/Button";


const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.colors.repositoryItemBackground,
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
            <Button text='Log in' onPress={onSubmit} />
        </View>
    )
}

const SignIn = ({ onSubmit }) => {
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