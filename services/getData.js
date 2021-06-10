import { useState } from "react";


export const getData = () => {
    const [data, setData] = useState([]);

    const getUsers = async () => {
        try {
            const res = await fetch("https://hello-world.innocv.com/api/User", {
                method: "GET",
                headers: {
                    Accept: 'application/json'
                }
            });
            const response = JSON.stringify(res)
            console.log(response)

            const data = await res.json();
            
            for (let i = 0; i < data.length; i++){
                const random = await fetch('https://randomuser.me/api/', {
                })
                const randomUserInfo = await random.json()
                data[i].userInfo = randomUserInfo
            }
            
            setData(data)
            return response;
        } catch (error) {
            console.log("hay un error: ", error)
            const response = {status: 400}
            return response;
        }
        
    }

    return { data, setData, getUsers}
}