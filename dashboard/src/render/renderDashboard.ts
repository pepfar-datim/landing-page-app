import {Dashboard, Widget} from "../types/dashboard.types.ts";
import {dashboardStyles, objectStyles, rowStyles} from "./render.styles.ts";

function getMinHeight(){
    return 640000/window.innerWidth/2
}

function renderWidget({id, size:{width}}:Widget):string{
    return `<object
        id="${id}"
        data="/api/apps/Information/index.html?dashboardItemId=${id}#/"
        style="${objectStyles};flex-grow:${width};min-height: ${getMinHeight()}px;"
        onload="initializeContainerResize('${id}')"
    ></object>`
}

function renderRow(widgets:Widget[]):string{
    return `<div style="${rowStyles}">
        ${widgets.map(renderWidget).join('')}
    </div>`
}

function cleanHtml(html:string):string{
    return html
        .replace(/\n/g,'')
        .replace(/  +/g,' ')
}
export function renderDashboard({rows}:Dashboard){
    const html:string = cleanHtml(`<div style="${dashboardStyles}">
        ${rows.map(renderRow).join('')}
    </div>`)
    document.getElementById('content')!.innerHTML = html
}