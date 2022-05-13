import datimApi from "@pepfar-react-lib/datim-api";
import {DashboardItem} from "../types/dashboard.type";

export async function getDashboardItems(dashboardId:string):Promise<DashboardItem[]>{
    let dashboardItems:DashboardItem[] = await getDashboardItemsMeta(dashboardId);
    return Promise.all<DashboardItem>(dashboardItems.map(async (dashboardItem:DashboardItem)=>{
        dashboardItem.content = await getInfoWidgetContent(dashboardItem.id);
        return dashboardItem;
    }))
}

export async function getDashboardItemsMeta(dashboardId:string):Promise<DashboardItem[]>{
    let response:any = await datimApi.getJson(`/dashboards/${dashboardId}.json?fields=dashboardItems[id,appKey,width,height,x,y]`);
    return response.dashboardItems;
}

export async function getInfoWidgetContent(dashboardItemId:string):Promise<string>{
    return datimApi.getText(`/apps/Information/index.html?dashboardItemId=${dashboardItemId}`);
}