# portfolio

## Description

This the code for my [portfolio website](https://kylepfromer.com).

## Installation

`git clone https://github.com/kpfromer/portfolio.git`

`cd portfolio`

`pnpm install`

`pnpm dev`

Done!

## Need to know

- uses [formspree](https://formspree.io/) for headless contact forms

## Includes

- [eslint](https://github.com/eslint/eslint)
- [prettier](https://github.com/prettier/prettier), [husky](https://github.com/typicode/husky),
  [lint-staged](https://github.com/okonet/lint-staged) for automatic formatting and linting
- [tailwind css](https://tailwindcss.com/) for components, styling, and theming
- [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote) for sourcing mdx

## Scripts

- `npm run dev` runs next.js in development mode
- `npm run build` builds next.js application
- `npm start` starts the built next.js application
- `npm run lint` runs `eslint`
- `npm run format` runs `prettier`

## Structure

- `components` - components used for creating pages and stories for storybooks
- `lib` - the files associated with sourcing and consuming data from locations (like MDX)
- `hooks` - react hooks for SWR or other minor things next.js will try to create a page for them)
- `content` - the data for creating pages, like a MDX blog posts
- `utils` - misc one of files like theme or test helpers

## Other Cool Web Tools

- [favycon](https://favycon.app/) for generating favions

# Details

This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
