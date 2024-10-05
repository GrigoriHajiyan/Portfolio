import { useState, useEffect } from "react";

function getStorageValue(key,defaultValue) {
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue
}

 const useLocalStorege = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    },[key,value]);

    return [value,setValue]
}
export default useLocalStorege