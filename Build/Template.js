"use strict";
var Template;
(function (Template) {
    async function Text() {
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
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(1);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100))
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        //mit css klasse
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000, true, "cssklasse");
        await Template.ƒS.Speech.tell(Template.characters.Ryu, "Girl");
        //await ƒS.Character.hide(characters.Ryu);
        await Template.ƒS.Character.show(Template.characters.Girl, Template.characters.Girl.pose.normal, Template.ƒS.positionPercent(30, 100));
        //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positions.bottomleft)
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Girl, text.Girl.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Girl, "How are you doing");
        await Template.ƒS.Character.hide(Template.characters.Girl);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0002);
        await Template.ƒS.Character.hide(Template.characters.Ryu);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Girl, Template.characters.Girl.pose.normal, Template.ƒS.positionPercent(30, 100));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Girl, text.Girl.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
        await Template.ƒS.Character.hide(Template.characters.Girl);
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        //await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    }
    Template.Text = Text;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function SceneChange() {
        console.log("options");
        let text = {
            Girl: {
                T0000: "Are you going to the park today?",
                T0001: "Yes"
            }
        };
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.update();
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update();
        //names eingabe
        //stats.Protagonist.name = await ƒS.Speech.getInput();
        // text ohne schreib animation
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Girl.T0000);
        await Template.ƒS.Character.hide(Template.characters.Ryu);
        await Template.ƒS.update();
        await Template.ƒS.Speech.set(Template.characters.Narrator, "");
        await Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.charselect);
        await Template.ƒS.update();
        //ƒS.Sound.play(sound.click, 1);
        let firstDialogueElementAnswers = {
            Char1: "1",
            Char2: "2",
            Char3: "3",
            Char4: "4"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "button");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount = "first";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount = "second";
                id: "second";
                console.log(Template.scenecount);
                await Template.ƒS.update();
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount = "third";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char4:
                Template.scenecount = "fourth";
                return Template.scenecount;
                break;
        }
        //Musik aus
        //ƒS.Sound.fade(sound.backgroundTheme, 0,1)
        //await ƒS.Speech.tell(characters.Narrator, stats.char1.points.toString())
    }
    Template.SceneChange = SceneChange;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Decision() {
        console.log("Tutorial");
        let text = {
            Girl: {
                T0000: "Are you going to the park today?",
                T0001: "Yes"
            }
        };
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
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update();
        //names eingabe
        Template.stats.Protagonist.name = await Template.ƒS.Speech.getInput();
        // text ohne schreib animation
        await Template.ƒS.Speech.set(Template.characters.Ryu, text.Girl.T0000);
        //ƒS.Sound.play(sound.click, 1);
        let firstDialogueElementAnswers = {
            ISayYes: "Yes",
            ISayNo: "No"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.ISayYes:
                //continue write on this path here
                await Template.ƒS.Character.hide(Template.characters.Ryu);
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Girl, Template.characters.Girl.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Girl, "Nice do you want to go together?");
                Template.ƒS.Character.hide(Template.characters.Girl);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Ryu, "sure");
                Template.stats.char1.points = Template.stats.char1.points + 5;
                break;
            case firstDialogueElementAnswers.ISayNo:
                await Template.ƒS.Character.hide(Template.characters.Ryu);
                await Template.ƒS.update();
                await Template.ƒS.Character.show(Template.characters.Girl, Template.characters.Girl.pose.normal, Template.ƒS.positionPercent(30, 100));
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Ryu, "Sad maybe next time then?");
                Template.ƒS.Character.hide(Template.characters.Girl);
                Template.ƒS.Character.hide(Template.characters.Ryu);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
                await Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.characters.Ryu, "yea");
                Template.stats.char1.points = Template.stats.char1.points + 1;
                break;
        }
        //Musik aus
        Template.ƒS.Sound.fade(Template.sound.backgroundTheme, 0, 1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, Template.stats.char1.points.toString());
    }
    Template.Decision = Decision;
})(Template || (Template = {}));
var Template;
(function (Template) {
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define transition
    Template.transition = {
        clock: {
            duration: 3,
            alpha: "./Images/Transitions/WipesAndOther/cw-side.jpg",
            edge: 1
        }
    };
    //define sound
    Template.sound = {
        //musik
        backgroundTheme: "",
        //Sound
        click: ""
    };
    Template.locations = {
        city: {
            name: "city",
            background: "./Images/Backgrounds/bg_city_cloudy.png"
        },
        school: {
            name: "school",
            background: "./Images/Backgrounds/3955292.jpg"
        },
        view: {
            name: "view",
            background: "./Images/Backgrounds/view.jpg"
        },
        woodscamp: {
            name: "woodscamp",
            background: "./Images/Backgrounds/woods_camp.png"
        },
        waterfall: {
            name: "waterfall",
            background: "./Images/Backgrounds/waterfall.jpg"
        },
        charselect: {
            name: "charselect",
            background: "./Images/Backgrounds/CharSelect.png"
        },
    };
    // define Carr
    Template.characters = {
        Narrator: {
            name: ""
        },
        Ryu: {
            name: "Ryu: ",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "./Images/Characters/Ryu_normal.png",
                smile: ""
            }
        },
        Girl: {
            name: "Girl: ",
            origin: Template.ƒS.ORIGIN.BOTTOMRIGHT,
            pose: {
                normal: "./Images/Characters/placeholder_girl.png",
                smile: ""
            }
        }
    };
    Template.items = {
        Healthpotion: {
            name: "Healthpotion",
            description: "Gives you some Health",
            image: "pfad"
        }
    };
    Template.scenecount = "";
    Template.stats = {
        Protagonist: {
            name: "Protagonist"
        },
        char1: {
            points: 0
        }
    };
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case Template.ƒ.KEYBOARD_CODE.F4:
                console.log("Save");
                await Template.ƒS.Progress.save();
                break;
            case Template.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await Template.ƒS.Progress.load();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        let scenes = [
            //{ scene: Text, name: "01_Text", next: scenecount.count},
            //{scene: Decision, name: "02_Test"},
            { scene: Template.SceneChange, name: "1stScene", next: Template.scenecount },
            { id: "first", scene: Template.option1, name: "1stScene", next: Template.scenecount },
            { id: "second", scene: Template.option2, name: "2ndScene" },
            { id: "third", scene: Template.option3, name: "3rdScene" },
            { id: "fourth", scene: Template.option4, name: "4thScene" }
        ];
        Template.ƒS.Progress.setData(Template.stats);
        Template.ƒS.Progress.go(scenes);
    }
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Scene() {
        console.log("FudgeStory Template Scene starting");
    }
    Template.Scene = Scene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option1() {
        console.log("1stScene");
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        Template.scenecount = ".";
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100))
        return Template.scenecount;
    }
    Template.option1 = option1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option2() {
        console.log("2ndScene");
        await Template.ƒS.Location.show(Template.locations.view);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        Template.scenecount = ".";
        return Template.scenecount;
    }
    Template.option2 = option2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option3() {
        console.log("3rdScene");
        await Template.ƒS.Location.show(Template.locations.waterfall);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        //return scenecount
        Template.scenecount = ".";
        return Template.scenecount;
    }
    Template.option3 = option3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option4() {
        console.log("4thScene");
        await Template.ƒS.Location.show(Template.locations.woodscamp);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        //scenecount = "third";
        // return scenecount
        let firstDialogueElementAnswers = {
            Char1: "1",
            Char2: "2",
            Char3: "3",
            Char4: "4"
        };
        let secondDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "button1");
        //stats.char1.points = stats.char1.points + 5;
        switch (secondDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount = "first";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount = "second";
                id: "second";
                console.log(Template.scenecount);
                await Template.ƒS.update();
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount = "third";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char4:
                Template.scenecount = "fourth";
                return Template.scenecount;
                break;
        }
        Template.scenecount = ".";
        return Template.scenecount;
    }
    Template.option4 = option4;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map