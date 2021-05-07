namespace Template {
    export async function Decision(): ƒS.SceneReturn {
        console.log("Tutorial");

        let text = {
            Girl: {
                T0000: "Are you going to the park today?",
                T0001: "Yes"
            }
        };

        ƒS.Speech.setTickerDelays(30, 2)
        ƒS.Sound.fade(sound.backgroundTheme, 0.2, 0.1, true);

        await ƒS.Location.show(locations.school);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await ƒS.update();
        await ƒS.Speech.tell(characters.Ryu, text.Girl.T0000)

        ƒS.Sound.play(sound.click, 1);

        let firstDialogueElementAnswers ={
            iSayOk: "Okay",
            ISayYes: "Yes",
            ISayNo: "No"
        };

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "class");

        switch(firstDialogueElement) {
            case firstDialogueElementAnswers.iSayOk:
                //continue write on this path here
                await ƒS.Character.hide(characters.Ryu);
                await ƒS.update();
                await ƒS.Speech.tell(characters.Girl, "");
                ƒS.Character.hide(characters.Girl);
                ƒS.Speech.clear();
                await ƒS.update(1);
                break;
            case firstDialogueElementAnswers.ISayYes:
                await ƒS.Character.hide(characters.Ryu);
                await ƒS.update();
                await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Girl, "Nice do you want to go together?");
                ƒS.Character.hide(characters.Girl);
                ƒS.Speech.clear();
                await ƒS.update(1);
                await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Ryu, "sure")
                break;
            case firstDialogueElementAnswers.ISayNo:
                await ƒS.Character.hide(characters.Ryu);
                await ƒS.update();
                await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Ryu, "Sad maybe next time then?");
                ƒS.Character.hide(characters.Girl);
                ƒS.Character.hide(characters.Ryu);
                ƒS.Speech.clear();
                await ƒS.update(1);
                await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
                await ƒS.update(1);
                await ƒS.Speech.tell(characters.Ryu, "yea");
                break;
        }

       //Musik aus
       ƒS.Sound.fade(sound.backgroundTheme, 0,1)
    }
}