import { Injectable, NotFoundException } from '@nestjs/common';
import { Cats, Users } from 'src/types/main-assets-types';
import { POUCH_PRICES } from './constants/constants';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class CommsService {
  private users : Users[]

  constructor() {
    //Read and parse user data from the file as json and assign it to users
    const dataPath = path.join(__dirname, '..', '..', 'data.json');
    this.users = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
  }

  getNextDelivery(userId: string) {
    const user = this.users.find((u) => u.id === userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const cats = user.cats
    const activeSubscriptionCats = user.cats.filter((cat) => cat.subscriptionActive);
    //If a cat has no active subscription, inform the user of that
    if (activeSubscriptionCats.length === 0) {
      return {
        title: `No active subscriptions for ${user.firstName}`,
        message: `Hey ${user.firstName}, you currently have no active cat food subscriptions.`,
        totalPrice: 0,
        freeGift: false,
      };
    }

    const catNames = activeSubscriptionCats.map((cat) => cat.name); //get all cats
    const sortedCatsName = catNames.sort()
    const formattedCatNames = this.formatCatNames(sortedCatsName)
    const totalPrice = activeSubscriptionCats.reduce((sum, cat) => sum + POUCH_PRICES[cat.pouchSize], 0);
    const freeGift = totalPrice > 120;
    return {
      title: `Your next delivery for ${user.firstName}`,
      message: `Hey ${user.firstName}! In two days' time, we'll be charging you for your next order for ${formattedCatNames}'s fresh food.`,
      totalPrice: parseFloat(totalPrice.toFixed(2)), //ensures total price is always 2 decimal points
      freeGift: freeGift,
    };
  }

  private formatCatNames(names: string[]): string {
    return names.length > 1 
    ? names.slice(0, -1).join(', ') + ' and ' + names.at(-1)
    : names[0] || ''
  }
  
  

  
}
