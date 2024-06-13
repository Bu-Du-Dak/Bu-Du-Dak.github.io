(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[510],{510:function(n,e,t){"use strict";t.r(e),t.d(e,{Wrapper:function(){return g}});var o,r=t(1383),i=t(5468),a=t(5660),s=t.n(a),c=(t(2427),t(4990),t(905),t(221),t(7074),t(9582)),d=t.n(c),p=(t(2503),t(366),t(6829)),l=t(1571),u=t(7294),m=t(5893),g=p.Z.div(o||(o=(0,r.Z)(["\n  .toastui-editor-defaultUI {\n    border: none !important;\n    border-radius: 0 !important;\n  }\n  .toastui-editor-contents * {\n    font-size: 1.4rem;\n    line-height: 3rem;\n  }\n  .toastui-editor-contents p {\n    line-height: 2.7rem;\n    margin: 1.4rem 0 !important;\n    width: 100%;\n    word-break: keep-all;\n    font-size: 1rem;\n  }\n  .toastui-editor-contents br {\n    margin: 1.4rem 0 !important;\n  }\n  .toastui-editor-contents span {\n    margin: 0 !important;\n  }\n  .toastui-editor-contents strong {\n    margin: 0 !important;\n    font-family: 'SUIT700' !important;\n  }\n  .ProseMirror div {\n    font-size: 1.4rem;\n  }\n  .ProseMirror * {\n    font-size: 1.4rem;\n  }\n  .toastui-editor-contents img {\n    display: block;\n    width: 750px;\n    margin: 3rem auto;\n    height: auto;\n  }\n  .toastui-editor-contents p img {\n    display: block;\n    margin: 3rem auto;\n    height: auto;\n  }\n  .toastui-editor-contents h1 {\n    font-size: 2.5rem;\n    font-family: 'SUIT700';\n    color: inherit;\n    margin-top: 3rem;\n  }\n  .toastui-editor-contents h2 {\n    font-size: 2rem;\n    font-family: 'SUIT700';\n    color: inherit;\n    margin-top: 3rem;\n  }\n  .toastui-editor-contents h3 {\n    font-size: 1.7rem;\n    font-family: 'SUIT700';\n    color: inherit;\n    margin-top: 3rem;\n  }\n  .toastui-editor-contents h4 {\n    font-size: 1.4rem;\n    font-family: 'SUIT600';\n    color: inherit;\n    margin-top: 2rem;\n  }\n  .toastui-editor-contents h5 {\n    font-size: 1.2rem;\n    font-family: 'SUIT600';\n    color: inherit;\n    margin-top: 2rem;\n  }\n  .toastui-editor-contents h6 {\n    font-size: 1.1rem;\n    font-family: 'SUIT600';\n    color: inherit;\n    margin-top: 2rem;\n  }\n  .toastui-editor-contents hr {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n  .toastui-editor-contents table {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    margin: 12px 0 14px;\n    color: #222;\n    width: auto;\n    border-collapse: collapse;\n    box-sizing: border-box;\n  }\n  .toastui-editor-contents thead {\n    border: 1px solid rgba(0, 0, 0, 0.1);\n    margin: 12px 0 14px;\n    color: #222;\n    width: auto;\n    border-collapse: collapse;\n    box-sizing: border-box;\n  }\n\n  .toastui-editor-contents code {\n    color: #c1798b;\n    /* background-color: #f9f2f4; */\n    padding: 2px 3px;\n    letter-spacing: -0.3px;\n    border-radius: 2px;\n    font-size: 1.2rem;\n    line-height: 1rem;\n    .token.operator {\n      background-color: transparent !important;\n    }\n  }\n  .toastui-editor-contents pre {\n    border: .1px solid var(--selected-text-color);\n    margin: 2px 0 8px;\n    padding: 18px;\n    /* background-color: #f4f7f8; */\n  }\n  .toastui-editor-contents pre code {\n    /* background-color: #f4f7f8; */\n    font-family: 'SUIT400';\n    /* color: #24292e; */\n  }\n  blockquote {\n    margin: 2rem 0px;\n    border-left: 4px solid rgba(100, 0, 255, 0.5) !important;\n    border-top-right-radius: 4px;\n    border-bottom-right-radius: 4px;\n    background: #f8f9fa;\n    padding: 1rem 1rem 1rem 2rem;\n    color: black !important;\n  }\n\n  .toastui-editor-md-code-block-line-background * {\n    font-size: 1.2rem;\n  }\n\n  .token {\n    font-size: 1.2rem;\n  }\n"])));e.default=function(n){var e=n.contents,t=(0,l.F)().theme,o=(0,u.useState)(e||""),r=o[0],a=o[1];return(0,u.useEffect)((function(){a(e||"")}),[e]),(0,m.jsx)(g,{style:{width:"100%",height:"500px"},children:(0,m.jsx)(i.A,{theme:t,initialValue:r,plugins:[[d(),{highlighter:s()}]]})})}},905:function(){},2503:function(){!function(n){var e=/\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/,t=/(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source,o={pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}},punctuation:/\./}};n.languages.java=n.languages.extend("clike",{string:{pattern:/(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,lookbehind:!0,greedy:!0},"class-name":[o,{pattern:RegExp(/(^|[^\w.])/.source+t+/[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),lookbehind:!0,inside:o.inside},{pattern:RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source+t+/[A-Z]\w*\b/.source),lookbehind:!0,inside:o.inside}],keyword:e,function:[n.languages.clike.function,{pattern:/(::\s*)[a-z_]\w*/,lookbehind:!0}],number:/\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,operator:{pattern:/(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,lookbehind:!0},constant:/\b[A-Z][A-Z_\d]+\b/}),n.languages.insertBefore("java","string",{"triple-quoted-string":{pattern:/"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,greedy:!0,alias:"string"},char:{pattern:/'(?:\\.|[^'\\\r\n]){1,6}'/,greedy:!0}}),n.languages.insertBefore("java","class-name",{annotation:{pattern:/(^|[^.])@\w+(?:\s*\.\s*\w+)*/,lookbehind:!0,alias:"punctuation"},generics:{pattern:/<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,inside:{"class-name":o,keyword:e,punctuation:/[<>(),.:]/,operator:/[?&|]/}},import:[{pattern:RegExp(/(\bimport\s+)/.source+t+/(?:[A-Z]\w*|\*)(?=\s*;)/.source),lookbehind:!0,inside:{namespace:o.inside.namespace,punctuation:/\./,operator:/\*/,"class-name":/\w+/}},{pattern:RegExp(/(\bimport\s+static\s+)/.source+t+/(?:\w+|\*)(?=\s*;)/.source),lookbehind:!0,alias:"static",inside:{namespace:o.inside.namespace,static:/\b\w+$/,punctuation:/\./,operator:/\*/,"class-name":/\w+/}}],namespace:{pattern:RegExp(/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/.source.replace(/<keyword>/g,(function(){return e.source}))),lookbehind:!0,inside:{punctuation:/\./}}})}(Prism)}}]);