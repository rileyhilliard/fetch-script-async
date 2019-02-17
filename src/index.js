const fetchScript = source => new Promise((resolve, reject) => {
  const loadedScript =
    document.querySelector(`script[src="${source}"]`);

  // If this script has already been fetched, don't fetch it again
  if (loadedScript) {
    return resolve(loadedScript);
  }

  let script = document.createElement('script');
  const [ prior ] = document.getElementsByTagName('script');
  script.async = 1;

  script.onreadystatechange = (event, isAbort) => {
    if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
      script.onload = null;
      script.onreadystatechange = null;
      script = undefined;

      if (!isAbort) {
        resolve(event.target);
      } else {
        reject();
      }
    }
  };

  script.onload = script.onreadystatechange;
  script.src = source;
  prior.parentNode.insertBefore(script, prior);
});

export default fetchScript;
