

export const postData = () => {
    
    const postUser = async (user) => {
        console.log("se hace post desde postUser")
        
        const json = JSON.stringify(user)
        console.log(typeof json)
        console.log(json)
        try {
            const res = await fetch(`https://hello-world.innocv.com/api/User/`, {
                method: "POST",
                headers: {
                    "Content-Type": 'application/json'
                },
                body: json
            });
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return {postUser};
}