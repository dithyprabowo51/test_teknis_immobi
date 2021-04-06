import React, { useState } from 'react'
import './App.css';
import { useSelector } from 'react-redux'

import BarChartComponents from './components/BarChart.js'

function App() {
  const data = useSelector(state => state.data)
  const [error, setError] = useState('')
  const [category, setCategory] = useState('')
  const [month_id, setMonth_id] = useState('')
  const [isShowChart, setIsShowChart] = useState(false)
  const [dataFiltered, setDataFiltered] = useState({})
  const handleSearch = () => {
    if (!category || !month_id) {
      return setError('Please fill category and month id field !')
    }
    const findData = data.find(d => d.category.toLowerCase() === category.toLowerCase() && d.month_id === month_id)
    if (!findData) {
      setIsShowChart(false)
      return setError('Data not found !')
    }
    setError('')
    setDataFiltered(findData)
    setIsShowChart(true)
  }
  return (
    <div style={{ marginTop: '50px', textAlign: 'center' }}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '20px' }}>Category</label>
        <input onChange={(event) => setCategory(event.target.value)} value={category} type="text" />
      </div>
      <div>
        <label style={{ marginRight: '20px' }}>Month ID</label>
        <input onChange={(event) => setMonth_id(event.target.value)} value={month_id} type="text" />
      </div>
      <div style={{ marginTop: '20px' }}>
        <button onClick={handleSearch} type="submit">Search</button>
      </div>
      {
        error ?
          <p style={{ color: 'red' }}>{error}</p>
          :
          null
      }
      {
        isShowChart ?
          <div>
            <p style={{ marginTop: '50px' }}>{dataFiltered.category}</p>
            <BarChartComponents data={dataFiltered} />
          </div>
          :
          null
      }
    </div>
  );
}

export default App;
