import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    // Si dejo el segundo argumento vacío ([]), el useEffect se ejecutará solo la primera vez que se renderiza
    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    };
};
