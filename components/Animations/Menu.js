import { useState, useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";
import Link from "next/link";

function useMenuAnimation(isOpen) {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        const menuAnimations = isOpen
            ? [
                ["nav", { transform: "translateX(0%)" }, { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 }],
                ["li", { transform: "scale(1)", opacity: 1, filter: "blur(0px)" }, { delay: stagger(0.05), at: "-0.1" }]
            ]
            : [
                ["li", { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" }, { delay: stagger(0.05, { from: "last" }), at: "<" }],
                ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }]
            ];

        animate([
            ["path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }, { at: "<" }],
            ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
            ["path.bottom", { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" }, { at: "<" }],
            ...menuAnimations
        ]);
    }, [isOpen]);

    return scope;
}

const MenuNav = () => {
    return (
        <nav className="fixed z-20 top-0 left-0 bottom-0 w-[400px] bg-primary pt-[100px] transform translate-x-[-100%] will-change-transform">
            <ul className="flex flex-col gap-[10px] p-[15px] list-none m-0">
                <li className="text-white font-bold text-[48px] p-[10px] transform origin-[-20px_50%] will-change-transform opacity-0 scale-50 blur-[10px]"><Link href='/portfolio'>Portfolio</Link></li>
                <li className="text-white font-bold text-[48px] p-[10px] transform origin-[-20px_50%] will-change-transform opacity-0 scale-50 blur-[10px]"><Link href='/about'>About</Link></li>
                <li className="text-white font-bold text-[48px] p-[10px] transform origin-[-20px_50%] will-change-transform opacity-0 scale-50 blur-[10px]"><Link href='/contact'>Contact</Link></li>
                <li className="text-white font-bold text-[48px] p-[10px] transform origin-[-20px_50%] will-change-transform opacity-0 scale-50 blur-[10px]"><Link href='/search'>Search</Link></li>
            </ul>
        </nav>
    );
};

const Path = (props) => (
    <path
        fill="transparent"
        strokeWidth="3"
        stroke="#4a00ff"
        strokeLinecap="round"
        {...props}
    />
);

const MenuToggle = ({ toggle }) => (
    <button className="z-20 btn relative" onClick={toggle}>
        <svg width="23" height="18" viewBox="0 0 23 18">
            <Path d="M 2 2.5 L 20 2.5" className="top" variants={{ closed: { d: "M 2 2.5 L 20 2.5" }, open: { d: "M 3 16.5 L 17 2.5" } }} />
            <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
            <Path d="M 2 16.346 L 20 16.346" className="bottom" variants={{ closed: { d: "M 2 16.346 L 20 16.346" }, open: { d: "M 3 2.5 L 17 16.346" } }} />
        </svg>
    </button>
);

export default function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    const scope = useMenuAnimation(isOpen);

    return (
        <div ref={scope}>
            <MenuNav />
            <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </div>
    );
}
