import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Facebook, TwitterIcon, Instagram } from "lucide-react";
const Contact = () => {
  return (
    <>
      <Header />
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div>
            <h2 className="text-4xl font-semibold text-center mb-2 text-primary-text">
              Our Contact Details
            </h2>
            <p className="text-primary-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              libero assumenda inventore est dolor nisi dolorem commodi ex
              aperiam consectetur quo dolore labore in, esse exercitationem
              beatae unde sed repellendus!
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
            <div className="flex flex-col *:text-primary-text *:mb-2">
              <h2 className="text-3xl font-semibold text-primary-text">
                Our Contact Details
              </h2>
              <span>
                <span className="font-semibold">Email:</span>
                hello@cookingart.com
              </span>
              <span>
                <span className="font-semibold">Tel: </span>hello@cookingart.com
              </span>
              <span className="flex flex-row gap-3 ">
                <span className="font-semibold ">Socials:</span>
                <a href="#">
                  <Facebook className="hover:text-hover-color transition" />
                </a>
                <a href="#">
                  <Instagram className="hover:text-hover-color  transition" />
                </a>
                <a href="#">
                  <TwitterIcon className="hover:text-hover-color  transition" />
                </a>
              </span>
            </div>
            <form>
              <fieldset className="flex flex-col *:outline-0 *:border-2 *:border-primary-color *:p-2 *:rounded-lg  gap-4">
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  autoComplete="name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your email"
                  autoComplete="email"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Your Subject"
                  autoComplete="subject"
                />
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Enter Your Message"
                  autoComplete="message"
                ></textarea>
                <button
                  className="bg-primary-color hover:bg-hover-color cursor-pointer text-white font-semibold transition"
                  type="submit"
                >
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
      <FooterSection />
    </>
  );
};

export default Contact;
