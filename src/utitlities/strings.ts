export const capitalizeFirstLetter = (word: string)=>{
    return word.slice(0,1).toLocaleUpperCase() + word.slice(1).toLocaleLowerCase()
}