import React from "react";
import {render} from "@testing-library/react";
import {textsWait, pause, debug} from "@pepfar-react-lib/testwrap";
import {DatimWrapper} from "../components/datimWrapper.component";
import {Main} from "../components/main.component";

test(`1 > App should have a header bar`, async ()=>{
    render(<Main/>);
    await pause(1000);
    debug();
    await textsWait(['JAKUB'])
})