import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useRef, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import PrevButton from "../UI/PrevBtn";
import NextButton from "../UI/NextBtn";

const videos = [
    "https://www.youtube.com/embed/uchFQCvaqy8",
    "https://youtube.com/embed/M5RnIeJTsi8",
    "https://www.youtube.com/embed/BZrOUVdTeX4",
    "https://www.youtube.com/embed/mqj38wCAmBU",
];

const categories = [
    {
        name: "Logos",
        posts: [{ id: 1, title: "Logo Template", video: videos[1] }],
    },
    {
        name: "Shorts",
        posts: [
            { id: 1, title: "Podcast short term template", video: videos[0] },
            { id: 2, title: "The worst advice we've ever heard about coffee", video: videos[3] },
            { id: 3, title: "The worst advice we've ever heard about coffee", video: videos[3] },
            { id: 4, title: "The worst advice we've ever heard about coffee", video: videos[3] },
            { id: 4, title: "The worst advice we've ever heard about coffee", video: videos[3] },
            { id: 4, title: "The worst advice we've ever heard about coffee", video: videos[3] },
            { id: 4, title: "The worst advice we've ever heard about coffee", video: videos[3] },
            { id: 4, title: "The worst advice we've ever heard about coffee", video: videos[3] },


        ],
    },
    {
        name: "Animated",
        posts: [],
    },
    {
        name: "Explainer",
        posts: [{ id: 1, title: "App explainer video template", video: videos[2] }],
    },
];

export default function Example() {
    const [activeVideo, setActiveVideo] = useState(null);
    const swiperRef = useRef(null);

    return (
        <section className=" relative flex w-full justify-center  px-4 pb-10 pt-24 bg-black" id="Portfolio">
            <PrevButton swiperRef={swiperRef} />
            <NextButton swiperRef={swiperRef} />
            <div className="w-full max-w-5xl">
                <TabGroup>
                    {/* --- Заголовки вкладок --- */}
                    <TabList className="flex justify-around gap-1 rounded-3xl bg-white p-1">
                        {categories.map(({ name }) => (
                            <Tab
                                key={name}
                                className="rounded-3xl sm:px-3 px-1 py-2 sm:text-sm text-xs   font-semibold md:text-xl text-black/65 focus:outline-none data-hover:bg-black/15 data-selected:bg-[#6ed6f8] data-selected:text-white/90 transition duration-100 ease-in-out"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>

                    {/* --- Контент вкладок --- */}
                    <TabPanels className="mt-3">
                        {categories.map(({ name, posts }) => (
                            <TabPanel key={name} className="rounded-xl bg-white p-3">
                                {posts.length === 0 ? (
                                    <p className="text-center text-gray-500 py-10">No videos yet</p>

                                ) : (

                                    <Swiper
                                        modules={[Navigation, Pagination, Autoplay, Grid]}
                                        // slidesPerView={2} // скільки слайдів у рядку
                                        // grid={{ rows: 2 }} // скільки рядків
                                        spaceBetween={30}
                                        pagination={{ clickable: true }}
                                        // autoplay={{ delay: 5000 }}
                                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                                        breakpoints={{
                                            0: {
                                                slidesPerView: 1,
                                                grid: { rows: 1 },
                                            },
                                            768: {
                                                slidesPerView: 1,
                                                grid: { rows: 1 },
                                            },
                                            1024: {
                                                slidesPerView: 2,
                                                grid: { rows: 2 },
                                            },
                                        }}
                                        className="mySwiper"
                                    >

                                        {posts.map((post) => {
                                            const id = post.video.split("/embed/")[1];
                                            const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

                                            return (
                                                <>
                                                    <SwiperSlide key={post.id}>
                                                        <div className="relative rounded-md p-3 transition bg-[#005a86]/10 hover:bg-[#005a86]/30">
                                                            <p className="font-semibold text-black mb-2 h-[50px] text-sm md:text-xl">{post.title}</p>
                                                            {activeVideo === id ? (
                                                                <iframe
                                                                    src={`${post.video}?autoplay=1`}
                                                                    title={post.title}
                                                                    className="w-full aspect-video rounded-lg"
                                                                    allow="autoplay; encrypted-media"
                                                                    allowFullScreen
                                                                />
                                                            ) : (
                                                                <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                                                                    <img
                                                                        src={thumbnail}
                                                                        alt="Video preview"
                                                                        loading="lazy"
                                                                        className="w-full h-full object-cover"
                                                                    />
                                                                    <button
                                                                        onClick={() => setActiveVideo(id)}
                                                                        className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/60 transition text-white text-3xl"
                                                                    >
                                                                        ▶
                                                                    </button>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </SwiperSlide>

                                                </>
                                            );
                                        })}
                                    </Swiper>
                                )}
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </section >
    );
}
