import { useId, useState } from 'react'
import './Filters.css'


const Filters = ({ onChange }) => {
//** para mostrar el range de precio con números
const [minPrice, setMinPrice] = useState(0)

//** useId */
const minPriceFIlterId = useId()
const categoryFilterId = useId()

const handleChangeMinPrice = (event) => {
  //esto huele mal
  //DOS FUENTES DE LA VERDAD
  setMinPrice(event.target.value)
  onChange(prevState => ({
    ...prevState,
    minPrice: event.target.value
  }))
}

//esto funciona pero huele mal
const handleChangeCategory = (event) => {
   //! estamos pasando la function de actualizar estado nativa de React a un componente hijo
  onChange(prevState => ({
    ...prevState,
    category: event.target.value
  }))
}


  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFIlterId}>Price</label>
        <input type="range"
          id={minPriceFIlterId}
          min='0'
          max='1000'
          step='10'
          onChange={handleChangeMinPrice}
        />
        <span>${minPrice}</span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}>Categoría</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value="all">Todas</option>
          <option value="laptops">Laptops</option>
          <option value="smartphones">Celulares</option>
        </select>
      </div>
    </section>
  )
}

export default Filters