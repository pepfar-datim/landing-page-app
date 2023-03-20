import { ItemType, DashboardItem } from "../types/dashboard.type";
import { getBaseUrl } from "../utils";

type itemInfoType = {name: string, itemKey: ItemType, link: Function, app: string}

const itemTypeInfo: {[s: string]: itemInfoType} = {
  'MAP': {
    name: 'map',
    itemKey: 'map',
    link: (uid: string) => `${getBaseUrl()}/dhis-web-maps/?id=${uid}`,
    app: 'Maps'
  },
  'EVENT_REPORT': {
    name: 'event report',
    itemKey: 'eventReport',
    link: (uid: string) => `${getBaseUrl()}/dhis-web-event-reports/?id=${uid}`,
    app: 'Event reports'
  },
  'VISUALIZATION': {
    name: 'visualization',
    itemKey: 'visualization',
    link: (uid: string) => `${getBaseUrl()}/dhis-web-data-visualizer/#/${uid}`,
    app: 'Visualizations'
  }
}

const NotSupported = ({ dashboardItem }: { dashboardItem: DashboardItem }) => {
  const { type: itemType } = dashboardItem
  const itemInfo = itemTypeInfo?.[itemType]
  const item = dashboardItem?.[itemInfo?.itemKey]
  const name = item?.name || ''
  const displayType = itemType.toLocaleLowerCase().replace('_', ' ')
  return (
    <div className="notSupportedItem">
      <p>Dashboard item of type {displayType} is not currently supported.</p>
      {
        itemType in itemTypeInfo ? (
          <p>
            Click <a href={itemInfo.link(item?.id)} target="_blank">here</a> to see '{name}' in the {itemInfo?.app} app
          </p>
        ) : ''
      }
    </div>
  )
}

export default NotSupported