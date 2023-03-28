"use strict";
(() => {
  // ns-hugo:/home/runner/work/utterances/utterances/assets/mods/utterances/js/index.ts
  var Utterances = class {
    setTheme(theme) {
      const msg = {
        type: "set-theme",
        theme
      };
      document.querySelectorAll(".utterances-frame").forEach((frame) => {
        const endpoint = new URL(frame.src).origin;
        frame.contentWindow?.postMessage(msg, endpoint);
      });
    }
  };
  var js_default = Utterances;

  // <stdin>
  var utterances = new js_default();
  window.Utterances = utterances;
})();
