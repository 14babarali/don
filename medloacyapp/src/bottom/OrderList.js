import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const OrderList = () => {
  const [filter, setFilter] = useState('All');

  const orders = [
    { id: 1, status: 'Completed', description: 'Order 1' },
    { id: 2, status: 'Pending', description: 'Order 2' },
    { id: 3, status: 'In Progress', description: 'Order 3' },
    // Add more order items as needed
  ];

  const filteredOrders = orders.filter(
    (order) => filter === 'All' || order.status === filter
  );

  const renderFilterButton = (buttonText, filterValue) => (
    <TouchableOpacity
      style={[
        styles.filterButton,
        filter === filterValue && styles.selectedFilterButton,
      ]}
      onPress={() => setFilter(filterValue)}
    >
      <Text
        style={[
          styles.filterButtonText,
          filter === filterValue && styles.selectedFilterButtonText,
        ]}
      >
        {buttonText}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

<View style={styles.headerProfiletxt}>
        <Text style={styles.headertxt}>
          Order List
        </Text>
</View>

      <View style={styles.filterButtons}>
        {renderFilterButton('All', 'All')}
        {renderFilterButton('Completed', 'Completed')}
        {renderFilterButton('Pending', 'Pending')}
        {renderFilterButton('In Progress', 'In Progress')}
      </View>
      <FlatList
        data={filteredOrders}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text style={styles.orderItemText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    gap:3,

  },
  filterButton: {
    flex: 1,
    padding: 7.5,
    borderRadius: 5,
    borderColor: '#17252A',
  },
  selectedFilterButton: {
    backgroundColor: '#3AAFA9',
    borderColor: 'transparent',
  },
  filterButtonText: {
    color: '#17252A',
    textAlign: 'center',
    justifyContent:'center',
    fontSize:10,
  },
  selectedFilterButtonText: {
    color: '#FFFFFF',
  },
  headerProfiletxt:{
    width:"100%",
    height:50,
    backgroundColor:"#3AAFA9",
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:5,
    marginBottom:20,
    
  },
  headertxt:{
    color:"white",
    fontSize:20,
  },
  orderItem: {
    padding: 10,
    marginBottom: 10,
    borderColor: '#3AAFA9',
    borderRadius: 5,
  },
  orderItemText: {
    color: 'black',
  },
});

export default OrderList;
