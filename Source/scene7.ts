namespace fantasyrpg {
  export async function scene7(): ƒS.SceneReturn {
    await ƒS.Character.hideAll();
    await ƒS.update();
    await ƒS.Location.show(locations.trailtomountain);
    await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
    console.log("scene7");
    await ƒS.Text.print("After defeating the Monster you kept walking");
    await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
    await ƒS.update();
    await ƒS.Speech.tell(stats.Main, "Are you guys okay or did anyone get hurt?");
    await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90));
    await ƒS.update();
    await ƒS.Speech.tell(stats.Side1, "No  we are all fine but I think we all need a small break now");

    await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(70, 90));
    await ƒS.update();

    await ƒS.Speech.tell(stats.Side2, "Yea a break would be great");
    await ƒS.Character.hideAll();
    await ƒS.Location.show(locations.Black);
    await ƒS.update();
    await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
    await ƒS.Text.print("You decided to make a short break");
    await ƒS.Text.print("After your break you started walking again");
    await ƒS.Location.show(locations.trailtomountain);
    await ƒS.update();
    await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);

    ƒS.Sound.play(sound.normal, 0.3, true);
    await ƒS.Text.print("Suddenly you see a town in the distance");
    await ƒS.Text.print("Do you want to go to the town or continue on your path into the mountains?");


    await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(70, 90));
    await ƒS.update();
    await ƒS.Speech.tell(stats.Side2, "Our supplies are getting low should we go to the town there?");
    await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
    await ƒS.update();
    await ƒS.Speech.tell(stats.Side3, "But the Mountains are so close don`t you think we should go there?");
    await ƒS.Speech.tell(stats.Side3, "There will be another town behinde the mountains where we can restock");


    let firstDecisionElementAnswers = {
      city: "Go to the town",
      mountain: "Go to the Mountains",

    };

    let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog");
    switch (firstDecisionElement) {
      case firstDecisionElementAnswers.city:
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
        await ƒS.update();
        await ƒS.Speech.tell(stats.Main, "Let's be save and go to the city now you never know how far away the next town will be");
        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90));
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side1, "Yea that sounds like a good idea");
        await ƒS.Speech.tell(stats.Side1, "Let's go");




        await ƒS.Location.show(locations.villagecenter);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        ƒS.Sound.play(sound.normal, 0, true);
        ƒS.Sound.play(sound.town, 0.3, true);
        await ƒS.Character.hideAll();
        await ƒS.update();
        if (stats.relside1 >= 50 || stats.relside2 >= 50 || stats.relside3 >= 50) {
          await ƒS.Text.print("Do you want to build a relationship with one of your friends?");
          let secondDecisionElementAnswers = {
            yes: "Yes",
            no: "No",
          };

          let secondDecisionElement = await ƒS.Menu.getInput(secondDecisionElementAnswers, "dialog");
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

                let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
                switch (firstDialogueElement) {
                  case firstDialogueElementAnswers.side1:
                    if (stats.relside1 >= 50) {
                      control = true;
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Hey look" + stats.Main.name + " do you see that hotspring over there?");
                      await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "Yea why?");
                      await ƒS.Speech.tell(stats.Side1, "Lets go there together");
                      await ƒS.Speech.tell(stats.Side1, "I think the other 2 will manage to get supplies by them selfes");
                      await ƒS.Speech.tell(stats.Main, "Yea I think so to");
                      await ƒS.Speech.tell(stats.Main, "Hey " + stats.Side2.name + " and " + stats.Side3.name + " can you guys get the supplies?");
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Sure what are you two going to do?");
                      await ƒS.Speech.tell(stats.Main, "We'll just search for the Alchemist");
                      await ƒS.Speech.tell(stats.Side2, "Sounds good");




                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Location.show(locations.hotspring);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Text.print("You and " + stats.Side1.name + " went to the hotspring while the others went to the tavern");
                      await ƒS.Location.show(locations.Black);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Text.print("After your visit at the hotspring you linked back up qith your friends");
                      await ƒS.Location.show(locations.villagecenter);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);

                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "And did you two found the Alchemist?");
                      await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "No unfortunatly not I think the town has no Alchemist");
                      await ƒS.Speech.tell(stats.Side2, "Aww that's ok we got the supplies so we are ready to continue our adventure");
                      await ƒS.Speech.tell(stats.Main, "Great lets stay the night since it is getting dark already");
                      await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side3, "Sounds like a plan");

                      stats.chosenrel = stats.Side1.name;


                      stats.relside1 += 20;
                      ƒS.Sound.play(sound.town, 0, true);
                      scenecount = "scene8"
                      return scenecount;
                    }
                    else {
                      await ƒS.Text.print("You did not make the right choices to start a relationship with " + stats.Side1.name);
                      await ƒS.Location.show(locations.alchemist);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Look there is the Tavern");
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Yea finally we get something good to eat");
                      await ƒS.Character.hide(stats.Side1);
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Fooood!!!");
                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                      await ƒS.Text.print("At the Table " + stats.Side2.name + " throws you an Apple");
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.arrogant, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Here I got you something");
                      ƒS.Inventory.add(items.Apple);
                      await ƒS.Character.show(stats.Main, stats.Main.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "Oh thanks");
                      await ƒS.Speech.tell(stats.Side2, "Just so you get big and strong");
                      await ƒS.Speech.tell(stats.Main, "What is that supposed to mean?");
                      await ƒS.Character.hide(stats.Side2);
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Just messing with you");
                      await ƒS.Speech.tell(stats.Side2, "Just accept my gift");
                      await ƒS.Speech.tell(stats.Main, "Sometimes it is hard to see your irony");
                      await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(70, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side3, "Lets go to sleep guys");
                      await ƒS.Speech.tell(stats.Side3, "So we are fit tomorrow");
                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Location.show(locations.Black);
                      await ƒS.update(1);
                      await ƒS.Text.print("You went into your room to sleep");
                      ƒS.Sound.play(sound.town, 0, true);
                      scenecount = "scene8"
                      return scenecount;
                    }

                  case firstDialogueElementAnswers.side2:
                    if (stats.relside2 >= 50) {
                      control = true;
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Hey look" + stats.Main.name + " do you see that hotspring over there?");
                      await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "Yea why?");
                      await ƒS.Speech.tell(stats.Side2, "Lets go there together");
                      await ƒS.Speech.tell(stats.Side2, "I think the other 2 will manage to get supplies by them selfes");
                      await ƒS.Speech.tell(stats.Main, "Yea I think so to");
                      await ƒS.Speech.tell(stats.Main, "Hey " + stats.Side1.name + " and " + stats.Side3 + " can you guys get the supplies?");
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Sure what are you two going to do?");
                      await ƒS.Speech.tell(stats.Main, "We'll just search for the Alchemist");
                      await ƒS.Speech.tell(stats.Side1, "Sounds good");




                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Location.show(locations.hotspring);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Text.print("You and " + stats.Side2.name + " went to the hotspring while the others went to the tavern");
                      await ƒS.Location.show(locations.Black);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Text.print("After your visit at the hotspring you linked back up qith your friends");
                      await ƒS.Location.show(locations.villagecenter);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);

                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(70, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "And did you two found the Alchemist?");
                      await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "No unfortunatly not I think the town has no Alchemist");
                      await ƒS.Speech.tell(stats.Side1, "Aww that's ok we got the supplies so we are ready to continue our adventure");
                      await ƒS.Speech.tell(stats.Main, "Great lets stay the night since it is getting dark already");
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Sounds like a plan");
                      stats.chosenrel = stats.Side2.name;


                      stats.relside2 += 20;
                      scenecount = "scene8"
                      ƒS.Sound.play(sound.town, 0, true);
                      return scenecount;
                    }
                    else {
                      await ƒS.Text.print("You did not make the right choices to start a relationship with " + stats.Side2.name);
                      await ƒS.Location.show(locations.alchemist);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Look there is the Tavern");
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Yea finally we get something good to eat");
                      await ƒS.Character.hide(stats.Side1);
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Fooood!!!");
                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                      await ƒS.Text.print("At the Table " + stats.Side2.name + " throws you an Apple");
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.arrogant, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Here I got you something");
                      ƒS.Inventory.add(items.Apple);
                      await ƒS.Character.show(stats.Main, stats.Main.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "Oh thanks");
                      await ƒS.Speech.tell(stats.Side2, "Just so you get big and strong");
                      await ƒS.Speech.tell(stats.Main, "What is that supposed to mean?");
                      await ƒS.Character.hide(stats.Side2);
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Just messing with you");
                      await ƒS.Speech.tell(stats.Side2, "Just accept my gift");
                      await ƒS.Speech.tell(stats.Main, "Sometimes it is hard to see your irony");
                      await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(70, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side3, "Lets go to sleep guys");
                      await ƒS.Speech.tell(stats.Side3, "So we are fit tomorrow");
                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Location.show(locations.Black);
                      await ƒS.update(1);
                      await ƒS.Text.print("You went into your room to sleep");
                      ƒS.Sound.play(sound.town, 0, true);
                      scenecount = "scene8"
                      return scenecount;
                    }

                  case firstDialogueElementAnswers.side3:
                    if (stats.relside3 >= 50) {
                      control = true;
                      await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(90, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side3, "Hey look" + stats.Main.name + " do you see that hotspring over there?");
                      await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "Yea why?");
                      await ƒS.Speech.tell(stats.Side3, "Lets go there together");
                      await ƒS.Speech.tell(stats.Side3, "I think the other 2 will manage to get supplies by them selfes");
                      await ƒS.Speech.tell(stats.Main, "Yea I think so to");
                      await ƒS.Speech.tell(stats.Main, "Hey " + stats.Side2.name + " and " + stats.Side3 + " can you guys get the supplies?");
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Sure what are you two going to do?");
                      await ƒS.Speech.tell(stats.Main, "We'll just search for the Alchemist");
                      await ƒS.Speech.tell(stats.Side2, "Sounds good");




                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Location.show(locations.hotspring);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Text.print("You and " + stats.Side3.name + " went to the hotspring while the others went to the tavern");
                      await ƒS.Location.show(locations.Black);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Text.print("After your visit at the hotspring you linked back up qith your friends");
                      await ƒS.Location.show(locations.villagecenter);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);

                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "And did you two found the Alchemist?");
                      await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "No unfortunatly not I think the town has no Alchemist");
                      await ƒS.Speech.tell(stats.Side2, "Aww that's ok we got the supplies so we are ready to continue our adventure");
                      await ƒS.Speech.tell(stats.Main, "Great lets stay the night since it is getting dark already");
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Sounds like a plan");



                      stats.chosenrel = stats.Side3.name;
                      stats.relside3 += 20;
                      ƒS.Sound.play(sound.town, 0, true);
                      scenecount = "scene8";
                      return scenecount;
                    }
                    else {
                      await ƒS.Text.print("You did not make the right choices to start a relationship with " + stats.Side3.name);
                      await ƒS.Location.show(locations.alchemist);
                      await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Look there is the Tavern");
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Yea finally we get something good to eat");
                      await ƒS.Character.hide(stats.Side1);
                      await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side1, "Fooood!!!");
                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                      await ƒS.Text.print("At the Table " + stats.Side2.name + " throws you an Apple");
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.arrogant, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Here I got you something");
                      ƒS.Inventory.add(items.Apple);
                      await ƒS.Character.show(stats.Main, stats.Main.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Main, "Oh thanks");
                      await ƒS.Speech.tell(stats.Side2, "Just so you get big and strong");
                      await ƒS.Speech.tell(stats.Main, "What is that supposed to mean?");
                      await ƒS.Character.hide(stats.Side2);
                      await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side2, "Just messing with you");
                      await ƒS.Speech.tell(stats.Side2, "Just accept my gift");
                      await ƒS.Speech.tell(stats.Main, "Sometimes it is hard to see your irony");
                      await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(70, 90))
                      await ƒS.update();
                      await ƒS.Speech.tell(stats.Side3, "Lets go to sleep guys");
                      await ƒS.Speech.tell(stats.Side3, "So we are fit tomorrow");
                      await ƒS.Character.hideAll();
                      await ƒS.update();
                      await ƒS.Location.show(locations.Black);
                      await ƒS.update(1);
                      await ƒS.Text.print("You went into your room to sleep");
                      ƒS.Sound.play(sound.town, 0, true);
                      scenecount = "scene8"
                      return scenecount;
                    }


                }
              }











            case secondDecisionElementAnswers.no:

              await ƒS.Text.print("You and your friends decided to search for a tavern to get some food");
              await ƒS.Text.print("But are you able to finde it?");

              stats.number = (stats.relside1 + stats.relside2 + stats.relside3) / 10
              let Throwdice = {
                Throwdice: "Can you finde the Tavern?",
              };
              let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog");
              switch (Dicethrow) {
                case Throwdice.Throwdice:
                  throwdice();
              }
              if (stats.random >= 8) {
                await ƒS.Location.show(locations.alchemist);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Look there is the Tavern");
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Yea finally we get something good to eat");
                await ƒS.Character.hide(stats.Side1);
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Fooood!!!");
                await ƒS.Character.hideAll();
                await ƒS.update();
                await ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                await ƒS.Text.print("At the Table " + stats.Side2.name + " throws you an Apple");
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.arrogant, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Here I got you something");
                ƒS.Inventory.add(items.Apple);
                await ƒS.Character.show(stats.Main, stats.Main.pose.happy, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Oh thanks");
                await ƒS.Speech.tell(stats.Side2, "Just so you get big and strong");
                await ƒS.Speech.tell(stats.Main, "What is that supposed to mean?");
                await ƒS.Character.hide(stats.Side2);
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Just messing with you");
                await ƒS.Speech.tell(stats.Side2, "Just accept my gift");
                await ƒS.Speech.tell(stats.Main, "Sometimes it is hard to see your irony");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(70, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Lets go to sleep guys");
                await ƒS.Speech.tell(stats.Side3, "So we are fit tomorrow");
                await ƒS.Character.hideAll();
                await ƒS.update();
                await ƒS.Location.show(locations.Black);
                await ƒS.update(1);
                await ƒS.Text.print("You went into your room to sleep");
                ƒS.Sound.play(sound.town, 0, true);
                scenecount = "scene8"
                return scenecount;
              }
              else {
                await ƒS.Text.print("You could not finde the Tavern");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Guys I don`t think we will find the Tavern");
                await ƒS.Speech.tell(stats.Side3, "Let's just make camp outside the town and go to the next city tomorrow");
                await ƒS.Speech.tell(stats.Side3, "We still have enough supplies to get to the next town I think");
                await ƒS.Character.show(stats.Main, stats.Main.pose.happy, ƒS.positionPercent(10, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Yea I think you're right");
                await ƒS.Character.hideAll();
                await ƒS.update();
                await ƒS.Location.show(locations.Black);
                await ƒS.update(1);
                await ƒS.Text.print("You and your firends went just outside of the city");
                await ƒS.Text.print("You decided to play cards");
                await ƒS.Text.print("After having a great time playing cards with your firends you went to sleep");


                stats.relside1 += 5;
                stats.relside2 += 5;
                stats.relside3 += 5;
                ƒS.Sound.play(sound.town, 0, true);
                await ƒS.Character.hideAll();
                await ƒS.update();
                scenecount = "scene8"
                return scenecount;
              }
          }
        }
        else {
          await ƒS.Text.print("You and your friends decided to search for a tavern to get some food");
          await ƒS.Text.print("But are you able to finde it?");

          stats.number = (stats.relside1 + stats.relside2 + stats.relside3) / 10
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
            await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Side1, "Look there is the Tavern");
            await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(70, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Side2, "Yea finally we get something good to eat");
            await ƒS.Character.hide(stats.Side1);
            await ƒS.Character.show(stats.Side1, stats.Side1.pose.happy, ƒS.positionPercent(90, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Side1, "Fooood!!!");
            await ƒS.Character.hideAll();
            await ƒS.update();
            await ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
            await ƒS.Text.print("At the Table " + stats.Side2.name + " throws you an Apple");
            await ƒS.Character.show(stats.Side2, stats.Side2.pose.arrogant, ƒS.positionPercent(90, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Side2, "Here I got you something");
            ƒS.Inventory.add(items.Apple);
            await ƒS.Character.show(stats.Main, stats.Main.pose.happy, ƒS.positionPercent(90, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Main, "Oh thanks");
            await ƒS.Speech.tell(stats.Side2, "Just so you get big and strong");
            await ƒS.Speech.tell(stats.Main, "What is that supposed to mean?");
            await ƒS.Character.hide(stats.Side2);
            await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Side2, "Just messing with you");
            await ƒS.Speech.tell(stats.Side2, "Just accept my gift");
            await ƒS.Speech.tell(stats.Main, "Sometimes it is hard to see your irony");
            await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(70, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Side3, "Lets go to sleep guys");
            await ƒS.Speech.tell(stats.Side3, "So we are fit tomorrow");
            await ƒS.Character.hideAll();
            await ƒS.update();
            await ƒS.Location.show(locations.Black);
            await ƒS.update(1);
            await ƒS.Text.print("You went into your room to sleep");
            ƒS.Sound.play(sound.town, 0, true);
            await ƒS.Character.hideAll();
            await ƒS.update();
            scenecount = "scene8"
            return scenecount;
          }
          else {
            await ƒS.Text.print("You could not finde the Tavern");
            await ƒS.Character.show(stats.Side3, stats.Side3.pose.happy, ƒS.positionPercent(90, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Side3, "Guys I don`t think we will find the Tavern");
            await ƒS.Speech.tell(stats.Side3, "Let's just make camp outside the town and go to the next city tomorrow");
            await ƒS.Speech.tell(stats.Side3, "We still have enough supplies to get to the next town I think");
            await ƒS.Character.show(stats.Main, stats.Main.pose.happy, ƒS.positionPercent(10, 90))
            await ƒS.update();
            await ƒS.Speech.tell(stats.Main, "Yea I think you're right");
            await ƒS.Location.show(locations.Black);
            await ƒS.update(1);
            await ƒS.Text.print("You and your firends went just outside of the city");
            await ƒS.Text.print("You decided to play cards");
            await ƒS.Text.print("After having a great time playing cards with your firends you went to sleep");


            stats.relside1 += 5;
            stats.relside2 += 5;
            stats.relside3 += 5;
            ƒS.Sound.play(sound.town, 0, true);
            await ƒS.Character.hideAll();
            await ƒS.update();
            scenecount = "scene8"
            return scenecount;
          }



        }


      case firstDecisionElementAnswers.mountain:

        await ƒS.Location.show(locations.trailtomountain);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side2, "Hey " + stats.Main.name + " what do you think will be up the mountains");
        await ƒS.Speech.tell(stats.Side2, "maybe we finde a cool ruine or something");
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Main, "Mhh no I don`t think we will find anything special");
        await ƒS.Speech.tell(stats.Main, "But maybe there is something cool behind the mountains");
        await ƒS.Speech.tell(stats.Side2, "Maybe");
        await ƒS.Character.hideAll();
        await ƒS.update();
        await ƒS.Location.show(locations.Black);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.pixel.edge);
        await ƒS.Text.print("After waling for a while you see something in the distance");
        await ƒS.Location.show(locations.trailblocked);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        await ƒS.Text.print("Seems like some rocks block your way");
        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side1, "Oh no what are we going to do now?");
        await ƒS.Speech.tell(stats.Side1, "I don't want to go all the way back to go around it");
        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(70, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side3, "Maybe we can climb over it");
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Main, "No I don`t think so the stones have no grip at all");
        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(50, 90))
        await ƒS.update();
        await ƒS.Speech.tell(stats.Side2, "Maybe we can push them away");
        await ƒS.Character.hideAll();
        await ƒS.update();

        let check = false;
        while (check == false) {
          let thirdDecisionElementAnswers = {
            friends: "Push them away with your friends",
            around: "Go around",
            alone: "Try push them alone"


          };
          let thirdDecisionElement = await ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog");
          switch (true && thirdDecisionElement) {

            case thirdDecisionElementAnswers.friends:
              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Main, "Lets try to push them away together");
              await ƒS.Speech.tell(stats.Main, "I think we are strong enough for that");
              await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(50, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Side2, "If you think so lets do it");
              await ƒS.Character.hideAll();
              await ƒS.update();
              await ƒS.Text.print("You and your friends went up to the stones and pushed them away");
              await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(50, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Side2, "Let's go we did it");
              await ƒS.Speech.tell(stats.Side2, "The way around would have been so long");
              await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(70, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Side3, "Yea I am glad we managed to push them away");
              await ƒS.Character.hideAll();
              await ƒS.update();

              await ƒS.Location.show(locations.trailtomountain);
              await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
              await ƒS.Text.print("After successfully pushing away the rocks you keept waling through the mountains");
              await ƒS.Location.show(locations.Black);
              await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
              await ƒS.Text.print("when it got darker and darker you decided to make camp and continue tomorrow");
              check = true;
              stats.relside1 += 5;
              stats.relside2 += 5;
              stats.relside3 += 5;
              ƒS.Sound.play(sound.normal, 0, true);
              scenecount = "scene8"
              return scenecount;


            case thirdDecisionElementAnswers.around:

              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Main, "Lets go around I think I saw a small path over there which goes up the mountains");
              await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(50, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Side2, "Really??");
              await ƒS.Speech.tell(stats.Side2, "I'd rather go back to the town then");

              await ƒS.Speech.tell(stats.Main, "Ah common it will just cost us like 5 min to go around it");
              await ƒS.Speech.tell(stats.Side2, "Ok fine");
              await ƒS.Character.hideAll();
              await ƒS.update();
              await ƒS.Location.show(locations.trailwithlake);
              await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
              //stats.number = ƒS.Inventory.getAmount(items.Flower)
              if (ƒS.Inventory.getAmount(items.EmptyBottle) >= 1 && ƒS.Inventory.getAmount(items.Flower) >= 1) {
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Guys do you see that lake there?");
                await ƒS.Speech.tell(stats.Main, "It seems like it is shimmering");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(50, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Oh wow that must be the kind of water that is used to make potions");
                await ƒS.Speech.tell(stats.Main, "Really do you think we can use the flower we found to make a potion with it?");
                await ƒS.Speech.tell(stats.Side3, "Maybe");
                await ƒS.Speech.tell(stats.Side3, "I think it is worth a try don`t you think so?");
                await ƒS.Speech.tell(stats.Side3, "If you want just put the flower in the bottle and fill it with water");
                await ƒS.Text.print("Open your Inventory and use them if you want");
                await ƒS.Speech.tell(characters.Narrator, "");
                await ƒS.Speech.tell(characters.Narrator, "");
                if (ƒS.Inventory.getAmount(items.EmptyBottle) == 0 && ƒS.Inventory.getAmount(items.Flower) == 0) {
                  console.log("nice it worker")
                  ƒS.Inventory.add(items.Healthpotion);
                  await ƒS.Text.print("You put the flower in the Bottle you found and filled it with water");
                  ƒS.Inventory.add(items.Healthpotion);
                  await ƒS.Speech.tell(stats.Side3, "Wow it looks like it is working it is turning red");
                  await ƒS.Speech.tell(stats.Side3, "I think it is a Healing potion");
                  await ƒS.Speech.tell(stats.Side3, "Could come in handy at some point");
                }
                await ƒS.Speech.tell(stats.Main, "Mhh no I think I will just keep the flower for now");
              }
              await ƒS.Text.print("You keept walking untill it got darker");

              await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Side1, "Look its is getting dark already lets make camp and continue tommorrow");
              await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(50, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Side2, "Yea thats a good idea");
              await ƒS.Speech.tell(stats.Side2, "I am so tired i can't walk another step");
              await ƒS.Character.hideAll();
              await ƒS.update();
              await ƒS.Location.show(locations.Black);
              await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
              await ƒS.Text.print("Your friends decided to make camp and continue tomorrow");
              





              ƒS.Sound.play(sound.normal, 0, true);
              check = true;
              scenecount = "scene8"
              return scenecount;
            case thirdDecisionElementAnswers.alone:



              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Speech.tell(stats.Main, "Let me try pushing them away myselfe");





              
              stats.number = stats.Main.Strength / 10
              let Throwdice = {
                Throwdice: "Are you stron enough?",
              };
              let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
              switch (Dicethrow) {
                case Throwdice.Throwdice:
                  throwdice();
              }


              if (stats.random >= 5) {
                stats.number = stats.Main.Strength / 10

                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "wow you managed to push them alone??");
                await ƒS.Speech.tell(stats.Side1, "I always underestimate your strenght "+ stats.Main);
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Yea I can`t belive you did that");
                await ƒS.Location.show(locations.trailtomountain);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                await ƒS.Text.print("After successfully pushing away the rocks you and your friends kept waling through the mountains");
                await ƒS.Location.show(locations.Black);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
                await ƒS.Text.print("when it got darker and darker you decided to make camp and continue tomorrow");
                check = true;
                stats.Main.Strength += 10;
                ƒS.Sound.play(sound.normal, 0, true);
                scenecount = "scene8"
                return scenecount;
              }
              else {
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.veryhappy, ƒS.positionPercent(90, 90))
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Hahaha your really thought you can push them away by yourselfe?");
                await ƒS.Speech.tell(stats.Side1, "Sould we help you or are you going to try again?");
              }



          }

        }

    }


  }
}