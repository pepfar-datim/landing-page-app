import {Dashboard} from "./types/dashboard.types.ts";
import {fetchDashboard} from "./services/fetchDashboard.service.ts";
import {renderDashboard} from "./render/renderDashboard.ts";
import './render/resize.service.ts'

(async ()=>{
    const dashboard:Dashboard = await fetchDashboard()
    document.title = dashboard?.name || 'Landing Page | DHIS2'
    renderDashboard(dashboard)
})()
