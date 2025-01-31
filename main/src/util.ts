// Dimensions of the field: 317 in. width and 690.875 in. length. 
export function fieldToPercX(x: number): number {
    return ((x+2.014) / 694.9034) * 100;
}

export function percToFieldX(x: number): number {
    return (x * 694.9034) / 100 - 2.014;
}

export function fieldToPercY(y: number): number {
    return ((y+2.5) / 323) * 100;
}

export function percToFieldY(y: number): number {
    return (y * 323) / 100 - 2.5;
}