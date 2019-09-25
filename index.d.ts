export interface ResultInfo {
    success: boolean;
    code: verifyCodes;
    info: string;
}

export interface VerifyOptions {
    port: number;
    sender: string;
    timeout: number;
    fqdn: string;
    dns: string;
    ignore: number;
}

export function verify(email: string, options: VerifyOptions, callback: (err: Error, info: ResultInfo) => void): void;

export function verifyAsync(email: string, options?: VerifyOptions): Promise<ResultInfo>;

export enum verifyCodes {
    finishedVerification = 1,
    invalidEmailStructure = 2,
    noMxRecords = 3,
    SMTPConnectionTimeout = 4,
    domainNotFound = 5,
    SMTPConnectionError = 6
}
