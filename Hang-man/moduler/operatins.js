
//SLUTANIMERING EFTER RÄTT GISSAT ORD -> RUTORNA KRYMPER OCH KOMMER TILLBAKA
let animering = () => {
    anime({
       targets: '.alfabetet>button',
       scale: [
         {value: .0, easing: 'easeOutSine', duration: 400},
         {value: 1, easing: 'easeInOutQuad', duration: 1200}
       ],
       delay: anime.stagger(200, {grid: [6, 5], from: 'center'})
     });  
};


export { animering };