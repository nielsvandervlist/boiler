'use client'
import CardGrid from "@components/Animations/CardGrid";
import Tabs from "@components/Animations/Tabs";

export default function Animations(){
    return <div className="p-10">
        <h1 className="text-2xl font-bold mb-5">Card Grid with Framer Motion</h1>
        <CardGrid/>
        <h1 className="text-2xl font-bold my-5">Tabs with framer motion</h1>
        <Tabs/>
    </div>
}