import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn((text) => text),
  },
});

describe('App', () => {
  test('renders have a box with border-radius', () => {
    const { getByLabelText } = render(<App />);
    expect(getByLabelText('Box'))
      .toHaveStyle({ 
        borderRadius: '0% 0% 0% 0%', 
        width: '200px',
        height: '200px',
        backgroundColor: 'cornflowerblue'
      });
    
  });
  
  test('should change the 4 border-radius values', () => {
    const { getByLabelText } = render(<App />);
    const topLeftInput = getByLabelText('Top Right');
    const topRightInput = getByLabelText('Top Left');
    const bottomleftInput = getByLabelText('Bottom Right');
    const bottomRightInput = getByLabelText('Bottom Left');

    userEvent.clear(topLeftInput)
    userEvent.type(topLeftInput, '100');
    
    userEvent.clear(topRightInput);
    userEvent.type(topRightInput, '100');

    userEvent.clear(bottomleftInput);
    userEvent.type(bottomleftInput, '100');
    
    userEvent.clear(bottomRightInput);
    userEvent.type(bottomRightInput, '100');
    
    expect(getByLabelText('Box')).toHaveStyle({ borderRadius: '100% 100% 100% 100%' });
  });

  test('should copy the CSS to the clipboard', async () => {
    const { getByLabelText } = render(<App />);
    const code = getByLabelText('Code');
    await act(async () => {
      userEvent.click(code);
    })

    expect(navigator.clipboard.writeText).toHaveBeenCalled();
  })
  
});

