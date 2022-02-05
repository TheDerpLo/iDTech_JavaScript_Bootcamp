function isUpperCase(str) {
    return str === str.toUpperCase();
}

function greet(name){
    let nameObjType = typeof name;
    if(name){
        if(nameObjType == "object"){
            let numOfNames = name.length-1;
            let finalString = "";
            for(i = 0; i <= numOfNames; i++){
                if(i == numOfNames){
                    finalString += name[i];
                }
                else{
                    finalString += (name[i] + ',')
                };    
            };
            return("Hello, " + finalString);
        }
        else{
            if(isUpperCase(name)){
                return("HELLO, " + name)
            }
            else{
                return("Hello, " + name);
            }; 
        };   
    }
    else{
        return("Hello there!")
    };
};