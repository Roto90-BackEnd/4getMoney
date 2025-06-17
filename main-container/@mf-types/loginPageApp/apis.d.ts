
    export type RemoteKeys = 'loginPageApp/App';
    type PackageType<T> = T extends 'loginPageApp/App' ? typeof import('loginPageApp/App') :any;