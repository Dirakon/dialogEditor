(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{195:function(t,e,n){},196:function(t,e,n){},197:function(t,e,n){},198:function(t,e,n){"use strict";n.r(e),function(t){var e=n(20),o=n(21),i=function(){function t(n){Object(e.a)(this,t),this.EXIT="exit",this.DUNFORGET="save",this.REMEMBER="load",this.ADDTAG="addTag",this.VAR="var",this.ELSE="else",this.HASTAG="hasTag",this.UP="up",this.DELETETAG="deleteTag"}return Object(o.a)(t,[{key:"compile",value:function(t){document.querySelector(".actDialog");this.code=t.split("\x01"),this.curLine=0,this.tags={},this.vars={},this.saves=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];for(var e=!1;this.curLine<this.code.length;++this.curLine){for(var n=0;n<this.code[this.curLine].length;++n)if("("===this.code[this.curLine][n]){e=!0;break}if(e)break}this.process(this.curLine)}},{key:"process",value:function(t){this.text="",this.options=[],t++;for(var e=1,n=1,o=-1;0!==e;){o>-1&&o--;for(var i=0;i<this.code[t].length;){if("("===this.code[t][i])e++;else if(")"===this.code[t][i])1!==n&&!1===(e<1||e>n)?n--:-2===o&&!0===(e<1||e>n)&&(o=2),e--;else{if(e<1||e>n){++i;continue}if("\\"===this.code[t][i]){for(var a="",s=++i;s<this.code[t].length&&"/"!==this.code[t][s];++s)a+=this.code[t][s];this.options.push([a,t+1]);break}if(":"===this.code[t][i]){i++;var r=this.readFromPointToDot(this.code[t],i);if(i=r[1],(r=r[0])===this.EXIT)return this.options=[],this.text="--EXITED THE DIALOG--",i;if('"'===r[0]){for(var l="",c=1;c<r.length-1;++c)l+=r[c];this.text=l}else{if(r===this.REMEMBER){var h=this.readFromPointToDot(this.code[t],i)[0];return void this.process(this.saves[parseInt(h)])}if(r===this.DUNFORGET){var d=this.readFromPointToDot(this.code[t],i);i=d[1],d=parseInt(d[0]);var u=this.readFromPointToDot(this.code[t],i);i=u[1],u=parseInt(u[0]),this.saves[u]=d+1+t}else if(r===this.VAR){var g=this.readFromPointToDot(this.code[t],i);i=g[1],g=g[0];for(var y="",m=1;m<g.length-1;++m)y+=g[m];i=(g=this.readFromPointToDot(this.code[t],i))[1],g=g[0];var v=this.readFromPointToDot(this.code[t],i);if(i=v[1],v=parseInt(v[0]),"="===g)this.vars[y]=v;else if("+="===g)this.vars[y]+=v;else{var f=!1;"=="===g?f=this.vars[y]===v:">="===g?f=this.vars[y]>=v:"!="===g?f=this.vars[y]!==v:"<="===g?f=this.vars[y]<=v:("<"===g||">"===g)&&(f=this.vars[y]<v),f?n++:o=-2}}else if(r===this.ADDTAG){var b=this.readFromPointToDot(this.code[t],i);i=b[1],b=b[0],this.tags[b]=!0}else if(r===this.DELETETAG){var p=this.readFromPointToDot(this.code[t],i);i=p[1],p=p[0],this.tags[p]=!1}else if(r===this.HASTAG){var T=this.readFromPointToDot(this.code[t],i);i=T[1],(T=T[0])in this.tags&&!1!==this.tags[T]?n++:o=-2}else{if(r===this.UP){var j=this.readFromPointToDot(this.code[t],i);i=j[1],j=parseInt(j[0]);var k=t-1;for(e=-1;e!==j;){for(var E=0;E<this.code[k].length;++E)if(" "!==this.code[k][E]&&"\t"!==this.code[k][E]&&"\n"!==this.code[k][E])if("("===this.code[k][E])e++;else{if(")"!==this.code[k][E])break;e--}k--}return this.process(k+1)}r===this.ELSE&&o>-1&&(o=-1,n++)}}break}}++i}++t}}},{key:"getText",value:function(){return this.text}},{key:"getOptions",value:function(){return this.options}},{key:"chooseOption",value:function(t){this.curLine=t[1],this.process(this.curLine)}},{key:"readFromPointToDot",value:function(t,e){for(var n="",o=!1;e<t.length;){if('"'===t[e]&&(o=!o),o){if("\\"===t[e]&&t.length-1!==e&&"n"===t[e+1]){e+=2,n+="<br>";continue}}else if("."===t[e])return[n,e+1];n+=t[e],++e}return[n,e+1]}}]),t}();t.exports=i}.call(this,n(199)(t))},201:function(t,e,n){"use strict";n.r(e);var o,i=n(3),a=n(20),s=n(21),r=n(28),l=n(27),c=n(14),h=n.n(c),d=n(88),u=n.n(d),g=n(4),y=(n(194),n(195),n(196),n(22)),m=(n(197),n(200).stateFromHTML),v=function(t){Object(r.a)(c,t);var e=Object(l.a)(c);function c(t){var n;return Object(a.a)(this,c),(n=e.call(this,t)).state={editorState:g.EditorState.createWithText(O)},n.focus=function(){return n.refs.editor.focus()},n.onChange=function(t){return n.setState({editorState:t})},n.handleKeyCommand=n._handleKeyCommand.bind(Object(y.a)(n)),n.mapKeyToEditorCommand=n._mapKeyToEditorCommand.bind(Object(y.a)(n)),n.toggleBlockType=n._toggleBlockType.bind(Object(y.a)(n)),n.toggleInlineStyle=n._toggleInlineStyle.bind(Object(y.a)(n)),n}return Object(s.a)(c,[{key:"getInitialState",value:function(){var t=m("<p>Hello</p>");return{editorState:g.EditorState.createWithContent(t)}}},{key:"componentDidMount",value:function(){var t=document.querySelector(".compiler");o=this;var e=document.querySelector(".RichEditor-root"),i=new(n(198));document.addEventListener("drag",(function(t){0!==t.clientX&&(e.style.width=(t.clientX-32).toString()+"px")}),!1);var a=[],s=function t(){for(var e=0;e<a.length;++e)a[e].remove();a=[];for(var n=i.getOptions(),o=document.getElementsByClassName("dialogSide")[0],s=function(e){var s=document.createElement("button");s.innerHTML=n[e][0];var r=n[e];s.addEventListener("click",(function(){i.chooseOption(r),t()})),a.push(s),o.appendChild(s)},r=0;r<n.length;++r)s(r);document.querySelector(".actualDialog").innerHTML=i.getText()};t.addEventListener("click",(function(){i.compile(o.state.editorState.getCurrentContent().getPlainText("\x01")),s()}))}},{key:"_handleKeyCommand",value:function(t,e){var n=g.RichUtils.handleKeyCommand(e,t);return!!n&&(this.onChange(n),!0)}},{key:"_mapKeyToEditorCommand",value:function(t){if(9!==t.keyCode)return Object(g.getDefaultKeyBinding)(t);var e=g.RichUtils.onTab(t,this.state.editorState,4);e!==this.state.editorState&&this.onChange(e)}},{key:"_toggleBlockType",value:function(t){this.onChange(g.RichUtils.toggleBlockType(this.state.editorState,t))}},{key:"_toggleInlineStyle",value:function(t){this.onChange(g.RichUtils.toggleInlineStyle(this.state.editorState,t))}},{key:"render",value:function(){var t=this.state.editorState,e="RichEditor-editor",n=t.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(e+=" RichEditor-hidePlaceholder"),Object(i.jsxs)("div",{className:"RichEditor-root",children:[Object(i.jsx)(j,{editorState:t,onToggle:this.toggleBlockType}),Object(i.jsx)(E,{editorState:t,onToggle:this.toggleInlineStyle}),Object(i.jsx)("div",{className:e,onClick:this.focus,children:Object(i.jsx)(g.Editor,{blockStyleFn:b,customStyleMap:f,editorState:t,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,placeholder:"Tell a story...",ref:"editor",spellCheck:!0})})]})}}]),c}(h.a.Component),f={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function b(t){switch(t.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var p=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(a.a)(this,n),(t=e.call(this)).onToggle=function(e){e.preventDefault(),t.props.onToggle(t.props.style)},t}return Object(s.a)(n,[{key:"render",value:function(){var t="RichEditor-styleButton";return this.props.active&&(t+=" RichEditor-activeButton"),Object(i.jsx)("span",{className:t,onMouseDown:this.onToggle,children:this.props.label})}}]),n}(h.a.Component),T=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"},{label:"Code Block",style:"code-block"}],j=function(t){var e=t.editorState,n=e.getSelection(),o=e.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return Object(i.jsx)("div",{className:"RichEditor-controls",children:T.map((function(e){return Object(i.jsx)(p,{active:e.style===o,label:e.label,onToggle:t.onToggle,style:e.style},e.label)}))})},k=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],E=function(t){var e=t.editorState.getCurrentInlineStyle();return Object(i.jsx)("div",{className:"RichEditor-controls",children:k.map((function(n){return Object(i.jsx)(p,{active:e.has(n.style),label:n.label,onToggle:t.onToggle,style:n.style},n.label)}))})},O='\n\t//What you see now is an example dialog!\n\n(\n\n\t:"Good day, sir actor!"\n\t\\"Where am I?"/\n\t(\n\t\t:"I would say that you are in the theatre. You won\'t hear more from me."\n\t\t\\"..."/\n\t\t(\n\t\t\t:load.0\n\t\t)\n\t)\n\t\\"Where am I?"/\n\t(\n\t\t:"I already said that you, mister actor, are an actor. Why would you want to know more?"\n\t\t\\"..."/\n\t\t(\n\t\t\t:load.0\n\t\t)\n\t)\n\t\\"Who are you?"/\n\t(\n\t\t:"Wow, that\'s an interesting question... I\'m the owner of this theatre. My name will be a mystery for now."\n\t\t\\"..."/\n\t\t(\n\t\t\t:load.0\n\t\t)\n\t)\n\t\\"Where is the exit here?"/\n\t(\n\t\t:"There, first turn left."\n\t\t\\"Thanks, now I will go"/\n\t\t(\n\t\t\t:exit\n\t\t)\n\t\t\\"Alright, I\'ll remember that. You can continue now"/\n\t\t(\n\t\t\t:load.0\n\t\t)\n\t)\n\t:save.1.0\n\t\\"..."/\n\t(\n\t\t:"Who do you want to play? I see real talent in you."\n\t\t:var."jobs".=.0\n\t\t:hasTag."nonAustro"\n\t\t(\n\t\t\t:var."jobs".+=.1\n\t\t)\n\t\t:else\n\t\t(\n\t\t\\"I wouldn\'t mind being an astronaut"/\n\t\t(\n\t\t\t:"I\'m sorry but that role is already taken."\n\t\t\t\\"..."/\n\t\t\t(\n\t\t\t\t:addTag."nonAustro"\n\t\t\t\t:up.3\n\t\t\t)\n\t\t)\n\t\t)\n\t\t\n\t\t:hasTag."nonDragon"\n\t\t(\n\t\t\t:var."jobs".+=.1\n\t\t)\n\t\t:else\n\t\t(\n\t\t\\"Fantasy dragon please!"/\n\t\t(\n\t\t\t:"I\'m sorry but that role is already taken."\n\t\t\t\\"..."/\n\t\t\t(\n\t\t\t\t:addTag."nonDragon"\n\t\t\t\t:up.3\n\t\t\t)\n\t\t)\n\t\t)\n\t\t:hasTag."nonDetective"\n\t\t(\n\t\t\t:var."jobs".+=.1\n\t\t)\n\t\t:else\n\t\t(\n\t\t\\"I would like to play detective!"/\n\t\t(\n\t\t\t:"I\'m sorry but that role is already taken."\n\t\t\t\\"..."/\n\t\t\t(\n\t\t\t\t:addTag."nonDetective"\n\t\t\t\t:up.3\n\t\t\t)\n\t\t)\n\t\t)\n\t\t:var."jobs".==.3\n\t\t(\n\t\t\t\\"WHO CAN I EVEN PLAY!?"/\n\t\t\t(\n\t\t\t\t:"Hmmm... Let me check..."\n\t\t\t\t\t\\"..."/\n\t\t\t\t\t(\n\t\t\t\t\t\t:"Yes, I\'m very sorry... Apparently, only one role is vacant..."\n\t\t\t\t\t\t\\"Which one???"/\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t:load.0\n\t\t\t\t\t\t)\n\t\t\t\t\t\t\\"Tell me!"/\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t:load.0\n\t\t\t\t\t\t)\n\t\t\t\t\t\t:save.1.0\n\t\t\t\t\t\t\\"Speak!!!"/\n\t\t\t\t\t\t(\n\t\t\t\t\t\t\t:"Yes... A simple man."\n\t\t\t\t\t\t\t\t\\"Huh?"/\n\t\t\t\t\t\t\t\t(\n\t\t\t//The game start here...\n\n:"You wake up in your bed and stare into the rotten ceiling."\n\\I want to sleep just a little bit more.../\n(\n\t:"Unfortunately, you still have to wake up."\n\t\\What a shame.../\n\t(\n\t\t:up.2\n\t)\n)\n\\"What time is it?"/\n(\n\t:" - you ask... You can\'t really hear an answer though."\n\t\\I will tell them.../\n\t(\n\t\t:up.2\n\t)\n)\n\\Time to rise from the bed.../\n(\n\t:exit\n)\n\t\t\t//The game ends here...\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t)\n\t\t\t)\n\t\t)\n\t)\n)',C=v;var S=function(){return Object(i.jsx)("div",{className:"App",style:{height:"100%"},children:Object(i.jsxs)("div",{style:{height:"100%"},children:[Object(i.jsxs)("div",{className:"flexer",children:[Object(i.jsx)(C,{}),Object(i.jsx)("div",{className:"DIVIDER",draggable:!0}),Object(i.jsx)("div",{className:"dialogSide",children:Object(i.jsx)("div",{className:"actualDialog",children:"Dialog will be visible here!"})})]}),Object(i.jsx)("button",{className:"compiler",children:" Compile!"})]})})},I=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,202)).then((function(e){var n=e.getCLS,o=e.getFID,i=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),o(t),i(t),a(t),s(t)}))};h.a.Component;u.a.render(Object(i.jsx)(h.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root")),I()}},[[201,1,2]]]);
//# sourceMappingURL=main.c78f123d.chunk.js.map