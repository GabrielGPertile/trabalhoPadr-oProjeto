export interface CheckArrayLengthRepository 
{
    checkArrayLengyh(array: any, int: number): Promise<[any[], number]>;
}