
export function ReplacerFunc(dataObj:Object) {

    const replacer = (key:string, value:any) => { 

        if (key === "password") return undefined; 
        if (value instanceof Date) return value.toISOString(); 

        return value; 
    };
    
    const jsonString = JSON.stringify({...dataObj}, replacer, 2);

    return jsonString;

}

