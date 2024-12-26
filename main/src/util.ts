// Dimensions of the field: 26' 7" width and 54' 1" length. 
export function fieldToPercX(x:number) {
    return (x/649)*100;
}

export function percToFieldX(x:number) {
    return (100*x)/649;
}

export function fieldToPercY(y:number) {
    return (y/319)*100;
}

export function percToFieldY(y:number) {
    return (100*y)/319;
}