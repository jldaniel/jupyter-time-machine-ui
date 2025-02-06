import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import Search from './SearchBar'

function Home() {
    const navigate = useNavigate()

    return (
        <>
            <Search />
            <Button onClick={() => navigate('/upload')}>Upload Notebook</Button>
        </>
    )
}

export default Home 