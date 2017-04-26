import { TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { NictService } from './nict';

const NICT_API = 'https://ntp-a1.nict.go.jp/cgi-bin/json';


describe('NictService Test', () => {
  let service: NictService = null;
  let backend: MockBackend = null;

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MockBackend,
      BaseRequestOptions,
      {
        provide: Http,
        useFactory: (_backend: MockBackend, _options: BaseRequestOptions) => {
          return new Http(_backend, _options);
        },
        deps: [MockBackend, BaseRequestOptions]
      },
      NictService,
    ]
  }));

  beforeEach(() => {
    service = TestBed.get(NictService);
    backend = TestBed.get(MockBackend);
  });

  it('requestServerTimestamp', async () => {
    backend.connections.subscribe((connection: MockConnection) => {
      const options = new ResponseOptions({
        body: JSON.stringify({ st: 1 })
      });
      connection.mockRespond(new Response(options));
      expect(connection.request.method).toEqual(RequestMethod.Get);
      expect(connection.request.url).toEqual(NICT_API);
    });

    const res = await service.requestServerTimestamp().toPromise();
    expect(res).toBe(1000);
  });
});
