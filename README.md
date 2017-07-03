# GTM_Abandon_Funnel
Proof of concept for Google Tag Manager to act on Users who leave a funnel. It contains a demo file "beforeunload.html" to show the effect in itself. If you want to try it, make sure you change the Google Analytics ID.


# Google Tag Manager Setup
To setup everything for funnel Abandonment Tracking - you need a couple of tags, the concept is simple.
- You need the JS for the event.
- You need the Google Analytics Tag to transmit the event.
- You need 1 or more Variables to store the data you want to transmit.

# Example setup
Variables:
custom.DLV_form_abandon_eventAction / Type: Data Layer / Data Layer Name: qeventAction
custom.DLV_form_abandon_eventCategory / Type: Data Layer / Data Layer Name: qeventCategory
// These are being used to set the action and category for Google Analytics

custom.google_analaytics_form_abandon / Type: Google Analytics Settings / Tracking ID + fieldname "transport" / value "beacon"
// Introduce the beacon concept to Google Analytics and ensure that the correct ID is being used.

custom.qhistory_form_abandon / Type: Custom javascript / content of history.js
// get the data which is being parsed through the data layer and push it into a var for later usage.

Trigger:
funnel_abandon / Type: Custom Event / Event Name: formAbandonment

Tag:
funnel_abandon_customJS / content of funneldrop.js
funnel_abandon_google_analytics / Setup for Google Analytics
