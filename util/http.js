import axios from "axios"

const baseUrl = 'https://react-native-expense-man-fcd38-default-rtdb.europe-west1.firebasedatabase.app/'

export const storeExpense = async (expenseData) => {
  const response = await axios.post(`${baseUrl}/expenses.json`, expenseData)
  const id = response.data.name
  return id
}

export const  getExpenses = async () => {
  const response = await axios.get(`${baseUrl}/expenses.json`)

  const expenses = []
  //transform {"-NLW_lIWnZrp5BTy84rh": {"amount": 25, "date": "2021-10-23T00:00:00.000Z", "description": "Some pass"}, "-NLWaOYCkANwJXcutBPd": {"amount": 47, "date": "2022-02-24T00:00:00.000Z", "description": "Some verto"}}

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description
    }
    expenses.push(expenseObj)
  }

  return expenses
}

export const updateExpense = (id, expenseData) => {
  return axios.put(`${baseUrl}/expenses/${id}.json`, expenseData)
}

export const deleteExpense = (id) => {
  return axios.delete(`${baseUrl}/expenses/${id}.json`)
}