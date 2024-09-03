'use client'
import {useSession} from "next-auth/react";
import CreatePostForm from "@components/Forms/CreatePostForm";
export default function Create(){

    const { data: session } = useSession();

    if(!session){
        return <></>
    }

    return <div>
        <CreatePostForm email={session.user.email}/>
    </div>
}