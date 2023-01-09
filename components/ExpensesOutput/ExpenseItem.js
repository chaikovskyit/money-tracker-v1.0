import { View, Text, Pressable, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constans/styles";
import { getFormattedDate } from '../../util/date'

const ExpenseItem = ({ description, amount, date }) => {
  return (
    <Pressable>
      <View style={styles.expenseItem}>
        <View>
          <Text
            style={[styles.baseText, styles.descriptionText]}
          >
            {description}
          </Text>
          <Text style={styles.baseText}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    shadowColor: GlobalStyles.colors.gray700,
    shadowRadius: 4,
    textShadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.4
  },
  baseText: {
    color: GlobalStyles.colors.primary50
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 80
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold'
  }
});
