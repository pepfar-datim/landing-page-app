import React from "react";
import {render, waitFor} from "@testing-library/react";
import {textsWait, pause, debug} from "@pepfar-react-lib/testwrap";
import {DatimWrapper} from "../components/datimWrapper.component";
import {Main} from "../components/main.component";

function getDashboardItems():NodeListOf<Element>{
    return document.querySelectorAll('object');
}

test(`1 > App should have a header bar`, async ()=>{
    render(<Main/>);
    await waitFor(()=>expect(getDashboardItems()[0].getAttribute('type')).toBe('text/html'));
    let dashboardItems:NodeListOf<Element> = getDashboardItems();
    expect(dashboardItems.length).toBe(4);
    dashboardItems.forEach((dashboardItem:Element)=>expect(dashboardItem.getAttribute('type')).toBe('text/html'))
})