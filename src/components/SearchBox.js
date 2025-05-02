"use client"

import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";  // Import search icon
import "./searchbox.css";

export default function SearchBox() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if (query.length > 2) {
                try {
                    const response = await fetch(`https://dragonslayer.discountcodez.test/api/v1/search?query=${query}`, {
                        headers: {
                            "Content-Type": "application/json",
                            "X-VENDOR-KEY": "01jcbwcv84jvzvx1cevjz58r8w"
                        }
                    });
                    const data = await response.json();

                    setResults(data?.data);
                    setShowDropdown(true);
                } catch (error) {
                    console.error('Error fetching search results:', error);
                }
            } else {
                setShowDropdown(false);
                setResults([]);
            }
        };

        fetchData();
    }, [query]);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSelect = (result) => {
        setQuery(result.name);
        setShowDropdown(false);
    };

    return (
        <div className="search-container">
            <FaSearch className="search-icon" /> {/* Search icon added */}
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder="Search for coupons and store"
                className="form-control"
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setShowDropdown(false)}
            />
            {showDropdown && results.length > 0 && (
                <div className="dropdown">
                    {results.map((result, index) => (
                        <div key={index} className="dropdown-item" onMouseDown={() => handleSelect(result)}>
                            <strong>Store:</strong> {result.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
