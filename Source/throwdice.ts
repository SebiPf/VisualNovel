namespace Template {
    export async function throwdice(){
        console.log("throw dice");
        stats.random = Math.floor(Math.random() * stats.number + 1);
        console.log("random number is " + stats.random);
    }
}