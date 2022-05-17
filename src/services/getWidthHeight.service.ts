export function getWidth(originalDimension:number){
    return originalDimension/61 * window.innerWidth;
}

export function getColumnSize(originalDimension:number):number{
    return originalDimension/60 * 12;
}