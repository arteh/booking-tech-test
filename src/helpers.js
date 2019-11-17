import axios from 'axios';

export const getLocations = search_term => {
    console.log('get data')

    return axios
        .get(`https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows=12&solrTerm=${search_term}`)
        .then((response) => {

            let data = response.data.hasOwnProperty('results') ? response.data.results.docs : []; 
            return data;
    })
}
      
// https://cors.io?