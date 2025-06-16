
    export type RemoteKeys = 'communityApp/App';
    type PackageType<T> = T extends 'communityApp/App' ? typeof import('communityApp/App') :any;