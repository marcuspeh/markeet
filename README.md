# markeet

### ‌Installing the dependencies
Make sure nodeJS is installed on your device and run the following codes in the terminal. This will set up the de
```
npm install
cd client
npm install
```

### Running the codes
To run, use this in the root folder to run the client and server concurrently
```
npm run dev
```
Server runs on http://localhost:5000 and client on http://localhost:3000

### Poster
![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/1_milestone-0/markeet.jpg "Poster")

### Motivation
Ever run a small shop on Carousell or a flea market store but have no idea how to
keep track of inventory and profit? Or perhaps you want to find out easily how much
profit you are making? Enter markeet, a free Point Of Sale (POS) system that can
help you solve the issue.
Or are you a customer, traveling down to a shop to buy a certain item, only to find
out the item is out of stock. If the shop uses markeet, time spent travelling to the
shop can be saved too. You can easily check the stock of the item on your phone and
even find the nearest shop that sells the item.

### Aim
The aim of the project is to benefit small retail shops by creating an open source and
free to use Point Of Sales (POS) system. Many small businesses currently use
traditional methods to keep track of sales and conduct stock-taking, be it due to
budget constraints or the small scale of the business. As such, there is value in
implementing a POS system that can be used easily anywhere at almost no cost. All
that’s needed is an internet connection and a device to access the internet.
Customers can also check inventory count for the item, instead of wasting a trip down
to the shop only to realise that it is out of stock. They can also locate the nearest
shop that has stocks for the item they are looking to buy.

### User Stories
1. As a stock taker for a shop, I want to be able to keep track of the stock easily
without having to count it manually and be alerted when I need to restock.
2. As a small business owner, I want to be able to get data from the monthly sales
that can help my business grow, for example profits and best selling items.
3. As a business owner with multiple outlets, I want to be able to find out which
shops are making a profit or loss.
4. As a cashier, I want to have a system that is easy to use and convenient.
5. As an accountant, I want to be able to manage the finances of the company
easily, instead of having to go through books and papers to find the information
needed.
6. As a customer, I want to be able to find out if the item I want to buy is available
before I would make my way down to the shop to purchase it. I also want to be
able to locate the nearest shop that sells the item I’m looking for

### Features and Timeline
A **Web-based Point Of Sale (POS) system** that is free to use. It will help
businesses generate real-time detailed sales reports and inventory count, on top of
normal cashier operations.

The **Telegram Bot** provides a quick way for customers to check for stocks in a
particular store and locate the nearest shop with the item they want to buy. The
Telegram Bot will share the same database as the POS system

##### Core features:
* _(1)_ **Dashboard page** - The main page when a user logs in to the website. They will be able to see details on their shop, like inventory count, latest sales and other notifications. Links to other pages will also be available on that page.
* _(2)_ **Cashier page** - Where cashiers can enter sales in
* _(3)_ **Inventory page** - For live tracking of inventory. Options to add in inventory count and remove inventory will be available too. Updating inventory by CSV will also be supported.
* _(4)_ **Sales report page** - To see the profit/loss of the shop as well as the best/worst selling item. Other details regarding such as a breakdown of sales per day etc will also be shown.
* _(5)_ **Telegram Bot** - For customers to find out if the item is in stock. They can also locate the nearest shop with the items they are looking to buy.

##### Features to be completed by Milestone 1 (31 May):
- Design of the system
- Integrated frontend and backend system with a login feature
- _(1)_ Display information about the shop
- _(1)_ "Settings" page for changing settings
- _(2)_ Barebones cashier page
- _(3)_ Inventory list displaying all the inventory in the database
- _(3)_ Ability to add in new stocks and sending it to the database

##### Features to be completed by Milestone 2 (28 Jun):
- _(2)_ Entering of sales
- _(3)_ Sorting of inventory list based on different method
- _(3)_ Deduction of stock based on sales
- _(3)_ Alert when stocks are running low
- _(4)_ Ability to see basic sales report such as profit/lost
- _(4)_ Sales information will be updated once sales are entered
- _(5)_ Telegram bot basic layout and menu

##### Features to be completed by Milestone 3 (26 Jul):
- _(1)_ Add in options for settings such as Telegram bot support
- _(3)_ Prediction of how much stock to order to replenish
- _(4)_ Charts based on sales
- _(5)_ Telegram bot support for customers to check stock
- _(5)_ Telegram bot support for finding the nearest shop with stock

##### Possible future feature implementations:
- Machine learning Telegram Bot
- Introductory tutorial page for newcomers
- Support for multiple stores per account
- Employees account for the shop

### Outline
![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/0_proposal/link_chart.jpg "Outline")

### Proposed timeline
|Dates                           | To-dos                                                 |
|--------------------------------|--------------------------------------------------------|
|10 May - 16 May                 | _(Lift Off)_ Complete ideation and architecture design |
|17 May - 23 May                 | Build minimal system with login                        |
|24 May - 30 May                 | Testing and debugging of system                        |
|31 May _(Milestone 1)_ - 13 Jun | Implementing of core features                          |
|14 Jun - 20 Jun                 | Complete the basic CRUD features                       |
|21 Jun - 27 Jun                 | Debugging and basic tests                              |
|28 Jun _(Milestone 2)_ - 11 Jul | Integration of database with Telegram Bot              |
|12 Jul - 18 Jul                 | Further testing and debugging                          |
|19 Jul - 25 Jul                 | Polishing up UI and features                           |
|26 Jul _(Milestone 3)_ - 25 Aug | Refinement                                             |

### Tech Stack
1. MERN Full stack (for website)
    * MongoDB
    * Express
    * React
    * Node JS
2. Telegram API (for Telegram Bot)
3. Python (for Telegram Bot)
4. Git & GitHub (for version control)
