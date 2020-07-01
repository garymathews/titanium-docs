(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{2033:function(t,e,s){"use strict";s.r(e);var o=s(21),a=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"displaying-content-assist"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#displaying-content-assist"}},[t._v("#")]),t._v(" Displaying Content Assist")]),t._v(" "),o("p",[t._v("As you code, Content Assist provides tips on available properties and methods and the parameters that a method takes. See "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Content_Assist/About_Content_Assist/"}},[t._v("About Content Assist")]),t._v(" for a detailed explanation.")],1),t._v(" "),o("h2",{attrs:{id:"instructions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[t._v("#")]),t._v(" Instructions")]),t._v(" "),o("p",[t._v("To display the tips provided by content assist:")]),t._v(" "),o("ul",[o("li",[t._v("Content Assist automatically pops up a context menu or yellow tip box as you type the name of an object or function to which Content Assist applies.")])]),t._v(" "),o("div",{staticClass:"tip custom-block"},[o("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),o("p",[t._v("To display a longer Tool Tip, press "),o("strong",[t._v("F2")]),t._v(" while your cursor is on the function or object. (You can also select "),o("strong",[t._v("ShowToolTip")]),t._v(" from the "),o("strong",[t._v("Edit")]),t._v(" menu while your cursor is on the function or object.)")])]),t._v(" "),o("h2",{attrs:{id:"understanding-what-browser-user-agents-enable-which-features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#understanding-what-browser-user-agents-enable-which-features"}},[t._v("#")]),t._v(" Understanding what browser/user agents enable which features")]),t._v(" "),o("p",[t._v('By default, content assist will show a list of "user agents" with each proposal. This is to help you determine which items can be safely used with which browser. The icon state will change depending on the information available to the user:')]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Full-color: the property is available")])]),t._v(" "),o("li",[o("p",[t._v("Greyed-out: the property is not available")])])]),t._v(" "),o("p",[t._v("If no information is available, the property is assumed to be "),o("strong",[t._v("available")]),t._v(". In the image below, you can see some items apply only to Chrome, some to Firefox, and some to IE.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(502),alt:"Screen_Shot_2011-12-20_at_9.29.42_AM"}})]),t._v(" "),o("h2",{attrs:{id:"setting-content-assist-preferences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#setting-content-assist-preferences"}},[t._v("#")]),t._v(" Setting content assist preferences")]),t._v(" "),o("p",[t._v("Content assist has several options which may be adjusted.")]),t._v(" "),o("p",[o("img",{attrs:{src:s(503),alt:"Content_Assist_Preferences"}})]),t._v(" "),o("h3",{attrs:{id:"changing-the-user-agents-shown-with-content-assist"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#changing-the-user-agents-shown-with-content-assist"}},[t._v("#")]),t._v(" Changing the user agents shown with content assist")]),t._v(" "),o("ol",[o("li",[o("p",[t._v("Open "),o("strong",[t._v("Preferences > Studio > Content Assist")])])]),t._v(" "),o("li",[o("p",[t._v("User-agent preferences are set per project type.")])]),t._v(" "),o("li",[o("p",[t._v('Select a project type, for example, "PHP" and choose the agents to show by default.')])]),t._v(" "),o("li",[o("p",[t._v("Press "),o("strong",[t._v("OK")])])])]),t._v(" "),o("h3",{attrs:{id:"filter-the-proposal-list-by-supported-items"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#filter-the-proposal-list-by-supported-items"}},[t._v("#")]),t._v(" Filter the proposal list by supported items")]),t._v(" "),o("p",[t._v("You can choose to show proposals in content assist only if they match certain conditions. This option is set for all project types.")]),t._v(" "),o("p",[t._v("Show proposals that contain:")]),t._v(" "),o("ul",[o("li",[o("p",[t._v("Any user-agent: a proposal will appear in the list regardless if it is supported or not by the selected user agents.")])]),t._v(" "),o("li",[o("p",[t._v("One or more selected user agents: a proposal will appear if one of more of the selected user agents support this feature.")])]),t._v(" "),o("li",[o("p",[t._v("All selected user agents: a proposal will only appear if "),o("em",[t._v("all")]),t._v(" user agents support this feature.")])])]),t._v(" "),o("h3",{attrs:{id:"single-proposal-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#single-proposal-options"}},[t._v("#")]),t._v(" Single proposal options")]),t._v(" "),o("p",[t._v("By default, if there is only one possible proposal in the content assist list, it will be automatically inserted. Uncheck "),o("strong",[t._v("Insert single proposals automatically")]),t._v(" to turn off this behavior.")]),t._v(" "),o("h3",{attrs:{id:"content-display-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#content-display-options"}},[t._v("#")]),t._v(" Content display options")]),t._v(" "),o("p",[t._v("Content assist will display after a default delay of 200ms, i.e., once you type a trigger character, it will take a short while to pop up the dialog box. Tweak this setting if you wish to shorten or lengthen this delay.")]),t._v(" "),o("h3",{attrs:{id:"hover-options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#hover-options"}},[t._v("#")]),t._v(" Hover options")]),t._v(" "),o("p",[t._v("When hovering over a function, property, or method, if documentation is available, a box will pop up with additional information. Tweak this setting if you wish to modify this behavior.")]),t._v(" "),o("h2",{attrs:{id:"related-topics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#related-topics"}},[t._v("#")]),t._v(" Related Topics")]),t._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Content_Assist/About_Content_Assist/"}},[t._v("About Content Assist")])],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Documenting_Code/Documenting_Your_Code_Using_ScriptDoc/"}},[t._v("Documenting Your Code Using ScriptDoc")])],1)]),t._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/ScriptDoc_tag_quick_reference/"}},[t._v("ScriptDoc tag quick reference")])],1)])])])}),[],!1,null,null,null);e.default=a.exports},502:function(t,e,s){t.exports=s.p+"assets/img/Screen_Shot_2011-12-20_at_9.29.42_AM.9cfb9940.png"},503:function(t,e,s){t.exports=s.p+"assets/img/Content_Assist_Preferences.723c20b1.png"}}]);