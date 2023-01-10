import React from 'react';
import datimApi from "@pepfar-react-lib/datim-api";
import {getDashboardInfo} from "../services/getDashboardInfo.service";
import {DashboardInfo, DashboardItem} from "../types/dashboard.type";
import { DashboardItemComponent } from './dashboardItem.component';
import LandingPageEmpty from './landingPageEmpty.component';
import {CircularProgress, Grid} from "@mui/material";

export class Main extends React.Component<any, {loaded: boolean, dashboardItems:DashboardItem[]}>{
    constructor(props:any) {
        super(props);
        this.state = {
            loaded: false,
            dashboardItems: []
        };
    }
    componentDidMount() {
        getDashboardInfo('LandingPage').then((dashboardInfo:DashboardInfo)=>{
            const {name, dashboardItems} = dashboardInfo;
            document.title = name
            this.setState({
                loaded: true,
                dashboardItems
            })
            datimApi.postJson('/dataStatistics?eventType=PASSIVE_DASHBOARD_VIEW&favourite=LandingPage', undefined)
        });
    }

    render() {
        if (!this.state.loaded) return <CircularProgress/>
        if (this.state.loaded && this.state.dashboardItems.length === 0) return <LandingPageEmpty />
        return <div id={'gridWrapper'}><Grid container spacing={1}>
            {this.state.dashboardItems.map((dashboardItem:DashboardItem,i:number)=><DashboardItemComponent dashboardItem={dashboardItem} key={i}/>)}
        </Grid></div>
    }
}

