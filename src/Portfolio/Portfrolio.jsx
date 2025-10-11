import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import Slide from "react-awesome-reveal"


const videos = [
    "https://www.youtube.com/embed/uchFQCvaqy8",
    "https://youtube.com/embed/M5RnIeJTsi8",
    "https://www.youtube.com/embed/BZrOUVdTeX4",
    "https://www.youtube.com/embed/mqj38wCAmBU",
];


const categories = [
    {
        name: "Logos",
        posts: [
            { id: 1, title: "Logo Template", video: videos[1] },
        ],
    },
    {
        name: "Shorts",
        posts: [
            { id: 1, title: "Podcast short term tempelate", video: videos[0] },
            { id: 2, title: "The worst advice we've ever heard about coffee", video: videos[3] },
        ],
    },
    {
        name: "Animated",
        posts: [
        ],
    },
    {
        name: "Explainer",
        posts: [
            { id: 1, title: "App explainer video template", video: videos[2] },
        ],
    },
];

export default function Example() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <div className="flex w-full justify-center px-4 pt-24 bg-black" id="Portfolio">
            <div className="w-full max-w-5xl">
                <TabGroup>
                    {/* --- Заголовки вкладок --- */}
                    <TabList className="flex justify-around gap-1 rounded-xl bg-white/10 p-1">
                        {categories.map(({ name }) => (
                            <Tab
                                key={name}
                                className="rounded sm:px-3 px-0 py-1 sm:text-sm text-xs font-semibold md:text-xl text-white focus:outline-none data-hover:bg-[#0a2f42] data-selected:bg-[#005a86]"
                            >
                                {name}
                            </Tab>
                        ))}
                    </TabList>

                    {/* --- Контент вкладок --- */}
                    <TabPanels className="mt-3">
                        {categories.map(({ name, posts }) => (
                            <TabPanel key={name} className="rounded-xl bg-white/5 p-3">
                                <ul className="grid  gap-6">
                                    {posts.map((post) => {
                                        const id = post.video.split("/embed/")[1]; // Витягуємо ID відео
                                        const thumbnail = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

                                        return (
                                            <Slide triggerOnce key={post.id} >
                                                <li
                                                    className="relative rounded-md p-3 transition hover:bg-[#005a86]/30"
                                                >
                                                    <p className="font-semibold text-white mb-2">{post.title}</p>

                                                    {/* --- Lazy video preview --- */}
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
                                                </li>
                                            </Slide>
                                        );
                                    })}
                                </ul>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
}
