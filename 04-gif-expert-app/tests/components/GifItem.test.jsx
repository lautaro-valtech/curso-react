import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Prueba en <GifItem />', () => {
  const title = 'Saitama';
  const url = 'https://example.com/';

  test('Debe hacer match con el snapshot', () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('Debe mostrar la imagen con el url y el alt indicado', () => {
    render(<GifItem title={title} url={url} />);
    const { alt, src } = screen.getByRole('img');
    expect(alt).toBe(title);
    expect(src).toBe(url);
  });

  test('Debe mostrar el título en el componente', () => {
    render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
