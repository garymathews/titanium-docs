(window.webpackJsonp=window.webpackJsonp||[]).push([[898],{2165:function(t,e,a){"use strict";a.r(e);var r=a(21),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"building-aptana-studio"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-aptana-studio"}},[t._v("#")]),t._v(" Building Aptana Studio")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("⚠️ Warning")]),t._v(" "),a("p",[t._v("Aptana Studio is licensed under the terms of the GNU Public License. See "),a("a",{attrs:{href:"http://www.aptana.com/legal/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.aptana.com/legal/"),a("OutboundLink")],1),t._v(" for questions regarding using the Aptana Studio source in other open-source or commercial products. If you create and distribute a derivative work, you release it under the terms of the GPL. Appcelerator and Titanium Studio are released under a closed-source license, and the parts specific to Appcelerator and Titanium Studio are excepted out as part of the GPL exception. If you need to reuse code in other projects, please pay attention to the license and ensure it is compatible with what you are working on.")])]),t._v(" "),a("h2",{attrs:{id:"getting-the-sources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-the-sources"}},[t._v("#")]),t._v(" Getting the Sources")]),t._v(" "),a("p",[t._v("Aptana Studio exists in a single GitHub repo. Below are the links to the relevant pieces.")]),t._v(" "),a("h3",{attrs:{id:"aptana-studio-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#aptana-studio-3"}},[t._v("#")]),t._v(" Aptana Studio 3")]),t._v(" "),a("p",[a("strong",[t._v("Studio 3:")]),t._v(" "),a("a",{attrs:{href:"https://github.com/aptana/studio3",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aptana/studio3"),a("OutboundLink")],1),t._v("\nThe core plugins for Aptana Studio 3. HTML/JS/CSS editors, JavaScript debuggers, etc all live here.")]),t._v(" "),a("p",[a("strong",[t._v("Studio 3 RCP:")]),t._v(" "),a("a",{attrs:{href:"https://github.com/aptana/studio3-rcp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aptana/studio3-rcp"),a("OutboundLink")],1),t._v("\nWrapper plugins for the Aptana Studio standalone version, as well as projects to create platform-specific builders and installers.")]),t._v(" "),a("p",[a("strong",[t._v("Ruby/Rails:")]),t._v(" "),a("a",{attrs:{href:"https://github.com/aptana/studio3-ruby",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aptana/studio3-ruby"),a("OutboundLink")],1),t._v("\nRuby and Rails support for Aptana Studio 3. Previously referred to as RadRails.")]),t._v(" "),a("p",[a("strong",[t._v("PHP:")]),t._v(" "),a("a",{attrs:{href:"https://github.com/aptana/studio3-php",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aptana/studio3-php"),a("OutboundLink")],1),t._v("\nPHP support for Aptana Studio 3. Somewhat a fork of PDT (Eclipse PHP Development Tools)")]),t._v(" "),a("p",[a("strong",[t._v("Python:")]),t._v(" "),a("a",{attrs:{href:"https://github.com/aptana/Pydev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aptana/Pydev"),a("OutboundLink")],1),t._v("\nPython support for Aptana Studio 3.")]),t._v(" "),a("p",[a("strong",[t._v("Libraries:")]),t._v(" "),a("a",{attrs:{href:"https://github.com/aptana/libraries_com",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/aptana/libraries_com"),a("OutboundLink")],1),t._v("\nCore library support")]),t._v(" "),a("h3",{attrs:{id:"rubles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rubles"}},[t._v("#")]),t._v(" Rubles")]),t._v(" "),a("p",[t._v("There are also several other related repositories with the name *.ruble. These are the command bundles that are built into Aptana Studio at compile-time and packaged with the default installation.")]),t._v(" "),a("h2",{attrs:{id:"building-aptana-studio-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-aptana-studio-2"}},[t._v("#")]),t._v(" Building Aptana Studio")]),t._v(" "),a("h3",{attrs:{id:"main-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-source-code"}},[t._v("#")]),t._v(" Main Source Code")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download the Eclipse RCP development version: "),a("a",{attrs:{href:"http://www.eclipse.org/downloads/packages/eclipse-rcp-and-rap-developers/indigosr1",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.eclipse.org/downloads/packages/eclipse-rcp-and-rap-developers/indigosr1"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v('Check out each of the repos onto your local machine. You may either use the built-in Git support or check out using Git on the command line and "Import Existing Projects".')])]),t._v(" "),a("li",[a("p",[t._v("Once all projects are imported, you will need to close several depending on the version of Eclipse you have installed. If you are using Eclipse 3.7 (recommended), close the following:")]),t._v(" "),a("ul",[a("li",[t._v("com.aptana.portal.ui.eclipse35")])])])]),t._v(" "),a("h3",{attrs:{id:"python-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#python-errors"}},[t._v("#")]),t._v(" Python Errors")]),t._v(" "),a("ol",[a("li",[t._v("There will be lots of build errors. Find org.python.pydev.core/tests/org.python.pydev.core/TestDependent.OS.template. You should create a copy of that file in that same dir named TestDependent.java and set the needed things according to your installation. If that still fails to resolve the errors, you can close the com.python and org.python project for now.")])]),t._v(" "),a("h3",{attrs:{id:"ftp-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ftp-errors"}},[t._v("#")]),t._v(" FTP Errors")]),t._v(" "),a("p",[t._v("If you do not wish to close the FTP projects, you can get a trial license for FTP:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Download from here: "),a("a",{attrs:{href:"http://enterprisedt.com/products/edtftpjssl/trial_licence.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://enterprisedt.com/products/edtftpjssl/trial_licence.html"),a("OutboundLink")],1)])]),t._v(" "),a("li",[a("p",[t._v("Unzip the package and drop /lib/*.jar into com.aptana.ide.libraries.subscription.")])])]),t._v(" "),a("h3",{attrs:{id:"launching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#launching"}},[t._v("#")]),t._v(" Launching")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("Inside Studio RCP, there is an aptana.product file.")])]),t._v(" "),a("li",[a("p",[t._v('Click on the link that says "Launch an Eclipse Application".')])])]),t._v(" "),a("h2",{attrs:{id:"building-installers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-installers"}},[t._v("#")]),t._v(" Building Installers")]),t._v(" "),a("p",[t._v("Aptana Studio uses NSIS to build the Windows installer. Below are instructions to build that installer manually.")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("View com.aptana.win.installer inside Eclipse.")])]),t._v(" "),a("li",[a("p",[t._v('Create a "staging" folder at the root of that project.')])]),t._v(" "),a("li",[a("p",[t._v("Copy the Windows .zip version /staging. You could get a .zip file either by building the studio3-rcp project or by downloading a version from preview.appcelerator.com. You may have to rename it to fix what it expects (you'll be informed of this the first time you attempt to build)")])]),t._v(" "),a("li",[a("p",[t._v('Right-click on the build.xml file and "Run As > Ant Build...". You want to run the task "unpack-archives" at least once. After that, you can just run "main" over and over again.')])])])])}),[],!1,null,null,null);e.default=o.exports}}]);