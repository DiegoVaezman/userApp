

export const deleteData = () => {
    const deleteUserId = async (user) => {
        try {
            const res = await fetch(`https://hello-world.innocv.com/api/User/${user.id}`, {
                method: "DELETE"
            });
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return {deleteUserId};
}