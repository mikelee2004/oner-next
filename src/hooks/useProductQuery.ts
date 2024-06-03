'use client'

import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/fetch';

const useCardsQuery = () => {
    return useQuery({
        queryFn: fetchProducts,
        queryKey: ['product'],
        staleTime: 1000 * 5,
    });
};

export { useCardsQuery };  