const chaptersObj = {
intro  :{
    subtitle : "Le réveil",
    text : "Tu te réveilles au beau milieu de la forêt. Tu te demandes où aller alors tu te fis à ton instinct d'aventurier.",
    img : "assets/intro.jpg",
    audio : "assets/woosh.mp3",
    options: [sentier = {
        text : "Aller dans le sentier",
        action: "goToChapter('sentier')"},
        raccourci = {
            text : "Aller dans le raccourci",
            action: "goToChapter('raccourci')"}
    ]
}
,
sentier  :{
    subtitle : "Le sentier",
    text : "Tu marches dans un sentier qui à l'air d'avoir été utilisé assez souvent, ce qui te rassures, mais tu te demandes combien de temps tu devras encore marcher pour te rendres dans le lieu habité le plus proche. Tu dois cependant décidé du prochain chemin que tu emprunteras.",
    img : "assets/sentier.jpg",
    audio : "assets/woosh.mp3",
    options: [droite = {
        text : "Aller à droite",
        action: "goToChapter('droite')"},
        gauche = {
            text : "Aller à gauche",
            action: "goToChapter('gauche')"}
    ]
}
, 
raccourci  :{
    subtitle : "Un raccourci",
    text : "Tu marches dans la forêt en empruntant un chemin qui n'a surement jamais été touché par notre espèce, mais malgré les signes évident qui te dises de rebrousser chemin, tu continue. Tu montes un dénivelé qui te permet de voir les environs. Ça risque de t'aider dans ta décision.",
    img : "assets/raccourci.jpg",
    audio : "assets/woosh.mp3",
    options: [sentier = {
        text : "Aller vers le lac",
        action: "goToChapter('lac')"},
        cabane = {
            text : "Aller vers la cabane",
            action: "goToChapter('cabane')"}
    ]
}
, 
droite  :{
    subtitle : "La droite",
    text : "En allant à droite, tu croises un sac qui te parrais bien vide.",
    img : "assets/droite.jpg",
    audio : "assets/woosh.mp3",
    options: [fouiller = {
        text : "Fouiller le sac",
        action: "getAlumette1()"},
        continuer = {
            text : "Continuer votre chemin",
            action: "goToChapter('continuer')"}
    ]
}
, 
gauche  :{
    subtitle : "La fin",
    text : "En allant à gauche, tu trouve la civilisation se qui te permet de survivre. Bravo tu as réussi!",
    img : "assets/gauche.jpg",
    audio : "assets/woosh.mp3",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
, 
lac  :{
    subtitle : "Le lac",
    text : "Tu vas au lac et tu te rends compte que l'eau est transparente donc tu te demandes si tu devrais la boire.",
    img : "assets/lac.jpg",
    audio : "assets/woosh.mp3",
    options: [boire = {
        text : "Boire l'eau du lac",
        action: "goToChapter('boire')"},
        eviter = {
            text : "Éviter l'eau du lac",
            action: "goToChapter('eviter')"}
    ]
}
, 
cabane  :{
    subtitle : "La cabane",
    text : "Arrivé à la cabane, tu vois plusieurs entrées possible.",
    img : "assets/cabane.jpg",
    audio : "assets/woosh.mp3",
    options: [fenetre = {
        text : "Entrer par la fenêtre",
        action: "goToChapter('fenetre')"},
        porte = {
            text : "Entrer par la porte",
            action: "goToChapter('porte')"}
            ,
        toit = {
            text : "Entrer par le toit",
            action: "goToChapter('toit')"}
    ]
}
,
fouiller  :{
    subtitle : "Fouille du sac",
    text : "Tu fouilles le sac et tu tombe sur des alumettes.Tu dois décider de ta prochaine direction.",
    img : "assets/fouiller.jpg",
    audio : "assets/woosh.mp3",
    video : "assets/fouiller.mp4",
    options: [nord = {
        text : "Aller vers le nord",
        action: "goToChapter('nord')"},
        lac = {
            text : "Aller vers le sud",
            action: "goToChapter('lac')"}
    ]
}
,
continuer  :{
    subtitle : "La nuit tombe",
    text : "La nuit tombe et tu n'as plus d'énergie donc tu tombe d'une falaise en ayant un petit coup de déconcentration",
    img : "assets/continuer.jpg",
    audio : "assets/woosh.mp3",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
,
boire  :{
    subtitle : "Qu'est-ce que c'est bon!",
    text : "Tu te sens de nouveau idraté, donc tu décide de reprendre ton chemin. Tu arrive à une intersection.",
    img : "assets/boire.jpg",
    audio : "assets/woosh.mp3",
    options: [ouest = {
        text : "Aller vers l'ouest'",
        action: "goToChapter('ouest')"},
        est = {
            text : "Aller vers l'est",
            action: "goToChapter('est')"}
    ]
}
,
eviter  :{
    subtitle : "La désidratation",
    text : "La chaleure du soleil s'amplifie. Tu est assoifé donc tu t'évanouie en plein soleil",
    img : "assets/eviter.jpg",
    audio : "assets/woosh.mp3",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
,
fenetre  :{
    subtitle : "La fenêtre",
    text : "En passant par la fenêtre, tu te coupe la jambe avec du verre, tu commence à saigner tellement que tu t'évanouies",
    img : "assets/fenetre.jpg",
    audio : "assets/woosh.mp3",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
,
porte  :{
    subtitle : "La porte",
    text : "Voilà de bonne manière! Une petite visite s'impose.",
    img : "assets/porte.jpg",
    audio : "assets/woosh.mp3",
    options: [chambre = {
        text : "Aller dans la chambre",
        action: "goToChapter('chambre')"},
        cuisine = {
            text : "Aller dans la cuisine",
            action: "getAlumette2()"}
    ]
}
,
toit  :{
    subtitle : "Le toit",
    text : "Tu tombes dans un trou du toit. Tu meurs.",
    img : "assets/toit.jpg",
    audio : "assets/woosh.mp3",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
,
nord :{
    subtitle : "Le nord",
    text : "Un serpent t'attaque et bien que tu aies un couteau, tu meurs dans d'atroces souffrances.",
    img : "assets/nord.jpg",
    audio : "assets/woosh.mp3",
    video : "assets/nord.mp4",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
,
ouest  :{
    subtitle : "L'ouest",
    text : "La nuit tombe.Il faut se faire un feu pour survivre.",
    img : "assets/ouest.jpg",
    audio : "assets/woosh.mp3",
    options: [alumette = {
        text : "Est-ce que tu as des alumettes?",
        action: "ouialumette()"}
    ]
}
,
est  :{
    subtitle : "Le trou",
    text : "Tu tombes dans un trou ce qui te casses les jambes donc tu meurs de froid pendant la nuit",
    img : "assets/est.jpg",
    audio : "assets/woosh.mp3",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
,
pas_alumette  :{
    subtitle : "Le froid",
    text : "Tu meurs de froid",
    img : "assets/pas_alumette.jpg",
    audio : "assets/woosh.mp3",
    options: [intro = {
        text : "Revenir au début", 
        action: "goToChapter('intro')"},
    ]
}
,
chambre  :{
    subtitle : "La chambre",
    text : "Il y avait un piège à ours sur le sol et tu ne l'avais pas vu donc tu meurs à cause d'une perte de sang exagéré",
    img : "assets/chambre.jpg",
    audio : "assets/woosh.mp3",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
,
cuisine  :{
    subtitle : "La cuisine",
    text : "Tu trouves des alumettes dans un tirroir. Tu sors de la cabane et tu dois choisir un chemin.",
    img : "assets/cuisine.jpg",
    audio : "assets/woosh.mp3",
    video : "assets/cuisine.mp4",
    options: [ouest = {
        text : "Aller vers l'ouest'",
        action: "goToChapter('ouest')"},
        est = {
            text : "Aller vers l'est",
            action: "goToChapter('est')"}
    ]
}
,
alumette  :{
    subtitle : "La fin",
    text : "Tu réussi à allumer un feu donc tu survie à la nuit et le matin tu te réveil dans un hôpital. Bravo tu as réussi!",
    img : "assets/alumette.jpg",
    audio : "assets/woosh.mp3",
    video : "assets/alumette.mp4",
    options: [intro = {
        text : "Revenir au début",
        action: "goToChapter('intro')"},
    ]
}
};

function goToChapter(chapterName) {
    localStorage.setItem("chapitre",chapterName)
    let chapterSubtitle = chaptersObj[chapterName]["subtitle"];
    let chapterText = chaptersObj[chapterName]["text"];
    let chapterImg = chaptersObj[chapterName]["img"];
    let chapterOptions = chaptersObj[chapterName]["options"];
    let chapterVideo = chaptersObj[chapterName]["video"];
    let chapterAudio = chaptersObj[chapterName]["audio"];

    let HTMLsubtitle = document.querySelector(".titre");
    let HTMLtext = document.querySelector(".texte");
    let HTMLimage = document.getElementById("photo");
    let HTMLvideo = document.getElementById("video");
    let HTMLaudio = document.getElementById("audio");

    HTMLsubtitle.innerHTML = chapterSubtitle;
    HTMLtext.innerHTML = chapterText;
    HTMLimage.src = chapterImg;
    HTMLvideo.src = chapterVideo;
    HTMLaudio.src = chapterAudio;
    let button = document.querySelectorAll(".btn");

    
if(chapterVideo!=undefined) {
    HTMLvideo.classList.remove("none");
    HTMLimage.classList.add("none");
        } else {
            HTMLvideo.classList.add("none");
            HTMLimage.classList.remove("none");
        }

    for(let index = 0; index <= 2; index++) {
        if(chapterOptions[index]!=undefined) {
            button[index].innerHTML = ((chapterOptions[index].text));
            button[index].setAttribute("onclick",chapterOptions[index].action);
            button[index].classList.remove("none");
        } else {
            button[index].classList.add("none");
        }
    };

let checkbox = document.querySelector(".son");
if (checkbox.checked==true) {
    HTMLaudio.play();
} else {
    HTMLaudio.pause();
}; 

};
    
let sauvegarde = localStorage.getItem("chapitre")
if(sauvegarde==null) {
   goToChapter("intro");
    console.log("intro")
} else {
    goToChapter(sauvegarde);
    console.log(sauvegarde)
};

function reset(){
    goToChapter("intro");
    localStorage.clear;
}


let alumette1Obtained = false;
let alumette2Obtained = false;

function getAlumette1(){
    alumette1Obtained = true;
    goToChapter("fouiller");
    localStorage.setItem("alumette", true);
}

function getAlumette2(){
    alumette2Obtained = true;
    goToChapter("cuisine");
    localStorage.setItem("alumette", true);
}

function ouialumette(){
    if (alumette1Obtained === true){
    goToChapter("alumette");
} else if (alumette2Obtained === true){
    goToChapter("alumette");
} else { goToChapter("pas_alumette"); 
}
}

function resetItems(){
    alumette1Obtained = false;
    alumette2Obtained = false;
    goToChapter("intro");
    console.log("resetted items");
    localStorage.setItem("alumette", false);
}

    goToChapter(localStorage.getItem("chapitre"));
    localStorage.getItem("alumette");

