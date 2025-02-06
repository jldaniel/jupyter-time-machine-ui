import './App.css'
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e?: React.FormEvent) => {
        e?.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <div>
            <h3>Search</h3>
            <form onSubmit={handleSearch} className="search-container">
                <div className="search-wrapper">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search..."
                        className="search-input"
                    />
                    <button type="submit" className="search-button">
                        Search
                    </button>
                </div>
                <div className="advanced-search-link">
                    <Link to="/advanced">Advanced Search</Link>
                </div>
            </form>
        </div>
    );
}

export default Search;