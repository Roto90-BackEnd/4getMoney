
    export type RemoteKeys = 'whatchListApp/App';
    type PackageType<T> = T extends 'whatchListApp/App' ? typeof import('whatchListApp/App') :any;