export interface ExceedsMaxSafeIntegerRepository
{
    exceedsMaxSafeIntegerFunc(value: number): Promise<number>;
}