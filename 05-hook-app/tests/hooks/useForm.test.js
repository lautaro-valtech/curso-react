import { act, renderHook } from '@testing-library/react';
import { useForm } from '../../src/hooks';

describe('Pruebas en useForm', () => {
  const initialForm = {
    name: 'lautaro',
    email: 'test@example.com',
  };

  test('Debe regresar los valores por defecto', () => {
    const { result } = renderHook(() => useForm(initialForm));
    expect(result.current).toEqual({
      name: initialForm.name,
      email: initialForm.email,
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function),
    });
  });

  test('Debe cambiar el name del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange } = result.current;

    const newValue = 'nahuel';

    act(() => {
      onInputChange({ target: { value: newValue, name: 'name' } });
    });

    expect(result.current.name).toBe(newValue);
    expect(result.current.formState.name).toBe(newValue);
  });

  test('Debe realizar el reset del formulario', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { onInputChange, onResetForm } = result.current;

    const newValue = 'nahuel';

    act(() => {
      onInputChange({ target: { value: newValue, name: 'name' } });
      onResetForm();
    });

    expect(result.current.name).toBe(initialForm.name);
    expect(result.current.formState.name).toBe(initialForm.name);
  });
});
