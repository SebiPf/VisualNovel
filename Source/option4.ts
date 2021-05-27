namespace Template {
    export async function option4(): ƒS.SceneReturn {
        console.log("4thScene");
        await ƒS.Location.show(locations.woodscamp);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        //scenecount = "third";
       // return scenecount
       
       let firstDialogueElementAnswers ={
        Char1: "1",
        Char2: "2",
        Char3: "3",
        Char4: "4"
    };

    let secondDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "button1");
    //stats.char1.points = stats.char1.points + 5;
    switch(secondDialogueElement) {
        case firstDialogueElementAnswers.Char1:
            //continue write on this path here
            scenecount = "first";
            return scenecount
            break;
        case firstDialogueElementAnswers.Char2:
            scenecount = "second";
            id: "second";
            console.log(scenecount)
            await ƒS.update();
            return scenecount
            //stats.char1.points = stats.char1.points + 1;
            break;
        
        case firstDialogueElementAnswers.Char3:
            scenecount = "third";
            return scenecount
            break;
        case firstDialogueElementAnswers.Char4:   
            scenecount = "fourth";
            return scenecount 
            break;
    }
    scenecount = ".";
       return scenecount
    }
}