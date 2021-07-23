namespace fantasyrpg {
    export async function scene8(): ƒS.SceneReturn {
        console.log("scene8 start");
        await ƒS.Character.hideAll();
        await ƒS.update();

        await ƒS.Location.show(locations.Black); //add view img
        await ƒS.update(2);
        await ƒS.Text.print("On the next day you and your friends continue your adventure");
        //await ƒS.Text.print("You and your friends walked ");
        ƒS.Sound.play(sound.normal, 0.3, true);

        await ƒS.Location.show(locations.trailtomountain);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);










        await ƒS.Text.print("After a lot of walking you see a big waterfall");
        await ƒS.Location.show(locations.waterfall);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        await ƒS.Text.print("On top of the waterfall you see a town");
        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side1, "Look over there");
        await ƒS.Speech.tell(stats.Side1, "A town on top of a waterfall");
        await ƒS.Speech.tell(stats.Side1, "Thats so cool");
        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(70, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side2, "Do you see that lake unter it it would be so cool to make camp there");
        await ƒS.Speech.tell(stats.Side2, "We could go swimming and stuff");
        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(50, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side3, "Yea but do we have enough supplies left?");
        await ƒS.Speech.tell(stats.Side3, "I think we are running low on food");
        await ƒS.Speech.tell(stats.Side2, "True but we can just go hunting");
        await ƒS.Speech.tell(stats.Side2, "And I bet we can even go fishing at that lake");
        await ƒS.Speech.tell(stats.Side1, "Mhh I don`t know");





        await ƒS.Text.print("You need to decide if you need to go to the town or if you have enought supplies left");
        await ƒS.Location.show(locations.kreuzung2);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);


        let firstDecisionElementAnswers = {
            city: "Go to the town",
            continue: "Go to the lake",

        };

        let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog");
        switch (firstDecisionElement) {
            case firstDecisionElementAnswers.city:
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "I think we should go to the Town our supplies are really running low");
                await ƒS.Speech.tell(stats.Main, "Also I'd like to sleep in a bed for once");
                await ƒS.Speech.tell(stats.Side2, "Alright I guess your right lets go to the city then");

                await ƒS.Character.hideAll();
                await ƒS.update();


                ƒS.Sound.play(sound.normal, 0, true);
                ƒS.Sound.play(sound.town, 0.3, true);
                await ƒS.Location.show(locations.villagecenter);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Guys this looks like a big city I bet there is an Alchemist here");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(50, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Yea but shouldn't we got to the Tavern first to get food?");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Before we entered the city I even saw a Tower ruin a bit outside the town");
                await ƒS.Speech.tell(stats.Side1, "Wouldn't it be cool to check that out?");


                let thirdDecisionElementAnswers = {
                    alchemist: "Search the Alchemist",
                    tower: "Inspect the tower",
                    center: "Go to the town center"

                };

                let thirdDecisionElement = await ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog");
                switch (thirdDecisionElement) {
                    case thirdDecisionElementAnswers.alchemist:
                        await ƒS.Speech.tell(stats.Main, "I really think we should go to the Alchemist first");
                        await ƒS.Speech.tell(stats.Main, "We have all day here we can restock later");
                        await ƒS.Speech.tell(stats.Side1, "Yea your right maybe we can get some potions there");

                        await ƒS.Character.hideAll();
                        await ƒS.update();
                        await ƒS.Location.show(locations.alchemist);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        await ƒS.Text.print("You went to the alchemist");
                        await ƒS.Text.print("Behind the alchemist you see a red potion but you don`t have any money.");
                        await ƒS.Text.print("You try convincing her that you need the potion for something important");
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
                            await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Side1, "Wow look at that");
                            await ƒS.Speech.tell(stats.Side1, "She gave you a Healing Potion");
                            ƒS.Inventory.add(items.Healthpotion)


                        }
                        else {

                            await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90, 90))
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Side2, "Mhh I don`t think this is going anywhere " + stats.Main.name);
                            await ƒS.Speech.tell(stats.Side2, "Let's just leave");
                            await ƒS.Text.print("Just as you are about to leave the Alchemist stops you and gives you a pice of paper");
                            await ƒS.Text.print("Looks like there is something writen on it");
                            ƒS.Inventory.add(items.advice)

                            await ƒS.Text.print("Open your inventor and look at it maybe you can decifer what it is saying");
                            stats.message = await ƒS.Speech.getInput();

                            if (stats.message == "You can't defeat the Golem" || stats.message == "You can`t defeat the Golem" || stats.message == "You cant defeat the Golem" || stats.message == "You can not defeat the Golem") {
                                await ƒS.Text.print("You decifered the code but what does it mean?");
                                stats.retreat = true;
                            }
                            else {
                                await ƒS.Text.print("Maybe look at it again a bit later");
                            }

                        }



                        await ƒS.Location.show(locations.Black);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        await ƒS.Text.print("After restocking your supplies you and your friends decided to leave the city by climbing down the Waterfall");
                        await ƒS.Location.show(locations.waterfall);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                        await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                        await ƒS.Text.print("It turns out it is a cave");
                        await ƒS.Text.print("You and your friends decide to enter the Cave");
                        ƒS.Sound.play(sound.town, 0, true);
                        scenecount = "scene9"
                        return scenecount;

                    case thirdDecisionElementAnswers.tower:
                        await ƒS.Speech.tell(stats.Main, "Mhh that tower sounds interessting");
                        await ƒS.Speech.tell(stats.Main, "I didn't even see it when we entered the city");
                        await ƒS.Speech.tell(stats.Main, "Let's go there");
                        await ƒS.Speech.tell(stats.Main, "Also we got all day to restock our supplies");
                        await ƒS.Speech.tell(stats.Side1, "Wohoo exploring");
                        await ƒS.Speech.tell(stats.Side1, "I am so excited");
                        await ƒS.Character.hideAll();
                        await ƒS.update();
                        await ƒS.Location.show(locations.tower);
                        await ƒS.update(transition.speed.duration, transition.speed.alpha, transition.speed.edge);

                        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side1, "Guys look around mybe we can find something");
                        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(70, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side2, "Do you really think so?");
                        await ƒS.Speech.tell(stats.Side2, "I mean there is a town right beside it");
                        await ƒS.Speech.tell(stats.Side2, "Don't you think if something was here it would be long gone?");
                        await ƒS.Speech.tell(stats.Side1, "You are probably right but what does it cost us to look around?");
                        await ƒS.Speech.tell(stats.Side2, "You got a point there");



                        stats.number = (stats.relside1 + stats.relside2 + stats.relside3) / 10
                        let Throwdice2 = {
                            Throwdice2: "Can you finde something?",
                        };
                        let Dicethrow2 = await ƒS.Menu.getInput(Throwdice2, "dialog1");
                        switch (Dicethrow2) {
                            case Throwdice2.Throwdice2:
                                throwdice();
                        }

                        if (stats.random >= 12) {
                            await ƒS.Speech.tell(stats.Side2, "Guys there is a lose stoneplate here");
                            await ƒS.Speech.tell(stats.Side2, "Come help me taking it out I can`t make it alone");
                            await ƒS.Text.print("You helped your friends lift up the stoneplate");
                            await ƒS.Speech.tell(stats.Side1, "Look thats some kind of scroll I think");
                            ƒS.Inventory.add(items.Scroll)
                            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(90, 90))
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Main, "Maybe we can sell it for some money?");
                            await ƒS.Speech.tell(stats.Side1, "It must have been here for ages");
                            await ƒS.Speech.tell(stats.Side1, "Maybe we can use it");
                            await ƒS.Speech.tell(stats.Side2, "Let's decide what to do with it later");
                            await ƒS.Speech.tell(stats.Side2, "Keep searching maybe we can find something else");

                            await ƒS.Character.hideAll();
                            await ƒS.Location.show(locations.Black);
                            await ƒS.update(1);
                            await ƒS.Text.print("You keep searching for a bit but you can`t find anything else");
                            await ƒS.Text.print("After restocking your supplies you and your friends decide to leave the city by climbing down the waterfall");
                            await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await ƒS.Text.print("It turns out it is a cave");
                            await ƒS.Text.print("You and your friends decide to enter the Cave");
                            ƒS.Sound.play(sound.town, 0, true);
                            scenecount = "scene9"
                            return scenecount
                        }
                        else {
                            await ƒS.Location.show(locations.Black);
                            await ƒS.update(1);
                            await ƒS.Text.print("You look around in the tower but can`t find anything");
                            await ƒS.Text.print("After looking around for a while You and your friends decide to leave the city by climbing down the waterfall");
                            await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await ƒS.Text.print("It turns out it is a cave");
                            await ƒS.Text.print("You and your friends decide to enter the Cave");
                            ƒS.Sound.play(sound.town, 0, true);
                            scenecount = "scene9"
                            return scenecount
                        }















                    case thirdDecisionElementAnswers.center:
                        await ƒS.Character.hideAll();
                        await ƒS.update();
                        await ƒS.Location.show(locations.villagecenter);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);


                        await ƒS.Text.print("You and your friends went to the town center and started to talk");
                        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side1, "So we are on this Adventure for a week now");
                        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(50, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side2, "Yes what do you want to say " + stats.Side2.name + "?");
                        await ƒS.Speech.tell(stats.Side1, "How long are we going to continue our journey?");
                        await ƒS.Speech.tell(stats.Side1, "We need at least a week to get back to our home town");
                        await ƒS.Speech.tell(stats.Side2, "True but aren't you having fun?");
                        await ƒS.Speech.tell(stats.Side1, "I do but...");
                        await ƒS.Speech.tell(stats.Side1, "Aww nevermind let's talk about something else");
                        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Main, "Common say it");
                        await ƒS.Speech.tell(stats.Side1, "I think I am just getting a bit homesick");
                        await ƒS.Speech.tell(stats.Main, "Understandable");
                        await ƒS.Speech.tell(stats.Main, "I think we are all ready to go home");
                        await ƒS.Speech.tell(stats.Main, "Let's just chill on the bottom of the waterfall for 1 or 2 days");
                        await ƒS.Speech.tell(stats.Main, "I guess that would be a good ending for our Adventure do you agree guys?");
                        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side3, "That's a good idea");
                        await ƒS.Character.hideAll();
                        await ƒS.update();


                        // conversation

                        if (stats.chosenrel != "") {
                            await ƒS.Text.print("After talking for a while you started to walk with " + stats.chosenrel + " and you felt like talking to " + stats.chosenrel);
                            stats.flowercheck = true;

                            //conversation can use flower here
                            await ƒS.Character.show(stats.Main, stats.Main.pose.mediumlove, ƒS.positionPercent(10, 90))
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Main, "I really think this was a great adventure");
                            if (stats.chosenrel in stats.Side1) {
                                await ƒS.Character.show(stats.Side1, stats.Side1.pose.mediumlove, ƒS.positionPercent(90, 90))
                                await ƒS.update();
                                await ƒS.Speech.tell(stats.Side1, "Yea It was");
                                await ƒS.Speech.tell(stats.Side1, "I am already excited for the few days at the lake");
                                await ƒS.Speech.tell(stats.Main, "Yea I think we can relaxe there a lot");
                                await ƒS.Speech.tell(stats.Main, "Like we did at the hot spring");
                                await ƒS.Speech.tell(stats.Side1, "Maybe we can go there again on our way back to our home town");
                                await ƒS.Speech.tell(stats.Main, "Sounds good");
                                await ƒS.Speech.tell(stats.Main, "But I am still a bit uncomfable because I lied to the others about the hotspring thing");
                                await ƒS.Speech.tell(stats.Side1, "Mhh yea me too");
                                await ƒS.Speech.tell(stats.Side1, "But I don't regret it afterall I had a really great time with you");
                                await ƒS.Speech.tell(stats.Main, "Yea me too");
                                await ƒS.Text.print("After talking for a while you went back to the others");
                            }
                            else if (stats.chosenrel in stats.Side2) {
                                await ƒS.Character.show(stats.Side2, stats.Side2.pose.mediumlove, ƒS.positionPercent(90, 90))
                                await ƒS.update();
                                await ƒS.Speech.tell(stats.Side2, "Yea It was");
                                await ƒS.Speech.tell(stats.Side2, "I am already excited for the few days at the lake");
                                await ƒS.Speech.tell(stats.Main, "Yea I think we can relaxe there a lot");
                                await ƒS.Speech.tell(stats.Main, "Like we did at the hot spring");
                                await ƒS.Speech.tell(stats.Side2, "Maybe we can go there again on our way back to our home town");
                                await ƒS.Speech.tell(stats.Main, "Sounds good");
                                await ƒS.Speech.tell(stats.Main, "But I am still a bit uncomfable because I lied to the others about the hotspring thing");
                                await ƒS.Speech.tell(stats.Side2, "Mhh yea me too");
                                await ƒS.Speech.tell(stats.Side2, "But I don't regret it afterall I had a really great time with you");
                                await ƒS.Speech.tell(stats.Main, "Yea me too");
                                await ƒS.Text.print("After talking for a while you went back to the others");
                            }
                            else if (stats.chosenrel in stats.Side3) {
                                await ƒS.Character.show(stats.Side3, stats.Side3.pose.mediumlove, ƒS.positionPercent(90, 90))
                                await ƒS.update();
                                await ƒS.Speech.tell(stats.Side3, "Yea It was");
                                await ƒS.Speech.tell(stats.Side3, "I am already excited for the few days at the lake");
                                await ƒS.Speech.tell(stats.Main, "Yea I think we can relaxe there a lot");
                                await ƒS.Speech.tell(stats.Main, "Like we did at the hot spring");
                                await ƒS.Speech.tell(stats.Side3, "Maybe we can go there again on our way back to our home town");
                                await ƒS.Speech.tell(stats.Main, "Sounds good");
                                await ƒS.Speech.tell(stats.Main, "But I am still a bit uncomfable because I lied to the others about the hotspring thing");
                                await ƒS.Speech.tell(stats.Side3, "Mhh yea me too");
                                await ƒS.Speech.tell(stats.Side3, "But I don't regret it afterall I had a really great time with you");
                                await ƒS.Speech.tell(stats.Main, "Yea me too");
                                await ƒS.Text.print("After talking for a while you went back to the others");

                            }


                            await ƒS.Character.hideAll();
                            await ƒS.update();



                            if (stats.relside1 >= 100 || stats.relside2 >= 100 || stats.relside3 >= 100) {
                                ƒS.Sound.play(sound.town, 0, true);
                                scenecount = "loveending"
                            }
                            else {
                                await ƒS.Character.show(stats.Side2, stats.Side2.pose.mediumlove, ƒS.positionPercent(90, 90))
                                await ƒS.update();
                                await ƒS.Speech.tell(stats.Side2, "I think it would be fun if we climed down the waterfall to get to the lake");
                                await ƒS.Character.show(stats.Side3, stats.Side3.pose.mediumlove, ƒS.positionPercent(90, 90))
                                await ƒS.update();
                                await ƒS.Speech.tell(stats.Side3, "Yea that sounds like fun");
                                await ƒS.Character.hideAll();
                                await ƒS.update();
                                await ƒS.Text.print("You and your friends decided to climb down the waterfall");
                                await ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                                await ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                                await ƒS.Text.print("It turns out it is a cave");
                                await ƒS.Text.print("You and your friends decide to enter the Cave");
                                ƒS.Sound.play(sound.town, 0, true);
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
                            ƒS.Sound.play(sound.town, 0, true);
                            scenecount = "scene9"
                            return scenecount;
                        }
                }




            case firstDecisionElementAnswers.continue:
                await ƒS.Location.show(locations.waterfall);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                ƒS.Sound.fade(sound.normal, 0, 1);
                ƒS.Sound.play(sound.fight, 0.3, true);
                await ƒS.Text.print("On your way beneath the waterfalls you encounter another monster");
                await ƒS.Text.print("The monster looks like it`s going to attack!");
                await ƒS.Text.print("What are you going to do?");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Guys quick we need to do something");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Let's attack it together!");


                let secondDecisionElementAnswers = {
                    alone: "Attack it alone",
                    together: "Fight with your friends",

                };

                let secondDecisionElement = await ƒS.Menu.getInput(secondDecisionElementAnswers, "dialog");
                switch (secondDecisionElement) {
                    case secondDecisionElementAnswers.alone:

                        await ƒS.Location.show(locations.fight);
                        await ƒS.update(transition.fight.duration, transition.fight.alpha, transition.fight.edge);
                        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(90, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Main, "Hold on guys I got this");
                        stats.number = stats.Main.Strength / 10
                        let Throwdice = {
                            Throwdice: "Can you defeat it?",
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

                        let skillselection2 = await ƒS.Menu.getInput(skillselectionAnswer2, "dialog");
                        switch (skillselection2) {
                            case skillselectionAnswer2.skill1:

                                skill1funktion();


                            case skillselectionAnswer2.skill2:
                                if (stats.skillused == false) {
                                    skill2funktion();
                                }


                            case skillselectionAnswer2.skill3:
                                if (stats.skillused == false) {
                                    skill3funktion();
                                }
                                stats.skillused = false;

                        }


                        if (stats.random >= 6) {
                            stats.number = stats.Main.Strength / 10
                            await ƒS.Text.print("You defeated the monster");
                            await ƒS.Speech.tell(stats.Main, "See I told you I got this");
                            await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90))
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Side3, "Showoff");
                            await ƒS.Speech.tell(stats.Side3, "You should let us help you sometimes");
                            await ƒS.Speech.tell(stats.Side3, "It is dangerous to fight alone");

                            stats.Main.Strength += 10;

                        }
                        else {
                            await ƒS.Text.print("You tired to defeat it alone but failed");
                            await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90))
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Side3, "Why do you always try to defeat it alone");
                            await ƒS.Character.hideAll();
                            await ƒS.update();
                            if (stats.Main.namechar == "Samara") {
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
                            else {
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
                            await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90))
                            await ƒS.update();
                            await ƒS.Text.print("Your friends came to save you");
                            await ƒS.Speech.tell(stats.Side3, "See if you let us help from time to time its easier");

                            stats.Main.Strength += 5
                        }
                        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(70, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side2, "Do you see that there is something behind that waterfall");
                        await ƒS.Speech.tell(stats.Side2, "Lets see if what that is");
                        await ƒS.Speech.tell(stats.Side3, "looks like a cave");
                        await ƒS.Speech.tell(stats.Main, "wow thats cool");
                        await ƒS.Speech.tell(stats.Main, "Let's explore it");
                        await ƒS.Location.show(locations.cave);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        ƒS.Sound.play(sound.fight, 0, true);
                        scenecount = "scene9"
                        return scenecount


                    case secondDecisionElementAnswers.together:
                        await ƒS.Location.show(locations.fight);
                        await ƒS.update(transition.fight.duration, transition.fight.alpha, transition.fight.edge);
                        await ƒS.Speech.tell(stats.Main, "Yea fast attack it together");
                        let skillselectionAnswer = {
                            skill1: stats.Main.Skill1,
                            skill2: stats.Main.Skill2,
                            skill3: stats.Main.Skill3,

                        };

                        let skillselection = await ƒS.Menu.getInput(skillselectionAnswer, "dialog");
                        switch (skillselection) {
                            case skillselectionAnswer.skill1:

                                skill1funktion();


                            case skillselectionAnswer.skill2:
                                if (stats.skillused == false) {
                                    skill2funktion();
                                }


                            case skillselectionAnswer.skill3:
                                if (stats.skillused == false) {
                                    skill3funktion();
                                }
                                stats.skillused = false;

                        }
                        if (stats.Main.namechar == "Samara") {
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
                        else {
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
                        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(70, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side2, "we did it guys");
                        await ƒS.Speech.tell(stats.Side2, "Do you see that there is something behind that waterfall");
                        await ƒS.Speech.tell(stats.Side2, "Lets see if what that is");
                        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side3, "looks like a cave");
                        await ƒS.Speech.tell(stats.Main, "wow thats cool");
                        await ƒS.Speech.tell(stats.Main, "Let's explore it");
                        await ƒS.Location.show(locations.cave);
                        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                        ƒS.Sound.play(sound.fight, 0, true);
                        scenecount = "scene9"
                        return scenecount

                }
        }

    }
}

