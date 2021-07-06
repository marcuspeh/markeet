import sys
import os
import math
import string
import logging
from random import random
from teleToken import token

import requests
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters

class telegramBot:
    def __init__(self, token):
        # Enable logging
        logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                            level=logging.INFO)

        self.logger = logging.getLogger(__name__)
        self.command = None
        self.cache = None
        self.token = token

    def start(self, update, context):
        """Send a message when the command /start is issued."""
        self.commands = "/start"
        self.cache = None
        update.message.reply_text('Hi there!')

    def help(self, update, context):
        """Send a message when the command /help is issued."""
        update.message.reply_text('Help!\n\n/checkstock - Check if an item is in stock at a particular store')
        self.commands = "/help"
        self.cache = None

    def checkStock(self, update, context):
        """Check stock in shop"""
        self.command = "/checkstock"
        self.cache = None
        update.message.reply_text('Enter the shop name (case sensitive)')

    def checkStock_StoreName(self, update, text):
        self.cache = text
        update.message.reply_text('Enter the item to find (case sensitive)')

    def checkStock_ItemName(self, update, text):
        url = "http://localhost:5000/api/telegram/checkstock"
        json = {"shopName": self.cache, "productName": text}
        res = requests.get(url, json = json)
        result = res.json()
        update.message.reply_text(result["message"])
        self.command = None
        self.cache = None

    def listInventory(self, update, text):
        self.command = "/list"
        self.cache = None
        update.message.reply_text('Enter the shop name (case sensitive)')
    
    def listInventory_ItemName(self, update, text):
        url = "http://localhost:5000/api/telegram/listinventory"
        json = {"shopName": text}
        res = requests.get(url, json = json)
        result = res.json()
        if "inventory" in result:
            result = result["inventory"]
            result = [(x["title"]) for x in result]
            result.sort()
            temp = "\n".join(result)

            update.message.reply_text("All products at {}:\n{}".format(text, temp))
        else:
            update.message.reply_text(result["message"])
        self.command = None
        self.cache = None

    def unknown(self, update, context):
        if self.command == "/checkstock":
            if not self.cache:
                return self.checkStock_StoreName(update, update.message.text)
            else:
                return self.checkStock_ItemName(update, update.message.text)
        elif self.command == "/list":
            return self.listInventory_ItemName(update, update.message.text)
        else:
            self.command = None
            self.cache = None
            return self.help(update, context)
                
    def run(self):
        """Start the bot."""
        # Create the Updater and pass it your bot's token.
        updater = Updater(self.token)

        # Get the dispatcher to register handlers
        dispatcher = updater.dispatcher

        # on different commands - answer in Telegram
        dispatcher.add_handler(CommandHandler("start", self.start))
        dispatcher.add_handler(CommandHandler("help", self.help))
        dispatcher.add_handler(CommandHandler("checkstock", self.checkStock))
        dispatcher.add_handler(CommandHandler("list", self.listInventory))

        # on non command i.e message - echo the message on Telegram
        dispatcher.add_handler(MessageHandler(Filters.text, self.unknown))

        # Start the Bot
        updater.start_polling()

        # Run the bot until you press Ctrl-C or the process receives SIGINT,
        # SIGTERM or SIGABRT. This should be used most of the time, since
        # start_polling() is non-blocking and will stop the bot gracefully.
        updater.idle()



if __name__ == "__main__":
    bot = telegramBot(token)
    bot.run()



