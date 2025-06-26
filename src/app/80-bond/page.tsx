import {Hero80Y} from "../../../components/Hero80Y";
import {StickyHeader} from "../../../components/StickyHeader";
import {ForRent} from "../../../components/ForRent";
import {AnimatedIconBorders} from "../../../components/AnimatedIconBorders";
import {GallerySection} from "../../../components/GallerySection";

export default function BondPage() {
    return (
        <div className="relative">
            <Hero80Y/>
            <StickyHeader/>
            <ForRent/>
            <AnimatedIconBorders/>
            <GallerySection/>
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-32 bg-gray-100 rounded-lg shadow-inner" />
                ))}
            </div>
        </div>
    );
}
