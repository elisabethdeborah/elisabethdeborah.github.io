const main=document.querySelector('main');
const header=document.querySelector('header');
const tid=document.querySelector('.tid');
const nyTidVisa=document.querySelector('.ny-tid');
const regnNu=document.querySelector('.regn-nu');
const yesRestauranger=document.querySelector('ul#yes-restauranger');
const infoRestauranger=document.querySelector('#info-restauranger');
const slumpaKnapp=document.querySelector('.slumpa-knapp');
const slumpRestaurang=document.querySelector('#slump-restaurang');
const restaurangRubrik=document.querySelector('#restauranger-rubrik');
const displayList=document.getElementById('yes-restauranger').innerText;
const restauranger =[];
const listaOlikaTW=[];
const sammaVäder=[]
let regnNuText=regnNu.textContent;
let date=Date();
let kl=date.split(' ').splice(4,1).join('')
let klTimme=kl.split('').splice(0,2).join('')
let tList
let wList

//KARTA ETC
const api_url = 'https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/12.939/lat/57.7210/data.json'
const mymap = L.map('mapid').setView([57.72040, 12.94101], 15);
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);
let circle = L.circle([57.72040, 12.94101], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.3,
    radius: 280
}).addTo(mymap);
const myIcon = L.icon({
    iconUrl: 'img/sol-gul.png',
    iconSize: [38, 38],
    popupAnchor: [0, -10]  
});



class Restaurang{
    constructor(name, foodType, address, latitude, longitude, website, t, w, ikon, src){
    this.name=name;
    this.foodType= foodType;
    this.address=address;
    this.latitude=latitude;
    this.longitude=longitude;
    this.website=website;
    this.t=t;
    this.w=w; 
    this.ikon=ikon;
    this.src=src;
    restauranger.push(this)
    } 
}

