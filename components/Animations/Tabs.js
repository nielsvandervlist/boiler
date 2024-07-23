import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const allIngredients = [
    { icon: "🍅", label: "Tomato" },
    { icon: "🥬", label: "Lettuce" },
    { icon: "🧀", label: "Cheese" },
    { icon: "🥕", label: "Carrot" },
    { icon: "🍌", label: "Banana" },
    { icon: "🫐", label: "Blueberries" },
    { icon: "🥂", label: "Champers?" }
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

function getNextIngredient(ingredients) {
    const existing = new Set(ingredients);
    return allIngredients.find((ingredient) => !existing.has(ingredient));
}

export default function Tabs() {
    const [selectedTab, setSelectedTab] = useState(tabs[0]);

    return (
        <div className="w-80 h-72 rounded-lg bg-white overflow-hidden shadow-lg flex flex-col">
            <nav className="bg-gray-100 p-2 border-b border-gray-200 rounded-t-lg h-11">
                <ul className="flex w-full">
                    {tabs.map((item) => (
                        <li
                            key={item.label}
                            className={`relative w-full p-2.5 flex justify-between items-center cursor-pointer bg-white rounded-t-lg ${
                                item === selectedTab ? "bg-gray-200" : ""
                            }`}
                            onClick={() => setSelectedTab(item)}
                        >
                            {`${item.icon} ${item.label}`}
                            {item === selectedTab && (
                                <motion.div
                                    className="absolute bottom-0 left-0 right-0 h-px bg-blue-500"
                                    layoutId="underline"
                                />
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="flex justify-center items-center text-8xl flex-grow select-none">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedTab ? selectedTab.label : "empty"}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {selectedTab ? selectedTab.icon : "😋"}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
}
