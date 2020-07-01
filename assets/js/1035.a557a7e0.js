(window.webpackJsonp=window.webpackJsonp||[]).push([[1035],{1337:function(t,a,s){"use strict";s.r(a);var e=s(21),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mvc-style-app-framework"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mvc-style-app-framework"}},[t._v("#")]),t._v(" MVC Style App Framework")]),t._v(" "),s("p",[t._v("This document contains information on where to download the project scaffold, overview of core concepts and conventions, events, managing orientation UI and cross-platform and form factor files, and app namespace.")]),t._v(" "),s("h2",{attrs:{id:"download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),s("p",[t._v("You can download the project scaffold described below by clicking here: "),s("a",{attrs:{href:"./attachments_30278161_1_scaffold.zip"}},[t._v("scaffold.zip")])]),t._v(" "),s("h2",{attrs:{id:"core-concepts-and-conventions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#core-concepts-and-conventions"}},[t._v("#")]),t._v(" Core Concepts and Conventions")]),t._v(" "),s("p",[t._v("This sample framework adapts a model-view-controller architecture, defines an event architecture, and defines an object inheritance pattern. It is not a pure MVC implementation. It also was created prior to our adoption of CommonJS require() as the preferred technique. Still, it is an instructive model and has been used successfully for Appcelerator-led projects.")]),t._v(" "),s("h3",{attrs:{id:"standard-patterns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#standard-patterns"}},[t._v("#")]),t._v(" Standard Patterns")]),t._v(" "),s("p",[t._v("The use of several patterns will be required throughout this app. For overall object or 'class' construction, a revealing module pattern will be used. Self-invoking functions for singleton objects will be used. For instantiable objects, the 'new' keyword should be used.")]),t._v(" "),s("p",[t._v("Example of a revealing module pattern:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("Messages")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("someId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" someId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Member method")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLatestMessages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is a test'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is a test 2'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" text"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'This is a test 3'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Return this object's 'public API'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        getLatestMessages"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" getLatestMessages"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" someId\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// This example must be instantiated using the 'new' keyword")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" model "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Messages")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("If inheritance is needed for any reason then those parent objects will be built with "),s("code",[t._v("this")]),t._v(" prepended to its public methods / properties. The use of apply/call will be used to inherit methods in to child objects. Due to Titanium's poor performance around mixins, mixin type inheritance shouldn't be used unless it is for small objects.")]),t._v(" "),s("h3",{attrs:{id:"global-namespace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#global-namespace"}},[t._v("#")]),t._v(" Global Namespace")]),t._v(" "),s("p",[t._v("As a general rule, you should add as few objects to the global scope as you can. Such a practice makes garbage collection easier and lessens opportunities for name conflicts / crashes. Additionally, you should "),s("em",[t._v("not modify the Titanium proxy objects")]),t._v(", such as Ti.App, by adding properties or methods. To account for these design constraints, this app framework creates a single global "),s("code",[t._v("App")]),t._v(" object to which you may append objects as needed. While there may be times when another global object is needed, everything will be placed in this namespace and documented in order to stay organized and avoid conflicts. e.g. App.Controllers = {}; would be where we store controllers for this app.")]),t._v(" "),s("h3",{attrs:{id:"models"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#models"}},[t._v("#")]),t._v(" Models")]),t._v(" "),s("p",[t._v("Models are the data layer for this app. They can serve as two types: instantiable objects that can be reused across the app or as a PDO type object that stores data in memory for the lifetime of the app. Data logic should be offloaded in these objects as much as possible.")]),t._v(" "),s("h3",{attrs:{id:"ui-and-styles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ui-and-styles"}},[t._v("#")]),t._v(" UI and Styles")]),t._v(" "),s("p",[t._v("UI files serve as the 'view' areas of the app. They will control any logic for aesthetic events (e.g. a highlight state), setting UI specific things such as a controller calling UI.setTitle('Cool beans') to change the title in the UI. They also serve for TiUI object creation and management.")]),t._v(" "),s("p",[t._v("Every UI file will have a corresponding 'styles' file. The styles file is an object literal that contains the object properties used to populate UI elements.")]),t._v(" "),s("h3",{attrs:{id:"controllers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#controllers"}},[t._v("#")]),t._v(" Controllers")]),t._v(" "),s("p",[t._v("Controllers are the main level business of the app. Controllers will manage the UI and model delegation for screens and components across an app. Some controllers may be global to the app and others instantiable, invoked when using a certain part of the app.")]),t._v(" "),s("h3",{attrs:{id:"modules"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modules"}},[t._v("#")]),t._v(" Modules")]),t._v(" "),s("p",[t._v("Modules are CommonJS files that can be dropped in to the project for use. An effort will be made to ensure app widgets are modules so we can reuse them elsewhere in the future. Modules will be contained in their own folder with their own set of files if needed and assets.")]),t._v(" "),s("h2",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),s("p",[t._v("UI, models, and controllers will maintain their own internal events except when needed for global, app-wide cases. UI events will be related to aesthetics, UI state, and other similar functionality. Controller events will manage things in it's internal workings. Model events will mostly fire / update observers that are listening for data changes (mostly in the controller)")]),t._v(" "),s("p",[t._v("Global events will not be placed inside instantiable objects. Global events will be tracked in the global namespace. A good example is the orientation event placed in app.js. It fires a global function located in /lib/app.js 'orientationObserverUpdate'. This listener manages all objects that might have an orientation requirement. The 'orientationObserverUpdate' can fire a current controller or UI object that has an orientation function. e.g. 'currentController.orientationUpdate():' or 'currentController.UI.orientationUpdate();'")]),t._v(" "),s("h2",{attrs:{id:"managing-orientation-ui"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#managing-orientation-ui"}},[t._v("#")]),t._v(" Managing Orientation UI")]),t._v(" "),s("p",[t._v("Titanium doesn't handle different layouts in orientation very well (because of absence of NIB files, etc.) so care must be taken in how this is setup. The design for this project isn't overly complex so it likely won't be a factor. Orientation management will be handled in two ways:")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Via the controller – For complex orientation handling the controller will need an 'orientationUpdate()' method. This will handle all orientation needs the controller is managing.")])]),t._v(" "),s("li",[s("p",[t._v("Via the UI – This is the most common scenario. The orientationObserverUpdate method will check if the current controller's UI and other listening objects have an orientationUpdate() method in the UI namespace. If so it will fire them and the UI will update accordingly. NOTE: See /ui/dashboard/dashboard.js for an example.")])])]),t._v(" "),s("p",[t._v("Either method above will pass a landscape / portrait argument which can be used by the UI's corresponding style sheet. e.g.")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("orientationUpdate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("height"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nOrientation specific styles will be separated like so"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\nApp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Example "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Orientation specific")]),t._v("\n    portrait"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      wrapper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    landscape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      wrapper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Defaults (probably won't be necessar once we have a global property of current orientation)")]),t._v("\n    wrapper"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        height"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'auto'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"managing-cross-platform-and-form-factor-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#managing-cross-platform-and-form-factor-files"}},[t._v("#")]),t._v(" Managing cross-platform and form factor files")]),t._v(" "),s("p",[t._v("There are several conventions to follow when building against different platforms and form factors:")]),t._v(" "),s("h3",{attrs:{id:"form-factors"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#form-factors"}},[t._v("#")]),t._v(" Form Factors")]),t._v(" "),s("p",[t._v("Conditionals can be built off of the different form factors for this app, i.e. tablet / handheld. For hardcoded values you can simply use something like:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("if(App.formFactor === 'tablet') {\n  // do something here\n}\n")])])]),s("p",[t._v("In many cases hard conditionals aren't needed since it's almost always related to UI branching. It's better to use the following:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// No conditionals needed")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" wrapper "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Styles"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Example"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("formFactor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapper"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nBranch by file "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" the "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),t._v(" or functionality "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" a form factor is drastically different"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// For a form factor e.g. dashboard.tablet.js")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ui/dashboard/dashboard.'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("formFactor "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Or if just a platform type is needed e.g. dashboard.ios.js")]),t._v("\nTi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("include")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ui/dashboard/dashboard.'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"cross-platform-and-type-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cross-platform-and-type-handling"}},[t._v("#")]),t._v(" Cross platform and type handling")]),t._v(" "),s("p",[t._v("In similar fashion, iOS / Android / Google TV, etc can be branched by either file or hard conditionals depending on the scenario.")]),t._v(" "),s("p",[t._v("A style.js example for the above scenarios with combined styles can look like this:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("App.Styles.Example = {\n    menu: {\n        handset: {\n          android: {\n        buttonTrack: {\n                  height: 30,\n                  top: 0\n              }\n          },\n          ios: {\n            buttonTrack: {\n                  height: 30\n              }\n          }\n        },\n        tablet: {\n            buttonTrack: {\n                height: 100\n            }\n        }\n    }\n}\n")])])]),s("p",[t._v("To avoid excessive dirty nesting like the above example, branch by file will be used when it makes sense:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// This extreme example shows when an included file for a specific form factor AND platform is needed.\n// Amounts to a file named 'style.handset.ios.js' for instance\nTi.include('ui/dashboard/style.' + App.formFactor + '.' + App.type + 'js');\n")])])]),s("h2",{attrs:{id:"the-app-namespace"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-app-namespace"}},[t._v("#")]),t._v(" The 'App' Namespace")]),t._v(" "),s("p",[t._v("There are numerous properties to be appended to the 'App' namespace. The following is an initial list:")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("App.formFactor")]),t._v(" - Used for the different form factored layouts e.g. tablet / handheld")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.API")]),t._v(" - Data endpoints and other API-ish things. A full set of App API areas for data (if needed). Good for storing PDO models and such.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.Models")]),t._v(" - Where models are stored")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.Controllers")]),t._v(" - Where controllers are stored")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.UI")]),t._v(" - UI components stored here")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.Styles")]),t._v(" - Styles objects here")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.Sidebar")]),t._v(" - Quick access to the sidebar module")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.currentPanel")]),t._v(" - If using the GlobalPanels, this just tracks the current one open. Might not be needed.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.Plugins")]),t._v(" - Place to put 3rd party plugins that don't fall in the category of a module or anything else.")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.Window")]),t._v(" - The global window this app uses")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.currentOrientation")]),t._v(" - The Current orientation landscape || portrait")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.Header")]),t._v(" - The top navigation area")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.boot")]),t._v(" - Handles booting up the app once things are loaded in")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.globalTopNavigationObserver")]),t._v(" - Handles global event for sidebar flyouts")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.sidebarMenuObserver")]),t._v(" - Handles global event for sidebar menus")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.onAfterAuthentication")]),t._v(" - Handles authentication routing after authentication is confirmed")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("App.orientationObserverUpdate")]),t._v(" - Handles orientation update")])])]),t._v(" "),s("h3",{attrs:{id:"app-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-api"}},[t._v("#")]),t._v(" App.API")]),t._v(" "),s("p",[t._v("This area handles the data layers of the app.")]),t._v(" "),s("ul",[s("li",[s("p",[s("code",[t._v("setupDatabase")]),t._v(" - Sets up a local sqlite database schema")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("DB")]),t._v(" - The data ORM endpoint (using the Joli plugin)")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("Salesforce")]),t._v(" - Endpoint for all salesforce calls. This includes the salesforce module and the evently module")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("tableSchemas")]),t._v(" - Stores the field names / schema for the database")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("sessionRefresh")]),t._v(" - This will try to log in the previously logged in user")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("syncModel")]),t._v(" - Syncs the supplied data to local storage")])]),t._v(" "),s("li",[s("p",[s("code",[t._v("syncFullEvent")]),t._v(" - Sync full event (all models: sessions, registration, etc)")])])]),t._v(" "),s("h3",{attrs:{id:"app-platform"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-platform"}},[t._v("#")]),t._v(" App.Platform")]),t._v(" "),s("p",[t._v("This endpoint has several features that help determine things like logic branching based on platform, device type, etc. This endpoint uses the platform module. Some useful examples of how this can be used:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" orientationModes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  handheld"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("PORTRAIT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tablet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LANDSCAPE_LEFT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Ti"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("UI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("LANDSCAPE_RIGHT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" pointOffset "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" iApp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("s")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  ios"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("120")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nApp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Platform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("is")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  handheld"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ios")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do iphone/ipod stuff")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("android")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do android handheld stuff")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  tablet"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ios")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do ipad stuff")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("android")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//do android tablet stuff")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);