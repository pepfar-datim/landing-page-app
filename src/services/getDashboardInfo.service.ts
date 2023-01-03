import datimApi from "@pepfar-react-lib/datim-api";
import {DashboardItem, DashboardInfo} from "../types/dashboard.type";

export async function getDashboardInfo(dashboardId:string):Promise<DashboardInfo>{
    try {
        let response:any = await datimApi.getJson(`/dashboards/${dashboardId}.json?fields=name,dashboardItems[id,appKey,width,height,x,y]`);
        const dashboardItems = response.dashboardItems.sort((a:DashboardItem,b:DashboardItem)=>{
            if (a.y===b.y) return a.x-b.x;
            return a.y-b.y
        });
        return {name: response?.name || 'Landing Page | DATIM', dashboardItems}
    } catch (err) {
        // Dashboard does not exist
        try {
            const blankDashboard = {
                "id":"LandingPage",
                "name":"Landing Page",
                "publicAccess":"--------",
                "restrictFilters":false,
                "externalAccess":false,
                "itemCount":0,
                "dashboardItems":[]
            };
            let createResponse = await datimApi.postJson('/dashboards', blankDashboard);
            console.log('Created blank landing page dashboard: ' + createResponse)
            return {name: blankDashboard.name, dashboardItems: []}
        } catch (createErr) {
            console.log('Failed to get dashboard items: ', createErr);
            return {name: 'Error', dashboardItems: []};
        }
    }
}