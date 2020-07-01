(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{1849:function(t,e,r){"use strict";r.r(e);var i=r(21),o=Object(i.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[i("h1",{attrs:{id:"git-and-github"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-and-github"}},[t._v("#")]),t._v(" Git and Github")]),t._v(" "),i("h2",{attrs:{id:"overview"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),i("p",[t._v("At Appcelerator we use "),i("a",{attrs:{href:"http://en.wikipedia.org/wiki/Git_(software)",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git"),i("OutboundLink")],1),t._v(" as our version control system. In addition, many of our open source projects, including the core SDKs, are hosted on "),i("a",{attrs:{href:"http://github.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github"),i("OutboundLink")],1),t._v(". For this reason, if you plan on contributing to Titanium, it's critical that you understand at least the basics of how Git and Github work.")]),t._v(" "),i("p",[t._v("The following sections give some references and tips for getting started with Git & Github. With this knowledge you'll better understand how Appcelerator manages out many open source projects. Also, you'll have the opportunity to start integrating this powerful version control system into your own workflow.")]),t._v(" "),i("h2",{attrs:{id:"learning-git-and-github"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#learning-git-and-github"}},[t._v("#")]),t._v(" Learning Git and Github")]),t._v(" "),i("h3",{attrs:{id:"getting-started-with-git"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-git"}},[t._v("#")]),t._v(" Getting Started with Git")]),t._v(" "),i("p",[t._v("Git can be a little daunting if you've never used it before, but most people soon learn to love it. The following resources will help you to get started:")]),t._v(" "),i("ul",[i("li",[i("p",[i("a",{attrs:{href:"http://git-scm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Official Website"),i("OutboundLink")],1)])]),t._v(" "),i("li",[i("p",[t._v("Michael Marner's "),i("a",{attrs:{href:"http://www.youtube.com/user/MichaelMarner#p/u/9/HaSDIdNkCDQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Tutorial"),i("OutboundLink")],1),t._v(" (video)")])]),t._v(" "),i("li",[i("p",[t._v("Linus Torvalds' "),i("a",{attrs:{href:"http://www.youtube.com/watch?v=4XpnKHJAok8",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Tech Talk"),i("OutboundLink")],1),t._v(" (video)")])]),t._v(" "),i("li",[i("p",[t._v("The "),i("a",{attrs:{href:"http://progit.org/book/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pro Git Book"),i("OutboundLink")],1)])]),t._v(" "),i("li",[i("p",[t._v("the "),i("code",[t._v("git help")]),t._v(" command and the "),i("a",{attrs:{href:"http://www.kernel.org/pub/software/scm/git/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git online manual"),i("OutboundLink")],1)])]),t._v(" "),i("li",[i("p",[t._v("Github "),i("a",{attrs:{href:"http://gitref.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git Reference"),i("OutboundLink")],1),t._v(" (manual)")])]),t._v(" "),i("li",[i("p",[t._v("the Freenode IRC server's #git channel")])]),t._v(" "),i("li",[i("p",[t._v("and "),i("a",{attrs:{href:"http://www.google.com/search?hl=en&q=git+version+control",target:"_blank",rel:"noopener noreferrer"}},[t._v("many others"),i("OutboundLink")],1)])])]),t._v(" "),i("h3",{attrs:{id:"git-prerequisites"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#git-prerequisites"}},[t._v("#")]),t._v(" Git Prerequisites")]),t._v(" "),i("p",[t._v("Before you start, you will need to work through these points:")]),t._v(" "),i("ul",[i("li",[t._v('configure SSH, required for pushing branches to Github. See "Generating SSH Keys" for '),i("a",{attrs:{href:"http://help.github.com/mac-key-setup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mac OS X"),i("OutboundLink")],1),t._v(" and "),i("a",{attrs:{href:"http://help.github.com/msysgit-key-setup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows"),i("OutboundLink")],1),t._v(".")])]),t._v(" "),i("h3",{attrs:{id:"some-quick-git-tips"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#some-quick-git-tips"}},[t._v("#")]),t._v(" Some Quick Git Tips")]),t._v(" "),i("p",[t._v("The following can make Git a little easier to use:")]),t._v(" "),i("ul",[i("li",[i("p",[t._v("use "),i("a",{attrs:{href:"http://gitk.sourceforge.net/development.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("gitk"),i("OutboundLink")],1),t._v(" to give a visual representation of your repository")])]),t._v(" "),i("li",[i("p",[t._v("by default, if a file's permissions change, Git will perceive it just the same as if its contents were changed, Thus, to ignore permissions changes, run:")])])]),t._v(" "),i("div",{staticClass:"language- extra-class"},[i("pre",{pre:!0,attrs:{class:"language-text"}},[i("code",[t._v("git config core.filemode false\n")])])]),i("h3",{attrs:{id:"committing-code-with-git-in-7-easy-stages"}},[i("a",{staticClass:"header-anchor",attrs:{href:"#committing-code-with-git-in-7-easy-stages"}},[t._v("#")]),t._v(" Committing Code with Git in 7 Easy Stages")]),t._v(" "),i("p",[t._v("The following diagram describes the full development cycle used to contribute code or documentation to an Appcelerator repository, using Git and Github.")]),t._v(" "),i("p",[i("img",{attrs:{src:r(637),alt:"contribute-workflow-v3"}})]),t._v(" "),i("p",[t._v("Download a hi-res version "),i("a",{attrs:{href:"#undefined"}},[t._v("here")]),t._v(".")])])}),[],!1,null,null,null);e.default=o.exports},637:function(t,e,r){t.exports=r.p+"assets/img/contribute-workflow-v3.d5add3a3.png"}}]);