import { useState } from "react";


export const colorTheme = () => {
    const [appColor, setAppColor] = useState("#00B9FF");

    const RandomGenerate = () => {
        return Math.floor(Math.random() * 255).toString(16);
    };
    const colorHex = () => {
        const localColor = "#" + RandomGenerate() + RandomGenerate() + RandomGenerate();
        setAppColor(`${localColor}`);
        return
    };

    return { appColor, colorHex }
};