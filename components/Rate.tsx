import { IoIosStarOutline, IoIosStarHalf, IoIosStar } from "react-icons/io";

export const Rate = ({ value, starColor }: { value: number; starColor: string }) => {
  if (value == null || value < 0 || value > 5) {
    return <div className="flex items-center gap-x-1">N/A</div>;
  }

  const stars = Array.from({ length: 5 }, (_, i) => {
    if (i < Math.floor(value)) {
      return <IoIosStar key={i} style={{ fontSize: "24px", color: starColor }} />;
    } else if (i < value) {
      return <IoIosStarHalf key={i} style={{ fontSize: "24px", color: starColor }} />;
    } else {
      return <IoIosStarOutline key={i} style={{ fontSize: "24px", color: starColor }} />;
    }
  });

  return <div className="flex items-center gap-x-0.5">{stars}</div>;
};
