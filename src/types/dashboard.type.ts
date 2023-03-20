export type ItemType = 'map' | 'visualization' | 'eventReport';

export type DashboardItem = {
    id: string,
    type: ItemType,
    width: number,
    height: number
    x: number,
    y: number,
    content: string,
    appKey:string,
    map?: {id: string, name: string},
    visualization?: {id: string, name: string},
    eventReport?: {id: string, name: string}
}

export type DashboardInfo = {
    name: string,
    dashboardItems: DashboardItem[]
}