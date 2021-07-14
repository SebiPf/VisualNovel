namespace fantasyrpg {
    export async function scene2(): ƒS.SceneReturn {
        console.log("scene2");
        stats.char1.points += 5;
        console.log(stats.char1.points);
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Location.show(locations.Black);
        ƒS.update(0);
        await ƒS.Text.print("A few Hours later...");
        
        await ƒS.Location.show(locations.camp);
        await ƒS.update(1);
        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90,90));
        await ƒS.update(1);
        await ƒS.Speech.tell(stats.Side3, "Hey are you ready to go?");
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5,90));
        await ƒS.update(1);
        await ƒS.Speech.tell(stats.Main, "Yes let`s go");
        await ƒS.Speech.tell(stats.Side3, "Let`s get the others");
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        await ƒS.Text.print("You and " + stats.Side3.name + " went to " + stats.Side1.name + " and " + stats.Side2.name + " to meet up.");
        await ƒS.Location.show(locations.seafire);
        ƒS.update(1);
        await ƒS.Text.print("After you arrive at the shore you realise the weather is getting worse.");
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5,90));
        ƒS.update(1);
        await ƒS.Speech.tell(stats.Main, "Guys should we go back? It seems the weather is getting really bad...");
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90,90));
        ƒS.update(1);
        await ƒS.Speech.tell(stats.Side2, "No we will be fine lets just make a fire");
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90,90));
        ƒS.update(1);
        await ƒS.Speech.tell(stats.Side3, "Yea I`ll go get firewood do you want to help me " + stats.Main.name + "?");
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No you got this",
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                await ƒS.Character.hideAll();
                ƒS.update(1);
                await ƒS.Text.print("You and " + stats.Side3.name + " decide to go together to get the wood");
                await ƒS.Location.show(locations.woods);
                ƒS.update(1);
                await ƒS.Text.print("As you are further away from the others " + stats.Side3.name + " decides to start a conversation with you");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90,90));
                ƒS.update(1);
                await ƒS.Speech.tell(stats.Side3, "I am happy you decided to come");
                await ƒS.Speech.tell(stats.Side3, "I wanted to talk to you about something");
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5,90));
                ƒS.update(1);
                await ƒS.Speech.tell(stats.Main, "What is bothering you you know you can always talk to me about everything");
                await ƒS.Speech.tell(stats.Side3, "I just wanted to thank you for helping me with my training");
                await ƒS.Speech.tell(stats.Side3, "I had my training battle with guy from another village 2 days ago");
                await ƒS.Speech.tell(stats.Side3, "I couldn`t quite beat him but I felt a lot more confident and strong since you help me");
                await ƒS.Speech.tell(stats.Main, "Those are good news I am happy for you");
                await ƒS.Speech.tell(stats.Main, "Also I like those training sessions sonce I improve by them a lot to");
                await ƒS.Speech.tell(stats.Side3, "Also I think if we keep the training up we can make a really great team");
                await ƒS.Speech.tell(stats.Main, "Yea definately");
                let secondDialogueElementAnswers = {
                    sayYes: "Lets go back I think we have enough wood",
                    sayNo: "I also wanted to tell you something",
                };
        
                let secondDialogueElement = await ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        await ƒS.Speech.tell(stats.Main, "Lets go back I think we have enough wood");
                        await ƒS.Speech.tell(stats.Side3, "Yes I think so too");
                        stats.relside3 += 5;
                        await ƒS.Character.hideAll();
                        await ƒS.update();
                        scenecount = "scene3";
                        await ƒS.update();
                        return scenecount; 

                    case secondDialogueElementAnswers.sayNo:
                        await ƒS.Speech.tell(stats.Main, "So can I ask you something too?");
                        await ƒS.Speech.tell(stats.Side3, "Sure go for it");
                        await ƒS.Speech.tell(stats.Main, "So you know my parent died when I was young right?");
                        await ƒS.Speech.tell(stats.Side3, "Yea");
                        await ƒS.Speech.tell(stats.Main, "I never really talked with anybody about it. So I felt like I can talk woth you about it");
                        await ƒS.Speech.tell(stats.Side3, "Yea");
                        await ƒS.Text.print("You and " + stats.Side3.name + " had a long conversation about your parents and their accident");
                        stats.relside3 += 10;
                        await ƒS.Location.show(locations.Black);
                        await ƒS.Character.hideAll();
                        ƒS.update(1);
                        await ƒS.Text.print("The conversation with " + stats.Side3.name + " really help you.");
                        await ƒS.Text.print("After the conversation you and " + stats.Side3.name + " went back to the camp");
                        await ƒS.Location.show(locations.seafire);
                        ƒS.update(1);
                        await ƒS.Character.hideAll();
                        ƒS.update();
                        scenecount = "scene3";
                        await ƒS.update();
                        return scenecount;   
                }
                


                
            case firstDialogueElementAnswers.sayNo:
                await ƒS.Text.print("You decided to stay and let " + stats.Side3.name + "get the wood");
                await ƒS.Text.print("You walk up to " + stats.Side1.name + " and " + stats.Side2.name + " and decide to start a conversation");
                await ƒS.Text.print("You who do you want to start a conversation with?");

                let thirdDialogueElementAnswers = {
                    sayYes: "1. " + stats.Side1.name, 
                    sayNo: "2. " + stats.Side2.name,
                };
        
                let thirdDialogueElement = await ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                switch (thirdDialogueElement) {
                    case thirdDialogueElementAnswers.sayYes:
                        await ƒS.Character.hideAll();
                        await ƒS.update();
                        
                        await ƒS.Text.print("As you are sitting next to the fireplace you start a conversation with " + stats.Side1.name);
                        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5,90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Main, "So what do you think how long will " + stats.Side3.name + " need to get the firewood?");
                        await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90,90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side1, "Probably not as long if you helped");
                        await ƒS.Speech.tell(stats.Side1, "Ahh just kidding I don`t think that long");
                        await ƒS.Speech.tell(stats.Side1, "Afterall I am cold too");
                        await ƒS.Text.print("As you are talking to " + stats.Side1.name + stats.Side2.name + " walks to the shore");
                        await ƒS.Text.print("Do you want to stop the conversation and go after " + stats.Side2.name + "?");

                        let fourthDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                
                        let fourthDialogueElement = await ƒS.Menu.getInput(fourthDialogueElementAnswers, "dialog1");
                        switch (fourthDialogueElement) {
                            case fourthDialogueElementAnswers.sayYes:
                                await ƒS.Character.hideAll();
                                await ƒS.update();
                                await ƒS.Speech.tell(stats.Main, "Sorry give me a second");
                                await ƒS.Text.print("You stand up and go after " + stats.Side2.name);
                                await ƒS.Text.print("You arrive at the shore and decide to sit next to " + stats.Side2.name);
                                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5,90))
                                ƒS.update();
                                await ƒS.Speech.tell(stats.Main, "Hey is everything allrigth?");
                                await ƒS.Character.show(stats.Side2, stats.Side2.pose.unhappy, ƒS.positionPercent(90,90))
                                ƒS.update();
                                await ƒS.Speech.tell(stats.Side2, "Yes I just wanted some time alone");
                                await ƒS.Speech.tell(stats.Main, "So you want me to go?");
                                await ƒS.Speech.tell(stats.Side2, "No No I wanted to tell you something anyways.");
                                await ƒS.Speech.tell(stats.Side2, "I saw you practice with " + stats.Side3.name + "a lot lately");
                                await ƒS.Speech.tell(stats.Side2, "Why is that?");
                                await ƒS.Speech.tell(stats.Main, "Oh that ");
                                await ƒS.Speech.tell(stats.Main, "its nothing " + stats.Side3.name + " just asked me if I could help out");
                                await ƒS.Speech.tell(stats.Side2, "So if I asked you to help me out with something you would help me too?");
                                await ƒS.Speech.tell(stats.Main, "Sure what do you want help with?");
                                await ƒS.Speech.tell(stats.Side2, "Well it`s a bit complicated I´ll tell you later...");
                                await ƒS.Speech.tell(stats.Side2, "It is just good to know that you would");
                                await ƒS.Character.hide(stats.Side2);
                                await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90,90))
                                ƒS.update();
                                await ƒS.Speech.tell(stats.Main, "Anything. Just ask at any time");
                                await ƒS.Speech.tell(stats.Side2, "Thanks. Lets head back to the fireplace I think they are about to light it");
                                await ƒS.Speech.tell(stats.Main, "Sure")
                                await ƒS.Character.hideAll();
                                await ƒS.update();
                                await ƒS.Text.print("you and " + stats.Side2.name + " went back to the fireplace");
        
        
        
        
        
                                stats.relside1 -= 5;
                                stats.relside2 += 10;
                                scenecount = "scene3";
                                return scenecount;  
        
                            case fourthDialogueElementAnswers.sayNo:
                                await ƒS.Speech.tell(stats.Main, "Yea I hope");
                                await ƒS.Speech.tell(stats.Main, "But mybe you`re right and I should have helped");
                                await ƒS.Speech.tell(stats.Side1, "No it`s fine");
                                await ƒS.Speech.tell(stats.Side1, "Afterall now we have time to talk about something ");
                                await ƒS.Speech.tell(stats.Main, "True do you have something on your mind you want to talk about?");
                                await ƒS.Speech.tell(stats.Side1, "Yes, yesterday I found a small flower it must be one of the last they are really rare these days");
                                await ƒS.Speech.tell(stats.Side1, "Since they were harvested so much to do potions");
                                await ƒS.Speech.tell(stats.Side1, "But I lost it somehow");
                                await ƒS.Character.hide(stats.Side1);
                                await ƒS.Character.show(stats.Side1, stats.Side1.pose.unhappy, ƒS.positionPercent(90,90))
                                ƒS.update();
                                await ƒS.Speech.tell(stats.Main, "Mhh that`s sad what kind of flower was it?");
                                await ƒS.Speech.tell(stats.Side1, "It was a red one you know I am not as good with names");
                                await ƒS.Speech.tell(stats.Main, "Yea I am sure you will find another one");
                                await ƒS.Speech.tell(stats.Side1, "Yea I hope so");
                                await ƒS.Speech.tell(stats.Main, "I`ll tell you something if I find one I`ll give it to you");
                                await ƒS.Speech.tell(stats.Side1, "That would be so nice of you");
                                await ƒS.Speech.tell(stats.Side1, "Oh look " + stats.Side2.name + " and " + stats.Side3.name + " are coming back");
                                await ƒS.Character.hideAll();
                                await ƒS.update();
                                stats.relside2 -= 5;
                                stats.relside1 += 10;
                                scenecount = "scene3";
                                return scenecount;  
                        }

                    case thirdDialogueElementAnswers.sayNo:
                        await ƒS.Text.print("As you are sitting next to the fireplace you start a conversation with " + stats.Side2.name);
                        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5,90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Main, "Are we just relaxing today or do you guys have more plans for tonight?");
                        await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90,90))
                        await ƒS.update();
                        await ƒS.Speech.tell(stats.Side2, "No today we just planned to relax");
                        await ƒS.Speech.tell(stats.Side2, "Oh and how did you do on your hunting trip did you catch something?");
                        await ƒS.Speech.tell(stats.Main, "Great I cought a Dragon but one of the smaller once");
                        await ƒS.Speech.tell(stats.Side2, "Wow thats great maybe we can go on a trip together?");
                        await ƒS.Speech.tell(stats.Side2, "I wonder what we could find further out there");
                        await ƒS.Speech.tell(stats.Main, "Thats a great Idea I`ll take you on that offer some day");
                        await ƒS.Speech.tell(stats.Side2, "Hey look " + stats.Side3.name + " is voming back with the fire wood");
                        await ƒS.Speech.tell(stats.Main, "Finally");
                        await ƒS.Character.hideAll();
                        await ƒS.update();
                        stats.relside2 += 10;
                        scenecount = "scene3";
                        return scenecount;  
                }

                scenecount = "scene3";
                await ƒS.update();
                return scenecount;   
        }



        await ƒS.Location.show(locations.seafire);
        await ƒS.update(1);
        
        scenecount = "scene3";
        return scenecount;
        
    }
}