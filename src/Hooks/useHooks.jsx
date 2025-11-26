import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react"
const useHooks = () => {
    const [trees, setTrees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        setLoading(true);
        axios('../data.JSON').then(data => setTrees(data.data)).catch(err => setError(err)).finally(()=> setLoading(false))
    },[])

    return {trees, loading, error};
};

export default useHooks;