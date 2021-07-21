namespace fantasyrpg {
    export async function scene8(): ƒS.SceneReturn {
        console.log("scene8 start");
        await ƒS.Location.show(locations.Black); //add view img
        await ƒS.update(2);
        await ƒS.Text.print("On the next day you and your friends continue your adventure");
        //await ƒS.Text.print("You and your friends walked ");

        await ƒS.Location.show(locations.trailtomountain);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);

        await ƒS.Text.print("After a lot of walking you see a big waterfall");
        await ƒS.Location.show(locations.waterfall);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        await ƒS.Text.print("On top of the waterfall you see a town");
        await ƒS.Text.print("You need to decide if you need to go to the town or if you have enought supplies left");
        await ƒS.Text.print("But going to the town would mean making a detour what would cost time");
        await ƒS.Location.show(locations.kreuzung2);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);


        let firstDecisionElementAnswers = {
            city: "Go to the town",
            continue: "Continue your path",

        };

        let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog1");
        switch (firstDecisionElement) {
            case firstDecisionElementAnswers.city:
                await ƒS.Location.show(locations.villagecenter);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);


                let thirdDecisionElementAnswers = {
                    alchemist: "Search the Alchemist",
                    tower: "Inspect the tower",
                    center: "Go to the town center"

                };

                let thirdDecisionElement = await ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog1");
                switch (thirdDecisionElement) {
                    case thirdDecisionElementAnswers.alchemist:
                        await ƒS.Location.show(locations.alchemist);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        await ƒS.Text.print("You went searching for the Alchemist and succeeded");
                        await ƒS.Text.print("Behind the alchemist you see a red potion but you don`t have any money.");
                        await ƒS.Text.print("You try convincing her that yuo need the potion for something important");
                        stats.number = (stats.relside1 + stats.relside2 + stats.relside3) / 10
                        let Throwdice = {
                            Throwdice: "Feel Lucky?",
                        };
                        let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
                        switch (Dicethrow) {
                            case Throwdice.Throwdice:
                                throwdice();
                        }


                        if (stats.random >= 10) {


                            await ƒS.Text.print("You managed to convince the Alchemist and she gave you the potion");
                            ƒS.Inventory.add(items.Healthpotion)

                            scenecount = "scene8"
                            return scenecount;
                        }
                        else {

                            await ƒS.Text.print("You failed to convince her and went off empty handed");
                            await ƒS.Text.print("She does not give you the Potion instead she gives you a advice");
                            ƒS.Inventory.add(items.advice)

                            await ƒS.Text.print("Open your inventor and look at it maybe you can decifer what it is saying");
                            stats.message = await ƒS.Speech.getInput();

                            if (stats.message == "You can't defeat the Golem") {
                                await ƒS.Text.print("You decifered the code but what does it mean?");
                                stats.retreat = true;
                            }
                            else {
                                await ƒS.Text.print("Maybe look at it again a bit later");
                            }

                        }




                        await ƒS.Text.print("You and your friends decided to leave the city by climbing down the Waterfall");
                        await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                        await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                        await ƒS.Text.print("It turns out it is a cave");
                        await ƒS.Text.print("You and your friends decide to enter the Cave");


                    case thirdDecisionElementAnswers.tower:
                        await ƒS.Location.show(locations.tower);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        await ƒS.Text.print("As you are walking through the town you see a broken tower");
                        await ƒS.Text.print("You and your friends walk to it");
                        await ƒS.Text.print("After ariving at the tower you start looking around");
                        await ƒS.Text.print("As you are walking through the town you see a broken tower");
                        stats.number = (stats.relside1 + stats.relside2 + stats.relside3) / 10
                        let Throwdice2 = {
                            Throwdice2: "Feel Lucky?",
                        };
                        let Dicethrow2 = await ƒS.Menu.getInput(Throwdice2, "dialog1");
                        switch (Dicethrow2) {
                            case Throwdice2.Throwdice2:
                                throwdice();
                        }

                        if (stats.random >= 12) {
                            await ƒS.Text.print(stats.Side2.name + " found a lose stoneplate");
                            // conversation and lifting plate together
                            await ƒS.Text.print("Unterneigth the plate " + stats.Side2.name + " finds a scroll and hands it to you");
                            ƒS.Inventory.add(items.Scroll)
                            await ƒS.Text.print("You keep searching for a bit but you can`t find anything else");
                            await ƒS.Text.print("You and your friends decide to leave the city by climbing down the waterfall");
                            await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await ƒS.Text.print("It turns out it is a cave");
                            await ƒS.Text.print("You and your friends decide to enter the Cave");
                            scenecount = "scene9"
                            return scenecount
                        }
                        else {
                            await ƒS.Text.print("You look around in the tower but can`t find anything");
                            await ƒS.Text.print("After looking around for a while You and your friends decide to leave the city by climbing down the waterfall");
                            await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await ƒS.Text.print("It turns out it is a cave");
                            await ƒS.Text.print("You and your friends decide to enter the Cave");
                            scenecount = "scene9"
                            return scenecount
                        }















                    case thirdDecisionElementAnswers.center:
                        await ƒS.Location.show(locations.villagecenter);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);


                        await ƒS.Text.print("You and your friends went to the town center and started to talk");



                        // conversation

                        if (stats.chosenrel != "") {
                            await ƒS.Text.print("After talking for a while you talk to " + stats.chosenrel);
                            stats.flowercheck = true;

                            //conversation can use flower here




                            await ƒS.Text.print("You look around in the tower but can`t find anything");
                            await ƒS.Text.print("After looking around for a while You and your friends decide to leave the city by climbing down the waterfall");
                            await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await ƒS.Text.print("It turns out it is a cave");
                            await ƒS.Text.print("You and your friends decide to enter the Cave");

                            if (stats.relside1 >= 100 || stats.relside2 >= 100 || stats.relside3 >= 100) {
                                scenecount = "loveending"
                            }
                            else {
                                scenecount = "scene9"
                            }
                            stats.flowercheck = false;
                            return scenecount;
                        }
                        else {



                            // conversation




                            await ƒS.Text.print("You look around in the tower but can`t find anything");
                            await ƒS.Text.print("After looking around for a while You and your friends decide to leave the city by climbing down the waterfall");
                            await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await ƒS.Text.print("It turns out it is a cave");
                            await ƒS.Text.print("You and your friends decide to enter the Cave");
                            stats.relside1 += 5;
                            stats.relside2 += 5;
                            stats.relside3 += 5;
                            scenecount = "scene9"
                            return scenecount;
                        }





                    case firstDecisionElementAnswers.continue:
                        await ƒS.Location.show(locations.waterfall);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        await ƒS.Text.print("On your way beneath the waterfalls you encounter another monster");
                        await ƒS.Text.print("The monster looks like it`s going to attack!");
                        await ƒS.Text.print("What are you going to do?");

                        let secondDecisionElementAnswers = {
                            alone: "Attack it alone",
                            together: "Fight with your friends",

                        };

                        let secondDecisionElement = await ƒS.Menu.getInput(secondDecisionElementAnswers, "dialog1");
                        switch (secondDecisionElement) {
                            case secondDecisionElementAnswers.alone:
                                
                                await ƒS.Location.show(locations.fight);
                                await ƒS.update(transition.fight.duration, transition.fight.alpha, transition.fight.edge);
                                stats.number = stats.Main.Strength / 10
                                let Throwdice = {
                                    Throwdice: "Feel Lucky?",
                                };
                                let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
                                switch (Dicethrow) {
                                    case Throwdice.Throwdice:
                                        throwdice();
                                }
                                let skillselectionAnswer2 = {
                                    skill1: stats.Main.Skill1,
                                    skill2: stats.Main.Skill2,
                                    skill3: stats.Main.Skill3,

                                };

                                let skillselection2 = await ƒS.Menu.getInput(skillselectionAnswer2, "dialog1");
                                switch (skillselection2) {
                                    case skillselectionAnswer2.skill1:

                                        skill1funktion();

                                    case skillselectionAnswer2.skill1:

                                        skill2funktion();

                                    case skillselectionAnswer2.skill1:
                                        skill3funktion();
                                }


                                if (stats.random >= 6) {
                                    stats.number = stats.Main.Strength / 10

                                    await ƒS.Text.print("You defeated the monster");
                                    stats.Main.Strength += 10;
                                    scenecount = "scene9"
                                    return scenecount;
                                }
                                else {
                                    await ƒS.Text.print("You tired to defeat it alone but failed");
                                    if(stats.Main.name == "Samara"){
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot1, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot2, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot3, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot4, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot5, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot6, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot7, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot8, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot9, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot10, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot11, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Hando, characters.Hando.pose.rollshot12, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.update(0.1);
                                    }
                                    else{
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike1, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike2, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike3, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike4, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike5, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike6, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike7, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike8, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.Character.show(characters.Samara, characters.Samara.pose.windstrike9, ƒS.positionPercent(50, 90))
                                        await ƒS.update(0.1);
                                        await ƒS.Character.hideAll();
                                        await ƒS.update(0.1);
                                    }
                                    await ƒS.Text.print("Your friends came to save you");
                                    stats.Main.Strength += 5
                                }

                                await ƒS.Text.print("After your fight you see nomething behind the waterfall so you decide to go trough the pond infront of the waterfall and enter the cave behind the waterfall");
                                await ƒS.Location.show(locations.cave);
                                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                                scenecount = "scene9"
                                return scenecount

                        }
                    case secondDecisionElementAnswers.together:
                        await ƒS.Location.show(locations.fight);
                        await ƒS.update(transition.fight.duration, transition.fight.alpha, transition.fight.edge);
                        let skillselectionAnswer = {
                            skill1: stats.Main.Skill1,
                            skill2: stats.Main.Skill2,
                            skill3: stats.Main.Skill3,

                        };

                        let skillselection = await ƒS.Menu.getInput(skillselectionAnswer, "dialog1");
                        switch (skillselection) {
                            case skillselectionAnswer.skill1:

                                skill1funktion();

                            case skillselectionAnswer.skill1:

                                skill2funktion();

                            case skillselectionAnswer.skill1:
                                skill3funktion();
                        }
                        if(stats.Main.name == "Samara"){
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.swordattack1, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.swordattack2, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.swordattack3, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.swordattack4, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.update(0.2);
                        }
                        else{
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning1, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning2, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning3, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning4, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning5, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning6, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning7, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning8, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.lightning9, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.1);
                            await ƒS.Character.hideAll();
                            await ƒS.update(0.1);
                        }
                        await ƒS.Text.print("");

                        await ƒS.Text.print("After your fight you see nomething behind the waterfall so you decide to go trough the pond infront of the waterfall and enter the cave behind the waterfall");
                        await ƒS.Location.show(locations.cave);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        scenecount = "scene9"
                        return scenecount

                }

        }
    }
}

