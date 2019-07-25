import { Injectable } from "@angular/core";
import { Subject, Observable, BehaviorSubject, ReplaySubject, AsyncSubject } from "rxjs";


@Injectable()
export class MessageService {
    private shareData: Subject<string> = new Subject<string>();

    private behaviorSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
    currentBehaviorSubject = this.behaviorSubject.asObservable();

    private replaySubject: ReplaySubject<number> = new ReplaySubject<number>(3);

    private asyncSubject: AsyncSubject<number> = new AsyncSubject<number>();

    sendData(value: string) {
        this.shareData.next(value);
    }
    getData(): Observable<string> {
        return this.shareData.asObservable();
    }

    updateBehaviorSubject() {
        this.behaviorSubject.next(2);
    }

    sendReplaySubject() {
        this.replaySubject.next(1);
        this.replaySubject.next(2);
        this.replaySubject.next(3);
        this.replaySubject.next(4);
        this.replaySubject.next(5);
    }
    getReplaySubject(): Observable<any> {
        return this.replaySubject.asObservable();
    }

    sendAsyncSubject() {
        this.asyncSubject.next(10001);
        this.asyncSubject.next(10002);
        this.asyncSubject.next(10003);
        this.asyncSubject.complete();
    }
    getAsyncSubject() {
        return this.asyncSubject.asObservable();
    }


}