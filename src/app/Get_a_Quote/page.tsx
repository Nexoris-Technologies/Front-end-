import Works from "@/components/common/Get_a_Quote/How_it_Works/Works";
import TellUs from "@/components/common/Get_a_Quote/Tell_us_what_you_need/Tell_Us";
import Quotes from "@/components/common/Get_a_Quote/Tell_us_what_you_need/Tell_Us";

function GetaQuote() {
 return(
  <section>
   <Quotes />
   <TellUs />
   <Works />
  </section>
 );
};

export default GetaQuote;