import Needs from "./Get-Quote-Page/Need";
import MakeQuote from "./Get-Quote-Page/Quotesection";
import Works from "./Get-Quote-Page/Works";

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
