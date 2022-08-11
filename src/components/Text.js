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
  primaryBackgroundColor: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.repositoryItemBackground
  },
});

const Text = ({ backgroundColor, rounded, color, fontSize, fontWeight, style, marginLeft, marginRight, marginTop, marginBottom, ...props }) => {
  const textStyle = [
    styles.text,
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