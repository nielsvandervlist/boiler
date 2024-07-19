// app/page.js
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Page() {
    const session = await getServerSession(authOptions);

    if(!session){
        return <div>No user</div>
    }

    return <div>Hello</div>;
}
