import wait from './wait';

// this doesn't work either
// test("wait for promise to resolve", () => {
//   const result = wait(2);
//   expect(res).toBe("bogus");
// });

// NOT THE RIGHT WAY!!!
// test("wait for promise to resolve", () => {
//   wait(2).then(res => expect(res).toBe("bogus"));
// });

// Older way of testing it - No. 1: the done way
// test("wait for promise to resolve", (done) => {
//    wait(2).then(res => {
//      expect(res).toBe("hurray");
//      done();
//    });
//  });

// No. 2 - The returned unresolved Promise way
// test("wait for promise to resolve", () => {
//   return wait(3).then(res => expect(res).toBe("hurray"));
// });

// Real way of testing in React Testing Library - rtl
// More intuitive way of coding - prettier!
// The better returned unresolved Promise way
test("wait for promise to resolve", async () => {
  const res = await wait(2);
  expect(res).toBe("hurray");
});
