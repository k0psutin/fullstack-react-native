import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    colorAppBar: {
        color: theme.colors.textAppBar
    },
    colorSubheading: {
        color: theme.colors.textSubheading
    },
    fontSizeAppBar: {
        fontSize: theme.fontSizes.appBar
    },
    fontSizeSubheading: {
        fontSize: theme.fontSizes.subheading,
    },
    fontSizeItemHeader: {
        fontSize: theme.fontSizes.itemHeader,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    },
    marginLeft: {
        marginLeft: 20
    },
    marginRight: {
        marginRight: 20
    },
    marginTop: {
        marginTop: 10
    },
    marginBottom: {
        marginBottom: 5
    },
    rounded: {
        borderRadius: 5,
        padding: 5,
    },
    border: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
    },
    strecth: {
        alignSelf: 'stretch'
    },
    button: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.repositoryItemBackground,
        height: 50,
        borderRadius: 5,
        padding: 15,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        textAlign: 'center'
    },
    primaryBackgroundColor: {
        backgroundColor: theme.colors.primary,
        color: theme.colors.repositoryItemBackground
    },
});

const Text = ({ backgroundColor, button, stretch, border, rounded, color, fontSize, fontWeight, style, marginLeft, marginRight, marginTop, marginBottom, ...props }) => {
    const textStyle = [
        styles.text,
        button && styles.button,
        stretch && styles.strecth,
        border && styles.border,
        rounded && styles.rounded,
        backgroundColor === 'primary' && styles.primaryBackgroundColor,
        color === 'subheading' && styles.colorSubheading,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        color === 'appBar' && styles.colorAppBar,
        fontSize === 'itemHeader' && styles.fontSizeItemHeader,
        fontSize === 'subheading' && styles.fontSizeSubheading,
        fontSize === 'appBar' && styles.fontSizeAppBar,
        fontWeight === 'bold' && styles.fontWeightBold,
        marginLeft && styles.marginLeft,
        marginRight && styles.marginRight,
        marginTop && styles.marginTop,
        marginBottom && styles.marginBottom,
        style,
    ];

    return <NativeText style={textStyle} {...props} />;
};

export default Text;