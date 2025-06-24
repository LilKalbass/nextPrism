import Hero80Y from "../../../components/Hero80Y";
import StickyHeader from "../../../components/StickyHeader";

export default function BondPage() {
    return (
        <div className="relative">
            <Hero80Y />
            <StickyHeader />
            <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-32 bg-gray-100 rounded-lg shadow-inner" />
                ))}
            </div>
        </div>
    );
}