const grillOGryta= new Restaurang('Grill & Gryta', 'Persiskt', 'Bäckegränd 5, Borås', '57.71998', '12.94231', '<a style="color:#e56529" href="https://sv-se.facebook.com/grillochgryta/">Grill & Gyta på facebook</a>', [-20,-15,-10,-5,0,5,10,15], [5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27], '<img style="height:50px" src="img/iran.png"/>','Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>')
const FruitsAndFriends=new Restaurang('Fruits & Friends', 'Juicebar', 'Allégatan 48, Borås', '57.72023', '12.94237', '<a style="color:#e56529" href="https://www.fruitsandfriends.se/">fruitsandfriends.se</a>', [15,20,25,30,35], [4,5,6,7,8,9,10,11,18,19,20,21], '<img style="height:50px; border-radius:50%" src="img/blender.png"/>', 'Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const ShawarmaBorås=new Restaurang('Shawarma Borås', 'Mellanöstern', 'Österlånggatan 50, Borås', '57.71993', '12.94171', '<a style="color:#e56529" href="https://sv-se.facebook.com/shawarmaboras">Shawarma Borås på facebook</a>', [10,15,20,25,30,35], [1,2,3,4,5,6,11,21],'<img style="height:60px" src="img/food-and-restaurant.png"/>','Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const YasminGrill=new Restaurang('Yasmin Grill', 'Mellanöstern', 'Allégatan 44, Borås', '57.72060', '12.94214', '<a style="color:#e56529" href="https://sv-se.facebook.com/Yasmin.Grill.44/">Yasmin Grill på facebook</a>', [15,20,25,30,35], [1,2,3],'<img style="height:50px" src="img/food-and-restaurant.png"/>','Icons made by <a href="https://www.flaticon.com/authors/nikita-golubev" title="Nikita Golubev">Nikita Golubev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const Futomaki=new Restaurang('Futomaki', 'sushi' ,'Allégatan 48, Borås', '57.72014', '12.94243', '<a style="color:#e56529" href="http://minmatmeny.se/meny/boras/170/futomaki-sushibar">futomaki-sushibar</a>', [20,25,30,35], [1,2,3,4], '<img style="height:50px" src="img/japan.png"/>','Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const NamasteNepal=new Restaurang('Namaste Nepal', 'Nepalesiskt', 'Allégatan 32, Borås', '57.72173', '12.94138', '<a style="color:#e56529" href="https://www.namastenepal.se/">namastenepal.se</a>', [-20,-15,-10,-5,0,5,10], [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27], '<img style="height:50px" src="img/nepal.png"/>','Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const Tugg=new Restaurang('Tugg Burgers', 'Amerikanskt', 'Västerlånggatan 12, Borås', '57.72193', '12.93818', '<a style="color:#e56529" href="http://www.tuggburgers.se/">tuggburgers.se</a>', [-20,-15,-10,-5,0,5,10,15], [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27], '<img style="height:50px" src="img/united-states.png"/>','Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const RawFoodCafe=new Restaurang('Raw Food Café', 'Raw Food', 'Österlånggatan 61, Borås', '57.71871', '12.94273', '<a style="color:#e56529" href="https://www.rawfoodcafe.se/">rawfoodcafe.se</a>', [10,15,20,25], [1,2,3,4,11,21],'<img style="height:50px; border-radius:50%" src="img/fruit.png"/>', 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const Systramii=new Restaurang('Systramii', 'Raw Food-bar', 'Lilla Brogatan 19, Borås', '57.72031', '12.93983', '<a style="color:#e56529" href="https://www.systramii.se/">systramii.se</a>', [25,30,35], [1,2,3,4,21],'<img style="height:50px; border-radius:50%" src="img/fruit.png"/>', 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')
const Cyrano=new Restaurang('Cyrano', 'Pizza m.m.', 'Österlånggatan 21, Borås', '57.72253', '12.94016', '<a style="color:#e56529" href="https://www.cyrano.se/meny/cyrano-boras">cyrano.se</a>', [-5,0,5,10,15], [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],'<img style="height:50px; border-radius:50%" src="img/pizza.png"/>', 'Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>')




// FUNCTIONS //////////

//FORMATERA DATUM FRÅN ENG TILL SVENSKA
function formateraDatum(){
    let dagensDatum=document.querySelector('.dagens-datum');
    let date=Date();
    let newDate=date.split(' ').splice(0,4)
    if(newDate[0]=="Mon"){
        newDate[0]="måndag"
    } else if(newDate[0]=="Tue"){
        newDate[0]="tisdag"
    } else if(newDate[0]=="Wed"){
        newDate[0]="onsdag"
    } else if(newDate[0]=="Thu"){
        newDate[0]="torsdag"
    }else if (newDate[0]=="Fri"){
        newDate[0]="fredag"
    }else if(newDate[0]=="Sat"){
        newDate[0]="lördag"
    } else if(newDate[0]=="Sun"){
        newDate[0]="söndag"
    };

    if(newDate[1]=="Jan"){
        newDate[1]="januari"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Feb"){
        newDate[1]="februari"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Mar"){
        newDate[1]="mars"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Apr"){
        newDate[1]="april"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="May"){
        newDate[1]="maj"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Jun"){
        newDate[1]="juni"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Jul"){
        newDate[1]="juli"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Aug"){
        newDate[1]="augusti"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Sep"||"Sept"){
        newDate[1]="september"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Oct"){
        newDate[1]="oktober"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Nov"){
        newDate[1]="november"
        dagensDatum.textContent=newDate;
    } else if(newDate[1]=="Dec"){
        newDate[1]="december"
        dagensDatum.textContent=newDate;
    }; 
    newDate.unshift(newDate.splice(2,1))
    newDate.unshift(newDate.splice(1,1))
    dagensDatum.textContent=newDate.join(' ');
}
formateraDatum()

//KLOCKAN 
function sättNyTid(){
    let date=Date(); 
    let nyTid=date.split(' ').splice(4,1)[0] 
    nyTidVisa.textContent=nyTid.split(':').splice(0,2).join(':'); 
} 
setInterval(sättNyTid, 1000)


//HUVUDFUNKTION: SMHI OCH VÄDER + UNDERFUNKTIONER
async function getSMHI(){
    const response=await fetch(api_url);
    const data=await response.json();     
    data.timeSeries.forEach((e)=>{
        let prognosTimme=e.validTime.split('').splice(11,2).join('')
        if((prognosTimme===klTimme)&&(date[9]==e.validTime[9])){
            e.parameters.forEach((e)=>{
                if(e.name==="t"){
                    document.querySelector('.temp-nu').textContent=e.values;
                    document.querySelector('.ruta2').textContent=e.values;
                }else if(e.name==="pcat"){
                    const nederbördNu=e.values
                    nederbördText(nederbördNu)
                }else if(e.name==="Wsymb2"){
                    const väderNu=e.values
                    vädertext(väderNu)
                }
            })
        }
    })
    data.timeSeries.forEach((element)=>{  
        if(klTimme<11){
            prognosData(element)
        }else if(klTimme>13){
            prognosDataImorgon(element)
        } else if(klTimme==11||12||13){
            prognosData(element)
        }
   })   
    restarangPåSida() 
}
getSMHI();
setInterval(getSMHI, 3600000) //uppdatera 1 gång/h


//NUVARANDE VÄDER, I TABELLEN
function vädertext(väderNu){
    if(väderNu<=2){
        document.querySelector('.moln-nu').textContent='soligt';
        document.querySelector('.ruta4').textContent="soligt";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/sol-orange-grå-outline.svg"/>'
    }else if(väderNu==3){
        document.querySelector('.moln-nu').textContent='växlande molnighet';
        document.querySelector('.ruta4').textContent="växlande molnighet";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/sol-moln-ljus.svg"/>'
    } else if(väderNu==4){
        document.querySelector('.moln-nu').textContent='halvklart';
        document.querySelector('.ruta4').textContent="halvklart";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/sol-moln.svg"/>'
    }else if((väderNu>=5)&&(väderNu<21)){
        document.querySelector('.moln-nu').textContent='molnigt';
        document.querySelector('.ruta4').textContent="molnigt";
        if((regnNu.innerText=="ingen nederbörd")&&(väderNu>=5)){
            document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/moln.svg"/>';
        }
    }else if(väderNu==21){
        document.querySelector('.moln-nu').textContent='åska';
        document.querySelector('.ruta4').textContent="åska";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/åska.svg"/>';
    }
}

//NUVARANDE NEDERBÖRD, I TABELLEN
function nederbördText(nederbördNu){
    if(nederbördNu==0){
        document.querySelector('.regn-nu').textContent="ingen nederbörd";
        document.querySelector('.ruta6').textContent="ingen nederbörd";
    }else if(nederbördNu==1){
        document.querySelector('.regn-nu').textContent="snö";
        document.querySelector('.ruta6').textContent="snö";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/snö.svg"/>'
    }else if(nederbördNu==2){
        document.querySelector('.regn-nu').textContent="snöblandat regn";
        document.querySelector('.ruta6').textContent="snöblandat regn";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/snöblandatregn.svg"/>'
    }else if(nederbördNu==3){
        document.querySelector('.regn-nu').textContent="regn";
        document.querySelector('.ruta6').textContent="regn";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/regn.svg"/>'
    }else if(nederbördNu==4){
        document.querySelector('.regn-nu').textContent="duggregn";
        document.querySelector('.ruta6').textContent="duggregn";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/duggregn.svg"/>'
    } else if(nederbördNu==5){
        document.querySelector('.regn-nu').textContent="underkylt regn";
        document.querySelector('.ruta6').textContent="underkylt regn";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/regn.svg"/>'
    }else if(nederbördNu==6){
        document.querySelector('.regn-nu').textContent="fryst duggregn";
        document.querySelector('.ruta6').textContent="fryst duggregn";
        document.querySelector('.väder-bakgrund').innerHTML='<img id="prognos-bild" src="img/duggregn.svg"/>'
    }
}


//PARAR IHOP VÄDER, TEMP OCH RESTAURANG
function restaurangerVäder(t, w){   //t=prognostemp, w=prognosväder
    restauranger.forEach((element)=>{  //element.t=restaurang-temp, element.w=retaurang-väder
        tList=element.t;
        wList=element.w;
        let jfrt;
        let jfrw;
        wList.forEach((e)=>{
            if(e===w){
                jfrw=element
            }
        })
        tList.forEach((e)=>{
            if(e===t){
                jfrt=element
            } 
        })           
         if(jfrt===jfrw&&jfrt!==undefined){
            if(sammaVäder.includes(jfrt)){
            } else{
                sammaVäder.push(jfrt);
            }
        }    
    })
}


//HUR RESTAURANGER VISAS I LISTAN OCH PÅ KARTAN
function restarangPåSida(){
    sammaVäder.forEach((element)=>{
        if(element!==undefined){
            const listobjekt=document.createElement('li');
            listobjekt.innerHTML=`
                <a class="restaurang-länk" href="#fieldset-restaurang">${element.name}</a>
                `;       
                yesRestauranger.appendChild(listobjekt)
                ;
            sammaVäder.forEach((e) => {
                addEventListener('click', (event)=>{
                    let target=event.target
                    if(target.innerText===element.name){
                        restauranginfo(element)
                    }
                })  
            });
            restauranger.forEach((e)=>{
                if(e===element){
                    L.marker([e.latitude, e.longitude], {icon: myIcon}).bindPopup(`<h3 class="popup-namn">${e.name}</h3> <br> <p id="popup">${e.address} <br>${e.website}</p>`).addTo(mymap).openPopup().riseOnHover;
                    }
                })
        }
    })
}


//INFORUTA FÖR VARJE RESTAURANG, SYNS EFTER KLICKNING
function restauranginfo(element){
    infoRestauranger.style.display="initial"
    infoRestauranger.innerHTML=
        `<ul id="info">
            <li style="font-size: 20px; font-weight: 500">${element.name}</li>
            <li>${element.foodType}</li>
            <li>${element.ikon}</li>
            <li>${element.address}</li>
            <li>${element.website}</li>
            <li style="font-size:12px; margin-top: 10px">${element.src}</li>
            <li><a href="#fieldset-restaurang" id="delete">X</a></li>
        </ul>`
    L.marker([element.latitude, element.longitude], {icon: myIcon}).bindPopup(`<h3 class="popup-namn">${element.name}</h3> <br> <p id="popup">${element.address} <br>${element.website}</p>`).addTo(mymap).openPopup().riseOnHover;
    document.querySelector('#delete').addEventListener('click', (event)=>{
        infoRestauranger.style.display="none";
    })
} 


//LUNCHTIPS-LISTAN NÄR NUVARANDE TID ÄR FÖRE LUNCHTID/UNDER LUNCHTID, REKOMMENDATION FÖR IDAG
function prognosData(element){
    restaurangRubrik.innerText='Lunchtips'
    let dagensDatum=document.querySelector('.dagens-datum');    
    let dagensDatumUppg=dagensDatum.textContent.split(' ').splice(1, 1).join('')  
    let t;
    let w;
    if((element.validTime.split('').splice(8,2).join('')==dagensDatumUppg)&&((element.validTime[11]==1 && element.validTime[12]==1)||(element.validTime[11]==1 && element.validTime[12]==2)||(element.validTime[11]==1 && element.validTime[12]==3))){
        console.log('idag den '+dagensDatumUppg+':e kl '+ element.validTime.split('').splice(11,5).join(''))
        element.parameters.forEach((element)=>{    
            if(element.name=="t"){
                avrundadTemp=(Math.round(element.values[0]))
                tempAvrundadTill5=(Math.round(avrundadTemp / 5) * 5);
                t=tempAvrundadTill5
                console.log('T idag: ', t)
            } 
            if(element.name=="Wsymb2"){
                w=element.values[0]
                console.log('wsymb2 idag: ', w)
            } 
        });           
    return restaurangerVäder(t, w); 
    } 
} 


//LUNCHTIPS-LISTAN NÄR NUVARANDE TID ÄR EFTER LUNCHTID, REKOMMENDATION FÖR IMORGON
function prognosDataImorgon(element){
    restaurangRubrik.innerText='Lunchtips imorgon'
    let dagensDatum=document.querySelector('.dagens-datum');    
    let dagensDatumUppg=dagensDatum.textContent.split(' ').splice(1, 1).join('')  
    let t;
    let w;
    if((element.validTime.split('').splice(8,2).join('')==Number(dagensDatumUppg)+1)&&((element.validTime[11]==1 && element.validTime[12]==1)||(element.validTime[11]==1 && element.validTime[12]==2)||(element.validTime[11]==1 && element.validTime[12]==3))){
        console.log('imorgon den ' +(Number(dagensDatumUppg)+1)+':e kl '+ element.validTime.split('').splice(11,5).join(''))
        listaOlikaTW.push(element.validTime.split('').splice(11,5).join(''))
        element.parameters.forEach((element)=>{
            if(element.name=="t"){
                avrundadTemp=(Math.round(element.values[0]))
                tempAvrundadTill5=(Math.round(avrundadTemp / 5) * 5);
                t=tempAvrundadTill5
                console.log('T imorgon: ', t)
                listaOlikaTW.push(t)
            }  
            if(element.name=="Wsymb2"){
                w=element.values[0]
                console.log('wsymb2 imorgon: ', w)
                listaOlikaTW.push(w)
            }
        }); 
         return restaurangerVäder(t, w);
    } 
}


//SLUMPA RESTAURANGFÖRSLAG VID KNAPPTRYCK
slumpaKnapp.addEventListener('click', (e)=>{
    let väderFörslag=[Math.floor(Math.random() * sammaVäder.length)]
    if(väderFörslag!==undefined){ 
        document.querySelector('#slump-restaurang').innerHTML=sammaVäder[väderFörslag].name;   
    
        restauranger.forEach((e)=>{
            if(e.name===sammaVäder[väderFörslag].name){
                L.marker([e.latitude, e.longitude], {icon: myIcon}).bindPopup(`<h3 class="popup-namn">${e.name}</h3> <br> <p id="popup">${e.address} <br>${e.website}</p>`).addTo(mymap).openPopup();
            }
        })
    }
})
