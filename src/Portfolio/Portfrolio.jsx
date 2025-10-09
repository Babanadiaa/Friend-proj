import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { useState } from "react";
import Slide from "react-awesome-reveal"


const videos = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/3JZ_D3ELwOQ",
    "https://www.youtube.com/embed/l9PxOanFjxQ",
    "https://www.youtube.com/embed/tAGnKpE4NCI",
    "https://www.youtube.com/embed/kXYiU_JCYtU",
    "https://www.youtube.com/embed/2Vv-BfVoq4g",
    "https://www.youtube.com/embed/9bZkp7q19f0",
    "https://www.youtube.com/embed/60ItHLz5WEA",
    "https://www.youtube.com/embed/fJ9rUzIMcZQ",
    "https://www.youtube.com/embed/OPf0YbXqDm0",
];

const categories = [
    {
        name: "Logos",
        posts: [
            { id: 1, title: "Does drinking coffee make you smarter?", video: videos[0] },
            { id: 2, title: "So you've bought coffee... now what?", video: videos[1] },
        ],
    },
    {
        name: "Shorts",
        posts: [
            { id: 1, title: "Is tech making coffee better or worse?", video: videos[2] },
            { id: 2, title: "The most innovative things happening in coffee", video: videos[3] },
        ],
    },
    {
        name: "Animated",
        posts: [
            { id: 1, title: "Ask Me Anything: 10 answers to your questions about coffee", video: videos[4] },
            { id: 2, title: "The worst advice we've ever heard about coffee", video: videos[5] },
        ],
    },
    {
        name: "Any",
        posts: [
            { id: 1, title: "Ask Me Anything: 10 answers to your questions about coffee", video: videos[6] },
            { id: 2, title: "The worst advice we've ever heard about coffee", video: videos[7] },
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
                                className="rounded px-3 py-1 text-sm font-semibold text-white focus:outline-none data-hover:bg-[#0a2f42] data-selected:bg-[#005a86]"
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
                                            <Slide direction="up">
                                                <li
                                                    key={post.id}
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
