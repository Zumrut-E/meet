import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents'; // adjust the path if needed

describe('<NumberOfEvents />', () => {
  let updateEventCount;

  beforeEach(() => {
    updateEventCount = jest.fn();
    render(<NumberOfEvents updateEventCount={updateEventCount} />);
  });

  test('renders the NumberOfEvents component with an input field', () => {
    const inputField = screen.getByRole('textbox');
    expect(inputField).toBeInTheDocument();
  });

  test('input field has a default value of 32', () => {
    const inputField = screen.getByRole('textbox');
    expect(inputField).toHaveValue(32);
  });

  test('value changes when the user types in the input field', async () => {
    const user = userEvent.setup();
    const inputField = screen.getByRole('textbox');

    await user.type(inputField, '{backspace}{backspace}10');
    expect(inputField).toHaveValue(10);
  });

  test('value stays within range when typing', async () => {
    const user = userEvent.setup();
    const inputField = screen.getByRole('textbox');

    await user.type(inputField, '{backspace}{backspace}100');
    expect(inputField).toHaveValue(50); // Ensures the max is capped at 50
  });

  test('calls updateEventCount when value is changed', async () => {
    const user = userEvent.setup();
    const inputField = screen.getByRole('textbox');

    await user.type(inputField, '{backspace}{backspace}10');
    expect(updateEventCount).toHaveBeenCalledWith(10);
  });
});
