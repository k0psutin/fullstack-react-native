import Text from "./Text"

const RepositoryItem = ({ item }) => {
    const {
        fullName,
        description,
        language,
        forksCount,
        stargazersCount,
        reviewCount,
        ratingAverage
    } = item

    return (
        <>
            <Text>Full name: {fullName}</Text>
            <Text>Description: {description}</Text>
            <Text>Language: {language}</Text>
            <Text>Stars: {stargazersCount}</Text>
            <Text>Forks: {forksCount}</Text>
            <Text>Reviews: {reviewCount}</Text>
            <Text>Rating: {ratingAverage}</Text>
        </>
    )
}

export default RepositoryItem