namespace Template {
    export async function scene4(): ƒS.SceneReturn {
        console.log("scene4");
        
        await ƒS.Location.show(locations.waterfallhideout);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "scene 4")
        scenecount = "scene5";
        
        let firstDialogueElementAnswers ={
            Char1: characters.Main.Skill1,
            Char2: characters.Main.Skill2,
            Char3: characters.Main.Skill3,
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch(firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                skill1funktion();
                break;
            case firstDialogueElementAnswers.Char2:
                skill2funktion();
                //stats.char1.points = stats.char1.points + 1;
                break;
            
            case firstDialogueElementAnswers.Char3:
                skill3funktion();
                break;
        }

        return scenecount;
        
        

        

        
        
    }
}