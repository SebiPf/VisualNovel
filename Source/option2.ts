namespace Template {
    export async function option2(): ƒS.SceneReturn{
        console.log("2ndScene");
        stats.Main.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        stats.Main.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        stats.Main.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        stats.Main.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        stats.Main.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        stats.Main.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        stats.Main.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        stats.Main.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        stats.Main.Skill1 = "Blindinglight";
        stats.Main.Skill2 = "Swordswing";
        stats.Main.Skill3 = "Windburst";

        stats.Side1.name = "Samara"
        stats.Side1.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        stats.Side1.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        stats.Side1.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        stats.Side1.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        stats.Side1.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        stats.Side1.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        stats.Side1.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        stats.Side1.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        stats.Side1.Skill1 = "FireBall";
        stats.Side1.Skill2 = "Lightning";
        stats.Side1.Skill3 = "Windstrike";

        stats.Side2.name = "Hando"
        stats.Side2.pose.normal = "./Images/Characters/Archer/Archer1.png";
        stats.Side2.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        stats.Side2.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        stats.Side2.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        stats.Side2.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        stats.Side2.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        stats.Side2.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        stats.Side2.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        stats.Side2.Skill1 = "Bowshot";
        stats.Side2.Skill2 = "Fastshot";
        stats.Side2.Skill3 = "Rollshot";
        
        stats.Side3.name = "Adira"
        stats.Side3.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        stats.Side3.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        stats.Side3.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        stats.Side3.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        stats.Side3.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        stats.Side3.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        stats.Side3.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove";
        stats.Side3.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        stats.Side3.Skill1 = "Skystrike";
        stats.Side3.Skill2 = "Swordattack";
        stats.Side3.Skill3 = "Swordslash";

        stats.scoreside1 = "Samara"
        stats.scoreside2 = "Hando"
        stats.scoreside3 = "Adira"




        await ƒS.Location.show(locations.camp);
        await ƒS.update(2);
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5, 90));
        await ƒS.update(1);
        await ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await ƒS.Text.print("As you enter your village you finde your 3 Mates  " + stats.Side1.name + ", " + stats.Side2.name + " and " + stats.Side3.name);
        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(50, 90));
        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(70, 90));
        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
        ƒS.update();
        
        await ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later")
        await ƒS.Character.hide(stats.Side1);
        await ƒS.Character.hide(stats.Side2);
        await ƒS.Character.hide(stats.Side3);
        ƒS.update(1);
        await ƒS.Text.print("Do you want to got with them?")

        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                stats.relside1 += 10;
                stats.relside2 += 10;
                stats.relside3 += 10;
                stats.char1.points += 5;
                scenecount = "scene2";
                return scenecount
                break;
            case firstDialogueElementAnswers.sayNo:
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.unhappy, ƒS.positionPercent(50, 90));
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.unhappy, ƒS.positionPercent(70, 90));
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.unhappy, ƒS.positionPercent(90, 90));
                ƒS.update();
                await ƒS.Character.hide(stats.Side1);
                await ƒS.Character.hide(stats.Side2);
                await ƒS.Character.hide(stats.Side3);
                ƒS.update(1);

                await ƒS.Text.print("A few minutes later " + stats.Side2.name + " walks up to you");
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90,90));
                ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Hey can we talk for a second?")
                await ƒS.Speech.tell(stats.Main, "Sure what is bothering you?")
                await ƒS.Speech.tell(stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?")
                await ƒS.Speech.tell(stats.Main, "Yea I am just a bit tired thats all");
                await ƒS.Speech.tell(stats.Side2, "Ah thats fine I just really hoped you would come")
                await ƒS.Speech.tell(stats.Main, "Mh let me think about it for a second");

                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
        
                let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        stats.relside1 += 5;
                        stats.relside2 += 15;
                        stats.relside3 += 5;
                        await ƒS.Speech.tell(stats.Main, "Okay I`ll join you! See you later");
                        await ƒS.Character.hide(stats.Main)
                        await ƒS.Character.show(stats.Main, stats.Main.pose.happy, ƒS.positionPercent(5, 90))
                        await ƒS.Character.hide(stats.Side2)
                        await ƒS.Character.show(stats.Side2, stats.Side2.pose.veryhappy, ƒS.positionPercent(90, 90))
                        ƒS.update();

                        scenecount = "scene2";
                        return scenecount
                        
                    case secondDialogueElementAnswers.sayNo:
                        stats.Main.Strength += 10;
                        await ƒS.Character.hide(stats.Side2);
                        ƒS.update();
                        await ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await ƒS.Text.print("Do you want to pick it up?");

                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                
                        let thirdDialogueElement = await ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                await ƒS.Location.show(locations.seafire);
                                ƒS.update(1);
                                await ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await ƒS.Text.print("They are really happy that you came to look after them");
                                await ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                ƒS.Inventory.add(items.EmptyBottle);
                                scenecount = "scene3";
                                return scenecount
                            case thirdDialogueElementAnswers.sayNo:
                                await ƒS.Location.show(locations.seafire);
                                ƒS.update(1);
                                await ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await ƒS.Text.print("They are really happy that you came to look after them");
                                await ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                scenecount = "scene3";
                                await ƒS.update();
                                return scenecount;   
                        }
                        
                        
                        scenecount = "scene3";
                        await ƒS.update();
                        return scenecount

                        
                }
        }
        
    }
}