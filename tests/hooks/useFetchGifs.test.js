import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Tests in the useFetchGifs hook', () => {
    test('Must return initial value', () => {
        // un hook necesita llamarse dentro de el ciclo de vida de React. No se puede llamar la función directamtente. La función denderHook() se encarga de esto

        const { result } = renderHook(() => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    });
    +test('Must return array of images and isLoading false', async () => {
        // un hook necesita llamarse dentro de el ciclo de vida de React. No se puede llamar la función directamtente. La función denderHook() se encarga de esto

        const { result } = renderHook(() => useFetchGifs('One Punch'));

        // Esto lo que hace es que se espera a que las imágenes sean mayores a 0. Luego sigue.
        await waitFor(() =>
            expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();
    });
});
