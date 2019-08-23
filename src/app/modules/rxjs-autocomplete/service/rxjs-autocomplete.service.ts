import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

import { SearchResult } from "../interface/rxjs-autocomplete.interface";

@Injectable()
export class RxjsAutocompleteService {

    constructor(private http: HttpClient) { }

    searchUser(val: any) {
        return this.http.get<Observable<SearchResult>>("https://api.github.com/search/users?q=" + val)
            .pipe(
                map(response => response),
                catchError((error) => {
                    console.log("something went wrong, " + error);
                    return of([]);
                })
            )

    }


}