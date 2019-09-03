export const APM_REQ = [
    {
      label: "TIME",
      key: "timestamp",
      width: 70
    }
]

export const APM_DEFAULT =  [
    {
      label: "name",
      keys: [ 'request.uri', 'name', 'transactionName' ]
    },
    {
      label: "ms",
      key: 'duration',
      align: "left",
      toFixed: 2,
      width: 100,
      multiply: 1000
    },
    {
      label: "code",
      key: 'httpResponseCode',
      align: "left",
      width: 80
    },
    {
      label: "dbMs",
      key: 'databaseDuration',
      align: "left",
      toFixed: 2,
      width: 100,
      multiply: 1000
    },
    {
      label: "dbCount",
      key: "databaseCallCount",
      width: 100
    },

    {
      label: "extMs",
      key: 'externalDuration',
      align: "left",
      toFixed: 2,
      width: 100,
      multiply: 1000
    },
    {
      label: "extCount",
      key: "externalCallCount",
      width: 100
    },
    {
      label: "qMs",
      key: 'queueDuration',
      align: "left",
      toFixed: 2,
      width: 100,
      multiply: 1000
    }
]