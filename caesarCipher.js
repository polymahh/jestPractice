const alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const caesarCipher = (str,key) => {
    let result=[]
    str.split('').forEach(element => { 
        if(!alph.find((e) => {
        if(e === element || e === element.toLocaleLowerCase()) {
            return e
        }}
        )){
            result.push(element);
        }else {
            let res = checkCase(element,key)
            result.push(res);
        }
        
    });

    return result.join('');
}


const characterWrap = (indx) => {
    if(indx > alph.length-1){
        indx = indx - alph.length
        return indx
        
    }else {
        return indx
        
    }
}

const checkCase = (element, key)=>{
    if(alph.indexOf(element) === -1){
        
         let indx = alph.indexOf(element.toLocaleLowerCase())
         return alph[characterWrap(indx + key)].toUpperCase()
        
    }else {
        
        let indx = alph.indexOf(element) 
        return alph[characterWrap(indx + key)]

    }

}
export default caesarCipher