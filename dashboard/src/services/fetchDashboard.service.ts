import {Dashboard, Widget} from "../types/dashboard.types.ts";
import {createEmptyDashboard} from "./createEmptyDashboard.service.ts";
import {reportStatistics} from "./reportStatistics.service.ts";

const dashboardUrl = '/api/dashboards/LandingPage.json?fields=name,dashboardItems[id,type,appKey,width,height,x,y,map(id,name),visualization(id,name),eventReport(id,name)]'

type DhisDashboardItem = {
    x: number;
    y: number;
    width: number;
    height: number;
    id: string;
}

type DhisResponse = {
    dashboardItems: DhisDashboardItem[];
    name: string;
}

function parseDashboard({dashboardItems, name}:DhisResponse):{widgets:Widget[], name:string}{
    const widgets: Widget[] = dashboardItems.map(({x,y, width, height, id})=>({
        position: {x,y},
        size: {width, height},
        id
    }))
    return {widgets, name}
}

function organizeIntoRows(widgets:Widget[]):Widget[][] {
    let ar = widgets
    const result = []
    while(ar.length>0){
        const posY = ar[0].position.y
        result.push(ar.filter(({position:{y}})=>posY===y))
        ar = ar.filter(({position:{y}})=>posY!==y)
    }
    return result
}

export async function fetchDashboard():Promise<Dashboard>{
    const {widgets,name}:{widgets:Widget[], name:string} = await fetch(dashboardUrl).then(res=>res.json()).then(parseDashboard).catch(createEmptyDashboard)
    reportStatistics()
    widgets.sort(function({position: {x:w1x, y:w1y}}:Widget, {position: {x:w2x, y:w2y}}:Widget){
        if (w1y===w2y) return w1x-w2x
        else return w1y-w2y
    })
    const rows = organizeIntoRows(widgets)
    return {
        rows,
        name
    }
}