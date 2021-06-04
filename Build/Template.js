"use strict";
var Template;
(function (Template) {
    async function Text() {
        console.log("Tutorial");
        await Template.ƒS.Location.show(Template.locations.seafire);
        await Template.ƒS.update(1);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100))
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await Template.ƒS.update(1);
        //mit css klasse
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000, true, "cssklasse");
        //await ƒS.Speech.tell(characters.Ryu, "Girl");
        //await ƒS.Character.hide(characters.Ryu);
        //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
        //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positions.bottomleft)
        await Template.ƒS.update(1);
        //await ƒS.Speech.tell(characters.Girl, text.Girl.T0000);
        //await ƒS.Speech.tell(characters.Girl, "How are you doing");
        //await ƒS.Character.hide(characters.Girl);
        await Template.ƒS.update(1);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await Template.ƒS.update(1);
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001);
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002);
        //await ƒS.Character.hide(characters.Ryu);
        await Template.ƒS.update(1);
        //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
        await Template.ƒS.update(1);
        //await ƒS.Speech.tell(characters.Girl, text.Girl.T0001);
        //await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0001);
        //await ƒS.Character.hide(characters.Girl);
        await Template.ƒS.Location.show(Template.locations.shore);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        //await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    }
    Template.Text = Text;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene1() {
        console.log("options");
        await Template.ƒS.Location.show(Template.locations.shore);
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Please ender your Name");
        //names eingabe
        //stats.Protagonist.name = await ƒS.Speech.getInput();
        Template.characters.Main.name = await Template.ƒS.Speech.getInput();
        Template.characters.Main.name += ":  ";
        Template.ƒS.Inventory.add(Template.items.Healthpotion);
        Template.ƒS.Inventory.add(Template.items.Scroll);
        Template.ƒS.Inventory.add(Template.items.WaterBottle);
        Template.ƒS.Inventory.add(Template.items.EmptyBottle);
        Template.ƒS.Inventory.add(Template.items.Apple);
        Template.ƒS.Inventory.add(Template.items.Flower);
        await Template.ƒS.Inventory.open();
        //await ƒS.Character.show(characters.Samara, characters.Samara.pose.normal, ƒS.positionPercent(10, 90))
        //await ƒS.Character.show(characters.Hando, characters.Hando.pose.normal, ƒS.positionPercent(35, 90))
        //await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.normal, ƒS.positionPercent(65, 90))
        //await ƒS.Character.show(characters.Adira, characters.Adira.pose.normal, ƒS.positionPercent(90, 90))
        await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike1, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike2, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike3, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike4, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike5, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike6, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike7, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(0.1);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Test");
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "");
        // text ohne schreib animation
        //await ƒS.Location.show(locations.charselect);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update();
        //ƒS.Sound.play(sound.click, 1);
        let firstDialogueElementAnswers = {
            Char1: "Option 1",
            Char2: "Option 2",
            Char3: "Option 3",
            Char4: "Option 4"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog2");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount = "Archer1";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount = "Nightstalker1";
                await Template.ƒS.update();
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount = "ArchMage1";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char4:
                Template.scenecount = "Swordwielder1";
                //characters.Main.pose.skystrike1 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_1.png" ;
                //characters.Main.pose.skystrike2 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_2.png" ;
                //characters.Main.pose.skystrike3 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_3.png" ;
                //characters.Main.pose.skystrike4 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_4.png" ;
                //characters.Main.pose.skystrike5 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_5.png" ;
                //characters.Main.pose.skystrike6 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_6.png" ;
                //characters.Main.pose.skystrike7 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_7.png" ;
                return Template.scenecount;
                break;
        }
        //Musik aus
        //ƒS.Sound.fade(sound.backgroundTheme, 0,1)
        //await ƒS.Speech.tell(characters.Narrator, stats.char1.points.toString())
    }
    Template.scene1 = scene1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Animation() {
        let animation = {
            start: { translation: Template.ƒS.positions.bottomcenter, rotation: -20, scaling: new Template.ƒS.Position(0.5, 1.5), color: Template.ƒS.Color.CSS("red", 1) },
            end: { translation: Template.ƒS.positions.bottomright, rotation: 20, scaling: new Template.ƒS.Position(1.5, 0.5), color: Template.ƒS.Color.CSS("blue", 1) },
            duration: 1,
            playmode: Template.ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        };
        await Template.ƒS.Location.show(Template.locations.waterfall);
        await Template.ƒS.Character.animate(Template.characters.Adira, Template.characters.Adira.pose.normal, animation);
        await Template.ƒS.update(2);
    }
    Template.Animation = Animation;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function Decision() {
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
        await Template.ƒS.Location.show(Template.locations.shore);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        // await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await Template.ƒS.update();
        //names eingabe
        Template.stats.Protagonist.name = await Template.ƒS.Speech.getInput();
        // text ohne schreib animation
        //await ƒS.Speech.set(characters.Ryu, text.Girl.T0000)
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
                //await ƒS.Character.hide(characters.Ryu);
                await Template.ƒS.update();
                //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
                await Template.ƒS.update(1);
                //await ƒS.Speech.tell(characters.Girl, "Nice do you want to go together?");
                //ƒS.Character.hide(characters.Girl);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
                await Template.ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "sure")
                Template.stats.char1.points = Template.stats.char1.points + 5;
                break;
            case firstDialogueElementAnswers.ISayNo:
                //await ƒS.Character.hide(characters.Ryu);
                await Template.ƒS.update();
                //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
                await Template.ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "Sad maybe next time then?");
                //ƒS.Character.hide(characters.Girl);
                //ƒS.Character.hide(characters.Ryu);
                Template.ƒS.Speech.clear();
                await Template.ƒS.update(1);
                //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
                await Template.ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "yea");
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
        seafire: {
            name: "seafireplace",
            background: "./Images/Backgrounds/sea_fireplace.jpg"
        },
        shore: {
            name: "shore",
            background: "./Images/Backgrounds/shore.jpg"
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
        Black: {
            name: "Black",
            background: "./Images/Backgrounds/black.png"
        },
        bridge: {
            name: "bridge",
            background: "./Images/Backgrounds/bridge.jpg"
        },
        camp: {
            name: "camp",
            background: "./Images/Backgrounds/camp.png"
        },
        dungeonentranceclose: {
            name: "Dungeonentranceclose",
            background: "./Images/Backgrounds/dungeon_entance_close.jpg"
        },
        dungeonentrance: {
            name: "dungeonentrance",
            background: "./Images/Backgrounds/dungeon_entrance.png"
        },
        dungeonstairs: {
            name: "dungeonstair",
            background: "./Images/Backgrounds/dungeon_stair.jpg"
        },
        moutain: {
            name: "fieldmoutain",
            background: "./Images/Backgrounds/field_moutain.png"
        },
        fight: {
            name: "fight",
            background: "./Images/Backgrounds/fight.jpg"
        },
        sea: {
            name: "sea",
            background: "./Images/Backgrounds/sea.jpg"
        },
        tower: {
            name: "towerwoods",
            background: "./Images/Backgrounds/tower_woods.png"
        },
        waterfallhideout: {
            name: "waterfallhideout",
            background: "./Images/Backgrounds/waterfall_hideout.jpg"
        },
        waterfalls: {
            name: "waterfalls",
            background: "./Images/Backgrounds/waterfalls.png"
        },
        window: {
            name: "windowsunrise",
            background: "./Images/Backgrounds/window_sunrise.gif"
        },
        woodsflowers: {
            name: "woodsflowers",
            background: "./Images/Backgrounds/woods_flowers.jpg"
        },
        woodspath: {
            name: "woodspath",
            background: "./Images/Backgrounds/woods_path.png"
        },
    };
    // define Carr
    Template.characters = {
        Narrator: {
            name: ""
        },
        Main: {
            name: "",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "",
                happy: ".",
                veryhappy: "",
                unhappy: "",
                angry: "",
                arrogant: "",
                mediumlove: "",
                inlove: "",
            },
            Skill1: "",
            Skill2: "",
            Skill3: ""
        },
        Samara: {
            name: "Samara: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/ArchMage/ArchMage.png",
                happy: "./Images/Characters/ArchMage/ArchMageHappy.png",
                veryhappy: "./Images/Characters/ArchMage/ArchMageVeryHappy.png",
                unhappy: "./Images/Characters/ArchMage/ArchMageUnHappy.png",
                angry: "./Images/Characters/ArchMage/ArchMageAngry.png",
                arrogant: "./Images/Characters/ArchMage/ArchMageArrogant.png",
                mediumlove: "./Images/Characters/ArchMage/ArchMageMediumLove.png",
                inlove: "./Images/Characters/ArchMage/ArchMageInLove.png",
                fireball1: "./Images/Characters/ArchMage/Fireball/AM_FireBall_1.png",
                fireball2: "./Images/Characters/ArchMage/Fireball/AM_FireBall_2.png",
                fireball3: "./Images/Characters/ArchMage/Fireball/AM_FireBall_3.png",
                fireball4: "./Images/Characters/ArchMage/Fireball/AM_FireBall_4.png",
                fireball5: "./Images/Characters/ArchMage/Fireball/AM_FireBall_5.png",
                fireball6: "./Images/Characters/ArchMage/Fireball/AM_FireBall_6.png",
                fireball7: "./Images/Characters/ArchMage/Fireball/AM_FireBall_7.png",
                fireball8: "./Images/Characters/ArchMage/Fireball/AM_FireBall_8.png",
                fireball9: "./Images/Characters/ArchMage/Fireball/AM_FireBall_9.png",
                lightning1: "./Images/Characters/ArchMage/Lightning/AM_Lightning_1.png",
                lightning2: "./Images/Characters/ArchMage/Lightning/AM_Lightning_2.png",
                lightning3: "./Images/Characters/ArchMage/Lightning/AM_Lightning_3.png",
                lightning4: "./Images/Characters/ArchMage/Lightning/AM_Lightning_4.png",
                lightning5: "./Images/Characters/ArchMage/Lightning/AM_Lightning_5.png",
                lightning6: "./Images/Characters/ArchMage/Lightning/AM_Lightning_6.png",
                lightning7: "./Images/Characters/ArchMage/Lightning/AM_Lightning_7.png",
                lightning8: "./Images/Characters/ArchMage/Lightning/AM_Lightning_8.png",
                lightning9: "./Images/Characters/ArchMage/Lightning/AM_Lightning_9.png",
                windstrike1: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_1.png",
                windstrike2: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_2.png",
                windstrike3: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_3.png",
                windstrike4: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_4.png",
                windstrike5: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_5.png",
                windstrike6: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_6.png",
                windstrike7: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_7.png",
                windstrike8: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_8.png",
                windstrike9: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_9.png",
            }
        },
        Hando: {
            name: "Hando: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/Archer/Archer1.png",
                happy: "./Images/Characters/Archer/ArcherHappy.png",
                veryhappy: "./Images/Characters/Archer/ArcherVeryHappy.png",
                unhappy: "./Images/Characters/Archer/ArcherUnHappy.png",
                angry: "./Images/Characters/Archer/ArcherAngry.png",
                arrogant: "./Images/Characters/Archer/ArcherArrogant.png",
                mediumlove: "./Images/Characters/Archer/ArcherMediumLove.png",
                inlove: "./Images/Characters/Archer/ArcherInLove.png",
                bowshot1: "./Images/Characters/Archer/BowShot/AA_shot_1.png",
                bowshot2: "./Images/Characters/Archer/BowShot/AA_shot_2.png",
                bowshot3: "./Images/Characters/Archer/BowShot/AA_shot_3.png",
                bowshot4: "./Images/Characters/Archer/BowShot/AA_shot_4.png",
                bowshot5: "./Images/Characters/Archer/BowShot/AA_shot_5.png",
                bowshot6: "./Images/Characters/Archer/BowShot/AA_shot_6.png",
                fastshot1: "./Images/Characters/Archer/BowShot/AA_shot_1.png",
                fastshot2: "./Images/Characters/Archer/BowShot/AA_shot_2.png",
                fastshot3: "./Images/Characters/Archer/BowShot/AA_shot_3.png",
                fastshot4: "./Images/Characters/Archer/BowShot/AA_shot_4.png",
                fastshot5: "./Images/Characters/Archer/BowShot/AA_shot_5.png",
                fastshot6: "./Images/Characters/Archer/BowShot/AA_shot_6.png",
                rollshot1: "./Images/Characters/Archer/RollShot/AA_RollShot_1.png",
                rollshot2: "./Images/Characters/Archer/RollShot/AA_RollShot_2.png",
                rollshot3: "./Images/Characters/Archer/RollShot/AA_RollShot_3.png",
                rollshot4: "./Images/Characters/Archer/RollShot/AA_RollShot_4.png",
                rollshot5: "./Images/Characters/Archer/RollShot/AA_RollShot_5.png",
                rollshot6: "./Images/Characters/Archer/RollShot/AA_RollShot_6.png",
                rollshot7: "./Images/Characters/Archer/RollShot/AA_RollShot_7.png",
                rollshot8: "./Images/Characters/Archer/RollShot/AA_RollShot_8.png",
                rollshot9: "./Images/Characters/Archer/RollShot/AA_RollShot_9.png",
                rollshot10: "./Images/Characters/Archer/RollShot/AA_RollShot_10.png",
                rollshot11: "./Images/Characters/Archer/RollShot/AA_RollShot_11.png",
                rollshot12: "./Images/Characters/Archer/RollShot/AA_RollShot_12.png",
            }
        },
        Liraz: {
            name: "Liraz: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/Nightstalker/Nightstalker.png",
                happy: "./Images/Characters/Nightstalker/NightstalkerHappy.png",
                veryhappy: "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png",
                unhappy: "./Images/Characters/Nightstalker/NightstalkerUnHappy.png",
                angry: "./Images/Characters/Nightstalker/NightstalkerAngry.png",
                arrogant: "./Images/Characters/Nightstalker/NightstalkerArrogant.png",
                mediumlove: "./Images/Characters/Nightstalker/NightstalkerMediumLove.png",
                inlove: "./Images/Characters/Nightstalker/NightstalkerInLove.png",
                blindinglight1: "./Images/Characters/Nightstalker/Shield/NS_Shield_1.png",
                blindinglight2: "./Images/Characters/Nightstalker/Shield/NS_Shield_2.png",
                blindinglight3: "./Images/Characters/Nightstalker/Shield/NS_Shield_3.png",
                blindinglight4: "./Images/Characters/Nightstalker/Shield/NS_Shield_4.png",
                blindinglight5: "./Images/Characters/Nightstalker/Shield/NS_Shield_5.png",
                blindinglight6: "./Images/Characters/Nightstalker/Shield/NS_Shield_6.png",
                blindinglight7: "./Images/Characters/Nightstalker/Shield/NS_Shield_7.png",
                swordswing1: "./Images/Characters/Nightstalker/swordswing/NS_Swing_1.png",
                swordswing2: "./Images/Characters/Nightstalker/swordswing/NS_Swing_2.png",
                swordswing3: "./Images/Characters/Nightstalker/swordswing/NS_Swing_3.png",
                swordswing4: "./Images/Characters/Nightstalker/swordswing/NS_Swing_4.png",
                swordswing5: "./Images/Characters/Nightstalker/swordswing/NS_Swing_5.png",
                swordswing6: "./Images/Characters/Nightstalker/swordswing/NS_Swing_6.png",
                swordswing7: "./Images/Characters/Nightstalker/swordswing/NS_Swing_7.png",
                windburst1: "./Images/Characters/Nightstalker/Windburst/NS_Wind_1.png",
                windburst2: "./Images/Characters/Nightstalker/Windburst/NS_Wind_2.png",
                windburst3: "./Images/Characters/Nightstalker/Windburst/NS_Wind_3.png",
                windburst4: "./Images/Characters/Nightstalker/Windburst/NS_Wind_4.png",
                windburst5: "./Images/Characters/Nightstalker/Windburst/NS_Wind_5.png",
                windburst6: "./Images/Characters/Nightstalker/Windburst/NS_Wind_6.png",
                windburst7: "./Images/Characters/Nightstalker/Windburst/NS_Wind_7.png",
                windburst8: "./Images/Characters/Nightstalker/Windburst/NS_Wind_8.png",
                windburst9: "./Images/Characters/Nightstalker/Windburst/NS_Wind_9.png",
            }
        },
        Adira: {
            name: "Adira: ",
            origin: Template.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/SwordWhielder/SwordWhielder.png",
                happy: "./Images/Characters/SwordWhielder/SwordWhielderHappy.png",
                veryhappy: "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png",
                unhappy: "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png",
                angry: "./Images/Characters/SwordWhielder/SwordWhielderAngry.png",
                arrogant: "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png",
                mediumlove: "./Images/Characters/SwordWhielder/SwordWhielderMediumLove.png",
                inlove: "./Images/Characters/SwordWhielder/SwordWhielderInLove.png",
                skystrike1: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_1.png",
                skystrike2: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_2.png",
                skystrike3: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_3.png",
                skystrike4: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_4.png",
                skystrike5: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_5.png",
                skystrike6: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_6.png",
                skystrike7: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_7.png",
                swordattack1: "./Images/Characters/SwordWhielder/SwordAttack/SW_SwordAttack_1.png",
                swordattack2: "./Images/Characters/SwordWhielder/SwordAttack/SW_SwordAttack_2.png",
                swordattack3: "./Images/Characters/SwordWhielder/SwordAttack/SW_SwordAttack_3.png",
                swordattack4: "./Images/Characters/SwordWhielder/SwordAttack/SW_SwordAttack_4.png",
                swordslash1: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_1.png",
                swordslash2: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_2.png",
                swordslash3: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_3.png",
                swordslash4: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_4.png",
                swordslash5: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_5.png",
            }
        }
    };
    Template.items = {
        Healthpotion: {
            name: "Healthpotion",
            description: "Gives you some Health",
            image: "./Images/PotionRed.png"
        },
        Flower: {
            name: "Flower",
            description: "Seems useless",
            image: "./Images/flower.png"
        },
        WaterBottle: {
            name: "WaterBottle",
            description: "Adds Strength",
            image: "./Images/WaterBottle.png"
        },
        EmptyBottle: {
            name: "EmptyBottle",
            description: "Seems useless",
            image: "./Images/EmptyBottle.png"
        },
        Apple: {
            name: "Apple",
            description: "Adds Strenght",
            image: "./Images/Apple.png"
        },
        Scroll: {
            name: "Scroll",
            description: "Seems usefull",
            image: "./Images/Scroll.png"
        }
    };
    Template.scenecount = "";
    Template.scenecount2 = "";
    Template.test = 0;
    Template.teststring = "";
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
            //{scene: Animation, name: "animation"},
            { id: "main", scene: Template.scene1, name: "1stScene", next: Template.scenecount },
            { id: "Archer1", scene: Template.option1, name: "1stScene", next: Template.scenecount },
            { id: "Nightstalker1", scene: Template.option2, name: "2ndScene", next: Template.scenecount },
            { id: "ArchMage1", scene: Template.option3, name: "3rdScene", next: Template.scenecount },
            { id: "Swordwielder1", scene: Template.option4, name: "4thScene", next: Template.scenecount },
            { id: "skill1", scene: Template.skill1, name: "skill1", next: Template.scenecount },
            { id: "skill2", scene: Template.skill2, name: "skill2", next: Template.scenecount },
            { id: "skill3", scene: Template.skill3, name: "skill3", next: Template.scenecount },
            { id: "scene2", scene: Template.scene2, name: "scene2", next: Template.scenecount },
            { id: "scene3", scene: Template.scene3, name: "scene3", next: Template.scenecount },
            { id: "scene4", scene: Template.scene4, name: "scene4" },
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
        Template.characters.Main.pose.normal = "./Images/Characters/Archer/Archer1.png";
        Template.characters.Main.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        Template.characters.Main.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        Template.characters.Main.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        Template.characters.Main.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        Template.characters.Main.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        Template.characters.Main.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        Template.characters.Main.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        Template.characters.Main.Skill1 = "Bowshot";
        Template.characters.Main.Skill2 = "Fastshot";
        Template.characters.Main.Skill3 = "Rollshot";
        console.log(Template.characters.Main.Skill1);
        await Template.ƒS.Location.show(Template.locations.seafire);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Main, Template.characters.Main.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(1);
        let firstDialogueElementAnswers = {
            Char1: Template.characters.Main.Skill1,
            Char2: Template.characters.Main.Skill2,
            Char3: Template.characters.Main.Skill3,
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill1";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill2";
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill3";
                return Template.scenecount;
                break;
        }
    }
    Template.option1 = option1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option2() {
        console.log("2ndScene");
        Template.characters.Main.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        Template.characters.Main.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        Template.characters.Main.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        Template.characters.Main.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        Template.characters.Main.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        Template.characters.Main.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        Template.characters.Main.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        Template.characters.Main.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        Template.characters.Main.Skill1 = "Blindinglight";
        Template.characters.Main.Skill2 = "Swordswing";
        Template.characters.Main.Skill3 = "Windburst";
        console.log(Template.characters.Main.Skill1);
        await Template.ƒS.Location.show(Template.locations.seafire);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Main, Template.characters.Main.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(1);
        let firstDialogueElementAnswers = {
            Char1: Template.characters.Main.Skill1,
            Char2: Template.characters.Main.Skill2,
            Char3: Template.characters.Main.Skill3,
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill1";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill2";
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill3";
                return Template.scenecount;
                break;
        }
    }
    Template.option2 = option2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option3() {
        console.log("3rdScene");
        Template.characters.Main.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        Template.characters.Main.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        Template.characters.Main.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        Template.characters.Main.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        Template.characters.Main.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        Template.characters.Main.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        Template.characters.Main.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        Template.characters.Main.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        Template.characters.Main.Skill1 = "Fireball";
        Template.characters.Main.Skill2 = "Lightning";
        Template.characters.Main.Skill3 = "Windstrike";
        console.log(Template.characters.Main.Skill1);
        await Template.ƒS.Location.show(Template.locations.seafire);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Main, Template.characters.Main.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(1);
        let firstDialogueElementAnswers = {
            Char1: Template.characters.Main.Skill1,
            Char2: Template.characters.Main.Skill2,
            Char3: Template.characters.Main.Skill3,
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill1";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill2";
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill3";
                return Template.scenecount;
                break;
        }
    }
    Template.option3 = option3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option4() {
        console.log("4thScene");
        Template.characters.Main.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        Template.characters.Main.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        Template.characters.Main.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        Template.characters.Main.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        Template.characters.Main.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        Template.characters.Main.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        Template.characters.Main.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove";
        Template.characters.Main.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        Template.characters.Main.Skill1 = "Skystrike";
        Template.characters.Main.Skill2 = "Swordattack";
        Template.characters.Main.Skill3 = "Swordslash";
        console.log(Template.characters.Main.Skill1);
        await Template.ƒS.Location.show(Template.locations.seafire);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Main, Template.characters.Main.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(1);
        let firstDialogueElementAnswers = {
            Char1: Template.characters.Main.Skill1,
            Char2: Template.characters.Main.Skill2,
            Char3: Template.characters.Main.Skill3,
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill1";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill2";
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill3";
                return Template.scenecount;
                break;
        }
    }
    Template.option4 = option4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene2() {
        console.log("scene2");
        await Template.ƒS.Location.show(Template.locations.tower);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "scene 2");
        Template.scenecount = "scene3";
        return Template.scenecount;
    }
    Template.scene2 = scene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene3() {
        console.log("scene3");
        await Template.ƒS.Location.show(Template.locations.seafire);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.characters.Main, Template.characters.Main.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "scene 3");
        let firstDialogueElementAnswers = {
            Char1: Template.characters.Main.Skill1,
            Char2: Template.characters.Main.Skill2,
            Char3: Template.characters.Main.Skill3,
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill1";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill2";
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount2 = Template.scenecount;
                Template.scenecount = "skill3";
                return Template.scenecount;
                break;
        }
    }
    Template.scene3 = scene3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene4() {
        console.log("scene4");
        await Template.ƒS.Location.show(Template.locations.waterfallhideout);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "scene 4");
        Template.scenecount = "scene5";
        let firstDialogueElementAnswers = {
            Char1: Template.characters.Main.Skill1,
            Char2: Template.characters.Main.Skill2,
            Char3: Template.characters.Main.Skill3,
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.skill1funktion();
                break;
            case firstDialogueElementAnswers.Char2:
                Template.skill2funktion();
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.skill3funktion();
                break;
        }
        return Template.scenecount;
    }
    Template.scene4 = scene4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    function setscene() {
        Template.teststring = Template.scenecount2.match(/\d+/)[0];
        Template.test = parseInt(Template.teststring);
        Template.test += 1;
        console.log(Template.test);
        Template.scenecount = "scene" + String(Template.test);
        console.log(Template.scenecount);
        return Template.scenecount;
    }
    Template.setscene = setscene;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function skill1() {
        console.log("skill1");
        if (Template.characters.Main.Skill1 == "Skystrike") {
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill1 == "Bowshot") {
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill1 == "Blindinglight") {
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill1 == "Fireball") {
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Test");
        Template.ƒS.update();
        Template.setscene();
        return Template.scenecount;
    }
    Template.skill1 = skill1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function skill1funktion() {
        console.log("skill1");
        if (Template.characters.Main.Skill1 == "Skystrike") {
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.skystrike7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill1 == "Bowshot") {
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.bowshot6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill1 == "Blindinglight") {
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.blindinglight7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill1 == "Fireball") {
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.fireball9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
    }
    Template.skill1funktion = skill1funktion;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function skill2() {
        console.log("skill2");
        if (Template.characters.Main.Skill2 == "Swordattack") {
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordattack1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordattack2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordattack3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordattack4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.2);
        }
        else if (Template.characters.Main.Skill2 == "Fastshot") {
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill2 == "Swordswing") {
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill2 == "Lightning") {
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Test");
        Template.ƒS.update();
        Template.setscene();
        return Template.scenecount;
    }
    Template.skill2 = skill2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function skill2funktion() {
        console.log("skill2");
        if (Template.characters.Main.Skill2 == "Swordattack") {
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordattack1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordattack2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordattack3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordattack4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.2);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.2);
        }
        else if (Template.characters.Main.Skill2 == "Fastshot") {
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.fastshot6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill2 == "Swordswing") {
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.swordswing7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill2 == "Lightning") {
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.lightning9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
    }
    Template.skill2funktion = skill2funktion;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function skill3() {
        console.log("skill3");
        if (Template.characters.Main.Skill3 == "Swordslash") {
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill3 == "Rollshot") {
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot10, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot11, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot12, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill3 == "Windburst") {
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill3 == "Windstrike") {
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "Test");
        Template.ƒS.update();
        Template.setscene();
        return Template.scenecount;
    }
    Template.skill3 = skill3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function skill3funktion() {
        console.log("skill3");
        if (Template.characters.Main.Skill3 == "Swordslash") {
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Adira, Template.characters.Adira.pose.swordslash5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill3 == "Rollshot") {
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot10, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot11, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Hando, Template.characters.Hando.pose.rollshot12, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill3 == "Windburst") {
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Liraz, Template.characters.Liraz.pose.windburst9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
        else if (Template.characters.Main.Skill3 == "Windstrike") {
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike1, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike2, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike3, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike4, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike5, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike6, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike7, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike8, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.Character.show(Template.characters.Samara, Template.characters.Samara.pose.windstrike9, Template.ƒS.positionPercent(50, 90));
            await Template.ƒS.update(0.1);
            await Template.ƒS.Character.hideAll();
            await Template.ƒS.update(0.1);
        }
    }
    Template.skill3funktion = skill3funktion;
})(Template || (Template = {}));
//# sourceMappingURL=Template.js.map