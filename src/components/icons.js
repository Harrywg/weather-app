import a from '../images/weather-icons/01d.svg';
import b from '../images/weather-icons/01n.svg';
import c from '../images/weather-icons/02d.svg';
import d from '../images/weather-icons/02n.svg';
import e from '../images/weather-icons/03d.svg';
import f from '../images/weather-icons/03n.svg';
import g from '../images/weather-icons/04d.svg';
import h from '../images/weather-icons/04n.svg';
import i from '../images/weather-icons/09d.svg';
import j from '../images/weather-icons/09n.svg';
import k from '../images/weather-icons/10d.svg';
import l from '../images/weather-icons/10n.svg';
import m from '../images/weather-icons/11d.svg';
import n from '../images/weather-icons/11n.svg';
import o from '../images/weather-icons/13d.svg';
import p from '../images/weather-icons/13n.svg';
import q from '../images/weather-icons/50d.svg';
import r from '../images/weather-icons/50n.svg';


export const images = [
    { url: a, key: "01d" },
    { url: b, key: "01n" },
    { url: c, key: "02d" },
    { url: d, key: "02n" },
    { url: e, key: "03d" },
    { url: f, key: "03n" },
    { url: g, key: "04d" },
    { url: h, key: "04n" },
    { url: i, key: "09d" },
    { url: j, key: "09n" },
    { url: k, key: "10d" },
    { url: l, key: "10n" },
    { url: m, key: "11d" },
    { url: n, key: "11n" },
    { url: o, key: "13d" },
    { url: p, key: "13n" },
    { url: q, key: "50d" },
    { url: r, key: "50n" }
];


export function findIcon(icon) {
    let result
    images.forEach((image) => {
        if (image.key === icon) result = image.url
    })
    return result
}