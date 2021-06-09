import { useState } from "react";


export const getData = () => {
    const [data, setData] = useState([]);
    const getUsers = async () => {
        try {
            const res = await fetch("https://hello-world.innocv.com/api/User", {
                method: "GET",
                headers: {
                    Accept: 'application/json',
                }
            });
            const data = await res.json();

            // for (let i = 0; i < data.length; i++){
            //     const imgRes = await fetch("https://api.generated.photos/api/v1/faces?per_page=1", {
            //         headers: {
            //             Authorization: 'API-Key m_XB9bdf1J5pPtw4valOdg'
            //         }
            //     })
            //     const randomUserInfo = await imgRes.json()
            //     data[i].userInfo = randomUserInfo
            // }
            // console.log(data[0].userInfo.faces[0].urls)

            for (let i = 0; i < data.length; i++){
                const random = await fetch('https://randomuser.me/api/', {
                })
                const randomUserInfo = await random.json()
                data[i].userInfo = randomUserInfo
            }
            // console.log(data)

            setData(data)
        } catch (error) {
            console.log(error)
        }
        
    }

    return { data, getUsers}
}