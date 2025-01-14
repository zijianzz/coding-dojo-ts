/* eslint-disable max-classes-per-file */
const MAX_QUALITY = 50;
const MIN_QUALITY = 0;
const LEGENDARY_ITEM = 'Sulfuras, Hand of Ragnaros';
const AGED_BRIE = 'Aged Brie';
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const applyThresholdQuality = (item: Item) => {
  item.quality = Math.min(MAX_QUALITY, item.quality);
  item.quality = Math.max(MIN_QUALITY, item.quality);
};

const updateForBrie = (item: Item) => {
  item.sellIn -= 1;
  item.quality += 1;
  if (item.sellIn < 0) {
    item.quality += 1;
  }
  applyThresholdQuality(item);
};

const updateForBackstagePasses = (item: Item) => {
  item.sellIn -= 1;
  item.quality += 1;

  if (item.sellIn < 5) {
    item.quality += 2;
  } else if (item.sellIn < 10) {
    item.quality += 1;
  }

  if (item.sellIn < 0) {
    item.quality = -1;
  }
  applyThresholdQuality(item);
};

const updateForOthers = (item: Item) => {
  item.sellIn -= 1;
  item.quality -= 1;
  if (item.sellIn < 0) {
    item.quality -= 1;
  }
  applyThresholdQuality(item);
};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case LEGENDARY_ITEM:
          break;
        case AGED_BRIE:
          updateForBrie(item);
          break;
        case BACKSTAGE_PASSES:
          updateForBackstagePasses(item);
          break;
        default:
          updateForOthers(item);
          break;
      }
    });
  }
}
