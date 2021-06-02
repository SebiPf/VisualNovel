namespace Template {
    export async function SceneChange(): ƒS.SceneReturn {

            console.log("options");



            await ƒS.Location.show(locations.shore);
            await ƒS.update();
            await ƒS.Speech.tell(characters.Narrator, "Please ender your Name")
            //names eingabe
            //stats.Protagonist.name = await ƒS.Speech.getInput();
            characters.Main.name = await ƒS.Speech.getInput();
            characters.Main.name += ":  ";
            ƒS.Inventory.add(items.Healthpotion);
            ƒS.Inventory.add(items.Scroll);
            ƒS.Inventory.add(items.WaterBottle);
            ƒS.Inventory.add(items.EmptyBottle);
            ƒS.Inventory.add(items.Apple);
            ƒS.Inventory.add(items.Flower);
            await ƒS.Inventory.open();




            //await ƒS.Character.show(characters.Samara, characters.Samara.pose.normal, ƒS.positionPercent(10, 90))
            //await ƒS.Character.show(characters.Hando, characters.Hando.pose.normal, ƒS.positionPercent(35, 90))
            //await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.normal, ƒS.positionPercent(65, 90))
            //await ƒS.Character.show(characters.Adira, characters.Adira.pose.normal, ƒS.positionPercent(90, 90))

            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike1, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike2, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike3, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike4, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike5, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike6, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike7, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1);
            await ƒS.Character.hideAll();


            await ƒS.update();
            await ƒS.Speech.tell(characters.Narrator, "Test")
            await ƒS.Speech.tell(characters.Narrator, "")
            // text ohne schreib animation
            //await ƒS.Location.show(locations.charselect);
            await ƒS.Character.hideAll()
            await ƒS.Location.show(locations.Black);
            await ƒS.update();
            //ƒS.Sound.play(sound.click, 1);

            let firstDialogueElementAnswers = {
                Char1: "Option 1",
                Char2: "Option 2",
                Char3: "Option 3",
                Char4: "Option 4"
            };

            let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog2");
            //stats.char1.points = stats.char1.points + 5;
            switch (firstDialogueElement) {
                case firstDialogueElementAnswers.Char1:
                    //continue write on this path here
                    scenecount = "first";
                    return scenecount
                    break;
                case firstDialogueElementAnswers.Char2:
                    scenecount = "second";
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

                    //characters.Main.pose.skystrike1 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_1.png" ;
                    //characters.Main.pose.skystrike2 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_2.png" ;
                    //characters.Main.pose.skystrike3 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_3.png" ;
                    //characters.Main.pose.skystrike4 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_4.png" ;
                    //characters.Main.pose.skystrike5 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_5.png" ;
                    //characters.Main.pose.skystrike6 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_6.png" ;
                    //characters.Main.pose.skystrike7 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_7.png" ;









                    return scenecount
                    break;
            
            }
        
       //Musik aus
       //ƒS.Sound.fade(sound.backgroundTheme, 0,1)
       //await ƒS.Speech.tell(characters.Narrator, stats.char1.points.toString())
    }
}