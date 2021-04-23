"use strict";
var Template;
(function (Template) {
    async function Text() {
        console.log("Tutorial");
        let text = {
            Narrator: {
                T0000: "",
                T0001: ""
            },
            Protagonist: {
                T0000: "",
                T0001: ""
            },
            Ryu: {
                T0000: "Willkommen",
                T0001: ""
            }
        };
        await Template.ƒS.Location.show(Template.locations.city);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, text.Ryu.T0000);
        await Template.ƒS.Speech.tell(Template.characters.Ryu, "Fremder");
    }
    Template.Text = Text;
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
    Template.ƒ = FudgeCore;
    Template.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define transition
    Template.transition = {
        clock: {
            duration: 3,
            alpha: "",
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
            background: "./Images/Bild.jpg"
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
            name: "Ryu",
            origin: Template.ƒ.ORIGIN2D.BOTTOMRIGHT,
            pose: {
                normal: "",
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
        window.addEventListener("load", start);
        function start(_event) {
            let scenes = [
                { scene: Template.Scene, name: "Scene" }
            ];
            Template.ƒS.Progress.go(scenes);
        }
    }
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map