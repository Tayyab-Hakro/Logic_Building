class BankAccount {
  private int balance; // Private balance attribute

  // Constructor to initialize balance
  public BankAccount(int initialBalance) {
      if (initialBalance >= 0) {
          this.balance = initialBalance;
      } else {
          System.out.println("Initial balance cannot be negative.");
          this.balance = 0; // Default to 0 if a negative balance is given
      }
  }

  // Deposit method
  public void deposit(int amount) {
      if (amount > 0) {
          balance += amount;
          System.out.println("Successfully deposited: $" + amount);
          System.out.println("Current balance: $" + balance);
      } else {
          System.out.println("Deposit amount must be positive.");
      }
  }

  // Withdraw method
  public void withdraw(int amount) {
      if (amount > 0 && amount <= balance) {
          balance -= amount;
          System.out.println("Successfully withdrew: $" + amount);
          System.out.println("Current balance: $" + balance);
      } else if (amount > balance) {
          System.out.println("Insufficient funds. Available balance: $" + balance);
      } else {
          System.out.println("Withdrawal amount must be positive.");
      }
  }

  // Method to check balance
  public int getBalance() {
      return balance;
  }
}

public class Main {
  public static void main(String[] args) {
      BankAccount myAccount = new BankAccount(1000); // Initial balance

      myAccount.deposit(500);  // Deposit $500
      myAccount.withdraw(200); // Withdraw $200
      myAccount.withdraw(2000); // Attempt to withdraw more than available
  }
}
