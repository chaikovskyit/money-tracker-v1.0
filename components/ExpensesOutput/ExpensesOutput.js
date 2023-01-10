import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constans/styles";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";



const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {

  let content = <Text style={styles.infoText}>{fallbackText}</Text>

  if (expenses.length > 0) {
    content = <ExpensesList expenses={expenses} />
  }

  return (
    <View style={styles.container}>
      <ExpensesSummary
        expenses={expenses}
        periodName={expensesPeriod}
      />
      {content}
      {/* <ExpensesList expenses={expenses} /> */}
    </View>
  );
};

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary700
  },
  infoText: {
    fontSize: 16,
    marginTop:  32,
    textAlign: 'center',
    color: 'white'
  }
})
