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
                T0002: " What are you doing today"
            },
            Girl: {
                T0000: "Hey",
                T0001: ""
            }
        };
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(1);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100))
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, "Fremder");
        await Template.ƒS.Character.hide(Template.characters.Ryu);
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
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0002);
        await Template.ƒS.Character.hide(Template.characters.Ryu);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
    }
    Template.Text = Text;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Test() {
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
                T0002: " What are you doing today"
            },
            Girl: {
                T0000: "Hey",
                T0001: ""
            }
        };
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(1);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100))
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, "Fremder");
        await Template.ƒS.Character.hide(Template.characters.Ryu);
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
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
        await Template.ƒS.update(1);
        await Template.ƒS.Location.show(Template.locations.school);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Character.show(Template.characters.Ryu, Template.characters.Ryu.pose.normal, Template.ƒS.positions.bottomright);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0001);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0002);
        await Template.ƒS.Character.hide(Template.characters.Ryu);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, text.Narrator.T0001);
    }
    Template.Test = Test;
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
            alpha: "./Images/grau.jpg",
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
        }
    };
    // define Carr
    Template.characters = {
        Narrator: {
            name: ""
        },
        Protagonist: {
            name: "Protagonist"
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
            { scene: Template.Text, name: "01_Text" },
            { scene: Template.Test, name: "02_Test" }
        ];
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
//# sourceMappingURL=Template.js.map