import { useLayoutEffect } from 'react'
import {View, Text, StyleSheet} from 'react-native'

const ManageExpense = ({route, navigation}) => {

  const editedExpenseId = route.params?.expenseId

  const isEditing = !!editedExpenseId

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])




  return (
    <View>
      <Text>Manage Expense</Text>
    </View>
  )
}

export default ManageExpense

const styles = StyleSheet.create({

})