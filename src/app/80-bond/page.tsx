import {Hero80Y} from "../../../components/Hero80Y";
import {StickyHeader} from "../../../components/StickyHeader";
import {ForRent} from "../../../components/ForRent";
import {AnimatedIconBorders} from "../../../components/AnimatedIconBorders";
import {GallerySection} from "../../../components/GallerySection";
import {IconsGridSec} from "../../../components/IconsGridSec";
import {NeibWalk} from "../../../components/NeibWalk";
import {Testimonials} from "../../../components/Testimonials";

export default function BondPage() {
    return (
        <div className="relative">
            <Hero80Y/>
            <StickyHeader/>
            <ForRent/>
            <AnimatedIconBorders/>
            <IconsGridSec/>
            <NeibWalk/>
            <Testimonials/>
            <GallerySection/>
        </div>
    );
}
