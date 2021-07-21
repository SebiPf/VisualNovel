namespace fantasyrpg {
    export async function scene5(): ƒS.SceneReturn {
        console.log("scene5");

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

        let firstDialogueElement = await ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.side1:
                stats.relside1 += 5;
                






                
                await ƒS.Location.show(locations.woods);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);


                
                await ƒS.Character.hideAll();
                scenecount = "scene6";
                return scenecount
            case firstDialogueElementAnswers.side2:






                
                await ƒS.Location.show(locations.woods);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);




                await ƒS.Character.hideAll();
                stats.relside2 += 5;
                scenecount = "scene6";
                return scenecount
            case firstDialogueElementAnswers.side3:







                
                await ƒS.Location.show(locations.woods);
                await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);




                await ƒS.Character.hideAll();
                stats.relside3 += 5;
                scenecount = "scene6";
                return scenecount
        }
        scenecount = "scene6";
        return scenecount;
        
    }
}