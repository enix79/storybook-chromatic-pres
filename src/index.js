import Reveal from 'reveal.js';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/dist/plugin/highlight/monokai.css';
// import hljs from 'highlight.js';
// import javascript from 'highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);
import RevealHighlight from 'reveal.js/dist/plugin/highlight';

Reveal.initialize({
  plugins: [RevealHighlight],
  controls: true,
  progress: true,
  history: true,
  center: true,
});
