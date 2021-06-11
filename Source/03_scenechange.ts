namespace Template {
    export async function scene1(): ƒS.SceneReturn {

            console.log("options");



            await ƒS.Location.show(locations.white);
            //await ƒS.Character.show(characters.Adira, characters.Adira.pose.normal, ƒS.positionPercent(50, 90))
            await ƒS.update();
            await ƒS.Text.print("Please enter your Name")
            //names eingabe
            //stats.Protagonist.name = await ƒS.Speech.getInput();
            stats.Main.name = await ƒS.Speech.getInput();
            //characters.Main.name += ":  ";
            //ƒS.Inventory.add(items.Healthpotion);
            //ƒS.Inventory.add(items.Scroll);
            //ƒS.Inventory.add(items.WaterBottle);
            //ƒS.Inventory.add(items.EmptyBottle);
            //ƒS.Inventory.add(items.Apple);
            //ƒS.Inventory.add(items.Flower);
            //await ƒS.Inventory.open();




            //await ƒS.Character.show(characters.Samara, characters.Samara.pose.normal, ƒS.positionPercent(10, 90))
            //await ƒS.Character.show(characters.Hando, characters.Hando.pose.normal, ƒS.positionPercent(35, 90))
            //await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.normal, ƒS.positionPercent(65, 90))
            //await ƒS.Character.show(characters.Adira, characters.Adira.pose.normal, ƒS.positionPercent(90, 90))

            await ƒS.update();
            await ƒS.Text.print("Welcome to your Adventure " + stats.Main.name);
            await ƒS.Text.print("The first think you need to do is choose a Class")
            await ƒS.Text.print("But be aware all your choices will have a effect on the outcome of your Adventure")
            await ƒS.Text.print("Even if some decisions seem insignificant")
            await ƒS.Text.print("So always choose wisely")
            await ƒS.Text.print("You may open your Inventory with I")
            // text ohne schreib animation
            //await ƒS.Location.show(locations.charselect);
            await ƒS.Character.hideAll()
            await ƒS.Speech.hide();
            await ƒS.Location.show(locations.Black);
            await ƒS.update();
            //ƒS.Sound.play(sound.click, 1);

            let firstDialogueElementAnswers = {
                Char1: "char 1",
                Char2: "char 2",
                Char3: "char 3",
                Char4: "char 4"
            };

            let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog2");
            //stats.char1.points = stats.char1.points + 5;
            switch (firstDialogueElement) {
                case firstDialogueElementAnswers.Char1:
                    //continue write on this path here
                    scenecount = "Archer1";
                    console.log("hello my scenecount ist " + scenecount);
                    return scenecount
                    break;
                case firstDialogueElementAnswers.Char2:
                    scenecount = "Nightstalker1";
                    console.log("hello my scenecount ist " + scenecount);
                    return scenecount
                    //stats.char1.points = stats.char1.points + 1;
                    break;

                case firstDialogueElementAnswers.Char3:
                    scenecount = "ArchMage1";
                    console.log("hello my scenecount ist " + scenecount);
                    return scenecount
                    break;
                case firstDialogueElementAnswers.Char4:
                    scenecount = "Swordwielder1";
                    console.log("hello my scenecount ist " + scenecount);

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