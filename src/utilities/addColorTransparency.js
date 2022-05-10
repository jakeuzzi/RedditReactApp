
const addColorTransparency = (colorObj, transparency = "45%") => {
    return `rgb(${colorObj._rgb[0]} ${colorObj._rgb[1]} ${colorObj._rgb[2]} / ${transparency})`;
}

export default addColorTransparency;