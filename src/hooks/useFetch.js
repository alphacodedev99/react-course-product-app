import { useEffect, useState } from "react";
import ProductService from "../services/ProductService";

import { toast } from 'react-toastify';

const useFetch = () => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        ProductService.getAllProducts()
            .then(res => {
                setData(res.data.products)
                setIsLoading(false);
                setTimeout(() => toast.success('Data saved successfully!!'), 3000)
            })
            .catch(err => console.log(err))
    }, [])

    return { data, isLoading };
}

export default useFetch;