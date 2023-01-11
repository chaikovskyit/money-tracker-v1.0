import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true)
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    const fetchExpenses = async () => {
      setIsFetching(true)
      const expenses = await getExpenses();
      setIsFetching(false)
      expensesCtx.setExpenses(expenses)
    };
    fetchExpenses();
  }, []);

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date > date7DaysAgo && expense.date <= today;
  });

  if (isFetching) {
    return <LoadingOverlay />
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days. "
    />
  );
};

export default RecentExpenses;

const styles = StyleSheet.create({});
