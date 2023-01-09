import { View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constans/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";

const DUMMY_EXPENSE = [
  {
    id: 'e1',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e2',
    description: 'A Book',
    amount: 9.99,
    date: new Date('2022-01-07')
  },
  {
    id: 'e3',
    description: 'A Laptop',
    amount: 949.99,
    date: new Date('2022-02-14')
  },
  {
    id: 'e4',
    description: 'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id: 'e5',
    description: 'A Book',
    amount: 9.99,
    date: new Date('2022-01-07')
  },
  {
    id: 'e6',
    description: 'A Laptop',
    amount: 949.99,
    date: new Date('2022-02-14')
  },
]

const ExpensesOutput = ({ expenses, expensesPeriod }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={DUMMY_EXPENSE}
        periodName={expensesPeriod}
      />
      <ExpensesList expenses={DUMMY_EXPENSE} />
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  }
})
