import { useState } from "react"
import useRepositories from "../../hooks/useRepositories"
import RepositoryList from "./RepositoryList"

let timerId = null

const RepositoryContainer = () => {
    const [filter, setFilter] = useState('LATEST')
    const [searchKeyword, setSearchKeyword] = useState('')
    const { repositories } = useRepositories(filter, searchKeyword)

    const onSetSearchKeyword = (value) => {
        if (timerId) {
            clearTimeout(timerId)
        }
        timerId = setTimeout(() => {
            setSearchKeyword(value)
        }, 500);
    }

    return <RepositoryList repositories={repositories} filter={filter} setFilter={setFilter} onSetSearchKeyword={onSetSearchKeyword} />
}

export default RepositoryContainer