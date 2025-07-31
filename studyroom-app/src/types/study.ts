export interface StudyRoom {
    id: number;
    status: 'recruiting' | 'closed';
    location: string;
    job: string;
    category: string;
    title: string;
    host: string;
    postedAt: string;
    roles: string[];
    requirements: string[];
    tags: string[];
    currentMembers: number;
    maxMembers: number;
}