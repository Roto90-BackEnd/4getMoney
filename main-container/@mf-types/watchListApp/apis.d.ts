
    export type RemoteKeys = 'watchListApp/App';
    type PackageType<T> = T extends 'watchListApp/App' ? typeof import('watchListApp/App') :any;