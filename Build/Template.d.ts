declare namespace Template {
    function Text(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneChange(): ƒS.SceneReturn;
}
declare namespace Template {
    function Decision(): ƒS.SceneReturn;
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
        seafire: {
            name: string;
            background: string;
        };
        shore: {
            name: string;
            background: string;
        };
        view: {
            name: string;
            background: string;
        };
        woodscamp: {
            name: string;
            background: string;
        };
        waterfall: {
            name: string;
            background: string;
        };
        charselect: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
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
    let items: {
        Healthpotion: {
            name: string;
            description: string;
            image: string;
        };
    };
    let scenecount: string;
    let stats: {
        Protagonist: {
            name: string;
        };
        char1: {
            points: number;
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function option1(): ƒS.SceneReturn;
}
declare namespace Template {
    function option2(): ƒS.SceneReturn;
}
declare namespace Template {
    function option3(): ƒS.SceneReturn;
}
declare namespace Template {
    function option4(): ƒS.SceneReturn;
}
