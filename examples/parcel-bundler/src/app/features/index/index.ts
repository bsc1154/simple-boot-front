import html from "./index.html";
import {Sim} from "simple-boot-front/decorators/SimDecorator";
import {Module} from "simple-boot-front/module/Module";
import {ViewService} from "simple-boot-front/service/view/ViewService";
import {RandomUtils} from "simple-boot-front/util/random/RandomUtils";
import {View} from "simple-boot-front/service/view/View";

@Sim()
export class Index extends Module {
    template = html;

    data = "default data";

    public title = new (class extends Module {
        public value = "";
        public wrapElement = "span";
    })();

    public numbers = new (class extends Module {
        public datas = [1, 2, 3];
        template = "<ul>{{#each datas as |data i|}}<li>{{data}}</li>{{/each}}</ul>";
    })();

    constructor(public v: ViewService) {
        super("index");
    }

    test() {
        console.log("test");
    }

    changeText($event: KeyboardEvent, view: View<Element>) {
        this.title.value = view.value;
    }

    changeData() {
        this.numbers.datas = [
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400)),
            Math.floor(RandomUtils.random(1, 400))
        ];
    }
}
