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
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        //await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    }
    Template.Text = Text;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene1() {
        console.log("options");
        await Template.ƒS.Location.show(Template.locations.white);
        //await ƒS.Character.show(characters.Adira, characters.Adira.pose.normal, ƒS.positionPercent(50, 90))
        await Template.ƒS.update();
        await Template.ƒS.Text.print("Please enter your Name");
        //names eingabe
        //stats.Protagonist.name = await ƒS.Speech.getInput();
        Template.stats.Main.name = await Template.ƒS.Speech.getInput();
        //characters.Main.name += ":  ";
        //ƒS.Inventory.add(items.Healthpotion);
        //ƒS.Inventory.add(items.Scroll);
        //ƒS.Inventory.add(items.WaterBottle);
        //ƒS.Inventory.add(items.EmptyBottle);
        //ƒS.Inventory.add(items.Apple);
        //ƒS.Inventory.add(items.Flower);
        //await ƒS.Inventory.open();
        //await ƒS.Character.show(characters.Samara, characters.Samara.pose.normal, ƒS.positionPercent(10, 90))
        //await ƒS.Character.show(characters.Hando, characters.Hando.pose.normal, ƒS.positionPercent(35, 90))
        //await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.normal, ƒS.positionPercent(65, 90))
        //await ƒS.Character.show(characters.Adira, characters.Adira.pose.normal, ƒS.positionPercent(90, 90))
        await Template.ƒS.update();
        await Template.ƒS.Text.print("Welcome to your Adventure " + Template.stats.Main.name);
        await Template.ƒS.Text.print("The first think you need to do is choose a Class");
        await Template.ƒS.Text.print("But be aware all your choices will have a effect on the outcome of your Adventure");
        await Template.ƒS.Text.print("Even if some decisions seem insignificant");
        await Template.ƒS.Text.print("So always choose wisely");
        await Template.ƒS.Text.print("You may open your Inventory with I");
        // text ohne schreib animation
        //await ƒS.Location.show(locations.charselect);
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.Speech.hide();
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update();
        //ƒS.Sound.play(sound.click, 1);
        let firstDialogueElementAnswers = {
            Char1: "char 1",
            Char2: "char 2",
            Char3: "char 3",
            Char4: "char 4"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog2");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                Template.scenecount = "Archer1";
                console.log("hello my scenecount ist " + Template.scenecount);
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                Template.scenecount = "Nightstalker1";
                console.log("hello my scenecount ist " + Template.scenecount);
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                Template.scenecount = "ArchMage1";
                console.log("hello my scenecount ist " + Template.scenecount);
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.Char4:
                Template.scenecount = "Swordwielder1";
                console.log("hello my scenecount ist " + Template.scenecount);
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
        await Template.ƒS.Location.show(Template.locations.Black);
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
        await Template.ƒS.Location.show(Template.locations.seafire);
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
        //ƒS.Sound.fade(sound.backgroundTheme, 0,1)
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
        classroom: "./sound/classroom.wav",
        bell: "./sound/schoolbell.wav",
        break: "./sound/schoolbreak.mp3",
        teacher: "./sound/teacherscream.wav",
        steps: "./sound/steps.wav",
        //Sound
        click: ""
    };
    Template.locations = {
        seafire: {
            name: "seafireplace",
            background: "./Images/Backgrounds/shore.png"
        },
        camp: {
            name: "camp",
            background: "./Images/Backgrounds/dorf.png"
        },
        woods: {
            name: "woods",
            background: "./Images/Backgrounds/Forest.png"
        },
        mountain: {
            name: "mountain",
            background: "./Images/Backgrounds/mountain.png"
        },
        cave: {
            name: "cave",
            background: "./Images/Backgrounds/cave.png"
        },
        Black: {
            name: "black",
            background: "./Images/Backgrounds/black.png"
        },
        white: {
            name: "white",
            background: "./Images/Backgrounds/White.png"
        },
    };
    // define Carr
    Template.characters = {
        Narrator: {
            name: ""
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
                skystrike1: "../Images/Characters/Swordwhielder/SkyStrike/SW_SkyStrike_1.jpg",
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
        },
        state: {
            a: 0
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
            Skill3: "",
            Strength: 0,
        },
        relside1: 0,
        scoreside1: "",
        relside2: 0,
        scoreside2: "",
        relside3: 0,
        scoreside3: "",
        Side1: {
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
        Side2: {
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
        Side3: {
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
    };
    let volume = 1.0;
    function volplus() {
        if (volume < 10) {
            volume += 0.1;
            Template.ƒS.Sound.setVolume(Template.sound.classroom, volume);
        }
    }
    Template.volplus = volplus;
    function volminus() {
        if (volume > 0) {
            volume -= 0.1;
            Template.ƒS.Sound.setVolume(Template.sound.classroom, volume);
        }
    }
    Template.volminus = volminus;
    let inGameMenue = {
        save: "Save",
        load: "Load",
        close: "Close",
        volplus: "+",
        volminus: "-",
        credits: "Credits",
        about: "about"
    };
    let gameMenue;
    gameMenue;
    async function buttonfunc(_option) {
        if (_option == inGameMenue.save) {
            await Template.ƒS.Progress.save();
        }
        else if (_option == inGameMenue.load) {
            await Template.ƒS.Progress.load();
        }
        else if (_option == inGameMenue.close) {
            close();
        }
        else if (_option == inGameMenue.volplus) {
            volplus();
        }
        else if (_option == inGameMenue.volminus) {
            volminus();
        }
        else if (_option == inGameMenue.credits) {
            Template.credits();
        }
        else if (_option == inGameMenue.about) {
        }
    }
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
            case Template.ƒ.KEYBOARD_CODE.I:
                console.log("InventoryOpen");
                await Template.ƒS.Inventory.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenue =
            Template.ƒS.Menu.create(inGameMenue, buttonfunc, "gameMenue");
        let scenes = [
            //{id: "meter", scene: meter, name: "meter"},
            //{scene: audiouebung, name: "audioübung"}
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
            { id: "scene2b", scene: Template.scene2b, name: "scene2b", next: Template.scenecount },
            { id: "scene3", scene: Template.scene3, name: "scene3", next: Template.scenecount },
            { id: "scene4", scene: Template.scene4, name: "scene4" },
            { id: "credits", scene: Template.credits, name: "credits" },
        ];
        let uiElement = document.querySelector("[type= interface]");
        Template.stats = Template.ƒS.Progress.setData(Template.stats, uiElement);
        //ƒS.Progress.setData(stats);
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
    async function audiouebung() {
        let signalDelay2s = Template.ƒS.Progress.defineSignal([() => Template.ƒS.Progress.delay(2)]);
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update();
        await Template.ƒS.Speech.set(Template.characters.Narrator, "Wir sollten uns solangsam beeilen, du weißt Herr Peters ist immer sehr streng was Pünktlichkeit angeht.");
        Template.ƒS.update();
        await Template.ƒS.Sound.play(Template.sound.break, 0);
        await Template.ƒS.Sound.fade(Template.sound.break, 0.3, 4);
        await Template.ƒS.Sound.fade(Template.sound.bell, 1, 1);
        signalDelay2s();
        await Template.ƒS.Sound.play(Template.sound.steps, 0.6, true);
        await Template.ƒS.Location.show(Template.locations.Black);
        Template.ƒS.update(2);
        await Template.ƒS.update(Template.transition.clock.duration, Template.transition.clock.alpha, Template.transition.clock.edge);
        await Template.ƒS.Sound.fade(Template.sound.steps, 0, 0);
        await Template.ƒS.Sound.fade(Template.sound.break, 0, 1);
        await Template.ƒS.Sound.fade(Template.sound.classroom, 0.1, 2);
        await Template.ƒS.Sound.play(Template.sound.teacher, 0.001, false);
        await Template.ƒS.Sound.fade(Template.sound.classroom, 0.0, 5);
    }
    Template.audiouebung = audiouebung;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function credits() {
        console.log("credits");
        await Template.ƒS.Location.show(Template.locations.mountain);
        Template.ƒS.update();
        await Template.ƒS.Text.print("The Image that is currently in the Background was created by Vicente Nitti (@vnitti)");
        await Template.ƒS.Text.print("The socials are the following");
        await Template.ƒS.Text.print("Twitter:   https://twitter.com/vnitti_art");
        await Template.ƒS.Text.print("Itch.io:   https://vnitti.itch.io/");
        await Template.ƒS.Text.print("Patreon:   https://patreon.com/vnitti");
        await Template.ƒS.Text.print("Portfolio: https://deviantart.com/vnitti");
        await Template.ƒS.Text.print(" All other images and Assets are free to use and can be found on the following website");
        await Template.ƒS.Text.print("https://itch.io/game-assets/free/tag-pixel-art");
        await Template.ƒS.Text.print("Feel free to support any of the creators");
    }
    Template.credits = credits;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function meter() {
        console.log("4thScene");
        await Template.ƒS.Location.show(Template.locations.seafire);
        Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "hi");
        Template.stats.state.a += 55;
        Template.ƒS.update();
    }
    Template.meter = meter;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option1() {
        console.log("1stScene");
        Template.stats.Main.pose.normal = "./Images/Characters/Archer/Archer1.png";
        Template.stats.Main.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        Template.stats.Main.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        Template.stats.Main.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        Template.stats.Main.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        Template.stats.Main.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        Template.stats.Main.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        Template.stats.Main.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        Template.stats.Main.Skill1 = "Bowshot";
        Template.stats.Main.Skill2 = "Fastshot";
        Template.stats.Main.Skill3 = "Rollshot";
        Template.stats.Side1.name = "Samara";
        Template.stats.Side1.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        Template.stats.Side1.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        Template.stats.Side1.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        Template.stats.Side1.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        Template.stats.Side1.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        Template.stats.Side1.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        Template.stats.Side1.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        Template.stats.Side1.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        Template.stats.Side1.Skill1 = "FireBall";
        Template.stats.Side1.Skill2 = "Lightning";
        Template.stats.Side1.Skill3 = "Windstrike";
        Template.stats.Side2.name = "Liraz";
        Template.stats.Side2.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        Template.stats.Side2.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        Template.stats.Side2.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        Template.stats.Side2.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        Template.stats.Side2.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        Template.stats.Side2.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        Template.stats.Side2.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        Template.stats.Side2.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        Template.stats.Side2.Skill1 = "Blindinglight";
        Template.stats.Side2.Skill2 = "Swordswing";
        Template.stats.Side2.Skill3 = "Windburst";
        Template.stats.Side3.name = "Adira";
        Template.stats.Side3.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        Template.stats.Side3.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        Template.stats.Side3.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        Template.stats.Side3.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        Template.stats.Side3.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        Template.stats.Side3.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        Template.stats.Side3.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove";
        Template.stats.Side3.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        Template.stats.Side3.Skill1 = "Skystrike";
        Template.stats.Side3.Skill2 = "Swordattack";
        Template.stats.Side3.Skill3 = "Swordslash";
        Template.stats.scoreside1 = "Samara";
        Template.stats.scoreside2 = "Liraz";
        Template.stats.scoreside3 = "Adira";
        await Template.ƒS.Location.show(Template.locations.camp);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await Template.ƒS.Text.print("As you enter your village you finde your 3 Mates  " + Template.stats.Side1.name + ", " + Template.stats.Side2.name + " and " + Template.stats.Side3.name);
        await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(70, 90));
        await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update();
        await Template.ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later");
        await Template.ƒS.Character.hide(Template.stats.Side1);
        await Template.ƒS.Character.hide(Template.stats.Side2);
        await Template.ƒS.Character.hide(Template.stats.Side3);
        Template.ƒS.update(1);
        await Template.ƒS.Text.print("Do you want to got with them?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                Template.stats.relside1 += 10;
                Template.stats.relside2 += 10;
                Template.stats.relside3 += 10;
                //stats.char1.points += 5;
                //stats.relside1 += 5;
                console.log("relside1" + Template.stats.relside1);
                Template.ƒS.update();
                Template.scenecount = "scene2";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.unhappy, Template.ƒS.positionPercent(50, 90));
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.unhappy, Template.ƒS.positionPercent(70, 90));
                await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.unhappy, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.stats.Side1);
                await Template.ƒS.Character.hide(Template.stats.Side2);
                await Template.ƒS.Character.hide(Template.stats.Side3);
                Template.ƒS.update(1);
                await Template.ƒS.Text.print("A few minutes later " + Template.stats.Side2.name + " walks up to you");
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(90, 90));
                await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.stats.Side2, "Hey can we talk for a second?");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Sure what is bothering you?");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Yea I am just a bit tired thats all");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "Ah thats fine I just really hoped you would come");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Mh let me think about it for a second");
                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
                let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        Template.stats.relside1 += 5;
                        Template.stats.relside2 += 15;
                        Template.stats.relside3 += 5;
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Okay I`ll join you! See you later");
                        await Template.ƒS.Character.hide(Template.stats.Main);
                        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.happy, Template.ƒS.positionPercent(5, 90));
                        await Template.ƒS.Character.hide(Template.stats.Side2);
                        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.veryhappy, Template.ƒS.positionPercent(90, 90));
                        Template.ƒS.update();
                        Template.scenecount = "scene2";
                        return Template.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        Template.stats.Main.Strength += 10;
                        await Template.ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await Template.ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await Template.ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await Template.ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await Template.ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await Template.ƒS.Text.print("Do you want to pick it up?");
                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let thirdDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                Template.ƒS.Inventory.add(Template.items.EmptyBottle);
                                Template.scenecount = "scene3";
                                return Template.scenecount;
                            case thirdDialogueElementAnswers.sayNo:
                                Template.scenecount = "scene3";
                                await Template.ƒS.update();
                                return Template.scenecount;
                        }
                        await Template.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                        await Template.ƒS.Text.print("They are really happy that you came to look after them");
                        await Template.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Okay I`ll join you! See you later");
                        Template.scenecount = "scene3";
                        await Template.ƒS.update();
                        return Template.scenecount;
                }
        }
    }
    Template.option1 = option1;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option2() {
        console.log("2ndScene");
        Template.stats.Main.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        Template.stats.Main.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        Template.stats.Main.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        Template.stats.Main.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        Template.stats.Main.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        Template.stats.Main.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        Template.stats.Main.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        Template.stats.Main.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        Template.stats.Main.Skill1 = "Blindinglight";
        Template.stats.Main.Skill2 = "Swordswing";
        Template.stats.Main.Skill3 = "Windburst";
        Template.stats.Side1.name = "Samara";
        Template.stats.Side1.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        Template.stats.Side1.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        Template.stats.Side1.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        Template.stats.Side1.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        Template.stats.Side1.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        Template.stats.Side1.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        Template.stats.Side1.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        Template.stats.Side1.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        Template.stats.Side1.Skill1 = "FireBall";
        Template.stats.Side1.Skill2 = "Lightning";
        Template.stats.Side1.Skill3 = "Windstrike";
        Template.stats.Side2.name = "Hando";
        Template.stats.Side2.pose.normal = "./Images/Characters/Archer/Archer1.png";
        Template.stats.Side2.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        Template.stats.Side2.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        Template.stats.Side2.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        Template.stats.Side2.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        Template.stats.Side2.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        Template.stats.Side2.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        Template.stats.Side2.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        Template.stats.Side2.Skill1 = "Bowshot";
        Template.stats.Side2.Skill2 = "Fastshot";
        Template.stats.Side2.Skill3 = "Rollshot";
        Template.stats.Side3.name = "Adira";
        Template.stats.Side3.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        Template.stats.Side3.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        Template.stats.Side3.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        Template.stats.Side3.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        Template.stats.Side3.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        Template.stats.Side3.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        Template.stats.Side3.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove";
        Template.stats.Side3.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        Template.stats.Side3.Skill1 = "Skystrike";
        Template.stats.Side3.Skill2 = "Swordattack";
        Template.stats.Side3.Skill3 = "Swordslash";
        Template.stats.scoreside1 = "Samara";
        Template.stats.scoreside2 = "Hando";
        Template.stats.scoreside3 = "Adira";
        await Template.ƒS.Location.show(Template.locations.camp);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await Template.ƒS.Text.print("As you enter your village you finde your 3 Mates  " + Template.stats.Side1.name + ", " + Template.stats.Side2.name + " and " + Template.stats.Side3.name);
        await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(70, 90));
        await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update();
        await Template.ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later");
        await Template.ƒS.Character.hide(Template.stats.Side1);
        await Template.ƒS.Character.hide(Template.stats.Side2);
        await Template.ƒS.Character.hide(Template.stats.Side3);
        Template.ƒS.update(1);
        await Template.ƒS.Text.print("Do you want to got with them?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                Template.stats.relside1 += 10;
                Template.stats.relside2 += 10;
                Template.stats.relside3 += 10;
                Template.stats.char1.points += 5;
                Template.scenecount = "scene2";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.unhappy, Template.ƒS.positionPercent(50, 90));
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.unhappy, Template.ƒS.positionPercent(70, 90));
                await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.unhappy, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.stats.Side1);
                await Template.ƒS.Character.hide(Template.stats.Side2);
                await Template.ƒS.Character.hide(Template.stats.Side3);
                Template.ƒS.update(1);
                await Template.ƒS.Text.print("A few minutes later " + Template.stats.Side2.name + " walks up to you");
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.stats.Side2, "Hey can we talk for a second?");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Sure what is bothering you?");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Yea I am just a bit tired thats all");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "Ah thats fine I just really hoped you would come");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Mh let me think about it for a second");
                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
                let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        Template.stats.relside1 += 5;
                        Template.stats.relside2 += 15;
                        Template.stats.relside3 += 5;
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Okay I`ll join you! See you later");
                        await Template.ƒS.Character.hide(Template.stats.Main);
                        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.happy, Template.ƒS.positionPercent(5, 90));
                        await Template.ƒS.Character.hide(Template.stats.Side2);
                        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.veryhappy, Template.ƒS.positionPercent(90, 90));
                        Template.ƒS.update();
                        Template.scenecount = "scene2";
                        return Template.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        Template.stats.Main.Strength += 10;
                        await Template.ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await Template.ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await Template.ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await Template.ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await Template.ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await Template.ƒS.Text.print("Do you want to pick it up?");
                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let thirdDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                Template.ƒS.Inventory.add(Template.items.EmptyBottle);
                                Template.scenecount = "scene2b";
                                return Template.scenecount;
                            case thirdDialogueElementAnswers.sayNo:
                                Template.scenecount = "scene2b";
                                await Template.ƒS.update();
                                return Template.scenecount;
                        }
                        Template.scenecount = "scene2b";
                        await Template.ƒS.update();
                        return Template.scenecount;
                }
        }
    }
    Template.option2 = option2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option3() {
        console.log("3rdScene");
        Template.stats.Main.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        Template.stats.Main.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        Template.stats.Main.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        Template.stats.Main.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        Template.stats.Main.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        Template.stats.Main.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        Template.stats.Main.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        Template.stats.Main.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        Template.stats.Main.Skill1 = "Fireball";
        Template.stats.Main.Skill2 = "Lightning";
        Template.stats.Main.Skill3 = "Windstrike";
        Template.stats.Side1.name = "Hando";
        Template.stats.Side1.pose.normal = "./Images/Characters/Archer/Archer1.png";
        Template.stats.Side1.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        Template.stats.Side1.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        Template.stats.Side1.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        Template.stats.Side1.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        Template.stats.Side1.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        Template.stats.Side1.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        Template.stats.Side1.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        Template.stats.Side1.Skill1 = "Bowshot";
        Template.stats.Side1.Skill2 = "Fastshot";
        Template.stats.Side1.Skill3 = "Rollshot";
        Template.stats.Side2.name = "Liraz";
        Template.stats.Side2.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        Template.stats.Side2.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        Template.stats.Side2.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        Template.stats.Side2.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        Template.stats.Side2.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        Template.stats.Side2.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        Template.stats.Side2.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        Template.stats.Side2.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        Template.stats.Side2.Skill1 = "Blindinglight";
        Template.stats.Side2.Skill2 = "Swordswing";
        Template.stats.Side2.Skill3 = "Windburst";
        Template.stats.Side3.name = "Adira";
        Template.stats.Side3.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        Template.stats.Side3.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        Template.stats.Side3.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        Template.stats.Side3.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        Template.stats.Side3.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        Template.stats.Side3.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        Template.stats.Side3.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove";
        Template.stats.Side3.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        Template.stats.Side3.Skill1 = "Skystrike";
        Template.stats.Side3.Skill2 = "Swordattack";
        Template.stats.Side3.Skill3 = "Swordslash";
        Template.stats.scoreside1 = "Hando";
        Template.stats.scoreside2 = "Liraz";
        Template.stats.scoreside3 = "Adira";
        await Template.ƒS.Location.show(Template.locations.camp);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await Template.ƒS.Text.print("As you enter your village you finde your 3 Mates  " + Template.stats.Side1.name + ", " + Template.stats.Side2.name + " and " + Template.stats.Side3.name);
        await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(70, 90));
        await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update();
        await Template.ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later");
        await Template.ƒS.Character.hide(Template.stats.Side1);
        await Template.ƒS.Character.hide(Template.stats.Side2);
        await Template.ƒS.Character.hide(Template.stats.Side3);
        Template.ƒS.update(1);
        await Template.ƒS.Text.print("Do you want to got with them?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                Template.stats.relside1 += 10;
                Template.stats.relside2 += 10;
                Template.stats.relside3 += 10;
                Template.stats.char1.points += 5;
                Template.scenecount = "scene2";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.unhappy, Template.ƒS.positionPercent(50, 90));
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.unhappy, Template.ƒS.positionPercent(70, 90));
                await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.unhappy, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.stats.Side1);
                await Template.ƒS.Character.hide(Template.stats.Side2);
                await Template.ƒS.Character.hide(Template.stats.Side3);
                Template.ƒS.update(1);
                await Template.ƒS.Text.print("A few minutes later " + Template.stats.Side2.name + " walks up to you");
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.stats.Side2, "Hey can we talk for a second?");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Sure what is bothering you?");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Yea I am just a bit tired thats all");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "Ah thats fine I just really hoped you would come");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Mh let me think about it for a second");
                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
                let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        Template.stats.relside1 += 5;
                        Template.stats.relside2 += 15;
                        Template.stats.relside3 += 5;
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Okay I`ll join you! See you later");
                        await Template.ƒS.Character.hide(Template.stats.Main);
                        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.happy, Template.ƒS.positionPercent(5, 90));
                        await Template.ƒS.Character.hide(Template.stats.Side2);
                        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.veryhappy, Template.ƒS.positionPercent(90, 90));
                        Template.ƒS.update();
                        Template.scenecount = "scene2";
                        return Template.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        Template.stats.Main.Strength += 10;
                        await Template.ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await Template.ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await Template.ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await Template.ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await Template.ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await Template.ƒS.Text.print("Do you want to pick it up?");
                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let thirdDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                Template.ƒS.Inventory.add(Template.items.EmptyBottle);
                                Template.scenecount = "scene2b";
                                return Template.scenecount;
                            case thirdDialogueElementAnswers.sayNo:
                                Template.scenecount = "scene2b";
                                await Template.ƒS.update();
                                return Template.scenecount;
                        }
                        Template.scenecount = "scene2b";
                        await Template.ƒS.update();
                        return Template.scenecount;
                }
        }
    }
    Template.option3 = option3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function option4() {
        console.log("4thScene");
        Template.stats.Main.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        Template.stats.Main.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        Template.stats.Main.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        Template.stats.Main.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        Template.stats.Main.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        Template.stats.Main.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        Template.stats.Main.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove";
        Template.stats.Main.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        Template.stats.Main.Skill1 = "Skystrike";
        Template.stats.Main.Skill2 = "Swordattack";
        Template.stats.Main.Skill3 = "Swordslash";
        Template.stats.Side1.name = "Samara";
        Template.stats.Side1.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        Template.stats.Side1.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        Template.stats.Side1.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        Template.stats.Side1.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        Template.stats.Side1.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        Template.stats.Side1.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        Template.stats.Side1.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        Template.stats.Side1.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        Template.stats.Side1.Skill1 = "FireBall";
        Template.stats.Side1.Skill2 = "Lightning";
        Template.stats.Side1.Skill3 = "Windstrike";
        Template.stats.Side2.name = "Liraz";
        Template.stats.Side2.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        Template.stats.Side2.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        Template.stats.Side2.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        Template.stats.Side2.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        Template.stats.Side2.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        Template.stats.Side2.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        Template.stats.Side2.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        Template.stats.Side2.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        Template.stats.Side2.Skill1 = "Blindinglight";
        Template.stats.Side2.Skill2 = "Swordswing";
        Template.stats.Side2.Skill3 = "Windburst";
        Template.stats.Side3.name = "Hando";
        Template.stats.Side3.pose.normal = "./Images/Characters/Archer/Archer1.png";
        Template.stats.Side3.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        Template.stats.Side3.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        Template.stats.Side3.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        Template.stats.Side3.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        Template.stats.Side3.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        Template.stats.Side3.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        Template.stats.Side3.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        Template.stats.Side3.Skill1 = "Bowshot";
        Template.stats.Side3.Skill2 = "Fastshot";
        Template.stats.Side3.Skill3 = "Rollshot";
        Template.stats.scoreside1 = "Samara";
        Template.stats.scoreside2 = "Liraz";
        Template.stats.scoreside3 = "Hando";
        await Template.ƒS.Location.show(Template.locations.camp);
        await Template.ƒS.update(2);
        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await Template.ƒS.Text.print("As you enter your village you finde your 3 Mates  " + Template.stats.Side1.name + ", " + Template.stats.Side2.name + " and " + Template.stats.Side3.name);
        await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.normal, Template.ƒS.positionPercent(50, 90));
        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(70, 90));
        await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update();
        await Template.ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later");
        await Template.ƒS.Character.hide(Template.stats.Side1);
        await Template.ƒS.Character.hide(Template.stats.Side2);
        await Template.ƒS.Character.hide(Template.stats.Side3);
        Template.ƒS.update(1);
        await Template.ƒS.Text.print("Do you want to got with them?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                Template.stats.relside1 += 10;
                Template.stats.relside2 += 10;
                Template.stats.relside3 += 10;
                Template.stats.char1.points += 5;
                Template.scenecount = "scene2";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.unhappy, Template.ƒS.positionPercent(50, 90));
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.unhappy, Template.ƒS.positionPercent(70, 90));
                await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.unhappy, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update();
                await Template.ƒS.Character.hide(Template.stats.Side1);
                await Template.ƒS.Character.hide(Template.stats.Side2);
                await Template.ƒS.Character.hide(Template.stats.Side3);
                Template.ƒS.update(1);
                await Template.ƒS.Text.print("A few minutes later " + Template.stats.Side2.name + " walks up to you");
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update();
                await Template.ƒS.Speech.tell(Template.stats.Side2, "Hey can we talk for a second?");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Sure what is bothering you?");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Yea I am just a bit tired thats all");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "Ah thats fine I just really hoped you would come");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Mh let me think about it for a second");
                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
                let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        Template.stats.relside1 += 5;
                        Template.stats.relside2 += 15;
                        Template.stats.relside3 += 5;
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Okay I`ll join you! See you later");
                        await Template.ƒS.Character.hide(Template.stats.Main);
                        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.happy, Template.ƒS.positionPercent(5, 90));
                        await Template.ƒS.Character.hide(Template.stats.Side2);
                        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.veryhappy, Template.ƒS.positionPercent(90, 90));
                        Template.ƒS.update();
                        Template.scenecount = "scene2";
                        return Template.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        Template.stats.Main.Strength += 10;
                        await Template.ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await Template.ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await Template.ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await Template.ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await Template.ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await Template.ƒS.Text.print("Do you want to pick it up?");
                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let thirdDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                Template.ƒS.Inventory.add(Template.items.EmptyBottle);
                                Template.scenecount = "scene2b";
                                return Template.scenecount;
                            case thirdDialogueElementAnswers.sayNo:
                                Template.scenecount = "scene2b";
                                await Template.ƒS.update();
                                return Template.scenecount;
                        }
                        Template.scenecount = "scene2b";
                        await Template.ƒS.update();
                        return Template.scenecount;
                }
        }
    }
    Template.option4 = option4;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene2() {
        console.log("scene2");
        Template.stats.char1.points += 5;
        console.log(Template.stats.char1.points);
        await Template.ƒS.Character.hideAll();
        Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.Black);
        Template.ƒS.update(0);
        await Template.ƒS.Text.print("A few Hours later...");
        await Template.ƒS.Location.show(Template.locations.camp);
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.stats.Side3, "Hey are you ready to go?");
        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.stats.Main, "Yes let`s go");
        await Template.ƒS.Speech.tell(Template.stats.Side3, "Let`s get the others");
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("You and " + Template.stats.Side3.name + " went to " + Template.stats.Side1.name + Template.stats.Side2.name + " to meet up.");
        await Template.ƒS.Location.show(Template.locations.seafire);
        Template.ƒS.update(1);
        await Template.ƒS.Text.print("After you arrive at the shore you realise the weather is getting worse.");
        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
        Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.stats.Main, "Guys should we go back? It seems the weather is getting really bad...");
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.stats.Side2, "No we will be fine lets just make a fire");
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.stats.Side3, "Yea I`ll go get firewood do you want to help me " + Template.stats.Main.name + "?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No you got this",
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                await Template.ƒS.Character.hideAll();
                Template.ƒS.update(1);
                await Template.ƒS.Text.print("You and " + Template.stats.Side3.name + " decide to go together to get the wood");
                await Template.ƒS.Location.show(Template.locations.woods);
                Template.ƒS.update(1);
                await Template.ƒS.Text.print("As you are further away from the others " + Template.stats.Side3.name + " decides to start a conversation with you");
                await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
                Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.stats.Side3, "I am happy you decided to come");
                await Template.ƒS.Speech.tell(Template.stats.Side3, "I wanted to talk to you about something");
                await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
                Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.stats.Main, "What is bothering you you know you can always talk to me about everything");
                await Template.ƒS.Speech.tell(Template.stats.Side3, "I just wanted to thank you for helping me with my training");
                await Template.ƒS.Speech.tell(Template.stats.Side3, "I had my training battle with guy from another village 2 days ago");
                await Template.ƒS.Speech.tell(Template.stats.Side3, "I couldn`t quite beat him but I felt a lot more confident and strong since you help me");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Those are good news I am happy for you");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Also I like those training sessions sonce I improve by them a lot to");
                await Template.ƒS.Speech.tell(Template.stats.Side3, "Also I think if we keep the training up we can make a really great team");
                await Template.ƒS.Speech.tell(Template.stats.Main, "Yea definately");
                let secondDialogueElementAnswers = {
                    sayYes: "Lets go back I think we have enough wood",
                    sayNo: "I also wanted to tell you something",
                };
                let secondDialogueElement = await Template.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Lets go back I think we have enough wood");
                        await Template.ƒS.Speech.tell(Template.stats.Side3, "Yes I think so too");
                        Template.stats.relside3 += 5;
                        await Template.ƒS.Character.hideAll();
                        await Template.ƒS.update();
                    case secondDialogueElementAnswers.sayNo:
                        await Template.ƒS.Speech.tell(Template.stats.Main, "So can I ask you something too?");
                        await Template.ƒS.Speech.tell(Template.stats.Side3, "Sure go for it");
                        await Template.ƒS.Speech.tell(Template.stats.Main, "So you know my parent died when I was young right?");
                        await Template.ƒS.Speech.tell(Template.stats.Side3, "Yea");
                        await Template.ƒS.Speech.tell(Template.stats.Main, "I never really talked with anybody about it. So I felt like I can talk woth you about it");
                        await Template.ƒS.Speech.tell(Template.stats.Side3, "Yea");
                        await Template.ƒS.Text.print("You and " + Template.stats.Side3.name + " had a long conversation about your parents and their accident");
                        Template.stats.relside3 += 10;
                        await Template.ƒS.Location.show(Template.locations.Black);
                        await Template.ƒS.Character.hideAll();
                        Template.ƒS.update(1);
                        await Template.ƒS.Text.print("The conversation with " + Template.stats.Side3.name + " really help you.");
                        await Template.ƒS.Text.print("After the conversation you and " + Template.stats.Side3.name + " went back to the camp");
                        await Template.ƒS.Location.show(Template.locations.seafire);
                        Template.ƒS.update(1);
                        await Template.ƒS.Character.hideAll();
                        Template.ƒS.update();
                        Template.scenecount = "scene3";
                        await Template.ƒS.update();
                        return Template.scenecount;
                }
                Template.scenecount = "scene3";
                return Template.scenecount;
            case secondDialogueElementAnswers.sayNo:
                await Template.ƒS.Text.print("You decided to stay and let " + Template.stats.Side3.name + "get the wood");
                await Template.ƒS.Text.print("You walk up to " + Template.stats.Side1.name + " and " + Template.stats.Side2.name + " and decide to start a conversation");
                await Template.ƒS.Text.print("You who do you want to start a conversation with?");
                let thirdDialogueElementAnswers = {
                    sayYes: "1. " + Template.stats.Side1.name,
                    sayNo: "2. " + Template.stats.Side2.name,
                };
                let thirdDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                switch (thirdDialogueElement) {
                    case thirdDialogueElementAnswers.sayYes:
                        await Template.ƒS.Character.hideAll();
                        await Template.ƒS.update();
                        await Template.ƒS.Text.print("As you are sitting next to the fireplace you start a conversation with " + Template.stats.Side1.name);
                        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
                        await Template.ƒS.Speech.tell(Template.stats.Main, "So what do you think how long will " + Template.stats.Side3.name + " need to get the firewood?");
                        await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.happy, Template.ƒS.positionPercent(90, 90));
                        await Template.ƒS.Speech.tell(Template.stats.Side1, "Probably not as long if you helped");
                        await Template.ƒS.Speech.tell(Template.stats.Side1, "Ahh just kidding I don`t think that long");
                        await Template.ƒS.Speech.tell(Template.stats.Side1, "Afterall I am cold too");
                        await Template.ƒS.Text.print("As you are talking to " + Template.stats.Side1.name + Template.stats.Side2.name + " walks to the shore");
                        await Template.ƒS.Text.print("Do you want to stop the conversation and go after " + Template.stats.Side2.name + "?");
                        let fourthDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let fourthDialogueElement = await Template.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (fourthDialogueElement) {
                            case fourthDialogueElementAnswers.sayYes:
                                await Template.ƒS.Character.hideAll();
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Sorry give me a second");
                                await Template.ƒS.Text.print("You stand up and go after " + Template.stats.Side2.name);
                                await Template.ƒS.Text.print("You arrive at the shore and decide to sit next to " + Template.stats.Side2.name);
                                await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
                                Template.ƒS.update();
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Hey is everything allrigth?");
                                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.unhappy, Template.ƒS.positionPercent(90, 90));
                                Template.ƒS.update();
                                await Template.ƒS.Speech.tell(Template.stats.Side2, "Yes I just wanted some time alone");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "So you want me to go?");
                                await Template.ƒS.Speech.tell(Template.stats.Side2, "No No I wanted to tell you something anyways.");
                                await Template.ƒS.Speech.tell(Template.stats.Side2, "I saw you practice with " + Template.stats.Side3.name + "a lot lately");
                                await Template.ƒS.Speech.tell(Template.stats.Side2, "Why is that?");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Oh that ");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "its nothing " + Template.stats.Side3.name + " just asked me if I could help out");
                                await Template.ƒS.Speech.tell(Template.stats.Side2, "So if I asked you to help me out with something you would help me too?");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Sure what do you want help with?");
                                await Template.ƒS.Speech.tell(Template.stats.Side2, "Well it`s a bit complicated I´ll tell you later...");
                                await Template.ƒS.Speech.tell(Template.stats.Side2, "It is just good to know that you would");
                                await Template.ƒS.Character.hide(Template.stats.Side2);
                                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.happy, Template.ƒS.positionPercent(90, 90));
                                Template.ƒS.update();
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Anything. Just ask at any time");
                                await Template.ƒS.Speech.tell(Template.stats.Side2, "Thanks. Lets head back to the fireplace I think they are about to light it");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Sure");
                                await Template.ƒS.Character.hideAll();
                                await Template.ƒS.update();
                                await Template.ƒS.Text.print("you and " + Template.stats.Side2.name + " went back to the fireplace");
                                Template.stats.relside1 -= 5;
                                Template.stats.relside2 += 10;
                                Template.scenecount = "scene3";
                                return Template.scenecount;
                            case fourthDialogueElementAnswers.sayNo:
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Yea I hope");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "But mybe you`re right and I should have helped");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "No it`s fine");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "Afterall now we have time to talk about something ");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "True do you have something on your mind you want to talk about?");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "Yes, yesterday I found a small flower it must be one of the last they are really rare these days");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "Since they were harvested so much to do potions");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "But I lost it somehow");
                                await Template.ƒS.Character.hide(Template.stats.Side1);
                                await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.unhappy, Template.ƒS.positionPercent(90, 90));
                                Template.ƒS.update();
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Mhh that`s sad what kind of flower was it?");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "It was a red one you know I am not as good with names");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "Yea I am sure you will find another one");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "Yea I hope so");
                                await Template.ƒS.Speech.tell(Template.stats.Main, "I`ll tell you something if I find one I`ll give it to you");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "That would be so nice of you");
                                await Template.ƒS.Speech.tell(Template.stats.Side1, "Oh look " + Template.stats.Side2.name + " and " + Template.stats.Side3.name + " are coming back");
                                Template.stats.relside2 -= 5;
                                Template.stats.relside1 += 10;
                                Template.scenecount = "scene3";
                                return Template.scenecount;
                        }
                    case thirdDialogueElementAnswers.sayNo:
                        await Template.ƒS.Text.print("As you are sitting next to the fireplace you start a conversation with " + Template.stats.Side2.name);
                        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Are we just relaxing today or do you guys have more plans for tonight?");
                        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.happy, Template.ƒS.positionPercent(90, 90));
                        await Template.ƒS.Speech.tell(Template.stats.Side2, "No today we just planned to relax");
                        await Template.ƒS.Speech.tell(Template.stats.Side2, "Oh and how did you do on your hunting trip did you catch something?");
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Great I cought a Dragon but one of the smaller once");
                        await Template.ƒS.Speech.tell(Template.stats.Side2, "Wow thats great maybe we can go on a trip together?");
                        await Template.ƒS.Speech.tell(Template.stats.Side2, "I wonder what we could find further out there");
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Thats a great Idea I`ll take you on that offer some day");
                        await Template.ƒS.Speech.tell(Template.stats.Side2, "Hey look " + Template.stats.Side3.name + " is voming back with the fire wood");
                        await Template.ƒS.Speech.tell(Template.stats.Main, "Finally");
                        Template.stats.relside2 += 10;
                        Template.scenecount = "scene3";
                        return Template.scenecount;
                }
                Template.scenecount = "scene3";
                await Template.ƒS.update();
                return Template.scenecount;
        }
        await Template.ƒS.Location.show(Template.locations.seafire);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "scene 2");
        Template.scenecount = "scene3";
        return Template.scenecount;
    }
    Template.scene2 = scene2;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene2b() {
        console.log("scene2b");
        await Template.ƒS.Character.hideAll();
        Template.ƒS.update();
        await Template.ƒS.Location.show(Template.locations.camp);
        await Template.ƒS.update(1);
        await Template.ƒS.Speech.tell(Template.characters.Narrator, "scene 2");
        Template.scenecount = "scene3";
        return Template.scenecount;
    }
    Template.scene2b = scene2b;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene3() {
        console.log("scene3");
        await Template.ƒS.Location.show(Template.locations.seafire);
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("As everyone was back at the fire you wanted to get the Fire Going");
        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
        await Template.ƒS.Speech.tell(Template.stats.Main, "Lets go guys lets get the Fire going");
        await Template.ƒS.update(1);
        await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.normal, Template.ƒS.positionPercent(90, 90));
        await Template.ƒS.Speech.tell(Template.stats.Side1, "Yea its getting a bit cold now");
        await Template.ƒS.Character.hideAll();
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("You took out your firestone and started the fire when " + Template.stats.Side3.name + " started to talk");
        await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
        await Template.ƒS.Speech.tell(Template.stats.Side3, "So Guys since we have time the next few weeks I wanted to do something");
        await Template.ƒS.Character.hideAll();
        Template.ƒS.update();
        await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.stats.Side2, "What do you want to do?");
        await Template.ƒS.Character.hideAll();
        Template.ƒS.update();
        await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.stats.Side3, "Well I was thinking about something bigger maybe do a Training Camp or something");
        await Template.ƒS.Character.hideAll();
        Template.ƒS.update();
        await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.normal, Template.ƒS.positionPercent(90, 90));
        Template.ƒS.update();
        await Template.ƒS.Speech.tell(Template.stats.Side1, "What about an Adventure?");
        await Template.ƒS.Speech.tell(Template.stats.Side1, "We never went on an real Adventure together did we?");
        await Template.ƒS.Speech.tell(Template.stats.Side1, "And this way we would be training together and its more fun than a Training Camp in my Opinion");
        await Template.ƒS.Character.hideAll();
        Template.ƒS.update();
        await Template.ƒS.Character.show(Template.stats.Main, Template.stats.Main.pose.normal, Template.ƒS.positionPercent(5, 90));
        Template.ƒS.update(1);
        let firstDialogueElementAnswers = {
            sayYes: "A Great Adventure with my Friends I am in",
            sayNo: "Oh yea that will be great training"
        };
        let firstDialogueElement = await Template.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.normal, Template.ƒS.positionPercent(90, 90));
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(85, 90));
                await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(80, 90));
                Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.stats.Side3, "Yea lets to that");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "That sounds like fun");
                await Template.ƒS.Speech.tell(Template.stats.Side1, "Since we are already here lets just go tomorrow");
                Template.stats.relside1 += 5;
                Template.stats.relside2 += 5;
                Template.stats.relside2 += 5;
                Template.scenecount = "scene4";
                return Template.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await Template.ƒS.Character.show(Template.stats.Side1, Template.stats.Side1.pose.normal, Template.ƒS.positionPercent(90, 90));
                await Template.ƒS.Character.show(Template.stats.Side2, Template.stats.Side2.pose.normal, Template.ƒS.positionPercent(80, 90));
                await Template.ƒS.Character.show(Template.stats.Side3, Template.stats.Side3.pose.normal, Template.ƒS.positionPercent(70, 90));
                Template.ƒS.update(1);
                await Template.ƒS.Speech.tell(Template.stats.Side3, "Yea lets to that");
                await Template.ƒS.Speech.tell(Template.stats.Side2, "That sounds like fun");
                await Template.ƒS.Speech.tell(Template.stats.Side1, "Since we are already here lets just go tomorrow");
                Template.stats.Main.Strength += 5;
                Template.scenecount = "scene4";
                return Template.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
        }
    }
    Template.scene3 = scene3;
})(Template || (Template = {}));
var Template;
(function (Template) {
    async function scene4() {
        console.log("scene4");
        await Template.ƒS.Location.show(Template.locations.Black);
        await Template.ƒS.update(1);
        await Template.ƒS.Text.print("You Agreed to go on an Adventure with your friends");
        await Template.ƒS.Text.print("This is the End of this Preview");
        await Template.ƒS.Text.print("Feel free to play again since every choice leads to a different experience");
        await Template.ƒS.Text.print("In this rund you achived the following things");
        await Template.ƒS.Text.print("Strength: " + Template.stats.Main.Strength);
        await Template.ƒS.Text.print("Affection to : " + Template.stats.Side1.name + ": " + Template.stats.relside1);
        await Template.ƒS.Text.print("Affection to : " + Template.stats.Side2.name + ": " + Template.stats.relside2);
        await Template.ƒS.Text.print("Affection to : " + Template.stats.Side3.name + ": " + Template.stats.relside3);
        await Template.ƒS.Text.print("Also you collected those items");
        Template.ƒS.Inventory.open();
        await Template.ƒS.Text.print("And if you wonder what will await you in the full version of this Novel");
        await Template.ƒS.Text.print("Expect some Action");
        Template.skill1funktion();
        Template.skill2funktion();
        Template.skill3funktion();
        await Template.ƒS.Text.print("As well As some charakter development");
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
        if (Template.stats.Main.Skill1 == "Skystrike") {
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
        else if (Template.stats.Main.Skill1 == "Bowshot") {
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
        else if (Template.stats.Main.Skill1 == "Blindinglight") {
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
        else if (Template.stats.Main.Skill1 == "Fireball") {
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
        if (Template.stats.Main.Skill1 == "Skystrike") {
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
        else if (Template.stats.Main.Skill1 == "Bowshot") {
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
        else if (Template.stats.Main.Skill1 == "Blindinglight") {
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
        else if (Template.stats.Main.Skill1 == "Fireball") {
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
        if (Template.stats.Main.Skill2 == "Swordattack") {
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
        else if (Template.stats.Main.Skill2 == "Fastshot") {
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
        else if (Template.stats.Main.Skill2 == "Swordswing") {
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
        else if (Template.stats.Main.Skill2 == "Lightning") {
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
        if (Template.stats.Main.Skill2 == "Swordattack") {
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
        else if (Template.stats.Main.Skill2 == "Fastshot") {
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
        else if (Template.stats.Main.Skill2 == "Swordswing") {
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
        else if (Template.stats.Main.Skill2 == "Lightning") {
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
        if (Template.stats.Main.Skill3 == "Swordslash") {
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
        else if (Template.stats.Main.Skill3 == "Rollshot") {
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
        else if (Template.stats.Main.Skill3 == "Windburst") {
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
        else if (Template.stats.Main.Skill3 == "Windstrike") {
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
        if (Template.stats.Main.Skill3 == "Swordslash") {
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
        else if (Template.stats.Main.Skill3 == "Rollshot") {
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
        else if (Template.stats.Main.Skill3 == "Windburst") {
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
        else if (Template.stats.Main.Skill3 == "Windstrike") {
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