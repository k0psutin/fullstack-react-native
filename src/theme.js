import { Platform } from 'react-native'

const theme = {
    colors: {
      textPrimary: '#24292e',
      textSecondary: '#586069',
      textAppBar: '#ffffff',
      textSubheading: '#696969',
      primary: '#0366d6',
      background: '#e1e4e8',
      repositoryItemBackground: 'white',
    },
    fontSizes: {
      body: 14,
      subheading: 16,
      itemHeader: 20,
      appBar: 24,
    },
    fonts: {
      main: Platform.select({
        android: 'sans-serif',
        ios: 'arial',
        default: 'system'
      }),
    },
    fontWeights: {
      normal: '400',
      bold: '700',
    },
  };
  
  export default theme;