import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        alignSelf: 'flex-start',
        width: '95%'
    }
});

const TextInput = ({ style, multiline, ...props }) => {
  const textInputStyle = [
    style,
    styles.input
];

  return <NativeTextInput multiline={multiline} style={textInputStyle} {...props} />;
};

export default TextInput;