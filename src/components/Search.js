import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'
import { GEO_DB_API_URL, GeoDBApiOptions } from '../api'

export default function Search(props) {

    const [search, setSearch] = useState(null);

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
        setSearch(searchData);
        props.onSearchChange(searchData);
    }

    return (
        <AsyncPaginate
            placeholder="Search for City"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
            id="search" />
    )
}

