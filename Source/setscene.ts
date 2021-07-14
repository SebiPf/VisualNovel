namespace fantasyrpg {
    export function setscene(){
        teststring = scenecount2.match(/\d+/)[0];
        test = parseInt(teststring);
        test += 1;
        console.log(test);
        scenecount = "scene"+ String(test);
        console.log(scenecount);
        return scenecount;
    }











}