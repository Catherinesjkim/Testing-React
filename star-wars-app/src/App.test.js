import React from "react";
// no default export, so we're importing everything from this library
import * as rtl from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axios from 'axios';

jest.mock('axios', () => {
  return{
    get: jest.fn(() => Promise.resolve({
      data:{
        results: ['Mike', '6ft']
      }
    }))
  }
});

test('made an api call', async () => {
  const wrapper = rtl.render(<App />);

  await wrapper.findAllByAltText(/logo/i);

  expect(axios.get).toHaveBeenCalled();
})

// test("render of star wars character", async () => {
//   const wrapper = rtl.render(<App />);

//   const starImg = wrapper.getByAltText(/logo/i);

//   expect(starImg[0]).toBeVisible();
// });

// test("Render the heading", async () => {
  // render our React app into an in-memory DOM so we can test against it
  // const wrapper = rtl.render(<App />);

  // element is now our dom element that we can test against
  // const element = wrapper.getByText(/the star wars website/i);

  // test will fil if element is not visible to our robot eyes
//   expect(element).toBeVisible();
// });

// test("Render count input", async () => {
//   const wrapper = rtl.render(<App />);

  // using a regular expression instea of a string allows our query to be much more flexible. 
  // For example, if the text becomes all uppercase, we don't want our test to break
//   const element = wrapper.getByPlaceholderText(/count/i);
//   expect(element).toHaveValue(0);
// });