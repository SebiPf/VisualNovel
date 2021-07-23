"use strict";
var fantasyrpg;
(function (fantasyrpg) {
    async function Text() {
        console.log("Tutorial");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
        await fantasyrpg.ƒS.update(1);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100))
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await fantasyrpg.ƒS.update(1);
        //mit css klasse
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0000, true, "cssklasse");
        //await ƒS.Speech.tell(characters.Ryu, "Girl");
        //await ƒS.Character.hide(characters.Ryu);
        //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
        //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positions.bottomleft)
        await fantasyrpg.ƒS.update(1);
        //await ƒS.Speech.tell(characters.Girl, text.Girl.T0000);
        //await ƒS.Speech.tell(characters.Girl, "How are you doing");
        //await ƒS.Character.hide(characters.Girl);
        await fantasyrpg.ƒS.update(1);
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await fantasyrpg.ƒS.update(1);
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0001);
        //await ƒS.Speech.tell(characters.Ryu, text.Ryu.T0002);
        //await ƒS.Character.hide(characters.Ryu);
        await fantasyrpg.ƒS.update(1);
        //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
        await fantasyrpg.ƒS.update(1);
        //await ƒS.Speech.tell(characters.Girl, text.Girl.T0001);
        //await ƒS.Speech.tell(characters.Narrator, text.Narrator.T0001);
        //await ƒS.Character.hide(characters.Girl);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.clock.duration, fantasyrpg.transition.clock.alpha, fantasyrpg.transition.clock.edge);
        //await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
    }
    fantasyrpg.Text = Text;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene1() {
        console.log("scene1");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.white);
        //await ƒS.Character.show(characters.Adira, characters.Adira.pose.normal, ƒS.positionPercent(50, 90))
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("Please enter your Name");
        //names eingabe
        //stats.Protagonist.name = await ƒS.Speech.getInput();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.whitename);
        await fantasyrpg.ƒS.update();
        fantasyrpg.stats.Main.name = await fantasyrpg.ƒS.Speech.getInput();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.white);
        await fantasyrpg.ƒS.update();
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
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("Welcome to your Adventure " + fantasyrpg.stats.Main.name);
        await fantasyrpg.ƒS.Text.print("The first think you need to do is choose a Class");
        await fantasyrpg.ƒS.Text.print("But be aware all your choices will have a effect on the outcome of your Adventure");
        await fantasyrpg.ƒS.Text.print("Even if some decisions seem insignificant");
        await fantasyrpg.ƒS.Text.print("So always choose wisely");
        await fantasyrpg.ƒS.Text.print("You may open your Inventory with I");
        // text ohne schreib animation
        //await ƒS.Location.show(locations.charselect);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Speech.hide();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        await fantasyrpg.ƒS.update();
        //ƒS.Sound.play(sound.click, 1);
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        let firstDialogueElementAnswers = {
            Char1: "char 1",
            Char2: "char 2",
            Char3: "char 3",
            Char4: "char 4"
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog2");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.Char1:
                //continue write on this path here
                fantasyrpg.scenecount = "Archer1";
                console.log("hello my scenecount ist " + fantasyrpg.scenecount);
                return fantasyrpg.scenecount;
                break;
            case firstDialogueElementAnswers.Char2:
                fantasyrpg.scenecount = "Nightstalker1";
                console.log("hello my scenecount ist " + fantasyrpg.scenecount);
                return fantasyrpg.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
            case firstDialogueElementAnswers.Char3:
                fantasyrpg.scenecount = "ArchMage1";
                console.log("hello my scenecount ist " + fantasyrpg.scenecount);
                return fantasyrpg.scenecount;
                break;
            case firstDialogueElementAnswers.Char4:
                fantasyrpg.scenecount = "Swordwielder1";
                console.log("hello my scenecount ist " + fantasyrpg.scenecount);
                //characters.Main.pose.skystrike1 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_1.png" ;
                //characters.Main.pose.skystrike2 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_2.png" ;
                //characters.Main.pose.skystrike3 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_3.png" ;
                //characters.Main.pose.skystrike4 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_4.png" ;
                //characters.Main.pose.skystrike5 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_5.png" ;
                //characters.Main.pose.skystrike6 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_6.png" ;
                //characters.Main.pose.skystrike7 = "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_7.png" ;
                return fantasyrpg.scenecount;
                break;
        }
        //Musik aus
        //ƒS.Sound.fade(sound.backgroundTheme, 0,1)
        //await ƒS.Speech.tell(characters.Narrator, stats.char1.points.toString())
    }
    fantasyrpg.scene1 = scene1;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function Animation() {
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst1, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst2);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst2, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst3);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst3, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst4);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst4, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst5);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst5, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst6);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst6, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst7);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst7, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst8);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst8, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst9);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst9, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst9);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update(0.1);
    }
    fantasyrpg.Animation = Animation;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
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
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.clock.duration, fantasyrpg.transition.clock.alpha, fantasyrpg.transition.clock.edge);
        // await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
        await fantasyrpg.ƒS.update();
        //names eingabe
        //stats.Protagonist.name = await ƒS.Speech.getInput();
        // text ohne schreib animation
        //await ƒS.Speech.set(characters.Ryu, text.Girl.T0000)
        //ƒS.Sound.play(sound.click, 1);
        let firstDialogueElementAnswers = {
            ISayYes: "Yes",
            ISayNo: "No"
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "class");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.ISayYes:
                //continue write on this path here
                //await ƒS.Character.hide(characters.Ryu);
                await fantasyrpg.ƒS.update();
                //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
                await fantasyrpg.ƒS.update(1);
                //await ƒS.Speech.tell(characters.Girl, "Nice do you want to go together?");
                //ƒS.Character.hide(characters.Girl);
                fantasyrpg.ƒS.Speech.clear();
                await fantasyrpg.ƒS.update(1);
                //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
                await fantasyrpg.ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "sure")
                fantasyrpg.stats.char1.points = fantasyrpg.stats.char1.points + 5;
                break;
            case firstDialogueElementAnswers.ISayNo:
                //await ƒS.Character.hide(characters.Ryu);
                await fantasyrpg.ƒS.update();
                //await ƒS.Character.show(characters.Girl, characters.Girl.pose.normal, ƒS.positionPercent(30, 100))
                await fantasyrpg.ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "Sad maybe next time then?");
                //ƒS.Character.hide(characters.Girl);
                //ƒS.Character.hide(characters.Ryu);
                fantasyrpg.ƒS.Speech.clear();
                await fantasyrpg.ƒS.update(1);
                //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positions.bottomright)
                await fantasyrpg.ƒS.update(1);
                //await ƒS.Speech.tell(characters.Ryu, "yea");
                fantasyrpg.stats.char1.points = fantasyrpg.stats.char1.points + 1;
                break;
        }
        //Musik aus
        //ƒS.Sound.fade(sound.backgroundTheme, 0,1)
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, fantasyrpg.stats.char1.points.toString());
    }
    fantasyrpg.Decision = Decision;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    fantasyrpg.ƒ = FudgeCore;
    fantasyrpg.ƒS = FudgeStory;
    console.log("FudgeStory template starting");
    //define transition
    fantasyrpg.transition = {
        clock: {
            duration: 3,
            alpha: "./Images/Transitions/WipesAndOther/cw-side.jpg",
            edge: 1
        },
        pixel: {
            duration: 1,
            alpha: "./Images/Transitions/Others/029.png",
            edge: 1
        },
        fight: {
            duration: 2,
            alpha: "./Images/Transitions/Others/005.jpg",
            edge: 1
        },
        speed: {
            duration: 1,
            alpha: "./Images/Transitions/Others/034.png",
            edge: 1
        },
    };
    //define sound
    fantasyrpg.sound = {
        //musik
        classroom: "./sound/classroom.wav",
        bell: "./sound/schoolbell.wav",
        break: "./sound/schoolbreak.mp3",
        teacher: "./sound/teacherscream.wav",
        steps: "./sound/stomp.wav",
        normal: "./sound/08travel2.wav",
        fight: "./sound/Boss.wav",
        town: "./sound/01town1.wav",
        credits: "./sound/10credits1.wav",
        //Sound
        click: ""
    };
    fantasyrpg.locations = {
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
        Black: {
            name: "black",
            background: "./Images/Backgrounds/black.png"
        },
        white: {
            name: "white",
            background: "./Images/Backgrounds/White.png"
        },
        whitename: {
            name: "whitename",
            background: "./Images/Backgrounds/whiteentername.png"
        },
        alchemist: {
            name: "alchemist",
            background: "./Images/Backgrounds/alchemist.png"
        },
        cave: {
            name: "cave",
            background: "./Images/Backgrounds/cave.png"
        },
        caveboss: {
            name: "caveboss",
            background: "./Images/Backgrounds/caveboss.png"
        },
        hotspring: {
            name: "hotspring",
            background: "./Images/Backgrounds/hotspring.png"
        },
        kreuzung2: {
            name: "kreuzung2",
            background: "./Images/Backgrounds/kreuzung2.png"
        },
        tower: {
            name: "tower",
            background: "./Images/Backgrounds/tower.png"
        },
        trailblocked: {
            name: "trailblocked",
            background: "./Images/Backgrounds/trailblocked.png"
        },
        trailtomountain: {
            name: "trailtomountain",
            background: "./Images/Backgrounds/trailtomountain.png"
        },
        trailwithlake: {
            name: "trailwithlake",
            background: "./Images/Backgrounds/trailwithlake.png"
        },
        villagecenter: {
            name: "villagecenter",
            background: "./Images/Backgrounds/villagecenter.png"
        },
        waterfall: {
            name: "waterfall",
            background: "./Images/Backgrounds/waterfall.png"
        },
        zweigung: {
            name: "zweigung",
            background: "./Images/Backgrounds/zweigung.png"
        },
        trail: {
            name: "trail",
            background: "./Images/Backgrounds/trail.png"
        },
        fight: {
            name: "fight",
            background: "./Images/Backgrounds/fight.png"
        },
    };
    // define Carr
    fantasyrpg.characters = {
        Narrator: {
            name: ""
        },
        Scroll: {
            name: "Advice",
            origin: fantasyrpg.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "./Images/normal.png",
                incave: "./Images/incave.png"
            }
        },
        Stone: {
            name: "Stone",
            origin: fantasyrpg.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "./Images/Characters/Stone.png"
            }
        },
        Stone2: {
            name: "Stone1",
            origin: fantasyrpg.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "./Images/Characters/Stone1.png"
            }
        },
        Stone3: {
            name: "Stone2",
            origin: fantasyrpg.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "./Images/Characters/Stone2.png"
            }
        },
        Knife: {
            name: "Knife",
            origin: fantasyrpg.ƒS.ORIGIN.CENTER,
            pose: {
                normal: "./Images/Characters/Golem/Golem_Knife.png"
            }
        },
        Golem: {
            name: "Golem",
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMLEFT,
            pose: {
                normal: "./Images/Characters/Golem/Golem_Normal.png",
                dead: "./Images/Characters/Golem/Golem_Dead.png",
                knife: "./Images/Characters/Golem/Golem_Knife.png",
                attack1: "./Images/Characters/Golem/Attack/Golem_Attack_1.png",
                attack2: "./Images/Characters/Golem/Attack/Golem_Attack_2.png",
                attack3: "./Images/Characters/Golem/Attack/Golem_Attack_3.png",
                attack4: "./Images/Characters/Golem/Attack/Golem_Attack_4.png",
                attack5: "./Images/Characters/Golem/Attack/Golem_Attack_5.png",
                attack6: "./Images/Characters/Golem/Attack/Golem_Attack_6.png",
                attack7: "./Images/Characters/Golem/Attack/Golem_Attack_7.png",
                death1: "./Images/Characters/Golem/Death/Golem_Death_1.png",
                death2: "./Images/Characters/Golem/Death/Golem_Death_2.png",
                death3: "./Images/Characters/Golem/Death/Golem_Death_3.png",
                death4: "./Images/Characters/Golem/Death/Golem_Death_4.png",
                death5: "./Images/Characters/Golem/Death/Golem_Death_5.png",
                death6: "./Images/Characters/Golem/Death/Golem_Death_6.png",
                death7: "./Images/Characters/Golem/Death/Golem_Death_7.png",
            }
        },
        Samara: {
            name: "Samara: ",
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMCENTER,
            pose: {
                normal: "./Images/Characters/SwordWhielder/SwordWhielder.png",
                happy: "./Images/Characters/SwordWhielder/SwordWhielderHappy.png",
                veryhappy: "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png",
                unhappy: "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png",
                angry: "./Images/Characters/SwordWhielder/SwordWhielderAngry.png",
                arrogant: "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png",
                mediumlove: "./Images/Characters/SwordWhielder/SwordWhielderMediumLove.png",
                inlove: "./Images/Characters/SwordWhielder/SwordWhielderInLove.png",
                skystrike1: "./Images/Characters/Swordwhielder/SkyStrike/SW_SkyStrike_1.jpg",
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
        },
        dice: {
            name: "dice",
            origin: fantasyrpg.ƒS.ORIGIN.CENTER,
            pose: {
                dice1: "./Images/1.png",
                dice2: "./Images/2.png",
                dice3: "./Images/3.png",
                dice4: "./Images/4.png",
                dice5: "./Images/5.png",
                dice6: "./Images/6.png",
            }
        },
        dice2: {
            name: "dice2",
            origin: fantasyrpg.ƒS.ORIGIN.CENTER,
            pose: {
                dice1: "./Images/11.png",
                dice2: "./Images/22.png",
                dice3: "./Images/33.png",
                dice4: "./Images/44.png",
                dice5: "./Images/55.png",
                dice6: "./Images/66.png",
            }
        },
        dice3: {
            name: "dice3",
            origin: fantasyrpg.ƒS.ORIGIN.CENTER,
            pose: {
                dice1: "./Images/111.png",
                dice2: "./Images/222.png",
                dice3: "./Images/333.png",
                dice4: "./Images/444.png",
                dice5: "./Images/555.png",
                dice6: "./Images/666.png",
            }
        }
    };
    //Animation for dice
    function stones() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(0, 0) },
            end: { translation: fantasyrpg.ƒS.positionPercent(40, 120) },
            duration: 3,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.stones = stones;
    function stones1() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(30, 0) },
            end: { translation: fantasyrpg.ƒS.positionPercent(70, 120) },
            duration: 3,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.stones1 = stones1;
    function stones2() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(60, 0) },
            end: { translation: fantasyrpg.ƒS.positionPercent(120, 120) },
            duration: 3,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.stones2 = stones2;
    function diceani1() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 0 },
            end: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 180 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani1 = diceani1;
    function diceani2() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 190 },
            end: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 360 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani2 = diceani2;
    function diceani3() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 370 },
            end: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 540 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani3 = diceani3;
    function diceani4() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 550 },
            end: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 720 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani4 = diceani4;
    function diceani5() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 730 },
            end: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 900 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani5 = diceani5;
    function diceani6() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 910 },
            end: { translation: fantasyrpg.ƒS.positionPercent(50, 80), rotation: 1080 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani6 = diceani6;
    function diceani1left() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 0 },
            end: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 90 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani1left = diceani1left;
    function diceani2left() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 90 },
            end: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 180 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani2left = diceani2left;
    function diceani3left() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 180 },
            end: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 270 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani3left = diceani3left;
    function diceani4left() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 270 },
            end: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 360 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani4left = diceani4left;
    function diceani5left() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 360 },
            end: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 450 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani5left = diceani5left;
    function diceani6left() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 450 },
            end: { translation: fantasyrpg.ƒS.positionPercent(20, 80), rotation: 360 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani6left = diceani6left;
    function diceani1right() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 0 },
            end: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 90 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani1right = diceani1right;
    function diceani2right() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 90 },
            end: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 180 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani2right = diceani2right;
    function diceani3right() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 180 },
            end: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 270 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani3right = diceani3right;
    function diceani4right() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 270 },
            end: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 360 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani4right = diceani4right;
    function diceani5right() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 360 },
            end: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 450 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani5right = diceani5right;
    function diceani6right() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 450 },
            end: { translation: fantasyrpg.ƒS.positionPercent(80, 80), rotation: 360 },
            duration: 0.5,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.diceani6right = diceani6right;
    function knifethrow() {
        return {
            start: { translation: fantasyrpg.ƒS.positionPercent(80, 80) },
            end: { translation: fantasyrpg.ƒS.positionPercent(10, 80) },
            duration: 3,
            playmode: fantasyrpg.ƒS.ANIMATION_PLAYMODE.PLAYONCE
        };
    }
    fantasyrpg.knifethrow = knifethrow;
    function addfriendship(_event) {
        console.log(_event);
        if (fantasyrpg.stats.flowercheck == true) {
            fantasyrpg.ƒS.Text.print("You give " + fantasyrpg.stats.chosenrel + " the flower you found");
            fantasyrpg.ƒS.Text.print(fantasyrpg.stats.chosenrel + " really likes them and gives you a kiss");
            if (fantasyrpg.stats.chosenrel in fantasyrpg.stats.Side1) {
                fantasyrpg.stats.relside1 += 50;
                fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.inlove, fantasyrpg.ƒS.positionPercent(90, 90));
            }
            else if (fantasyrpg.stats.chosenrel in fantasyrpg.stats.Side2) {
                fantasyrpg.stats.relside2 += 50;
                fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.inlove, fantasyrpg.ƒS.positionPercent(90, 90));
            }
            else if (fantasyrpg.stats.chosenrel in fantasyrpg.stats.Side3) {
                fantasyrpg.stats.relside3 += 50;
                fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.inlove, fantasyrpg.ƒS.positionPercent(90, 90));
            }
        }
        else {
            fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Flower);
            fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "You can not use that here");
        }
    }
    function addstrength(_event) {
        console.log(_event);
        fantasyrpg.stats.Main.Strength += 10;
    }
    function openadvice(_event) {
        console.log(_event);
        if (fantasyrpg.stats.incave == true) {
            let Throwdice = {
                e1: "Feel Lucky?",
            };
            let Dicethrow = fantasyrpg.ƒS.Menu.getInput(Throwdice, "dialog3");
            Dicethrow = Dicethrow;
            fantasyrpg.stats.retreat = true;
        }
        else {
            let Throwdice1 = {
                e2: "Feel Lucky?",
            };
            let Dicethrow1 = fantasyrpg.ƒS.Menu.getInput(Throwdice1, "dialog4");
            Dicethrow1 = Dicethrow1;
        }
        fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update(5);
        console.log("test");
    }
    function usescroll(_event) {
        console.log(_event);
        if (fantasyrpg.stats.bossfight = true && fantasyrpg.stats.Main.namechar == "Samara") {
            fantasyrpg.stats.scrollused = true;
            //das hier war angedacht bei scrolluse aber ich hab es nicht hinbekommen hier in der funktion eine neue Szene aufzurufen, 
            //deshalb hab ich eine notlösung gemacht die zwar funktioniert aber nich so geil ist
            //(jetzt kann man die scroll nur an ganz bestimmten punkten benutzen anstatt während des gesamten endkampfes)
            //ƒS.Text.print("Something is happening you feel very strong all of the sudden");
            //ƒS.Text.print("You decide to fire off all your spells");
            //skill1funktion();
            //skill2funktion();
            //skill3funktion();
            //ƒS.Text.print("You managed to defeat the Golem in one blow");
            //ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
            //ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
            //scenecount = "end";
            //return scenecount; /switch to different scene here
        }
        else {
            fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Scroll);
            fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "You can not use that here");
        }
    }
    fantasyrpg.items = {
        Healthpotion: {
            name: "Healingpotion",
            description: "Gives you some Health",
            image: "./Images/PotionRed.png",
        },
        Flower: {
            name: "Flower",
            description: "Seems useless",
            image: "./Images/flower.png",
            handler: addfriendship
        },
        advice: {
            name: "Advice",
            description: "Has something writen on it",
            image: "./Images/Scroll.png",
            static: true,
            handler: openadvice
        },
        EmptyBottle: {
            name: "EmptyBottle",
            description: "Seems useless",
            image: "./Images/EmptyBottle.png",
        },
        Apple: {
            name: "Apple",
            description: "Adds Strenght",
            image: "./Images/Apple.png",
            handler: addstrength
        },
        Scroll: {
            name: "Scroll",
            description: "Seems usefull",
            image: "./Images/Scroll.png",
            handler: usescroll
        }
    };
    fantasyrpg.scenecount = "";
    fantasyrpg.scenecount2 = "";
    fantasyrpg.test = 0;
    fantasyrpg.teststring = "";
    fantasyrpg.stats = {
        Protagonist: {
            name: "Protagonist"
        },
        char1: {
            points: 0
        },
        state: {
            a: 0
        },
        bossfight: false,
        number: 0,
        random: 0,
        makePotiontest: false,
        flowercheck: false,
        chosenrel: "",
        bonus: false,
        incave: false,
        message: "",
        retreat: false,
        potionamount: 0,
        scrollused: false,
        skillused: false,
        Main: {
            name: "",
            namechar: "",
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMCENTER,
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
        relzwischenablage: 0,
        Side1: {
            name: "",
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMCENTER,
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
            origin: fantasyrpg.ƒS.ORIGIN.BOTTOMCENTER,
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
            fantasyrpg.ƒS.Sound.setMasterVolume(volume);
        }
    }
    fantasyrpg.volplus = volplus;
    function volminus() {
        if (volume > 0) {
            volume -= 0.1;
            fantasyrpg.ƒS.Sound.setMasterVolume(volume);
        }
    }
    fantasyrpg.volminus = volminus;
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
            await fantasyrpg.ƒS.Progress.save();
        }
        else if (_option == inGameMenue.load) {
            await fantasyrpg.ƒS.Progress.load();
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
            fantasyrpg.credits();
        }
        else if (_option == inGameMenue.about) {
        }
    }
    document.addEventListener("keydown", hndKeypress);
    async function hndKeypress(_event) {
        switch (_event.code) {
            case fantasyrpg.ƒ.KEYBOARD_CODE.F4:
                console.log("Save");
                await fantasyrpg.ƒS.Progress.save();
                break;
            case fantasyrpg.ƒ.KEYBOARD_CODE.F9:
                console.log("Load");
                await fantasyrpg.ƒS.Progress.load();
                break;
            case fantasyrpg.ƒ.KEYBOARD_CODE.I:
                console.log("InventoryOpen");
                await fantasyrpg.ƒS.Inventory.open();
                break;
        }
    }
    window.addEventListener("load", start);
    function start(_event) {
        gameMenue =
            fantasyrpg.ƒS.Menu.create(inGameMenue, buttonfunc, "gameMenue");
        let scenes = [
            { id: "scene6", scene: fantasyrpg.testing, name: "scene6" },
            //{scene: audiouebung, name: "audioübung"}
            //{ scene: Text, name: "01_Text", next: scenecount.count},
            //{scene: Decision, name: "02_Test"},
            //{scene: Animation, name: "animation"},
            { id: "scene1", scene: fantasyrpg.scene1, name: "1stScene", next: fantasyrpg.scenecount },
            { id: "Archer1", scene: fantasyrpg.option1, name: "1stScene", next: fantasyrpg.scenecount },
            { id: "Nightstalker1", scene: fantasyrpg.option2, name: "2ndScene", next: fantasyrpg.scenecount },
            { id: "ArchMage1", scene: fantasyrpg.option3, name: "3rdScene", next: fantasyrpg.scenecount },
            { id: "Swordwielder1", scene: fantasyrpg.option4, name: "4thScene", next: fantasyrpg.scenecount },
            { id: "skill1", scene: fantasyrpg.skill1, name: "skill1", next: fantasyrpg.scenecount },
            { id: "skill2", scene: fantasyrpg.skill2, name: "skill2", next: fantasyrpg.scenecount },
            { id: "skill3", scene: fantasyrpg.skill3, name: "skill3", next: fantasyrpg.scenecount },
            { id: "scene2", scene: fantasyrpg.scene2, name: "scene2", next: fantasyrpg.scenecount },
            { id: "scene2b", scene: fantasyrpg.scene2b, name: "scene2b", next: fantasyrpg.scenecount },
            { id: "scene3", scene: fantasyrpg.scene3, name: "scene3", next: fantasyrpg.scenecount },
            { id: "scene4", scene: fantasyrpg.scene4, name: "scene4", next: fantasyrpg.scenecount },
            { id: "scene5", scene: fantasyrpg.scene5, name: "scene5", next: fantasyrpg.scenecount },
            { id: "scene6", scene: fantasyrpg.scene6, name: "scene6", next: fantasyrpg.scenecount },
            { id: "scene7", scene: fantasyrpg.scene7, name: "scene7", next: fantasyrpg.scenecount },
            { id: "scene8", scene: fantasyrpg.scene8, name: "scene8", next: fantasyrpg.scenecount },
            { id: "scene9", scene: fantasyrpg.scene9, name: "scene9", next: fantasyrpg.scenecount },
            { id: "getinput", scene: fantasyrpg.getinput, name: "getinput", next: fantasyrpg.scenecount },
            { id: "credits", scene: fantasyrpg.credits, name: "credits" },
            { id: "end", scene: fantasyrpg.end, name: "end" },
        ];
        let uiElement = document.querySelector("[type= interface]");
        fantasyrpg.stats = fantasyrpg.ƒS.Progress.setData(fantasyrpg.stats, uiElement);
        //ƒS.Progress.setData(stats);
        fantasyrpg.ƒS.Progress.go(scenes);
    }
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene() {
        console.log("FudgeStory Template Scene starting");
    }
    fantasyrpg.scene = scene;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function audiouebung() {
        let signalDelay2s = fantasyrpg.ƒS.Progress.defineSignal([() => fantasyrpg.ƒS.Progress.delay(2)]);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.set(fantasyrpg.characters.Narrator, "Wir sollten uns solangsam beeilen, du weißt Herr Peters ist immer sehr streng was Pünktlichkeit angeht.");
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.break, 0);
        await fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.break, 0.3, 4);
        await fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.bell, 1, 1);
        signalDelay2s();
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.steps, 0.6, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        fantasyrpg.ƒS.update(2);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.clock.duration, fantasyrpg.transition.clock.alpha, fantasyrpg.transition.clock.edge);
        await fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.steps, 0, 0);
        await fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.break, 0, 1);
        await fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.classroom, 0.1, 2);
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.teacher, 0.001, false);
        await fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.classroom, 0.0, 5);
    }
    fantasyrpg.audiouebung = audiouebung;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function credits() {
        console.log("credits");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.credits, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.mountain);
        fantasyrpg.ƒS.update();
        fantasyrpg.ƒS.Text.addClass("contract");
        fantasyrpg.ƒS.Speech.hide();
        let pages = ["<strong>Credits</strong> \
      <br>This Game was made with Fudge(Fudge Story)</br>\
      <br>Writing, Gamedesigne, adjusting Assets and Programming was done by Sebastian Pfeiffer</br>\
      <br>The Image that is currently in the Background was created by Vicente Nitti (@vnitti)</br>\
      <br>It was used 1 more time where it was cut in 4 and some characters and text were put over it</br>\
      <br>Lizenz: https://creativecommons.org/licenses/by/4.0/</br>\
      <br>The socials are the following</br>\
      <br>Twitter:   https://twitter.com/vnitti_art</br>\
      <br>Itch.io:   https://vnitti.itch.io/</br>\
      <br>Patreon:   https://patreon.com/vnitti</br>\
      <br>Portfolio: https://deviantart.com/vnitti</br>\
      <br>Seite 1</br>", "<strong>Credits</strong>\
      <br>All other images and Assets are either free to use and can be found on the following website</br>\
      <br>https://itch.io/game-assets/free/tag-pixel-art</br>\
      <br>Feel free to support any of the creators</br>\
      <br>or are drawn by Sebastian Pfeiffer</br>\
      <br>Musik during fights by Brian Paul Zimmerman</br>\
      <br>https://www.youtube.com/watch?v=x6qEh02qAfU&t=3s&ab_channel=TheBigBossTheory</br>\
      <br>Ever other Musik is from VGcomposer and free to use</br>\
      <br><https://vgcomposer.itch.io/action-rpg-music-free/br>\
      <br>Soundeffekts are licence free</br>\
      <br>Seite 2</br>", "<strong>Credits</strong>"];
        let current = 0;
        let flip = { back: "Back", next: "Next", done: "Close" };
        let choice;
        fantasyrpg.ƒS.Text.addClass("flip");
        do {
            fantasyrpg.ƒS.Text.print(pages[current]);
            choice = await fantasyrpg.ƒS.Menu.getInput(flip, "flip");
            switch (choice) {
                case flip.back:
                    current = Math.max(0, current - 1);
                    break;
                case flip.next:
                    current = Math.min(pages.length - 1, current + 1);
                    break;
            }
        } while (choice != flip.done);
        fantasyrpg.ƒS.Text.close();
    }
    fantasyrpg.credits = credits;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function end() {
        console.log("end");
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        await fantasyrpg.ƒS.update(1);
        if (fantasyrpg.stats.relside1 > 100) {
            fantasyrpg.stats.relside1 = 100;
        }
        if (fantasyrpg.stats.relside2 > 100) {
            fantasyrpg.stats.relside2 = 100;
        }
        if (fantasyrpg.stats.relside3 > 100) {
            fantasyrpg.stats.relside3 = 100;
        }
        if (fantasyrpg.stats.Main.Strength > 100) {
            fantasyrpg.stats.Main.Strength = 100;
        }
        await fantasyrpg.ƒS.Text.print("This is the end of the Story");
        await fantasyrpg.ƒS.Text.print("If you liked the game you always have the possibility to play it again");
        await fantasyrpg.ƒS.Text.print("Bcause every decision you did had an effekt on the story and its ending");
        await fantasyrpg.ƒS.Text.print("And finally here is what you archived");
        await fantasyrpg.ƒS.Text.print("You archived the following \n strength: " + fantasyrpg.stats.Main.Strength);
        await fantasyrpg.ƒS.Text.print("You went into a Relationship with: " + fantasyrpg.stats.chosenrel);
        await fantasyrpg.ƒS.Text.print("Friendship strength to " + fantasyrpg.stats.Side1.name + ": " + fantasyrpg.stats.relside1);
        await fantasyrpg.ƒS.Text.print("Friendship strength to " + fantasyrpg.stats.Side2.name + ": " + fantasyrpg.stats.relside2);
        await fantasyrpg.ƒS.Text.print("Friendship strength to " + fantasyrpg.stats.Side3.name + ": " + fantasyrpg.stats.relside3);
    }
    fantasyrpg.end = end;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function getinput() {
        if (fantasyrpg.stats.incave == true) {
            fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Scroll, fantasyrpg.characters.Scroll.pose.incave, fantasyrpg.ƒS.positionPercent(50, 50));
            fantasyrpg.ƒS.update();
        }
        else {
            fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Scroll, fantasyrpg.characters.Scroll.pose.normal, fantasyrpg.ƒS.positionPercent(50, 50));
            fantasyrpg.ƒS.update();
        }
        fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "Can you decifer it?");
        fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "try it");
        fantasyrpg.stats.message = await fantasyrpg.ƒS.Speech.getInput();
        if (fantasyrpg.stats.message == "You can't defeat the Golem") {
            await fantasyrpg.ƒS.Text.print("Thats the right Message but what does it mean?");
            fantasyrpg.stats.retreat = true;
        }
        fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.Scroll);
    }
    fantasyrpg.getinput = getinput;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function loveending() {
        console.log("end");
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        if (fantasyrpg.stats.relside1 > 100) {
            fantasyrpg.stats.relside1 = 100;
        }
        if (fantasyrpg.stats.relside2 > 100) {
            fantasyrpg.stats.relside2 = 100;
        }
        if (fantasyrpg.stats.relside3 > 100) {
            fantasyrpg.stats.relside3 = 100;
        }
        if (fantasyrpg.stats.Main.Strength > 100) {
            fantasyrpg.stats.Main.Strength = 100;
        }
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("After your talk with " + fantasyrpg.stats.chosenrel + " you decided to go back to the town with the hotspring");
        await fantasyrpg.ƒS.Text.print("Your friends came with you but went back to their hometown");
        await fantasyrpg.ƒS.Text.print("You and " + fantasyrpg.stats.chosenrel + " build a house in that town and lived there for the rest of your happy life");
        await fantasyrpg.ƒS.Text.print("This is the end of the Story");
        await fantasyrpg.ƒS.Text.print("If you liked the game you always have the possibility to play it again");
        await fantasyrpg.ƒS.Text.print("Bcause every decision you did had an effekt on the story and its ending");
        await fantasyrpg.ƒS.Text.print("And finally here is what you archived");
        await fantasyrpg.ƒS.Text.print("You archived the following \n strength: " + fantasyrpg.stats.Main.Strength);
        await fantasyrpg.ƒS.Text.print("You went into a Relationship with: " + fantasyrpg.stats.chosenrel);
        await fantasyrpg.ƒS.Text.print("Friendship strength to " + fantasyrpg.stats.Side1.name + ": " + fantasyrpg.stats.relside1);
        await fantasyrpg.ƒS.Text.print("Friendship strength to " + fantasyrpg.stats.Side2.name + ": " + fantasyrpg.stats.relside2);
        await fantasyrpg.ƒS.Text.print("Friendship strength to " + fantasyrpg.stats.Side3.name + ": " + fantasyrpg.stats.relside3);
    }
    fantasyrpg.loveending = loveending;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function meter() {
        console.log("4thScene");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "hi");
        fantasyrpg.stats.state.a += 55;
        fantasyrpg.ƒS.update();
    }
    fantasyrpg.meter = meter;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function option1() {
        console.log("1stScene");
        fantasyrpg.stats.Main.namechar = "Hando";
        fantasyrpg.stats.Main.pose.normal = "./Images/Characters/Archer/Archer1.png";
        fantasyrpg.stats.Main.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        fantasyrpg.stats.Main.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        fantasyrpg.stats.Main.pose.unhappy = "../Images/Characters/Archer/ArcherUnHappy.png";
        fantasyrpg.stats.Main.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        fantasyrpg.stats.Main.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        fantasyrpg.stats.Main.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        fantasyrpg.stats.Main.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        fantasyrpg.stats.Main.Skill1 = "Bowshot";
        fantasyrpg.stats.Main.Skill2 = "Fastshot";
        fantasyrpg.stats.Main.Skill3 = "Rollshot";
        fantasyrpg.stats.Side2.name = "Samara";
        fantasyrpg.stats.Side2.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        fantasyrpg.stats.Side2.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        fantasyrpg.stats.Side2.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        fantasyrpg.stats.Side2.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        fantasyrpg.stats.Side2.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        fantasyrpg.stats.Side2.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        fantasyrpg.stats.Side2.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        fantasyrpg.stats.Side2.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        fantasyrpg.stats.Side2.Skill1 = "FireBall";
        fantasyrpg.stats.Side2.Skill2 = "Lightning";
        fantasyrpg.stats.Side2.Skill3 = "Windstrike";
        fantasyrpg.stats.Side1.name = "Liraz";
        fantasyrpg.stats.Side1.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        fantasyrpg.stats.Side1.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        fantasyrpg.stats.Side1.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        fantasyrpg.stats.Side1.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        fantasyrpg.stats.Side1.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        fantasyrpg.stats.Side1.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        fantasyrpg.stats.Side1.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        fantasyrpg.stats.Side1.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        fantasyrpg.stats.Side1.Skill1 = "Blindinglight";
        fantasyrpg.stats.Side1.Skill2 = "Swordswing";
        fantasyrpg.stats.Side1.Skill3 = "Windburst";
        fantasyrpg.stats.Side3.name = "Adira";
        fantasyrpg.stats.Side3.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        fantasyrpg.stats.Side3.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        fantasyrpg.stats.Side3.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        fantasyrpg.stats.Side3.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        fantasyrpg.stats.Side3.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        fantasyrpg.stats.Side3.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        fantasyrpg.stats.Side3.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove.png";
        fantasyrpg.stats.Side3.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        fantasyrpg.stats.Side3.Skill1 = "Skystrike";
        fantasyrpg.stats.Side3.Skill2 = "Swordattack";
        fantasyrpg.stats.Side3.Skill3 = "Swordslash";
        fantasyrpg.stats.scoreside2 = "Samara";
        fantasyrpg.stats.scoreside1 = "Liraz";
        fantasyrpg.stats.scoreside3 = "Adira";
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.camp);
        await fantasyrpg.ƒS.update(2);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await fantasyrpg.ƒS.Text.print("As you enter your village you finde your 3 Mates  " + fantasyrpg.stats.Side1.name + ", " + fantasyrpg.stats.Side2.name + " and " + fantasyrpg.stats.Side3.name);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later");
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
        fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("Do you want to got with them?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                fantasyrpg.stats.relside1 += 10;
                fantasyrpg.stats.relside2 += 10;
                fantasyrpg.stats.relside3 += 10;
                //stats.char1.points += 5;
                //stats.relside1 += 5;
                console.log("relside1" + fantasyrpg.stats.relside1);
                fantasyrpg.ƒS.update();
                fantasyrpg.scenecount = "scene2";
                return fantasyrpg.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.unhappy, fantasyrpg.ƒS.positionPercent(50, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.unhappy, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.unhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Text.print("A few minutes later " + fantasyrpg.stats.Side2.name + " walks up to you");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey can we talk for a second?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sure what is bothering you?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I am just a bit tired thats all");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Ah thats fine I just really hoped you would come");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mh let me think about it for a second");
                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
                let secondDialogueElement = await fantasyrpg.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        fantasyrpg.stats.relside1 += 5;
                        fantasyrpg.stats.relside2 += 15;
                        fantasyrpg.stats.relside3 += 5;
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Okay I`ll join you! See you later");
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Main);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(5, 90));
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                        fantasyrpg.ƒS.update();
                        fantasyrpg.scenecount = "scene2";
                        return fantasyrpg.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        fantasyrpg.stats.Main.Strength += 10;
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await fantasyrpg.ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await fantasyrpg.ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await fantasyrpg.ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await fantasyrpg.ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await fantasyrpg.ƒS.Text.print("Do you want to pick it up?");
                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let thirdDialogueElement = await fantasyrpg.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                                fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await fantasyrpg.ƒS.Text.print("They are really happy that you came to look after them");
                                await fantasyrpg.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                //ƒS.Inventory.add(items.EmptyBottle);
                                fantasyrpg.scenecount = "scene3";
                                return fantasyrpg.scenecount;
                            case thirdDialogueElementAnswers.sayNo:
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                                fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await fantasyrpg.ƒS.Text.print("They are really happy that you came to look after them");
                                await fantasyrpg.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                fantasyrpg.scenecount = "scene3";
                                await fantasyrpg.ƒS.update();
                                return fantasyrpg.scenecount;
                        }
                        fantasyrpg.scenecount = "scene3";
                        return fantasyrpg.scenecount;
                }
        }
    }
    fantasyrpg.option1 = option1;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function option2() {
        console.log("2ndScene");
        fantasyrpg.stats.Main.namechar = "Liraz";
        fantasyrpg.stats.Main.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        fantasyrpg.stats.Main.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        fantasyrpg.stats.Main.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        fantasyrpg.stats.Main.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        fantasyrpg.stats.Main.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        fantasyrpg.stats.Main.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        fantasyrpg.stats.Main.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        fantasyrpg.stats.Main.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        fantasyrpg.stats.Main.Skill1 = "Blindinglight";
        fantasyrpg.stats.Main.Skill2 = "Swordswing";
        fantasyrpg.stats.Main.Skill3 = "Windburst";
        fantasyrpg.stats.Side1.name = "Samara";
        fantasyrpg.stats.Side1.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        fantasyrpg.stats.Side1.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        fantasyrpg.stats.Side1.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        fantasyrpg.stats.Side1.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        fantasyrpg.stats.Side1.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        fantasyrpg.stats.Side1.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        fantasyrpg.stats.Side1.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        fantasyrpg.stats.Side1.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        fantasyrpg.stats.Side1.Skill1 = "FireBall";
        fantasyrpg.stats.Side1.Skill2 = "Lightning";
        fantasyrpg.stats.Side1.Skill3 = "Windstrike";
        fantasyrpg.stats.Side2.name = "Hando";
        fantasyrpg.stats.Side2.pose.normal = "./Images/Characters/Archer/Archer1.png";
        fantasyrpg.stats.Side2.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        fantasyrpg.stats.Side2.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        fantasyrpg.stats.Side2.pose.unhappy = "./Images/Characters/Archer/ArcherUnHappy.png";
        fantasyrpg.stats.Side2.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        fantasyrpg.stats.Side2.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        fantasyrpg.stats.Side2.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        fantasyrpg.stats.Side2.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        fantasyrpg.stats.Side2.Skill1 = "Bowshot";
        fantasyrpg.stats.Side2.Skill2 = "Fastshot";
        fantasyrpg.stats.Side2.Skill3 = "Rollshot";
        fantasyrpg.stats.Side3.name = "Adira";
        fantasyrpg.stats.Side3.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        fantasyrpg.stats.Side3.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        fantasyrpg.stats.Side3.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        fantasyrpg.stats.Side3.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        fantasyrpg.stats.Side3.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        fantasyrpg.stats.Side3.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        fantasyrpg.stats.Side3.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove.png";
        fantasyrpg.stats.Side3.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        fantasyrpg.stats.Side3.Skill1 = "Skystrike";
        fantasyrpg.stats.Side3.Skill2 = "Swordattack";
        fantasyrpg.stats.Side3.Skill3 = "Swordslash";
        fantasyrpg.stats.scoreside1 = "Samara";
        fantasyrpg.stats.scoreside2 = "Hando";
        fantasyrpg.stats.scoreside3 = "Adira";
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.camp);
        await fantasyrpg.ƒS.update(2);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await fantasyrpg.ƒS.Text.print("As you enter your village you finde your 3 Mates  " + fantasyrpg.stats.Side1.name + ", " + fantasyrpg.stats.Side2.name + " and " + fantasyrpg.stats.Side3.name);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later");
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
        fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("Do you want to got with them?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                fantasyrpg.stats.relside1 += 10;
                fantasyrpg.stats.relside2 += 10;
                fantasyrpg.stats.relside3 += 10;
                fantasyrpg.stats.char1.points += 5;
                fantasyrpg.scenecount = "scene2";
                return fantasyrpg.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.unhappy, fantasyrpg.ƒS.positionPercent(50, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.unhappy, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.unhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Text.print("A few minutes later " + fantasyrpg.stats.Side2.name + " walks up to you");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey can we talk for a second?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sure what is bothering you?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I am just a bit tired thats all");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Ah thats fine I just really hoped you would come");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mh let me think about it for a second");
                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
                let secondDialogueElement = await fantasyrpg.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        fantasyrpg.stats.relside1 += 5;
                        fantasyrpg.stats.relside2 += 15;
                        fantasyrpg.stats.relside3 += 5;
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Okay I`ll join you! See you later");
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Main);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(5, 90));
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                        fantasyrpg.ƒS.update();
                        fantasyrpg.scenecount = "scene2";
                        return fantasyrpg.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        fantasyrpg.stats.Main.Strength += 10;
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await fantasyrpg.ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await fantasyrpg.ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await fantasyrpg.ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await fantasyrpg.ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await fantasyrpg.ƒS.Text.print("Do you want to pick it up?");
                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let thirdDialogueElement = await fantasyrpg.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                                fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await fantasyrpg.ƒS.Text.print("They are really happy that you came to look after them");
                                await fantasyrpg.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                //ƒS.Inventory.add(items.EmptyBottle);
                                fantasyrpg.scenecount = "scene3";
                                return fantasyrpg.scenecount;
                            case thirdDialogueElementAnswers.sayNo:
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                                fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await fantasyrpg.ƒS.Text.print("They are really happy that you came to look after them");
                                await fantasyrpg.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                fantasyrpg.scenecount = "scene3";
                                await fantasyrpg.ƒS.update();
                                return fantasyrpg.scenecount;
                        }
                        fantasyrpg.scenecount = "scene3";
                        await fantasyrpg.ƒS.update();
                        return fantasyrpg.scenecount;
                }
        }
    }
    fantasyrpg.option2 = option2;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function option3() {
        console.log("3rdScene");
        fantasyrpg.stats.Main.namechar = "Samara";
        fantasyrpg.stats.Main.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        fantasyrpg.stats.Main.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        fantasyrpg.stats.Main.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        fantasyrpg.stats.Main.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        fantasyrpg.stats.Main.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        fantasyrpg.stats.Main.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        fantasyrpg.stats.Main.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        fantasyrpg.stats.Main.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        fantasyrpg.stats.Main.Skill1 = "Fireball";
        fantasyrpg.stats.Main.Skill2 = "Lightning";
        fantasyrpg.stats.Main.Skill3 = "Windstrike";
        fantasyrpg.stats.Side1.name = "Hando";
        fantasyrpg.stats.Side1.pose.normal = "./Images/Characters/Archer/Archer1.png";
        fantasyrpg.stats.Side1.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        fantasyrpg.stats.Side1.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        fantasyrpg.stats.Side1.pose.unhappy = "./Images/Characters/Archer/ArcherUnHappy.png";
        fantasyrpg.stats.Side1.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        fantasyrpg.stats.Side1.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        fantasyrpg.stats.Side1.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        fantasyrpg.stats.Side1.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        fantasyrpg.stats.Side1.Skill1 = "Bowshot";
        fantasyrpg.stats.Side1.Skill2 = "Fastshot";
        fantasyrpg.stats.Side1.Skill3 = "Rollshot";
        fantasyrpg.stats.Side3.name = "Liraz";
        fantasyrpg.stats.Side3.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        fantasyrpg.stats.Side3.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        fantasyrpg.stats.Side3.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        fantasyrpg.stats.Side3.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        fantasyrpg.stats.Side3.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        fantasyrpg.stats.Side3.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        fantasyrpg.stats.Side3.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        fantasyrpg.stats.Side3.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        fantasyrpg.stats.Side3.Skill1 = "Blindinglight";
        fantasyrpg.stats.Side3.Skill2 = "Swordswing";
        fantasyrpg.stats.Side3.Skill3 = "Windburst";
        fantasyrpg.stats.Side2.name = "Adira";
        fantasyrpg.stats.Side2.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        fantasyrpg.stats.Side2.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        fantasyrpg.stats.Side2.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        fantasyrpg.stats.Side2.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        fantasyrpg.stats.Side2.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        fantasyrpg.stats.Side2.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        fantasyrpg.stats.Side2.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove.png";
        fantasyrpg.stats.Side2.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        fantasyrpg.stats.Side2.Skill1 = "Skystrike";
        fantasyrpg.stats.Side2.Skill2 = "Swordattack";
        fantasyrpg.stats.Side2.Skill3 = "Swordslash";
        fantasyrpg.stats.scoreside1 = "Hando";
        fantasyrpg.stats.scoreside3 = "Liraz";
        fantasyrpg.stats.scoreside2 = "Adira";
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.camp);
        await fantasyrpg.ƒS.update(2);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await fantasyrpg.ƒS.Text.print("As you enter your village you finde your 3 Mates  " + fantasyrpg.stats.Side1.name + ", " + fantasyrpg.stats.Side2.name + " and " + fantasyrpg.stats.Side3.name);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later");
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
        fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("Do you want to got with them?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                fantasyrpg.stats.relside1 += 10;
                fantasyrpg.stats.relside2 += 10;
                fantasyrpg.stats.relside3 += 10;
                fantasyrpg.stats.char1.points += 5;
                fantasyrpg.scenecount = "scene2";
                return fantasyrpg.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.unhappy, fantasyrpg.ƒS.positionPercent(50, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.unhappy, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.unhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Text.print("A few minutes later " + fantasyrpg.stats.Side2.name + " walks up to you");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey can we talk for a second?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sure what is bothering you?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I am just a bit tired thats all");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Ah thats fine I just really hoped you would come");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mh let me think about it for a second");
                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
                let secondDialogueElement = await fantasyrpg.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        fantasyrpg.stats.relside1 += 5;
                        fantasyrpg.stats.relside2 += 15;
                        fantasyrpg.stats.relside3 += 5;
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Okay I`ll join you! See you later");
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Main);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(5, 90));
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                        fantasyrpg.ƒS.update();
                        fantasyrpg.scenecount = "scene2";
                        return fantasyrpg.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        fantasyrpg.stats.Main.Strength += 10;
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await fantasyrpg.ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await fantasyrpg.ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await fantasyrpg.ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await fantasyrpg.ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await fantasyrpg.ƒS.Text.print("Do you want to pick it up?");
                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let thirdDialogueElement = await fantasyrpg.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                                fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await fantasyrpg.ƒS.Text.print("They are really happy that you came to look after them");
                                await fantasyrpg.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                //ƒS.Inventory.add(items.EmptyBottle);
                                fantasyrpg.scenecount = "scene3";
                                return fantasyrpg.scenecount;
                            case thirdDialogueElementAnswers.sayNo:
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                                fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await fantasyrpg.ƒS.Text.print("They are really happy that you came to look after them");
                                await fantasyrpg.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                fantasyrpg.scenecount = "scene3";
                                await fantasyrpg.ƒS.update();
                                return fantasyrpg.scenecount;
                        }
                        fantasyrpg.scenecount = "scene3";
                        await fantasyrpg.ƒS.update();
                        return fantasyrpg.scenecount;
                }
        }
    }
    fantasyrpg.option3 = option3;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function option4() {
        console.log("4thScene");
        fantasyrpg.stats.Main.namechar = "Adira";
        fantasyrpg.stats.Main.pose.normal = "./Images/Characters/SwordWhielder/SwordWhielder.png";
        fantasyrpg.stats.Main.pose.happy = "./Images/Characters/SwordWhielder/SwordWhielderHappy.png";
        fantasyrpg.stats.Main.pose.veryhappy = "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png";
        fantasyrpg.stats.Main.pose.unhappy = "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png";
        fantasyrpg.stats.Main.pose.angry = "./Images/Characters/SwordWhielder/SwordWhielderAngry.png";
        fantasyrpg.stats.Main.pose.arrogant = "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png";
        fantasyrpg.stats.Main.pose.mediumlove = "./Images/Characters/SwordWhielder/SwordWhielderMediumLove.png";
        fantasyrpg.stats.Main.pose.inlove = "./Images/Characters/SwordWhielder/SwordWhielderInLove.png";
        fantasyrpg.stats.Main.Skill1 = "Skystrike";
        fantasyrpg.stats.Main.Skill2 = "Swordattack";
        fantasyrpg.stats.Main.Skill3 = "Swordslash";
        fantasyrpg.stats.Side1.name = "Samara";
        fantasyrpg.stats.Side1.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        fantasyrpg.stats.Side1.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        fantasyrpg.stats.Side1.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        fantasyrpg.stats.Side1.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        fantasyrpg.stats.Side1.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        fantasyrpg.stats.Side1.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        fantasyrpg.stats.Side1.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        fantasyrpg.stats.Side1.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        fantasyrpg.stats.Side1.Skill1 = "FireBall";
        fantasyrpg.stats.Side1.Skill2 = "Lightning";
        fantasyrpg.stats.Side1.Skill3 = "Windstrike";
        fantasyrpg.stats.Side2.name = "Liraz";
        fantasyrpg.stats.Side2.pose.normal = "./Images/Characters/Nightstalker/Nightstalker.png";
        fantasyrpg.stats.Side2.pose.happy = "./Images/Characters/Nightstalker/NightstalkerHappy.png";
        fantasyrpg.stats.Side2.pose.veryhappy = "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png";
        fantasyrpg.stats.Side2.pose.unhappy = "./Images/Characters/Nightstalker/NightstalkerUnHappy.png";
        fantasyrpg.stats.Side2.pose.angry = "./Images/Characters/Nightstalker/NightstalkerAngry.png";
        fantasyrpg.stats.Side2.pose.arrogant = "./Images/Characters/Nightstalker/NightstalkerArrogant.png";
        fantasyrpg.stats.Side2.pose.mediumlove = "./Images/Characters/Nightstalker/NightstalkerMediumLove.png";
        fantasyrpg.stats.Side2.pose.inlove = "./Images/Characters/Nightstalker/NightstalkerInLove.png";
        fantasyrpg.stats.Side2.Skill1 = "Blindinglight";
        fantasyrpg.stats.Side2.Skill2 = "Swordswing";
        fantasyrpg.stats.Side2.Skill3 = "Windburst";
        fantasyrpg.stats.Side3.name = "Hando";
        fantasyrpg.stats.Side3.pose.normal = "./Images/Characters/Archer/Archer1.png";
        fantasyrpg.stats.Side3.pose.happy = "./Images/Characters/Archer/ArcherHappy.png";
        fantasyrpg.stats.Side3.pose.veryhappy = "./Images/Characters/Archer/ArcherVeryHappy.png";
        fantasyrpg.stats.Side3.pose.unhappy = "./Images/Characters/Archer/ArcherUnHappy.png";
        fantasyrpg.stats.Side3.pose.angry = "./Images/Characters/Archer/ArcherAngry.png";
        fantasyrpg.stats.Side3.pose.arrogant = "./Images/Characters/Archer/ArcherArrogant.png";
        fantasyrpg.stats.Side3.pose.mediumlove = "./Images/Characters/Archer/ArcherMediumLove.png";
        fantasyrpg.stats.Side3.pose.inlove = "./Images/Characters/Archer/ArcherInLove.png";
        fantasyrpg.stats.Side3.Skill1 = "Bowshot";
        fantasyrpg.stats.Side3.Skill2 = "Fastshot";
        fantasyrpg.stats.Side3.Skill3 = "Rollshot";
        fantasyrpg.stats.scoreside1 = "Samara";
        fantasyrpg.stats.scoreside2 = "Liraz";
        fantasyrpg.stats.scoreside3 = "Hando";
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.camp);
        await fantasyrpg.ƒS.update(2);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("You have arrived back at your village after a hunting trip");
        await fantasyrpg.ƒS.Text.print("As you enter your village you finde your 3 Mates  " + fantasyrpg.stats.Side1.name + ", " + fantasyrpg.stats.Side2.name + " and " + fantasyrpg.stats.Side3.name);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("They asked you if you want to go with them to the shore to hang out later");
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
        fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("Do you want to got with them?");
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No",
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                fantasyrpg.stats.relside1 += 15;
                fantasyrpg.stats.relside2 += 15;
                fantasyrpg.stats.relside3 += 15;
                fantasyrpg.stats.char1.points += 5;
                fantasyrpg.scenecount = "scene2";
                return fantasyrpg.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.unhappy, fantasyrpg.ƒS.positionPercent(50, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.unhappy, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.unhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Text.print("A few minutes later " + fantasyrpg.stats.Side2.name + " walks up to you");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey can we talk for a second?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sure what is bothering you?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I am just a bit tired thats all");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Ah thats fine I just really hoped you would come");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mh let me think about it for a second");
                let secondDialogueElementAnswers = {
                    sayYes: "For you I`ll come",
                    sayNo: "Stay strong and don`t go",
                };
                let secondDialogueElement = await fantasyrpg.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                //stats.char1.points = stats.char1.points + 5;
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        fantasyrpg.stats.relside1 += 5;
                        fantasyrpg.stats.relside2 += 25;
                        fantasyrpg.stats.relside3 += 5;
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Okay I`ll join you! See you later");
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Main);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(5, 90));
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                        fantasyrpg.ƒS.update();
                        fantasyrpg.scenecount = "scene2";
                        return fantasyrpg.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        fantasyrpg.stats.Main.Strength += 10;
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Text.print("Instead of going with your friends you decided to practice");
                        await fantasyrpg.ƒS.Text.print("As the day progresses you notice that the weather get really bad");
                        await fantasyrpg.ƒS.Text.print("You get worried about your friends so you decide to go look for them");
                        await fantasyrpg.ƒS.Text.print("As it seems they already went to the shore so you decide to go after them");
                        await fantasyrpg.ƒS.Text.print("On the way to the shore you finde an empty bottle on the side of the path.");
                        await fantasyrpg.ƒS.Text.print("Do you want to pick it up?");
                        let thirdDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let thirdDialogueElement = await fantasyrpg.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                        switch (thirdDialogueElement) {
                            case thirdDialogueElementAnswers.sayYes:
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                                fantasyrpg.ƒS.update(1);
                                //ƒS.Inventory.add(items.EmptyBottle);
                                await fantasyrpg.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await fantasyrpg.ƒS.Text.print("They are really happy that you came to look after them");
                                await fantasyrpg.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                fantasyrpg.scenecount = "scene3";
                                return fantasyrpg.scenecount;
                            case thirdDialogueElementAnswers.sayNo:
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                                fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You arrive just as your frinds are starting the Fire");
                                await fantasyrpg.ƒS.Text.print("They are really happy that you came to look after them");
                                await fantasyrpg.ƒS.Text.print("You decide to stay with them since you`re already there now.");
                                fantasyrpg.scenecount = "scene3";
                                await fantasyrpg.ƒS.update();
                                return fantasyrpg.scenecount;
                        }
                        fantasyrpg.scenecount = "scene3";
                        await fantasyrpg.ƒS.update();
                        return fantasyrpg.scenecount;
                }
        }
    }
    fantasyrpg.option4 = option4;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function returnscene() {
        fantasyrpg.scenecount2 = fantasyrpg.scenecount;
        fantasyrpg.scenecount = "getinput";
        return fantasyrpg.scenecount;
    }
    fantasyrpg.returnscene = returnscene;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene2() {
        console.log("scene2");
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0.3, true);
        fantasyrpg.stats.char1.points += 5;
        console.log(fantasyrpg.stats.char1.points);
        await fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        fantasyrpg.ƒS.update(0);
        await fantasyrpg.ƒS.Text.print("A few Hours later...");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.camp);
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Hey are you ready to go?");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yes let`s go");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Let`s get the others");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("You and " + fantasyrpg.stats.Side3.name + " went to " + fantasyrpg.stats.Side1.name + " and " + fantasyrpg.stats.Side2.name + " to meet up.");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("After you arrive at the shore you realise the weather is getting worse.");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
        fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Guys should we go back? It seems the weather is getting really bad...");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "No we will be fine lets just make a fire");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea I`ll go get firewood do you want to help me " + fantasyrpg.stats.Main.name + "?");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update(1);
        let firstDialogueElementAnswers = {
            sayYes: "Yes",
            sayNo: "No you got this",
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog1");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                await fantasyrpg.ƒS.Character.hideAll();
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Text.print("You and " + fantasyrpg.stats.Side3.name + " decide to go together to get the wood");
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.woods);
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Text.print("As you are further away from the others " + fantasyrpg.stats.Side3.name + " decides to start a conversation with you");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I am happy you decided to come");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I wanted to talk to you about something");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "What is bothering you you know you can always talk to me about everything");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I just wanted to thank you for helping me with my training");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I had my training battle with guy from another village 2 days ago");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I couldn`t quite beat him but I felt a lot more confident and strong since you help me");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Those are good news I am happy for you");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Also I like those training sessions sonce I improve by them a lot to");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Also I think if we keep the training up we can make a really great team");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea definately");
                let secondDialogueElementAnswers = {
                    sayYes: "Lets go back I think we have enough wood",
                    sayNo: "I also wanted to tell you something",
                };
                let secondDialogueElement = await fantasyrpg.ƒS.Menu.getInput(secondDialogueElementAnswers, "dialog1");
                switch (secondDialogueElement) {
                    case secondDialogueElementAnswers.sayYes:
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Lets go back I think we have enough wood");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yes I think so too");
                        fantasyrpg.stats.relside3 += 5;
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        fantasyrpg.scenecount = "scene3";
                        await fantasyrpg.ƒS.update();
                        return fantasyrpg.scenecount;
                    case secondDialogueElementAnswers.sayNo:
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "So can I ask you something too?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Sure go for it");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "So you know my parent died when I was young right?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I never really talked with anybody about it. So I felt like I can talk woth you about it");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea");
                        await fantasyrpg.ƒS.Text.print("You and " + fantasyrpg.stats.Side3.name + " had a long conversation about your parents and their accident");
                        fantasyrpg.stats.relside3 += 10;
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                        await fantasyrpg.ƒS.Character.hideAll();
                        fantasyrpg.ƒS.update(1);
                        await fantasyrpg.ƒS.Text.print("The conversation with " + fantasyrpg.stats.Side3.name + " really help you.");
                        await fantasyrpg.ƒS.Text.print("After the conversation you and " + fantasyrpg.stats.Side3.name + " went back to the camp");
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
                        fantasyrpg.ƒS.update(1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        fantasyrpg.ƒS.update();
                        fantasyrpg.scenecount = "scene3";
                        await fantasyrpg.ƒS.update();
                        return fantasyrpg.scenecount;
                }
            case firstDialogueElementAnswers.sayNo:
                await fantasyrpg.ƒS.Text.print("You decided to stay and let " + fantasyrpg.stats.Side3.name + "get the wood");
                await fantasyrpg.ƒS.Text.print("You walk up to " + fantasyrpg.stats.Side1.name + " and " + fantasyrpg.stats.Side2.name + " and decide to start a conversation");
                await fantasyrpg.ƒS.Text.print("You who do you want to start a conversation with?");
                let thirdDialogueElementAnswers = {
                    sayYes: "1. " + fantasyrpg.stats.Side1.name,
                    sayNo: "2. " + fantasyrpg.stats.Side2.name,
                };
                let thirdDialogueElement = await fantasyrpg.ƒS.Menu.getInput(thirdDialogueElementAnswers, "dialog1");
                switch (thirdDialogueElement) {
                    case thirdDialogueElementAnswers.sayYes:
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Text.print("As you are sitting next to the fireplace you start a conversation with " + fantasyrpg.stats.Side1.name);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "So what do you think how long will " + fantasyrpg.stats.Side3.name + " need to get the firewood?");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Probably not as long if you helped");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Ahh just kidding I don`t think that long");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Afterall I am cold too");
                        await fantasyrpg.ƒS.Text.print("As you are talking to " + fantasyrpg.stats.Side1.name + fantasyrpg.stats.Side2.name + " walks to the shore");
                        await fantasyrpg.ƒS.Text.print("Do you want to stop the conversation and go after " + fantasyrpg.stats.Side2.name + "?");
                        let fourthDialogueElementAnswers = {
                            sayYes: "Yes",
                            sayNo: "No",
                        };
                        let fourthDialogueElement = await fantasyrpg.ƒS.Menu.getInput(fourthDialogueElementAnswers, "dialog1");
                        switch (fourthDialogueElement) {
                            case fourthDialogueElementAnswers.sayYes:
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sorry give me a second");
                                await fantasyrpg.ƒS.Text.print("You stand up and go after " + fantasyrpg.stats.Side2.name);
                                await fantasyrpg.ƒS.Text.print("You arrive at the shore and decide to sit next to " + fantasyrpg.stats.Side2.name);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
                                fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hey is everything allrigth?");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.unhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                                fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yes I just wanted some time alone");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "So you want me to go?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "No No I wanted to tell you something anyways.");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I saw you practice with " + fantasyrpg.stats.Side3.name + "a lot lately");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Why is that?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Oh that ");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "its nothing " + fantasyrpg.stats.Side3.name + " just asked me if I could help out");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "So if I asked you to help me out with something you would help me too?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sure what do you want help with?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Well it`s a bit complicated I´ll tell you later...");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "It is just good to know that you would");
                                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Anything. Just ask at any time");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Thanks. Lets head back to the fireplace I think they are about to light it");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sure");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Text.print("you and " + fantasyrpg.stats.Side2.name + " went back to the fireplace");
                                fantasyrpg.stats.relside1 -= 5;
                                fantasyrpg.stats.relside2 += 15;
                                fantasyrpg.scenecount = "scene3";
                                return fantasyrpg.scenecount;
                            case fourthDialogueElementAnswers.sayNo:
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I hope");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "But mybe you`re right and I should have helped");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "No it`s fine");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Afterall now we have time to talk about something ");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "True do you have something on your mind you want to talk about?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yes, yesterday I found a small flower it must be one of the last they are really rare these days");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Since they were harvested so much to do potions");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "But I lost it somehow");
                                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.unhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                                fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mhh that`s sad what kind of flower was it?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "It was a red one you know I am not as good with names");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I am sure you will find another one");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yea I hope so");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I`ll tell you something if I find one I`ll give it to you");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "That would be so nice of you");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Oh look " + fantasyrpg.stats.Side2.name + " and " + fantasyrpg.stats.Side3.name + " are coming back");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update();
                                fantasyrpg.stats.relside2 -= 5;
                                fantasyrpg.stats.relside1 += 10;
                                fantasyrpg.scenecount = "scene3";
                                return fantasyrpg.scenecount;
                        }
                    case thirdDialogueElementAnswers.sayNo:
                        await fantasyrpg.ƒS.Text.print("As you are sitting next to the fireplace you start a conversation with " + fantasyrpg.stats.Side2.name);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Are we just relaxing today or do you guys have more plans for tonight?");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "No today we just planned to relax");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Oh and how did you do on your hunting trip did you catch something?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Great I cought a Dragon but one of the smaller once");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Wow thats great maybe we can go on a trip together?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I wonder what we could find further out there");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Thats a great Idea I`ll take you on that offer some day");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey look " + fantasyrpg.stats.Side3.name + " is voming back with the fire wood");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Finally");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        fantasyrpg.stats.relside2 += 10;
                        fantasyrpg.scenecount = "scene3";
                        return fantasyrpg.scenecount;
                }
                fantasyrpg.scenecount = "scene3";
                await fantasyrpg.ƒS.update();
                return fantasyrpg.scenecount;
        }
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
        await fantasyrpg.ƒS.update(1);
        fantasyrpg.scenecount = "scene3";
        return fantasyrpg.scenecount;
    }
    fantasyrpg.scene2 = scene2;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene2b() {
        console.log("scene2b");
        await fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.camp);
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "scene 2");
        fantasyrpg.scenecount = "scene3";
        return fantasyrpg.scenecount;
    }
    fantasyrpg.scene2b = scene2b;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene3() {
        console.log("scene3");
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        //console.log(await ƒS.Inventory.open())
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("As everyone was back at the fire you wanted to get the Fire Going");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Lets go guys lets get the Fire going");
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yea its getting a bit cold now");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Text.print("You took out your firestone and started the fire when " + fantasyrpg.stats.Side3.name + " started to talk");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "So Guys since we have time the next few weeks I wanted to do something");
        await fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "What do you want to do?");
        await fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Well I was thinking about something bigger maybe do a Training Camp or something");
        await fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "What about an Adventure?");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "We never went on an real Adventure together did we?");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "And this way we would be training together and its more fun than a Training Camp in my Opinion");
        await fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
        fantasyrpg.ƒS.update(1);
        let firstDialogueElementAnswers = {
            sayYes: "A Great Adventure with my Friends I am in",
            sayNo: "Oh yea that will be great training"
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        //stats.char1.points = stats.char1.points + 5;
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.sayYes:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(85, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(80, 90));
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea lets to that");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "That sounds like fun");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Since we are already here lets just go tomorrow");
                fantasyrpg.stats.relside1 += 5;
                fantasyrpg.stats.relside2 += 5;
                fantasyrpg.stats.relside2 += 5;
                fantasyrpg.scenecount = "scene5";
                return fantasyrpg.scenecount;
                break;
            case firstDialogueElementAnswers.sayNo:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(75, 90));
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(60, 90));
                fantasyrpg.ƒS.update(1);
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea lets to that");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "That sounds like fun");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Since we are already here lets just go tomorrow");
                fantasyrpg.stats.Main.Strength += 5;
                fantasyrpg.scenecount = "scene5";
                return fantasyrpg.scenecount;
                //stats.char1.points = stats.char1.points + 1;
                break;
        }
    }
    fantasyrpg.scene3 = scene3;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene4() {
        console.log("scene4");
        await fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
        await fantasyrpg.ƒS.Text.print("You Agreed to go on an Adventure with your friends");
        await fantasyrpg.ƒS.Text.print("This is the End of this Preview");
        await fantasyrpg.ƒS.Text.print("Feel free to play again since every choice leads to a different experience");
        await fantasyrpg.ƒS.Text.print("In this rund you achived the following things");
        await fantasyrpg.ƒS.Text.print("Strength: " + fantasyrpg.stats.Main.Strength);
        await fantasyrpg.ƒS.Text.print("Affection to " + fantasyrpg.stats.Side1.name + ": " + fantasyrpg.stats.relside1);
        await fantasyrpg.ƒS.Text.print("Affection to " + fantasyrpg.stats.Side2.name + ": " + fantasyrpg.stats.relside2);
        await fantasyrpg.ƒS.Text.print("Affection to " + fantasyrpg.stats.Side3.name + ": " + fantasyrpg.stats.relside3);
        await fantasyrpg.ƒS.Text.print("Also you collected those items");
        fantasyrpg.ƒS.Inventory.open();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        fantasyrpg.ƒS.update(3);
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
        fantasyrpg.ƒS.Inventory.close();
        await fantasyrpg.ƒS.Text.print("And if you wonder what will await you in the full version of this Novel");
        await fantasyrpg.ƒS.Text.print("Expect some Action");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
        fantasyrpg.skill1funktion();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
        fantasyrpg.skill2funktion();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
        fantasyrpg.skill3funktion();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
        await fantasyrpg.ƒS.Text.print("As well As some charakter development");
    }
    fantasyrpg.scene4 = scene4;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene5() {
        console.log("scene5");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        await fantasyrpg.ƒS.update(1);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.seafire);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        await fantasyrpg.ƒS.Character.hideAll();
        fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("On the next day you see your friends already packing their stuff");
        await fantasyrpg.ƒS.Text.print("As you already packed all your stuff in the evening you have time to talk to one of them");
        await fantasyrpg.ƒS.Text.print("Who do you want to talk to?");
        let firstDialogueElementAnswers = {
            side1: fantasyrpg.stats.Side1.name,
            side2: fantasyrpg.stats.Side2.name,
            side3: fantasyrpg.stats.Side3.name,
        };
        let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
        switch (firstDialogueElement) {
            case firstDialogueElementAnswers.side1:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(5, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hey " + fantasyrpg.stats.Side1.name + " what is taking you so long??");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.angry, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Stop pushing me and pack your own stuff");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.veryhappy, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I packed my stuff already unlike you I am not a Princess and pack like all I have");
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Fuck you dude I am almost done");
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Text.print("After everyone was done Packing their stuff you and your friends started to walk");
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trail);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.speed.duration, fantasyrpg.transition.speed.alpha, fantasyrpg.transition.speed.edge);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Hey by the way did you knwow´that there is a new Tavern");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I drank a Met there lately and it was really good");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yea they have Beeryjuice that is really great");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "WTF is wrong with you did missy also eat salat there?");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Well I bet I will outlast you all!");
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hahaha");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Haha Yea you might be right with that");
                fantasyrpg.stats.relside1 += 10;
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
                fantasyrpg.scenecount = "scene6";
                return fantasyrpg.scenecount;
            case firstDialogueElementAnswers.side2:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hey " + fantasyrpg.stats.Side2.name + " what is taking you so long??");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.angry, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Stop pushing me and pack your own stuff");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.veryhappy, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I packed my stuff already unlike you I am not a Princess and pack like all I have");
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Fuck you dude I am almost done");
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Text.print("After everyone was done Packing their stuff you and your friends started to walk");
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trail);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.speed.duration, fantasyrpg.transition.speed.alpha, fantasyrpg.transition.speed.edge);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Hey by the way did you knwow´that there is a new Tavern");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I drank a Met there lately and it was really good");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yea they have Beeryjuice that is really great");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "WTF is wrong with you did missy also eat salat there?");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Well I bet I will outlast you all!");
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hahaha");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Haha Yea you might be right with that");
                await fantasyrpg.ƒS.Character.hideAll();
                fantasyrpg.stats.relside2 += 10;
                await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
                fantasyrpg.scenecount = "scene6";
                return fantasyrpg.scenecount;
            case firstDialogueElementAnswers.side3:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hey " + fantasyrpg.stats.Side3.name + " what is taking you so long??");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.angry, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Stop pushing me and pack your own stuff");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.veryhappy, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I packed my stuff already unlike you I am not a Princess and pack like all I have");
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Fuck you dude I am almost done");
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Text.print("After everyone was done Packing their stuff you and your friends started to walk");
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trail);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.speed.duration, fantasyrpg.transition.speed.alpha, fantasyrpg.transition.speed.edge);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Hey by the way did you knwow´that there is a new Tavern");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I drank a Met there lately and it was really good");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yea they have Beeryjuice that is really great");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "WTF is wrong with you did missy also eat salat there?");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Well I bet I will outlast you all!");
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hahaha");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Haha Yea you might be right with that");
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
                fantasyrpg.stats.relside3 += 10;
                fantasyrpg.scenecount = "scene6";
                return fantasyrpg.scenecount;
        }
        fantasyrpg.scenecount = "scene6";
        await fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
        return fantasyrpg.scenecount;
    }
    fantasyrpg.scene5 = scene5;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene6() {
        console.log("Scene 6 Patheway");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update();
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.zweigung);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        await fantasyrpg.ƒS.Text.print("As you keep walking you notice your path is splitting in 2 paths");
        await fantasyrpg.ƒS.Text.print("You need to choose if you want to go left or take the right path");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "What do you guys think should we go right or left");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I heard if you go right here there are a lot of monsters");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "But I was never here soo...");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "The left path looks like it is going to lead to a lake");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "What do you think " + fantasyrpg.stats.Main.name + " where should we go?");
        await fantasyrpg.ƒS.Text.print("Your friends left the decision where to go to you");
        let firstDecisionElementAnswers = {
            left: "Go Left",
            right: "Go Right",
        };
        let firstDecisionElement = await fantasyrpg.ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog");
        switch (firstDecisionElement) {
            case firstDecisionElementAnswers.left:
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailtomountain);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.speed.duration, fantasyrpg.transition.speed.alpha, fantasyrpg.transition.speed.edge);
                await fantasyrpg.ƒS.Text.print("You and your friend took the left path");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey " + fantasyrpg.stats.Side3.name + " aren`t you interessted in Alchemie and know a lot about it?");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea I do");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Why do you ask?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "That flower over there I have never seen it before");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Mhh let me look in my Alchemie book");
                await fantasyrpg.ƒS.Text.print(fantasyrpg.stats.Side3.name + " took out the Alchemie book and searched something");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I can`t find it in this book so its eigther rare or it's of no use for potions");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Mhh maybe we shoud take it with us what do you think " + fantasyrpg.stats.Main.name);
                let secondDecisionElementAnswers = {
                    pick: "Pick up Flower",
                    nopick: "Leave it be",
                };
                let secondDecisionElement = await fantasyrpg.ƒS.Menu.getInput(secondDecisionElementAnswers, "dialog");
                switch (secondDecisionElement) {
                    case secondDecisionElementAnswers.pick:
                        fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Flower);
                    case secondDecisionElementAnswers.nopick:
                }
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Text.print("They hole time you are wondering why " + fantasyrpg.stats.Side3.name + " has a shiner so you decide to ask");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hey " + fantasyrpg.stats.Side3.name + " what happened to your eye why do you have a shiner?");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Well I told you about the new Tavern right?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I was play Cards with some random people");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I won so much money that day");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "and one of the guys got really angry and accused me of cheating");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "And you did not cheat right?");
                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side3);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "what do you think of me of couse I did not cheat");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "anyways he did not belive me and wanted his money back");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "but I did not give it back so we had a little dispute");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Ahh a \"little\" dispute");
                fantasyrpg.stats.relside1 += 5;
                fantasyrpg.stats.relside2 += 5;
                fantasyrpg.stats.relside3 += 5;
                fantasyrpg.scenecount = "scene7";
                return fantasyrpg.scenecount;
            case firstDecisionElementAnswers.right:
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Text.print("After walking for a bit on the rigth path");
                await fantasyrpg.ƒS.Text.print("A monster jumps in your way");
                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.steps, 0.3, false);
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.fight);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.fight.duration, fantasyrpg.transition.fight.alpha, fantasyrpg.transition.fight.edge);
                fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.normal, 0, 1);
                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0.3, true);
                await fantasyrpg.ƒS.Text.print("You and your friends jump back");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "What what is that I have never seen that kind of monster before..");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "What should we do " + fantasyrpg.stats.Main.name + "?");
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update();
                let thirdDecisionElementAnswers = {
                    alone: "Take on the monster by yourselfe",
                    together: "Ask your friends to help you",
                };
                let thirdDecisionElement = await fantasyrpg.ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog");
                switch (thirdDecisionElement) {
                    case thirdDecisionElementAnswers.alone:
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Don't worry I will defeat it");
                        fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
                        let skillselectionAnswer = {
                            skill1: fantasyrpg.stats.Main.Skill1,
                            skill2: fantasyrpg.stats.Main.Skill2,
                            skill3: fantasyrpg.stats.Main.Skill3,
                        };
                        let skillselection = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer, "dialog");
                        switch (skillselection) {
                            case skillselectionAnswer.skill1:
                                fantasyrpg.skill1funktion();
                            case skillselectionAnswer.skill2:
                                if (fantasyrpg.stats.skillused == false) {
                                    fantasyrpg.skill2funktion();
                                }
                            case skillselectionAnswer.skill3:
                                if (fantasyrpg.stats.skillused == false) {
                                    fantasyrpg.skill3funktion();
                                }
                                fantasyrpg.stats.skillused = false;
                        }
                        fantasyrpg.throwdice();
                        if (fantasyrpg.stats.random >= 4) {
                            fantasyrpg.ƒS.Character.hideAll();
                            console.log("won fight alone");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Wow that was cool.");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I did not know that you are so strong " + fantasyrpg.stats.Main.name);
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.arrogant, fantasyrpg.ƒS.positionPercent(10, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Ah that was nothing");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "For you I would do anything");
                            fantasyrpg.stats.Main.Strength += 10;
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                            fantasyrpg.scenecount = "scene7";
                            return fantasyrpg.scenecount;
                        }
                        else {
                            fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Text.print("Seems like your to weak to fight the Monster alone");
                            if (fantasyrpg.stats.Main.namechar == "Samara") {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Adira, "Oh no he is going to die");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Adira, "I need to help him");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.2);
                            }
                            else {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Samara, "Oh no he is going to die");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Samara, "I need to help him");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball8, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball9, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.2);
                            }
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Thank you for helping me I would not have made it without you");
                            fantasyrpg.stats.relside2 += 5;
                            fantasyrpg.stats.Main.Strength += 5;
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                            fantasyrpg.scenecount = "scene7";
                            return fantasyrpg.scenecount;
                        }
                        fantasyrpg.scenecount = "scene7";
                        return fantasyrpg.scenecount;
                    case thirdDecisionElementAnswers.together:
                        console.log("Fight it together");
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.fight);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.fight.duration, fantasyrpg.transition.fight.alpha, fantasyrpg.transition.fight.edge);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Comon guys together we can defeat the monster");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "yea lets go");
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                        await fantasyrpg.ƒS.update();
                        let skillselectionAnswer1 = {
                            skill1: fantasyrpg.stats.Main.Skill1,
                            skill2: fantasyrpg.stats.Main.Skill2,
                            skill3: fantasyrpg.stats.Main.Skill3,
                        };
                        let skillselection1 = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer1, "dialog");
                        switch (skillselection1) {
                            case skillselectionAnswer1.skill1:
                                fantasyrpg.skill1funktion();
                            case skillselectionAnswer1.skill2:
                                if (fantasyrpg.stats.skillused == false) {
                                    fantasyrpg.skill2funktion();
                                }
                            case skillselectionAnswer1.skill3:
                                if (fantasyrpg.stats.skillused == false) {
                                    fantasyrpg.skill3funktion();
                                }
                                fantasyrpg.stats.skillused = false;
                        }
                        if (fantasyrpg.stats.Main.namechar == "Samara") {
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike1, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike2, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike3, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike4, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike5, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike6, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike7, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update(0.2);
                        }
                        else {
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball1, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball2, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball3, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball4, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball5, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball6, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball7, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball8, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball9, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update(0.2);
                        }
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea we did it we defeated the Monster");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I knew together we could do it");
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                        fantasyrpg.scenecount = "scene7";
                        return fantasyrpg.scenecount;
                }
        }
    }
    fantasyrpg.scene6 = scene6;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene7() {
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailtomountain);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        console.log("scene7");
        await fantasyrpg.ƒS.Text.print("After defeating the Monster you kept walking");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Are you guys okay or did anyone get hurt?");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "No  we are all fine but I think we all need a small break now");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea a break would be great");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        await fantasyrpg.ƒS.Text.print("You decided to make a short break");
        await fantasyrpg.ƒS.Text.print("After your break you started walking again");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailtomountain);
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Text.print("Suddenly you see a town in the distance");
        await fantasyrpg.ƒS.Text.print("Do you want to go to the town or continue on your path into the mountains?");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Our supplies are getting low should we go to the town there?");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "But the Mountains are so close don`t you think we should go there?");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "There will be another town behinde the mountains where we can restock");
        let firstDecisionElementAnswers = {
            city: "Go to the town",
            mountain: "Go to the Mountains",
        };
        let firstDecisionElement = await fantasyrpg.ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog");
        switch (firstDecisionElement) {
            case firstDecisionElementAnswers.city:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Let's be save and go to the city now you never know how far away the next town will be");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yea that sounds like a good idea");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Let's go");
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.villagecenter);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0.3, true);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update();
                if (fantasyrpg.stats.relside1 >= 50 || fantasyrpg.stats.relside2 >= 50 || fantasyrpg.stats.relside3 >= 50) {
                    await fantasyrpg.ƒS.Text.print("Do you want to build a relationship with one of your friends?");
                    let secondDecisionElementAnswers = {
                        yes: "Yes",
                        no: "No",
                    };
                    let secondDecisionElement = await fantasyrpg.ƒS.Menu.getInput(secondDecisionElementAnswers, "dialog");
                    switch (secondDecisionElement) {
                        case secondDecisionElementAnswers.yes:
                            await fantasyrpg.ƒS.Text.print("Who are you thinking of?");
                            let control = false;
                            while (control == false) {
                                let firstDialogueElementAnswers = {
                                    side1: fantasyrpg.stats.Side1.name,
                                    side2: fantasyrpg.stats.Side2.name,
                                    side3: fantasyrpg.stats.Side3.name,
                                };
                                let firstDialogueElement = await fantasyrpg.ƒS.Menu.getInput(firstDialogueElementAnswers, "dialog");
                                switch (firstDialogueElement) {
                                    case firstDialogueElementAnswers.side1:
                                        if (fantasyrpg.stats.relside1 >= 50) {
                                            control = true;
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Hey look" + fantasyrpg.stats.Main.name + " do you see that hotspring over there?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea why?");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Lets go there together");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "I think the other 2 will manage to get supplies by them selfes");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I think so to");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hey " + fantasyrpg.stats.Side2.name + " and " + fantasyrpg.stats.Side3.name + " can you guys get the supplies?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Sure what are you two going to do?");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "We'll just search for the Alchemist");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Sounds good");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.hotspring);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Text.print("You and " + fantasyrpg.stats.Side1.name + " went to the hotspring while the others went to the tavern");
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Text.print("After your visit at the hotspring you linked back up qith your friends");
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.villagecenter);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "And did you two found the Alchemist?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "No unfortunatly not I think the town has no Alchemist");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Aww that's ok we got the supplies so we are ready to continue our adventure");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Great lets stay the night since it is getting dark already");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Sounds like a plan");
                                            fantasyrpg.stats.chosenrel = fantasyrpg.stats.Side1.name;
                                            fantasyrpg.stats.relside1 += 20;
                                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                            fantasyrpg.scenecount = "scene8";
                                            return fantasyrpg.scenecount;
                                        }
                                        else {
                                            await fantasyrpg.ƒS.Text.print("You did not make the right choices to start a relationship with " + fantasyrpg.stats.Side1.name);
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.alchemist);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Look there is the Tavern");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea finally we get something good to eat");
                                            await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Fooood!!!");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                                            await fantasyrpg.ƒS.Text.print("At the Table " + fantasyrpg.stats.Side2.name + " throws you an Apple");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.arrogant, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Here I got you something");
                                            fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Apple);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Oh thanks");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just so you get big and strong");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "What is that supposed to mean?");
                                            await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just messing with you");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just accept my gift");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sometimes it is hard to see your irony");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Lets go to sleep guys");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "So we are fit tomorrow");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                            await fantasyrpg.ƒS.update(1);
                                            await fantasyrpg.ƒS.Text.print("You went into your room to sleep");
                                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                            fantasyrpg.scenecount = "scene8";
                                            return fantasyrpg.scenecount;
                                        }
                                    case firstDialogueElementAnswers.side2:
                                        if (fantasyrpg.stats.relside2 >= 50) {
                                            control = true;
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey look" + fantasyrpg.stats.Main.name + " do you see that hotspring over there?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea why?");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Lets go there together");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I think the other 2 will manage to get supplies by them selfes");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I think so to");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hey " + fantasyrpg.stats.Side1.name + " and " + fantasyrpg.stats.Side3 + " can you guys get the supplies?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Sure what are you two going to do?");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "We'll just search for the Alchemist");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Sounds good");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.hotspring);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Text.print("You and " + fantasyrpg.stats.Side2.name + " went to the hotspring while the others went to the tavern");
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Text.print("After your visit at the hotspring you linked back up qith your friends");
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.villagecenter);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "And did you two found the Alchemist?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "No unfortunatly not I think the town has no Alchemist");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Aww that's ok we got the supplies so we are ready to continue our adventure");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Great lets stay the night since it is getting dark already");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Sounds like a plan");
                                            fantasyrpg.stats.chosenrel = fantasyrpg.stats.Side2.name;
                                            fantasyrpg.stats.relside2 += 20;
                                            fantasyrpg.scenecount = "scene8";
                                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                            return fantasyrpg.scenecount;
                                        }
                                        else {
                                            await fantasyrpg.ƒS.Text.print("You did not make the right choices to start a relationship with " + fantasyrpg.stats.Side2.name);
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.alchemist);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Look there is the Tavern");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea finally we get something good to eat");
                                            await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Fooood!!!");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                                            await fantasyrpg.ƒS.Text.print("At the Table " + fantasyrpg.stats.Side2.name + " throws you an Apple");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.arrogant, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Here I got you something");
                                            fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Apple);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Oh thanks");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just so you get big and strong");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "What is that supposed to mean?");
                                            await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just messing with you");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just accept my gift");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sometimes it is hard to see your irony");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Lets go to sleep guys");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "So we are fit tomorrow");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                            await fantasyrpg.ƒS.update(1);
                                            await fantasyrpg.ƒS.Text.print("You went into your room to sleep");
                                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                            fantasyrpg.scenecount = "scene8";
                                            return fantasyrpg.scenecount;
                                        }
                                    case firstDialogueElementAnswers.side3:
                                        if (fantasyrpg.stats.relside3 >= 50) {
                                            control = true;
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Hey look" + fantasyrpg.stats.Main.name + " do you see that hotspring over there?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea why?");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Lets go there together");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I think the other 2 will manage to get supplies by them selfes");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I think so to");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hey " + fantasyrpg.stats.Side2.name + " and " + fantasyrpg.stats.Side3 + " can you guys get the supplies?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Sure what are you two going to do?");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "We'll just search for the Alchemist");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Sounds good");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.hotspring);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Text.print("You and " + fantasyrpg.stats.Side3.name + " went to the hotspring while the others went to the tavern");
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Text.print("After your visit at the hotspring you linked back up qith your friends");
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.villagecenter);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "And did you two found the Alchemist?");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "No unfortunatly not I think the town has no Alchemist");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Aww that's ok we got the supplies so we are ready to continue our adventure");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Great lets stay the night since it is getting dark already");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Sounds like a plan");
                                            fantasyrpg.stats.chosenrel = fantasyrpg.stats.Side3.name;
                                            fantasyrpg.stats.relside3 += 20;
                                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                            fantasyrpg.scenecount = "scene8";
                                            return fantasyrpg.scenecount;
                                        }
                                        else {
                                            await fantasyrpg.ƒS.Text.print("You did not make the right choices to start a relationship with " + fantasyrpg.stats.Side3.name);
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.alchemist);
                                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Look there is the Tavern");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea finally we get something good to eat");
                                            await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Fooood!!!");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                                            await fantasyrpg.ƒS.Text.print("At the Table " + fantasyrpg.stats.Side2.name + " throws you an Apple");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.arrogant, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Here I got you something");
                                            fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Apple);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Oh thanks");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just so you get big and strong");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "What is that supposed to mean?");
                                            await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just messing with you");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just accept my gift");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sometimes it is hard to see your irony");
                                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Lets go to sleep guys");
                                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "So we are fit tomorrow");
                                            await fantasyrpg.ƒS.Character.hideAll();
                                            await fantasyrpg.ƒS.update();
                                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                            await fantasyrpg.ƒS.update(1);
                                            await fantasyrpg.ƒS.Text.print("You went into your room to sleep");
                                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                            fantasyrpg.scenecount = "scene8";
                                            return fantasyrpg.scenecount;
                                        }
                                }
                            }
                        case secondDecisionElementAnswers.no:
                            await fantasyrpg.ƒS.Text.print("You and your friends decided to search for a tavern to get some food");
                            await fantasyrpg.ƒS.Text.print("But are you able to finde it?");
                            fantasyrpg.stats.number = (fantasyrpg.stats.relside1 + fantasyrpg.stats.relside2 + fantasyrpg.stats.relside3) / 10;
                            let Throwdice = {
                                Throwdice: "Can you finde the Tavern?",
                            };
                            let Dicethrow = await fantasyrpg.ƒS.Menu.getInput(Throwdice, "dialog");
                            switch (Dicethrow) {
                                case Throwdice.Throwdice:
                                    fantasyrpg.throwdice();
                            }
                            if (fantasyrpg.stats.random >= 8) {
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.alchemist);
                                await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Look there is the Tavern");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea finally we get something good to eat");
                                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Fooood!!!");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                                await fantasyrpg.ƒS.Text.print("At the Table " + fantasyrpg.stats.Side2.name + " throws you an Apple");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.arrogant, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Here I got you something");
                                fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Apple);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Oh thanks");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just so you get big and strong");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "What is that supposed to mean?");
                                await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just messing with you");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just accept my gift");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sometimes it is hard to see your irony");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Lets go to sleep guys");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "So we are fit tomorrow");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                await fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You went into your room to sleep");
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                fantasyrpg.scenecount = "scene8";
                                return fantasyrpg.scenecount;
                            }
                            else {
                                await fantasyrpg.ƒS.Text.print("You could not finde the Tavern");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Guys I don`t think we will find the Tavern");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Let's just make camp outside the town and go to the next city tomorrow");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "We still have enough supplies to get to the next town I think");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(10, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I think you're right");
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                await fantasyrpg.ƒS.update(1);
                                await fantasyrpg.ƒS.Text.print("You and your firends went just outside of the city");
                                await fantasyrpg.ƒS.Text.print("You decided to play cards");
                                await fantasyrpg.ƒS.Text.print("After having a great time playing cards with your firends you went to sleep");
                                fantasyrpg.stats.relside1 += 5;
                                fantasyrpg.stats.relside2 += 5;
                                fantasyrpg.stats.relside3 += 5;
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update();
                                fantasyrpg.scenecount = "scene8";
                                return fantasyrpg.scenecount;
                            }
                    }
                }
                else {
                    await fantasyrpg.ƒS.Text.print("You and your friends decided to search for a tavern to get some food");
                    await fantasyrpg.ƒS.Text.print("But are you able to finde it?");
                    fantasyrpg.stats.number = (fantasyrpg.stats.relside1 + fantasyrpg.stats.relside2 + fantasyrpg.stats.relside3) / 10;
                    let Throwdice = {
                        Throwdice: "Feel Lucky?",
                    };
                    let Dicethrow = await fantasyrpg.ƒS.Menu.getInput(Throwdice, "dialog");
                    switch (Dicethrow) {
                        case Throwdice.Throwdice:
                            fantasyrpg.throwdice();
                    }
                    if (fantasyrpg.stats.random >= 8) {
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.alchemist);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Look there is the Tavern");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea finally we get something good to eat");
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side1);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Fooood!!!");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Text.print("You and your friends went into the Tavern to eat somehing and restock your supplies");
                        await fantasyrpg.ƒS.Text.print("At the Table " + fantasyrpg.stats.Side2.name + " throws you an Apple");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.arrogant, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Here I got you something");
                        fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Apple);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Oh thanks");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just so you get big and strong");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "What is that supposed to mean?");
                        await fantasyrpg.ƒS.Character.hide(fantasyrpg.stats.Side2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just messing with you");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Just accept my gift");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sometimes it is hard to see your irony");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(70, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Lets go to sleep guys");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "So we are fit tomorrow");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                        await fantasyrpg.ƒS.update(1);
                        await fantasyrpg.ƒS.Text.print("You went into your room to sleep");
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        fantasyrpg.scenecount = "scene8";
                        return fantasyrpg.scenecount;
                    }
                    else {
                        await fantasyrpg.ƒS.Text.print("You could not finde the Tavern");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.happy, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Guys I don`t think we will find the Tavern");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Let's just make camp outside the town and go to the next city tomorrow");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "We still have enough supplies to get to the next town I think");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.happy, fantasyrpg.ƒS.positionPercent(10, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I think you're right");
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                        await fantasyrpg.ƒS.update(1);
                        await fantasyrpg.ƒS.Text.print("You and your firends went just outside of the city");
                        await fantasyrpg.ƒS.Text.print("You decided to play cards");
                        await fantasyrpg.ƒS.Text.print("After having a great time playing cards with your firends you went to sleep");
                        fantasyrpg.stats.relside1 += 5;
                        fantasyrpg.stats.relside2 += 5;
                        fantasyrpg.stats.relside3 += 5;
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        fantasyrpg.scenecount = "scene8";
                        return fantasyrpg.scenecount;
                    }
                }
            case firstDecisionElementAnswers.mountain:
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailtomountain);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey " + fantasyrpg.stats.Main.name + " what do you think will be up the mountains");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "maybe we finde a cool ruine or something");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mhh no I don`t think we will find anything special");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "But maybe there is something cool behind the mountains");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Maybe");
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.clock.duration, fantasyrpg.transition.clock.alpha, fantasyrpg.transition.pixel.edge);
                await fantasyrpg.ƒS.Text.print("After waling for a while you see something in the distance");
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailblocked);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                await fantasyrpg.ƒS.Text.print("Seems like some rocks block your way");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Oh no what are we going to do now?");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "I don't want to go all the way back to go around it");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Maybe we can climb over it");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "No I don`t think so the stones have no grip at all");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Maybe we can push them away");
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update();
                let check = false;
                while (check == false) {
                    let thirdDecisionElementAnswers = {
                        friends: "Push them away with your friends",
                        around: "Go around",
                        alone: "Try push them alone"
                    };
                    let thirdDecisionElement = await fantasyrpg.ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog");
                    switch (true && thirdDecisionElement) {
                        case thirdDecisionElementAnswers.friends:
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Lets try to push them away together");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I think we are strong enough for that");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "If you think so lets do it");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Text.print("You and your friends went up to the stones and pushed them away");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Let's go we did it");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "The way around would have been so long");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea I am glad we managed to push them away");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailtomountain);
                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                            await fantasyrpg.ƒS.Text.print("After successfully pushing away the rocks you keept waling through the mountains");
                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                            await fantasyrpg.ƒS.Text.print("when it got darker and darker you decided to make camp and continue tomorrow");
                            check = true;
                            fantasyrpg.stats.relside1 += 5;
                            fantasyrpg.stats.relside2 += 5;
                            fantasyrpg.stats.relside3 += 5;
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
                            fantasyrpg.scenecount = "scene8";
                            return fantasyrpg.scenecount;
                        case thirdDecisionElementAnswers.around:
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Lets go around I think I saw a small path over there which goes up the mountains");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Really??");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I'd rather go back to the town then");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Ah common it will just cost us like 5 min to go around it");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Ok fine");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailwithlake);
                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                            //stats.number = ƒS.Inventory.getAmount(items.Flower)
                            if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.EmptyBottle) >= 1 && fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Flower) >= 1) {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Guys do you see that lake there?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "It seems like it is shimmering");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Oh wow that must be the kind of water that is used to make potions");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Really do you think we can use the flower we found to make a potion with it?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Maybe");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I think it is worth a try don`t you think so?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "If you want just put the flower in the bottle and fill it with water");
                                await fantasyrpg.ƒS.Text.print("Open your Inventory and use them if you want");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                                if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.EmptyBottle) == 0 && fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Flower) == 0) {
                                    console.log("nice it worker");
                                    fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Healthpotion);
                                    await fantasyrpg.ƒS.Text.print("You put the flower in the Bottle you found and filled it with water");
                                    fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Healthpotion);
                                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Wow it looks like it is working it is turning red");
                                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I think it is a Healing potion");
                                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Could come in handy at some point");
                                }
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mhh no I think I will just keep the flower for now");
                            }
                            await fantasyrpg.ƒS.Text.print("You keept walking untill it got darker");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Look its is getting dark already lets make camp and continue tommorrow");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea thats a good idea");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I am so tired i can't walk another step");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                            await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                            await fantasyrpg.ƒS.Text.print("Your friends decided to make camp and continue tomorrow");
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
                            check = true;
                            fantasyrpg.scenecount = "scene8";
                            return fantasyrpg.scenecount;
                        case thirdDecisionElementAnswers.alone:
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Let me try pushing them away myselfe");
                            fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
                            let Throwdice = {
                                Throwdice: "Are you stron enough?",
                            };
                            let Dicethrow = await fantasyrpg.ƒS.Menu.getInput(Throwdice, "dialog1");
                            switch (Dicethrow) {
                                case Throwdice.Throwdice:
                                    fantasyrpg.throwdice();
                            }
                            if (fantasyrpg.stats.random >= 5) {
                                fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "wow you managed to push them alone??");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "I always underestimate your strenght " + fantasyrpg.stats.Main);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea I can`t belive you did that");
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailtomountain);
                                await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                await fantasyrpg.ƒS.Text.print("After successfully pushing away the rocks you and your friends kept waling through the mountains");
                                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                                await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                                await fantasyrpg.ƒS.Text.print("when it got darker and darker you decided to make camp and continue tomorrow");
                                check = true;
                                fantasyrpg.stats.Main.Strength += 10;
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
                                fantasyrpg.scenecount = "scene8";
                                return fantasyrpg.scenecount;
                            }
                            else {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.veryhappy, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Hahaha your really thought you can push them away by yourselfe?");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Sould we help you or are you going to try again?");
                            }
                    }
                }
        }
    }
    fantasyrpg.scene7 = scene7;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene8() {
        console.log("scene8 start");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black); //add view img
        await fantasyrpg.ƒS.update(2);
        await fantasyrpg.ƒS.Text.print("On the next day you and your friends continue your adventure");
        //await ƒS.Text.print("You and your friends walked ");
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0.3, true);
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.trailtomountain);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        await fantasyrpg.ƒS.Text.print("After a lot of walking you see a big waterfall");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.waterfall);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        await fantasyrpg.ƒS.Text.print("On top of the waterfall you see a town");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Look over there");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "A town on top of a waterfall");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Thats so cool");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Do you see that lake unter it it would be so cool to make camp there");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "We could go swimming and stuff");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea but do we have enough supplies left?");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I think we are running low on food");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "True but we can just go hunting");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "And I bet we can even go fishing at that lake");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Mhh I don`t know");
        await fantasyrpg.ƒS.Text.print("You need to decide if you need to go to the town or if you have enought supplies left");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.kreuzung2);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        let firstDecisionElementAnswers = {
            city: "Go to the town",
            continue: "Go to the lake",
        };
        let firstDecisionElement = await fantasyrpg.ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog");
        switch (firstDecisionElement) {
            case firstDecisionElementAnswers.city:
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I think we should go to the Town our supplies are really running low");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Also I'd like to sleep in a bed for once");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Alright I guess your right lets go to the city then");
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update();
                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.normal, 0, true);
                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0.3, true);
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.villagecenter);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Guys this looks like a big city I bet there is an Alchemist here");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea but shouldn't we got to the Tavern first to get food?");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Before we entered the city I even saw a Tower ruin a bit outside the town");
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Wouldn't it be cool to check that out?");
                let thirdDecisionElementAnswers = {
                    alchemist: "Search the Alchemist",
                    tower: "Inspect the tower",
                    center: "Go to the town center"
                };
                let thirdDecisionElement = await fantasyrpg.ƒS.Menu.getInput(thirdDecisionElementAnswers, "dialog");
                switch (thirdDecisionElement) {
                    case thirdDecisionElementAnswers.alchemist:
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I really think we should go to the Alchemist first");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "We have all day here we can restock later");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yea your right maybe we can get some potions there");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.alchemist);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                        await fantasyrpg.ƒS.Text.print("You went to the alchemist");
                        await fantasyrpg.ƒS.Text.print("Behind the alchemist you see a red potion but you don`t have any money.");
                        await fantasyrpg.ƒS.Text.print("You try convincing her that you need the potion for something important");
                        fantasyrpg.stats.number = (fantasyrpg.stats.relside1 + fantasyrpg.stats.relside2 + fantasyrpg.stats.relside3) / 10;
                        let Throwdice = {
                            Throwdice: "Feel Lucky?",
                        };
                        let Dicethrow = await fantasyrpg.ƒS.Menu.getInput(Throwdice, "dialog1");
                        switch (Dicethrow) {
                            case Throwdice.Throwdice:
                                fantasyrpg.throwdice();
                        }
                        if (fantasyrpg.stats.random >= 10) {
                            await fantasyrpg.ƒS.Text.print("You managed to convince the Alchemist and she gave you the potion");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Wow look at that");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "She gave you a Healing Potion");
                            fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Healthpotion);
                        }
                        else {
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Mhh I don`t think this is going anywhere " + fantasyrpg.stats.Main.name);
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Let's just leave");
                            await fantasyrpg.ƒS.Text.print("Just as you are about to leave the Alchemist stops you and gives you a pice of paper");
                            await fantasyrpg.ƒS.Text.print("Looks like there is something writen on it");
                            fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.advice);
                            await fantasyrpg.ƒS.Text.print("Open your inventor and look at it maybe you can decifer what it is saying");
                            fantasyrpg.stats.message = await fantasyrpg.ƒS.Speech.getInput();
                            if (fantasyrpg.stats.message == "You can't defeat the Golem" || fantasyrpg.stats.message == "You can`t defeat the Golem" || fantasyrpg.stats.message == "You cant defeat the Golem" || fantasyrpg.stats.message == "You can not defeat the Golem") {
                                await fantasyrpg.ƒS.Text.print("You decifered the code but what does it mean?");
                                fantasyrpg.stats.retreat = true;
                            }
                            else {
                                await fantasyrpg.ƒS.Text.print("Maybe look at it again a bit later");
                            }
                        }
                        await fantasyrpg.ƒS.Text.print("After restocking your supplies you and your friends decided to leave the city by climbing down the Waterfall");
                        await fantasyrpg.ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                        await fantasyrpg.ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                        await fantasyrpg.ƒS.Text.print("It turns out it is a cave");
                        await fantasyrpg.ƒS.Text.print("You and your friends decide to enter the Cave");
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                        fantasyrpg.scenecount = "scene9";
                        return fantasyrpg.scenecount;
                    case thirdDecisionElementAnswers.tower:
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mhh that tower sounds interessting");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I didn't even see it when we entered the city");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Let's go there");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Also we got all day to restock our supplies");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Wohoo exploring");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "I am so excited");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.tower);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.speed.duration, fantasyrpg.transition.speed.alpha, fantasyrpg.transition.speed.edge);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Guys look around mybe we can find something");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Do you really think so?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I mean there is a town right beside it");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Don't you think if something was here it would be long gone?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "You are probably right but what does it cost us to look around?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "You got a point there");
                        fantasyrpg.stats.number = (fantasyrpg.stats.relside1 + fantasyrpg.stats.relside2 + fantasyrpg.stats.relside3) / 10;
                        let Throwdice2 = {
                            Throwdice2: "Can you finde something?",
                        };
                        let Dicethrow2 = await fantasyrpg.ƒS.Menu.getInput(Throwdice2, "dialog1");
                        switch (Dicethrow2) {
                            case Throwdice2.Throwdice2:
                                fantasyrpg.throwdice();
                        }
                        if (fantasyrpg.stats.random >= 12) {
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Guys there is a lose stoneplate here");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Come help me taking it out I can`t make it alone");
                            await fantasyrpg.ƒS.Text.print("You helped your friends lift up the stoneplate");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Look thats some kind of scroll I think");
                            fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Scroll);
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Maybe we can sell it for some money?");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "It must have been here for ages");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Maybe we can use it");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Let's decide what to do with it later");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Keep searching maybe we can find something else");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                            await fantasyrpg.ƒS.update(1);
                            await fantasyrpg.ƒS.Text.print("You keep searching for a bit but you can`t find anything else");
                            await fantasyrpg.ƒS.Text.print("After restocking your supplies you and your friends decide to leave the city by climbing down the waterfall");
                            await fantasyrpg.ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await fantasyrpg.ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await fantasyrpg.ƒS.Text.print("It turns out it is a cave");
                            await fantasyrpg.ƒS.Text.print("You and your friends decide to enter the Cave");
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                            fantasyrpg.scenecount = "scene9";
                            return fantasyrpg.scenecount;
                        }
                        else {
                            await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                            await fantasyrpg.ƒS.update(1);
                            await fantasyrpg.ƒS.Text.print("You look around in the tower but can`t find anything");
                            await fantasyrpg.ƒS.Text.print("After looking around for a while You and your friends decide to leave the city by climbing down the waterfall");
                            await fantasyrpg.ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await fantasyrpg.ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await fantasyrpg.ƒS.Text.print("It turns out it is a cave");
                            await fantasyrpg.ƒS.Text.print("You and your friends decide to enter the Cave");
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                            fantasyrpg.scenecount = "scene9";
                            return fantasyrpg.scenecount;
                        }
                    case thirdDecisionElementAnswers.center:
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.villagecenter);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                        await fantasyrpg.ƒS.Text.print("You and your friends went to the town center and started to talk");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "So we are on this Adventure for a week now");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yes what do you want to say " + fantasyrpg.stats.Side2.name + "?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "How long are we going to continue our journey?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "We need at least a week to get back to our home town");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "True but aren't you having fun?");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "I do but...");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Aww nevermind let's talk about something else");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Common say it");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "I think I am just getting a bit homesick");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Understandable");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I think we are all ready to go home");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Let's just chill on the bottom of the waterfall for 1 or 2 days");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I guess that would be a good ending for our Adventure do you agree guys?");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "That's a good idea");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update();
                        // conversation
                        if (fantasyrpg.stats.chosenrel != "") {
                            await fantasyrpg.ƒS.Text.print("After talking for a while you started to walk with " + fantasyrpg.stats.chosenrel + " and you felt like talking to " + fantasyrpg.stats.chosenrel);
                            fantasyrpg.stats.flowercheck = true;
                            //conversation can use flower here
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.mediumlove, fantasyrpg.ƒS.positionPercent(10, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "I really think this was a great adventure");
                            if (fantasyrpg.stats.chosenrel in fantasyrpg.stats.Side1) {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.mediumlove, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Yea It was");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "I am already excited for the few days at the lake");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I think we can relaxe there a lot");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Like we did at the hot spring");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Maybe we can go there again on our way back to our home town");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sounds good");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "But I am still a bit uncomfable because I lied to the others about the hotspring thing");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Mhh yea me too");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "But I don't regret it afterall I had a really great time with you");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea me too");
                                await fantasyrpg.ƒS.Text.print("After talking for a while you went back to the others");
                            }
                            else if (fantasyrpg.stats.chosenrel in fantasyrpg.stats.Side2) {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.mediumlove, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Yea It was");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I am already excited for the few days at the lake");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I think we can relaxe there a lot");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Like we did at the hot spring");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Maybe we can go there again on our way back to our home town");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sounds good");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "But I am still a bit uncomfable because I lied to the others about the hotspring thing");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Mhh yea me too");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "But I don't regret it afterall I had a really great time with you");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea me too");
                                await fantasyrpg.ƒS.Text.print("After talking for a while you went back to the others");
                            }
                            else if (fantasyrpg.stats.chosenrel in fantasyrpg.stats.Side3) {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.mediumlove, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea It was");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I am already excited for the few days at the lake");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I think we can relaxe there a lot");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Like we did at the hot spring");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Maybe we can go there again on our way back to our home town");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sounds good");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "But I am still a bit uncomfable because I lied to the others about the hotspring thing");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Mhh yea me too");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "But I don't regret it afterall I had a really great time with you");
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea me too");
                                await fantasyrpg.ƒS.Text.print("After talking for a while you went back to the others");
                            }
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update();
                            if (fantasyrpg.stats.relside1 >= 100 || fantasyrpg.stats.relside2 >= 100 || fantasyrpg.stats.relside3 >= 100) {
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                fantasyrpg.scenecount = "loveending";
                            }
                            else {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.mediumlove, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I think it would be fun if we climed down the waterfall to get to the lake");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.mediumlove, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Yea that sounds like fun");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Text.print("You and your friends decided to climb down the waterfall");
                                await fantasyrpg.ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                                await fantasyrpg.ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                                await fantasyrpg.ƒS.Text.print("It turns out it is a cave");
                                await fantasyrpg.ƒS.Text.print("You and your friends decide to enter the Cave");
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                                fantasyrpg.scenecount = "scene9";
                            }
                            fantasyrpg.stats.flowercheck = false;
                            return fantasyrpg.scenecount;
                        }
                        else {
                            // conversation
                            await fantasyrpg.ƒS.Text.print("You look around in the tower but can`t find anything");
                            await fantasyrpg.ƒS.Text.print("After looking around for a while You and your friends decide to leave the city by climbing down the waterfall");
                            await fantasyrpg.ƒS.Text.print("At the bottom of the waterfall you see an entrance behind the waterfall");
                            await fantasyrpg.ƒS.Text.print("You and your friends decide to go throught the pond in front of the waterfall and inspect it");
                            await fantasyrpg.ƒS.Text.print("It turns out it is a cave");
                            await fantasyrpg.ƒS.Text.print("You and your friends decide to enter the Cave");
                            fantasyrpg.stats.relside1 += 5;
                            fantasyrpg.stats.relside2 += 5;
                            fantasyrpg.stats.relside3 += 5;
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.town, 0, true);
                            fantasyrpg.scenecount = "scene9";
                            return fantasyrpg.scenecount;
                        }
                }
            case firstDecisionElementAnswers.continue:
                await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.waterfall);
                await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.normal, 0, 1);
                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0.3, true);
                await fantasyrpg.ƒS.Text.print("On your way beneath the waterfalls you encounter another monster");
                await fantasyrpg.ƒS.Text.print("The monster looks like it`s going to attack!");
                await fantasyrpg.ƒS.Text.print("What are you going to do?");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Guys quick we need to do something");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update();
                await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Let's attack it together!");
                let secondDecisionElementAnswers = {
                    alone: "Attack it alone",
                    together: "Fight with your friends",
                };
                let secondDecisionElement = await fantasyrpg.ƒS.Menu.getInput(secondDecisionElementAnswers, "dialog");
                switch (secondDecisionElement) {
                    case secondDecisionElementAnswers.alone:
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.fight);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.fight.duration, fantasyrpg.transition.fight.alpha, fantasyrpg.transition.fight.edge);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Hold on guys I got this");
                        fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
                        let Throwdice = {
                            Throwdice: "Can you defeat it?",
                        };
                        let Dicethrow = await fantasyrpg.ƒS.Menu.getInput(Throwdice, "dialog1");
                        switch (Dicethrow) {
                            case Throwdice.Throwdice:
                                fantasyrpg.throwdice();
                        }
                        let skillselectionAnswer2 = {
                            skill1: fantasyrpg.stats.Main.Skill1,
                            skill2: fantasyrpg.stats.Main.Skill2,
                            skill3: fantasyrpg.stats.Main.Skill3,
                        };
                        let skillselection2 = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer2, "dialog");
                        switch (skillselection2) {
                            case skillselectionAnswer2.skill1:
                                fantasyrpg.skill1funktion();
                            case skillselectionAnswer2.skill2:
                                if (fantasyrpg.stats.skillused == false) {
                                    fantasyrpg.skill2funktion();
                                }
                            case skillselectionAnswer2.skill3:
                                if (fantasyrpg.stats.skillused == false) {
                                    fantasyrpg.skill3funktion();
                                }
                                fantasyrpg.stats.skillused = false;
                        }
                        if (fantasyrpg.stats.random >= 6) {
                            fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
                            await fantasyrpg.ƒS.Text.print("You defeated the monster");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "See I told you I got this");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Showoff");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "You should let us help you sometimes");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "It is dangerous to fight alone");
                            fantasyrpg.stats.Main.Strength += 10;
                        }
                        else {
                            await fantasyrpg.ƒS.Text.print("You tired to defeat it alone but failed");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Why do you always try to defeat it alone");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update();
                            if (fantasyrpg.stats.Main.namechar == "Samara") {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot8, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot9, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot10, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot11, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot12, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.1);
                            }
                            else {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike8, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike9, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.1);
                            }
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Text.print("Your friends came to save you");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "See if you let us help from time to time its easier");
                            fantasyrpg.stats.Main.Strength += 5;
                        }
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Do you see that there is something behind that waterfall");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Lets see if what that is");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "looks like a cave");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "wow thats cool");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Let's explore it");
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.cave);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                        fantasyrpg.scenecount = "scene9";
                        return fantasyrpg.scenecount;
                    case secondDecisionElementAnswers.together:
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.fight);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.fight.duration, fantasyrpg.transition.fight.alpha, fantasyrpg.transition.fight.edge);
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea fast attack it together");
                        let skillselectionAnswer = {
                            skill1: fantasyrpg.stats.Main.Skill1,
                            skill2: fantasyrpg.stats.Main.Skill2,
                            skill3: fantasyrpg.stats.Main.Skill3,
                        };
                        let skillselection = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer, "dialog");
                        switch (skillselection) {
                            case skillselectionAnswer.skill1:
                                fantasyrpg.skill1funktion();
                            case skillselectionAnswer.skill2:
                                if (fantasyrpg.stats.skillused == false) {
                                    fantasyrpg.skill2funktion();
                                }
                            case skillselectionAnswer.skill3:
                                if (fantasyrpg.stats.skillused == false) {
                                    fantasyrpg.skill3funktion();
                                }
                                fantasyrpg.stats.skillused = false;
                        }
                        if (fantasyrpg.stats.Main.namechar == "Samara") {
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack1, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack2, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack3, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack4, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update(0.2);
                        }
                        else {
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning1, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning2, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning3, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning4, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning5, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning6, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning7, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning8, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning9, fantasyrpg.ƒS.positionPercent(50, 90));
                            await fantasyrpg.ƒS.update(0.1);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update(0.1);
                        }
                        await fantasyrpg.ƒS.Text.print("");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(70, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "we did it guys");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Do you see that there is something behind that waterfall");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Lets see if what that is");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "looks like a cave");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "wow thats cool");
                        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Let's explore it");
                        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.cave);
                        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                        fantasyrpg.scenecount = "scene9";
                        return fantasyrpg.scenecount;
                }
        }
    }
    fantasyrpg.scene8 = scene8;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function scene9() {
        console.log("scene9 start");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update();
        //await ƒS.Location.show(locations.cave);
        //await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        //ƒS.Sound.play(sound.normal, 0.3, true);
        //await ƒS.Inventory.add(items.Scroll)
        //stats.Main.name = "Samara"
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side2, fantasyrpg.stats.Side2.pose.normal, fantasyrpg.ƒS.positionPercent(60, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "What do you guys think will we find at the end of this cave?");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(40, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Maybe we will come out on the other side of the hill");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side3, fantasyrpg.stats.Side3.pose.normal, fantasyrpg.ƒS.positionPercent(20, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Na I don't think we will find anything here");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "I don't even think anyone was ever here");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side3, "Like it was a suprise we saw the tiny entrance");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Main, fantasyrpg.stats.Main.pose.normal, fantasyrpg.ƒS.positionPercent(10, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Might be but exploring is always fun even if you can't find anything");
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("After walking for a while you arrive in a huge room");
        await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.caveboss);
        await fantasyrpg.ƒS.update(fantasyrpg.transition.pixel.duration, fantasyrpg.transition.pixel.alpha, fantasyrpg.transition.pixel.edge);
        fantasyrpg.ƒS.Sound.fade(fantasyrpg.sound.normal, 0, 1);
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0.3, true);
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.steps, 0.4, false);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.dead, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Text.print("You see a strange rock formation and walk toward it");
        await fantasyrpg.ƒS.Text.print("As you walk close it starts to shine");
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.steps, 0.4, false);
        await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Stone, fantasyrpg.characters.Stone.pose.normal, fantasyrpg.stones());
        await fantasyrpg.ƒS.Text.print("You take a step back");
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.steps, 0.4, false);
        await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Stone3, fantasyrpg.characters.Stone3.pose.normal, fantasyrpg.stones2());
        await fantasyrpg.ƒS.Text.print("You and your friends look at the awakening of a golem");
        await fantasyrpg.ƒS.Character.show(fantasyrpg.stats.Side1, fantasyrpg.stats.Side1.pose.normal, fantasyrpg.ƒS.positionPercent(40, 90));
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side1, "Guys I don't know about this one");
        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.steps, 0.4, false);
        await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Stone2, fantasyrpg.characters.Stone2.pose.normal, fantasyrpg.stones1());
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.Stone);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.Stone2);
        await fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.Stone3);
        await fantasyrpg.ƒS.update();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death7, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(0.2);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death6, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(0.2);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death5, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(0.2);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death4, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(0.2);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death3, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(0.2);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death2, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(0.2);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death1, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(0.2);
        await fantasyrpg.ƒS.Character.hideAll();
        await fantasyrpg.ƒS.update(0.2);
        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.normal, fantasyrpg.ƒS.positionPercent(90, 90));
        await fantasyrpg.ƒS.update(0.2);
        if (fantasyrpg.stats.retreat == true) {
            await fantasyrpg.ƒS.Text.print("Now the message from the Alchemist makes sense");
            let firstDecisionElementAnswers = {
                retreat: "Run away from the golem",
                continue: "Attack the Golem",
            };
            let firstDecisionElement = await fantasyrpg.ƒS.Menu.getInput(firstDecisionElementAnswers, "dialog");
            switch (firstDecisionElement) {
                case firstDecisionElementAnswers.retreat:
                    await fantasyrpg.ƒS.Location.show(fantasyrpg.locations.Black);
                    await fantasyrpg.ƒS.update(fantasyrpg.transition.speed.duration, fantasyrpg.transition.speed.alpha, fantasyrpg.transition.speed.edge);
                    await fantasyrpg.ƒS.Text.print("You and your friends ran away from the golem and went back to your village to continue your life");
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.update(1);
                    fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                    fantasyrpg.scenecount = "end";
                    return fantasyrpg.scenecount;
                case firstDecisionElementAnswers.continue:
                    fantasyrpg.stats.bossfight = true;
                    await fantasyrpg.ƒS.Text.print("You and your friends Decided to fight the golem");
                    await fantasyrpg.ƒS.Text.print("Maybe you have something in your inventory that would help");
                    await fantasyrpg.ƒS.Text.print("Something to make you stronger");
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    if (fantasyrpg.stats.scrollused == true) {
                        fantasyrpg.ƒS.Text.print("Something is happening you feel very strong all of the sudden");
                        fantasyrpg.ƒS.Text.print("You decide to fire off all your spells");
                        fantasyrpg.skill1funktion();
                        fantasyrpg.skill2funktion();
                        fantasyrpg.skill3funktion();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death1, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death2, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death3, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death4, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death5, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death6, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death7, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.dead, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        fantasyrpg.ƒS.Text.print("You managed to defeat the Golem in one blow");
                        fantasyrpg.ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
                        fantasyrpg.ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
                        fantasyrpg.scenecount = "end";
                        return fantasyrpg.scenecount;
                    }
                    let skillselectionAnswer = {
                        skill1: fantasyrpg.stats.Main.Skill1,
                        skill2: fantasyrpg.stats.Main.Skill2,
                        skill3: fantasyrpg.stats.Main.Skill3,
                    };
                    let skillselection = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer, "dialog");
                    switch (skillselection) {
                        case skillselectionAnswer.skill1:
                            fantasyrpg.skill1funktion();
                        case skillselectionAnswer.skill2:
                            if (fantasyrpg.stats.skillused == false) {
                                fantasyrpg.skill2funktion();
                            }
                        case skillselectionAnswer.skill3:
                            if (fantasyrpg.stats.skillused == false) {
                                fantasyrpg.skill3funktion();
                            }
                            fantasyrpg.stats.skillused = false;
                    }
                    fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
                    fantasyrpg.throwdice();
                    if (fantasyrpg.stats.random >= 10) {
                        await fantasyrpg.ƒS.Text.print("You Damaged the Golem but hes not defeated yet");
                    }
                    else {
                        if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) > 0) {
                            fantasyrpg.stats.potionamount = fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion);
                            await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                            await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 75));
                            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Text.print("Maybe you have something in your inventory that helps");
                            await fantasyrpg.ƒS.Text.print("One of your friends decides to attack the golem and damages it");
                            if (fantasyrpg.stats.Main.namechar == "Samara") {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.2);
                            }
                            else {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball8, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball9, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.2);
                            }
                            fantasyrpg.ƒS.Inventory.open();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                            if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) < fantasyrpg.stats.potionamount) {
                                await fantasyrpg.ƒS.Text.print("your wounds are healed and you get another chance defeating the golem");
                            }
                            else {
                                await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                                await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                                await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                                await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                                await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(1);
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                                fantasyrpg.scenecount = "end";
                                return fantasyrpg.scenecount;
                            }
                        }
                        else {
                            await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                            await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 75));
                            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                            await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                            await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                            await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                            await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update(1);
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                            fantasyrpg.scenecount = "end";
                            return fantasyrpg.scenecount;
                        }
                    }
                    //second dmg phase
                    let skillselectionAnswer1 = {
                        skill1: fantasyrpg.stats.Main.Skill1,
                        skill2: fantasyrpg.stats.Main.Skill2,
                        skill3: fantasyrpg.stats.Main.Skill3,
                    };
                    let skillselection1 = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer1, "dialog");
                    switch (skillselection1) {
                        case skillselectionAnswer1.skill1:
                            fantasyrpg.skill1funktion();
                        case skillselectionAnswer1.skill2:
                            if (fantasyrpg.stats.skillused == false) {
                                fantasyrpg.skill2funktion();
                            }
                        case skillselectionAnswer1.skill3:
                            if (fantasyrpg.stats.skillused == false) {
                                fantasyrpg.skill3funktion();
                            }
                            fantasyrpg.stats.skillused = false;
                    }
                    fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
                    fantasyrpg.throwdice();
                    if (fantasyrpg.stats.random >= 10) {
                        await fantasyrpg.ƒS.Text.print("You Damaged the Golem but hes not defeated yet");
                    }
                    else {
                        if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) > 0) {
                            fantasyrpg.stats.potionamount = fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion);
                            await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                            await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 85));
                            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Text.print("Maybe you have something in your inventory that helps");
                            await fantasyrpg.ƒS.Text.print("One of your friends decides to attack the golem and damages it");
                            if (fantasyrpg.stats.Main.namechar == "Samara") {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot8, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot9, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot10, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot11, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot12, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.1);
                            }
                            else {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike8, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike9, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.1);
                            }
                            fantasyrpg.ƒS.Inventory.open();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                            if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) < fantasyrpg.stats.potionamount) {
                                await fantasyrpg.ƒS.Text.print("your wounds are healed and you get another chance defeating the golem");
                            }
                            else {
                                await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                                await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                                await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                                await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                                await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(1);
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                                fantasyrpg.scenecount = "end";
                                return fantasyrpg.scenecount;
                            }
                        }
                        else {
                            await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                            await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 75));
                            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                            await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                            await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                            await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                            await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update(1);
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                            fantasyrpg.scenecount = "end";
                            return fantasyrpg.scenecount;
                        }
                    }
                    //third dmg phase
                    let skillselectionAnswer2 = {
                        skill1: fantasyrpg.stats.Main.Skill1,
                        skill2: fantasyrpg.stats.Main.Skill2,
                        skill3: fantasyrpg.stats.Main.Skill3,
                    };
                    let skillselection2 = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer2, "dialog");
                    switch (skillselection2) {
                        case skillselectionAnswer2.skill1:
                            fantasyrpg.skill1funktion();
                        case skillselectionAnswer2.skill2:
                            if (fantasyrpg.stats.skillused == false) {
                                fantasyrpg.skill2funktion();
                            }
                        case skillselectionAnswer2.skill3:
                            if (fantasyrpg.stats.skillused == false) {
                                fantasyrpg.skill3funktion();
                            }
                            fantasyrpg.stats.skillused = false;
                    }
                    fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
                    fantasyrpg.throwdice();
                    if (fantasyrpg.stats.random >= 10) {
                        await fantasyrpg.ƒS.Text.print("You Damaged the Golem");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death1, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death2, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death3, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death4, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death5, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death6, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death7, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.dead, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Text.print("Finally the Golem falls to the ground");
                        await fantasyrpg.ƒS.Text.print("You managed to defeat it");
                    }
                    else {
                        if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) > 0) {
                            fantasyrpg.stats.potionamount = fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion);
                            await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                            await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 85));
                            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Text.print("Maybe you have something in your inventory that helps");
                            await fantasyrpg.ƒS.Text.print("One of your friends decides to attack the golem and damages it");
                            if (fantasyrpg.stats.Main.namechar == "Samara") {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.2);
                            }
                            else {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning1, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning2, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning3, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning4, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning5, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning6, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning7, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning8, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning9, fantasyrpg.ƒS.positionPercent(50, 90));
                                await fantasyrpg.ƒS.update(0.1);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.1);
                            }
                            fantasyrpg.ƒS.Inventory.open();
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                            if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) < fantasyrpg.stats.potionamount) {
                                await fantasyrpg.ƒS.Text.print("Your wounds are healed and your friend managed to defeat the golem");
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death1, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death2, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death3, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death4, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death5, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death6, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death7, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.dead, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Text.print("Your friends helped you defeat the Golem");
                                await fantasyrpg.ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
                                await fantasyrpg.ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(1);
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                                fantasyrpg.scenecount = "end";
                                return fantasyrpg.scenecount;
                            }
                            else {
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                                await fantasyrpg.ƒS.update(0.2);
                                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 85));
                                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                                await fantasyrpg.ƒS.update();
                                await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                                await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                                await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                                await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                                await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                                await fantasyrpg.ƒS.Character.hideAll();
                                await fantasyrpg.ƒS.update(1);
                                fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                                fantasyrpg.scenecount = "end";
                                return fantasyrpg.scenecount;
                            }
                        }
                        else {
                            await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                            await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                            await fantasyrpg.ƒS.update(0.2);
                            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 75));
                            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                            await fantasyrpg.ƒS.update();
                            await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                            await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                            await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                            await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                            await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                            await fantasyrpg.ƒS.Character.hideAll();
                            await fantasyrpg.ƒS.update(1);
                            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                            fantasyrpg.scenecount = "end";
                            return fantasyrpg.scenecount;
                        }
                    }
                    await fantasyrpg.ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
                    await fantasyrpg.ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.update(1);
                    fantasyrpg.stats.Main.Strength += 10;
                    fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                    fantasyrpg.scenecount = "end";
                    return fantasyrpg.scenecount;
            }
        }
        else {
            fantasyrpg.stats.bossfight = true;
            await fantasyrpg.ƒS.Text.print("You and your friends Decided to fight the golem");
            await fantasyrpg.ƒS.Text.print("Maybe you have something in your inventory that would help");
            await fantasyrpg.ƒS.Text.print("Something to make you stronger");
            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
            await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
            if (fantasyrpg.stats.scrollused == true) {
                fantasyrpg.ƒS.Text.print("Something is happening you feel very strong all of the sudden");
                fantasyrpg.ƒS.Text.print("You decide to fire off all your spells");
                fantasyrpg.skill1funktion();
                fantasyrpg.skill2funktion();
                fantasyrpg.skill3funktion();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death1, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death2, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death3, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death4, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death5, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death6, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death7, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.dead, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                fantasyrpg.ƒS.Text.print("You managed to defeat the Golem in one blow");
                fantasyrpg.ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
                fantasyrpg.ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
                fantasyrpg.scenecount = "end";
                return fantasyrpg.scenecount;
            }
            let skillselectionAnswer3 = {
                skill1: fantasyrpg.stats.Main.Skill1,
                skill2: fantasyrpg.stats.Main.Skill2,
                skill3: fantasyrpg.stats.Main.Skill3,
            };
            let skillselection3 = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer3, "dialog");
            switch (skillselection3) {
                case skillselectionAnswer3.skill1:
                    fantasyrpg.skill1funktion();
                case skillselectionAnswer3.skill2:
                    if (fantasyrpg.stats.skillused == false) {
                        fantasyrpg.skill2funktion();
                    }
                case skillselectionAnswer3.skill3:
                    if (fantasyrpg.stats.skillused == false) {
                        fantasyrpg.skill3funktion();
                    }
                    fantasyrpg.stats.skillused = false;
            }
            fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
            fantasyrpg.throwdice();
            if (fantasyrpg.stats.random >= 10) {
                await fantasyrpg.ƒS.Text.print("You Damaged the Golem but hes not defeated yet");
            }
            else {
                if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) > 0) {
                    fantasyrpg.stats.potionamount = fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion);
                    await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                    await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 75));
                    await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                    await fantasyrpg.ƒS.update();
                    await fantasyrpg.ƒS.Text.print("Maybe you have something in your inventory that helps");
                    await fantasyrpg.ƒS.Text.print("One of your friends decides to attack the golem");
                    if (fantasyrpg.stats.Main.namechar == "Samara") {
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike1, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike2, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike3, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike4, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike5, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike6, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike7, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.2);
                    }
                    else {
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball1, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball2, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball3, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball4, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball5, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball6, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball7, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball8, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball9, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.2);
                    }
                    //ƒS.Inventory.open();
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) < fantasyrpg.stats.potionamount) {
                        await fantasyrpg.ƒS.Text.print("your wounds are healed and you get another chance defeating the golem");
                    }
                    else {
                        await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                        await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                        await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                        await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                        await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(1);
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                        fantasyrpg.scenecount = "end";
                        return fantasyrpg.scenecount;
                    }
                }
                else {
                    await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                    await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 75));
                    await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                    await fantasyrpg.ƒS.update();
                    await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                    await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                    await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                    await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                    await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.update(1);
                    fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                    fantasyrpg.scenecount = "end";
                    return fantasyrpg.scenecount;
                }
            }
            //second dmg phase
            let skillselectionAnswer4 = {
                skill1: fantasyrpg.stats.Main.Skill1,
                skill2: fantasyrpg.stats.Main.Skill2,
                skill3: fantasyrpg.stats.Main.Skill3,
            };
            let skillselection4 = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer4, "dialog");
            switch (skillselection4) {
                case skillselectionAnswer4.skill1:
                    fantasyrpg.skill1funktion();
                case skillselectionAnswer4.skill2:
                    if (fantasyrpg.stats.skillused == false) {
                        fantasyrpg.skill2funktion();
                    }
                case skillselectionAnswer4.skill3:
                    if (fantasyrpg.stats.skillused == false) {
                        fantasyrpg.skill3funktion();
                    }
                    fantasyrpg.stats.skillused = false;
            }
            fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
            fantasyrpg.throwdice();
            if (fantasyrpg.stats.random >= 10) {
                await fantasyrpg.ƒS.Text.print("You Damaged the Golem but hes not defeated yet");
            }
            else {
                if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) > 0) {
                    fantasyrpg.stats.potionamount = fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion);
                    await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                    await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 85));
                    await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                    await fantasyrpg.ƒS.update();
                    await fantasyrpg.ƒS.Text.print("Maybe you have something in your inventory that helps");
                    await fantasyrpg.ƒS.Text.print("One of your friends decides to attack the golem and damages it");
                    if (fantasyrpg.stats.Main.namechar == "Samara") {
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot1, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot2, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot3, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot4, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot5, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot6, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot7, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot8, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot9, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot10, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot11, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot12, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.1);
                    }
                    else {
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike1, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike2, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike3, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike4, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike5, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike6, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike7, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike8, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike9, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.1);
                    }
                    fantasyrpg.ƒS.Inventory.open();
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) < fantasyrpg.stats.potionamount) {
                        await fantasyrpg.ƒS.Text.print("your wounds are healed and you get another chance defeating the golem");
                    }
                    else {
                        await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                        await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                        await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                        await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                        await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(1);
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                        fantasyrpg.scenecount = "end";
                        return fantasyrpg.scenecount;
                    }
                }
                else {
                    await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                    await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 75));
                    await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                    await fantasyrpg.ƒS.update();
                    await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                    await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                    await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                    await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                    await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.update(1);
                    fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                    fantasyrpg.scenecount = "end";
                    return fantasyrpg.scenecount;
                }
            }
            //third dmg phase
            let skillselectionAnswer5 = {
                skill1: fantasyrpg.stats.Main.Skill1,
                skill2: fantasyrpg.stats.Main.Skill2,
                skill3: fantasyrpg.stats.Main.Skill3,
            };
            let skillselection5 = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer5, "dialog");
            switch (skillselection5) {
                case skillselectionAnswer5.skill1:
                    fantasyrpg.skill1funktion();
                case skillselectionAnswer5.skill2:
                    if (fantasyrpg.stats.skillused == false) {
                        fantasyrpg.skill2funktion();
                    }
                case skillselectionAnswer5.skill3:
                    if (fantasyrpg.stats.skillused == false) {
                        fantasyrpg.skill3funktion();
                    }
                    fantasyrpg.stats.skillused = false;
            }
            fantasyrpg.stats.number = fantasyrpg.stats.Main.Strength / 10;
            fantasyrpg.throwdice();
            if (fantasyrpg.stats.random >= 10) {
                await fantasyrpg.ƒS.Text.print("You Damaged the Golem");
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death1, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death2, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death3, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death4, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death5, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death6, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death7, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.hideAll();
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.dead, fantasyrpg.ƒS.positionPercent(90, 90));
                await fantasyrpg.ƒS.update(0.2);
                await fantasyrpg.ƒS.Text.print("Finally the Golem falls to the ground");
                await fantasyrpg.ƒS.Text.print("You managed to defeat it");
            }
            else {
                if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) > 0) {
                    fantasyrpg.stats.potionamount = fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion);
                    await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                    await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 85));
                    await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                    await fantasyrpg.ƒS.update();
                    await fantasyrpg.ƒS.Text.print("Maybe you have something in your inventory that helps");
                    await fantasyrpg.ƒS.Text.print("One of your friends decides to attack the golem and damages it");
                    if (fantasyrpg.stats.Main.namechar == "Samara") {
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack1, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack2, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack3, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack4, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.2);
                    }
                    else {
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning1, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning2, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning3, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning4, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning5, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning6, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning7, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning8, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning9, fantasyrpg.ƒS.positionPercent(50, 90));
                        await fantasyrpg.ƒS.update(0.1);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.1);
                    }
                    fantasyrpg.ƒS.Inventory.open();
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "");
                    if (fantasyrpg.ƒS.Inventory.getAmount(fantasyrpg.items.Healthpotion) < fantasyrpg.stats.potionamount) {
                        await fantasyrpg.ƒS.Text.print("Your wounds are healed and your friend managed to defeat the golem");
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death1, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death2, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death3, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death4, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death5, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death6, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.death7, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.dead, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
                        await fantasyrpg.ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(1);
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                        fantasyrpg.scenecount = "end";
                        return fantasyrpg.scenecount;
                    }
                    else {
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                        await fantasyrpg.ƒS.update(0.2);
                        await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 85));
                        await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                        await fantasyrpg.ƒS.update();
                        await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                        await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                        await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                        await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                        await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                        await fantasyrpg.ƒS.Character.hideAll();
                        await fantasyrpg.ƒS.update(1);
                        fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                        fantasyrpg.scenecount = "end";
                        return fantasyrpg.scenecount;
                    }
                }
                else {
                    await fantasyrpg.ƒS.Text.print("You did not damage the golem");
                    await fantasyrpg.ƒS.Text.print("The Golem Attacked you and you took a lot of damage");
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack1, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack2, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack3, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack4, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack5, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack6, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Golem, fantasyrpg.characters.Golem.pose.attack7, fantasyrpg.ƒS.positionPercent(90, 90));
                    await fantasyrpg.ƒS.update(0.2);
                    await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.ƒS.positionPercent(90, 75));
                    await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.Knife, fantasyrpg.characters.Knife.pose.normal, fantasyrpg.knifethrow());
                    await fantasyrpg.ƒS.update();
                    await fantasyrpg.ƒS.Text.print("You died because of your wounds");
                    await fantasyrpg.ƒS.Text.print("Your friends managed to escape");
                    await fantasyrpg.ƒS.Text.print("They will never forget your bravery");
                    await fantasyrpg.ƒS.Text.print("They went back to the village and told everyone about your bravery");
                    await fantasyrpg.ƒS.Text.print("The village will always remember you as a hero");
                    await fantasyrpg.ƒS.Character.hideAll();
                    await fantasyrpg.ƒS.update(1);
                    fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
                    fantasyrpg.scenecount = "end";
                    return fantasyrpg.scenecount;
                }
            }
            await fantasyrpg.ƒS.Text.print("You and your friends were really happy and proud of what you accomplished on your jerney");
            await fantasyrpg.ƒS.Text.print("You and your friends went back to your hometown and had a big party with the hole village");
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(1);
            fantasyrpg.stats.Main.Strength += 10;
            fantasyrpg.ƒS.Sound.play(fantasyrpg.sound.fight, 0, true);
            fantasyrpg.scenecount = "end";
            return fantasyrpg.scenecount;
        }
    }
    fantasyrpg.scene9 = scene9;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    function setscene() {
        fantasyrpg.teststring = fantasyrpg.scenecount2.match(/\d+/)[0];
        fantasyrpg.test = parseInt(fantasyrpg.teststring);
        fantasyrpg.test += 1;
        console.log(fantasyrpg.test);
        fantasyrpg.scenecount = "scene" + String(fantasyrpg.test);
        console.log(fantasyrpg.scenecount);
        return fantasyrpg.scenecount;
    }
    fantasyrpg.setscene = setscene;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function skill1() {
        console.log("skill1");
        if (fantasyrpg.stats.Main.Skill1 == "Skystrike") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike7, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        else if (fantasyrpg.stats.Main.Skill1 == "Bowshot") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        else if (fantasyrpg.stats.Main.Skill1 == "Blindinglight") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight7, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        else if (fantasyrpg.stats.Main.Skill1 == "Fireball") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball7, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball8, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball9, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "Test");
        fantasyrpg.ƒS.update();
        fantasyrpg.setscene();
        return fantasyrpg.scenecount;
    }
    fantasyrpg.skill1 = skill1;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function skill1funktion() {
        console.log("skill1");
        fantasyrpg.stats.skillused = true;
        if (fantasyrpg.stats.Main.Skill1 == "Skystrike") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.skystrike7, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill1 == "Bowshot") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.bowshot6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill1 == "Blindinglight") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.blindinglight7, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill1 == "Fireball") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball7, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball8, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.fireball9, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
    }
    fantasyrpg.skill1funktion = skill1funktion;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function skill2() {
        console.log("skill2");
        if (fantasyrpg.stats.Main.Skill2 == "Swordattack") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.2);
        }
        else if (fantasyrpg.stats.Main.Skill2 == "Fastshot") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        else if (fantasyrpg.stats.Main.Skill2 == "Swordswing") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing7, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        else if (fantasyrpg.stats.Main.Skill2 == "Lightning") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning7, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning8, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning9, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "Test");
        fantasyrpg.ƒS.update();
        fantasyrpg.setscene();
        return fantasyrpg.scenecount;
    }
    fantasyrpg.skill2 = skill2;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function skill2funktion() {
        console.log("skill2");
        fantasyrpg.stats.skillused = true;
        if (fantasyrpg.stats.Main.Skill2 == "Swordattack") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordattack4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill2 == "Fastshot") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.fastshot6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill2 == "Swordswing") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.swordswing7, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill2 == "Lightning") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning7, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning8, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.lightning9, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
    }
    fantasyrpg.skill2funktion = skill2funktion;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function skill3() {
        console.log("skill3");
        if (fantasyrpg.stats.Main.Skill3 == "Swordslash") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        else if (fantasyrpg.stats.Main.Skill3 == "Rollshot") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot7, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot8, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot9, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot10, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot11, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot12, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        else if (fantasyrpg.stats.Main.Skill3 == "Windburst") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst7, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst8, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst9, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        else if (fantasyrpg.stats.Main.Skill3 == "Windstrike") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike1, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike2, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike3, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike4, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike5, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike6, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike7, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike8, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike9, fantasyrpg.ƒS.positionPercent(50, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0.1);
        }
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.characters.Narrator, "Test");
        fantasyrpg.ƒS.update();
        fantasyrpg.setscene();
        return fantasyrpg.scenecount;
    }
    fantasyrpg.skill3 = skill3;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function skill3funktion() {
        console.log("skill3");
        fantasyrpg.stats.skillused = true;
        if (fantasyrpg.stats.Main.Skill3 == "Swordslash") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Adira, fantasyrpg.characters.Adira.pose.swordslash5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill3 == "Rollshot") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot7, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot8, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot9, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot10, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot11, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Hando, fantasyrpg.characters.Hando.pose.rollshot12, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill3 == "Windburst") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1, fantasyrpg.characters.Liraz.pose.windburst2);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst7, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst8, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Liraz, fantasyrpg.characters.Liraz.pose.windburst9, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
        else if (fantasyrpg.stats.Main.Skill3 == "Windstrike") {
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike1, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike2, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike3, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike4, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike5, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike6, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike7, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike8, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.Samara, fantasyrpg.characters.Samara.pose.windstrike9, fantasyrpg.ƒS.positionPercent(10, 90));
            await fantasyrpg.ƒS.update(0.1);
            await fantasyrpg.ƒS.Character.hideAll();
            await fantasyrpg.ƒS.update(0);
        }
    }
    fantasyrpg.skill3funktion = skill3funktion;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function testing() {
        console.log("Iam here");
        fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.advice);
        fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Flower);
        fantasyrpg.ƒS.Inventory.add(fantasyrpg.items.Scroll);
        //console.log(ƒS.Inventory.add(items.Healthpotion));
        //console.log(ƒS.Inventory.open())
        //if( FudgeStory.functio) {}
        fantasyrpg.stats.Main.pose.normal = "./Images/Characters/ArchMage/ArchMage.png";
        fantasyrpg.stats.Main.pose.happy = "./Images/Characters/ArchMage/ArchMageHappy.png";
        fantasyrpg.stats.Main.pose.veryhappy = "./Images/Characters/ArchMage/ArchMageVeryHappy.png";
        fantasyrpg.stats.Main.pose.unhappy = "./Images/Characters/ArchMage/ArchMageUnHappy.png";
        fantasyrpg.stats.Main.pose.angry = "./Images/Characters/ArchMage/ArchMageAngry.png";
        fantasyrpg.stats.Main.pose.arrogant = "./Images/Characters/ArchMage/ArchMageArrogant.png";
        fantasyrpg.stats.Main.pose.mediumlove = "./Images/Characters/ArchMage/ArchMageMediumLove.png";
        fantasyrpg.stats.Main.pose.inlove = "./Images/Characters/ArchMage/ArchMageInLove.png";
        fantasyrpg.stats.Main.Skill1 = "Fireball";
        fantasyrpg.stats.Main.Skill2 = "Lightning";
        fantasyrpg.stats.Main.Skill3 = "Windstrike";
        let skillselectionAnswer = {
            skill1: fantasyrpg.stats.Main.Skill1,
            skill2: fantasyrpg.stats.Main.Skill2,
            skill3: fantasyrpg.stats.Main.Skill3,
        };
        let skillselection = await fantasyrpg.ƒS.Menu.getInput(skillselectionAnswer, "dialog1");
        switch (skillselection) {
            case skillselectionAnswer.skill1:
                fantasyrpg.skill1funktion();
            case skillselectionAnswer.skill2:
                if (fantasyrpg.stats.skillused == false) {
                    fantasyrpg.skill2funktion();
                }
            case skillselectionAnswer.skill3:
                if (fantasyrpg.stats.skillused == false) {
                    fantasyrpg.skill3funktion();
                }
                fantasyrpg.stats.skillused = false;
        }
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Hey can we talk for a second?");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Sure what is bothering you?");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "I was worried because you said you don`t want to come with us is everything allright?");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Yea I am just a bit tired thats all");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Side2, "Ah thats fine I just really hoped you would come");
        await fantasyrpg.ƒS.Speech.tell(fantasyrpg.stats.Main, "Mh let me think about it for a second");
        //if(ƒS.Inventory.querySelector("ul").includes("Potion"))
        await fantasyrpg.ƒS.Text.print("Clarifikation Images and story is not final");
        fantasyrpg.stats.number = 10;
        let Throwdice = {
            Throwdice: "Feel Lucky?",
        };
        let Dicethrow = await fantasyrpg.ƒS.Menu.getInput(Throwdice, "dialog1");
        switch (Dicethrow) {
            case Throwdice.Throwdice:
                fantasyrpg.throwdice();
        }
        await fantasyrpg.ƒS.Text.print("Clarifikation Images and story is not final");
        await fantasyrpg.ƒS.Text.print("This is only a Preview of what direktion the Novel will take");
        await fantasyrpg.ƒS.Text.print("Welcome to your Adventure " + fantasyrpg.stats.Main.name);
        await fantasyrpg.ƒS.Text.print("The first think you need to do is choose a Class");
        await fantasyrpg.ƒS.Text.print("But be aware all your choices will have a effect on the outcome of your Adventure");
        await fantasyrpg.ƒS.Text.print("Even if some decisions seem insignificant");
        await fantasyrpg.ƒS.Text.print("So always choose wisely");
        console.log(fantasyrpg.stats.relside1);
        await fantasyrpg.ƒS.Text.print("You may open your Inventory with I");
    }
    fantasyrpg.testing = testing;
})(fantasyrpg || (fantasyrpg = {}));
var fantasyrpg;
(function (fantasyrpg) {
    async function throwdice() {
        console.log("throw dice");
        fantasyrpg.stats.random = Math.floor(Math.random() * fantasyrpg.stats.number + 4);
        console.log("random number is " + fantasyrpg.stats.random);
        if (fantasyrpg.stats.number <= 3) {
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani1());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani2());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani3());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani4());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani5());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            if (fantasyrpg.stats.random == 1) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani6());
            }
            else if (fantasyrpg.stats.random == 2) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani6());
            }
            else if (fantasyrpg.stats.random == 3) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani6());
            }
            else if (fantasyrpg.stats.random == 4) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice4, fantasyrpg.diceani6());
            }
            else if (fantasyrpg.stats.random == 5) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani6());
            }
            else if (fantasyrpg.stats.random == 6) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani6());
            }
        }
        else if (fantasyrpg.stats.number > 3 && fantasyrpg.stats.number <= 9) {
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani1left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani2left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani3left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani4left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani5left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            if (fantasyrpg.stats.random == 1) {
                fantasyrpg.stats.random = 2;
            }
            else if (fantasyrpg.stats.random == 2) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 3) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 4) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice2, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice2, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 5) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 6) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            if (fantasyrpg.stats.random == 7) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 8) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 9) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 10) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice5, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice5, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 11) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 12) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani1right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani2right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani3right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice4, fantasyrpg.diceani4right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani5right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            if (fantasyrpg.stats.random == 1) {
                fantasyrpg.stats.random = 2;
            }
            else if (fantasyrpg.stats.random == 2) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 3) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 4) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 5) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice4, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 6) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani6right());
            }
            if (fantasyrpg.stats.random == 7) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 8) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 9) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 10) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 11) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 12) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani6right());
            }
        }
        else if (fantasyrpg.stats.number > 9) {
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani1left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani2left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani3left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani4left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani5left());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            if (fantasyrpg.stats.random == 1) {
                fantasyrpg.stats.random = 3;
            }
            else if (fantasyrpg.stats.random == 2) {
                fantasyrpg.stats.random = 4;
            }
            else if (fantasyrpg.stats.random == 3) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 4) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 5) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 6) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice2, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice2, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            if (fantasyrpg.stats.random == 7) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice5, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice5, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 8) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 9) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 10) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice5, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice5, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 11) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice1, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 12) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            if (fantasyrpg.stats.random == 13) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 14) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 15) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice3, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 16) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice5, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice5, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 17) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 18) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.diceani6left());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice2, fantasyrpg.characters.dice2.pose.dice6, fantasyrpg.ƒS.positionPercent(20, 80));
                fantasyrpg.ƒS.update(1);
            }
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani1());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani2());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani3());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice4, fantasyrpg.diceani4());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani5());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            if (fantasyrpg.stats.random == 1) {
                fantasyrpg.stats.random = 3;
            }
            else if (fantasyrpg.stats.random == 2) {
                fantasyrpg.stats.random = 4;
            }
            else if (fantasyrpg.stats.random == 3) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice1, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice1, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 4) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice1, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice1, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 5) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice2, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice2, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 6) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice3, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice3, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            if (fantasyrpg.stats.random == 7) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice1, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice1, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 8) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice2, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice2, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 9) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice3, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice3, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 10) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice3, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice3, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 11) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice5, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice5, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 12) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            if (fantasyrpg.stats.random == 13) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 14) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice5, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice5, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 15) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 16) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 17) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            else if (fantasyrpg.stats.random == 18) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.diceani6());
                await fantasyrpg.ƒS.Character.show(fantasyrpg.characters.dice3, fantasyrpg.characters.dice3.pose.dice6, fantasyrpg.ƒS.positionPercent(50, 80));
                fantasyrpg.ƒS.update(1);
            }
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani1right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani2right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani3right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice4, fantasyrpg.diceani4right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani5right());
            fantasyrpg.ƒS.Character.hide(fantasyrpg.characters.dice);
            if (fantasyrpg.stats.random == 1) {
                fantasyrpg.stats.random = 3;
            }
            else if (fantasyrpg.stats.random == 2) {
                fantasyrpg.stats.random = 4;
            }
            else if (fantasyrpg.stats.random == 3) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 4) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 5) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 6) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani6right());
            }
            if (fantasyrpg.stats.random == 7) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice1, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 8) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 9) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 10) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice2, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 11) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 12) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani6right());
            }
            if (fantasyrpg.stats.random == 13) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice4, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 14) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice3, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 15) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 16) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 17) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice5, fantasyrpg.diceani6right());
            }
            else if (fantasyrpg.stats.random == 18) {
                await fantasyrpg.ƒS.Character.animate(fantasyrpg.characters.dice, fantasyrpg.characters.dice.pose.dice6, fantasyrpg.diceani6right());
            }
        }
    }
    fantasyrpg.throwdice = throwdice;
})(fantasyrpg || (fantasyrpg = {}));
//# sourceMappingURL=Template.js.map