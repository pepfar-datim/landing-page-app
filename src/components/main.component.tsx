import React from 'react';
import {getDashboardItems} from "../services/getDashboardItems.service";
import {DashboardItem} from "../types/dashboard.type";

export class Main extends React.Component<any, {dashboardItems:DashboardItem[]}>{
    constructor(props:any) {
        super(props);
        this.state = {dashboardItems:[]};
        getDashboardItems('LandingPage').then((dashboardItems:DashboardItem[])=>this.setState({dashboardItems}));
    }
    render() {
        if (this.state.dashboardItems.length===0) return <>loading</>
        return <>
            {/*{this.state.dashboardItems.map((dashboardItem:DashboardItem,i:number)=><div key={i} dangerouslySetInnerHTML={{ __html: dashboardItem.content as string}} />)}*/}
            {/*{this.state.dashboardItems.map((dashboardItem:DashboardItem,i:number)=><object key={i} data={`https://jakub.datim.org/api/apps/Information/index.html?dashboardItemId=${dashboardItem.id}#/`} type={'text/html'}/>)}*/}
            {this.state.dashboardItems.map((dashboardItem:DashboardItem,i:number)=><iframe key={i} src={`/api/apps/Information/index.html?dashboardItemId=${dashboardItem.id}#/`} />)}
        </>
    }
}

