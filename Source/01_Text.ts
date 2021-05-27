namespace Template {
    export async function Text(): ƒS.SceneReturn {
        console.log("Tutorial");

        let text = {
            Narrator: {
                T0000: "Hello",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            Ryu: {
                T0000: "Welcome",
                T0001: " I am fine",
                T0002: " How are you?"
            },
            Girl: {
                T0000: "Hey",
                T0001: "Nice me too",
                T0002: "Are you going to the part today?"
            }
        };
        await ƒS.Location.show(locations.city);
        await ƒS.update(1);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100))
        await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await ƒS.update(1);
        
        //mit css klasse
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000, true, "cssklasse");
        await ƒS.Speech.tell(characters.Ryu, "Girl");
        //await ƒS.Character.hide(characters.Ryu);

        

        await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
        //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positions.bottomleft)
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Girl, text.Girl.T0000);
        await ƒS.Speech.tell(characters.Girl, "How are you doing");
        await ƒS.Character.hide(characters.Girl);
        await ƒS.update(1);


        await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001);
        await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002);
        await ƒS.Character.hide(characters.Ryu);
        await ƒS.update(1);
        await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Girl, text.Girl.T0001);
        await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0001);
        await ƒS.Character.hide(characters.Girl);
        await ƒS.Location.show(locations.school);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        //await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        
    }
}