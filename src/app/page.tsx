import {Hero} from "../../components/Hero";
import {Banner} from "../../components/Banner";
import {ImageStats} from "../../components/ImageStats";
import {PropertyMap} from "../../components/PropertyMap";
import {CircleSlider} from "../../components/CircleSlider";
import {Testimonials} from "../../components/Testimonials";
import {AnnounceProperty} from "../../components/AnnounceProperty";
import {BlogShowCase} from "../../components/BlogShowCase";
import {Socials} from "../../components/Socials";
import {LandAcknowl} from "../../components/LandAcknowl";

export default function Home() {
  return (
      <main className='bg-white'>
          <Hero/>
          <Banner/>
          <ImageStats src='/assets/ImageStats/ImageStatsPreview.png'/>
          <PropertyMap/>
          <CircleSlider/>
          <Testimonials/>
          <AnnounceProperty src='/assets/AnnounceProperty/HomePage.png' names={['Town Centre Place', 'NEO']} />
          <BlogShowCase/>
          <Socials/>
          <LandAcknowl/>
      </main>
  );
}
