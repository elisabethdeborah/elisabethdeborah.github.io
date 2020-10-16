
//DENNA FIL ANVÄNDS ENDAST AV MY-TOMATOES-FLIK-FINAL-TOMAT.HTML

//ANIMATIONER
anime({
    targets: 'section#animera-logga-new',
        translateY: [
            {value:800, duration:700, delay:800, easing:'easeInOutSine'},
            {value:550, duration:850},
        ],
        translateX: [
            {value:'100%', duration:1000, delay:800, easing:'easeInOutSine'}
        ],
        skewX:[
            {value:30, duration:100, delay:1000,easing:'easeInOutSine'},
            {value:-25, delay:10, easing:'easeInOutSine'},
            {value:0, easing:'easeInOutSine'},
        ],
        scale:[
            {value: 1.3, duration: 500, delay:1500,easing:'easeOutSine'}
        ],
        rotate:{
            value: '2turn', delay:1100,
            easing: 'easeInOutSine'
        }
    });

anime({
    targets: 'section#animera-h1-mytomatoes',
        translateY: [
            {value:67, delay:2000, duration:2000},
        ],
        skewY:[
            {value:-15, delay:10, easing:'easeInOutSine'},
            {value:0, easing:'easeInOutSine'},
        ],
});
