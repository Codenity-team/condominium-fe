

export const setLocalSotrage = (key: string, data: any) =>{
    localStorage.setItem(key, JSON.stringify(data));
}
export const getLocalSotrage = (key: string) =>{
    const dataStr = localStorage.getItem(key);
    if(dataStr != null){
        return JSON.parse(dataStr);
    }
    return null;
}