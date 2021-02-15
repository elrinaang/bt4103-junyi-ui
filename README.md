This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

Run the following commands: 

```
npm install 

npm run dev 
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## File Structure 

### pages 
This folder contains the files that define the root of the application. Please do not edit existing files but feel free to add new files to define new routes. 
```
pages (Add the main routes here)
    |
    |_ _app.tsx **DO NOT EDIT** 
    |
    |_ _document.tsx **DO NOT EDIT** 
    |
    |_ index.tsx (first page that renders the components)
    |
    |_ home.tsx
    |
    |_ dashboard.tsx
    |
    |_ studentlist.tsx 

``` 

### src 
This folder contains multiple sub-folders that contains the main components, functions, theme and API calls for the app 

```
components (folder that contains main components)
    |
    |_ Layout (contains overall navbar layout)
    |
    |_ LandingPage (acts as the 'router' to display the various pages based on props)
    |
    |_ HomePage
    |
    |_ Dashboard
    |
    |_ StudentList 

lib (folder that contains the common functions that span across multipled components)
    |
    |_ redirect (directs the routes)

api (folder that contains the api calls)
    |
    |_ 

theme (file that defines main theme for the app e.g. colour scheme)
```