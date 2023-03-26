new Vue({
    el: '#app',
    data: {
      items: [
        { id: 'sugar', name: 'Sugar 1kg', price: 'Rs. 200.00', quantity: 0 },
        { id: 'tea', name: 'Tea Leaves 200g', price: 'Rs. 300.00', quantity: 0 },
        { id: 'milkmaid', name: 'Milkmaid Big', price: 'Rs. 600.00', quantity: 0 },
        { id: 'dhal', name: 'Dhal 1kg', price: 'Rs. 550.00', quantity: 0 },
        { id: 'rice', name: 'Rice Samba 1kg', price: 'Rs. 350.00', quantity: 0 },
        { id: 'dried-chill', name: 'Dried Chill 100g', price: 'Rs. 150.00', quantity: 0 }
      ]
    },
    computed: {
      totalItems: function() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
          total += parseInt(this.items[i].quantity);
        }
        return total;
      },
      totalPrice: function() {
        let total = 0;
        for (let i = 0; i < this.items.length; i++) {
          total += parseInt(this.items[i].quantity) * parseFloat(this.items[i].price.replace('Rs. ', ''));
        }
        return 'Rs. ' + total.toFixed(2);
      }
    }
});