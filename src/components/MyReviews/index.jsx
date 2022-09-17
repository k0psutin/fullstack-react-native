import { Alert, FlatList } from "react-native"
import { useNavigate } from "react-router-native"
import useCurrentUser from "../../hooks/useCurrentUser"
import useDeleteReview from "../../hooks/useDeleteReview"
import ItemSeparator from "../Shared/ItemSeparator"
import ReviewItem from "../Shared/ReviewItem"

const MyReviews = () => {
    const navigate = useNavigate()
    const { reviews, refetch, handleFetchMore } = useCurrentUser(true)
    const [deleteReview] = useDeleteReview()

    const onEndreached = () => {
        handleFetchMore()
    }

    const handleDeleteReview = async (id) => {
        await deleteReview(id)
        refetch()
    }

    const onDeleteReview = (id) => 
       Alert.alert(
        'Delete review',
        'Are you sure you want to delete this review?',
        [
            {
                text: 'Cancel',
                onPress: () => null,
                style: 'cancel'
            },
            {
                text: 'Delete',
                onPress: () => handleDeleteReview(id),
                style: 'ok'
            }
        ],
         {
            cancelable: true,
            onDismiss: () => null,
         }
       )
    

    const onViewRepository = (id) => {
        navigate(`/repository/${id}`)
    }

    return <FlatList 
    data={reviews}
    renderItem={({ item }) => <ReviewItem item={item} onDeleteReview={onDeleteReview} onViewRepository={onViewRepository} />}
    keyExtractor={({ id }) => id}
    ItemSeparatorComponent={ItemSeparator}
    onEndReached={onEndreached}
    onEndReachedThreshold={0.5}
    />
}

export default MyReviews