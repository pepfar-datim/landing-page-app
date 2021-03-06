import {DashboardItem} from "../types/dashboard.type";
import {getColumnSize, getWidth} from "../services/getWidthHeight.service";
import React, {RefObject, useEffect, useRef} from "react";
import {Grid, Paper} from "@mui/material"
import "./css/dashboardItem.component.css"

function resizeObject(object:HTMLObjectElement|null):any{
    let height:number = object?.contentDocument?.querySelector('html')?.offsetHeight as number;
    if (!height||height<=165) return setTimeout(()=>resizeObject(object),50);
    if (object) object.style.height = `${height}px`;
}

function setupResize(ref:RefObject<HTMLObjectElement>){
    resizeObject(ref.current);
    window.addEventListener('resize',()=>resizeObject(ref.current));
}

export function DashboardItemComponent({dashboardItem}:{dashboardItem:DashboardItem}){
    const objectRef=useRef<HTMLObjectElement>(null);
    useEffect(()=>setupResize(objectRef));
    return <Grid item md={getColumnSize(dashboardItem.width)} xs={12}>
        <Paper className={'Paper'}>
            <object
                ref={objectRef}
                data={`/api/apps/Information/index.html?dashboardItemId=${dashboardItem.id}#/`}
                type={'text/html'}
            />
        </Paper>
    </Grid>
}