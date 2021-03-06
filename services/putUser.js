export const putData = () => {
    const putUser = async (modifiedUser) => {
        try {
            const res = await fetch(`https://hello-world.innocv.com/api/User/`, {
                method: "PUT",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(modifiedUser)
            });
            const response = JSON.stringify(res)
            return response;
        } catch (error) {
            console.log("There is an error: ", error)
            const response = {status: "Service comunication failed"};
            return JSON.stringify(response);
        };
    };
    return {putUser};
};