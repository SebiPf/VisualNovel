namespace fantasyrpg {
    export async function testing(): ƒS.SceneReturn {
        console.log("Iam here");
        ƒS.Inventory.add(items.advice);
        ƒS.Inventory.add(items.Flower);
        ƒS.Inventory.add(items.Scroll);
        //console.log(ƒS.Inventory.add(items.Healthpotion));
        //console.log(ƒS.Inventory.open())
        //if( FudgeStory.functio) {}
            
        await
        await ƒS.Speech.tell(stats.Side2, "Hey can we talk for a second?")
                await ƒS.Speech.tell(stats.Main, "Sure what is bothering you?")
                await ƒS.Speech.tell(stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?")
                await ƒS.Speech.tell(stats.Main, "Yea I am just a bit tired thats all");
                await ƒS.Speech.tell(stats.Side2, "Ah thats fine I just really hoped you would come")
                await ƒS.Speech.tell(stats.Main, "Mh let me think about it for a second");
        
        //if(ƒS.Inventory.querySelector("ul").includes("Potion"))
        await ƒS.Text.print("Clarifikation Images and story is not final")
        stats.number = 10
        let Throwdice = {
            Throwdice: "Feel Lucky?", 
        };
        let Dicethrow = await ƒS.Menu.getInput(Throwdice, "dialog1");
        switch (Dicethrow) {
            case Throwdice.Throwdice:
                throwdice();
        }
        await ƒS.Text.print("Clarifikation Images and story is not final")
        await ƒS.Text.print("This is only a Preview of what direktion the Novel will take")
        await ƒS.Text.print("Welcome to your Adventure " + stats.Main.name);

        await ƒS.Text.print("The first think you need to do is choose a Class")
        await ƒS.Text.print("But be aware all your choices will have a effect on the outcome of your Adventure")
        await ƒS.Text.print("Even if some decisions seem insignificant")
        await ƒS.Text.print("So always choose wisely")
        
        console.log(stats.relside1)
        await ƒS.Text.print("You may open your Inventory with I")
        
    }
}