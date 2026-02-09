import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronDown, Code2 } from 'lucide-react';
import Header from '../../../components/Header';

function ProgrammingFaq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const maswali = [
    /* KUNDI LA 1: HTML, CSS & UI/UX (1-35) */
    { id: 1, cat: "HTML/CSS", q_sw: "Vifaa gani vya maana hutumika katika HTML5?", q_en: "What are semantic HTML elements?", guide: "Eleza tag zinazotoa maana kwa kivinjari na SEO badala ya kutumia <div> pekee.", ans: "Semantic elements like <main>, <nav>, and <article> clearly describe their meaning, improving SEO and accessibility." },
    { id: 2, cat: "HTML/CSS", q_sw: "Eleza mfumo wa 'CSS Box Model'.", q_en: "Explain the CSS Box Model.", guide: "Taja tabaka nne: Content, Padding, Border, na Margin.", ans: "A conceptual box wrapping every element, consisting of content, padding, borders, and margins." },
    { id: 3, cat: "HTML/CSS", q_sw: "Kuna tofauti gani kati ya Class na ID?", q_en: "Difference between Class and ID?", guide: "ID ni kwa ajili ya element moja tu; Class inaweza kutumika mara nyingi.", ans: "IDs are unique to one element; classes can be reused across multiple elements." },
    { id: 4, cat: "HTML/CSS", q_sw: "'Alt text' ina umuhimu gani kwenye picha?", q_en: "Why is alt text important?", guide: "Inasaidia Google kuelewa picha (SEO) na watu wasioona wanaotumia screen readers.", ans: "Provides a textual description for web accessibility and allows search engines to index image content." },
    { id: 5, cat: "HTML/CSS", q_sw: "Eleza dhana ya 'Responsive Web Design'.", q_en: "What is Responsive Web Design?", guide: "Mbinu ya kuhakikisha website inaonekana vizuri kwenye kila kioo kwa kutumia Media Queries.", ans: "Design approach ensuring web pages render well on all devices using fluid grids and CSS media queries." },
    { id: 6, cat: "HTML/CSS", q_sw: "'Mobile-First Design' ni nini na kwanini ni muhimu Tanzania?", q_en: "What is Mobile-First Design?", guide: "Kuanza kutengeneza kwa ajili ya simu kwanza. Tanzania 90% internet access ni mobile.", ans: "Designing for small screens first. Essential in TZ as most users access the web via mobile devices." },
    { id: 7, cat: "HTML/CSS", q_sw: "Nini maana ya 'Z-index' katika CSS?", q_en: "What is Z-index in CSS?", guide: "Inapanga mpangilio wa vitu vilivyopandana (stack order).", ans: "Specifies the stack order of elements; higher z-index appears in front of lower ones." },
    { id: 8, cat: "HTML/CSS", q_sw: "Eleza matumizi ya 'Flexbox'.", q_en: "Explain the use of Flexbox.", guide: "Mfumo wa kupanga vitu katika mstari mmoja (row) au safu (column) kwa urahisi.", ans: "One-dimensional layout method for arranging items in rows or columns efficiently." },
    { id: 9, cat: "HTML/CSS", q_sw: "Tofauti kati ya visibility: hidden na display: none?", q_en: "Visibility vs Display?", guide: "Display none inaondoa element; visibility hidden inaficha lakini nafasi inabaki.", ans: "display: none removes element from flow; visibility: hidden hides it but maintains physical space." },
    { id: 10, cat: "HTML/CSS", q_sw: "Eleza matumizi ya CSS preprocessors kama SASS.", q_en: "Explain SASS.", guide: "Zana zinazoongeza uwezo wa CSS kama kutumia variables na nesting.", ans: "Preprocessors extend CSS with variables, nesting, and mixins for easier maintenance." },
    { id: 11, cat: "HTML/CSS", q_sw: "CSS Grid ni nini?", q_en: "What is CSS Grid?", guide: "Mfumo wa pande mbili (2D) wa kupanga vitu (safu na mistari).", ans: "Two-dimensional layout system allowing complex designs by controlling both rows and columns." },
    { id: 12, cat: "HTML/CSS", q_sw: "Nini maana ya 'Critical Rendering Path'?", q_en: "What is Critical Rendering Path?", guide: "Hatua browser inafuata ili kuonyesha picha kwenye kioo.", ans: "Sequence of steps the browser takes to convert HTML, CSS, and JS into pixels on screen." },
    { id: 13, cat: "HTML/CSS", q_sw: "Tofauti ya 'Em' na 'Rem' units.", q_en: "Em vs Rem?", guide: "Em inategemea parent; Rem inategemea root (html).", ans: "'em' is relative to parent font-size; 'rem' is relative to the root font-size." },
    { id: 14, cat: "HTML/CSS", q_sw: "Faida ya 'External CSS' vs 'Inline CSS'?", q_en: "External vs Inline CSS?", guide: "Inafanya kodi iwe safi na rahisi kubadilisha website nzima mara moja.", ans: "Decouples content from presentation, reduces redundancy, and allows global updates." },
    { id: 15, cat: "HTML/CSS", q_sw: "Eleza 'Web Accessibility' (a11y).", q_en: "What is Web Accessibility?", guide: "Kutengeneza website ili iweze kutumika na kila mtu, ikiwemo wenye ulemavu.", ans: "Ensures digital tools are usable by everyone, including those with motor or visual impairments." },
    { id: 16, cat: "HTML/CSS", q_sw: "Nini maana ya 'Cross-Browser Compatibility'?", q_en: "Cross-Browser Compatibility?", guide: "Kuhakikisha website inafanya kazi sawa kwenye browsers zote.", ans: "The ability of an app to function consistently across different browsers and versions." },
    { id: 17, cat: "HTML/CSS", q_sw: "Eleza 'SVG' na faida zake.", q_en: "What is SVG?", guide: "SVG hazifi ubora hata ukizivuta ziwe kubwa, na file ni dogo.", ans: "XML-based vector graphics that remain sharp at any scale and have small file sizes." },
    { id: 18, cat: "HTML/CSS", q_sw: "Nini maana ya 'BEM' naming convention?", q_en: "What is BEM?", guide: "Mbinu ya kupanga majina ya kodi (Block, Element, Modifier).", ans: "Naming convention providing modular structure for CSS classes, making code readable and reusable." },
    { id: 19, cat: "HTML/CSS", q_sw: "CSS 'Position: sticky' inafanya kazi gani?", q_en: "What is Position: sticky?", guide: "Inafanya kitu kikae sehemu moja mteja anaposcroll.", ans: "Toggles between relative and fixed positioning based on user's scroll position." },
    { id: 20, cat: "HTML/CSS", q_sw: "Vipi una-optimize kasi ya website nchini Tanzania?", q_en: "Optimizing for TZ market?", guide: "Kubana picha na kupunguza kodi ili ifunguke haraka hata kwenye 3G.", ans: "Compressing assets, lazy loading, and minifying files to reduce latency on slower networks." },
    { id: 21, cat: "HTML/CSS", q_sw: "Nini maana ya 'Progressive Enhancement'?", q_en: "Progressive Enhancement?", guide: "Kuanza na mfumo rahisi kisha kuongeza urembo kwa browser za kisasa.", ans: "Strategy providing core content to all users first, then enhancing for modern browsers." },
    { id: 22, cat: "HTML/CSS", q_sw: "Eleza 'Cookies' vs 'Local Storage'.", q_en: "Cookies vs Local Storage?", guide: "Cookies hutumwa server; Local Storage inabaki kwenye browser.", ans: "Cookies are sent to server with requests; Local Storage is client-side only and larger." },
    { id: 23, cat: "HTML/CSS", q_sw: "Nini maana ya 'Shadow DOM'?", q_en: "What is Shadow DOM?", guide: "Sehemu iliyotengwa kuzuia kodi za nje kuathiri component.", ans: "Web standard encapsulating a component's internal DOM and styles from global scope." },
    { id: 24, cat: "HTML/CSS", q_sw: "Faida za 'Icon Fonts' vs 'SVG Icons'?", q_en: "Icon Fonts vs SVG?", guide: "SVG ni bora zaidi kwa ufanisi na screen readers.", ans: "SVG icons offer better performance, clarity at any resolution, and superior accessibility." },
    { id: 25, cat: "HTML/CSS", q_sw: "Unapimaje ufanisi wa frontend?", q_en: "Measuring performance?", guide: "Taja Google Lighthouse au PageSpeed Insights.", ans: "Using tools like Google Lighthouse and Chrome DevTools to audit metrics and accessibility." },
    { id: 26, cat: "HTML/CSS", q_sw: "Nini maana ya 'Minification'?", q_en: "What is Minification?", guide: "Kuondoa nafasi zisizo na maana ili file liwe dogo.", ans: "Process of removing unnecessary characters from source code to speed up page loading." },
    { id: 27, cat: "HTML/CSS", q_sw: "Eleza 'Dark Mode' implementation.", q_en: "How to implement Dark Mode?", guide: "Kutumia CSS Variables kubadilisha rangi kulingana na simu.", ans: "Using prefers-color-scheme media query and CSS custom properties for theme switching." },
    { id: 28, cat: "HTML/CSS", q_sw: "'Graceful Degradation' ni nini?", q_en: "Graceful Degradation?", guide: "Mfumo wa kisasa unaofanya kazi hata kwenye browser za zamani.", ans: "Building full functionality for modern browsers while ensuring access on older systems." },
    { id: 29, cat: "HTML/CSS", q_sw: "Nini umuhimu wa 'Favicon'?", q_en: "Why use a Favicon?", guide: "Picha kidogo kwenye tab ya browser kusaidia utambulisho.", ans: "Small icon in browser tab improving brand recognition and helping users identify sites." },
    { id: 30, cat: "HTML/CSS", q_sw: "Eleza 'Viewport' katika HTML.", q_en: "What is the Viewport?", guide: "Eneo linaloonekana na mtumiaji; muhimu kwa responsive design.", ans: "Visible area of a web page, controlled by the viewport meta tag for device scaling." },
    { id: 31, cat: "HTML/CSS", q_sw: "CSS 'Grid Gap' inafanya kazi gani?", q_en: "What is Grid Gap?", guide: "Inatengeneza nafasi kati ya vitu kwenye gridi.", ans: "Property setting the spacing between rows and columns in Grid or Flexbox layouts." },
    { id: 32, cat: "HTML/CSS", q_sw: "Tofauti ya 'Absolute' na 'Relative' positioning.", q_en: "Absolute vs Relative?", guide: "Relative inategemea nafasi asilia; Absolute inategemea parent.", ans: "relative positions vs normal flow; absolute positions relative to nearest positioned ancestor." },
    { id: 33, cat: "HTML/CSS", q_sw: "Eleza 'CSS Animations' kwa ufupi.", q_en: "What are CSS Animations?", guide: "Kuhamisha element kati ya styles kwa kutumia keyframes.", ans: "Allows transition from one style to another using @keyframes to define steps." },
    { id: 34, cat: "HTML/CSS", q_sw: "Faida ya Tailwind CSS?", q_en: "Why use Tailwind?", guide: "Utility classes moja kwa moja kwenye HTML kurahisisha UI.", ans: "Allows rapid development using utility classes, ensuring consistent styling without custom CSS." },
    { id: 35, cat: "HTML/CSS", q_sw: "Unazuiaje 'Layout Shift' picha zikifunguka?", q_en: "Preventing Layout Shift?", guide: "Weka width/height mapema ili browser itenge nafasi.", ans: "By specifying width and height attributes to reserve space before the image loads." },

    /* KUNDI LA 2: JavaScript & Core Logic (36-70) */
    { id: 36, cat: "JavaScript", q_sw: "Eleza 'Hoisting' katika JavaScript.", q_en: "Explain Hoisting.", guide: "JS kupandisha declarations juu ya scope wakati wa compiling.", ans: "Behavior where declarations are moved to the top of their scope before execution." },
    { id: 37, cat: "JavaScript", q_sw: "Tofauti ya == na ===?", q_en: "== vs ===?", guide: "== inalinganisha thamani; === thamani na type.", ans: "== converts types; === is strict equality requiring same value and data type." },
    { id: 38, cat: "JavaScript", q_sw: "Nini maana ya 'Closure'?", q_en: "What is a Closure?", guide: "Function ya ndani inayokumbuka data za nje hata ikishafungwa.", ans: "Function retaining access to its outer environment even after outer function finishes." },
    { id: 39, cat: "JavaScript", q_sw: "Eleza 'Event Loop'.", q_en: "Explain the Event Loop.", guide: "Mfumo unaoruhusu JS kufanya kazi nyingi bila kukwama.", ans: "Mechanism enabling non-blocking I/O by offloading tasks and processing them via queue." },
    { id: 40, cat: "JavaScript", q_sw: "Tofauti ya var, let, na const?", q_en: "var vs let vs const?", guide: "var haina mipaka; let inabadilika; const haibadiliki.", ans: "var is function-scoped; let/const are block-scoped; const is a read-only reference." },
    { id: 41, cat: "JavaScript", q_sw: "Nini maana ya 'Promises'?", q_en: "What are Promises?", guide: "Inawakilisha matokeo ya kazi ya async ambayo haijakamilika.", ans: "Represents eventual completion/failure of an async operation and its resulting value." },
    { id: 42, cat: "JavaScript", q_sw: "Eleza 'Arrow Functions'.", q_en: "What are Arrow Functions?", guide: "Namna fupi ya kuandika functions bila 'this' yao wenyewe.", ans: "Concise syntax that lexically binds the 'this' value from surrounding scope." },
    { id: 43, cat: "JavaScript", q_sw: "'Strict Mode' ni nini?", q_en: "What is Strict Mode?", guide: "Hali inayozuia makosa ya kimyakimya na kuongeza usalama.", ans: "Restricted version of JS that catches silent errors and prevents unsafe features." },
    { id: 44, cat: "JavaScript", q_sw: "Eleza mbinu ya 'Event Delegation'.", q_en: "Event Delegation?", guide: "Kuweka listener moja kwenye parent badala ya kila child.", ans: "Attaching handler to parent to manage child events using event bubbling." },
    { id: 45, cat: "JavaScript", q_sw: "Tofauti kati ya Null na Undefined?", q_en: "Null vs Undefined?", guide: "Undefined ni kutoassign thamani; Null ni thamani ya 'tupu'.", ans: "undefined means no value assigned; null is an assignment representing nothing." },
    { id: 46, cat: "JavaScript", q_sw: "Nini maana ya 'Callback Function'?", q_en: "What is a Callback?", guide: "Function inayopitishwa kama parameter kwa nyingine.", ans: "Function passed as an argument to be invoked inside the outer function." },
    { id: 47, cat: "JavaScript", q_sw: "Tofauti ya 'Map' na 'ForEach'.", q_en: "Map vs ForEach?", guide: "Map inarudisha array mpya; ForEach inafanya kazi tu.", ans: "map() returns a new array; forEach() executes function without returning an array." },
    { id: 48, cat: "JavaScript", q_sw: "'This' keyword inamaanisha nini?", q_en: "What is 'this'?", guide: "Inawakilisha Object inayofanya kazi wakati huo.", ans: "Refers to the object currently executing the code, depending on function call context." },
    { id: 49, cat: "JavaScript", q_sw: "Nini maana ya 'Prototypal Inheritance'?", q_en: "Prototypal Inheritance?", guide: "Object kurithi sifa kutoka Object nyingine.", ans: "Feature where objects inherit properties from others via a prototype chain." },
    { id: 50, cat: "JavaScript", q_sw: "Tofauti ya 'Synchronous' na 'Asynchronous'.", q_en: "Sync vs Async?", guide: "Sync kodi inasubiriana; Async inafanya kazi background.", ans: "Sync executes sequentially; Async allows tasks to run without blocking main thread." },
    { id: 51, cat: "JavaScript", q_sw: "Nini maana ya 'JSON'?", q_en: "What is JSON?", guide: "Mfumo wa kubadilishana data kwa maandishi rahisi.", ans: "Lightweight interchange format easy for humans to read and machines to parse." },
    { id: 52, cat: "JavaScript", q_sw: "Eleza 'Destructuring' katika JS.", q_en: "What is Destructuring?", guide: "Kuchukua data moja kwa moja kutoka Array/Object.", ans: "Syntax unpacking values from arrays/objects into distinct variables in one expression." },
    { id: 53, cat: "JavaScript", q_sw: "Tofauti ya 'Slice' na 'Splice'?", q_en: "Slice vs Splice?", guide: "Slice haiharibu array; Splice inabadilisha array.", ans: "slice() returns shallow copy; splice() modifies original array by adding/removing." },
    { id: 54, cat: "JavaScript", q_sw: "'Spread Operator' inafanya nini?", q_en: "What is Spread Operator?", guide: "Inatandaza Array/Object moja ndani ya nyingine.", ans: "Allows iterable expansion where multiple arguments or elements are expected." },
    { id: 55, cat: "JavaScript", q_sw: "Eleza 'Higher Order Functions'.", q_en: "Higher Order Functions?", guide: "Function inayochukua au kurudisha function nyingine.", ans: "Function that takes functions as arguments or returns one as its result." },
    { id: 56, cat: "JavaScript", q_sw: "'Template Literals' ni nini?", q_en: "Template Literals?", guide: "Andishi kwa backticks (``) na variables kwa ${}.", ans: "String literals allowing embedded expressions using placeholder ${} syntax." },
    { id: 57, cat: "JavaScript", q_sw: "Nini maana ya 'Recursion'?", q_en: "What is Recursion?", guide: "Function inayojitaja yenyewe mpaka ifikie mwisho.", ans: "Technique where a function calls itself until it reaches a base terminating condition." },
    { id: 58, cat: "JavaScript", q_sw: "Eleza 'Type Coercion'.", q_en: "What is Type Coercion?", guide: "JS kubadilisha aina ya data moja kwenda nyingine.", ans: "Automatic implicit conversion of values from one data type to another." },
    { id: 59, cat: "JavaScript", q_sw: "Nini maana ya 'NaN'?", q_en: "What is NaN?", guide: "Not-a-Number, unapotaka hesabu na si namba.", ans: "Value resulting from an operation that cannot produce a numeric result (e.g., 0/0)." },
    { id: 60, cat: "JavaScript", q_sw: "'IIFE' inamaanisha nini?", q_en: "What is IIFE?", guide: "Function inayojitekeleza mara tu inapoundwa.", ans: "Immediately Invoked Function Expression that runs as soon as it is defined." },
    { id: 61, cat: "JavaScript", q_sw: "Vipi una-check kama kitu ni Array?", q_en: "Checking for Array?", guide: "Tumia mbinu ya Array.isArray().", ans: "Using the Array.isArray(value) method which returns true for arrays." },
    { id: 62, cat: "JavaScript", q_sw: "Nini maana ya 'Strict Equality'?", q_en: "Strict Equality?", guide: "Kulinganisha thamani na aina ya data (===).", ans: "Comparing values without type conversion (both value and type must match)." },
    { id: 63, cat: "JavaScript", q_sw: "Tofauti ya 'Debouncing' na 'Throttling'?", q_en: "Debouncing vs Throttling?", guide: "Debounce inasubiri mwisho; Throttle inapunguza kasi.", ans: "Debouncing delays execution until quiet time; Throttling ensures execution at set intervals." },
    { id: 64, cat: "JavaScript", q_sw: "'Pure Functions' ni nini?", q_en: "What are Pure Functions?", guide: "Inarudisha jibu lile lile kila wakati bila side effects.", ans: "Functions that always return same output for same input with no side effects." },
    { id: 65, cat: "JavaScript", q_sw: "Nini maana ya 'Currying'?", q_en: "What is Currying?", guide: "Kubadilisha function ya parameters nyingi kuwa mfululizo.", ans: "Transformation of f(a,b,c) into callable chain f(a)(b)(c)." },
    { id: 66, cat: "JavaScript", q_sw: "'Modules' katika JS zina faida gani?", q_en: "Benefits of Modules?", guide: "Kugawanya kodi katika mafile madogo madogo.", ans: "Breaking code into maintainable files that can export/import functionality." },
    { id: 67, cat: "JavaScript", q_sw: "Eleza dhana ya 'DOM Manipulation'.", q_en: "DOM Manipulation?", guide: "Kutumia JS kubadilisha HTML/CSS papo hapo.", ans: "Using JS to interact with and modify web page content dynamically." },
    { id: 68, cat: "JavaScript", q_sw: "Tofauti ya 'Local Storage' na 'Session Storage'?", q_en: "Local vs Session Storage?", guide: "Local inabaki; Session inafutika ukifunga tab.", ans: "Local persists browser close; Session clears when tab or window is closed." },
    { id: 69, cat: "JavaScript", q_sw: "'Event Bubbling' vs 'Event Capturing'?", q_en: "Bubbling vs Capturing?", guide: "Bubbling ndani kwenda nje; Capturing nje kwenda ndani.", ans: "Bubbling goes up to parents; Capturing goes down to target element." },
    { id: 70, cat: "JavaScript", q_sw: "Eleza matumizi ya 'SetTimeout' na 'SetInterval'?", q_en: "Timeout vs Interval?", guide: "Timeout inafanya mara moja; Interval inarudia rudia.", ans: "setTimeout runs once after delay; setInterval repeats at fixed time intervals." },

    /* KUNDI LA 3: Frameworks & Modern Stack (71-105) */
    { id: 71, cat: "React", q_sw: "Virtual DOM ni nini katika React?", q_en: "What is Virtual DOM?", guide: "Nakala nyepesi inayosaidia ku-update UI haraka.", ans: "Lightweight copy of real DOM used to efficiently re-render changed components." },
    { id: 72, cat: "React", q_sw: "Tofauti kati ya Props na State?", q_en: "Props vs State?", guide: "Props kutoka nje; State inatengenezwa ndani.", ans: "Props are read-only parent inputs; State is local data managed within component." },
    { id: 73, cat: "React", q_sw: "Eleza matumizi ya 'useEffect' Hook.", q_en: "What is useEffect?", guide: "Kwa kazi kama kuchukua data kutoka API (side effects).", ans: "Hook handling side effects like data fetching or DOM updates in functional components." },
    { id: 74, cat: "Flutter", q_sw: "Flutter ni nini na faida zake?", q_en: "What is Flutter?", guide: "Toolkit ya Google kutengeneza apps za simu/web kwa kodi moja.", ans: "Google UI SDK for building natively compiled apps for mobile/web/desktop from single codebase." },
    { id: 75, cat: "Flutter", q_sw: "Tofauti ya 'Stateless' na 'Stateful' widgets?", q_en: "Stateless vs Stateful?", guide: "Moja haibadiliki; nyingine inabadilika dynamically.", ans: "StatelessWidget is static; StatefulWidget rebuilds dynamically when internal state changes." },
    { id: 76, cat: "React", q_sw: "Nini maana ya 'Redux' au 'Context API'?", q_en: "Redux vs Context API?", guide: "Mifumo ya kusimamia data globally (state management).", ans: "Tools managing shared data globally, avoiding prop drilling across many levels." },
    { id: 77, cat: "React", q_sw: "'JSX' ni nini?", q_en: "What is JSX?", guide: "Andishi la HTML ndani ya JavaScript katika React.", ans: "JavaScript XML allowing HTML-like structures directly in JavaScript code." },
    { id: 78, cat: "React", q_sw: "Eleza mbinu ya 'Lifting State Up'.", q_en: "Lifting State Up?", guide: "Kuhamisha state kwa parent ili watoto waishare.", ans: "Moving shared state to the closest common ancestor for access/modification." },
    { id: 79, cat: "Flutter", q_sw: "'Hot Reload' inafanya kazi gani?", q_en: "Hot Reload in Flutter?", guide: "Kuona mabadiliko ya kodi papo hapo bila kuwasha app upya.", ans: "Injecting updated code into running VM to see UI changes instantly without losing state." },
    { id: 80, cat: "React", q_sw: "Faida ya Next.js dhidi ya React ya kawaida?", q_en: "Next.js vs React?", guide: "SEO bora kupitia Server-Side Rendering (SSR).", ans: "Built-in features like SSR and SSG that improve SEO and initial load speed." },
    { id: 81, cat: "React", q_sw: "Eleza dhana ya 'Key' katika React Lists.", q_en: "Keys in React?", guide: "Inasaidia React kutambua element gani imebadilika.", ans: "Unique identifiers tracking list changes to optimize rendering process." },
    { id: 82, cat: "Flutter", q_sw: "Nini maana ya 'Pubspec.yaml'?", q_en: "What is pubspec.yaml?", guide: "File linalotunza maelezo ya app na dependencies.", ans: "Manages metadata, assets (images/fonts), and packages for Flutter projects." },
    { id: 83, cat: "Flutter", q_sw: "Eleza 'Material' na 'Cupertino' widgets.", q_en: "Material vs Cupertino?", guide: "Material ni Android; Cupertino ni muonekano wa iOS.", ans: "Material widgets for Google/Android design; Cupertino for Apple/iOS mimicry." },
    { id: 84, cat: "Flutter", q_sw: "Nini maana ya 'Widget Tree'?", q_en: "What is the Widget Tree?", guide: "Mfumo wa widget zilizopangwa moja ndani ya nyingine.", ans: "Hierarchical structure defining layout and behavior via nested widgets." },
    { id: 85, cat: "Frameworks", q_sw: "'Server-Side Rendering' (SSR) ina faida gani?", q_en: "Benefits of SSR?", guide: "Inatuma website kamili kwa browser kwa SEO bora.", ans: "Pre-renders on server so crawlers index full content easily, essential for SEO." },
    { id: 86, cat: "Flutter", q_sw: "Matumizi ya 'Provider' au 'Bloc'?", q_en: "Provider vs Bloc?", guide: "Mbinu za kusimamia data (state management).", ans: "State management frameworks separating business logic from UI for scalability." },
    { id: 87, cat: "CSS", q_sw: "Nini maana ya 'Tailwind CSS'?", q_en: "What is Tailwind?", guide: "Kupaka rangi/mpangilio kwa utility classes moja kwa moja.", ans: "Utility-first CSS framework for building custom designs directly in HTML." },
    { id: 88, cat: "Web Dev", q_sw: "'TypeScript' inatusaidia nini?", q_en: "Why use TypeScript?", guide: "Inazuia makosa kwa kuhakikisha aina sahihi za data.", ans: "JS superset adding static typing to catch errors early and improve maintainability." },
    { id: 89, cat: "Flutter", q_sw: "Eleza 'Build Context'.", q_en: "What is BuildContext?", guide: "Inatambulisha widget iko wapi katika tree.", ans: "Handle to widget's location in tree, used for theme and navigation access." },
    { id: 90, cat: "React", q_sw: "Nini maana ya 'Reconciliation'?", q_en: "What is Reconciliation?", guide: "React kulinganisha Virtual DOM mpya na ya zamani.", ans: "Algorithm comparing Virtual DOM trees to minimize real DOM updates." },
    { id: 91, cat: "Flutter", q_sw: "'Dart' ni nini?", q_en: "What is Dart?", guide: "Lugha ya programu inayotumiwa na Flutter.", ans: "Client-optimized language by Google for high-performance multi-platform apps." },
    { id: 92, cat: "Flutter", q_sw: "Matumizi ya 'FutureBuilder'?", q_en: "What is FutureBuilder?", guide: "Chora UI kulingana na data kutoka API (Futures).", ans: "Widget building itself based on latest snapshot of interaction with a Future." },
    { id: 93, cat: "React", q_sw: "Nini maana ya 'Hooks'?", q_en: "What are React Hooks?", guide: "Functional components kutumia state na lifecycle.", ans: "Functions let you 'hook into' React features from functional components." },
    { id: 94, cat: "Web Dev", q_sw: "'Async/Await' inafanya kazi gani?", q_en: "Async/Await logic?", guide: "Andika kodi ya kusubiri data bila website kukwama.", ans: "Syntactical sugar over Promises for readable, non-blocking asynchronous code." },
    { id: 95, cat: "Flutter", q_sw: "Vipi una-implement 'Responsiveness'?", q_en: "Responsiveness in Flutter?", guide: "LayoutBuilder au MediaQuery kurekebisha ukubwa.", ans: "Achieved via MediaQuery for dimensions and LayoutBuilder for constraints." },
    { id: 96, cat: "React", q_sw: "Nini maana ya 'Pure Component'?", q_en: "Pure Component?", guide: "Inachora upya tu ikiwa props/state imebadilika.", ans: "Re-renders only if props/state shallowly change, improving performance." },
    { id: 97, cat: "Web Dev", q_sw: "Dhana ya 'Navigation' na 'Routing'.", q_en: "Navigation vs Routing?", guide: "Kuhama kati ya kurasa ndani ya app.", ans: "Routing directs users to views; Navigation is the UI process of moving." },
    { id: 98, cat: "Web Dev", q_sw: "Tofauti ya 'Framework' na 'Library'?", q_en: "Framework vs Library?", guide: "Framework inakuongoza; Library wewe unaicall.", ans: "Library tools are called by you; Framework structure calls your code." },
    { id: 99, cat: "Flutter", q_sw: "'Widget Life Cycle' inahusisha nini?", q_en: "Flutter Life Cycle?", guide: "Hatua tangu iundwe mpaka ifutwe (initState, dispose).", ans: "Methods (initState, build, dispose) executed during widget existence." },
    { id: 100, cat: "Web Dev", q_sw: "Eleza dhana ya 'Micro-frontend'.", q_en: "What is Micro-frontend?", guide: "Kugawanya website iwe apps ndogo zilizounganishwa.", ans: "Architectural style where web app is broken into semi-independent apps." },
    { id: 101, cat: "Web Dev", q_sw: "'State Management' ni nini kibiashara?", q_en: "Commercial State Management?", guide: "Kutunza data za mteja (cart items) sehemu salama.", ans: "Managing application data efficiently so UI stays in sync with underlying state." },
    { id: 102, cat: "Backend", q_sw: "'API Documentation' ina umuhimu gani?", q_en: "Why document APIs?", guide: "Inasaidia developers kuelewa namna ya kutumia backend.", ans: "Ensures front-end/partners can integrate without constant support (e.g., Swagger)." },
    { id: 103, cat: "UI/UX", q_sw: "Faida ya 'Dark Mode' kikiufundi?", q_en: "Technical Dark Mode?", guide: "Punguza betri (OLED) na uchovu wa macho.", ans: "Reduces power consumption on OLEDs and provides comfortable low-light viewing." },
    { id: 104, cat: "UI/UX", q_sw: "'Skeleton Screens' ni nini?", q_en: "What are Skeleton Screens?", guide: "Mistari inayotokea kabla data hazijafika (Placeholders).", ans: "Low-fidelity placeholders displayed during loading to improve perceived speed." },
    { id: 105, cat: "UI/UX", q_sw: "Unachaguaje rangi kwa ajili ya 'CTA' button?", q_en: "Choosing CTA colors?", guide: "Tumia rangi inayong'ara (Neo-Mint vs Deep Blue).", ans: "High-contrast colors to stand out visually and prompt user action immediately." },

    /* KUNDI LA 4: Backend, APIs & Data (106-130) */
    { id: 106, cat: "APIs", q_sw: "Tofauti ya REST na GraphQL?", q_en: "REST vs GraphQL?", guide: "REST endpoints tofauti; GraphQL mlango mmoja.", ans: "REST uses fixed structures; GraphQL allows clients to request specific data needed." },
    { id: 107, cat: "Backend", q_sw: "Eleza 'Middleware' katika Node.js/Laravel.", q_en: "What is Middleware?", guide: "Functions kati ya request na response kwa ulinzi.", ans: "Bridge between request and response used for authentication/logging." },
    { id: 108, cat: "Architecture", q_sw: "Nini maana ya 'MVC Architecture'?", q_en: "What is MVC?", guide: "Model (Data), View (UI), na Controller (Logic).", ans: "Design pattern decoupling data, user interface, and core application logic." },
    { id: 109, cat: "Backend", q_sw: "Eleza 'Authentication' vs 'Authorization'.", q_en: "Auth vs Auth?", guide: "Identity vs Permission.", ans: "Authentication verifies who; Authorization determines what actions are allowed." },
    { id: 110, cat: "Security", q_sw: "'SQL Injection' ni nini na unazuiaje?", q_en: "SQLi prevention?", guide: "Kodi haramu; zuia kwa prepared statements.", ans: "Vulnerability where malicious code is executed; prevented by parameterized queries." },
    { id: 111, cat: "Backend", q_sw: "Laravel 'Artisan' inatusaidia nini?", q_en: "What is Artisan?", guide: "Command-line kurahisisha migrations/testing.", ans: "Built-in CLI automating tasks like database migrations and boilerplate generation." },
    { id: 112, cat: "Backend", q_sw: "Faida ya Node.js kwa real-time applications?", q_en: "Real-time Node.js?", guide: "Haraka kwa sababu ni non-blocking.", ans: "Event-driven architecture handles concurrent connections efficiently (e.g., chats)." },
    { id: 113, cat: "Architecture", q_sw: "Eleza dhana ya 'Dependency Injection'.", q_en: "Dependency Injection?", guide: "Kupitisha hitaji kama parameter toka nje.", ans: "Pattern where object dependencies are provided externally for modularity." },
    { id: 114, cat: "Backend", q_sw: "Node.js Event Loop kibiashara?", q_en: "Commercial Event Loop?", guide: "Hudumia maelfu kwa wakati mmoja bila kukwama.", ans: "Handles high volume I/O asynchronously on a single thread, reducing costs." },
    { id: 115, cat: "Backend", q_sw: "Laravel 'Migrations' ni nini?", q_en: "What are Migrations?", guide: "Version control ya database.", ans: "Allows teams to share and modify database schemas across environments safely." },
    { id: 116, cat: "Architecture", q_sw: "Tofauti ya 'Monolithic' na 'Microservices'?", q_en: "Monolith vs Microservices?", guide: "Mfumo mmoja mkubwa vs mifumo midogo mingi.", ans: "Single unified app vs independent services communicating via APIs." },
    { id: 117, cat: "APIs", q_sw: "Eleza 'API Endpoints' na 'Rate Limiting'.", q_en: "Endpoints & Rate Limiting?", guide: "Anwani ya data vs kuzuia maombi mengi kupita kiasi.", ans: "Endpoints access data; Rate limiting protects servers from abuse/overload." },
    { id: 118, cat: "Security", q_sw: "Nini maana ya 'JWT'?", q_en: "What is JWT?", guide: "Namba siri iliyosimbwa inayomtambulisha mteja.", ans: "JSON Web Token for stateless authentication in modern web applications." },
    { id: 119, cat: "DevOps", q_sw: "Mbinu ya 'Unit Testing' katika Backend.", q_en: "What is Unit Testing?", guide: "Pima sehemu ndogo kabisa ya kodi peke yake.", ans: "Testing isolated individual functions to ensure each component behaves correctly." },
    { id: 120, cat: "Security", q_sw: "'CORS' ni nini kikiufundi?", q_en: "What is CORS?", guide: "Ulinzi unaoruhusu/kuzuia domains kuchukua data.", ans: "Security mechanism controlling how web apps from one domain interact with another." },
    { id: 121, cat: "Backend", q_sw: "Blade au JinJa templating engines?", q_en: "Templating engines?", guide: "PHP au Python ndani ya HTML kitalamu.", ans: "Allow embedding backend logic within HTML files using clean syntax." },
    { id: 122, cat: "Backend", q_sw: "Eleza dhana ya 'Caching' (Redis).", q_en: "What is Caching?", guide: "Tunza data inayohitajika sana sehemu ya haraka.", ans: "Storing accessed data in memory (RAM) to reduce database load and latency." },
    { id: 123, cat: "Backend", q_sw: "Node.js streams zinatusaidia nini?", q_en: "Why use Streams?", guide: "Soma mafile makubwa kidogo kidogo bila kujaza RAM.", ans: "Enable efficient processing of large data piece by piece without high memory usage." },
    { id: 124, cat: "Backend", q_sw: "Nini maana ya 'ORM'?", q_en: "What is ORM?", guide: "Kutumia kodi ya kawaida (PHP/JS) kuongea na DB.", ans: "Object-Relational Mapping abstracting raw SQL into language-specific objects." },
    { id: 125, cat: "Backend", q_sw: "Vipi una-handle 'Error Handling' katika API?", q_en: "API Error Handling?", guide: "Tumia Status Codes (404, 500) na ujumbe wazi.", ans: "Returning appropriate HTTP codes and clear JSON messages for request failure." },
    { id: 126, cat: "Backend", q_sw: "Node.js 'npm' au 'yarn'?", q_en: "npm vs yarn?", guide: "Maduka ya programu ndogo (packages).", ans: "Package managers automating installation and management of external libraries." },
    { id: 127, cat: "Backend", q_sw: "Dhana ya 'WebSockets' mabenki nchini.", q_en: "WebSockets for Banking?", guide: "Alerts za miamala real-time bila kufunga mlango.", ans: "Full-duplex channels for real-time notifications and live transaction feeds." },
    { id: 128, cat: "Backend", q_sw: "Nini maana ya '.env' files?", q_en: "What is .env?", guide: "Kuficha siri kama password za DB.", ans: "Environment variables storing sensitive config outside of source code." },
    { id: 129, cat: "Security", q_sw: "'CSRF Protection' inafanya kazi gani?", q_en: "CSRF Prevention?", guide: "Zuia mtu kutumia akaunti yako bila wewe kujua.", ans: "Uses unique tokens to verify requests originate from the authenticated user." },
    { id: 130, cat: "Backend", q_sw: "Laravel 'Service Providers'?", q_en: "Service Providers?", guide: "Mahali app inapojiandaa kufanya kazi (booting).", ans: "Central place to configure and register application services and dependencies." },

    /* KUNDI LA 5: Database, DevOps & Local Laws (131-150) */
    { id: 131, cat: "Databases", q_sw: "Tofauti kati ya SQL na NoSQL?", q_en: "SQL vs NoSQL?", guide: "SQL structured/relational; NoSQL flexible/schema-less.", ans: "Structured tables vs schema-less datasets for high-velocity or large data." },
    { id: 132, cat: "DevOps", q_sw: "'Git' ni nini na faida zake?", q_en: "What is Git?", guide: "Kutunza matoleo ya kodi na kushirikiana.", ans: "Distributed version control tracking changes and allowing collaborative development." },
    { id: 133, cat: "DevOps", q_sw: "'CI/CD' inamaanisha nini?", q_en: "What is CI/CD?", guide: "Automation ya majaribio na kurusha kodi (deploy).", ans: "Continuous Integration/Deployment automating software releases for reliability." },
    { id: 134, cat: "Legal TZ", q_sw: "Sheria ya PDPA 2022 inasema nini?", q_en: "PDPA 2022 Mandate?", guide: "Uhalali wa kukusanya data na haki ya kufuta.", ans: "Mandates lawful processing and transparency, granting citizens rights to privacy." },
    { id: 135, cat: "Legal TZ", q_sw: "Wakala wa Serikali Mtandao (eGA)?", q_en: "What is eGA?", guide: "Viwango na usimamizi wa TEHAMA serikalini.", ans: "Authority coordinating e-gov initiatives and enforcing standards across public sector." },
    { id: 136, cat: "Databases", q_sw: "Nini maana ya 'Database Indexing'?", q_en: "Indexing purpose?", guide: "Kama index ya kitabu; pata data haraka.", ans: "Creating a structured map to speed up searches on large database tables." },
    { id: 137, cat: "Databases", q_sw: "Eleza 'ACID Properties'.", q_en: "ACID Properties?", guide: "Atomicity, Consistency, Isolation, Durability.", ans: "Principles ensuring database transactions are complete and consistent." },
    { id: 138, cat: "Databases", q_sw: "'Normalization' vs 'Denormalization'?", q_en: "Normalize or Denormalize?", guide: "Punguza urudiaji vs ongeza kasi ya kusoma.", ans: "Normalization reduces redundancy; Denormalization improves query speed." },
    { id: 139, cat: "DevOps", q_sw: "Faida ya Docker/Containers?", q_en: "Why use Docker?", guide: "App kufanya kazi popote kitalamu (consistency).", ans: "Packages apps into isolated containers, ensuring they run anywhere regardless of host." },
    { id: 140, cat: "DevOps", q_sw: "Eleza 'Git Branching' strategy.", q_en: "Git Branching?", guide: "Kugawanya timu kufanya features tofauti.", ans: "Defines how developers isolate changes and manage merges effectively." },
    { id: 141, cat: "DevOps", q_sw: "Nini maana ya 'Code Review'?", q_en: "Why Code Review?", guide: "Mwenzako kukagua kodi yako kabla haijaenda live.", ans: "Systematic examination of code to find bugs and share knowledge." },
    { id: 142, cat: "DevOps", q_sw: "'Unit' vs 'Integration' Testing?", q_en: "Unit vs Integration?", guide: "Function pekee vs mifumo iliyounganishwa.", ans: "Testing isolated functions vs verifying modules work together correctly." },
    { id: 143, cat: "DevOps", q_sw: "Eleza 'Technical Debt'.", q_en: "What is Technical Debt?", guide: "Kodi duni kwa ajili ya kuwahi muda; italeta gharama baadaye.", ans: "Implied cost of additional rework caused by choosing fast/easy solutions now." },
    { id: 144, cat: "DevOps", q_sw: "Nini maana ya 'Serverless Computing'?", q_en: "What is Serverless?", guide: "Andika kodi bila kuhangaika na server hardware.", ans: "Running apps without managing infrastructure, paying only for resource use." },
    { id: 145, cat: "Legal TZ", q_sw: "Vipi una-register startup ICT Commission?", q_en: "ICT Commission startup registration?", guide: "Mfumo wa Startup Labeling kwenye tovuti yao.", ans: "Acquiring 'ICT Startup Label' via online platform for innovation and impact." },
    { id: 146, cat: "Legal TZ", q_sw: "Nini maana ya 'e-GIF'?", q_en: "What is e-GIF?", guide: "Mifumo ya serikali kuongea kitalamu (Interoperability).", ans: "Set of policies enabling different gov ICT systems to exchange info seamlessly." },
    { id: 147, cat: "Legal TZ", q_sw: "Matumizi ya 'GePG' malipo ya serikali.", q_en: "GePG role?", guide: "Mfumo mkuu wa namba ya control serikalini.", ans: "Centralized gateway for collecting revenues via mobile money, banks, and apps." },
    { id: 148, cat: "Legal TZ", q_sw: "Umuhimu wa 'Interoperability' serikalini.", q_en: "Why Interoperability?", guide: "Kuepusha silos na kusaidia data kutumika sehemu nyingi.", ans: "Breaking down silos for secure data sharing, improving service delivery time." },
    { id: 149, cat: "Legal TZ", q_sw: "'Startup Labeling' na faida zake.", q_en: "Benefits of Startup Labeling?", guide: "Kutambuliwa rasmi na kupata tenda za serikali.", ans: "Official validation unlocking preferential treatment in procurement and incubation." },
    { id: 150, cat: "Legal TZ", q_sw: "Majukumu ya 'Data Protection Officer' (DPO)?", q_en: "Role of a DPO?", guide: "Kuhakikisha taasisi inafuata PDPA 2022.", ans: "Monitoring compliance with privacy laws and acting as primary contact for PDPC." }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-jakarta text-deep-blue">
      <Header />
      <main className="max-w-5xl mx-auto pt-32 pb-20 px-6">
        
        {/* BACK BUTTON */}
        <Link 
          to="/faq/it" 
          className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-deep-blue text-deep-blue font-bold rounded-xl mb-10 hover:bg-deep-blue hover:text-white transition-all shadow-sm active:scale-95"
        >
          <ArrowLeft size={18} /> Back
        </Link>

        {/* HERO */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 bg-white rounded-3xl shadow-sm border border-slate-100 mb-6">
            <Code2 size={40} className="text-neo-mint" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Programming & Web Development
          </h1>
          <p className="text-slate-500 font-medium max-w-2xl mx-auto italic leading-relaxed">
            Strategic Evaluation: 150 Essential Questions kulingana na mahitaji ya soko la Tanzania 2025-2026.
          </p>
        </div>

        {/* LIST YA MASWALI 150 */}
        <div className="space-y-4">
          {maswali.map((m, index) => (
            <div 
              key={m.id} 
              className={`bg-white rounded-[28px] border transition-all duration-300 ${activeIndex === index ? 'border-neo-mint shadow-xl' : 'border-slate-100 shadow-sm'}`}
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
              >
                <div className="flex items-center gap-5">
                  <span className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-sm shadow-inner transition-colors ${activeIndex === index ? 'bg-neo-mint text-deep-blue' : 'bg-slate-50 text-slate-400'}`}>
                    {m.id}
                  </span>
                  <div>
                    <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full border mb-2 inline-block bg-blue-50 text-blue-600 border-blue-100">
                      {m.cat}
                    </span>
                    <h3 className="font-bold text-deep-blue text-lg leading-snug group-hover:text-neo-mint transition-colors">
                      {m.q_sw}
                    </h3>
                    <p className="text-slate-400 text-xs italic mt-1 font-medium italic opacity-70">({m.q_en})</p>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                   <ChevronDown className={activeIndex === index ? 'text-neo-mint' : 'text-slate-300'} />
                </div>
              </button>

              {activeIndex === index && (
                <div className="px-8 pb-8 animate-in fade-in slide-in-from-top-3 duration-500 space-y-4">
                  <div className="p-6 bg-neo-mint/5 rounded-[24px] border border-neo-mint/10 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-neo-mint"></div>
                    <small className="font-black text-[10px] text-neo-mint uppercase tracking-widest mb-2 block italic text-xs">Strategy / Muongozo:</small>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {m.guide}
                    </p>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-[24px] border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-deep-blue/20"></div>
                    <small className="font-black text-[10px] text-deep-blue uppercase tracking-widest mb-2 block text-xs">Technical Answer (English):</small>
                    <p className="text-deep-blue text-sm leading-relaxed italic">
                      {m.ans}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default ProgrammingFaq;