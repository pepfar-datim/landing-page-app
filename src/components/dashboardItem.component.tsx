import {DashboardItem} from "../types/dashboard.type";
import {getWidth} from "../services/getWidthHeight.service";
import React from "react";
import {Paper} from "@mui/material"
import "./css/dashboardItem.component.css"

export function DashboardItemComponent({dashboardItem}:{dashboardItem:DashboardItem}){
    return <Paper className={'Paper'}><object
        width={getWidth(dashboardItem.width)}
        height={getWidth(dashboardItem.height)}
        data={`/api/apps/Information/index.html?dashboardItemId=${dashboardItem.id}#/`}
        type={'text/html'}
    /></Paper>
}