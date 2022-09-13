import { FlatList, View, StyleSheet } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import theme from '../../theme'
import RepositoryItem from './RepositoryItem'

const styles = StyleSheet.create({
  separator: {
    height: 10,
    backgroundColor: theme.colors.background
  },
})

const ItemSeparator = () => <View style={styles.separator} />

const RepositoryList = ({ repositories, filter, setFilter }) => {
  return (
    <>
      <Picker
      selectedValue={filter}
      onValueChange={(itemValue) => setFilter(itemValue)}
      >
            <Picker.Item label='Latest repositories' value={'LATEST'} />
            <Picker.Item label='Highest rated repositories' value={'HIGH_RATING'} />
            <Picker.Item label='Lowest rated repositories' value={'LOW_RATING'} />
        </Picker>
      <FlatList
        data={repositories}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
      />
    </>
  )
}

export default RepositoryList