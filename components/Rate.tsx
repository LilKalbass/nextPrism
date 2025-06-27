import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

export const Rate = ({ value, starColor }: { value: number; starColor: string }) => {
    if (value == null) return null;

    const stars = Array.from({ length: 5 }, (_, i) => {
        if (i < Math.floor(value)) {
            return <IoIosStar key={i} className={`text-[24px] text-[${starColor}]`} />;
        } else if (i < value) {
            return <IoIosStarHalf key={i} className={`text-[24px] text-[${starColor}]`} />;
        } else {
            return <IoIosStarOutline key={i} className={`text-[24px] text-[${starColor}]`} />;
        }
    });

    return (
        <div className="flex items-center gap-x-1">
            <div className="flex items-center">{stars}</div>
        </div>
    );
};
