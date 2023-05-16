/* eslint-disable react-hooks/rules-of-hooks */
import useMakeFetch from '@hooks/useMakeFetch';
import endPoints from '@services/api';
import { useState, useEffect } from 'react';
const GetCategories = () =>{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        (async () =>{
            try {
                const response = await useMakeFetch(endPoints.categories.getCategoriesList, 'GET');
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                alert(error);
            }
        })();
    },[]);
    return users;
};

export default GetCategories;