import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Fib = () => {
    const [seenIndexes, setSeenIndexes] = useState([])
    const [values, setValues] = useState({})
    const [index, setIndex] = useState('')

    useEffect(() => {
        fetchValues()
        fetchIndexes()
    })

    const fetchValues = async () => {
        const values = await axios('/api/values/current')
        setValues(values.data)
    }

    const fetchIndexes = async () => {
        const indexes = await axios('/api/values/all')
        setSeenIndexes(indexes.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await fetch('/api/values', { method: 'POST', body: index })
        setIndex('')
    }

    const renderSeenIndexes = () =>
        seenIndexes.map(({ number }) => number).join(', ')

    const renderValues = () =>
        Object.keys(values).map((key) => (
            <div key={key}>
                For index {key} I calculated {values[key]}
            </div>
        ))

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your index:</label>
                <input onChange={(e) => setIndex(e.target.value)} />
                <button>Submit</button>
            </form>

            <h3>Indexes I have seen:</h3>
            {renderSeenIndexes()}

            <h3>Calculated values:</h3>
            {Object.keys(values).length && renderValues()}
        </div>
    )
}

export default Fib
