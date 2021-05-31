namespace Template {
    export async function Decision(): ƒS.SceneReturn {
        console.log("Tutorial");

        //let text = {
        //    Adria: {
        //        T0000: "Are you going to the park today?",
        //        T0001: "Yes"
        //    }
        //};
        //verzögerung
        //let signaldelay2: ƒS.Signal = ƒS.Progress.defineSignal([()=> ƒS.Progress.delay(2)]);
        //aufruf
        //await signaldelay2();

        //ƒS.Text.addClass("cssClass");
        //await ƒS.Text.print("HiHoy ich bin ein Text");
        //ƒS.Text.close();



        //ƒS.Inventory.add(items.Healthpotion)
        //ƒS.Inventory.open();





        //ƒS.Speech.setTickerDelays(30, 2)
        //ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);

        await ƒS.Location.show(locations.shore);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
       // await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await ƒS.update();
        //names eingabe
        stats.Protagonist.name = await ƒS.Speech.getInput();

        // text ohne schreib animation
        //await ƒS.Speech.set(characters.Ryu, text.Girl.T0000)

        //ƒS.Sound.play(sound.click, 1);

        let firstDialogueElementAnswers ={
            ISayYes: "Yes",
            ISayNo: "No"
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        //stats.char1.points = stats.char1.points + 5;
        switch(firstDialogueElement) {
            case firstDialogueElementAnswers.ISayYes:
                //continue write on this path here
                //await ƒS.Character.hide(characters.Ryu);
                await ƒS.update();
                //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
                await ƒS.update(1);
                //await ƒS.Speech.tell(characters.Girl, "Nice do you want to go together?");
                //ƒS.Character.hide(characters.Girl);
                ƒS.Speech.clear();
                await ƒS.update(1);
                //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
                await ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "sure")
                stats.char1.points = stats.char1.points + 5;
                break;
            case firstDialogueElementAnswers.ISayNo:
                //await ƒS.Character.hide(characters.Ryu);
                await ƒS.update();
                //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
                await ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "Sad maybe next time then?");
                //ƒS.Character.hide(characters.Girl);
                //ƒS.Character.hide(characters.Ryu);
                ƒS.Speech.clear();
                await ƒS.update(1);
                //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
                await ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "yea");
                stats.char1.points = stats.char1.points + 1;
                break;
                
        }

       //Musik aus
       ƒS.Sound.fade(sound.backgroundTheme, 0,1)
       await ƒS.Speech.tell(characters.Narrator, stats.char1.points.toString())
    }
}