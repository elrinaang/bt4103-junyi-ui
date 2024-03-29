/**
 * ClusterType is used to define the attributes in each cluster object that is retrieved when getGroupCluster is called 
 */

export type ClusterType = { 
    no_students: string,
    avg_accuracy: string, 
    avg_exercises_attempted: string, 
    avg_problems_attempted: string,
    predictions: PredictionType[],
    paths: PathType[]
};

export type ClusterInformationType = { 
    id: string, 
    name: string, 
    description: string,
    isEditMode?: boolean
}

/**
 * Used within Cluster Type, each path object represents an exercise within a path 
 */

export type PathType = { 
    id: string, 
    group_id: string, 
    cluster: string, 
    content_id: string, 
    rank: string,  
    position: string, 
    policy: string
}

export type StudentType = { 
    name: string, 
    accuracy: string 
}

export type PredictionType = { 
    uuid: string, 
    name: string, 
    bin: string 
};
