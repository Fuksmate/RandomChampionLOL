import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  ApiKey= "RGAPI-1a2f3457-be32-4b1d-88c6-e6a13449ecf0"
  constructor(private httpClient: HttpClient) { }
    public getISplashArt(e) {
      return this.httpClient.get('http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + e +'_0.jpg',{ responseType: 'blob'  })
    }
    public ImageQ(e) {
      return this.httpClient.get('http://ddragon.leagueoflegends.com/cdn/11.4.1/img/spell/' + e ,{ responseType: 'blob'  })
    }
    public ImageW(e) {
      return this.httpClient.get('http://ddragon.leagueoflegends.com/cdn/11.4.1/img/spell/' + e ,{ responseType: 'blob'  })
    }
    public ImageE(e) {
      return this.httpClient.get('http://ddragon.leagueoflegends.com/cdn/11.4.1/img/spell/' + e ,{ responseType: 'blob'  })
    }
    public ImageR(e) {
      return this.httpClient.get('http://ddragon.leagueoflegends.com/cdn/11.4.1/img/spell/' + e ,{ responseType: 'blob'  })
    }
    public championInformation(e) {
      return this.httpClient.get('http://ddragon.leagueoflegends.com/cdn/11.4.1/data/pl_PL/champion/' + e + '.json')
    }
}
