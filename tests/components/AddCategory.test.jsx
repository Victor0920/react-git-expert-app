import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Tests in <AddCategory />', () => {
    const inputValue = 'Saitama';

    test('Must change value in the input field', () => {
        render(<AddCategory onNewCategory={() => {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, { target: { value: inputValue } });

        expect(input.value).toBe(inputValue);

        // screen.debug();
    });

    test('Must call onNewCategory() if input has value', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form);

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    });

    test('OnNewCategory() should not be called if input is empty', () => {
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);

        expect(onNewCategory).not.toHaveBeenCalled();
    });
});
