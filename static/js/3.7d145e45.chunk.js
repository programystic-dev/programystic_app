(this.webpackJsonpprogramystic_app=this.webpackJsonpprogramystic_app||[]).push([[3],{51:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=c(n(2)),r=c(n(55)),i=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)({}),p=l.Provider,m=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return o.default.createElement(m,null,(function(t){return o.default.createElement(e,a({components:n||t},r))}))}};var s=function(e){var t=e.components,n=e.children;return o.default.createElement(p,{value:t},n)};s.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=s},52:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(53);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(51);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},53:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(2),i=p(r),c=p(n(54)),l=n(51);function p(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var u={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return m(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,l=e.children,p=e.components,m=void 0===p?{}:p,s=e.Layout,f=e.layoutProps,g=m[n+"."+t]||m[t]||u[t]||t;return s?((0,c.default)(this,s),i.default.createElement(s,a({components:m},f),i.default.createElement(g,r,l))):i.default.createElement(g,r,l)}}]),t}(r.Component);t.default=(0,l.withMDXComponents)(f)},54:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=p&&p(Object);e.exports=function e(t,n,s){if("string"!==typeof n){if(m){var u=p(n);u&&u!==m&&e(t,u,s)}var f=i(n);c&&(f=f.concat(c(n)));for(var g=0;g<f.length;++g){var h=f[g];if(!a[h]&&!o[h]&&(!s||!s[h])){var d=l(n,h);try{r(t,h,d)}catch(v){}}}return t}return t}},55:function(e,t,n){"use strict";t.__esModule=!0;var a=r(n(2)),o=r(n(56));function r(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createContext||o.default,e.exports=t.default},56:function(e,t,n){"use strict";t.__esModule=!0;var a=n(2),o=(i(a),i(n(3))),r=i(n(57));i(n(58));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function p(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var m=1073741823;function s(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter((function(t){return t!==e}))},get:function(){return e},set:function(n,a){e=n,t.forEach((function(t){return t(e,a)}))}}}t.default=function(e,t){var n,i,u="__create-react-context-"+(0,r.default)()+"__",f=function(e){function n(){var t,a;c(this,n);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=a=l(this,e.call.apply(e,[this].concat(r))),a.emitter=s(a.props.value),l(a,t)}return p(n,e),n.prototype.getChildContext=function(){var e;return(e={})[u]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,a=e.value,o=void 0;((r=n)===(i=a)?0!==r||1/r===1/i:r!==r&&i!==i)?o=0:(o="function"===typeof t?t(n,a):m,0!==(o|=0)&&this.emitter.set(e.value,o))}var r,i},n.prototype.render=function(){return this.props.children},n}(a.Component);f.childContextTypes=((n={})[u]=o.default.object.isRequired,n);var g=function(t){function n(){var e,a;c(this,n);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=a=l(this,t.call.apply(t,[this].concat(r))),a.state={value:a.getValue()},a.onUpdate=function(e,t){0!==((0|a.observedBits)&t)&&a.setState({value:a.getValue()})},l(a,e)}return p(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?m:t},n.prototype.componentDidMount=function(){this.context[u]&&this.context[u].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?m:e},n.prototype.componentWillUnmount=function(){this.context[u]&&this.context[u].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[u]?this.context[u].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(a.Component);return g.contextTypes=((i={})[u]=o.default.object,i),{Provider:f,Consumer:g}},e.exports=t.default},57:function(e,t,n){"use strict";(function(t){var n="__global_unique_id__";e.exports=function(){return t[n]=(t[n]||0)+1}}).call(this,n(21))},58:function(e,t,n){"use strict";var a=n(59);e.exports=a},59:function(e,t,n){"use strict";function a(e){return function(){return e}}var o=function(){};o.thatReturns=a,o.thatReturnsFalse=a(!1),o.thatReturnsTrue=a(!0),o.thatReturnsNull=a(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},61:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.r(t);var o=n(2),r=n.n(o),i=n(52),c=["components"];t.default=function(e){var t=e.components;a(e,c);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"h2",components:t},"TechDivision"),r.a.createElement(i.MDXTag,{name:"h3",components:t},"Senior React Native"),r.a.createElement("span",null,"04.2022 - now"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Developing social app for US based client.")),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Espeo"),r.a.createElement(i.MDXTag,{name:"h3",components:t},"TinyApp / Senior React Native"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Mobile App for kindergartens to provide teachers and parents a place to communicate and track children development."),r.a.createElement("span",null,"04.2022 - 08.2022"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"React Native, Redux Saga, Redux Toolkit, RxJS, Firebase, OneSignal, Bitrise."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Extensive code refactor and maintenance."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Implementation of new features.")),r.a.createElement(i.MDXTag,{name:"h3",components:t},"Charity App / Senior React Native"),r.a.createElement(i.MDXTag,{name:"p",components:t},"A simple app for charity supporting premature babies."),r.a.createElement("span",null,"03.2022 - 04.2022"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"React Native, Strapi, Docker."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Start and configuration of the mobile project."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Start and configuration of Strapi as a simple backend service."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Implementation of basic REST API with Strapi."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Implementation of features.")),r.a.createElement(i.MDXTag,{name:"h3",components:t},"VeganNation / Senior React Native"),r.a.createElement(i.MDXTag,{name:"p",components:t},"An app for the vegan community using its own crypto currency. Product based on Ethereum blockchain."),r.a.createElement("span",null,"11.2021 - 03.2022"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"React Native, Maps, Firebase, Bitrise."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Complete map refactor to improve performance."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Configuration of CI (Bitrise)."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Implementation of new features and rebranding."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Great impact on the product.")),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Dare IT"),r.a.createElement(i.MDXTag,{name:"h3",components:t},"Mentor"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Dare IT is an organisation that supports women in starting and developing their career in the IT industry. I have been Dare IT Mentor within the field of Frontend."),r.a.createElement("span",null,"11.2021 - 03.2022"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Sharing my professional path and experiences."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Guiding professional development and career growth."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Supporting decision making."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Facilitating CV and portfolio creation, and providing whatever else support my mentee needs.")),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Esvelo (formerly VentureDevs)"),r.a.createElement(i.MDXTag,{name:"h3",components:t},"Esvelo / Mobile Engineering Manager"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Managing mobile team in the company."),r.a.createElement("span",null,"01.2020 - 11.2021"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Defining and managing processes. "),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Conducting One on One\u2019s, making sure everyone in the team has what they need."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Supporting developers in their career paths."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Creating solutions that simplify the work of the team (technical documentation, new solutions like Bitrise instead of App Center)."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Due to the fact that the company works on crypto projects, I've learn the technical aspects in this area (Ethereum blockchain).")),r.a.createElement(i.MDXTag,{name:"h3",components:t},"Trubify / React Native Developer"),r.a.createElement(i.MDXTag,{name:"p",components:t},"An app for musicians and fans to stream live concerts."),r.a.createElement("span",null,"04.2020 - 06.2021"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"React Native, Typescript, Firebase."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Start and configuration of the project."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Configuration of CI (AppCenter)."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Implementation of new features."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Great impact on the product."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"I was fully responsible for creating a ",r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"native module")," based on the Streamaxia SDK (video live streaming)  for React Native. Used Swift and Java."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"I was fully responsible for the implementation of ",r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"in-app payments")," for both platforms."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Publishing to Google Play and Apple App Store."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Testing with Jest and Detox.")),r.a.createElement(i.MDXTag,{name:"h3",components:t},"Lyric / React Native Developer"),r.a.createElement(i.MDXTag,{name:"p",components:t},"An application similar to Airbnb or Booking.com, offered the booking of exclusive apartments."),r.a.createElement("span",null,"01.2020 - 04.2020"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"React Native, Typescript, GraphQL."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Close work with the team in the US."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Implementation of new features."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Existing code refactor."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Testing with Jest.")),r.a.createElement(i.MDXTag,{name:"hr",components:t}),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Siepomaga.pl"),r.a.createElement(i.MDXTag,{name:"h3",components:t},"React Native Developer"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Mobile app for the largest online charity foundation in Poland."),r.a.createElement("span",null,"02.2019 - 01.2020"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Full responsibility for the mobile application in React Native."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Configuration, design, development and maintenance of the app."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Publishing to Google Play and Apple App Store.")),r.a.createElement(i.MDXTag,{name:"hr",components:t}),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Qapp"),r.a.createElement(i.MDXTag,{name:"h3",components:t},"Noc Naukowc\xf3w 2019 / React Native Developer"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Mobile app for the event on Politechnika Poznanska in Poznan."),r.a.createElement("span",null,"06.2019 - 09.2019"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Rewriting the mobile app from Ionic to React Native"),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Using Redux, Typescript."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Publishing to Google Play and Apple App Store."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Simple tests using Jest and Enzyme.")),r.a.createElement(i.MDXTag,{name:"h3",components:t},"Noc Naukowc\xf3w 2016-2018 / Ionic Developer & Graphic Designer"),r.a.createElement(i.MDXTag,{name:"p",components:t},"Mobile app for the event on Politechnika Poznanska in Poznan."),r.a.createElement("span",null,"05.2016 - 09.2018"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Implementing the frontend layer of the mobile app using Ionic."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Designing UI for the whole app for every edition of the event.")))}}}]);
//# sourceMappingURL=3.7d145e45.chunk.js.map