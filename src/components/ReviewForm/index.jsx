import { useNavigate } from 'react-router-native'
import { useState } from 'react'
import useCreateReview from "../../hooks/useCreateReview"
import Review from "./Review"

const ReviewFormContainer = () => {
    const [createReview] = useCreateReview()
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    const onSubmit = async (values) => {
        const { repositoryName, ownerName, rating, text } = values
        try {
            const { data: { createReview: { repositoryId }}} = await createReview(repositoryName, ownerName, rating, text)
        navigate(`/repository/${repositoryId}`)
        } catch (e) {
            setError(e.message)
            setTimeout(() => {
                setError(null)
            }, 2000)
        }
    }

    return <Review onSubmit={onSubmit} error={error} />
}

export default ReviewFormContainer