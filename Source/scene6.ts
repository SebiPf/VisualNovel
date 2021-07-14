namespace fantasyrpg {
    export async function scene6(): ƒS.SceneReturn {
      console.log("Scene 6 Patheway");

        await ƒS.Text.print("As you keep walking you notice your path is splitting in 2 paths");
        await ƒS.Text.print("You need to choose if you want to go left or take the right path");

        let firstDecisionElementAnswers = {
            left: "Go Left",
            right: "Go Right",
            
        };

        let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog1");
        switch (firstDecisionElement) {
            case firstDecisionElementAnswers.left:
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



                await ƒS.Text.print("While walking you feel like talking");
                await ƒS.Text.print("You decide to talk to...");

                let firstDialogueElementAnswers = {
                    side1: stats.Side1.name,
                    side2: stats.Side2.name,
                    side3: stats.Side3.name,
                };
        
                let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
                switch (firstDialogueElement) {
                    case firstDialogueElementAnswers.side1:
                        stats.relside1 += 5;
                        
                        scenecount = "scene7";
                        return scenecount
                    case firstDialogueElementAnswers.side2:
        
                        stats.relside2 += 5;
                        scenecount = "scene7";
                        return scenecount
                    case firstDialogueElementAnswers.side3:
        
                        stats.relside3 += 5;
                        scenecount = "scene7";
                        return scenecount
                }
            case firstDecisionElementAnswers.right:

                let thirdDecisionElementAnswers = {
                    alone: "Take on the monster by yourselfe",
                    together: "Ask your friends to help you",
                    
                };
        
                let thirdDecisionElement = await ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog1");
                switch (thirdDecisionElement) {
                    case thirdDecisionElementAnswers.alone:
                        
                        stats.number = stats.Main.Strength/10
                        let Throwdice = {
                            Throwdice: "Feel Lucky?", 
                        };
                        let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
                        switch (Dicethrow) {
                            case Throwdice.Throwdice:
                                throwdice();
                        }
                        if (stats.random>=4){
                            ƒS.Character.hideAll();
                            console.log("won fight alone")
                            await ƒS.Text.print("You defeated the Monster");
                            stats.Main.Strength += 10;
                            scenecount = "scene7"
                            return scenecount;
                        }
                        else{
                            ƒS.Character.hideAll();
                            await ƒS.Text.print("Seems like your to weak to fight the Monster alone");
                            await ƒS.Text.print(stats.Side2.name + " rushes to you and Aids you in Battle");
                            stats.relside2 += 5;
                            stats.Main.Strength += 5
                            scenecount = "scene7"
                            return scenecount;
                        }
                        scenecount = "scene7";
                        return scenecount;
                    case thirdDecisionElementAnswers.together:
                        console.log("Fight it together")
                        let fourthDecisionElementAnswers = {
                            char1: stats.Side1.name,
                            char2: stats.Side2.name,
                            char3: stats.Side3.name,
                            
                        };
                
                        let fourthDecisionElement = await ƒS.Menu.getInput(fourthDecisionElementAnswers, "dialog1");
                        switch (fourthDecisionElement) {
                            case fourthDecisionElementAnswers.char1:
                                
                                stats.relside1 += 10
                                scenecount = "scene7";
                                return scenecount;
                            case fourthDecisionElementAnswers.char2:
                                
                                stats.relside2 += 10
                                scenecount = "scene7";
                                return scenecount;
                            case fourthDecisionElementAnswers.char2:
                                
                                stats.relside3 += 10
                                scenecount = "scene7";
                                return scenecount;
                        }
                }
                
            
        }


    }
  }