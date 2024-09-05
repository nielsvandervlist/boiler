// app/page.js
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import Hero from "@components/Landingpage/Hero";
import Features from "@components/Landingpage/Features";
import GlobeComponent from "@components/Landingpage/Globe";
import Phone from "@components/Landingpage/Phone";

export default async function Page() {
    const session = await getServerSession(authOptions);

    if(!session){
        return <div>No user</div>
    }

    return <div className={'flex flex-col gap-8 py-8'}>
        <Hero/>
        <Features/>
        <Phone/>
    </div>;
}
