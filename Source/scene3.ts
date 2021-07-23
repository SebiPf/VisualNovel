namespace fantasyrpg {
    export async function scene3(): ƒS.SceneReturn {
        console.log("scene3");
        await ƒS.Sound.play(sound.normal, 0.3, true);
        //console.log(await ƒS.Inventory.open())
        await ƒS.Location.show(locations.seafire);
        await ƒS.update(1);
        await ƒS.Text.print("As everyone was back at the fire you wanted to get the Fire Going");
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5, 90));
        ƒS.update();
        await ƒS.Speech.tell(stats.Main, "Lets go guys lets get the Fire going");
        await ƒS.update(1);
        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90));
        ƒS.update();
        await ƒS.Speech.tell(stats.Side1, "Yea its getting a bit cold now");
        await ƒS.Character.hideAll();
        await ƒS.update(1);
        await ƒS.Text.print("You took out your firestone and started the fire when " + stats.Side3.name + " started to talk");
        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
        ƒS.update();
        await ƒS.Speech.tell(stats.Side3, "So Guys since we have time the next few weeks I wanted to do something");
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(90, 90));
        ƒS.update();
        await ƒS.Speech.tell(stats.Side2, "What do you want to do?");
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(90, 90));
        ƒS.update();
        await ƒS.Speech.tell(stats.Side3, "Well I was thinking about something bigger maybe do a Training Camp or something");
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90));
        ƒS.update();
        await ƒS.Speech.tell(stats.Side1, "What about an Adventure?");
        await ƒS.Speech.tell(stats.Side1, "We never went on an real Adventure together did we?");
        await ƒS.Speech.tell(stats.Side1, "And this way we would be training together and its more fun than a Training Camp in my Opinion");
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Character.show(stats.Main, stats.Main.pose.normal, ƒS.positionPercent(5, 90));
        ƒS.update(1);

        let firstDialogueElementAnswers = {
            sayYes: "A Great Adventure with my Friends I am in",
            sayNo: "Oh yea that will be great training"
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:

                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90));
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(85, 90));
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(80, 90));
                ƒS.update(1);
                await ƒS.Speech.tell(stats.Side3, "Yea lets to that");
                await ƒS.Speech.tell(stats.Side2, "That sounds like fun");
                await ƒS.Speech.tell(stats.Side1, "Since we are already here lets just go tomorrow");

                stats.relside1 += 5;
                stats.relside2 += 5;
                stats.relside2 += 5;
                scenecount = "scene5";
                return scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:

                await ƒS.Character.show(stats.Side1, stats.Side1.pose.normal, ƒS.positionPercent(90, 90));
                await ƒS.Character.show(stats.Side2, stats.Side2.pose.normal, ƒS.positionPercent(75, 90));
                await ƒS.Character.show(stats.Side3, stats.Side3.pose.normal, ƒS.positionPercent(60, 90));
                ƒS.update(1);
                await ƒS.Speech.tell(stats.Side3, "Yea lets to that");
                await ƒS.Speech.tell(stats.Side2, "That sounds like fun");
                await ƒS.Speech.tell(stats.Side1, "Since we are already here lets just go tomorrow");
                stats.Main.Strength += 5;
                scenecount = "scene5";
                return scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;

        }





    }
}