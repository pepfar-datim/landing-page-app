import React from 'react';
import {getDashboardItems} from "../services/getDashboardItems.service";
import {DashboardItem} from "../types/dashboard.type";
import { DashboardItemComponent } from './dashboardItem.component';

export class Main extends React.Component<any, {dashboardItems:DashboardItem[]}>{
    constructor(props:any) {
        super(props);
        this.state = {dashboardItems:[]};
    }
    componentDidMount() {
        getDashboardItems('LandingPage').then((dashboardItems:DashboardItem[])=>this.setState({dashboardItems}));
    }

    render() {
        if (this.state.dashboardItems.length===0) return <>loading</>
        return <>
            {this.state.dashboardItems.map((dashboardItem:DashboardItem,i:number)=><DashboardItemComponent dashboardItem={dashboardItem} key={i}/>)}
        </>
    }
}

