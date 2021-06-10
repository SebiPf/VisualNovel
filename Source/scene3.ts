namespace Template {
    export async function scene3(): ƒS.SceneReturn {
        console.log("scene3");
        
        await ƒS.Location.show(locations.seafire);
        await ƒS.update(1);
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(50, 90));
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "scene 3")

        let firstDialogueElementAnswers ={
            Char1: stats.Main.Skill1,
            Char2: stats.Main.Skill2,
            Char3: stats.Main.Skill3,
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch(firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                scenecount2 = scenecount;
                scenecount = "skill1";
                return scenecount
                break;
            case firstDialogueElementAnswers.Char2:
                scenecount2 = scenecount;
                scenecount = "skill2";
                return scenecount
                //stats.char1.points = stats.char1.points + 1;
                break;
            
            case firstDialogueElementAnswers.Char3:
                scenecount2 = scenecount;
                scenecount = "skill3";
                

                return scenecount
                break;
        }

        

        
        
    }
}