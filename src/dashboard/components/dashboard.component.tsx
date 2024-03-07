import {Dashboard as DashboardType, Widget as WidgetType} from "../types/dashboard.types.ts";
import {Stack} from "@mui/material";
import {Widget} from "./widget.component.tsx";

const styles = {
	root: {
		m: '12px'
	}
}

function Row({widgets}:{widgets:WidgetType[]}){
	return <Stack direction={'row'} gap={1} flexWrap={'wrap'}>{widgets.map(w=><Widget widget={w} key={w.id}/>)}</Stack>
}

export function Dashboard({dashboard:{rows}}:{dashboard:DashboardType}){
	return <Stack gap={1} sx={styles.root}>
		{rows.map(widgets=><Row widgets={widgets} key={widgets[0].id}/>)}
	</Stack>
}