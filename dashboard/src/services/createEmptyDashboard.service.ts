
const emptyDashboard = {
    "id":"LandingPage",
    "name":"Landing Page",
    "publicAccess":"--------",
    "restrictFilters":false,
    "externalAccess":false,
    "itemCount":0,
    "dashboardItems":[]
};
export async function createEmptyDashboard(){
    const response = await fetch('/api/dashboards',{
        method: 'POST',
        body: JSON.stringify(emptyDashboard),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) location.reload()
    return {widgets: [], name: 'Reloading'}
}