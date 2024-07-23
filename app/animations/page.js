'use client'
import CardGrid from "@components/Animations/CardGrid";
import Tabs from "@components/Animations/Tabs";

export default function Animations(){
    return <div className="p-10 grid grid-cols-2 gap-12">
        <div>
        <h1 className="text-2xl font-bold mb-5">Card Grid with Framer Motion</h1>
        <CardGrid/>
        </div>
        <div>
        <h1 className="text-2xl font-bold mb-5">Tabs with framer motion</h1>
        <Tabs/>
        </div>
    </div>
}