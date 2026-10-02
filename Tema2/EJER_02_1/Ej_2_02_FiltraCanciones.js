const playlist = [

  {

    titulo: "Blinding Lights",
    artista: "The Weeknd",
    duracion: 200

  },

  {

    titulo: "Shape of You",
    artista: "Ed Sheeran",
    duracion: 234

  },

  {

    titulo: "Levitating",
    artista: "Dua Lipa",
    duracion: 203

  },

  {

    titulo: "As It Was",
    artista: "Harry Styles",
    duracion: 167

  },

  {

    titulo: "Bad Guy",
    artista: "Billie Eilish",
    duracion: 194

  },

  {

    titulo: "Watermelon Sugar",
    artista: "Harry Styles",
    duracion: 174

  },

  {

    titulo: "Uptown Funk",
    artista: "Mark Ronson ft. Bruno Mars",
    duracion: 270

  },

  {

    titulo: "Rolling in the Deep",
    artista: "Adele",
    duracion: 228
  },

  {

    titulo: "Believer",
    artista: "Imagine Dragons",
    duracion: 204

  },

  {

    titulo: "Havana",
    artista: "Camila Cabello",
    duracion: 217

  }

]

playlist.forEach((cancion) => {

    console.log(`${cancion.titulo} - ${cancion.artista}`)
    
})


const cancionesLargas = playlist.filter(cancion => {
    return cancion.duracion > 180;
});

const mensajes = cancionesLargas.map(cancion => {
    return `La canción '${cancion.titulo}' de ${cancion.artista} dura ${cancion.duracion} segundos.`;
});

console.log(mensajes);