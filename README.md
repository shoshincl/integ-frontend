# INTEG Coding Challenge

### Live Demo

[frontend](https://integ-challenge-frontend.netlify.app)

[api](https://integ-challenge-api.herokuapp.com/products?search=1)

## Installation

To run this project clone it and cd into folder.

1. run `npm i --s` to install dependencies
2. run `npm run dev` to start the application
3. `npm run test` to run test suite

### <ins>**User Story**</ins>

\
As **ONLINE CUSTOMER**, I want to **SEARCH PRODUCTS** to buy.

### <ins>**Acceptance Criteria**</ins>

- Product search by **brand** or **description** _require at least trhee_ characters and return **all** matching products.
- Product search by **id** must return **single** product.
- If search is **palindrome** list product(s) with 50% off.
