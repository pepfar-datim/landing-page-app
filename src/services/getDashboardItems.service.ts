import datimApi from "@pepfar-react-lib/datim-api";
import {DashboardItem} from "../types/dashboard.type";

export async function getDashboardItems(dashboardId:string):Promise<DashboardItem[]>{
    let response:any = await datimApi.getJson(`/dashboards/${dashboardId}.json?fields=dashboardItems[id,appKey,width,height,x,y]`);
    return response.dashboardItems.sort((a:DashboardItem,b:DashboardItem)=>{
        if (a.y===b.y) return a.x-b.x;
        return a.y-b.y
    });
}