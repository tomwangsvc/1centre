import * as rawApplications from './applications.json'

const record: Record<number, number> = {
  0: 1,
  1: 3,
  2: 2,
  3: 3,
  4: 1,
  5: 2,
  6: 1,
  7: 1,
  8: 1,
  9: 4,
  10: 3,
  11: 4,
  12: 3,
  13: 4,
  14: 2,
  15: 3,
  16: 2,
  17: 3,
  18: 3,
  19: 3,
  20: 3,
  21: 4,
  22: 1,
  23: 3,
};

export enum Channel {
  sales = "sales",
  website = "website",
  qr = "qr",
  all = "all",
}

interface Application {
  id: string;
  timestamp: string;
  channel: string;
}

export function calcAvgNumber(channel: Channel, applications: Application[]): number {
  try {
    var sum = 0, index = 0
    for (var applcation of applications) {
      if (channel != applcation.channel && channel != Channel.all) {
        continue
      }
      var date = new Date(applcation.timestamp)
      var hour = date.getHours()
      sum += record[date.getHours()]
      index++
      console.log(22222, applcation.timestamp, hour, record[date.getHours()], sum, index)
    }
    // round up avg number
    return Math.ceil(sum / index)
  } catch (error) {
    throw new Error("failed to calculate avg number:", error);
  }
}

// console.log(calcAvgNumber(Channel.sales, rawApplications.applications))