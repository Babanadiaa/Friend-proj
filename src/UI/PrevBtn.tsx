import { Swiper } from "swiper/react";
import { FcPrevious } from "react-icons/fc";

interface SwiperButtonProps {
    swiperRef: React.MutableRefObject<Swiper | null>;
}

const PrevButton = ({ swiperRef }: SwiperButtonProps) => {
    return (
        <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute text-6xl opacity-50 h-100 top-1/2 left-10 -translate-y-1/2 z-10  text-white px-3 py-2 rounded hover:bg-blue-600 transition hidden md:block"
        >
            <FcPrevious />
        </button>
    );
};

export default PrevButton;
