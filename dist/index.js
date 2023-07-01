"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcAvgNumber = exports.Channel = void 0;
const rawApplications = require("./applications.json");
const record = {
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
var Channel;
(function (Channel) {
    Channel["sales"] = "sales";
    Channel["website"] = "website";
    Channel["qr"] = "qr";
    Channel["all"] = "all";
})(Channel || (exports.Channel = Channel = {}));
function calcAvgNumber(channel, applications) {
    try {
        var sum = 0, index = 0;
        for (var applcation of applications) {
            if (applcation.channel != channel && applcation.channel != Channel.all) {
                continue;
            }
            var date = new Date(applcation.timestamp);
            var hour = date.getHours();
            sum += record[date.getHours()];
            index++;
            console.log(22222, applcation.timestamp, hour, record[date.getHours()], sum, index);
        }
        // round up avg number
        return Math.ceil(sum / index);
    }
    catch (error) {
        throw new Error("failed to calculate avg number:", error);
    }
}
exports.calcAvgNumber = calcAvgNumber;
console.log(calcAvgNumber(Channel.sales, rawApplications.applications));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx1REFBc0Q7QUFFdEQsTUFBTSxNQUFNLEdBQTJCO0lBQ3JDLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDO0lBQ0osQ0FBQyxFQUFFLENBQUM7SUFDSixDQUFDLEVBQUUsQ0FBQztJQUNKLENBQUMsRUFBRSxDQUFDO0lBQ0osRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztDQUNOLENBQUM7QUFFRixJQUFZLE9BS1g7QUFMRCxXQUFZLE9BQU87SUFDakIsMEJBQWUsQ0FBQTtJQUNmLDhCQUFtQixDQUFBO0lBQ25CLG9CQUFTLENBQUE7SUFDVCxzQkFBVyxDQUFBO0FBQ2IsQ0FBQyxFQUxXLE9BQU8sdUJBQVAsT0FBTyxRQUtsQjtBQVFELFNBQWdCLGFBQWEsQ0FBQyxPQUFnQixFQUFFLFlBQTJCO0lBQ3pFLElBQUk7UUFDRixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQTtRQUN0QixLQUFLLElBQUksVUFBVSxJQUFJLFlBQVksRUFBRTtZQUNuQyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUksT0FBTyxJQUFJLFVBQVUsQ0FBQyxPQUFPLElBQUssT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDdkUsU0FBUTthQUNUO1lBQ0QsSUFBSSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1lBQ3pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUMxQixHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1lBQzlCLEtBQUssRUFBRSxDQUFBO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsVUFBVSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQTtTQUNwRjtRQUNELHNCQUFzQjtRQUN0QixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFBO0tBQzlCO0lBQUMsT0FBTyxLQUFLLEVBQUU7UUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLGlDQUFpQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0tBQzNEO0FBQ0gsQ0FBQztBQWxCRCxzQ0FrQkM7QUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFBIn0=