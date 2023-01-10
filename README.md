**Repo Owner:** Ben Guaraldi [@benguaraldi](https://github.com/benguaraldi)

# Landing Page app
The Landing Page app is a DHIS2 app for displaying a single dashboard as the landing page for all users of a given DHIS2 instance. This dashboard can allow users to more easily get to where they want to go in DHIS2.

## Installation

To install the Landing page app, open the App management app in DHIS2 and search for 'Landing Page' in the App hub.

## Post install setup

After installation, to set the Landing page as the default page for all users after logging in, select the following from within the System settings app:

Appearance > Start page > Landing Page

By default the landing page app will be blank. To configure the landing page, go to the dashboards app and open the 'Landing page' dashboard. You now have the full power of the dashboards app to customize the landing page. The 'Rich Text and Video Dashboard Widget' is another free app from the app hub that can allow you to insert links, videos and other advanced content into the landing page to make it even more interactive and useful.

## Menu setup

The app can be used to help users navigate DHIS2 more easily by sending them to the correct places based on various questions. For example if they say they want to view data for a specific program, then they can be linked to the correct dashboard directly. This is much better than trying to search through all the available apps, dashboards and analytics items the user may have access to otherwise.

To setup menu navigation: 

1. Install the 'Rich Text and Video Dashboard Widget' app if not installed already
1. Open the landing page dashboard in the dashboard app and use the 'Search for items to add to this dashboard' field to add a new 'Information' widget (Under the apps heading)
1. Next click Edit to customize the dashboard item and follow the steps outlined [here](https://github.com/pepfar-datim/dashboard-information-widget/blob/main/docs/NestedMenu.md) to configure the nested menu.


## What the app doesn't do
All users will see the same dashboard items when they login, there is no way to show different items depending on the user's roles and permissions. Though as with normal dashboards, if visualizations are configured with user org unit, then different users will see only the data that is relevant to them.

Data statistics on visualizations are not currently recorded at this time, however this is planned for a future release of the application.




