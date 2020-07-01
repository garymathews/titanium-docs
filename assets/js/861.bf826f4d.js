(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{2097:function(e,t,a){"use strict";a.r(t);var n=a(21),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"debugging-rubles"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debugging-rubles"}},[e._v("#")]),e._v(" Debugging Rubles")]),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v("Debugging is a bit of a misnomer, as currently, you can only really set trace output. Proper debugging is currently on the TODO list, but not yet available.")]),e._v(" "),a("h2",{attrs:{id:"writing-to-the-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-to-the-console"}},[e._v("#")]),e._v(" Writing to the console")]),e._v(" "),a("p",[e._v("You can write directly to the Scripting Console by using "),a("code",[e._v("CONSOLE.puts")]),e._v(", i.e.:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CONSOLE.puts "Hello!"\n')])])]),a("h2",{attrs:{id:"set-the-logging-level"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-the-logging-level"}},[e._v("#")]),e._v(" Set the logging level")]),e._v(" "),a("p",[e._v("You can set the logging level in a script:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Ruble::Logger.log_level = :trace\n")])])]),a("p",[e._v("Logging levels are:")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("none")])]),e._v(" "),a("li",[a("p",[e._v("trace")])]),e._v(" "),a("li",[a("p",[e._v("info")])]),e._v(" "),a("li",[a("p",[e._v("warning")])]),e._v(" "),a("li",[a("p",[e._v("error")])])]),e._v(" "),a("p",[e._v("You might add this to the top of your file. With broader logging levels containing all the content from more restrictive ones (in other words, trace contains info, warning, and error as well).")]),e._v(" "),a("p",[e._v('The output will be put to the Scripting Console and is theme-able as per the regular theme guidelines for "console" scopes.')]),e._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("⚠️ Warning")]),e._v(" "),a("p",[e._v("The logging level will persist at the newly set level until it is explicitly changed again.")])]),e._v(" "),a("h2",{attrs:{id:"logging-to-the-console"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logging-to-the-console"}},[e._v("#")]),e._v(" Logging to the console")]),e._v(" "),a("p",[e._v("An example of turning on logging and writing out the trace, info, warning, and error messages.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('require \'ruble\'\nrequire \'ruble/ui\'\n\nRuble::Logger.log_level = :trace\n\ncommand \'Tidy\' do |cmd|\n  cmd.output = :replace_document\n  cmd.input = :document\n  cmd.invoke do |context|\n    Ruble::Logger.trace "trace"\n    Ruble::Logger.log_info "Info"\n    Ruble::Logger.log_warning "Warning"\n    Ruble::Logger.log_error "Error"\n  end\nend\n')])])]),a("h2",{attrs:{id:"writing-out-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-out-properties"}},[e._v("#")]),e._v(" Writing out properties")]),e._v(" "),a("p",[e._v("It's sometimes helpful to write out the properties of the current context object. An example of doing so:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command "Print Context Properties" do |cmd|\n  cmd.invoke do |context|\n    context.dynamic_properties.each { |k| CONSOLE.puts "#{k}\\n" }\n  end\nend\n')])])]),a("p",[e._v("prints:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("project\neditor\ninput_type\nbrowser\ncommand\nbundle\nTM_SELECTED_FILES\n1316024714117_env\ntest_property\ninvoked_via\n")])])]),a("h2",{attrs:{id:"writing-out-available-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-out-available-methods"}},[e._v("#")]),e._v(" Writing out available methods")]),e._v(" "),a("p",[e._v("It's also sometimes useful to write out the methods available on a particular object, i.e.:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('command "Print Document Methods" do |cmd|\n  cmd.invoke do |context|\n    CONSOLE.puts context.editor.document.public_methods(true).sort\n  end\nend\n')])])]),a("h2",{attrs:{id:"disabling-caching"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disabling-caching"}},[e._v("#")]),e._v(" Disabling caching")]),e._v(" "),a("p",[e._v("To speed up bundle loading, we cache the overall structure of the bundle. This can cause problems on some versions of Windows, where a user might not see any changes until they restart Studio. To disable caching, please follow the instructions "),a("RouterLink",{attrs:{to:"/guide/Axway_Appcelerator_Studio/Axway_Appcelerator_Studio_Guide/Customizing_Studio/Rubles/Disable_Ruble_Caching/"}},[e._v("here")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=o.exports}}]);