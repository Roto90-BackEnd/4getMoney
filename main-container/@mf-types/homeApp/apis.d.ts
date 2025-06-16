
    export type RemoteKeys = 'homeApp/App';
    type PackageType<T> = T extends 'homeApp/App' ? typeof import('homeApp/App') :any;