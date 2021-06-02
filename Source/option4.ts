namespace Template {
    export async function option4(): ƒS.SceneReturn {
        console.log("4thScene");
        characters.Main.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        characters.Main.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        characters.Main.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        characters.Main.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        characters.Main.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        characters.Main.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        characters.Main.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove";
        characters.Main.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        characters.Main.Skill1 = "Skystrike";
        characters.Main.Skill2 = "Swordattack";
        characters.Main.Skill3 = "Swordslash";
        console.log(characters.Main.Skill1);
        await ƒS.Location.show(locations.seafire);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Main, characters.Main.pose.normal, ƒS.positionPercent(50, 90));
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