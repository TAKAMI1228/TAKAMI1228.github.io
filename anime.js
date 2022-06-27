document.querySelector(".square").animate(
    {
        borderRadius: [
            "80% 50% 50% 70%/50% 50% 70% 60%",
            "60% 70% 50% 50%/50%",
            "30% 20% 50% 40%/30% 50% 40% 80%"
        ]
    },
    {
        iterations: Infinity,
        direction: "alternate",
        duration: 7000
    }
);

document.querySelector(".mozi").animate({
    fontSize: '250px'
},
    {
        fill: "forwards",
        duration: 10000,
        easing: "ease-in"
    }
);


document.querySelector(".mozi2").animate({
    fontSize: '30px'
},
    {
        fill: "forwards",
        duration: 1000,
        easing: "ease-in"
    }
);

document.querySelector(".hiyo").animate([
    { transform: 'translate(-50%,-50%) scale(1)' },
    { transform: 'translate(-50%,-50%) scale(2)' }
],
    {
        fill: "forwards",
        duration: 10000,
        easing: "ease-in"
    }
);