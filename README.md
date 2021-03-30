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

### Objects 
#### Student: 
avg_accuracy 
avg_hint_per_attempt
avg_time_btw_problem
avg_time_per_exercise
badges_cnt
belongs_to_class_cnt
exercises_attempted
first_login_date_TW
gender
has_class_cnt
has_student_cnt
has_teacher_cnt 
id
is_self_coach 
name
no_downgrades
no_upgrades
points
prolems_attempted 
user_city 
user_grade 


{
  "no_students": "4",
  "avg_accuracy": "0.83519214700000000000",
  "avg_exercises_attempted": "5.7500000000000000",
  "avg_problems_attempted": "37.7500000000000000",
  "prediction": {
    "weak": null,
    "normal": null,
    "strong": null
  },
  "paths": [
    {
      "id": "41",
      "group_id": "60",
      "cluster": "3",
      "content_id": "437",
      "rank": "1",
      "position": "1",
      "policy": "popularity"
    },
    {
      "id": "42",
      "group_id": "60",
      "cluster": "3",
      "content_id": "238",
      "rank": "1",
      "position": "2",
      "policy": "popularity"
    },
    {
      "id": "43",
      "group_id": "60",
      "cluster": "3",
      "content_id": "239",
      "rank": "1",
      "position": "3",
      "policy": "popularity"
    },
    {
      "id": "44",
      "group_id": "60",
      "cluster": "3",
      "content_id": "245",
      "rank": "1",
      "position": "4",
      "policy": "popularity"
    },
    {
      "id": "45",
      "group_id": "60",
      "cluster": "3",
      "content_id": "437",
      "rank": "2",
      "position": "1",
      "policy": "popularity"
    },
    {
      "id": "46",
      "group_id": "60",
      "cluster": "3",
      "content_id": "238",
      "rank": "2",
      "position": "2",
      "policy": "popularity"
    },
    {
      "id": "47",
      "group_id": "60",
      "cluster": "3",
      "content_id": "241",
      "rank": "2",
      "position": "3",
      "policy": "popularity"
    },
    {
      "id": "48",
      "group_id": "60",
      "cluster": "3",
      "content_id": "242",
      "rank": "2",
      "position": "4",
      "policy": "popularity"
    },
    {
      "id": "49",
      "group_id": "60",
      "cluster": "3",
      "content_id": "437",
      "rank": "3",
      "position": "1",
      "policy": "popularity"
    },
    {
      "id": "50",
      "group_id": "60",
      "cluster": "3",
      "content_id": "238",
      "rank": "3",
      "position": "2",
      "policy": "popularity"
    },
    {
      "id": "51",
      "group_id": "60",
      "cluster": "3",
      "content_id": "244",
      "rank": "3",
      "position": "3",
      "policy": "popularity"
    },
    {
      "id": "52",
      "group_id": "60",
      "cluster": "3",
      "content_id": "242",
      "rank": "3",
      "position": "4",
      "policy": "popularity"
    }
  ]
}