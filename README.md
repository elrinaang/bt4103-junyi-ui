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
This folder contains the routes of the application. 
```
pages (Add the main routes here)
  |
  |_ _app.tsx **DO NOT EDIT** 
  |
  |_ _document.tsx **DO NOT EDIT** 
  |
  |_ index.tsx (first page that renders the components)
  |
  |_ cluster.tsx (individual cluster dashboard)
  |
  |_ createGroup.tsx (to create group)
  |
  |_ groupList.tsx (list of groups)
  |
  |_ home.tsx (homepage) 
  |
  |_ student.tsx (individual student dashboard)
  |
  |_ studentList.tsx (list of students)

``` 

### public 
This folder contains the images that are used in the application. 

### src 
This folder contains multiple sub-folders that contains the main components, functions, theme and API calls for the app 

```
components (folder that contains main components)
  |
  |_ common (contains common files that are shared across multiple components)
  |
  |_ CreateGroup (contains componenets used in creating a group)
  |
  |_ GroupList (contains components used in page that displays all the groups)
  |
  |_ HomePage (contains components in HomePage)
  |
  |_ IndividualCluster (contains components in each individual cluster dashboard)
  |
  |_ IndividualStudent (contains components in each individual student dashboard)
  |
  |_ StudentList (contains components in page that displays all the students)
  |
  |_ Layout (contains overall navbar layout)
  |
  |_ LandingPage (acts as the 'router' to display the various pages based on props)


lib (folder that contains the common functions that span across multipled components)
  |
  |_ redirect (directs the routes)
  |
  |_ types (defines types used in this application)


api (folder that contains the api calls)
  |
  |_ groupService 
  |
  |_ studentService 

environment (folder that defines the environment of the application)

stores (contains file for state management) 
  |
  |_ AppStore (domain store)
  |
  |_ UiState (information about UI)
  |
  |_ StoreProvider (creates stores and provides function to use storess)


theme (file that defines main theme for the app e.g. colour scheme)
```