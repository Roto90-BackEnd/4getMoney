
    export type RemoteKeys = 'theclassApp/App';
    type PackageType<T> = T extends 'theclassApp/App' ? typeof import('theclassApp/App') :any;