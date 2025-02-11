---
editUrl: https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Android/BroadcastReceiver.yml
---
# Titanium.Android.BroadcastReceiver

<TypeHeader/>

## Overview

The application can use broadcast receivers to monitor system events from the Android OS
as well as custom broadcasts sent by other applications. The application will need to know the
name of the broadcast actions in order to monitor them. Note that Titanium only supports
programmatically creating and registering broadcast receivers. Titanium does not support
declaring a receiver in the Android manifest.

To create a Broadcast Receiver, use the <Titanium.Android.createBroadcastReceiver> method.
Specify either a callback to handle the broadcast with the `onReceived` property or a
JavaScript file with the `url` property.  Do not specify both.  If both properties are
used, the `url` property takes precedence.

To start listening to a broadcast, pass the `BroadcastReceiver` object and an array of
broadcast actions to listen for to the <Titanium.Android.registerBroadcastReceiver> method.

Titanium exposes some of the system-level broadcasts as the `Titanium.Android.ACTION_*`
constants. Note that some of these constants are not broadcast messages.

You can also define a custom broadcast action.  Use a reverse domain name scheme in order to
avoid potential conflicts with other applications.

To stop listening to a broadcast, pass the `BroadcastReceiver` object to the
<Titanium.Android.unregisterBroadcastReceiver> method.

To monitor a broadcast that requires a special permission, declare the **`<uses-permission>`**
element in the Android manifest section of the `tiapp.xml` file for each broadcast that uses
a special permission.  For example, to monitor the `NEW_OUTGOING_CALL` broadcast, the
application needs to add the following permission:

``` xml
<ti:app>
    <android>
        <manifest>
            <uses-permission android:name="android.permission.NEW_OUTGOING_CALL" />
        </manifest>
    </android>
</ti:app>
```

Further Reading:

  * [Android Broadcast Intents and Receivers guide](https://docs.appcelerator.com/platform/latest/#!/guide/Android_Broadcast_Intents_and_Receivers)
  * [Android Developers: Broadcast Receivers](https://developer.android.com/reference/android/content/BroadcastReceiver.html).

## Examples

### Create and register a broadcast receiver

This example creates a broadcast receiver and registers it to handle the airplane mode broadcast.

``` js
var bc = Ti.Android.createBroadcastReceiver({
    onReceived: function() {
        Ti.API.info('Handling broadcast.');
    }
});

Ti.Android.registerBroadcastReceiver(bc, [Ti.Android.ACTION_AIRPLANE_MODE_CHANGED]);
```

<ApiDocs/>
