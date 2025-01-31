// Dimensions of the field: 317 in. width and 690.875 in. length. 
export function fieldToPercX(x: number): number {
    return (x / 690.875) * 100;
}

export function percToFieldX(x: number): number {
    return (x * 690.875) / 100;
}

export function fieldToPercY(y: number): number {
    return (y / 317) * 100;
}

export function percToFieldY(y: number): number {
    return (y * 317) / 100;
}