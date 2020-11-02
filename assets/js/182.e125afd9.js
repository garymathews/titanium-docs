(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{1145:function(t,e,a){"use strict";a.r(e);var s=a(21),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"integrate-a-watchkit-app-built-in-xcode"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#integrate-a-watchkit-app-built-in-xcode"}},[t._v("#")]),t._v(" Integrate a WatchKit App Built in Xcode")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("This guide covers how to integrate a WatchKit app built in Xcode with your Titanium application as well as information about sharing data between the extension and application. This guide does not cover how to develop a WatchKit app. Currently, the Titanium SDK supports WatchKit apps that are built in Xcode and run on watchOS 2.")]),t._v(" "),s("p",[t._v("A WatchKit app contains a specialized app extension that runs on either the Apple Watch or iOS device, depending on the watchOS version. The WatchKit app allows the user to access data from your application on their Apple Watch.")]),t._v(" "),s("h3",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("Appcelerator CLI 5.0 or greater")])]),t._v(" "),s("li",[s("p",[t._v("Titanium SDK 5.0 or greater")])]),t._v(" "),s("li",[s("p",[t._v("Xcode 7 or greater")])]),t._v(" "),s("li",[s("p",[t._v("Xcode Command-Line Tools")])]),t._v(" "),s("li",[s("p",[t._v("Paired iOS devices must run iOS 9.0 or greater")])])]),t._v(" "),s("h2",{attrs:{id:"create-an-apple-watch-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-apple-watch-application"}},[t._v("#")]),t._v(" Create an Apple Watch Application")]),t._v(" "),s("p",[s("strong",[t._v("Using Studio")])]),t._v(" "),s("p",[t._v("To create an Apple Watch application:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the project's "),s("code",[t._v("tiapp.xml")]),t._v(" file in the Overview tab.")])]),t._v(" "),s("li",[s("p",[t._v("Under the "),s("em",[t._v("Apple watchOS 2 App")]),t._v(" section, click "),s("strong",[t._v("Create New...")])])]),t._v(" "),s("li",[s("p",[t._v("A dialog will prompt you for the name of the application. Enter a name for the watch application, then click "),s("strong",[t._v("OK")]),t._v(".")])])]),t._v(" "),s("p",[t._v("Studio will generate a new Xcode WatchKit project in the Titaniuim project's "),s("code",[t._v("extensions")]),t._v(" folder and updates the "),s("code",[t._v("ios extensions")]),t._v(" element in the "),s("code",[t._v("tiapp.xml")]),t._v(" file. Open the Xcode project's "),s("code",[t._v("<NAME>.xcodeproj")]),t._v(" to start developing the watch application.")]),t._v(" "),s("p",[s("strong",[t._v("Using the CLI")])]),t._v(" "),s("p",[t._v("To create an Apple Watch application, run the following command from the Titanium project that will include the watch application:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("appc new -t applewatch -n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("WATCH_APP_NAME"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" --template watchos2\n")])])]),s("p",[t._v("If you omit the "),s("code",[t._v("--template option")]),t._v(", the CLI will create a watchOS 2 project by default.")]),t._v(" "),s("p",[t._v("The CLI will generate a new Xcode WatchKit project in the Titaniuim project's "),s("code",[t._v("extensions")]),t._v(" folder and updates the "),s("code",[t._v("ios extensions")]),t._v(" element in the "),s("code",[t._v("tiapp.xml")]),t._v(" file. Open the Xcode project's "),s("code",[t._v("<NAME>.xcodeproj")]),t._v(" to start developing the watch application.")]),t._v(" "),s("h2",{attrs:{id:"share-data-between-the-application-and-extension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#share-data-between-the-application-and-extension"}},[t._v("#")]),t._v(" Share Data Between the Application and Extension")]),t._v(" "),s("p",[t._v("For watchOS 2 extensions (or later), use the "),s("a",{attrs:{href:"https://developer.apple.com/library/prerelease/watchos/documentation/WatchConnectivity/Reference/WatchConnectivity_framework/index.html#//apple_ref/doc/uid/TP40015269",target:"_blank",rel:"noopener noreferrer"}},[t._v("Watch Connectivity Framework"),s("OutboundLink")],1),t._v(" and the "),s("a",{attrs:{href:"#!/api/Titanium.WatchSession"}},[t._v("Titanium.WatchSession APIs")]),t._v(" to transfer files and data between the watch and iOS application, respectively.")]),t._v(" "),s("h3",{attrs:{id:"setup-a-session"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setup-a-session"}},[t._v("#")]),t._v(" Setup a Session")]),t._v(" "),s("p",[t._v("To setup a Watch Connectivity session, the watch application needs to check if the paired device supports Watch Connectivity sessions before retrieving a default session and activating it. Activating the session opens a channel between the paired devices.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("if ([WCSession isSupported]) {\n    watchSession = [WCSession defaultSession];\n    watchSession.delegate = self;\n    [watchSession activateSession];\n}\n")])])]),s("p",[t._v("In the Titanium application, you must also check to see if the paried devices supports Watch Connectivity sessions with the "),s("code",[t._v("Titanium.WatchSession.isSupported")]),t._v(" property, then call the "),s("code",[t._v("Titanium.WatchSession.activateSession()")]),t._v(" method to activate the session allowing messages to be transferred between devices.")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("if (Ti.WatchSession.isSupported) {\n    Ti.WatchSession.activateSession();\n}\n")])])]),s("p",[t._v("To check if the session is activated and the paired watch application is reachable, use the following APIs. Some APIs require that the applications are in a reachable state.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Watch Connectivity Framework API")]),t._v(" "),s("th",[t._v("Titanium.WatchSession API")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("+"),s("code",[t._v("isSupported")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-property-isSupported"}},[t._v("Ti.WatchSession.isSupported")])]),t._v(" "),s("td",[t._v("Checks to see if the paired device supports Watch Connectivity sessions.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("reachable")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-property-isReachable"}},[t._v("Ti.WatchSession.isReachable")])]),t._v(" "),s("td",[t._v("Checks to see if the paired devices share a Watch Connectivity session and both applications are in the foreground.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-sessionReachabilityDidChange:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-event-reachabilitychanged"}},[t._v("Ti.WatchSession.reachabilitychanged")])]),t._v(" "),s("td",[t._v("Called or fired when the reachability state changes on the paired device.")])])])]),t._v(" "),s("h3",{attrs:{id:"transfer-data"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transfer-data"}},[t._v("#")]),t._v(" Transfer Data")]),t._v(" "),s("p",[t._v("The Watch Connectivity framework provides a few different ways to exchange data between the iOS device and watch.")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Application Context")]),t._v(": a shared data object between the paired devices that lasts for the current active session. Use the application context mechanism to synchronization the state between the watch and iOS device.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Watch Connectivity Framework API")]),t._v(" "),s("th",[t._v("Titanium.WatchSession API")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("applicationContext")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-property-recentApplicationContext"}},[t._v("Ti.WatchSession.recentApplicationContext")])]),t._v(" "),s("td",[t._v("Retrieve the current application context.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-updateApplicationContext:error:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-method-updateApplicationContext"}},[t._v("Ti.WatchSession.updateApplicationContext()")])]),t._v(" "),s("td",[t._v("Updates the session's application context.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-session:didReceiveApplicationContext:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-event-receiveapplicationcontext"}},[t._v("Ti.WatchSession.receiveapplicationcontext")])]),t._v(" "),s("td",[t._v("Called or fired when the session receives an update from the paired device.")])])])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("Messages")]),t._v(": pass a data object immediately between the paired devices. Requires that both applications are reachable.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Watch Connectivity Framework API")]),t._v(" "),s("th",[t._v("Titanium.WatchSession API")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("-sendMessage:replyHandler:errorHandler:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-method-sendMessage"}},[t._v("Ti.WatchSession.sendMessage()")])]),t._v(" "),s("td",[t._v("Sends a message to the paired device.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-session:didReceiveMessage:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-event-receivemessage"}},[t._v("Ti.WatchSession.receivemessage")])]),t._v(" "),s("td",[t._v("Called or fired when the device receives a message from the paired device.")])])])]),t._v(" "),s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),s("p",[t._v("If you are using SDK 5.1.0 or earlier, you should form your request like this: "),s("code",[t._v("Ti.WatchSession.sendMessage(message)")]),t._v(". If you are using SDK 5.1.0 and above, form your request like this: "),s("code",[t._v("Ti.WatchSession.sendMessage(params)")]),t._v(".")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("User Info Transfer")]),t._v(": pass a data object in the background. Queued and delivered later when the application is reachable again.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Watch Connectivity Framework API")]),t._v(" "),s("th",[t._v("Titanium.WatchSession API")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("-transferUserInfo:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-method-transferUserInfo"}},[t._v("Ti.WatchSession.transferUserInfo()")])]),t._v(" "),s("td",[t._v("Transfers user info (data object) to the paired device in the background.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-session:didReceiveUserInfo:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-event-receiveuserinfo"}},[t._v("Ti.WatchSession.receiveuserinfo")])]),t._v(" "),s("td",[t._v("Called or fired when the device receives user info from the paired device.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-session:didFinishUserInfoTransfer:error:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-event-finishuserinfotransfer"}},[t._v("Ti.WatchSession. finishuserinfotransfer")])]),t._v(" "),s("td",[t._v("Called of fired when the transfer completes on the paired device.")])])])])])]),t._v(" "),s("h3",{attrs:{id:"transfer-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#transfer-files"}},[t._v("#")]),t._v(" Transfer Files")]),t._v(" "),s("p",[t._v("Besides data, you can transfer files between the paired devices. Use the following APIs to transfer files:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Watch Connectivity Framework API")]),t._v(" "),s("th",[t._v("Titanium.WatchSession API")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[s("code",[t._v("-transferFile:metadata:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-method-transferFile"}},[t._v("Ti.WatchSession.transferFile()")])]),t._v(" "),s("td",[t._v("Transfers a file to the paired device in the background.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-session:didReceiveFile:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-event-receivefile"}},[t._v("Ti.WatchSession.receivefile")])]),t._v(" "),s("td",[t._v("Called or fired when the device receives a file transfer from the paired device.")])]),t._v(" "),s("tr",[s("td",[s("code",[t._v("-session:didFinishFileTransfer:error:")])]),t._v(" "),s("td",[s("a",{attrs:{href:"#!/api/Titanium.WatchSession-event-finishfiletransfer"}},[t._v("Ti.WatchSession.finishfiletransfer")])]),t._v(" "),s("td",[t._v("Called or fired when the transfer completes (successfully or not) on the paired device.")])])])]),t._v(" "),s("h2",{attrs:{id:"provisioning-profiles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#provisioning-profiles"}},[t._v("#")]),t._v(" Provisioning Profiles")]),t._v(" "),s("p",[t._v("Before deploying a watchOS application to a device or creating a package for distribution, you need to create provisioning profiles for both the WatchKit application and WatchKit extension. You may either add the watch device to an existing provisioning profile or create separate provisioning profiles. Separate provisioning profiles will be needed if you want to support push notifications.")]),t._v(" "),s("p",[t._v("For directions on creating a provisioning profile, see "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Deploying_to_iOS_devices/"}},[t._v("Deploying to iOS devices")]),t._v(" or "),s("RouterLink",{attrs:{to:"/guide/Titanium_SDK/Titanium_SDK_Guide/Preparing_for_Distribution/Distributing_iOS_apps/"}},[t._v("Distributing iOS apps")]),t._v(".")],1),t._v(" "),s("p",[t._v("After you create your provisioning profiles and add them to Xcode, you need to add the UUID of the provisioning profiles to the "),s("code",[t._v("tiapp.xml")]),t._v(" file.")]),t._v(" "),s("p",[s("strong",[t._v("Using Studio:")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the tiapp.xml file in the Overview tab.")])]),t._v(" "),s("li",[s("p",[t._v("Under the "),s("em",[t._v("Apple watchOS 2 App")]),t._v(" section, click "),s("strong",[t._v("Configure Provisioning Profiles...")])])]),t._v(" "),s("li",[s("p",[t._v("In the "),s("em",[t._v("Configure Targets")]),t._v(" step, verify both the Watch App and WatchApp Extension are checked, then click "),s("strong",[t._v("Next")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("For each distribution target, select in drop-down the provisioning profile you want to use for the WatchApp and WatchApp extension.")])])]),t._v(" "),s("p",[s("strong",[t._v("Using a Text Editor:")])]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Open the "),s("code",[t._v("tiapp.xml")]),t._v(" file.")])]),t._v(" "),s("li",[s("p",[t._v("Locate the "),s("code",[t._v("extensions")]),t._v(" element under the "),s("code",[t._v("ios")]),t._v(" element.")])]),t._v(" "),s("li",[s("p",[t._v("Xcode 8 requires the Team-ID of your app to be set in order to link the different app targets. Add the Team-ID of your app into the "),s("code",[t._v("team-id")]),t._v(" element")])]),t._v(" "),s("li",[s("p",[t._v("Under the "),s("code",[t._v("extensions")]),t._v(" element, you should see two "),s("code",[t._v("target")]),t._v(" elements. One is for the WatchKit extension (target name should contain the "),s("code",[t._v("Extension")]),t._v(") and the other is for the WatchKit app (target name should not contain "),s("code",[t._v("Extension")]),t._v(".")])]),t._v(" "),s("li",[s("p",[t._v("Under each "),s("code",[t._v("target")]),t._v(" element, you should see three self-closing elements: "),s("code",[t._v("devices")]),t._v(", "),s("code",[t._v("dist-appstore")]),t._v(" and "),s("code",[t._v("dist-adhoc")]),t._v(". Add the UUID of the provisioning profile as node text for each deployment type.")]),t._v(" "),s("ol",[s("li",[s("p",[s("code",[t._v("devices")]),t._v(": Add the UUID of the development provisioning profile")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("dist-appstore")]),t._v(": Add the UUID of the app store distribution provisioning profile")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("dist-adhoc")]),t._v(": Add the UUID of the ad hoc distribution provisioning profile")])])])])]),t._v(" "),s("p",[t._v("The example below add the development provisioning profiles to the file.")]),t._v(" "),s("p",[s("strong",[t._v("tiapp.xml")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Required for Xcode 8 and later (Titanium SDK 5.5.0+) --\x3e")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("team-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("YOUR-TEAM-ID"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("team-id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("extensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("extension")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("projectPath")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("extensions/foo/foo.xcodeproj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo WatchApp Extension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("provisioning-profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("devices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("12345678-0987-6543-2121-fedcba098765"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("devices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dist-appstore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dist-adhoc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("provisioning-profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("target")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("foo WatchApp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("provisioning-profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("devices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("abcdef-dead-beef-0909-01234567"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("devices")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dist-appstore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dist-adhoc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("provisioning-profiles")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("target")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("extension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("extensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ios")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("ti:")]),t._v("app")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"run-the-project"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#run-the-project"}},[t._v("#")]),t._v(" Run the Project")]),t._v(" "),s("p",[t._v("To run the project, just build and launch the project like you would any other Titanium project, but for the WatchKit app, add the "),s("code",[t._v("--launch-watch-app")]),t._v(" or "),s("code",[t._v("--launch-watch-app-only")]),t._v(" flags to launch the watch application with or without the iOS application, respectively.")]),t._v(" "),s("p",[t._v("For Studio, use the run command from the launch options toolbar. If you want to run the watch application on a simulator, in the Target drop-down, select a 9.0 or greater simulator that has a paired watch target.")]),t._v(" "),s("p",[s("img",{attrs:{src:a(772),alt:"StudioWatchSimulator"}})]),t._v(" "),s("p",[t._v("For the CLI, execute "),s("code",[t._v("appc run -p ios")]),t._v(" with the additional build options.")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("appc run -p ios --launch-watch-app\n")])])]),s("p",[t._v("If you have more than one watch application extensions, specify the watch application to launch with the "),s("code",[t._v("--watch-app-name <APP_NAME>")]),t._v(" option.")]),t._v(" "),s("p",[t._v("If you want to specify the watch simulator, use the "),s("code",[t._v("--watch-device-id <UDID>")]),t._v(" option.")]),t._v(" "),s("h2",{attrs:{id:"package-the-application"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-the-application"}},[t._v("#")]),t._v(" Package the Application")]),t._v(" "),s("p",[t._v("To package the application with the extension, just package the project like you would any other Titanium application. For Studio, use the package command from the launch options toolbar, and for the CLI, execute "),s("code",[t._v("appc run")]),t._v(" command with the package options.")]),t._v(" "),s("h2",{attrs:{id:"further-reading"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[t._v("#")]),t._v(" Further Reading")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/General/Conceptual/WatchKitProgrammingGuide/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS Developer Library: Apple Watch Programming Guide"),s("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports},772:function(t,e,a){t.exports=a.p+"assets/img/StudioWatchSimulator.861aac37.png"}}]);