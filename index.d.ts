export interface ResultInfo {
    success: boolean;
    code: verifyCodes;
    info: string;
}

export function verify(email: string, callback: (err: Error, info: ResultInfo) => void): void;

export async function verifyAsync(email: string): ResultInfo;

export enum verifyCodes {
    finishedVerification = 1,
    invalidEmailStructure = 2,
    noMxRecords = 3,
    SMTPConnectionTimeout = 4,
    domainNotFound = 5,
    SMTPConnectionError = 6
}
