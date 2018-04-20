/*eslint-env browser*/

var $ = function (id) {
    return window.document.getElementById(id);
}

var Jukebox = function () {
    "use strict";
    var albums = [],
        self;

    self = {
        addAlbum: function (album) {
            albums.push(album);
        },
        favoriteAlbum: function () {
            var max = -1,
                fav, i;

            for (i = 0; i < albums.length; i += 1) {
                if (albums[i].played > max) {
                    max = albums[i].played;
                    fav = albums[i];
                }
            }
            return fav.display();
        }
    };
    return self;
};

var Album = function (artist, title) {
    "use strict";
    var self = {
        played: 0,
        play: function () {
            self.played += 1;
        },
        display: function () {
            return artist + " : " + title + ". The album has been played " + this.played + " times.";
        }
    };
    return self;
};


function play() {
    var jukeboxVal = $("jukebox").value;
    //    jukeboxVal = jukeboxVal.split(",");
    //    window.console.log(jukeboxVal[0],jukeboxVal[1]);
    var x = window.document.getElementsByTagName("option")
    //    window.console.log(x[0].textContent.split("-"))
    var albums = [];
    for (var i = 0; i < x.length; i = i + 1) {
        if(x[i].textContent === jukeboxVal){
            window.console.log(x[i].textContent);
            var y = x[i].textContent.split("-");
            window.console.log(y[0]);
            albums[i] = new Album(y[0],y[1]);
            var z = albums[i];
            jbox.addAlbum(z);
            albums[i].play();
            
        }
    }
    window.console.log(z);

//    if (x[i].textContent === jukeboxVal) {
//        window.console.log("AFI")
//    } else if (x[i].textContent === jukeboxVal) {
//        window.console.log("Blink")
//    } else if (x[i].textContent === jukeboxVal) {
//        window.console.log("kendirck");
//    } else if (x[i].textContent === jukeboxVal) {
//        window.console.log("rise");
//    }
}

function showAlbum() {
    window.console.log("Your favorite Album is " + jbox.favoriteAlbum());
}


var $ = function (id) {
    return window.document.getElementById(id);
}
var playButton = $("play");
var showButton = $("favAlbum");
window.console.log(window.document.getElementById("play"));
//window.addEventListener("load",init);
playButton.addEventListener("click", play);
showButton.addEventListener("click", showAlbum);
var jbox = new Jukebox();
//var album1 = new Album("Operation Ivy", "Energy");
//var album2 = new Album("Blink 182", "Dude Ranch");
//var album3 = new Album("New Found Glory", "Sticks and Stones");

//jbox.addAlbum(album1);
//jbox.addAlbum(album2);
//jbox.addAlbum(album3);
//
//album1.play();
//album1.play();
//album1.play();
//album2.play();
//album3.play();
//
window.console.log("You favorite album is: " + jbox.favoriteAlbum());
