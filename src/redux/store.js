import { createStore } from 'redux'

const initialState = {
  data: [
    {
      category: 'Transmission Expences',
      month_id: '2020-11',
      target: 49,
      achievement: 83
    },
    {
      category: 'Transmission Expences',
      month_id: '2020-12',
      target: 49,
      achievement: 58
    },
    {
      category: 'Transmission Expences',
      month_id: '2020-1',
      target: 49,
      achievement: 39
    },
    {
      category: 'Transmission Expences',
      month_id: '2020-2',
      target: 49,
      achievement: 67
    },
    {
      category: 'Power Expences',
      month_id: '2020-11',
      target: 51,
      achievement: 56
    },
    {
      category: 'Power Expences',
      month_id: '2020-1',
      target: 51,
      achievement: 60
    },
    {
      category: 'Power Expences',
      month_id: '2020-2',
      target: 51,
      achievement: 66
    },
    {
      category: 'Power Expences',
      month_id: '2020-12',
      target: 51,
      achievement: 84
    },
    {
      category: 'Radio Frequency Usage',
      month_id: '2020-11',
      target: 42,
      achievement: 79
    },
    {
      category: 'Radio Frequency Usage',
      month_id: '2020-12',
      target: 42,
      achievement: 55
    },
    {
      category: 'Radio Frequency Usage',
      month_id: '2020-1',
      target: 42,
      achievement: 37
    },
    {
      category: 'Radio Frequency Usage',
      month_id: '2020-2',
      target: 42,
      achievement: 86
    }
  ]
}

const reducer = (state = initialState, action) => {
  if (action.type === 'GET_DATA') {
    return state
  }
  return state
}

export const store = createStore(reducer)