
    export type RemoteKeys = 'navigationBarApp/App';
    type PackageType<T> = T extends 'navigationBarApp/App' ? typeof import('navigationBarApp/App') :any;