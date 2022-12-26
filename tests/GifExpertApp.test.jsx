import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

const inputValue = 'Goku';

describe('Tests in <GifExpertApp />', () => {
    test('Should add new category', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(screen.getByText(inputValue)).toBeTruthy();
    });

    test('Should not add new category when text already exists', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: inputValue.toUpperCase() } });
        fireEvent.submit(form);

        expect(screen.getAllByText(inputValue).length).toBe(1);
    });
});
