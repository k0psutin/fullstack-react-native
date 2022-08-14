import { FlatList, View, StyleSheet } from 'react-native'
import theme from '../../theme'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.background
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = ({ repositories }) => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem item={item}/>}
    />
  )
}

export default RepositoryList