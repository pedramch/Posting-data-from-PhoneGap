import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const MENU = [
  { id: '1', name: 'Margherita Pizza', price: 12.99 },
  { id: '2', name: 'Chicken Burger', price: 10.49 },
  { id: '3', name: 'Caesar Salad', price: 8.99 }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => addToCart(item)} style={{ padding: 16, borderBottomWidth: 1 }}>
      <Text style={{ fontSize: 18 }}>{item.name} - ${item.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ flex: 2 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Menu</Text>
        <FlatList data={MENU} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </View>
      <View style={{ flex: 1, borderTopWidth: 1, padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cart</Text>
        {cart.map((item, index) => (
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 4 }}>
            <Text>{item.name}</Text>
            <Button title="Remove" onPress={() => removeFromCart(index)} />
          </View>
        ))}
        <Button title="Checkout" onPress={() => {}} disabled={cart.length === 0} />
      </View>
    </SafeAreaView>
  );
}
