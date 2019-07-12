import { Component, OnInit } from "@angular/core";
import { from, Observable, interval, ConnectableObservable } from "rxjs"
import { publish, refCount } from 'rxjs/operators';


@Component({
    templateUrl: "./rxjs-cold-hot.component.html"

})

export class RxjsColdHotComponent implements OnInit {
    testArray = [1, 2, 3, 4, 5];
    ngOnInit() {
        //this.coldObservable();
        // this.warmObservable1();
        this.hotObservable();
    }

    coldObservable() {
        let obs$ = from(this.testArray);

        obs$.subscribe(data => { console.log("1st subscriber:" + data) });
        obs$.subscribe(data => { console.log("2nd subscriber:" + data) });
    }

    warmObservable1() {
        let obs$ = interval(1000).pipe(
            publish(),
            refCount()
        )

        setTimeout(() => {
            obs$.subscribe(data => { console.log("1st subscriber:" + data) });
            setTimeout(() => {
                obs$.subscribe(data => { console.log("2st subscriber:" + data) });

            }, 1100);

        }, 2000);
    }

    hotObservable() {
        let obs$ = interval(1000).pipe(
            publish()
        ) as ConnectableObservable<any>;
        obs$.connect();

        setTimeout(() => {
            obs$.subscribe(data => { console.log("1st subscriber:" + data) });
            setTimeout(() => {
                obs$.subscribe(data => { console.log("2st subscriber:" + data) });

            }, 1100);

        }, 2000);


    }



}