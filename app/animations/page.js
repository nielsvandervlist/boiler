'use client'
import Accordion from "@/components/Accordion";
import Modal from "@/components/Modal";
import ThemeSwapper from "@/components/ThemeSwapper";
import CardGrid from "@components/Animations/CardGrid";
import Tabs from "@components/Animations/Tabs";

export default function Animations(){

    const accordionItems = [
        {
            title: 'hello1',
            content: 'content1'
        },
        {
            title: 'hello2',
            content: 'content2'
        }
    ]
    
    return <div className="p-10 grid grid-cols-2 gap-12">
        <div>
        <h1 className="text-2xl font-bold mb-5">Modal</h1>
        <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Modal</button>
        <Modal id={'my_modal_1'}>
            This is the content
        </Modal>
        </div>
        <div>
            <h1>Theme Swapper</h1>
            <ThemeSwapper/>
        </div>
        <div>
            <h1>Accordion</h1>
            <Accordion items={accordionItems}/>
        </div>
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