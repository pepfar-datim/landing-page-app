declare type Version = {
    full: string;
    major: number;
    minor: number;
    patch?: number;
    tag?: string;
};
interface SystemInfo {
    version: string;
    contextPath: string;
    serverTimeZoneId: string;
}
interface Config {
    baseUrl: string;
    apiVersion: number;
    appName?: string;
    appVersion?: Version;
    serverVersion?: Version;
    systemInfo?: SystemInfo;
}
export const dhis2ProviderConfig:Config = {
    baseUrl: '/',
    apiVersion: 40,
    appName: 'Landing Page',
    appVersion: {
        full: '1.0.3',
        major: 1,
        minor: 3
    },
    systemInfo:{
        version: '2.40.2.1',
        contextPath: '/',
        serverTimeZoneId: 'UTC'
    }
}