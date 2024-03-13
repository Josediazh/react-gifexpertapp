export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=EhEZN5Ulb0s6mlIjP3dddTwgBQdPjM2O&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} =  await resp.json();
    const gifs = data.map(imgs  =>  ({
        id: imgs.id,
        title: imgs.title,
        imgurl: imgs.images.downsized_medium.url
    }) )
    return gifs;
  }