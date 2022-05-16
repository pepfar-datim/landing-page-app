import React from 'react';
import {getDashboardItems} from "../services/getDashboardItems.service";
import {DashboardItem} from "../types/dashboard.type";
import {getWidth} from "../services/getWidthHeight.service";

export class Main extends React.Component<any, {dashboardItems:DashboardItem[]}>{
    constructor(props:any) {
        super(props);
        this.state = {dashboardItems:[]};
        getDashboardItems('LandingPage').then((dashboardItems:DashboardItem[])=>this.setState({dashboardItems}));
    }
    render() {
        if (this.state.dashboardItems.length===0) return <>loading</>
        return <>
            {this.state.dashboardItems.map((dashboardItem:DashboardItem,i:number)=><object
                key={i}
                width={getWidth(dashboardItem.width)}
                height={getWidth(dashboardItem.height)}
                data={`/api/apps/Information/index.html?dashboardItemId=${dashboardItem.id}#/`}
                type={'text/html'}
            />)}
            {/*{this.state.dashboardItems.map((dashboardItem:DashboardItem,i:number)=><iframe*/}
            {/*    key={i}*/}
            {/*    src={`/api/apps/Information/index.html?dashboardItemId=${dashboardItem.id}#/`}*/}
            {/*    width={resize(dashboardItem.width)}*/}
            {/*    height={resize(dashboardItem.height)}*/}
            {/*/>)}*/}
        </>
    }
}

