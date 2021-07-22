namespace fantasyrpg {
    export async function scene6(): ƒS.SceneReturn {
        console.log("Scene 6 Patheway");
        await ƒS.Character.hideAll();
    await ƒS.update();
        ƒS.Sound.play(sound.normal, 0.3, true);
        await ƒS.Location.show(locations.zweigung);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        await ƒS.Text.print("As you keep walking you notice your path is splitting in 2 paths");
        await ƒS.Text.print("You need to choose if you want to go left or take the right path");
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
        await ƒS.update();
        await ƒS.Speech.tell(stats.Main, "What do you guys think should we go right or left");
        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side3, "I heard if you go right here there are a lot of monsters");
        await ƒS.Speech.tell(stats.Side3, "But I was never here soo...");
        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90, 90));
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side2, "The left path looks like it is going to lead to a lake");
        await ƒS.Speech.tell(stats.Side2, "What do you think " + stats.Main.name + " where should we go?");
        await ƒS.Text.print("Your friends left the decision where to go to you");

        let firstDecisionElementAnswers = {
            left: "Go Left",
            right: "Go Right",

        };

        let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog1");
        switch (firstDecisionElement) {
            case firstDecisionElementAnswers.left:
                await ƒS.Location.show(locations.trailtomountain);
                await ƒS.update(transition.speed.duration, transition.speed.alpha, transition.speed.edge);
                await ƒS.Text.print("You and your friend took the left path");
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Hey " + stats.Side3.name + " aren`t you interessted in Alchemie and know a lot about it?");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(70, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Yea I do");
                await ƒS.Speech.tell(stats.Side3, "Why do you ask?");
                await ƒS.Speech.tell(stats.Side2, "That flower over there I have never seen it before");
                await ƒS.Speech.tell(stats.Side3, "Mhh let me look in my Alchemie book");
                await ƒS.Text.print(stats.Side3.name + " took out the Alchemie book and searched something");
                await ƒS.Speech.tell(stats.Side3, "I can`t find it in this book so its eigther rare or it's of no use for potions");
                await ƒS.Speech.tell(stats.Side2, "Mhh maybe we shoud take it with us what do you think " + stats.Main.name);





                let secondDecisionElementAnswers = {
                    pick: "Pick up Flower",
                    nopick: "Leave it be",

                };

                let secondDecisionElement = await ƒS.Menu.getInput(secondDecisionElementAnswers, "dialog1");
                switch (secondDecisionElement) {

                    case secondDecisionElementAnswers.pick:

                        ƒS.Inventory.add(items.Flower)
                    case secondDecisionElementAnswers.nopick:
                }

                await ƒS.Character.hideAll();

                await ƒS.Text.print("They hole time you are wondering why " + stats.Side3.name + " has a shiner so you decide to ask");
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Hey " + stats.Side3.name + " what happened to your eye why do you have a shiner?");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Well I told you about the new Tavern right?");
                await ƒS.Speech.tell(stats.Main, "Yea?");
                await ƒS.Speech.tell(stats.Side3, "I was play Cards with some random people");
                await ƒS.Speech.tell(stats.Side3, "I won so much money that day");
                await ƒS.Speech.tell(stats.Side3, "and one of the guys got really angry and accused me of cheating");
                await ƒS.Speech.tell(stats.Main, "And you did not cheat right?");
                await ƒS.Character.hide(stats.Side3);
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.veryhappy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "what do you think of me of couse I did not cheat");
                await ƒS.Speech.tell(stats.Side3, "anyways he did not belive me and wanted his money back");
                await ƒS.Speech.tell(stats.Side3, "but I did not give it back so we had a little dispute");
                await ƒS.Speech.tell(stats.Main, "Ahh a \"little\" dispute");

                scenecount = "scene7";
                return scenecount
                
            case firstDecisionElementAnswers.right:
                await ƒS.Character.hideAll();
                await ƒS.update();
                await ƒS.Text.print("After walking for a bit on the rigth path");
                await ƒS.Text.print("A monster jumps in your way");
                ƒS.Sound.play(sound.steps, 0.3, false);
                await ƒS.Location.show(locations.fight);
                await ƒS.update(transition.fight.duration, transition.fight.alpha, transition.fight.edge);
                ƒS.Sound.fade(sound.normal, 0,1);
                ƒS.Sound.play(sound.fight, 0.3, true);
                await ƒS.Text.print("You and your friends jump back");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "What what is that I have never seen that kind of monster before..");
                await ƒS.Speech.tell(stats.Side1, "What should we do " + stats.Main.name + "?");
                await ƒS.Character.hideAll();
                await ƒS.update();
                let thirdDecisionElementAnswers = {
                    alone: "Take on the monster by yourselfe",
                    together: "Ask your friends to help you",

                };

                let thirdDecisionElement = await ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog1");
                switch (thirdDecisionElement) {
                    case thirdDecisionElementAnswers.alone:
                        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(70, 90));
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Main, "Don't worry I will defeat it");


                        stats.number = stats.Main.Strength / 10
                        
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
                        throwdice();
                        if (stats.random >= 4) {
                            ƒS.Character.hideAll();
                            console.log("won fight alone")
                            await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90, 90));
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Side2, "Wow that was cool.");
                            await ƒS.Speech.tell(stats.Side2, "I did not know that you are so strong " + stats.Main.name);
                            await ƒS.Character.show(stats.Main, stats.Main.pose.arrogant, ƒS.positionPercent(10, 90));
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Main, "Ah that was nothing");
                            await ƒS.Speech.tell(stats.Main, "For you I would do anything");
                            await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90, 90));
                            await ƒS.update();
                            




                            stats.Main.Strength += 10;
                            ƒS.Sound.play(sound.fight, 0, true);
                            scenecount = "scene7"
                            return scenecount;
                        }
                        else {
                            ƒS.Character.hideAll();
                            await ƒS.Text.print("Seems like your to weak to fight the Monster alone");
                            



                            if (stats.Main.namechar == "Samara") {
                                await ƒS.Character.show(characters.Adira, characters.Adira.pose.normal, ƒS.positionPercent(50, 90));
                                await ƒS.update();
                                await ƒS.Speech.tell(characters.Adira , "Oh no he is going to die");
                                await ƒS.Speech.tell(characters.Adira , "I need to help him");
                                await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike1, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike2, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike3, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike4, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike5, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike6, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike7, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.update(0.2);
                            }
                            else {
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.normal, ƒS.positionPercent(50, 90));
                                await ƒS.update();
                                await ƒS.Speech.tell(characters.Samara , "Oh no he is going to die");
                                await ƒS.Speech.tell(characters.Samara , "I need to help him");
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball1, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball2, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball3, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball4, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball5, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball6, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball7, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball8, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball9, ƒS.positionPercent(50, 90))
                                await ƒS.update(0.2);
                                await ƒS.Character.hideAll();
                                await ƒS.update(0.2);
                            }
                            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                            await ƒS.update();
                            await ƒS.Speech.tell(stats.Main, "Thank you for helping me I would not have made it without you");

                            stats.relside2 += 5;
                            stats.Main.Strength += 5
                            ƒS.Sound.play(sound.fight, 0, true);
                            scenecount = "scene7"
                            return scenecount;
                        }
                        scenecount = "scene7";
                        return scenecount;
                    case thirdDecisionElementAnswers.together:
                        console.log("Fight it together")
                        await ƒS.Location.show(locations.fight);
                        await ƒS.update(transition.fight.duration, transition.fight.alpha, transition.fight.edge);
                        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Main, "Comon guys together we can defeat the monster");
                        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(50, 90));
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side1, "yea lets go");
                        await ƒS.Character.hide(stats.Side1);
                        await ƒS.update();

                        let skillselectionAnswer1 = {
                            skill1: stats.Main.Skill1,
                            skill2: stats.Main.Skill2,
                            skill3: stats.Main.Skill3,

                        };

                        let skillselection1 = await ƒS.Menu.getInput(skillselectionAnswer1, "dialog1");
                        switch (skillselection1) {
                            case skillselectionAnswer1.skill1:

                                skill1funktion();

                            case skillselectionAnswer1.skill1:

                                skill2funktion();

                            case skillselectionAnswer1.skill1:
                                skill3funktion();
                        }
                        if (stats.Main.namechar == "Samara") {
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike1, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike2, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike3, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike4, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike5, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike6, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Adira, characters.Adira.pose.skystrike7, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.update(0.2);
                        }
                        else {
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball1, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball2, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball3, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball4, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball5, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball6, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball7, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball8, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.Character.show(characters.Samara, characters.Samara.pose.fireball9, ƒS.positionPercent(50, 90))
                            await ƒS.update(0.2);
                            await ƒS.Character.hideAll();
                            await ƒS.update(0.2);
                        }
                        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(10, 90));
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side2, "Yea we did it we defeated the Monster");
                        await ƒS.Speech.tell(stats.Side2, "I knew together we could do it");


                        
                        ƒS.Sound.play(sound.fight, 0, true);
                        scenecount = "scene7"
                        return scenecount;
                }


        }


    }
}