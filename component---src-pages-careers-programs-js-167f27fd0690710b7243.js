(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{QbOQ:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),r=a.n(t),i=a("vOnD"),l=a("Bl7J"),m=a("vrFN"),o=a("mvsK"),c=a("iJo/"),s=a("JHbr"),u=a("Z2HG"),p=a("DZth"),g=a("WL7g");n.default=function(){return r.a.createElement(i.a,{theme:g.a},r.a.createElement(l.a,null,r.a.createElement(p.a,null),r.a.createElement(m.a,{title:"Open Source Internship Programs",description:"The Service Mesh Community at Layer5 - Learn, Share, Engage. Join the largest collection of service mesh projects and their maintainers in the world."}),r.a.createElement(o.a,null),r.a.createElement(u.a,null),r.a.createElement(s.a,{category:["internships"]}),r.a.createElement(c.a,null)))}},YP3a:function(e,n,a){"use strict";var t=a("q1tI"),r=a.n(t),i=a("Wbzz"),l=a("m7xX"),m=a.n(l),o=a("vOnD").d.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),c=a("tBDR"),s=function(e,n){return r.a.createElement(r.a.Fragment,null,n?r.a.createElement(i.Link,{to:"/community/members/"+m()(e.name)},r.a.createElement("span",null,e.name)):r.a.createElement("span",null,e.name))};n.a=function(e){var n=e.category,a=e.title,t=e.subtitle,l=e.author,u=e.thumbnail,p=!1;l&&(p=Object(i.useStaticQuery)("1485533831").allMdx.nodes.some((function(e){return e.frontmatter.name==l.name})));return r.a.createElement(o,null,r.a.createElement("div",{className:"page-header"},u&&r.a.createElement("div",{className:"feature-image"},r.a.createElement(c.a,Object.assign({},u,{imgStyle:{objectFit:"contain"},alt:a}))),r.a.createElement("h1",null,a),t&&r.a.createElement("h3",null,t),n&&r.a.createElement("div",{className:"breadcrumbs"},r.a.createElement("span",null,r.a.createElement("h5",null,"Category:"),r.a.createElement("p",{key:n},r.a.createElement(i.Link,{to:"/blog/category/"+m()(n)},r.a.createElement("span",null,n)))),l&&r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,r.a.createElement("h5",null,"By:"),r.a.createElement("p",null,s(l,p))))),!n&&l&&r.a.createElement("div",{className:"breadcrumbs post"},r.a.createElement("h5",null,"By:"),r.a.createElement("span",null,s(l,p)))))}},Z2HG:function(e,n,a){"use strict";var t=a("q1tI"),r=a.n(t),i=a("Wbzz"),l=a("xFQ1"),m=a("YP3a"),o=a("tBDR"),c=a("vOnD").d.div.withConfig({displayName:"ProgramGridstyle__ProgramsPageWrapper",componentId:"sc-1ikyabo-0"})(["\n    \n    margin-top: -2rem;\n\n    .programs-page-wrapper{\n        margin: 4rem 0;\n\n        h5{\n            font-weight: 600;\n            text-align: center;\n        }\n    }\n    .sub-header_wrapper{\n        margin: 1rem 0;\n\n        h5{\n            font-size: 1.1rem; \n            font-weight: 600;\n            color: black;\n        }\n    }\n\n    .icon{\n        height: 12rem;\n        width: 12rem;\n        margin: 0 auto 1.5rem auto;\n        position: relative;\n        \n        img{\n            display: block;\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            margin: auto;\n        }\n    }\n    .sub-section_icon{\n        height: 8rem;\n        width: 8rem;\n    }\n\n    .program{\n        height: 18rem;\n        width: 20rem;\n        padding: 5px;\n        margin: auto;\n        background: rgba(247,247,247,1);\n        justify-content: center;\n        border-radius: 1rem;\n        transition: all 0.2s;\n        transition-timing-function: ease-in-out;\n        \n        &:hover{\n            box-shadow: 0px 4px 20px 2px ",";\n        }\n    }\n    .sub-section_program{\n        width: 18rem;\n        height: 13rem;\n    }\n\n    .programs-col{\n        flex: 0 0 33%;\n        max-width: 100%;\n        margin: 1rem 0;\n    }\n    @media only screen and (max-width:1200px){\n        .programs-col{\n            flex: 0 0 50%;\n        }\n    }\n    @media only screen and (max-width:700px){\n        .programs-col{\n            flex: 0 0 100%;\n        }\n    }\n"],(function(e){return e.theme.shadowLightColor}));n.a=function(e){var n=e.hide_path,a=e.sub_section,t=Object(i.useStaticQuery)("2165690778"),s=n?"":"Programs";return r.a.createElement(c,null,r.a.createElement(m.a,{title:"Open Source Internship Programs",subtitle:"Build Your Career at Layer5",path:s}),r.a.createElement("div",{className:a?"sub-header_wrapper":"programs-page-wrapper"},r.a.createElement(l.b,null,r.a.createElement("div",{className:"program-grid-wrapper"},r.a.createElement(l.c,null,t.allMdx.nodes.map((function(e){var n=e.id,t=e.frontmatter,m=e.fields;return r.a.createElement(l.a,{key:n,className:"programs-col"},r.a.createElement(i.Link,{to:m.slug},r.a.createElement("div",{className:"program "+(a?"sub-section_program":"")},r.a.createElement("div",{className:"icon "+(a?"sub-section_icon":"")},r.a.createElement(o.a,Object.assign({},t.thumbnail,{imgStyle:{objectFit:"contain"},alt:t.title}))),r.a.createElement("h5",null,t.title))))})))),r.a.createElement("p",null,"Layer5 is driven by its people, who are the stewards of our culture and principles. Join us on the journey to enabling the world's most innovative companies make the transition to cloud navtive and multi-cloud through engineering-empowered automation."))))}},m7xX:function(e,n){e.exports=function(e){return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},tBDR:function(e,n,a){"use strict";var t=a("zLVn"),r=a("q1tI"),i=a.n(r),l=a("9eSz"),m=a.n(l);n.a=function(e){var n=e.childImageSharp,a=e.extension,r=e.publicURL,l=e.alt,o=Object(t.a)(e,["childImageSharp","extension","publicURL","alt"]);return n||"svg"!==a?i.a.createElement(m.a,Object.assign({fluid:n.fluid},o,{alt:l})):i.a.createElement("div",{className:"gatsby-image-wrapper"},i.a.createElement("img",{src:r,alt:l}))}}}]);
//# sourceMappingURL=component---src-pages-careers-programs-js-167f27fd0690710b7243.js.map