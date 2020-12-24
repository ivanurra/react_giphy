// YOU NEED A API KEY FROM GIPHY DEV WEB
const apiCall = fetch (`http://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_KEY}`);

apiCall
  .then (res => res.json())
  .then (({data}) => {
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
  })
  .catch (console.warn)