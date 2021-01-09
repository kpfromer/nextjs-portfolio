# portfolio

## Description

This the code for my [portfolio website](https://kylepfromer.com).

## Installation

`git clone https://github.com/kpfromer/portfolio.git`

`cd portfolio`

`yarn install`

`yarn dev`

Done!

## Need to know

- uses [formspree](https://formspree.io/) for headless contact forms

## Includes

- [eslint](https://github.com/eslint/eslint)
- [jest](https://github.com/facebook/jest) for unit/integration testing
  - Uses [`next-page-tester`](https://github.com/toomuchdesign/next-page-tester#readme) - read more
  about the project [here](https://dev.to/toomuchdesign/dom-testing-next-js-applications-46ke)
  <!-- - A GitHub workflow file for continuous testing and building. -->
- [prettier](https://github.com/prettier/prettier), [husky](https://github.com/typicode/husky),
  [lint-staged](https://github.com/okonet/lint-staged) for automatic formatting and linting
- [cypress](https://www.cypress.io/) for end-to-end tests
- [swr](https://github.com/vercel/swr) for remote data fetching
- [storybooks](https://storybook.js.org/) for testing/viewing UI components in isolation
- [tailwind css](https://tailwindcss.com/) for components, styling, and theming
- [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) for sourcing mdx

## Scripts

- `npm run dev` runs next.js in development mode
- `npm run test` runs all tests (jest for unit/integration and cypress for e2e)
- `npm run build` builds next.js application
- `npm start` starts the built next.js application
- `npm run lint` runs `eslint`
- `npm run format` runs `prettier`

## Structure

- `components` - components used for creating pages and stories for storybooks
- `lib` - the files associated with sourcing and consuming data from locations (like MDX)
- `hooks` - react hooks for SWR or other minor things
- `tests` - for jest integration/unit tests (since **tests can not be in the pages** folder since
  next.js will try to create a page for them)
- `content` - the data for creating pages, like a MDX blog posts
- `utils` - misc one of files like theme or test helpers

## Other Cool Web Tools

- [favycon](https://favycon.app/) for generating favions

# Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# From `Next.js`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the
file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in
`pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as
[API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your
feedback and contributions are welcome!
