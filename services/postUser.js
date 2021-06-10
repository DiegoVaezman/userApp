

export const postData = () => {
    
    const postUser = async (user) => {
       
        try {
            const res = await fetch(`https://hello-world.innocv.com/api/User`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(user)
            });
            const response = JSON.stringify(res)
            return response;
        } catch (error) {
            console.log("There is an error: ", error)
            response.status = 400;
            return response;
        }
    }
    return {postUser};
}