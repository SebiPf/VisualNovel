namespace fantasyrpg {
    export async function scene6(): ƒS.SceneReturn {
      console.log("Scene 6 Patheway");
      await ƒS.Location.show(locations.zweigung);
      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        await ƒS.Text.print("As you keep walking you notice your path is splitting in 2 paths");
        await ƒS.Text.print("You need to choose if you want to go left or take the right path");

        let firstDecisionElementAnswers = {
            left: "Go Left",
            right: "Go Right",
            
        };

        let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog1");
        switch (firstDecisionElement) {
            case firstDecisionElementAnswers.left:
                await ƒS.Location.show(locations.trail);
                 await ƒS.update(transition.speed.duration, transition.speed.alpha, transition.speed.edge);
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
                await ƒS.Location.show(locations.trail);
                await ƒS.update(transition.speed.duration, transition.pixel.alpha, transition.pixel.edge);





                let thirdDecisionElementAnswers = {
                    alone: "Take on the monster by yourselfe",
                    together: "Ask your friends to help you",
                    
                };
        
                let thirdDecisionElement = await ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog1");
                switch (thirdDecisionElement) {
                    case thirdDecisionElementAnswers.alone:
                        await ƒS.Location.show(locations.fight);
                        await ƒS.update(transition.fight.duration, transition.fight.alpha, transition.fight.edge);
                        
                        stats.number = stats.Main.Strength/10
                        let Throwdice = {
                            Throwdice: "Feel Lucky?", 
                        };
                        let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
                        switch (Dicethrow) {
                            case Throwdice.Throwdice:
                                throwdice();
                        }
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
                            await ƒS.Text.print("your friend rushes to you and Aids you in Battle");
                            if(stats.Main.name == "Samara"){
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
                            else{
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
                            stats.relside2 += 5;
                            stats.Main.Strength += 5
                            scenecount = "scene7"
                            return scenecount;
                        }
                        scenecount = "scene7";
                        return scenecount;
                    case thirdDecisionElementAnswers.together:
                        console.log("Fight it together")
                        await ƒS.Location.show(locations.fight);
                        await ƒS.update(transition.fight.duration, transition.fight.alpha, transition.fight.edge);
                        if(stats.Main.name == "Samara"){
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
                        else{
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
                }
                
            
        }


    }
  }