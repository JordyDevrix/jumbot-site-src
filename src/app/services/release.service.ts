import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {
  constructor(private http: HttpClient) {
  }

  public getReleases(): any {
    this.http.get<any>('https://github.com/JordyDevrix/discord-testbot/releases').subscribe(data => {
      console.log(data);
      return data;
    })
  }
}
