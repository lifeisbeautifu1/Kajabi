import {
  Navbar,
  Header,
  Event,
  Stats,
  Section,
  Slider,
  Resources,
  Trial,
  Links,
  Footer,
} from './components';
import FirstImage from './images/1.png';
import SecondImage from './images/2.jpeg';
import ThirdImage from './images/3.jpeg';

function App() {
  return (
    <div className="font-primary relative">
      <Navbar />
      <Header />
      <Event />
      <Stats />
      <div className="w-[85%] m-auto">
        <h1 className="text-6xl font-semibold pt-12 text-gray-700">
          Kajabi makes it easy for you to:
        </h1>
        <Section
          image={FirstImage}
          title="Create"
          paragraph="Kajabi empowers you to create all kinds of content to showcase what you know best, including online courses, coaching programs, podcasts, memberships, and more."
        />
        <Section
          image={SecondImage}
          reverse
          title="Grow"
          paragraph="Leverage Kajabi’s full suite of marketing tools and templates to create new content, campaigns, and funnels in minutes."
        />
        <Section
          image={ThirdImage}
          title="Manage"
          paragraph="Manage growth with built-in CRM, collect payments with Stripe and Paypal integrations, and use analytics to make informed business decisions."
        />
        <h1 className="text-6xl font-semibold mb-4">
          Creators and entrepreneurs <br /> of all kinds trust Kajabi
        </h1>
        <Slider />
      </div>
      <Resources />
      <Trial />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
