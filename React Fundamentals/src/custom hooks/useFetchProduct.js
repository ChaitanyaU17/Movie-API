import {useEffect, useState} from "react"

export const useFetchProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProductData = async () => {
            try {
                setLoading(true);
                const res = await fetch('https://dummyjson.com/products');

                if (!res.ok) {
                    throw new Error('failed to fetch products data');
                }

                const data = await res.json();
                console.log(data);
                setProducts(data.products);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchProductData();
    }, [])

    return { products, loading, error }
};