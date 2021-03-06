export const deleteData = () => {
    const deleteUserId = async (user) => {
        try {
            const res = await fetch(`https://hello-world.innocv.com/api/User/${user.id}`, {
                method: "DELETE"
            });
            const response = JSON.stringify(res)
            return response;
        } catch (error) {
            console.log("There is an error: ", error)
            const response = {status: "Service comunication failed"};
            return JSON.stringify(response);
        };
    };
    return {deleteUserId};
};