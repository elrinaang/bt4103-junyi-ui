import { PathType, StudentType, ClusterType } from './Types';

const testPaths: PathType[] = [
    {
      id: "41",
      group_id: "60",
      cluster: "3",
      content_id: "437",
      rank: "1",
      position: "1",
      policy: "popularity"
    },
    {
      id: "42",
      group_id: "60",
      cluster: "3",
      content_id: "238",
      rank: "1",
      position: "2",
      policy: "popularity"
    },
    {
      id: "43",
      group_id: "60",
      cluster: "3",
      content_id: "239",
      rank: "1",
      position: "3",
      policy: "popularity"
    },
    {
      id: "44",
      group_id: "60",
      cluster: "3",
      content_id: "245",
      rank: "1",
      position: "4",
      policy: "popularity"
    },
    {
      id: "45",
      group_id: "60",
      cluster: "3",
      content_id: "437",
      rank: "2",
      position: "1",
      policy: "popularity"
    },
    {
      id: "46",
      group_id: "60",
      cluster: "3",
      content_id: "238",
      rank: "2",
      position: "2",
      policy: "popularity"
    },
    {
      id: "47",
      group_id: "60",
      cluster: "3",
      content_id: "241",
      rank: "2",
      position: "3",
      policy: "popularity"
    },
    {
      id: "48",
      group_id: "60",
      cluster: "3",
      content_id: "242",
      rank: "2",
      position: "4",
      policy: "popularity"
    },
    {
      id: "49",
      group_id: "60",
      cluster: "3",
      content_id: "437",
      rank: "3",
      position: "1",
      policy: "popularity"
    },
    {
      id: "50",
      group_id: "60",
      cluster: "3",
      content_id: "238",
      rank: "3",
      position: "2",
      policy: "popularity"
    },
    {
      id: "51",
      group_id: "60",
      cluster: "3",
      content_id: "244",
      rank: "3",
      position: "3",
      policy: "popularity"
    },
    {
      id: "52",
      group_id: "60",
      cluster: "3",
      content_id: "242",
      rank: "3",
      position: "4",
      policy: "popularity"
    }
  ]

const weakStudents: StudentType[] = [
    {
        name: 'Adam',
        accuracy: 'weak'
    },
    {
        name: 'Beatrice',
        accuracy: 'weak'
    },
    {
        name: 'Carol',
        accuracy: 'weak'
    },
    {
        name: 'Damien',
        accuracy: 'weak'
    }
]

const normalStudents: StudentType[] = [
    {
        name: 'Angel',
        accuracy: 'normal'
    },
    {
        name: 'Billy',
        accuracy: 'normal'
    },
    {
        name: 'Cheryl',
        accuracy: 'normal'
    },
    {
        name: 'David',
        accuracy: 'normal'
    },
    {
      name: 'Sam',
      accuracy: 'normal'
    },
    {
      name: 'George',
      accuracy: 'normal'
    },
    {
      name: 'Philip',
      accuracy: 'normal'
    },
    {
      name: 'Ben',
      accuracy: 'normal'
    },
    {
      name: 'Richard',
      accuracy: 'normal'
    }
]

const strongStudents: StudentType[] = [
    {
        name: 'Archie',
        accuracy: 'strong'
    },
    {
        name: 'Beverly',
        accuracy: 'strong'
    },
    {
        name: 'Charmaine',
        accuracy: 'strong'
    },
    {
        name: 'Daniel',
        accuracy: 'strong'
    },
    {
      name: 'Edwin',
      accuracy: 'strong'
    },
    {
      name: 'Fion',
      accuracy: 'strong'
    }
]

export const testCluster: ClusterType = { 
    no_students: '48',
    avg_accuracy: '69.9%',
    avg_exercises_attempted: '6',
    avg_problems_attempted: '20',
    prediction: { 
      weak: weakStudents,
      normal: normalStudents,
      strong: strongStudents
    },
    paths: testPaths
  }
