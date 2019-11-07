let APIURL = '';

switch(window.location.hostname) {
    //Local host name of react app
    case 'localhost' || '127.0.0.1': 
        //Local host of API 
        APIURL = 'http://localhost:3000'
        break;
    //Deployed version of React App
    case 'kerv-doggo-client.herokuapp.com':
    //Full URL of deployed API 
    APIURL = 'https://kerv-doggo-server.herokuapp.com';
}

export default APIURL;