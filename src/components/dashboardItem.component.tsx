import {DashboardItem} from "../types/dashboard.type";
import {getColumnSize, getWidth} from "../services/getWidthHeight.service";
import React, {RefObject, useEffect, useRef} from "react";
import {Grid, Paper} from "@mui/material"
import "./css/dashboardItem.component.css"

function resizeObject(ref:RefObject<HTMLObjectElement>){
    let height:number = ref.current?.contentDocument?.querySelector('html')?.offsetHeight as number;
    if (height && height>160 && ref.current) ref.current.style.height = `${height}px`;
}

function setupResize(ref:RefObject<HTMLObjectElement>){
    window.addEventListener('resize',()=>resizeObject(ref));
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
            {/*<iframe src={`/api/apps/Information/index.html?dashboardItemId=${dashboardItem.id}#/`}/>*/}
        </Paper>
    </Grid>
}