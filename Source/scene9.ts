namespace fantasyrpg {
    export async function scene9(): ƒS.SceneReturn {
      console.log("scene9 start");

      await ƒS.Text.print("After walking for a while you arrive in a huge room");
      await ƒS.Text.print("You see a strange rock formation and walk toward it");
      await ƒS.Text.print("As you walk close it starts to shine");
      await ƒS.Text.print("You take a step back");
      await ƒS.Text.print("You and your friends look at the awakening of a golem");

      

        
      if(stats.retreat = true){
        await ƒS.Text.print("Now the messege from the Alchemist makes sense");
        let firstDecisionElementAnswers = {
            retreat: "Run away from the golem",
            continue: "Attack the Golem",
      
          };
      
          let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog1");
          switch (firstDecisionElement) {
            case firstDecisionElementAnswers.retreat:
                await ƒS.Text.print("You and your friends ran away from the golem and went back to your village to continue your life");
                scenecount = "end";
                return scenecount;
            case firstDecisionElementAnswers.continue:

                await ƒS.Text.print("You and your friends Decided to fight the golem");

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
                  
                  stats.number = stats.Main.Strength/10
                  throwdice();
                  if(stats.random >= 10){
                    await ƒS.Text.print("You Damaged the Golem but hes not defeated yet"); 
                  }
                  else{
                      if(ƒS.Inventory.getAmount(items.Healthpotion)>0){
                          stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)
                        await ƒS.Text.print("You did not damage the golem"); 
                        await ƒS.Text.print("The Golem Attacked you and you took a lot of damage"); 
                        await ƒS.Text.print("Maybe you have something in your inventory that helps");
                        await ƒS.Text.print("One of your friends decides to attack the golem and damages it");  
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
                        ƒS.Inventory.open();
                        await ƒS.Speech.tell(characters.Narrator, "");
                        await ƒS.Speech.tell(characters.Narrator, "");
                        if(ƒS.Inventory.getAmount(items.Healthpotion)< stats.potionamount){
                            await ƒS.Text.print("your wounds are healed and you get another chance defeating the golem"); 
                            
                        }
                        else{
                            await ƒS.Text.print("You died because of your wounds"); 
                            await ƒS.Text.print("Your friends managed to escape"); 
                            await ƒS.Text.print("They will never forget your bravery"); 
                            await ƒS.Text.print("They went back to the village and told everyone about your bravery"); 
                            await ƒS.Text.print("The village will always remember you as a hero"); 
                            scenecount = "end";
                            return scenecount;
                        }                        
                      }
                      else{
                        await ƒS.Text.print("You died because of your wounds"); 
                        await ƒS.Text.print("Your friends managed to escape"); 
                        await ƒS.Text.print("They will never forget your bravery"); 
                        await ƒS.Text.print("They went back to the village and told everyone about your bravery"); 
                        await ƒS.Text.print("The village will always remember you as a hero"); 
                        scenecount = "end";
                        return scenecount;
                    }
                  }


                  //second dmg phase


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
                  
                  stats.number = stats.Main.Strength/10
                  throwdice();
                  if(stats.random >= 10){
                    await ƒS.Text.print("You Damaged the Golem but hes not defeated yet"); 
                  }
                  else{
                      if(ƒS.Inventory.getAmount(items.Healthpotion)>0){
                          stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)
                        await ƒS.Text.print("You did not damage the golem"); 
                        await ƒS.Text.print("The Golem Attacked you and you took a lot of damage"); 
                        await ƒS.Text.print("Maybe you have something in your inventory that helps");
                        await ƒS.Text.print("One of your friends decides to attack the golem and damages it");  
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
                        ƒS.Inventory.open();
                        await ƒS.Speech.tell(characters.Narrator, "");
                        await ƒS.Speech.tell(characters.Narrator, "");
                        if(ƒS.Inventory.getAmount(items.Healthpotion)< stats.potionamount){
                            await ƒS.Text.print("your wounds are healed and you get another chance defeating the golem"); 
                            
                        }
                        else{
                            await ƒS.Text.print("You died because of your wounds"); 
                            await ƒS.Text.print("Your friends managed to escape"); 
                            await ƒS.Text.print("They will never forget your bravery"); 
                            await ƒS.Text.print("They went back to the village and told everyone about your bravery"); 
                            await ƒS.Text.print("The village will always remember you as a hero"); 
                            scenecount = "end";
                            return scenecount;
                        }                        
                      }
                      else{
                        await ƒS.Text.print("You died because of your wounds"); 
                        await ƒS.Text.print("Your friends managed to escape"); 
                        await ƒS.Text.print("They will never forget your bravery"); 
                        await ƒS.Text.print("They went back to the village and told everyone about your bravery"); 
                        await ƒS.Text.print("The village will always remember you as a hero"); 
                        scenecount = "end";
                        return scenecount;
                    }
                  }


                  //third dmg phase


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
                  
                  stats.number = stats.Main.Strength/10
                  throwdice();
                  if(stats.random >= 10){
                    await ƒS.Text.print("You Damaged the Golem"); 
                    await ƒS.Text.print("Finally the Golem falls to the ground"); 
                    await ƒS.Text.print("You managed to defeat it"); 
                  }
                  else{
                      if(ƒS.Inventory.getAmount(items.Healthpotion)>0){
                          stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)
                        await ƒS.Text.print("You did not damage the golem"); 
                        await ƒS.Text.print("The Golem Attacked you and you took a lot of damage"); 
                        await ƒS.Text.print("Maybe you have something in your inventory that helps");
                        await ƒS.Text.print("One of your friends decides to attack the golem and damages it");  
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
                        ƒS.Inventory.open();
                        await ƒS.Speech.tell(characters.Narrator, "");
                        await ƒS.Speech.tell(characters.Narrator, "");
                        if(ƒS.Inventory.getAmount(items.Healthpotion)< stats.potionamount){
                            await ƒS.Text.print("Your wounds are healed and your friend managed to defeat the golem"); 
                            
                        }
                        else{
                            await ƒS.Text.print("You died because of your wounds"); 
                            await ƒS.Text.print("Your friends managed to escape"); 
                            await ƒS.Text.print("They will never forget your bravery"); 
                            await ƒS.Text.print("They went back to the village and told everyone about your bravery"); 
                            await ƒS.Text.print("The village will always remember you as a hero"); 
                            scenecount = "end";
                            return scenecount;
                        }                        
                      }
                      else{
                        await ƒS.Text.print("You died because of your wounds"); 
                        await ƒS.Text.print("Your friends managed to escape"); 
                        await ƒS.Text.print("They will never forget your bravery"); 
                        await ƒS.Text.print("They went back to the village and told everyone about your bravery"); 
                        await ƒS.Text.print("The village will always remember you as a hero"); 
                        scenecount = "end";
                        return scenecount;
                    }
                  }

                

                
                await ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney"); 
                await ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village"); 
                stats.Main.Strength +=10;
                scenecount = "end";
                return scenecount;





            }
        }
    }
  }