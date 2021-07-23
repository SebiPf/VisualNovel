namespace fantasyrpg {
    export async function scene5(): ƒS.SceneReturn {
        console.log("scene5");
        await ƒS.Character.hideAll();
    await ƒS.update();
        await ƒS.Sound.play(sound.normal, 0.3, true);
        await ƒS.Location.show(locations.Black);
        await ƒS.update(1);
        await ƒS.Location.show(locations.seafire);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Text.print("On the next day you see your friends already packing their stuff");
        await ƒS.Text.print("As you already packed all your stuff in the evening you have time to talk to one of them");
        await ƒS.Text.print("Who do you want to talk to?");
        let firstDialogueElementAnswers = {
            side1: stats.Side1.name,
            side2: stats.Side2.name,
            side3: stats.Side3.name,
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.side1:


                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Hey " + stats.Side1.name + " what is taking you so long??");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.angry, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Stop pushing me and pack your own stuff");
                await ƒS.Character.hide(stats.Main);
                await ƒS.Character.show(stats.Main, stats.Main.pose.veryhappy, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "I packed my stuff already unlike you I am not a Princess and pack like all I have");
                await ƒS.Character.hide(stats.Side1);
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.veryhappy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Fuck you dude I am almost done");
                
                await ƒS.Character.hideAll();
                await ƒS.Text.print("After everyone was done Packing their stuff you and your friends started to walk");
                await ƒS.Location.show(locations.trail);
                await ƒS.update(transition.speed.duration, transition.speed.alpha, transition.speed.edge);
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Hey by the way did you knwow´that there is a new Tavern");
                await ƒS.Speech.tell(stats.Side3, "I drank a Met there lately and it was really good");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90));
                await ƒS.Character.hide(stats.Side3);
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Yea they have Beeryjuice that is really great");
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "WTF is wrong with you did missy also eat salat there?");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Well I bet I will outlast you all!");
                await ƒS.Character.hide(stats.Side2);
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.veryhappy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Hahaha");
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Haha Yea you might be right with that");


                stats.relside1 += 10;
                await ƒS.Character.hideAll();
                await ƒS.Sound.play(sound.normal, 0, true);
                scenecount = "scene6";
                return scenecount
            case firstDialogueElementAnswers.side2:







                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Hey " + stats.Side2.name + " what is taking you so long??");
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.angry, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Stop pushing me and pack your own stuff");
                await ƒS.Character.show(stats.Main, stats.Main.pose.veryhappy, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "I packed my stuff already unlike you I am not a Princess and pack like all I have");
                await ƒS.Character.hide(stats.Side2);
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.veryhappy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Fuck you dude I am almost done");
                
                await ƒS.Character.hideAll();
                await ƒS.Text.print("After everyone was done Packing their stuff you and your friends started to walk");
                await ƒS.Location.show(locations.trail);
                await ƒS.update(transition.speed.duration, transition.speed.alpha, transition.speed.edge);

                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Hey by the way did you knwow´that there is a new Tavern");
                await ƒS.Speech.tell(stats.Side3, "I drank a Met there lately and it was really good");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90));
                await ƒS.Character.hide(stats.Side3);
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Yea they have Beeryjuice that is really great");
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "WTF is wrong with you did missy also eat salat there?");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Well I bet I will outlast you all!");
                await ƒS.Character.hide(stats.Side2);
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.veryhappy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Hahaha");
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Haha Yea you might be right with that");



                await ƒS.Character.hideAll();
                stats.relside2 += 10;
                await ƒS.Sound.play(sound.normal, 0, true);
                scenecount = "scene6";
                return scenecount
            case firstDialogueElementAnswers.side3:








                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Hey " + stats.Side3.name + " what is taking you so long??");
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.angry, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Stop pushing me and pack your own stuff");
                await ƒS.Character.show(stats.Main, stats.Main.pose.veryhappy, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "I packed my stuff already unlike you I am not a Princess and pack like all I have");
                await ƒS.Character.hide(stats.Side3);
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.veryhappy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Fuck you dude I am almost done");
                await ƒS.Character.hideAll();
                await ƒS.update();
                await ƒS.Character.hideAll();
                await ƒS.Text.print("After everyone was done Packing their stuff you and your friends started to walk");

                await ƒS.Location.show(locations.trail);
                await ƒS.update(transition.speed.duration, transition.speed.alpha, transition.speed.edge);

                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side3, "Hey by the way did you knwow´that there is a new Tavern");
                await ƒS.Speech.tell(stats.Side3, "I drank a Met there lately and it was really good");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90));
                await ƒS.Character.hide(stats.Side3);
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Yea they have Beeryjuice that is really great");
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.happy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "WTF is wrong with you did missy also eat salat there?");
                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(70, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side1, "Well I bet I will outlast you all!");
                await ƒS.Character.hide(stats.Side2);
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.veryhappy, ƒS.positionPercent(90, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Side2, "Hahaha");
                await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(10, 90));
                await ƒS.update();
                await ƒS.Speech.tell(stats.Main, "Haha Yea you might be right with that");




                await ƒS.Character.hideAll();
                await ƒS.Sound.play(sound.normal, 0, true);
                stats.relside3 += 10;
                scenecount = "scene6";
                return scenecount
        }
        scenecount = "scene6";
        await ƒS.Sound.play(sound.normal, 0, true);
        return scenecount;

    }
}