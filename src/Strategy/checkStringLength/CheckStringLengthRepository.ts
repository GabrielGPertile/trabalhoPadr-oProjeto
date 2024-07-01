export interface CheckStringLengthRepository
{
    checkStringLength(value: string, maxNumber: number): Promise<string>;
}