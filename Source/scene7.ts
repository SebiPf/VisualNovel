namespace fantasyrpg {
  export async function scene7(): ƒS.SceneReturn {
    console.log("FudgeStory Template Scene starting");
    await ƒS.Text.print("Suddenly you see a town in the distance");
    await ƒS.Text.print("Do you want to go to the town or continue on your path into the mountains?");
    ƒS.Inventory.add(items.EmptyBottle);
    ƒS.Inventory.add(items.Flower);

    let firstDecisionElementAnswers = {
      city: "Go to the town",
      mountain: "Go to the Mountains",

    };

    let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog1");
    switch (firstDecisionElement) {
      case firstDecisionElementAnswers.city:
        await ƒS.Location.show(locations.villagecenter);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        if (stats.relside1 >= 50 || stats.relside2 >= 50 || stats.relside3 >= 50) {
          await ƒS.Text.print("Do you want to build a relationship with one of your friends?");
          let secondDecisionElementAnswers = {
            yes: "Yes",
            no: "No",
          };

          let secondDecisionElement = await ƒS.Menu.getInput(secondDecisionElementAnswers, "dialog1");
          switch (secondDecisionElement) {
            case secondDecisionElementAnswers.yes:
              await ƒS.Text.print("Who are you thinking of?");
              let control = false;
              while (control == false) {
                let firstDialogueElementAnswers = {
                  side1: stats.Side1.name,
                  side2: stats.Side2.name,
                  side3: stats.Side3.name,
                };

                let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
                switch (firstDialogueElement) {
                  case firstDialogueElementAnswers.side1:
                    if (stats.relside1 >= 50) {
                      control = true;
                      await ƒS.Text.print("You ask " + stats.Side1.name + " to go to the Hot Spring you saw across the road");
                      await ƒS.Location.show(locations.hotspring);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      stats.chosenrel = stats.Side1.name;


                      stats.relside1 += 20;
                      scenecount = "scene8"
                      return scenecount;
                    }
                    else {
                      await ƒS.Text.print("You did not make the right choices to start a relationship with " + stats.Side1.name);
                    }

                  case firstDialogueElementAnswers.side2:
                    if (stats.relside2 >= 50) {
                      control = true;
                      await ƒS.Text.print("You ask " + stats.Side2.name + " to go to the Hot Spring you saw across the road");
                      await ƒS.Location.show(locations.hotspring);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      stats.chosenrel = stats.Side2.name;


                      stats.relside2 += 20;
                      scenecount = "scene8"
                      return scenecount;
                    }
                    else {
                      await ƒS.Text.print("You did not make the right choices to start a relationship with " + stats.Side2.name);
                    }

                  case firstDialogueElementAnswers.side3:
                    if (stats.relside3 >= 50) {
                      control = true;
                      await ƒS.Text.print("You ask " + stats.Side3.name + " to go to the Hot Spring you saw across the road");
                      await ƒS.Location.show(locations.hotspring);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      stats.chosenrel = stats.Side3.name;


                      stats.relside3 += 20;
                      scenecount = "scene8";
                      return scenecount;
                    }
                    else {
                      await ƒS.Text.print("You did not make the right choices to start a relationship with " + stats.Side3.name);
                    }
                }
              }











            case secondDecisionElementAnswers.no:
              
              await ƒS.Text.print("You and your friends decided to search for a tavern to get some food");
              await ƒS.Text.print("But are you able to finde it?");

              stats.number = (stats.relside1+stats.relside2+stats.relside3) / 10
              let Throwdice = {
                Throwdice: "Feel Lucky?",
              };
              let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
              switch (Dicethrow) {
                case Throwdice.Throwdice:
                  throwdice();
              }
              if (stats.random >= 8) {
                await ƒS.Location.show(locations.alchemist);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                await ƒS.Text.print("You find the Tavern and somehow get an Apple");
                ƒS.Inventory.add(items.Apple);

                scenecount = "scene8"
                return scenecount;
              }
              else {
                await ƒS.Text.print("You could not finde the Tavern but you had a great time with your friends");
                
                stats.relside1+=5;
                stats.relside2+=5;
                stats.relside3+=5;
                scenecount = "scene8"
                return scenecount;
              }
              }
        }
        else {
          await ƒS.Text.print("You and your friends decided to search for a tavern to get some food");
          await ƒS.Text.print("But are you able to finde it?");

          stats.number = (stats.relside1+stats.relside2+stats.relside3) / 10
          let Throwdice = {
            Throwdice: "Feel Lucky?",
          };
          let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
          switch (Dicethrow) {
            case Throwdice.Throwdice:
              throwdice();
          }
          if (stats.random >= 8) {
            await ƒS.Location.show(locations.alchemist);
            await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
            await ƒS.Text.print("You find the Tavern and somehow get an Apple");
            ƒS.Inventory.add(items.Apple);

            scenecount = "scene8"
            return scenecount;
          }
          else {
            await ƒS.Text.print("You could not finde the Tavern but you had a great time with your friends");
            
            stats.relside1+=5;
            stats.relside2+=5;
            stats.relside3+=5;
            scenecount = "scene8"
            return scenecount;
          }



        }


      case firstDecisionElementAnswers.mountain:

        await ƒS.Location.show(locations.trailtomountain);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);





        await ƒS.Location.show(locations.trailblocked);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        await ƒS.Text.print("In the Mountains your way is blocked by rocks");
        await ƒS.Text.print("What are you going to do?");

        let check = false;
        while(check == false){
        let thirdDecisionElementAnswers = {
          friends: "Ask friends for help",
          around: "Go around",
          alone: "Do it alone"
          
          
      };
        let thirdDecisionElement = await ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog1");
        switch (true && thirdDecisionElement) {

            case thirdDecisionElementAnswers.friends:

              await ƒS.Location.show(locations.trailtomountain);
              await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);





              check = true;
              stats.relside1 += 5;
              stats.relside2 += 5;
              stats.relside3 += 5;
              scenecount = "scene8"
              return scenecount;

            
            case thirdDecisionElementAnswers.around:
              await ƒS.Location.show(locations.trailwithlake);
              await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
            //stats.number = ƒS.Inventory.getAmount(items.Flower)
              if(ƒS.Inventory.getAmount(items.EmptyBottle)>=1 && ƒS.Inventory.getAmount(items.Flower) >= 1){
                await ƒS.Text.print("Seems like you can do something with your bottle and your Flower");
                await ƒS.Text.print("Open your Inventory and use them if you want");
                if(ƒS.Inventory.getAmount(items.EmptyBottle)==0 && ƒS.Inventory.getAmount(items.Flower) == 0){
                  console.log("nice it worker")
                  ƒS.Inventory.add(items.Healthpotion);
                  await ƒS.Text.print("You just made and Healthpotion");
                  await ƒS.Text.print("Use it whisely");
                }

              }

            










              check = true;
              scenecount = "scene8"
              return scenecount;
            case thirdDecisionElementAnswers.alone:
              await ƒS.Location.show(locations.trailtomountain);
              await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
              stats.number = stats.Main.Strength / 10
              let Throwdice = {
                Throwdice: "Feel Lucky?",
              };
              let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
              switch (Dicethrow) {
                case Throwdice.Throwdice:
                  throwdice();
              }
              
              
              if (stats.random >= 5){
                stats.number = stats.Main.Strength / 10

                await ƒS.Text.print("You but the stones aside by yourselfe");
                await ƒS.Location.show(locations.trailtomountain);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                check = true;
                stats.Main.Strength += 10;
                scenecount = "scene8"
                return scenecount;
              }
              else{
                await ƒS.Text.print("You try pushing the stones but fail");
              }
              


        }

      }









    }


  }
}