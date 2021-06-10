namespace Template {
    export async function option4(): ƒS.SceneReturn {
        console.log("4thScene");
        stats.Main.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        stats.Main.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        stats.Main.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        stats.Main.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        stats.Main.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        stats.Main.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        stats.Main.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove";
        stats.Main.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        stats.Main.Skill1 = "Skystrike";
        stats.Main.Skill2 = "Swordattack";
        stats.Main.Skill3 = "Swordslash";

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

        stats.Side2.name = "Liraz"
        stats.Side2.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        stats.Side2.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        stats.Side2.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        stats.Side2.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        stats.Side2.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        stats.Side2.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        stats.Side2.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        stats.Side2.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        stats.Side2.Skill1 = "Blindinglight";
        stats.Side2.Skill2 = "Swordswing";
        stats.Side2.Skill3 = "Windburst";
        
        stats.Side3.name = "Hando"
        stats.Side3.pose.normal = "./Images/Characters/Archer/Archer1.png";
        stats.Side3.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        stats.Side3.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        stats.Side3.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        stats.Side3.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        stats.Side3.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        stats.Side3.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        stats.Side3.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        stats.Side3.Skill1 = "Bowshot";
        stats.Side3.Skill2 = "Fastshot";
        stats.Side3.Skill3 = "Rollshot";


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
                stats.Main.relside1 += 10;
                stats.Main.relside2 += 10;
                stats.Main.relside3 += 10;
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
                        stats.Main.relside1 += 5;
                        stats.Main.relside2 += 15;
                        stats.Main.relside3 += 5;
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
                                ƒS.Inventory.add(items.EmptyBottle);
                                scenecount = "scene2b";
                                return scenecount
                            case thirdDialogueElementAnswers.sayNo:
                                scenecount = "scene2b";
                                await ƒS.update();
                                return scenecount;   
                        }
                        
                        scenecount = "scene2b";
                        await ƒS.update();
                        return scenecount

                        
                }
        }
    }
}