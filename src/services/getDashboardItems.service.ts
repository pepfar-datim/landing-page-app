import datimApi from "@pepfar-react-lib/datim-api";
import {DashboardItem} from "../types/dashboard.type";

export async function getDashboardItems(dashboardId:string):Promise<DashboardItem[]>{
    try {
        let response:any = await datimApi.getJson(`/dashboards/${dashboardId}.json?fields=dashboardItems[id,appKey,width,height,x,y]`);
        return response.dashboardItems.sort((a:DashboardItem,b:DashboardItem)=>{
            if (a.y===b.y) return a.x-b.x;
            return a.y-b.y
        });
    } catch (err) {
        // Dashboard does not exist
        try {
            const blankDashboard = {dashboards: [{
                "id":"LandingPage",
                "name":"Landing Page",
                "publicAccess":"--------",
                "restrictFilters":false,
                "externalAccess":false,
                "itemCount":0,
                "dashboardItems":[]
            }]};
            let createResponse = await datimApi.postJson('/metadata', blankDashboard);
            console.log('Created blank landing page dashboard: ' + createResponse)
            return []
        } catch (createErr) {
            console.log('Failed to get dashboard items: ', createErr);
            return [];
        }
    }
}