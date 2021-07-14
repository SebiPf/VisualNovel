namespace fantasyrpg {
    export async function scene5(): ƒS.SceneReturn {
        console.log("scene5");
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Text.print("Who do you want to talk to?");
        let firstDialogueElementAnswers = {
            side1: stats.Side1.name,
            side2: stats.Side2.name,
            side3: stats.Side3.name,
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.side1:
                stats.relside1 += 5;
                
                scenecount = "scene6";
                return scenecount
            case firstDialogueElementAnswers.side2:

                stats.relside2 += 5;
                scenecount = "scene6";
                return scenecount
            case firstDialogueElementAnswers.side3:

                stats.relside3 += 5;
                scenecount = "scene6";
                return scenecount
        }
        scenecount = "scene6";
        return scenecount;
        
    }
}