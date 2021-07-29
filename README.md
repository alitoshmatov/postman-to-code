# Postman to Typescript

This project helps frontend developers to ease their work by converting postman json data to usable typescript code.
Currently using this tool you can generate typescript types based on data provided in postman json

## How to use it

1. Go to postman, choose collection you want to export in json format.
2. Click three dots, it opens menu of options, click export choose v2.1.
3. Copy and paste json data into textarea in the site.

## Configurations

### Branches

- Dev branch `staging`
- Production branch `master`

### Naming Convention

- kabab-case
- `.tsx` ending for React components
- `.style.tsx` ending for Styled React components
- `.ts` for non-react files
