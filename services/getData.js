import { useState } from "react";

export const getData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const getUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch("https://hello-world.innocv.com/api/User", {
                method: "GET",
                headers: {
                    Accept: 'application/json'
                }
            });
            const response = JSON.stringify(res);
            const data = await res.json();
            
            for (let i = 0; i < data.length; i++){
                const random = await fetch('https://randomuser.me/api/', {
                });
                const randomUserInfo = await random.json();
                data[i].userInfo = randomUserInfo;
            };
            
            setLoading(false)
            setData(data)
            return response;
        } catch (error) {
            console.log("There is an error: ", error);
            setLoading(false);
            const response = {status: "Service comunication failed"};
            return JSON.stringify(response);
        };
    };
    return { data, setData, getUsers, loading};
};