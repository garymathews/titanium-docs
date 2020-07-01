(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{1361:function(e,t,a){"use strict";a.r(t);var o=a(21),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"migrating-from-aptana-studio-2-to-aptana-studio-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-aptana-studio-2-to-aptana-studio-3"}},[e._v("#")]),e._v(" Migrating from Aptana Studio 2 to Aptana Studio 3")]),e._v(" "),o("p",[e._v("This document contains information on how to migrate Aptana Studio 2 to version 3.")]),e._v(" "),o("h2",{attrs:{id:"migrating-projects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-projects"}},[e._v("#")]),e._v(" Migrating Projects")]),e._v(" "),o("p",[e._v("Aptana Studio 2 and Aptana Studio 3 have different workspaces so that you can use the two products simultaneously. To work with a project in Aptana Studio 3, you will want to import your project from one workspace to the other.")]),e._v(" "),o("div",{staticClass:"warning custom-block"},[o("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),o("p",[e._v("It is not recommended to edit a project in both Studio 2 and Studio 3. Once you import a project, it is suggested you stick with Studio 3 for editing.")])]),e._v(" "),o("h3",{attrs:{id:"to-migrate-your-projects-from-studio-2-to-studio-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#to-migrate-your-projects-from-studio-2-to-studio-3"}},[e._v("#")]),e._v(" To migrate your projects from Studio 2 to Studio 3")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("From the "),o("strong",[e._v("File")]),e._v(" menu, select "),o("strong",[e._v("Import")]),e._v(' to open an "Import" pop-up window.')])]),e._v(" "),o("li",[o("p",[e._v("Select "),o("strong",[e._v("General > Existing Projects into Workspace")])])]),e._v(" "),o("li",[o("p",[e._v("Browse to your Aptana Studio 2 workspace folder by clicking on the top "),o("strong",[e._v("Browse...")]),e._v(" button. Click "),o("strong",[e._v("Open")])])]),e._v(" "),o("li",[o("p",[e._v('The "Projects" list will contain a list of all of the projects it has found. Uncheck the ones you do not wish to import.')])]),e._v(" "),o("li",[o("p",[e._v('A checkbox will ask you if you wish to copy the projects into your workspace. Generally, the answer is "yes," but note that that leaves a copy in the Aptana Studio 2 workspace and a separate copy in Aptana Studio 3.')])]),e._v(" "),o("li",[o("p",[e._v("Click the "),o("strong",[e._v("Finish")]),e._v(" button.")])])]),e._v(" "),o("h3",{attrs:{id:"migrating-web-php-and-rails-projects"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#migrating-web-php-and-rails-projects"}},[e._v("#")]),e._v(" Migrating Web, PHP and Rails projects")]),e._v(" "),o("p",[e._v("Studio 3 changed a few things underneath the hood regarding how projects are processed. We've attempted to automate the migration process for you as you move from one environment to the other, but it's possible this process may not work in every possible circumstance. You would notice it most specifically with regards to missing content assist. To fix this, you'll need to reset the \"Natures\" on a project.")]),e._v(" "),o("p",[e._v("As a first step, you can try just restarting Aptana Studio. If that doesn't work, try modifying the project natures (bottom of the page here): "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Basic_Concepts/Working_with_Projects/Importing_an_Existing_Project/"}},[e._v("Importing an Existing Project")])],1),e._v(" "),o("p",[e._v("Importing connections is a separate step:")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("Select "),o("strong",[e._v("File > Import > Studio/Connections")])])]),e._v(" "),o("li",[o("p",[e._v('Make sure the "Workspace" radio button is selected, and browse to your Aptana Studio 2 workspace')])]),e._v(" "),o("li",[o("p",[e._v("Click Finish. Your connections will show up in the Remote Connections view, and attached to projects.")])])]),e._v(" "),o("p",[o("img",{attrs:{src:a(763),alt:"Screen_shot_2011-04-20_at_12.51.09_PM"}})]),e._v(" "),o("p",[e._v("You can repeat this process multiple times, and it will not re-import duplicates.")]),e._v(" "),o("h2",{attrs:{id:"file-view-remote-connections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-view-remote-connections"}},[e._v("#")]),e._v(" File View/Remote Connections")]),e._v(" "),o("p",[e._v('File View has been replaced by a "Local Filesystem" node in the Project Explorer view. The "Connections" note is now visible from the "Remote" view, available in '),o("strong",[e._v("Window > Show View > Remote")])]),e._v(" "),o("p",[e._v('Another change is that "Untitled Files" of various types (for example, Untitled HTML File, Untitled CSS File) are no longer supported in the new file wizard. While a useful feature, it led to a great deal of hacked-together workarounds in the underlying codebase. We are looking at how we may be able to bring this feature back in a future release.')]),e._v(" "),o("h2",{attrs:{id:"content-assist"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#content-assist"}},[e._v("#")]),e._v(" Content Assist")]),e._v(" "),o("p",[e._v("Studio 3 simplified the concept of adding JavaScript content assist greatly. Rather than a reference view that needed to be constantly updated, we've instead allowed the user to drop content assist files into an existing project to get good code assist that way. We've ported over all of the libraries we can from Studio 2, but some work needs to be done in getting content assist files for additional libraries like MootTools and Node.js. If you are interested in helping, please let us know.")]),e._v(" "),o("ul",[o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Using_JavaScript_Libraries/"}},[e._v("Using JavaScript Libraries")])],1)]),e._v(" "),o("li",[o("p",[o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Web_Development/JavaScript_Development/Using_JavaScript_Libraries/JavaScript_Library_Support/"}},[e._v("JavaScript Library Support")])],1)])]),e._v(" "),o("h2",{attrs:{id:"php"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#php"}},[e._v("#")]),e._v(" PHP")]),e._v(" "),o("p",[e._v("Studio 2 utilized the Eclipse PHP Development Tools for PHP support. Studio 3 introduces a separate PHP plugin so that we better integrate PHP support throughout the product, and to reduce the overall install footprint. For those who prefer the PDT editors, you can either install the existing PDT all-in-one distro, and add Aptana Studio, or install PDT into Aptana Studio 3.")]),e._v(" "),o("h2",{attrs:{id:"rails"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#rails"}},[e._v("#")]),e._v(" Rails")]),e._v(" "),o("p",[e._v("Aptana Studio 3 includes RadRails, so no separate download is required. We've removed some of the helper views from before, as most rails developers are familiar with how to do many of the tasks on the command line that those views facilitated. For more information, see "),o("a",{attrs:{href:"#undefined"}},[e._v("Rails Development")]),e._v(".")]),e._v(" "),o("h2",{attrs:{id:"customization-preferences"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#customization-preferences"}},[e._v("#")]),e._v(" Customization/Preferences")]),e._v(" "),o("p",[e._v("Formatting preferences are the most notable change, but in general, the defaults should be relatively similar. See below for more details.")]),e._v(" "),o("h3",{attrs:{id:"scripting"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#scripting"}},[e._v("#")]),e._v(" Scripting")]),e._v(" "),o("p",[e._v("Aptana Studio 3 introduced the concept of Rubles, Ruby-based scripting bundles based on Textmate bundles. A number of these bundles have been ported already, and a "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/"}},[e._v("rich SDK")]),e._v(" exists for users who want to create or extend existing bundles. If you were using Eclipse Monkey, we are investigating adding JavaScript scripting support as another mechanism for Scripting Studio, but there is no firm ETA on that yet. However, everything that could be done in Eclipse Monkey can be done with Rubles, and the documentation and existing Rubles should give plenty of examples.")],1),e._v(" "),o("h3",{attrs:{id:"previewing-files-run-launch-configurations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#previewing-files-run-launch-configurations"}},[e._v("#")]),e._v(" Previewing Files/Run/Launch Configurations")]),e._v(" "),o("p",[e._v("Studio 2 relied on an internal browser preview utilizing the native platform browser. Studio 3 instead relies on Chromium for previewing, a WebKit-based browser. You can find out more about previewing files here: "),o("a",{attrs:{href:"#undefined"}},[e._v("Previewing")]),e._v(".")]),e._v(" "),o("p",[e._v("Launch configurations may be exported and imported using the standard Eclipse export/import mechanism. See here: "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Exporting_and_importing_preferences/"}},[e._v("Exporting and importing preferences")]),e._v(".")],1),e._v(" "),o("h3",{attrs:{id:"colorization-themes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#colorization-themes"}},[e._v("#")]),e._v(" Colorization/Themes")]),e._v(" "),o("p",[e._v("Aptana Studio 3 uses a different mechanism for colorizing files than Aptana Studio 2 did. There is no converter yet, but you can use any existing Textmate theme you like. If you'd like to create your theme, you can "),o("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Themes/"}},[e._v("read more about it")]),e._v(".")],1),e._v(" "),o("h2",{attrs:{id:"differences-between-aptana-studio-2-and-3"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#differences-between-aptana-studio-2-and-3"}},[e._v("#")]),e._v(" Differences between Aptana Studio 2 and 3")]),e._v(" "),o("p",[e._v("Aptana Studio 3 is a complete rewrite of the Aptana code base, and as such, there are some differences in implementations between the two versions. Notable differences are highlighted below.")]),e._v(" "),o("h3",{attrs:{id:"code-formatter"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#code-formatter"}},[e._v("#")]),e._v(" Code Formatter")]),e._v(" "),o("p",[e._v("There are no PHP, Ruby, ERB, and JSON formatters in Studio 2, so Studio 3 formatters can are brand new for these languages. In all of our formatters, we now set the ‘Tab Policy’ to be whatever is set for the editor. In Studio2, the defaults were always set to ‘Spaces Only’ with an indentation and tab size of 4 characters.")]),e._v(" "),o("h4",{attrs:{id:"new-features"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#new-features"}},[e._v("#")]),e._v(" New Features")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("A single page for accessing, importing and exporting formatter preferences")])]),e._v(" "),o("li",[o("p",[e._v("PHP, JS, Ruby, CSS, and HTML all support wrapping comments to a specified length")])])]),e._v(" "),o("p",[e._v("The remaining differences are a result of us simplifying and removing code that appeared little used. If a beloved option has disappeared from the preferences, please let us know by filing a Lighthouse ticket.")]),e._v(" "),o("h4",{attrs:{id:"html"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#html"}},[e._v("#")]),e._v(" HTML")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The HTML elements list that \"should not take new lines\" is a bit different in Studio 3. Studio 3 adds the 'TD' and 'TH' elements to that list.")])]),e._v(" "),o("li",[o("p",[e._v("The 'Force Wrap' section no longer exists in Studio 3. Instead, we have only a 'Comments' tab that allows wrapping settings for comments only.")])]),e._v(" "),o("li",[o("p",[e._v("The indentation settings were changed as well. Studio 2 did not have any item in its exclusion list, while Studio 3 defines 22 elements that will not cause an increase of indentation.")])])]),e._v(" "),o("h4",{attrs:{id:"xml"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#xml"}},[e._v("#")]),e._v(" XML")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("The 'Spaces before attributes on multi-line tags' setting was removed.")])]),e._v(" "),o("li",[o("p",[e._v("Force wrap was removed.")])]),e._v(" "),o("li",[o("p",[e._v("'Preserve whitespace in CDATA sections' was removed – We do not change the spacing for the moment.")])]),e._v(" "),o("li",[o("p",[e._v("'Preserve extra carriage returns' was substituted with a set of 'Blank Lines' settings.")])])]),e._v(" "),o("h4",{attrs:{id:"javascript"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[e._v("#")]),e._v(" JavaScript")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("\"Insert new line before 'if' statement\" was removed – We always insert one now.")])]),e._v(" "),o("li",[o("p",[e._v("\"Insert new line before 'return' statement\" was removed – We always insert one now.")])]),e._v(" "),o("li",[o("p",[e._v("The 'if-else' group settings in the 'Control Statement' is not supported in Studio 3. Many of those settings are controlled by the 'New Lines' general settings.")])])]),e._v(" "),o("p",[e._v("The two items that are removed from the Studio 3 formatter are: \"Keep 'then' statement on the same line\" and \"Keep 'return' or 'throw' clause on one line\".")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("\"'break' statements\" indentation control was removed.")])]),e._v(" "),o("li",[o("p",[e._v("\"Preserve extra carriage returns\" was substituted with a set of 'Blank Lines' settings.")])]),e._v(" "),o("li",[o("p",[e._v('"Add space after closing paren in function declaration" was removed.')])]),e._v(" "),o("li",[o("p",[e._v('"Object initializer" braces location is now controlled by the "Blocks" braces location.')])])])])}),[],!1,null,null,null);t.default=i.exports},763:function(e,t,a){e.exports=a.p+"assets/img/Screen_shot_2011-04-20_at_12.51.09_PM.075c9205.png"}}]);