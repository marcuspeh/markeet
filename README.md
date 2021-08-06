# **TABLE OF CONTENTS**
- **[Poster](#poster)**
- **[Installing the dependencies](#Installing-the-dependencies)**
- **[Running the codes](#Running-the-codes)**
- **[Code Base](#Code-Base)**
- **[Wire Frame](#Wire-Frame])**
- **[Deployment](##Deployment)**
- **[Motivation](#Motivation)**
- **[Aim](#Aim)**
- **[User Stories](#User-Stories)**
- **[Use Case Diagram](#Use-Case-Diagram)**
- **[Features and Timeline](#Features-and-Timeline)**
    - [Core features](#Core-features)
    - [Features to be completed by Milestone 1 (31 May)](#Features-to-be-completed-by-Milestone-1-(31-May))
    - [Features to be completed by Milestone 2 (28 Jun)](#Features-to-be-completed-by-Milestone-2-(28-Jun))
    - [Features to be completed by Milestone 3 (26 Jul)](#Features-to-be-completed-by-Milestone-3-(26-Jul))
    - [Possible future feature implementations](#Possible-future-feature-implementations)
- **[Outline](#Outline)**
- **[Core Features breakdown](#Core-Features-breakdown)**
    - [Landing page](#Landing-page)
    - [Register Page](#Register-Page)
    - [Login Page](#Login-Page)
    - [Dashboard page](#Dashboard-page)
    - [Profile Page](#Profile-Page)
    - [Cashier Page](#Cashier-Page)
    - [Inventory](#Inventory)
    - [Sales](#Sales)
- **[Timeline](#Timeline)**
- **[Tech Stack](#Tech-Stack)**
- **[Component Diagram](#Component-Diagram)**
- **[Telegram Bot](#Telegram-Bot)**
    - [Commands](#Commands)
- **[Github Workflow](#Github-Workflow)**
- **[Comparison with other apps](#Comparison-with-other-apps)**
    - [Shopify POS (https://www.shopify.com.sg/pos)](#Shopify-POS-(https://www.shopify.com.sg/pos))
- **[User Testing](#User-Testing)**
    - [Overview](#Overview)
    - [Results of survey](#Results-of-survey)
    - [Comments/Bugs](#Comments/Bugs)
- **[End to End Testing](#End-to-End-Testing)**
    - [Summary of test](#Summary-of-test)


# Poster

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/4_milestone-3/Markeet.png "Poster")

### Installing the dependencies
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


# Code Base

Full stack: [https://github.com/marcuspeh/Markeet](https://github.com/marcuspeh/Markeet)

Telegram bot: [https://github.com/marcuspeh/markeetBot](https://github.com/marcuspeh/markeetBot)

# Wire Frame

[https://www.figma.com/file/mmQDZh2OWd4JVPEAiMECol/markeet?node-id=0%3A1](https://www.figma.com/file/mmQDZh2OWd4JVPEAiMECol/markeet?node-id=0%3A1)

# Deployment

**Website:** [https://markeet.herokuapp.com/](https://markeet.herokuapp.com/)

Note 1: You maybe need to wipe your cache as we have wiped all the users from the database

Note 2: Somehow the website will crash if you are using http instead of https. Use https only

Note 3: Feel free to use this test account to test the system out

Email: [johndoe@markeet.com](mailto:johndoe@markeet.com)

Password: markeet

**Telegram:** @markeetOrbitalBot

# Motivation

Ever run a small shop on Carousell or a flea market store but have no idea how to keep track of inventory and profit? Or perhaps you want to find out easily how much profit you are making? Enter markeet, a free Point Of Sale (POS) system that can help you solve the issue.

Or are you a customer, traveling down to a shop to buy a certain item, only to find out the item is out of stock. If the shop uses markeet, time spent travelling to the shop can be saved too. You can easily check the stock of the item on your phone and even find the nearest shop that sells the item.

# Aim

The aim of the project is to benefit small retail shops by creating an open source and free to use Point Of Sales (POS) system. Many small businesses currently use traditional methods to keep track of sales and conduct stock-taking, be it due to budget constraints or the small scale of the business. As such, there is value in implementing a POS system that can be used easily anywhere at almost no cost. All that&#39;s needed is an internet connection and a device to access the internet.

Customers can also check inventory count for the item, instead of wasting a trip down to the shop only to realise that it is out of stock. They can also locate the nearest shop that has stocks for the item they are looking to buy.

# User Stories

1. As a stock taker for a shop, I can view the suppose stock in the shop so that i can double check the amount in the shop with ease
2. As a stock taker for a shop, I can view the notifications for low inventory so that I can restock in time.
3. As a stock taker for a shop, I can edit the inventory count for certain items so that the information in the app is updated.
4. As a stock taker for a shop, I can add in item(s) to inventory so that the inventory in the app is updated.
5. As a small business owner, I can get data from the monthly sales such as best selling items so that I can help my business grow.
6. As a business owner with multiple outlets, I can find out which shops are making a profit or loss so that I redistribute manpower.
7. As a cashier, I can use that cashier app that is easy to use and convenient so that I can clear the queue faster.
8. As a cashier, I can check the inventory so that I can answer customers&#39; enquiries on stock.
9. As an accountant, I can check the sales of the shop easily on a monitor so that I can save time from not looking through paper and pen
10. As a customer, I can use the telegram bot to check for stock in a shop so that I can save time from travelling to the shop if it is not available.
11. As a customer, I can find the nearest shop that has the item I want to buy in stock so that I can save time travelling.

# Use Case Diagram

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/use_case.png "Use Case Diagram")

Features and Timeline

A **Web-based Point Of Sale (POS) system** that is free to use. It will help businesses generate real-time detailed sales reports and inventory count, on top of normal cashier operations.

The **Telegram Bot** provides a quick way for customers to check for stocks in a particular store and locate the nearest shop with the item they want to buy. The Telegram Bot will share the same database as the POS system

## Core features

1. **Dashboard page** - The main page when a user logs in to the website. They will be able to see details on their shop, like latest sales and other notifications.
2. **Cashier page** - Where cashiers can enter sales in
3. **Inventory page** - For live tracking of inventory. Options to add in inventory count and remove inventory will be available too. Updating inventory by CSV will also be supported.
4. **Sales report page** - To see the profit/loss of the shop as well as the best/worst selling item. Other details regarding such as a breakdown of sales per day etc will also be shown.
5. **Telegram Bot** - For customers to find out if the item is in stock. They can also locate the nearest shop with the items they are looking to buy.
6. **Landing Page** - For users to register and sign in to their account. Contains basic information to sell markeet

## Features to be completed by Milestone 1 (31 May)

- (6) Design of the system
- Integrated frontend and backend system with a login feature
- (1) &quot;Settings&quot; page for changing settings
- (2) Barebones cashier page
- (3) Inventory list displaying all the inventory in the database
- (3) Ability to add in new stocks and sending it to the database

## Features to be completed by Milestone 2 (28 Jun)

- (1) Display information about the shop
- (2) Entering of sales
- (3) Sorting of inventory list based on different method
- (3) Deduction of stock based on sales
- (4) Ability to see basic sales report such as profit/lost
- (4) Sales information will be updated once sales are entered
- (4) Charts based on sales

## Features to be completed by Milestone 3 (26 Jul)

- (3) Alert when stocks are running low
- (1) Telegram bot support
- (5) Telegram bot basic layout and menu
- (5) Telegram bot support for customers to check stock
- (6) Information regarding markeet to sell it to potential users

## Possible future feature implementations

- Prediction of how much stock to order to replenish
- Telegram bot support for finding the nearest shop with stock
- Machine learning Telegram Bot
- Introductory tutorial page for newcomers
- Support for multiple stores per account
- Employees account for the shop

# Outline

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/outline.png "Outline")

# Timeline

| **Dates** | **To-dos** | **Done** |
| --- | --- | --- |
| 10 May - 16 May (Lift Off) | Complete ideation and architecture design | ✔️ |
| 17 May - 23 May | Build minimal system with login | ✔️ |
| 24 May - 30 May | Implement inventory | ✔️ |
| 31 May (Milestone 1) - 13 Jun | Implementing of core features | ✔️ |
| 14 Jun - 20 Jun | Complete the basic CRUD features | ✔️ |
| 21 Jun - 27 Jun | Debugging and basic tests | ✔️ |
| 28 Jun (Milestone 2) - 11 Jul | Integration of database with Telegram Bot | ✔️ |
| 12 Jul - 18 Jul | Further testing and debugging | ✔️ |
| 19 Jul - 25 Jul | Polishing up UI and features | ✔️ |
| 26 Jul (Milestone 3) - 25 Aug | Refinement |
 |

# Tech Stack

1. MERN Full stack (for website)
  1. MongoDB
  2. Express
  3. React
  4. Node JS
2. Redux (for website)
3. Telegram API (for Telegram Bot)
4. Python (for Telegram Bot)
5. Git &amp; GitHub (for version control)
6. Cypress (for e2e testing)

#

# MERN

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/tech_stack.png "Tech Stack")

markeet is done mainly based in MERN, which allows us to create both frontend and backend for the web app, along with a database. MERN stack is designed to make the development process smoother and easier.

## Frontend

React is used in MERN as the top tier of the stack. It is a JavaScript library that is used for building user interfaces. React is used because of its ability to handle rapidly changing data. React allows users to code in JavasScript and create UI components.

Axios is used as a HTTP client library that allows the frontend of our webapp to interact with the backend in order to fetch data from or pass data to our backend.

## Backend

Express.js is used for our backend server. Rather than writing the code using Node.js and creating loads of Node modules, Express makes it simpler and easier to write the back-end code. Express helps in designing great web applications and APIs.

Express is chosen as it is fast and robust. It also supports many middlewares which makes the code shorter and easier to write. These middlewares enable data to be processed and passed from the frontend to the database.

## Database

MongoDB is a NoSQL database where each record is a document consisting of key-value pairs that are similar to JSON objects. MongoDB is flexible and allows its users to create schema, databases, tables, etc. The reason why MongoDB is selected as the database is fast and scalable.

# Component Diagram

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/component.png "Component Diagram")

# Schema Diagram

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/4_milestone-3/schema.png "Tech Stack")

#

# Core Features breakdown

## Landing page

This is the first page users will see when they process to the website.

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/landing1.png "Tech Stack")

Information regarding &quot;features&quot; and &quot;about us&quot; are available further down the page or if the users click on the respective links in the nav bar.

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/landing2.png "Tech Stack")

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/landing3.png "Tech Stack")

To sign in or register, the user can click on either the navbar or the buttons on the landing page.

![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/landing4.png "Tech Stack")
![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/landing5.png "Tech Stack")

## Register Page

Users will be required to create an account before using markeet. To register for an account, users have the choice of manually filling up the form or registering with Google. Registering of an account is done using OAuth. Upon a successful registration, the user will be redirected to the Login page to sign in. If the user already has an account, there is a button on the Register page to redirect them to the Login Page.

![](RackMultipart20210806-4-7l4lfj_html_2f6d0e156b0fa78e.png)

Form input checking is also available where the error messages will be shown on the form if the creation of an account is not successful.

![](RackMultipart20210806-4-7l4lfj_html_4f4278a58c32243a.png)

![](RackMultipart20210806-4-7l4lfj_html_9e7205671ac29ed5.png)

## Login Page

The Login Page will allow users to sign in to their account. Similarly, this is done via OAuth. Users have the option of manually filling in their registered email and password or log in using Google. If users have not yet created an account, there is a link that will redirect users to the Register page Once successfully logged in, there will be a token stored in the local storage.

![](RackMultipart20210806-4-7l4lfj_html_ea0974bc24f98147.png)

There will also be error messages if login credentials are not correct. The user will also not be assigned a token.

![](RackMultipart20210806-4-7l4lfj_html_c004a6bab42426a9.png)

![](RackMultipart20210806-4-7l4lfj_html_922a551876420229.png) ![](RackMultipart20210806-4-7l4lfj_html_c58ced5a5a7b8b3a.png)

## Dashboard page

Upon successful login, the user will be brought to the dashboard page where they are able to see a brief overview of their shop and earnings.

![](RackMultipart20210806-4-7l4lfj_html_cce409f466e089d9.png)

Total revenue, average revenue per month and daily revenue is calculated based on the transaction and shown on the dashboard

![](RackMultipart20210806-4-7l4lfj_html_beeaf3b4072002a8.png)

There is also a notification area where stocks with low inventory count of less than 5 will be shown. This will be further improved to change the cutoff and probs machine learning too.

![](RackMultipart20210806-4-7l4lfj_html_e063f54bc450b3a2.png)

A chart will also be shown, displaying the last 7 transaction days, as well as the total revenue for those days.

![](RackMultipart20210806-4-7l4lfj_html_ae9c80c9172a6971.png)

Transaction records can also be found in the dashboard. Clicking on the &quot;Receipt&quot; button will generate the receipt for that specific transaction.

![](RackMultipart20210806-4-7l4lfj_html_2d4e92ea93975745.png)

![](RackMultipart20210806-4-7l4lfj_html_f3841c0558fbf13b.png)

## Profile Page

Clicking on the dropdown at the top right of the screen will allow the user to access the profile page. Each user will have their own profile page where their information is shown in a form.

![](RackMultipart20210806-4-7l4lfj_html_57d56f0b4d6041a0.png)

For each of the forms, the user can update their details stored in the database. They are able to change their name (also known as shop name), address, email and number. In addition, changing of password is also available. However, if any of the changes are not valid, an error will be shown for the specific field.

![](RackMultipart20210806-4-7l4lfj_html_a5ff9f65df9dcb74.png)

Changing of their name will also result in the user&#39;s name on the navbar to change

![](RackMultipart20210806-4-7l4lfj_html_6cf5d3e30b3e5e82.png)

## Cashier Page

Since this is a Point-Of-Sales system and not an ecommerce website, the cashier page will only allow the users to have their own products shown. This page is mainly for users to log their sales. It will display the current cart, inventory as well as transaction receipt if it is confirmed.

![](RackMultipart20210806-4-7l4lfj_html_2d2ad3b71a1e7853.png)

The inventory display will show you the current inventory in stock. You are able to manually edit the quantity of a specific item to be added to the cart.

![](RackMultipart20210806-4-7l4lfj_html_22dc22b611b4bb7b.png)

Furthermore, if the item that is going to be added to the cart exceeds the total stock in inventory, an alert will pop up and the count will be changed to the highest amount possible. Also, the item will not be added to cart.

![](RackMultipart20210806-4-7l4lfj_html_6e4c461c60d8b264.png)

The receipt section will show the breakdown of the transaction and the cost. The checkout button is available below it to log the transaction as well as reducing the stock of the items in inventory.

![](RackMultipart20210806-4-7l4lfj_html_31635ab24f723adc.png)

## Inventory

The inventory page will show up the stocks available in the user&#39;s inventory. The details of each product is shown on a table in the page.

![](RackMultipart20210806-4-7l4lfj_html_496974e9f1e37c3d.png)

The user is able to add a single product in using the form or multiple products using CSV. Error checking is also available. The fields required should not be blank, neither should the number inputs be negative. The user will only be redirected back to the inventory page if the addition of the product is successful.

![](RackMultipart20210806-4-7l4lfj_html_888b9c2c06cfdc60.png)

![](RackMultipart20210806-4-7l4lfj_html_88447592e975dfe9.png)

Users can also search through the inventory using the search bar at the top or using the advanced search form. They are also able to sort the inventory instead of simply displaying it in the order it was added in.

![](RackMultipart20210806-4-7l4lfj_html_c1522a5261b7d352.png)

Editing the product should also be a breeze. The users simply need to click on the edit button on the same row as the product in order to edit it. They are able to edit all the fields of the product as well as deleting it from inventory. Deleting the inventory will require clicking of a confirmation button. Error checking will also be in place in case fields are blank or number input is negative.

![](RackMultipart20210806-4-7l4lfj_html_fd411ce6a03e9492.png)

## Sales

The Sales Page will give a more in depth analysis of the shop than the dashboard. It will contain more information and more charts.

![](RackMultipart20210806-4-7l4lfj_html_6fd208a1e8448e36.png)

There will be more analysis of earnings by the shop, like having a profit section as well as showing the revenue for the last 28 days. There will also be a comparison of profit, revenue and sales for the last 3 months.

![](RackMultipart20210806-4-7l4lfj_html_42f66f62b8a64dc.png)

A part of the page will also show the best selling and worst selling products for the user. It will be able to help the user decide on what items to restock and sell for more gains.

![](RackMultipart20210806-4-7l4lfj_html_bde33cba3c88e953.png)

# Telegram Bot

A telegram bot to solve the issue of customers going to the shop and not finding the item they are interested in in stock.

The telegram bot is made with python using the python-telegram-bot library. It will queries the API of markeet, that is created just for the telegram bot to query.

The telegram bot is hosted on heroku as well.

## Commands

The telegram bot supports the following commands:

- /start
  - This starts the bot and creates the archiving of the person&#39;s last command with the bot.
- /help
  - Gives the user a list of available commands they can use.
- /list
  - Ask the user for the shop they are looking for and return a list of its inventory.
- /checkstock
  - Ask the user for the shop and item they are looking for and return whether it is available or not.
  - If the item is available, the number in stocks is also returned

![](RackMultipart20210806-4-7l4lfj_html_5ca8a8674123f844.png)

# Github Workflow

For our workflow in github, we are creating 4 branches for the main markeet repository.&quot;main&quot; for default, &quot;heroku&quot; for production, &quot;cashier&quot; for Nicholas and &quot;marcus&quot; for Marcus. We will be doing our codes in our individual branch. Before we push to main, we will be merging the other person&#39;s codes into our branch to test. If there is no issue, our codes will then be merged into &quot;main&quot; and subsequently, &quot;main&quot; to be merged into &quot;heroku&quot; for production.

Here&#39;s a flowchart visually our workflow.
![alt text](https://github.com/marcuspeh/Markeet/blob/main/submissions/3_milestone-2/github_flow_diagram.png "Work Flow")

In addition, we have an additional repository just for the telegram bot codes. For this repository, we have decided to simply a &quot;main&quot; branch to work on and a &quot;heroku&quot; branch for production.

![alt text](https://github.com/marcuspeh/markeet/blob/main/submissions/4_milestone-3/github_workflow_tele.png "Work Flow")

#

# Comparison with other apps

## Shopify POS ([https://www.shopify.com.sg/pos](https://www.shopify.com.sg/pos))

![](RackMultipart20210806-4-7l4lfj_html_f134363b93e51706.png)

While shopify might be a very big ecommerce website and its POS system is no doubt one of the most user friendly additional services, its POS system is only limited to shopify users. In addition, shopify POS does not support Android devices but only IOS devices. It is also quite expensive to use its full features. Markeet, on the other hand, is completely free to use while enjoying most of the features present in shopify&#39;s POS. The most important aspect of markeet is the ability to be used on any devices, regardless of Android, IOS or windows.

#


# User Testing

## Overview

For user testing, we decided on sending our survey containing 10 tasks that are realistic activities that the participant might perform in real life. For each task, they are told to give their opinions whether they are satisfied or not with markeet. Thereafter, there is an optional field for them to input any bugs or comments.

The link to the survey can be found here: [https://forms.gle/zMcempysWx9x8CUFA](https://forms.gle/zMcempysWx9x8CUFA)

The main aim of the survey as user testing is to see how satisfied users are with markeet as well as find bugs and issues users may have.

We conducted surveys among 30 respondents. Users were mostly satisfied with features of markeet. Most of the feedback was with regards to the UX/UI aspects of our web app.

There were some complaints about the speed of heroku but that is out of our control.

##

## Results of survey

The table below contains the result from the survey based on each task.

| **Task** | **Satisfied** | **Not satisfied** |
| --- | --- | --- |
| 1. Register for an account and sign in. You can do so with either email or Google option. | 90% | 10% |
| 2. Go to your profile and update your name, email, address and phone. You may choose to update your password if you didn&#39;t sign in with Google. | 90% | 10% |
| 3. Proceed on to inventory and add in 3 products to the inventory. You can choose to use the CSV feature. Take note to fill up all the details. If any is missed out, the product will not be added. | 90% | 10% |
| 4. Try using the search button to find a product in the inventory | 93.3% | 6.7% |
| 5. Try using the advance search feature to sort and find products | 96.7% | 3.3% |
| 6. Edit a random product in your inventory. | 96.7% | 3.3% |
| 7. Delete a random product from your inventory. | 96.7% | 3.3% |
| 8. Proceed to the locashier page, add items to cart and checkout. | 93.3% | 6.7% |
| 9. Explore the dashboard page and view the receipt of the transaction you just created | 96.7% | 3.3% |
| 10. Finally, move on to the sales and explore the page | 96.7% | 3.3% |

## Comments/Bugs

The tables below contain some comments/bugs raised during user testing in the survey. It also includes the action we have taken regarding them

| **Comments/Bugs** | **Actions** |
| --- | --- |
| Heroku is slow to load at the start after clicking into the link provided | Nothing is done for this as it is an issue due to the free tier of heroku. However, we are looking into hosting it on other services like Amazon WebServices or Google Cloud using their free tier. |
| Profile screen: I think having update buttons beside the fields and then a primary save button at the bottom might be a little confusing. I personally pressed update on the fields, then i pressed save but realised that the save might only before changing passwords. You might want to increase the margin between the Change Password form and the update form? | Added a horizontal line on top of the change password form to separate them out. |
| I think my main comment is that it would be great if you can signpost your client&#39;s state to the user. For example, when I add something to the inventory, I am redirected to the inventory page, but the inventory list doesn&#39;t update. I don&#39;t really know if the item is successfully added, or if there&#39;s an error, or if I should add it again. This is similar for the Register screen, where I don&#39;t really know if I have successfully signed up, or I am not very sure if the client is performing the register action or I am just waiting for nothing. It would be a great improvement to user experience if Loaders and Messages can be used to communicate this. On the inventory edit screen, it is the same thing where the form turns up blank first, then is populated with the inventory details. Rendering a spinner while the data is loading, then rendering the populated form would reduce confusion. | Added checkout success and failure states as alerts for users<br /> Added error checking for input into adding of product to inventory in backend and displaying the error in frontend |
| For the Cashier page, is the price summary calculated correctly? Seems like the Price of the items on the receipt and the price of the item doesn&#39;t quite tally up. I noticed that the price is calculated correctly on the receipt in the dashboard. Also, the GST is calculated on this receipt, you guys might want to consider adding the GST on the Receipt screen in the Cashier page for consistency. | Added GST and subtotal in cashier page&#39;s receipt |
| Search should not be case sensitive. Annoying to use | Fixed the search to make it search without case sensitive. |
| Negative values can be keyed in under inventory. Easy to break stuff with it | Added error checking for input into adding of product to inventory in backend and displaying the error in frontend. |
| When adding an out-of-stock item to the cashier, the item will not be added. That&#39;s good. But should prompt/inform the user that the item cannot be added because it&#39;s supposedly out of stock. | Added alert when quantity in cart/inventory display goes over total quantity. |
| There can be negative quantity when editing/adding to inventory, not sure if intended. | Updated both editing and adding of products to inventory to prevent negative quantity/cost/price |
| What&#39;s the point of buying/selling your own product? Users should be differentiated between buyer and seller. | This is not an e-commerce website but a point of sales system. It allows your business to accept payments from customers and keep track of sales. |
| Searching for title is case sensitive, and must match the title exactly instead of looking up the keywords, can be improved. | Fixed the searching feature to make it not case sensitive. |
| Without the instructions in the form, I wouldnt know how to edit my account. Maybe the css needs to make it clear that it is clickable or sth. | This is a good point raised and the edit page now is more obvious. Instead of clicking of the name, a drop down is available with the word edit present. |

# End to End Testing

We are using Cypress ([https://www.cypress.io](https://www.cypress.io/)) in order to write end to end testing for markeet.

The testing mainly focus on the following:

1. **User input**. We tested if each button is working as expected. For example, clicking on the &quot;inventory&quot; button actually changes the screen to the inventory page instead of others.
2. **Entry input**. We tested possible user input to test if the webapp is performing as expected. For example, when registering as a new user, if the user enters an invalid email like &quot;qwerty&quot; instead of &quot;[qwerty@domain.com](mailto:qwerty@domain.com)&quot;, the website should actually prompt as an error

We chose Cypress mainly due to the following reasons:

1. **Easy to pick up.** Cypress is easy to use and fairly well documented. It is much easier to learn compared to other testing libraries like Selenium
2. **Ability to see what happens during testing.** Cypress takes snapshots as the tests run. We are able to hover over commands in the Command Log to see exactly what happened at each step.
3. **Run fast.** Most testing tools operate by running outside of the browser and executing remote commands across the network. Cypress is the exact opposite. Cypress is executed in the same run loop as the application, enabling us to run the code faster without any network lag.

##

## Summary of test

| **Feature** | **Things to test** | **Test** | **Expected** | **Result** |
| --- | --- | --- | --- | --- |
| Landing | Able to see the landing page | Trying to go to the landing page when logged in | User will be redirected to dashboard page | ✔️ |
| | | Trying to go to the landing page when not logged in | User will be able to see the landing page | ✔️ |
| | Buttons works as plan | Clicking on register button will bring user to register page | User is redirected to register page | ✔️ |
| | | Clicking on login button will bring user to login page | User is redirected to register page | ✔️ |
| Register | Able to register for an account | Opening the &quot;register new user&quot; page | Page should load properly | ✔️ |
| | Registering with all empty fields | All the fields should show various error messages.|_Name:_ &quot;Name field is required <br> &quot;_Email:_ &quot;Email field is required <br> &quot;_Password:_ &quot;Password must be at least 6 characters&quot; | ✔️ |
| | | Registering with empty email field | Error message will be shown in email &quot;Email field is required&quot;| ✔️ |
| | | Registering with empty name field | Error message will be shown in name &quot;Name field is required&quot; | ✔️ |
| || Registering with empty password fields | Error message will be shown in password &quot;Password must be at least 6 characters&quot; <br> Error message will be shown in confirm password _&quot;Confirm password field is required&quot;_ | ✔️ |
| | | Registering with invalid email eg &quot;qwerty&quot; | Error message will be shown _&quot;Email is invalid&quot;_ | ✔️ |
| | |  Registering with password that is too short | Error message will be shown _&quot;Password must be at least 6 characters&quot;_ | ✔️ |
| | | Password entered does not match | Error message will be shown _&quot;Passwords must match&quot;_ | ✔️ |
| | | Registering with an email that is already registered | Error message will be shown _&quot;Email already exists&quot;_ | ✔️ |
| | |  Registering with all valid inputs | Account will be registered | ✔️ |
| |  Button | &quot;Back to home&quot; button works | User is brought back to home | ✔️ |
| | | &quot;Already have an account? Log in&quot; works | User is brought to log in page | ✔️ |
| | Third party authentication | Registering with google | A pop up from google prompts users to log in. Once successful, user is registered | ✔️ |
|Log In | Able to log in | Logging in with none of the fields filled in | All the fields should show various error message <br> Email: &quot;Email field is required&quot;<br>Password: &quot;Password field is required&quot; | ✔️ |
|| |  Logging in with password field filled only | Error message will be show in email _&quot;Email field is required&quot;_ | ✔️ |
| | |Logging in with email field filled only | Error message will be shown in password _&quot;Password field is required&quot;_| ✔️ |
| | | Logging in with an invalid email eg &quot;qwerty&quot; | Error message will be shown _&quot;Email is invalid&quot;_ | ✔️ |
| | | Password does not match email | Error message will be shown _&quot;Password incorrect&quot;_ | ✔️ |
| | | Email is not registered | Error message will be shown _&quot;Email not found&quot;_ | ✔️ |
| | | Logging in with correct login credentials | Dashboard will be loaded | ✔️ |
| | Button | &quot;Back to home&quot; button works | User is brought back to home | ✔️ |
| | | &quot;Don&#39;t have an account? Register&quot; works | User is brought to log in page | ✔️ |
| | Third party authentication | Log in with google | A pop up from google prompts users to log in. Once successful, user is logged in | ✔️ |
| Navbar | Navigation bar works as planned | Dashboard button brings the user to dashboard page | Dashboard page loads when clicked | ✔️ |
| | | Cashier button brings the user to cahier page | Cashier page loads when clicked | ✔️ |
| | | Inventory button brings the user to inventory page | Inventory page loads when clicked | ✔️ |
| | | Sales report button brings the user to sales report page | Sales page loads when clicked | ✔️ |
| | | Profile button brings the user to profile page | Profile page loads when clicked | ✔️ |
| | | Logout button sign the user out | Logout button should log the user out and bring them back to the login page | ✔️ |
| | Visibility of navigation bar | User is logged in | Navigation bar show up | ✔️ |
| | | User is not logged in | Navigation bar does not show up | ✔️ |
Profile | Able to access the website | User is logged in | Profile should be shown | ✔️ |
| | | User is not logged in | Unable to access profile and redirected to log in page | ✔️ |
| | Able to see information stored in the server | Basic info (name and email) is shown | Name and email is filled | ✔️ |
| | | Able to see address if it is saved | Address is filled | ✔️ |
| | | Able to see number if it is saved | Number is filled | ✔️ |
| | Modify username | Clicking on update without changing username should not do anything | An error is shown _&quot;Please enter a new name&quot;_ Name on navbar should not change| ✔️ |
| | | Clicking on update when username field is empty should not update username | An error is shown _&quot;Name field is required&quot;_ Name on navbar should not change | ✔️ |
| | |  Clicking on update will change the user&#39;s name | A success message is shown _&quot;Name updated.&quot;_ Name on navbar is updated | ✔️ |
| | Modify address | Clicking on update without changing address should not do anything | An error is shown _&quot;Please enter a new address&quot;_ | ✔️ |
| | | Clicking on update when address field is empty should not update address | An error is shown _&quot;Address field is required_ | ✔️ |
| | |Clicking on update will change the user&#39;s address | A success message is shown _&quot;Address updated.&quot;_ | ✔️ |
| | Modify email | Clicking on update without changing email should not do anything | An error is shown _&quot;Please enter a new_ email&quot; | ✔️ |
| | |  Clicking on update when email field is empty should not update email | An error is shown _&quot;Email field is required_| ✔️ |
| | | Clicking on update when email field is not a valid email should not update email | An error is shown _&quot;Email is invalid&quot;_ | ✔️ |
| | | Clicking on update when email field is a registered email should not update email | An error is shown _&quot;Email already exists&quot;_ | ✔️ |
| | | Clicking on update will change the user&#39;s email | A success message is shown _&quot;Email updated.&quot;_ | ✔️ |
| | Modify number | Clicking on update without changing number should not do anything | An error is shown _&quot;Please enter a new number_&quot; | ✔️ |
| | | Clicking on update when number field is empty should not update number | An error is shown _&quot;Number field is required_ | ✔️ |
| | |  Clicking on update will change the user&#39;s number | A success message is shown _&quot;Number updated.&quot;_ | ✔️|
| | Update password | Clicking on save without entering any input | There shouldn&#39;t have any error or success message | ✔️ |
| | | Entering new password without old password | An error is shown _&quot;Old Password is required&quot;_ | ✔️ |
| | | Entering old password without new password | An error is shown _&quot;Password field is required&quot;_ | ✔️ |
| | | Entering only one password and not confirmation password | An error is shown _&quot;Confirm password field is required&quot;_ | ✔️ |
| | | Entering only confirmation password and not new password field | An error is shown _&quot;Password field is required&quot;_ | ✔️ |
| | | Entering wrong old password | An error is shown _&quot;Password incorrect&quot;_ | ✔️ |
| | | Entering different password for new password and confirmation password field | An error is shown &quot;Passwords must match&quot; | ✔️ |
| | | Entering a new password of less than 6 characters | An error is shown _&quot;Password must be at least 6 characters&quot;_ | ✔️ |
| | | Changing the password with the fields filled in appropriately | A success message is shown _&quot;Password updated&quot;_ | ✔️ |
| Dashboard | Able to access the website | User is logged in | Dashboard should be shown | ✔️ |
| | |User is not logged in | Unable to access dashboard and redirected to log in page | ✔️ |
| | Revenue overview | User is able to see the correct revenue for the following category: total, average, daily | Revenue show is correct, ie daily revenue is 0 when the user have not input any sales yet | ✔️ |
| | | Revenue chart of the user is shown | Only the last 7 days revenue is shown | ✔️ |
| | | Click on the points of the revenue chart will display the revenue count of that day | Correct revenue count for that day is shown | ✔️ |
| | Transaction history | Transaction history is shown | All the transaction records are shown in decreasing order | ✔️ |
| | | Appropriate information for each transaction is shown in the table | TransactionID, date&amp;time, number of items and revenue is shown for each transaction | ✔️ |
| | Invoice | Clicking on the receipt got the individual will render the invoice for it | Invoice for the transaction will be shown | ✔️ |
| |  |Invoice will show address if it is saved in the profile tab | Address will be shown at the top of the invoice | ✔️ |
| | | Invoice will show contact number if it is saved in the profile tab | Contact number is shown at the top of the invoice | ✔️ |
| | | Invoice will not show the address and contact field if the info is not available | Address and phone number is not shown | ✔️ |
| | | TransactionID, Date and time of the transaction will be shown in the second part of the invoice | Correct information is shown | ✔️ |
| | |Information of items involved in the transaction is shown | Details of items sold is shown (count, title, price etc) | ✔️ |
| | | Total and tax (7%) is accurate | Total and tax(7%) of the transaction is accurate | ✔️ |
| Cashier | Able to access the website | User is logged in | Cashier should be shown | ✔️ |
| | | User is not logged in | Unable to access Cashier and redirected to login page | ✔️ |
| |Inventory | There is nothing in inventory | Nothing shows up in inventory tab | ✔️ |
| | | Items present in inventory | Inventory displayed with correct items and quantities | ✔️ |
| | | Inventory not loaded immediately | Loader displayed then inventory displayed once information received | ✔️ |
| | Cart | Cart stored in local storage | Cart loaded with previously loaded items when page is reloaded/refreshed | ✔️ |
| | | Nothing in cart | Nothing shown in cart tab | ✔️ |
| | | Items added to cart | Cart immediately updates with item information | ✔️ |
| | | Multiple items added | Quantity in cart correctly reflects number of items added | ✔️ |
| | | Different items added | Cart should grow into an infinite scrollable list of items | ✔️ |
| | | Remove from cart | Item removal should be reflected properly in both the cart tab and local storage | ✔️ |
| | Checkout | Checkout button | Quantity of items in cart should be properly deducted from inventory stock in backend | ✔️ |
| | |  Inventory display after checkout | Inventory display should immediately refresh to reflect updated stock count | ✔️ |
| | Receipt tab | Receipt | Receipt should reflect overall price of items in cart | ✔️ |
| | | Receipt scrolling | Receipt should grow to right before checkout button then become an infinitely scrolling tab | ✔️ |
| | | Receipt for local storage of cart | Receipt should still reflect correct total after refreshing/reloading page | ✔️ |
| Inventory | Able to access the website | User is logged in | Inventory should be shown | ✔️ |
| | | User is not logged in | Unable to access inventory and redirected to log in page | ✔️ |
| | Table to show inventory | There is item in the inventory | Details of the item will be shown in the table | ✔️ |
| | | There is no item in the inventory | A line stating that there is no inventory will be shown | ✔️ |
| |Adding products to inventory (create) | Able to add in new inventory by manually filling up the form | A new product will be added to the inventory and shown | ✔️ |
| | |  Clicking add product button or close will close the modal | Modal to add inventory will be closed | ✔️ |
| | | Able to add inventory by using CSV | All the new products in the CSV are uploaded only after a &quot;confirm&quot; pops up. | ✔️ |
| | | Entering an empty field in barcode | An error will be shown &quot;Barcode is required&quot; and item is not added in | ✔️ |
| | | Entering an empty field in title | An error will be shown &quot;Title is required&quot; and item is not added in | ✔️ |
| | | Entering an empty field in category | An error will be shown &quot;Category is required&quot; and item is not added in | ✔️ |
| | | Entering an empty field in price | An error will be shown &quot;Price is required&quot; and item is not added in | ✔️ |
| | | Entering an empty field in quantity | An error will be shown &quot;Quantity is required&quot; and item is not added in | ✔️ |
| | |Entering an empty field in cost | An error will be shown &quot;Cost is required&quot; and item is not added in | ✔️ |
| | | Entering a negative number in price | An error will be shown &quot;Price cannot be less than 0&quot; and item is not added in | ✔️ |
| | | Entering a negative number in cost | An error will be shown &quot;Cost cannot be less than 0&quot; and item is not added in | ✔️ |
| | | Entering a negative number in quantity | An error will be shown &quot;Quantity cannot be less than 0&quot; and item is not added in | ✔️ |
| | Editing product (update) | Product details can be shown after clicking on the edit button | Details are written on the form. | ✔️ |
| | | Clicking on the cancel button cancels the update | User is brought back to the inventory page | ✔️ |
| | | Clicking on the back to inventory page brings the user back to inventory page | User is brought back to the inventory page | ✔️ |
| | | Able to update the item | Clicking save will save the changes to the product | ✔️ |
| | | Entering an empty field in barcode | An error will be shown &quot;Barcode is required&quot; and item is not edited | ✔️ |
| | | Entering an empty field in title | An error will be shown &quot;Title is required&quot; and item is not added in | ✔️ |
| | | Entering an empty field in category | An error will be shown &quot;Category is required&quot; and item is not edited | ✔️ |
| | |Entering an empty field in price | An error will be shown &quot;Price is required&quot; and item is not edited | ✔️ |
| | | Entering an empty field in quantity | An error will be shown &quot;Quantity is required&quot; and item is not edited | ✔️ |
| | | Entering an empty field in cost | An error will be shown &quot;Cost is required&quot; and item is not edited | ✔️ |
| | | Entering a negative number in price | An error will be shown &quot;Price cannot be less than 0&quot; and item is not edited | ✔️ |
| | | Entering a negative number in cost | An error will be shown &quot;Cost cannot be less than 0&quot; and item is not edited | ✔️ |
| | | Entering a negative number in quantity | An error will be shown &quot;Quantity cannot be less than 0&quot; and item is not edited | ✔️ |
| | Deleting product | Clicking on &quot;delete?&quot; button should change it to a confirmation button | Button changes to the confirmation button of &quot;delete&quot; and &quot;cancel&quot; | ✔️ |
| | | Clicking on the confirm delete button will delete the item | Product is removed from the inventory and won&#39;t be shown | ✔️ |
| | Searching | Typing in the search bar will search barcode, title and category | Product will be filter as the user is typing in the search field | ✔️ |
| | Advance search | Clicking on the advance search button opens it up | Advance search field opens up | ✔️ |
| | | Clicking on &quot;back to inventory&quot; loads the inventory | Inventory loads | ✔️ |
| | | Searching by some field and opening advance search again will still see the item | Search criteria is still filled in the form | ✔️ |
| | | Pressing reset in advance search will remove all the search criterias | Search criteria resets | ✔️ |
| | | Sort by &quot;BARCODE - ASCENDING&quot; | Products are sorted based on barcode, in increasing order | ✔️ |
| | | Sort by &quot;BARCODE - DESCENDING&quot; | Products are sorted based on barcode, in decreasing order | ✔️ |
| | | Sort by &quot;TITLE - ASCENDING&quot; | Products are sorted based on title, in increasing order | ✔️ |
| | | Sort by &quot;TITLE - DESCENDING&quot; | Products are sorted based on title, in decreasing order | ✔️ |
| | | Sort by &quot;CATEGORY - ASCENDING&quot; | Products are sorted based on category, in increasing order | ✔️ |
| | | Sort by &quot;CATEGORY - DESCENDING&quot; | Products are sorted based on category, in decreasing order | ✔️ |
| | | Sort by &quot;COST - ASCENDING&quot; | Products are sorted based on cost, in increasing order | ✔️ |
| | | Sort by &quot;COST - DESCENDING&quot; | Products are sorted based on cost, in decreasing order | ✔️ |
| | | Sort by &quot;PRICE - ASCENDING&quot; | Products are sorted based on price, in increasing order | ✔️ |
| | | Sort by &quot;PRICE - DESCENDING&quot; | Products are sorted based on price, in decreasing order | ✔️ ||
| | | Sort by &quot;QUANTITY - ASCENDING&quot; | Products are sorted based on quantity, in increasing order | ✔️ |
| | | Sort by &quot;QUANTITY - DESCENDING&quot; | Products are sorted based on quantity, in decreasing order | ✔️ |
| | | Filling up barcode section and searching | Products shown will contain the characters being searched in its barcode | ✔️ |
| | | Filling up title section and searching | Products shown will contain the characters being searched in its title | ✔️ |
| | | Filling up category section and searching | Products shown will contain the characters being searched in its category | ✔️ |
| | | Filling up the min price section and searching | Product shown has a price higher than the minimum price as searched | ✔️ |
| | | Filling up the max price section and searching | Product shown has a price lower than the maximum price as searched | ✔️ |
| | | Filling up the min and max price section and searching | Product shown has a price between the minimum and maximum price as searched | ✔️ |
| | | Filling up the min cost section and searching | Product shown has a cost higher than the minimum cost as searched | ✔️ |
| | | Filling up the max cost section and searching | Product shown has a cost lower than the maximum cost as searched | ✔️ |
| | | Filling up the min and max cost section and searching | Product shown has a cost between the minimum and maximum cost as searched | ✔️ |
| | | Filling up the min stock section and searching | Product shown has a stock higher than the minimum stock as searched | ✔️ |
| | | Filling up the max stock section and searching | Product shown has a stock lower than the maximum stock as searched | ✔️ |
| | | Filling up the min and max stock section and searching | Product shown has a stock between the minimum and maximum stock as searched | ✔️ |
| | | Filling up any 2 or more of the section and searching | The product shown will match the search criteria | ✔️ |
| Sales | Able to access the website | User is logged in | Sales page should be shown | ✔️ |
| | | User is not logged in | Unable to access sales page and redirected to log in page | ✔️ |
| | Revenue chart | Revenue chart is shown | Revenue chart shows the transaction records for the last 28 days | ✔️ |
| | | Clicking on the points will show the revenue of the specific day | Revenue for that day is shown | ✔️ |
| | | Revenue and profit is shown in the following category: all time, year-to-date, monthly | Revenue and profit is shown | ✔️ |
| | Profit, revenue, sales chart | Profit chart shows the comparison between the profit in the last 3 months | Profit chart shown is accurate and for the last 3 months | ✔️ |
| | | Revenue chart shows the comparison between the profit in the last 3 months | Revenue chart shown is accurate and for the last 3 months | ✔️ |
| | | Sales chart shows the comparison between the profit in the last 3 months | Sales chart shown is accurate and for the last 3 months | ✔️ |