import exampleList from "../data/exampleList.json";

export const exampleData = () => {
    const getExampleUsers = async () => {
        const list = exampleList;
        for (let i = 0; i < list.length; i++){
            const random = await fetch('https://randomuser.me/api/', {
            });
            const randomUserInfo = await random.json()
            list[i].userInfo = randomUserInfo
        };
        return list;
    };
    return {getExampleUsers};
};