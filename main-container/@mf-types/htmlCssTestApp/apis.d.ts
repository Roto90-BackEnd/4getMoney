
    export type RemoteKeys = 'htmlCssTestApp/App';
    type PackageType<T> = T extends 'htmlCssTestApp/App' ? typeof import('htmlCssTestApp/App') :any;