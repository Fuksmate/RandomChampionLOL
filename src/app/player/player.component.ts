import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  title = 'JavaLeaderAngularApp';
  constructor(private apiService: ApiService) { }

  player: any;
  championSplaszArt: any;
  QArt: any;
  WArt: any;
  EArt: any;
  RArt: any;
  QName: string;
  WName: string;
  EName: string;
  RName: string;
  championName: string;
  allChampion = ["Aatrox","Ahri","Akali","Alistar","Amumu","Anivia","Annie","Aphelios","Ashe","AurelionSol","Azir","Bard","Blitzcrank","Brand","Braum","Caitlyn","Camille","Cassiopeia","Chogath","Corki","Darius","Diana","Draven","DrMundo","Ekko","Elise","Evelynn","Ezreal","Fiddlesticks","Fiora","Fizz","Galio","Gangplank","Garen","Gnar","Gragas","Graves","Hecarim","Heimerdinger","Illaoi","Irelia","Ivern","Janna","JarvanIV","Jax","Jayce","Jhin","Jinx","Kaisa","Kalista","Karma","Karthus","Kassadin","Katarina","Kayle","Kayn","Kennen","Khazix","Kindred","Kled","KogMaw","Leblanc","LeeSin","Leona","Lillia","Lissandra","Lucian","Lulu","Lux","Malphite","Malzahar","Maokai","MasterYi","MissFortune","MonkeyKing","Mordekaiser","Morgana","Nami","Nasus","Nautilus","Neeko","Nidalee","Nocturne","Nunu","Olaf","Orianna","Ornn","Pantheon","Poppy","Pyke","Qiyana","Quinn","Rakan","Rammus","RekSai","Rell","Renekton","Rengar","Riven","Rumble","Ryze","Samira","Sejuani","Senna","Seraphine","Sett","Shaco","Shen","Shyvana","Singed","Sion","Sivir","Skarner","Sona","Soraka","Swain","Sylas","Syndra","TahmKench","Taliyah","Talon","Taric","Teemo","Thresh","Tristana","Trundle","Tryndamere","TwistedFate","Twitch","Udyr","Urgot","Varus","Vayne","Veigar","Velkoz","Vi","Viego","Viktor","Vladimir","Volibear","Warwick","Xayah","Xerath","XinZhao","Yasuo","Yone","Yorick","Yuumi","Zac","Zed","Ziggs","Zilean","Zoe","Zyra"]
  SplashArt(e){
    this.apiService.getISplashArt(e).subscribe((response)=>{
      var reader = new FileReader ();
      reader.readAsDataURL(response);
      reader.onload = (_event) => {
      this.championSplaszArt = reader.result;
      }
    });
  }
  ImageQ(e){
    this.apiService.ImageQ(e).subscribe((response)=>{
      var reader = new FileReader ();
      reader.readAsDataURL(response);
      reader.onload = (_event) => {
      this.QArt = reader.result;
      }
    });
  }
  ImageW(e){
    this.apiService.ImageW(e).subscribe((response)=>{
      var reader = new FileReader ();
      reader.readAsDataURL(response);
      reader.onload = (_event) => {
      this.WArt = reader.result;
      }
    });
  }
  ImageE(e){
    this.apiService.ImageE(e).subscribe((response)=>{
      var reader = new FileReader ();
      reader.readAsDataURL(response);
      reader.onload = (_event) => {
      this.EArt = reader.result;
      }
    });
  }
  ImageR(e){
    this.apiService.ImageR(e).subscribe((response)=>{
      var reader = new FileReader ();
      reader.readAsDataURL(response);
      reader.onload = (_event) => {
      this.RArt = reader.result;
      }
    });
  }
  championInformation(e){
    this.apiService.championInformation(e).subscribe((response : any)=>{
      this.ImageQ(response.data[`${this.championName}`].spells[0].image.full)
      this.ImageW(response.data[`${this.championName}`].spells[1].image.full)
      this.ImageE(response.data[`${this.championName}`].spells[2].image.full)
      this.ImageR(response.data[`${this.championName}`].spells[3].image.full)
      this.QName = response.data[`${this.championName}`].spells[0].name
      this.WName= response.data[`${this.championName}`].spells[1].name
      this.EName = response.data[`${this.championName}`].spells[2].name
      this.RName = response.data[`${this.championName}`].spells[3].name
    });
  }

  ngOnInit() {
    const randomNumber = Math.floor(Math.random()* (153 - 0) + 0)
    this.championName = this.allChampion[randomNumber]
    this.SplashArt(this.championName)
    this.championInformation(this.championName)

  }
}
