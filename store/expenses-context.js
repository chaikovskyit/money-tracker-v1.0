import { createContext, useReducer } from "react";

const DUMMY_EXPENSE = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "A Book",
    amount: 9.99,
    date: new Date("2022-01-07"),
  },
  {
    id: "e3",
    description: "A Laptop",
    amount: 949.99,
    date: new Date("2022-02-14"),
  },
  {
    id: "e4",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e5",
    description: "A Book",
    amount: 9.99,
    date: new Date("2022-01-07"),
  },
  {
    id: "e6",
    description: "A Laptop",
    amount: 949.99,
    date: new Date("2022-02-14"),
  },
  {
    id: "e7",
    description: "A sigarets",
    amount: 2.99,
    date: new Date("2023-01-09"),
  },
  {
    id: "e8",
    description: "A adapter",
    amount: 10,
    date: new Date("2023-01-07"),
  },

];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];

    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state]
      updatedExpenses[updatableExpenseIndex] = updatedItem
      return updatedExpenses;

    case "DELETE":
      return state.filter(expense => expense.id !== action.payload)

    default:
      return state;
  }
};

const ExpensesContextProvider = ({ children }) => {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSE);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const updateExpense = (id, expenseData ) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense

  }

  return (
    <ExpensesContext.Provider
      value={value}
    >
      {children}
    </ExpensesContext.Provider>);
};

export default ExpensesContextProvider;
