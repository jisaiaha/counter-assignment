import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component
  render(<Counter />)
})

test('renders counter message', () => {
  // Check for text that indicates the counter is rendered
  const messageElement = screen.getByText(/Counter/i);
  expect(messageElement).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Query the counter's value
  const counterValue = screen.getByTestId('count');
  expect(counterValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Query the increment button and counter value
  const incrementButton = screen.getByText('+');
  const counterValue = screen.getByTestId('count');

  // Simulate a click event
  fireEvent.click(incrementButton);

  // Assert that the counter value has incremented
  expect(counterValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Query the decrement button and counter value
  const decrementButton = screen.getByText('-'); // Assuming the "-" button has this text
  const counterValue = screen.getByTestId('count');

  // Simulate a click event
  fireEvent.click(decrementButton);

  // Assert that the counter value has decremented
  expect(counterValue).toHaveTextContent('-1');
});
