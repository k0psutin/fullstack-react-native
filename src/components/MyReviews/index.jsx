import { FlatList } from "react-native"
import useCurrentUser from "../../hooks/useCurrentUser"
import ItemSeparator from "../Shared/ItemSeparator"
import ReviewItem from "../Shared/ReviewItem"

const MyReviews = () => {
    const { reviews, handleFetchMore } = useCurrentUser(true)

    const onEndreached = () => {
        handleFetchMore()
    }

    return <FlatList 
    data={reviews}
    renderItem={({ item }) => <ReviewItem item={item} />}
    keyExtractor={({ id }) => id}
    ItemSeparatorComponent={ItemSeparator}
    onEndReached={onEndreached}
    onEndReachedThreshold={0.5}
    />
}

export default MyReviews