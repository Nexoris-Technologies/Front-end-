import HomePage from "./components/Homepage/Homepage";
import ContactUs from "./contact/page";

export default function page() {
  return (
    <div>
      {/* Homepage */}
      <div>
        <HomePage />
      </div>
      {/* Contact us page */}
      <div>
        <ContactUs />
      </div>
    </div>
  );
}
