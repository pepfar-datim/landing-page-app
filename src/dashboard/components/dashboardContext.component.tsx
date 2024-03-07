import {useEffect, useState} from "react";
import {Dashboard as DashboardType} from "../types/dashboard.types"
import {fetchDashboard} from "../services/fetchDashboard.service.ts";
import {Dashboard} from "./dashboard.component.tsx";
import {LoadingDashboard} from "./loadingDashboard.component.tsx";
import {EmptyDashboard} from "./emptyDashboard.component.tsx";

export function DashboardContext() {
    const [dashboard, setDashboard] = useState<DashboardType | null>(null)
    useEffect(() => {
        fetchDashboard().then(setDashboard)
    }, [])
    useEffect(()=>{
        document.title = dashboard?.name || 'Landing Page | DHIS2'
    },[dashboard?.name])
    if (!dashboard) return <LoadingDashboard/>
    if (dashboard.rows.length===0) return <EmptyDashboard/>
    return <>
        <Dashboard dashboard={dashboard}/>
    </>
}