(this.webpackJsonpgitconvex=this.webpackJsonpgitconvex||[]).push([[90],{165:function(n,e){!function(n){n.languages.django={comment:/^{#[\s\S]*?#}$/,tag:{pattern:/(^{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^{[{%][+-]?|[+-]?[}%]}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+*/%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Tt]rue|[Ff]alse|[Nn]one/,variable:/\b\w+?\b/,punctuation:/[{}[\](),.:;]/};var e=/{{[\s\S]*?}}|{%[\s\S]*?%}|{#[\s\S]*?#}/g,o=n.languages["markup-templating"];n.hooks.add("before-tokenize",(function(n){o.buildPlaceholders(n,"django",e)})),n.hooks.add("after-tokenize",(function(n){o.tokenizePlaceholders(n,"django")})),n.languages.jinja2=n.languages.django,n.hooks.add("before-tokenize",(function(n){o.buildPlaceholders(n,"jinja2",e)})),n.hooks.add("after-tokenize",(function(n){o.tokenizePlaceholders(n,"jinja2")}))}(Prism)}}]);
//# sourceMappingURL=90.2ec9a3c3.chunk.js.map