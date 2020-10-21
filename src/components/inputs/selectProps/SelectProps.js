import React from 'react'
import './selectProps.style.scss'



const SelectProps = ({ props, name, value, selectTitle, keyToDisplay, label, handdleChange }) => {
    return (
        <div className='selectInput'>
            <select
                required
                name={name}
                className='Selector'
                value={value ? value : '1'}
                onChange={handdleChange}
            >
                <option value='1' disabled hidden>
                    {selectTitle}
                </option>
                {props.map((item) => (
                    <option key={item._id} value={item._id}>
                        {item[keyToDisplay]}
                    </option>
                ))}
            </select>
            <label className='selectInputLabel'>{label}</label>
        </div>
    )
}


export default SelectProps