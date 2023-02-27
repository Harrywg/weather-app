import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_DB_API_URL, GeoDBApiOptions } from '../api'

export default function Search(props) {

    const [search, setSearch] = useState(null);
    const [id, setId] = useState('search-wrap-center');
    const loadOptions = (inputValue) => {
        return fetch(`${GEO_DB_API_URL}/cities?minPopulation=250000&sort=-population&namePrefix=${inputValue}`, GeoDBApiOptions)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: [city.latitude, city.longitude],
                            label: `${city.name}, ${city.countryCode}`
                        }
                    })
                }
            })
            .catch(err => console.error(err));
    }

    const handleOnChange = (searchData) => {
        setId('search-wrap-top')
        setSearch(searchData);
        props.onSearchChange(searchData);
    }

    return (
        <div id={id}>
            <h2>Explore weather around the world.</h2>
            <AsyncPaginate
                placeholder="Search for City"
                debounceTimeout={600}
                value={search}
                onChange={handleOnChange}
                loadOptions={loadOptions}
                id='search'
            />
        </div>
    )
}

