import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useCounter } from '../../src/hooks/useCounter';
import { useFetch } from '../../src/hooks/useFetch';

jest.mock('../../src/hooks/useCounter');
jest.mock('../../src/hooks/useFetch');

describe('Pruebas en <MultipleCustomHooks />', () => {
  useCounter.mockReturnValue({
    counter: 1,
    increment: jest.fn(),
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Debe mostrar el componente por defecto', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next quote' });

    expect(screen.getByText('Loading...'));
    expect(screen.getByText('Breaking Bad Quotes'));
    expect(nextButton.disabled).toBeTruthy();
  });

  test('Debe mostrar un quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'author', quote: 'quote' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    expect(screen.getByText('author')).toBeTruthy();
    expect(screen.getByText('quote')).toBeTruthy();

    const nextButton = screen.getByRole('button', { name: 'Next quote' });

    expect(nextButton.disabled).toBeFalsy();
  });

  test('Debe llamar a la función increment', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'author', quote: 'quote' }],
      isLoading: false,
      hasError: null,
    });

    render(<MultipleCustomHooks />);
    const nextButton = screen.getByRole('button', { name: 'Next quote' });
    fireEvent.click(nextButton);

    expect(increment).toHaveBeenCalled();
  });
});
