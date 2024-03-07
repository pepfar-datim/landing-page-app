export type Position = {x:number, y:number}
export type Size = {width:number, height: number}

export type Widget = {
    id: string;
    position: Position;
    size: Size;
}

export type Dashboard = {
    name: string;
    rows: Widget[][]
}