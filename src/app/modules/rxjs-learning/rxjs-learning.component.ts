import { Component, OnInit } from "@angular/core";
import { fromEvent, Subscription } from "rxjs";
import { map, scan, buffer, throttleTime, filter } from 'rxjs/operators';


@Component({
    templateUrl: "./rxjs-learning.component.html"
})

export class RxjsLearningComponent implements OnInit {

    subscription: Subscription;

    ngOnInit() {
         this.getClickCounter();
        //this.getDouleClickCounter();

    }

    getClickCounter() {
        let button = document.getElementById("myBtn");

        let clickStream$ = fromEvent(button, "click");

        let counterStream$ = clickStream$.pipe(
            map((data) => { return 1 }),
            scan((acc, curr) => acc + curr, 0)
        );

        counterStream$.subscribe(data => {
            console.log("this is the click counter: " + data);
        });
    }

    getDouleClickCounter() {
        let button = document.getElementById("myBtn");

        let clickStream$ = fromEvent(button, "click");

        let doubleClickStream$ = clickStream$
            .pipe(
                buffer(clickStream$.pipe(throttleTime(250))),
                map(click => { return click.length }),
                filter(num => num >= 2)
            )

        doubleClickStream$.subscribe(data => {
            console.log("the number of double click is: " + data);;
        });
    }
}