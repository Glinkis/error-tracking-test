import * as Raven from "raven-js";
import { h, render } from "preact";

Raven.config(
  "https://1c3f3bbcbbee4f648494fa544d26c218@sentry.io/430207"
).install();

const poll = () => {
  throw new Error("Error!");
};

const App = () => (
  <div>
    <h1>error-tracking-test</h1>
    {poll()}
  </div>
);

Raven.context(() => {
  render(<App />, document.body);
});
