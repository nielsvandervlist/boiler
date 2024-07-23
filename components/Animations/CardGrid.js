// components/CardGrid.js
import { useState } from 'react';
import { motion } from 'framer-motion';

const cards = [1, 2, 3, 4];

export default function CardGrid() {
    const [selectedCard, setSelectedCard] = useState(cards[0]); // Set the first card as active initially

    return (
        <div className="grid grid-cols-12 gap-5 w-full mx-auto">
            {cards.map((card) => {
                const isSelected = selectedCard === card;
                const colSpan = isSelected ? 'col-span-8 z-20' : 'col-span-4';
                const rowSpan = isSelected ? 'row-span-3' : 'row-span-1';
                const order = isSelected ? 'order-first' : '';
                const content = isSelected ? 'block' : 'hidden';

                return (
                    <motion.div
                        key={card}
                        className={`${colSpan} ${rowSpan} ${order} bg-white border border-gray-300 rounded-lg p-5 cursor-pointer shadow-lg`}
                        onClick={() => setSelectedCard(card)}
                        layout
                        transition={{ duration: 0.5 }}
                    >
                        <div className="">
                            <div className={`${content}`}>
                                content
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}
