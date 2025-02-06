import './App.css'
import { useParams } from 'react-router-dom';

function Notebook() {
    const { notebookId } = useParams();

    return (
        <div>
            <h1>Notebook</h1>
            <p>Notebook ID: {notebookId}</p>
        </div>
    );
}

export default Notebook;
