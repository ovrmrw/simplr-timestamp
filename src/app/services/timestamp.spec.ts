// import 'rxjs/Rx';
import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { Simplr, Action, Wrapper, SimplrModule } from 'ngrx-store-simplr';
import { TimestampService } from './timestamp';
import { NictService } from './nict';


interface TestState {
  timestamp: {
    local: number,
    server: number,
    timelag: number,
  };
}

const initialState: TestState = {
  timestamp: {
    local: 0,
    server: 0,
    timelag: 0,
  }
};

const { _UPDATE_, _FAILED_ } = new Wrapper<TestState>().getActionKeysForSimplr('timestamp');


describe('TimestampService', () => {
  let simplr: Simplr<TestState>;
  let service: TimestampService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      SimplrModule.forTesting<TestState>({ ...initialState }),
    ],
    providers: [
      TimestampService,
      { provide: NictService, useValue: jasmine.createSpyObj('nict', ['requestLocalTimestamp', 'requestServerTimestamp']) },
    ]
  }));

  beforeEach(() => {
    simplr = TestBed.get(Simplr);
    service = TestBed.get(TimestampService);
    const nict = TestBed.get(NictService);
    nict.requestLocalTimestamp.and.returnValue(Observable.of(1));
    nict.requestServerTimestamp.and.returnValue(Observable.of(3));
  });

  it('getLocalTimestamp', fakeAsync(() => {
    let action: Action;
    service.getLocalTimestamp().subscribe(a => action = a);
    tick();
    expect(action).toEqual({ type: _UPDATE_, payload: { local: 1, server: 0, timelag: 0 } });
  }));

  it('getServerTimestamp', fakeAsync(() => {
    let action: Action;
    service.getServerTimestamp().subscribe(a => action = a);
    tick();
    expect(action).toEqual({ type: _UPDATE_, payload: { local: 0, server: 3, timelag: 0 } });
  }));

  it('getBothTimestamp', fakeAsync(() => {
    let actions: Action[];
    service.getBothTimestamp().subscribe(a => actions = a);
    tick();
    expect(actions).toEqual([
      { type: _UPDATE_, payload: { local: 1, server: 0, timelag: 0 } },
      { type: _UPDATE_, payload: { local: 1, server: 3, timelag: 2 } },
    ]);
  }));
});
