import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok)
                        throw Error('could not fethc the data from the API');
                    return res.json();
                })
                .then(data => {
                    setError(null);
                    setData(data);
                    setIsLoading(false);
                }).catch((err) => {
                    if (!err.name === 'AbortError') {
                        setIsLoading(false);
                        setError(err.message);
                    }
                })
        }, 1000);

        return () => {
            abortCont.abort();
        }

    }, [url]);

    return { data, isLoading, error };
}

export default useFetch