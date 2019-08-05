import {Injectable} from '@angular/core';
import {Http, Response, RequestOptions, Headers, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
class PanelService {
  constructor(private http: Http) {}
  public getCoffeeResources() {
    return this.http.get('http://localhost:3000/resources').map((res: Response) => {
      const data = res.json();
      localStorage.setItem('resources', JSON.stringify(data));
      return data;
    });
  }
  public getClientData () {
    return this.http.get('http://localhost:3000/client').map((res: Response) => {
        const data = res.json();
        localStorage.setItem('client', JSON.stringify(data));
        return data;
    });
  }
  public saveCoffeeResources (data) {
    return this.http.put('http://localhost:3000/resources', data).map((res: Response) => {
      console.log(res);
      return res.json;
    });
  }
}

export {PanelService};
