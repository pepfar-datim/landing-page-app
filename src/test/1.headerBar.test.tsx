import {render} from "@testing-library/react";
import {Main} from "../main.component";
import {textsWait} from "@pepfar-react-lib/testwrap";

test(`1 > App should have a header bar`, async ()=>{
    render(<Main/>);
    await textsWait(['JAKUB'])
})