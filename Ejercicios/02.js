function nomresu(ancho, alto){
    if (ancho > 7680 && alto > 4320) {
        return '8k';
    } else if  (ancho > 3840 && alto > 2160) {
        return '4k';
    } else if (ancho > 2560 && alto > 1440) {
        return 'WKHD';
    }if (ancho > 1920 && alto > 1080) {
        return 'FHD';
    } else if (ancho > 1280 && alto > 720) {
        return 'HD';
    }
}

let nombre =nomresu(1366,768);
console.log(nombre)