import { FlatList } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import RepositoryItem from './RepositoryItem'
import TextInput from '../Shared/TextInput'
import ItemSeparator from '../Shared/ItemSeparator'

const RepositoryList = ({ repositories, onEndReached, filter, setFilter, onSetSearchKeyword }) => {
  return (
    <>
      <TextInput 
       searchInput
       onChangeText={(value) => onSetSearchKeyword(value)}
      />
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
        onEndReached={onEndReached}
        onEndReachedThreshold={0.5}
      />
    </>
  )
}

export default RepositoryList