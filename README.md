# React Context API

Oggi estendiamo il nostro mini e-commerce introducendo le Context API di React.
Useremo un contesto per gestire una modalità budget, che permette all’utente di visualizzare solo i prodotti più economici.

## Milestone 1

Create un nuovo context chiamato **BudgetContext**

- Deve contenere uno stato budgetMode di tipo booleano (true/false)
- Deve fornire anche la funzione per modificarlo (setBudgetMode)
- Wrappiamo l’intera applicazione con il BudgetProvider