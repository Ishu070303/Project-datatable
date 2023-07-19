# Next-Table

Next-Table is a customizable DataTable component built using React and Chakra UI, designed for use in Next.js projects. It provides an intuitive way to display and manage tabular data with essential features such as sorting, searching, pagination, and column resizing.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Chakra UI: A modern UI framework for React applications that provides a set of accessible and customizable components.
- Next.js: A popular framework for building server-side rendered React applications with built-in routing and other useful features.
- TypeScript: A typed superset of JavaScript that adds static typing to the language, improving code quality and developer productivity.

## Deployment
Project Link - [https://project-datatable.vercel.app/](https://project-datatable.vercel.app/)

## Installation

Make sure you have Node.js and npm installed. To add Next-Table to your Next.js project, run the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

```bash
npm install @chakra-ui/react @chakra-ui/icons
```

## Usage

1. Import the DataTable component and necessary Chakra UI components.

2. Define the table headers and rows.

3. Render the DataTable component with the required props.

## Props

Next-Table supports the following optional props:

- `headers`: An array of strings representing the table headers.
- `rows`: A 2D array containing the data rows.
- `caption`: A string to set the caption of the table.
- `sortable`: Set to `true` to enable column sorting.
- `searchable`: Set to `true` to enable searching within the table.
- `pagination`: Set to `true` to enable pagination.
- `resizable`: Set to `true` to enable column resizing.

## Contributions

Contributions to Next-Table are welcome! If you find any bugs or want to add new features, please feel free to submit a pull request❤️.
