/* eslint-disable no-console */
import singleSpaHtml from "single-spa-html";

export const htmlLifecycles = singleSpaHtml({
  template: (props) =>
    `<iframe id="web1" src="https://www.youtube.com/embed/owsfdh4gxyc" style="position: absolute; height: 100%; width: 100%; border: none;"></iframe>`,
});

export const bootstrap = htmlLifecycles.bootstrap;

export const mount = htmlLifecycles.mount;

export const unmount = htmlLifecycles.unmount;
