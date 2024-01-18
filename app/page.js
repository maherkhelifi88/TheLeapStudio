import { Footer, Navbar } from '../components';
import { About, Contact, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World, StarsCanvas } from '../sections';

import { Team } from '../sections';


const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <Team />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    <div className='relative z-0'>
      <Contact />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
);

export default Page;
