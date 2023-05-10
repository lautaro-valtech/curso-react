import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp />', () => {
  // test('Debe hacer un match con el snapshot', () => {
  //   const title = 'Hola, soy Goku';
  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test('Debe mostrar el título en un h1', () => {
    const title = 'Hola, soy Goku';
    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();
    expect(getByTestId('test-title').innerHTML).toContain(title);
  });

  test('Debe mostrar el subtítulo enviado por props', () => {
    const title = 'Hola, soy Goku';
    const subTitle = 'Soy un subtítulo';
    const { getAllByText } = render(
      <FirstApp title={title} subTitle={subTitle} />
    );

    expect(getAllByText(subTitle).length).toBe(2);
  });
});
