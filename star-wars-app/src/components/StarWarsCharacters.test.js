import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import App from './../App';

jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({
    data:{
      results:['mike', '6ft']
    }
  }))
  }
})

test('does next function work', async () => {
  const { getByTestId } = rtl.render(<App />);

  await rtl.fireEvent.click(getByTestId('next'));
  expect(axios.get).toHaveBeenCalled();
});

test('does logo render', () => {
  const { getByAltText } = rtl.render(<App />);
  getByAltText(/logo/i);
});

test('do buttons render', () => {
  const { getByTestId } = rtl.render(<App />);
  getByTestId('next');
  getByTestId('prev');
});





