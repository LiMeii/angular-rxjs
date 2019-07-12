import { Component, OnInit } from "@angular/core";
import { from, Observable, interval, ConnectableObservable } from "rxjs"
import { publish, refCount } from 'rxjs/operators';


@Component({
    templateUrl: "./rxjs-cold-hot.component.html"

})

export class RxjsColdHotComponent implements OnInit {

    ngOnInit() {
        //this.coldObservable();
        // this.makeColdToHotWithArray();
        this.makeColdToHotWithInterval();
        // this.warmObservable1();
        // this.hotObservable();
    }

    coldObservable() {
        let obs$ = from([1, 2, 3, 4, 5]);

        // obs$.subscribe(data => { console.log("1st subscriber:" + data) });
        // obs$.subscribe(data => { console.log("2nd subscriber:" + data) });

        obs$.subscribe(data => { console.log("1st subscriber:" + data) });
        setTimeout(() => {
            obs$.subscribe(data => { console.log("2nd subscriber:" + data) });
        }, 1100);

    }

    makeColdToHotWithArray() {
        let obs$ = from([1, 2, 3, 4, 5]).pipe(
            publish()
        ) as ConnectableObservable<any>;
        obs$.connect();

        obs$.subscribe(data => { console.log("1st subscriber:" + data) });
        setTimeout(() => {
            obs$.subscribe(data => { console.log("2st subscriber:" + data) });
        }, 2100);

    }
    makeColdToHotWithInterval() {
        let obs$ = interval(1000).pipe(
            publish()
        ) as ConnectableObservable<any>;
        obs$.connect();
        setTimeout(() => {
            obs$.subscribe(data => { console.log("1st subscriber:" + data) });
            setTimeout(() => {
                obs$.subscribe(data => { console.log("2st subscriber:" + data) });
            }, 1100);
        }, 2100);

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