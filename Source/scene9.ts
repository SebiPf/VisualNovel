namespace fantasyrpg {
  export async function scene9(): ƒS.SceneReturn {
    console.log("scene9 start");
    await ƒS.Character.hideAll();
    await ƒS.update();
    await ƒS.Inventory.add(items.Scroll);
    await ƒS.Location.show(locations.cave);
    await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
    ƒS.Sound.play(sound.normal, 0.3, true);
    stats.incave = true;

    await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(60, 90))
    await ƒS.update();

    await ƒS.Speech.tell(stats.Side2, "What do you guys think will we find at the end of this cave?");
    await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(40, 90))
    await ƒS.update();
    await ƒS.Speech.tell(stats.Side1, "Maybe we will come out on the other side of the hill");
    await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(20, 90))
    await ƒS.update();
    await ƒS.Speech.tell(stats.Side3, "Na I don't think we will find anything here");
    await ƒS.Speech.tell(stats.Side3, "I don't even think anyone was ever here");
    await ƒS.Speech.tell(stats.Side3, "Like it was a suprise we saw the tiny entrance");
    await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
    await ƒS.update();
    await ƒS.Speech.tell(stats.Main, "Might be but exploring is always fun even if you can't find anything");



    await ƒS.Character.hideAll();
    await ƒS.update();
    await ƒS.Text.print("After walking for a while you arrive in a huge room");
    await ƒS.Location.show(locations.caveboss);
    await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
    ƒS.Sound.fade(sound.normal, 0, 1);
    ƒS.Sound.play(sound.fight, 0.3, true);

    ƒS.Sound.play(sound.steps, 0.4, false);
    await ƒS.Character.show(characters.Golem, characters.Golem.pose.dead, ƒS.positionPercent(90, 90))
    await ƒS.update();
    await ƒS.Text.print("You see a strange rock formation and walk toward it");
    await ƒS.Text.print("As you walk close it starts to shine");
    ƒS.Sound.play(sound.steps, 0.4, false);
    await ƒS.Character.animate(characters.Stone, characters.Stone.pose.normal, stones());
    await ƒS.Text.print("You take a step back");
    ƒS.Sound.play(sound.steps, 0.4, false);
    await ƒS.Character.animate(characters.Stone3, characters.Stone3.pose.normal, stones2());
    await ƒS.Text.print("You and your friends look at the awakening of a golem");
    await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(40, 90))
    await ƒS.update();
    await ƒS.Speech.tell(stats.Side1, "Guys I don't know about this one");
    ƒS.Sound.play(sound.steps, 0.4, false);
    await ƒS.Character.animate(characters.Stone2, characters.Stone2.pose.normal, stones1());


    await ƒS.update();
    await ƒS.Character.hide(characters.Stone);
    await ƒS.Character.hide(characters.Stone2);
    await ƒS.Character.hide(characters.Stone3);
    await ƒS.update();


    await ƒS.Character.show(characters.Golem, characters.Golem.pose.death7, ƒS.positionPercent(90, 90))
    await ƒS.update(0.2);
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Golem, characters.Golem.pose.death6, ƒS.positionPercent(90, 90))
    await ƒS.update(0.2);
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Golem, characters.Golem.pose.death5, ƒS.positionPercent(90, 90))
    await ƒS.update(0.2);
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Golem, characters.Golem.pose.death4, ƒS.positionPercent(90, 90))
    await ƒS.update(0.2);
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Golem, characters.Golem.pose.death3, ƒS.positionPercent(90, 90))
    await ƒS.update(0.2);
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Golem, characters.Golem.pose.death2, ƒS.positionPercent(90, 90))
    await ƒS.update(0.2);
    await ƒS.Character.hideAll();
    await ƒS.Character.show(characters.Golem, characters.Golem.pose.death1, ƒS.positionPercent(90, 90))
    await ƒS.update(0.2);
    await ƒS.Character.hideAll();
    await ƒS.update(0.2);
    await ƒS.Character.show(characters.Golem, characters.Golem.pose.normal, ƒS.positionPercent(90, 90))
    await ƒS.update(0.2);

    if (stats.retreat == true) {
      await ƒS.Text.print("Now the message from the Alchemist makes sense");
      let firstDecisionElementAnswers = {
        retreat: "Run away from the golem",
        continue: "Attack the Golem",

      };

      let firstDecisionElement = await ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog5");
      switch (firstDecisionElement) {
        case firstDecisionElementAnswers.retreat:
          await ƒS.Location.show(locations.Black);
          await ƒS.update(transition.speed.duration, transition.speed.alpha, transition.speed.edge);
          await ƒS.Text.print("You and your friends ran away from the golem and went back to your village to continue your life");
          await ƒS.Character.hideAll();
          await ƒS.update(1);
          ƒS.Sound.play(sound.fight, 0, true);
          scenecount = "end";
          return scenecount;
        case firstDecisionElementAnswers.continue:
          stats.bossfight = true;
          await ƒS.Text.print("You and your friends Decided to fight the golem");
          await ƒS.Text.print("Maybe you have something in your inventory that would help");
          await ƒS.Text.print("Something to make you stronger");
          await ƒS.Speech.tell(characters.Narrator, "");
          await ƒS.Speech.tell(characters.Narrator, "");
          await ƒS.Speech.tell(characters.Narrator, "");
          if (stats.scrollused == true) {
            ƒS.Text.print("Something is happening you feel very strong all of the sudden");
            ƒS.Text.print("You decide to fire off all your spells");
            skill1funktion();
            stats.skillused = false;
            skill2funktion();
            stats.skillused = false;
            skill3funktion();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death1, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death2, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death3, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death4, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death5, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death6, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death7, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.dead, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            ƒS.Text.print("You managed to defeat the Golem in one blow");
            ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
            ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
            scenecount = "end";
            return scenecount;


          }

          let skillselectionAnswer = {
            skill1: stats.Main.Skill1,
            skill2: stats.Main.Skill2,
            skill3: stats.Main.Skill3,

          };

          let skillselection = await ƒS.Menu.getInput(skillselectionAnswer, "dialog5");
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
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();
          stats.number = stats.Main.Strength / 10
          throwdice();
          if (stats.random >= 9) {
            await ƒS.Text.print("You Damaged the Golem but hes not defeated yet");
          }
          else {
            if (ƒS.Inventory.getAmount(items.Healthpotion) > 0) {
              stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)
              await ƒS.Text.print("You did not damage the golem");
              await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(70, 65))
              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
              await ƒS.update();
              await ƒS.Text.print("Maybe you have something in your inventory that helps");
              await ƒS.Text.print("One of your friends decides to attack the golem and damages it");
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
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
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
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
              }
              ƒS.Inventory.open();
              await ƒS.Speech.tell(characters.Narrator, "");
              await ƒS.Speech.tell(characters.Narrator, "");
              if (ƒS.Inventory.getAmount(items.Healthpotion) < stats.potionamount) {
                await ƒS.Text.print("your wounds are healed and you get another chance defeating the golem");

              }
              else {
                await ƒS.Text.print("You died because of your wounds");
                await ƒS.Text.print("Your friends managed to escape");
                await ƒS.Text.print("They will never forget your bravery");
                await ƒS.Text.print("They went back to the village and told everyone about your bravery");
                await ƒS.Text.print("The village will always remember you as a hero");
                await ƒS.Character.hideAll();
                await ƒS.update(1);
                ƒS.Sound.play(sound.fight, 0, true);
                scenecount = "end";
                return scenecount;
              }
            }
            else {
              await ƒS.Text.print("You did not damage the golem");
              await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(70, 65))
              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
              await ƒS.update();
              await ƒS.Text.print("You died because of your wounds");
              await ƒS.Text.print("Your friends managed to escape");
              await ƒS.Text.print("They will never forget your bravery");
              await ƒS.Text.print("They went back to the village and told everyone about your bravery");
              await ƒS.Text.print("The village will always remember you as a hero");
              await ƒS.Character.hideAll();
              await ƒS.update(1);
              ƒS.Sound.play(sound.fight, 0, true);
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

          let skillselection1 = await ƒS.Menu.getInput(skillselectionAnswer1, "dialog5");
          switch (skillselection1) {
            case skillselectionAnswer1.skill1:

              skill1funktion();


            case skillselectionAnswer1.skill2:
              if (stats.skillused == false) {
                skill2funktion();
              }


            case skillselectionAnswer1.skill3:
              if (stats.skillused == false) {
                skill3funktion();
              }
              stats.skillused = false;

          }
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();
          stats.number = stats.Main.Strength / 10
          throwdice();
          if (stats.random >= 9) {
            await ƒS.Text.print("You Damaged the Golem but hes not defeated yet");
          }
          else {
            if (ƒS.Inventory.getAmount(items.Healthpotion) > 0) {
              stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)
              await ƒS.Text.print("You did not damage the golem");
              await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(90, 85))
              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
              await ƒS.update();
              await ƒS.Text.print("Maybe you have something in your inventory that helps");
              await ƒS.Text.print("One of your friends decides to attack the golem and damages it");
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
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
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
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
              }
              ƒS.Inventory.open();
              await ƒS.Speech.tell(characters.Narrator, "");
              await ƒS.Speech.tell(characters.Narrator, "");
              if (ƒS.Inventory.getAmount(items.Healthpotion) < stats.potionamount) {
                await ƒS.Text.print("your wounds are healed and you get another chance defeating the golem");

              }
              else {
                await ƒS.Text.print("You died because of your wounds");
                await ƒS.Text.print("Your friends managed to escape");
                await ƒS.Text.print("They will never forget your bravery");
                await ƒS.Text.print("They went back to the village and told everyone about your bravery");
                await ƒS.Text.print("The village will always remember you as a hero");
                await ƒS.Character.hideAll();
                await ƒS.update(1);
                ƒS.Sound.play(sound.fight, 0, true);
                scenecount = "end";
                return scenecount;
              }
            }
            else {
              await ƒS.Text.print("You did not damage the golem");
              await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(70, 65))
              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
              await ƒS.update();
              await ƒS.Text.print("You died because of your wounds");
              await ƒS.Text.print("Your friends managed to escape");
              await ƒS.Text.print("They will never forget your bravery");
              await ƒS.Text.print("They went back to the village and told everyone about your bravery");
              await ƒS.Text.print("The village will always remember you as a hero");
              await ƒS.Character.hideAll();
              await ƒS.update(1);
              ƒS.Sound.play(sound.fight, 0, true);
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

          let skillselection2 = await ƒS.Menu.getInput(skillselectionAnswer2, "dialog5");
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
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();

          stats.number = stats.Main.Strength / 10
          throwdice();
          if (stats.random >= 9) {
            await ƒS.Text.print("You Damaged the Golem");
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death1, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death2, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death3, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death4, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death5, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death6, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death7, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.dead, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();
            await ƒS.Text.print("Finally the Golem falls to the ground");
            await ƒS.Text.print("You managed to defeat it");




            ////////////////////////////////////////////////////////////////////////////////

          }
          else {
            if (ƒS.Inventory.getAmount(items.Healthpotion) > 0) {
              stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)
              await ƒS.Text.print("You did not damage the golem");
              await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(90, 85))
              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
              await ƒS.update();
              await ƒS.Text.print("Maybe you have something in your inventory that helps");
              await ƒS.Text.print("One of your friends decides to attack the golem and damages it");
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
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
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
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
              }
              ƒS.Inventory.open();
              await ƒS.Speech.tell(characters.Narrator, "");
              await ƒS.Speech.tell(characters.Narrator, "");
              if (ƒS.Inventory.getAmount(items.Healthpotion) < stats.potionamount) {
                await ƒS.Text.print("Your wounds are healed and your friend managed to defeat the golem");
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.death1, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.death2, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.death3, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.death4, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.death5, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.death6, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.death7, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.dead, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();

                await ƒS.Text.print("Your friends helped you defeat the Golem");
                await ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
                await ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
                await ƒS.Character.hideAll();
                await ƒS.update(1);
                ƒS.Sound.play(sound.fight, 0, true);
                scenecount = "end";
                return scenecount;
              }
              else {

                await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.hideAll();
                await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
                await ƒS.update(0.2);
                await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(90, 85))
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
                await ƒS.update();
                await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
                await ƒS.update();

                await ƒS.Text.print("You died because of your wounds");
                await ƒS.Text.print("Your friends managed to escape");
                await ƒS.Text.print("They will never forget your bravery");
                await ƒS.Text.print("They went back to the village and told everyone about your bravery");
                await ƒS.Text.print("The village will always remember you as a hero");
                await ƒS.Character.hideAll();
                await ƒS.update(1);
                ƒS.Sound.play(sound.fight, 0, true);
                scenecount = "end";
                return scenecount;
              }
            }
            else {
              await ƒS.Text.print("You did not damage the golem");
              await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.hideAll();
              await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
              await ƒS.update(0.2);
              await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(70, 65))
              await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
              await ƒS.update();
              await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
              await ƒS.update();
              await ƒS.Text.print("You died because of your wounds");
              await ƒS.Text.print("Your friends managed to escape");
              await ƒS.Text.print("They will never forget your bravery");
              await ƒS.Text.print("They went back to the village and told everyone about your bravery");
              await ƒS.Text.print("The village will always remember you as a hero");
              await ƒS.Character.hideAll();
              await ƒS.update(1);
              ƒS.Sound.play(sound.fight, 0, true);
              scenecount = "end";
              return scenecount;
            }
          }




          await ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
          await ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
          await ƒS.Character.hideAll();
          await ƒS.update(1);
          stats.Main.Strength += 10;
          ƒS.Sound.play(sound.fight, 0, true);
          scenecount = "end";
          return scenecount;





      }
    }
    else {
      stats.bossfight = true;
      await ƒS.Text.print("You and your friends Decided to fight the golem");
      await ƒS.Text.print("Maybe you have something in your inventory that would help");
      await ƒS.Text.print("Something to make you stronger");
      await ƒS.Speech.tell(characters.Narrator, "");
      await ƒS.Speech.tell(characters.Narrator, "");
      await ƒS.Speech.tell(characters.Narrator, "");
      if (stats.scrollused == true) {
        ƒS.Text.print("Something is happening you feel very strong all of the sudden");
        ƒS.Text.print("You decide to fire off all your spells");
        skill1funktion();
        stats.skillused = false;
        skill2funktion();
        stats.skillused = false;
        skill3funktion();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death1, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death2, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death3, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death4, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death5, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death6, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death7, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.dead, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
        await ƒS.update();
        ƒS.Text.print("You managed to defeat the Golem in one blow");
        ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
        ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
        scenecount = "end";
        return scenecount;


      }

      let skillselectionAnswer3 = {
        skill1: stats.Main.Skill1,
        skill2: stats.Main.Skill2,
        skill3: stats.Main.Skill3,

      };

      let skillselection3 = await ƒS.Menu.getInput(skillselectionAnswer3, "dialog5");
      switch (skillselection3) {
        case skillselectionAnswer3.skill1:

          skill1funktion();


        case skillselectionAnswer3.skill2:
          if (stats.skillused == false) {
            skill2funktion();
          }


        case skillselectionAnswer3.skill3:
          if (stats.skillused == false) {
            skill3funktion();
          }
          stats.skillused = false;

      }

      stats.number = stats.Main.Strength / 10
      throwdice();
      if (stats.random >= 9) {
        await ƒS.Text.print("You Damaged the Golem but hes not defeated yet");
      }
      else {
        if (ƒS.Inventory.getAmount(items.Healthpotion) > 0) {
          stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)

          await ƒS.Text.print("You did not damage the golem");
          await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(70, 65))
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();
          await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
          await ƒS.update();
          await ƒS.Text.print("Maybe you have something in your inventory that helps");
          await ƒS.Text.print("One of your friends decides to attack the golem");
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
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();
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
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();
          }
          //ƒS.Inventory.open();
          await ƒS.Speech.tell(characters.Narrator, "");
          await ƒS.Speech.tell(characters.Narrator, "");
          if (ƒS.Inventory.getAmount(items.Healthpotion) < stats.potionamount) {
            await ƒS.Text.print("your wounds are healed and you get another chance defeating the golem");






            ///////////////////////////////////////////////////////////
          }
          else {
            await ƒS.Text.print("You died because of your wounds");
            await ƒS.Text.print("Your friends managed to escape");
            await ƒS.Text.print("They will never forget your bravery");
            await ƒS.Text.print("They went back to the village and told everyone about your bravery");
            await ƒS.Text.print("The village will always remember you as a hero");
            await ƒS.Character.hideAll();
            await ƒS.update(1);
            ƒS.Sound.play(sound.fight, 0, true);
            scenecount = "end";
            return scenecount;
          }
        }
        else {
          await ƒS.Text.print("You did not damage the golem");
          await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(70, 65))
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();
          await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
          await ƒS.update();
          await ƒS.Text.print("You died because of your wounds");
          await ƒS.Text.print("Your friends managed to escape");
          await ƒS.Text.print("They will never forget your bravery");
          await ƒS.Text.print("They went back to the village and told everyone about your bravery");
          await ƒS.Text.print("The village will always remember you as a hero");
          await ƒS.Character.hideAll();
          await ƒS.update(1);
          ƒS.Sound.play(sound.fight, 0, true);
          scenecount = "end";
          return scenecount;
        }
      }


      //second dmg phase


      let skillselectionAnswer4 = {
        skill1: stats.Main.Skill1,
        skill2: stats.Main.Skill2,
        skill3: stats.Main.Skill3,

      };

      let skillselection4 = await ƒS.Menu.getInput(skillselectionAnswer4, "dialog5");
      switch (skillselection4) {
        case skillselectionAnswer4.skill1:

          skill1funktion();


        case skillselectionAnswer4.skill2:
          if (stats.skillused == false) {
            skill2funktion();
          }


        case skillselectionAnswer4.skill3:
          if (stats.skillused == false) {
            skill3funktion();
          }
          stats.skillused = false;

      }
      await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
      await ƒS.update();

      stats.number = stats.Main.Strength / 10
      throwdice();
      if (stats.random >= 9) {
        await ƒS.Text.print("You Damaged the Golem but hes not defeated yet");
      }
      else {
        if (ƒS.Inventory.getAmount(items.Healthpotion) > 0) {
          stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)
          await ƒS.Text.print("You did not damage the golem");
          await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(90, 85))
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();
          await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
          await ƒS.update();
          await ƒS.Text.print("Maybe you have something in your inventory that helps");
          await ƒS.Text.print("One of your friends decides to attack the golem and damages it");
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
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();
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
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();
          }
          ƒS.Inventory.open();
          await ƒS.Speech.tell(characters.Narrator, "");
          await ƒS.Speech.tell(characters.Narrator, "");
          if (ƒS.Inventory.getAmount(items.Healthpotion) < stats.potionamount) {
            await ƒS.Text.print("your wounds are healed and you get another chance defeating the golem");

          }
          else {
            await ƒS.Text.print("You died because of your wounds");
            await ƒS.Text.print("Your friends managed to escape");
            await ƒS.Text.print("They will never forget your bravery");
            await ƒS.Text.print("They went back to the village and told everyone about your bravery");
            await ƒS.Text.print("The village will always remember you as a hero");
            await ƒS.Character.hideAll();
            await ƒS.update(1);
            ƒS.Sound.play(sound.fight, 0, true);
            scenecount = "end";
            return scenecount;
          }
        }
        else {
          await ƒS.Text.print("You did not damage the golem");
          await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(70, 65))
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();
          await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
          await ƒS.update();
          await ƒS.Text.print("You died because of your wounds");
          await ƒS.Text.print("Your friends managed to escape");
          await ƒS.Text.print("They will never forget your bravery");
          await ƒS.Text.print("They went back to the village and told everyone about your bravery");
          await ƒS.Text.print("The village will always remember you as a hero");
          await ƒS.Character.hideAll();
          await ƒS.update(1);
          ƒS.Sound.play(sound.fight, 0, true);
          scenecount = "end";
          return scenecount;
        }
      }


      //third dmg phase


      let skillselectionAnswer5 = {
        skill1: stats.Main.Skill1,
        skill2: stats.Main.Skill2,
        skill3: stats.Main.Skill3,

      };

      let skillselection5 = await ƒS.Menu.getInput(skillselectionAnswer5, "dialog5");
      switch (skillselection5) {
        case skillselectionAnswer5.skill1:

          skill1funktion();


        case skillselectionAnswer5.skill2:
          if (stats.skillused == false) {
            skill2funktion();
          }


        case skillselectionAnswer5.skill3:
          if (stats.skillused == false) {
            skill3funktion();
          }
          stats.skillused = false;

      }

      await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
      await ƒS.update();
      stats.number = stats.Main.Strength / 10
      throwdice();
      if (stats.random >= 9) {
        await ƒS.Text.print("You Damaged the Golem");
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death1, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death2, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death3, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death4, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death5, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death6, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.death7, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.hideAll();
        await ƒS.update(0.2);
        await ƒS.Character.show(characters.Golem, characters.Golem.pose.dead, ƒS.positionPercent(90, 90))
        await ƒS.update(0.2);
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
        await ƒS.update();
        await ƒS.Text.print("Finally the Golem falls to the ground");
        await ƒS.Text.print("You managed to defeat it");
      }
      else {
        if (ƒS.Inventory.getAmount(items.Healthpotion) > 0) {
          stats.potionamount = ƒS.Inventory.getAmount(items.Healthpotion)
          await ƒS.Text.print("You did not damage the golem");
          await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(90, 85))
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();
          await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
          await ƒS.update();
          await ƒS.Text.print("Maybe you have something in your inventory that helps");
          await ƒS.Text.print("One of your friends decides to attack the golem and damages it");
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
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();
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
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();
          }
          ƒS.Inventory.open();
          await ƒS.Speech.tell(characters.Narrator, "");
          await ƒS.Speech.tell(characters.Narrator, "");
          if (ƒS.Inventory.getAmount(items.Healthpotion) < stats.potionamount) {
            await ƒS.Text.print("Your wounds are healed and your friend managed to defeat the golem");
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death1, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death2, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death3, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death4, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death5, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death6, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.death7, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.dead, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();


            await ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
            await ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
            await ƒS.Character.hideAll();
            await ƒS.update(1);
            ƒS.Sound.play(sound.fight, 0, true);
            scenecount = "end";
            return scenecount;
          }
          else {

            await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
            await ƒS.update(0.2);
            await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(90, 85))
            await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
            await ƒS.update();
            await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
            await ƒS.update();

            await ƒS.Text.print("You died because of your wounds");
            await ƒS.Text.print("Your friends managed to escape");
            await ƒS.Text.print("They will never forget your bravery");
            await ƒS.Text.print("They went back to the village and told everyone about your bravery");
            await ƒS.Text.print("The village will always remember you as a hero");
            await ƒS.Character.hideAll();
            await ƒS.update(1);
            ƒS.Sound.play(sound.fight, 0, true);
            scenecount = "end";
            return scenecount;
          }
        }
        else {
          await ƒS.Text.print("You did not damage the golem");
          await ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack1, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack2, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack3, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack4, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack5, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack6, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.hideAll();
          await ƒS.Character.show(characters.Golem, characters.Golem.pose.attack7, ƒS.positionPercent(90, 90))
          await ƒS.update(0.2);
          await ƒS.Character.show(characters.Knife, characters.Knife.pose.normal, ƒS.positionPercent(70, 65))
          await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90))
          await ƒS.update();
          await ƒS.Character.animate(characters.Knife, characters.Knife.pose.normal, knifethrow());
          await ƒS.update();
          await ƒS.Text.print("You died because of your wounds");
          await ƒS.Text.print("Your friends managed to escape");
          await ƒS.Text.print("They will never forget your bravery");
          await ƒS.Text.print("They went back to the village and told everyone about your bravery");
          await ƒS.Text.print("The village will always remember you as a hero");
          await ƒS.Character.hideAll();
          await ƒS.update(1);
          ƒS.Sound.play(sound.fight, 0, true);
          scenecount = "end";
          return scenecount;
        }
      }




      await ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
      await ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
      await ƒS.Character.hideAll();
      await ƒS.update(1);
      stats.Main.Strength += 10;
      ƒS.Sound.play(sound.fight, 0, true);
      scenecount = "end";
      return scenecount;
    }
  }
}