import { render, screen, fireEvent } from '@testing-library/react';
import Form from './';

describe('Testing the Form component', () => {
  it('Should update the CRUD method on user input', () => {
    render(<Form />);
    // need to find input elements
    let input = screen.getByTestId('url-input');
    fireEvent.change(input, { target: { value: 'https://pokeapi.co/api/v2/pokemon' } })

  })
})

