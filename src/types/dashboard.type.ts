export type DashboardItem = {
    id: string,
    width: number,
    height: number
    x: number,
    y: number,
    content: string,
    appKey:string,
}

export type DashboardInfo = {
    name: string,
    dashboardItems: DashboardItem[]
}