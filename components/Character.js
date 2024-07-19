import { useState } from "react"

export function Character(){

    const person = useState({
        'name': '',
        'subject': '',
        'clothes': [],
        'email': '',
    })

    return <div>
        <h1>Hello, here you can create character and search for a cause that fits you!</h1>
        <p>No login is required</p>

        <div>
            <div className="">
                
            </div>
        </div>
    </div>
}