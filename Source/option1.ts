namespace Template {
    export async function option1(): ƒS.SceneReturn {
        console.log("1stScene");
        characters.Main.pose.normal = "./Images/Characters/Archer/Archer1.png";
        characters.Main.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        characters.Main.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        characters.Main.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        characters.Main.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        characters.Main.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        characters.Main.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        characters.Main.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        characters.Main.Skill1 = "Bowshot";
        characters.Main.Skill2 = "Fastshot";
        characters.Main.Skill3 = "Rollshot";
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