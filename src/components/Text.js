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
  fontSizeAppBar: {
    fontSize: theme.fontSizes.appBar
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  marginLeft: {
    marginLeft: 20
  },
  marginRight: {
    marginRight: 20
  }
});

const Text = ({ color, fontSize, fontWeight, style, marginLeft, marginRight, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'appBar' && styles.colorAppBar,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'appBar' && styles.fontSizeAppBar,
    fontWeight === 'bold' && styles.fontWeightBold,
    marginLeft && styles.marginLeft,
    marginRight && styles.marginRight,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;