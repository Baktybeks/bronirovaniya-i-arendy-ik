'use client'

import React, {useEffect, useState} from 'react';

const PageApplicationLocation = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5000/api/rent')
            if (!response.ok) {
                throw new Error('Unable to fetch posts!')
            }
            const jsonData = await response.json()
            setData(jsonData)
        }

        fetchData()
    }, []);

    return (
        <div>

        </div>
    );
};

export default PageApplicationLocation;