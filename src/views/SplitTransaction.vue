<template>
  <!-- Navbar -->
  <div class="container-fluid" style="height: 10vh">
    <br />

    <div style="display: flex; justify-content: center">
      <h1 class="cathay-blue">Transaction Splitting</h1>
    </div>
    <br />
    <br />

    <div class="button-container">
      <button @click="addExpense" class="btn btn-primary" style="background-color: #00645a">
        Add an Expense
      </button>
      <button @click="settlePayments" class="btn btn-primary" style="background-color: #00645a">
        Settle Payments
      </button>
    </div>

    <br />

    <div v-if="showExpenseForm" class="expense-form">
      <h3 class="text-center">Add an Expense</h3>
      <div class="form-group">
        <label class="fw-bold">Shared With:</label>
        <br />
        <input
          v-model="sharedWith"
          type="text"
          class="form-control"
          placeholder="Enter names separated by commas"
        />
      </div>
      <br />

      <div class="form-group">
        <label class="fw-bold">Amount Spent By Each:</label>
        <br />
        <input
          v-model="amountSpentByEach"
          type="text"
          class="form-control"
          placeholder="Enter amounts separated by commas"
        />
      </div>
      <br />

      <div class="form-group">
        <label class="fw-bold">Description:</label>
        <br />
        <input
          v-model="description"
          type="text"
          class="form-control"
          placeholder="Enter description"
        />
      </div>
      <br />

      <div class="form-group">
        <label class="fw-bold">Total Amount Spent:</label>
        <br />
        <input
          v-model.number="amountSpent"
          type="number"
          class="form-control"
          placeholder="Enter amount spent"
        />
      </div>
      <br />

      <div class="button-container">
        <button @click="saveSharedWith" class="btn btn-primary" style="background-color: #00645a">
          Save
        </button>
        <button @click="generateSplit" class="btn btn-primary" style="background-color: #00645a">
          Generate Split
        </button>
      </div>
      <!-- <div class="text-center">
    <button @click="saveSharedWith" class="btn btn-primary" style="background-color: #00645A;">Save</button>
  </div>
  <div class="text-center mt-3">
    <button @click="generateSplit" class="btn btn-primary" style="background-color: #00645A;">Generate Split</button>
  </div> -->
    </div>

    <div v-if="showSettlement">
      <h3>Settlement Details</h3>
      <ul>
        <li v-for="(amount, name) in settlement">{{ name }} owes you {{ amount }} HKD</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showExpenseForm: false,
      sharedWith: '',
      description: '',
      amountSpent: 0,
      settlement: {
        Ayazhan: 50,
        Shadman: 60
      },
      showSettlement: false
    }
  },
  methods: {
    addExpense() {
      this.showExpenseForm = true
      this.sharedWith = ''
      this.description = ''
      this.amountSpent = 0
      this.settlement = {}
      this.showSettlement = false
    },
    saveSharedWith() {
      // Split the sharedWith string into an array of names
      const names = this.sharedWith.split(',').map((name) => name.trim())
      this.sharedWithNames = names
    },
    generateSplit() {
      // Split the amountSpentByEach string into an array of amounts
      const amounts = this.amountSpentByEach.split(',').map((amount) => parseFloat(amount.trim()))

      // Calculate the total amount spent
      const totalAmount = amounts.reduce((total, amount) => total + amount, 0)

      // Calculate the settlement amounts
      this.settlement = {}
      this.sharedWithNames.forEach((name, index) => {
        this.settlement[name] = amounts[index] - totalAmount / (this.sharedWithNames.length + 1)
      })

      this.showSettlement = true
    },
    settlePayments() {
      // Perform any necessary actions to settle the payments
      // (e.g., update payment records, send notifications, etc.)
      console.log('Payments settled!')
    }
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.sg-button {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 10px;
}

.h1 {
  justify-content: center;
}
</style>
