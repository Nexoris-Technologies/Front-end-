import Works from "../How it works/Works";
import MakeQuote from "../Make a quote section/Quotesection";
import Needs from "../What you need/Need";

export default function Request() {
  return (
    <section>
      <div>
        <MakeQuote />
      </div>
      <div>
        <Works />
      </div>
      <div>
        <Needs />
      </div>
    </section>
  );
}
