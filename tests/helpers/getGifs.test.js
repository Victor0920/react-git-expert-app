import { getGifs } from '../../src/helpers/getGifs';

describe('Tests in getGifs()', () => {
    test('Must return a gif array', async () => {
        const gifs = await getGifs('One punch');

        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String),
        });
    });
});
