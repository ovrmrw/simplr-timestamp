import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


@Injectable()
export class NictService {
  constructor(
    private http: Http,
  ) { }

  requestLocalTimestamp(): Observable<number> {
    return Observable.of(new Date().getTime());
  }

  requestServerTimestamp(): Observable<number> {
    return this.http.get('https://ntp-a1.nict.go.jp/cgi-bin/json')
      .map(res => res.json() as { st: number })
      .map(data => data.st * 1000);
  }
}

/*
  Response Structure
  {
    "id": "ntp-a1.nict.go.jp",
    "it": 0.000,
    "st": 1492853474.226,
    "leap": 36,
    "next": 1483228800,
    "step": 1
  }
*/
