const { render, screen } = require('@testing-library/react');
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test <GifGrid />', () => {
    const category = 'One Punch';

    test('Should show Loading when init', () => {
        useFetchGifs.mockReturnValue({ images: [], isLoading: true });

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
        // screen.debug();
    });

    test('Should show items when images are loaded via useFetchGifs', () => {
        const gifs = [
            {
                id: 'abc',
                title: 'Saitama',
                url: 'https://giphy.com',
            },
            {
                id: 'def',
                title: 'Goku',
                url: 'https://giphy.com',
            },
        ];

        useFetchGifs.mockReturnValue({ images: gifs, isLoading: true });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(gifs.length);

        // screen.debug();
    });
});
