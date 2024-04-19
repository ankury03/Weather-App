const key = '66D1NjeuyrloaR2zEmXOb5AWlbhGEkeZ';

const getWeather = async (id) => {
    const area = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(area + query);
    const data = await response.json();
    return data[0];
};

const getCity = async (city) => {
    const area = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;
    const response = await fetch(area + query);
    const data = await response.json();
    return data[0];
};