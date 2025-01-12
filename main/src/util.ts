// Dimensions of the field: 26' 7" width and 54' 1" length. 
export function fieldToPercX(x: number): number {
    return (x / 649) * 100;
}

export function percToFieldX(x: number): number {
    return (x * 649) / 100;
}

export function fieldToPercY(y: number): number {
    return (y / 319) * 100;
}

export function percToFieldY(y: number): number {
    return (y * 319) / 100;
}