(window.webpackJsonp=window.webpackJsonp||[]).push([[556],{1557:function(t,a,e){"use strict";e.r(a);var s=e(21),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"titanium-android-broadcastreceiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#titanium-android-broadcastreceiver"}},[t._v("#")]),t._v(" Titanium.Android.BroadcastReceiver")]),t._v(" "),e("TypeHeader"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),e("p",[t._v("The application can use broadcast receivers to monitor system events from the Android OS\nas well as custom broadcasts sent by other applications. The application will need to know the\nname of the broadcast actions in order to monitor them. Note that Titanium only supports\nprogrammatically creating and registering broadcast receivers. Titanium does not support\ndeclaring a receiver in the Android manifest.")]),t._v(" "),e("p",[t._v("To create a Broadcast Receiver, use the "),e("type-link",{attrs:{type:"Titanium.Android.createBroadcastReceiver"}},[t._v("Titanium.Android.createBroadcastReceiver")]),t._v(" method.\nSpecify either a callback to handle the broadcast with the "),e("code",[t._v("onReceived")]),t._v(" property or a\nJavaScript file with the "),e("code",[t._v("url")]),t._v(" property.  Do not specify both.  If both properties are\nused, the "),e("code",[t._v("url")]),t._v(" property takes precedence.")],1),t._v(" "),e("p",[t._v("To start listening to a broadcast, pass the "),e("code",[t._v("BroadcastReceiver")]),t._v(" object and an array of\nbroadcast actions to listen for to the "),e("type-link",{attrs:{type:"Titanium.Android.registerBroadcastReceiver"}},[t._v("Titanium.Android.registerBroadcastReceiver")]),t._v(" method.")],1),t._v(" "),e("p",[t._v("Titanium exposes some of the system-level broadcasts as the "),e("code",[t._v("Titanium.Android.ACTION_*")]),t._v("\nconstants. Note that some of these constants are not broadcast messages.")]),t._v(" "),e("p",[t._v("You can also define a custom broadcast action.  Use a reverse domain name scheme in order to\navoid potential conflicts with other applications.")]),t._v(" "),e("p",[t._v("To stop listening to a broadcast, pass the "),e("code",[t._v("BroadcastReceiver")]),t._v(" object to the\n"),e("type-link",{attrs:{type:"Titanium.Android.unregisterBroadcastReceiver"}},[t._v("Titanium.Android.unregisterBroadcastReceiver")]),t._v(" method.")],1),t._v(" "),e("p",[t._v("To monitor a broadcast that requires a special permission, declare the "),e("strong",[e("code",[t._v("<uses-permission>")])]),t._v("\nelement in the Android manifest section of the "),e("code",[t._v("tiapp.xml")]),t._v(" file for each broadcast that uses\na special permission.  For example, to monitor the "),e("code",[t._v("NEW_OUTGOING_CALL")]),t._v(" broadcast, the\napplication needs to add the following permission:")]),t._v(" "),e("div",{staticClass:"language-xml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("android")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("manifest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("uses-permission")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("android:")]),t._v("name")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("android.permission.NEW_OUTGOING_CALL"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("manifest")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("android")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),e("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("Further Reading:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://docs.appcelerator.com/platform/latest/#!/guide/Android_Broadcast_Intents_and_Receivers",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Broadcast Intents and Receivers guide"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.android.com/reference/android/content/BroadcastReceiver.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Android Developers: Broadcast Receivers"),e("OutboundLink")],1),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("h3",{attrs:{id:"create-and-register-a-broadcast-receiver"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-and-register-a-broadcast-receiver"}},[t._v("#")]),t._v(" Create and register a broadcast receiver")]),t._v(" "),e("p",[t._v("This example creates a broadcast receiver and registers it to handle the airplane mode broadcast.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" bc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createBroadcastReceiver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onReceived")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("API")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Handling broadcast.'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nTi"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerBroadcastReceiver")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("bc"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Ti"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Android"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ACTION_AIRPLANE_MODE_CHANGED")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("ApiDocs")],1)}),[],!1,null,null,null);a.default=n.exports}}]);