import Reveal from 'reveal.js';
import { inject } from '@vercel/analytics';
import { injectSpeedInsights } from '@vercel/speed-insights';

import 'reveal.js/dist/reveal.css';
import 'reveal.js/dist/theme/black.css';
import 'reveal.js/dist/plugin/highlight/monokai.css';
import RevealHighlight from 'reveal.js/dist/plugin/highlight';

inject();
injectSpeedInsights();

Reveal.initialize({
  plugins: [RevealHighlight],
  controls: true,
  progress: true,
  history: true,
  center: true,
});
