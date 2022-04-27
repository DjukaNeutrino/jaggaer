import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: response } = await axios.get('/data.json');
                setData(response);
            } catch (error) {
                setError(error)
            }
            setLoading(false);
        };

        return fetchData();
    }, []);

    return {
        data,
        loading,
        error
    };
};

export default useFetchData;