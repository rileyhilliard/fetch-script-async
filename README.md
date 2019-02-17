# fetch-script-async

Async script fetcher with a promise API to help lazy load scripts.

## Installation
```
npm install fetch-script-async
```
```
yarn add fetch-script-async
```

## Example
```javascript
import fetchScript from 'fetch-script-async';

const GA = 'https://www.google-analytics.com/analytics.js';

fetchScript(GA).then(script => {
  // do something after google analytics has been fetched and instantiated
});
```
