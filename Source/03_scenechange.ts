namespace Template {
    export async function SceneChange(): ƒS.SceneReturn {
        console.log("options");

        let text = {
            Girl: {
                T0000: "Are you going to the park today?",
                T0001: "Yes"
            }
        };

        await ƒS.Location.show(locations.shore);
        await ƒS.update();
        await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await ƒS.update();
        //names eingabe
        //stats.Protagonist.name = await ƒS.Speech.getInput();

        // text ohne schreib animation
        await ƒS.Speech.tell(characters.Ryu, text.Girl.T0000)
        await ƒS.Character.hide(characters.Ryu)
        await ƒS.update();
        await ƒS.Speech.set(characters.Narrator, "");
        await ƒS.update();
        await ƒS.Location.show(locations.charselect);
        await ƒS.update();
        //ƒS.Sound.play(sound.click, 1);

        let firstDialogueElementAnswers ={
            Char1: "Option1",
            Char2: "Option2",
            Char3: "Option3",
            Char4: "Option4"
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "button");
        //stats.char1.points = stats.char1.points + 5;
        switch(firstDialogueElement) {
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

       //Musik aus
       //ƒS.Sound.fade(sound.backgroundTheme, 0,1)
       //await ƒS.Speech.tell(characters.Narrator, stats.char1.points.toString())
    }
}