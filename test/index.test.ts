import { calcAvgNumber, Channel } from '../index';

describe('testing calcAvgNumber from index', () => {
  test('invalid timestamp', () => {
    try {
      calcAvgNumber(Channel.sales, [
        {
          "id": "123",
          "channel": Channel.sales,
          "timestamp": "NON_VALID_TIMESTAMP",
        }
      ]
      )
      expect(true).toBe(false) // should not here as expect to throw error
    } catch (error) { }
  });

  test('one application data with channel sales', () => {
    var result = calcAvgNumber(Channel.sales,
      [
        {
          "id": "123",
          "channel": Channel.sales,
          "timestamp": "2022-08-01 1:25:33 +1200",
        }
      ]
    )
    expect(result).toBe(3);
  });

  test('mutiple application data with channel sales', () => {
    var result = calcAvgNumber(Channel.sales,
      [
        {
          "id": "1",
          "channel": Channel.sales,
          "timestamp": "2022-08-01 0:00:00 +1200",
        },
        {
          "id": "2",
          "channel": Channel.sales,
          "timestamp": "2022-08-01 1:00:00 +1200",
        },
        {
          "id": "3",
          "channel": Channel.qr,
          "timestamp": "2022-08-01 2:00:00 +1200",
        }
      ]
    )
    expect(result).toBe(2);
  });

  test('application data and channel all', () => {
    var result = calcAvgNumber(Channel.all,
      [
        {
          "id": "1",
          "channel": Channel.sales,
          "timestamp": "2022-08-01 0:00:00 +1200",
        },
        {
          "id": "2",
          "channel": Channel.sales,
          "timestamp": "2022-08-01 1:00:00 +1200",
        },
        {
          "id": "3",
          "channel": Channel.qr,
          "timestamp": "2022-08-01 2:00:00 +1200",
        },
        {
          "id": "4",
          "channel": Channel.qr,
          "timestamp": "2022-08-01 3:00:00 +1200",
        }
      ]
    )
    expect(result).toBe(3);
  });
});