<template>
  <div class="accounting-dashboard">
    <h2>Accounting Dashboard</h2>
    <section>
      <h3>Transaction Management</h3>
      <ul v-if="transactions.length" class="transactions-list">
        <li v-for="transaction in transactions" :key="transaction.id" class="transaction-item">
          <span>{{ transaction.propertyTitle }} - ${{ transaction.amount }}</span>
          <button @click="generateInvoice(transaction)" class="btn invoice-btn">Generate Invoice</button>
          <button @click="markTransactionAsPaid(transaction)" v-if="!transaction.isPaid" class="btn paid-btn">Mark as Paid</button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  computed: {
    ...mapState('accounting', ['transactions']),
  },
  methods: {
    ...mapActions('accounting', ['fetchTransactions', 'generateInvoice', 'markTransactionAsPaid']),
  },
  mounted() {
    this.fetchTransactions();
  },
};
</script>

<style scoped>
.accounting-dashboard h2 {
  color: #333;
  font-size: 24px;
}

.transactions-list {
  list-style: none;
  padding: 0;
}

.transaction-item {
  background-color: #f5f5f5;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  padding: 10px;
}

.btn {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
}

.invoice-btn {
  background-color: #008CBA;
}

.paid-btn {
  background-color: #f44336;
}
</style>
