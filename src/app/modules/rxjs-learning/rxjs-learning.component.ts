import { Component, OnInit } from "@angular/core";
import { fromEvent } from "rxjs";
import { map, scan } from 'rxjs/operators';

@Component({
    templateUrl: "./rxjs-learning.component.html"
})

export class RxjsLearningComponent implements OnInit {

    ngOnInit() {
        const button = document.getElementById("myBtn");

        const clickStream = fromEvent(button, "click");

        const counterStream = clickStream.pipe(
            map((data) => { return 1 }),
            scan((acc, curr) => acc + curr, 0)
        );

        counterStream.subscribe(data => {
            console.log('this is the click counter: ' + data);
        });
    }
}