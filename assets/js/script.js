//Trabajo hecho en Equipo :face_with_monocle:: Felipe Oyarzun - Tere Olivares - Araceli Vera

//Clase Padre
class Multimedia {
    #url; //Para que quede privado
    constructor(url) {
        this.#url = url;
    }
    get url() {
        return this.#url;
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}
//Clase Hija
class Reproductor extends Multimedia {
    #id;
    constructor(url, id) {
        super(url);
        this.#id = id;
    }
    playMultimedia() {
        reproductor.verVideo(this.url, this.#id); //Se reproduce el video dentro de los iframes
    }
    setInicio(tiempo) {
        let nuevaUrl = `${this.url}&amp;start=${tiempo}`;
        reproductor.verVideo(nuevaUrl, this.#id);
    }
}
//IIFE
let reproductor = (() => {
    let verVideo = (url, id) => {
    document.getElementById(id).setAttribute("src", url)
    }
    return {verVideo}
    })()
const musica = new Reproductor("https://www.youtube.com/embed/2Rd0aSO59bE?si=e57_Tu_jKgsXclkD", "musica");
const pelicula = new Reproductor("https://www.youtube.com/embed/uDzfa0w86Vw?si=JLS62mQjEbORfiWf", "peliculas");
const serie = new Reproductor("https://www.youtube.com/embed/yyGetSp7CIc?si=2G9ocokfqhtqWT45", "series");
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
pelicula.setInicio(30);
serie.setInicio(20);


