namespace Template {
    export async function option2(): ƒS.SceneReturn{
        console.log("2ndScene");
        characters.Main.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        characters.Main.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        characters.Main.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        characters.Main.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        characters.Main.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        characters.Main.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        characters.Main.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        characters.Main.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        characters.Main.Skill1 = "Blindinglight";
        characters.Main.Skill2 = "Swordswing";
        characters.Main.Skill3 = "Windburst";
        console.log(characters.Main.Skill1);
        await ƒS.Location.show(locations.seafire);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Main, characters.Main.pose.normal, ƒS.positionPercent(30, 100));
        await ƒS.update(1);

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
                scenecount = "skill1";
                return scenecount
                break;
            case firstDialogueElementAnswers.Char2:
                scenecount = "skill2";
                await ƒS.update();
                return scenecount
                //stats.char1.points = stats.char1.points + 1;
                break;
            
            case firstDialogueElementAnswers.Char3:
                scenecount = "skill3";
                return scenecount
                break;
        }
        
    }
}