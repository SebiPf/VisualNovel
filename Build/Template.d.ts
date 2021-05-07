declare namespace Template {
    function Text(): ƒS.SceneReturn;
}
declare namespace Template {
    function Test(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        city: {
            name: string;
            background: string;
        };
        school: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Protagonist: {
            name: string;
        };
        Ryu: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
            };
        };
        Girl: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                smile: string;
            };
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
