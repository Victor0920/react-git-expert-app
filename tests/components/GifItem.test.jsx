import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

const title = 'One Punch Gif';
const url =
    'https://media1.giphy.com/media/l1IYax3ObvxNgOmre/giphy.gif?cid=ecf05e472e77aaeaec8618c3e82a8155b83b1f1fb7d22088&rid=giphy.gif&ct=g';

describe('Tests in <GifItem />', () => {
    test('Must do match with snapshot', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();
    });

    test('Must show image with url and alt', () => {
        render(<GifItem title={title} url={url} />);

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);
        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Must show title in component', () => {
        render(<GifItem title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();
    });
});
