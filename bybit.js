const script = document.createElement("script")
script.src = "https://cdn.jsdelivr.net/npm/echarts@5.4.2/dist/echarts.min.js"
document.body.append(script)

const config = {
    renderTo: "myByBit",
    data: {
        "ret_code":0,
        "ret_msg":null,
        "token":null,
        "result":{
           "cumulativeReturnRateList":{
              "btc":[
                 [
                    "-3.02",
                    1679875200000
                 ],
                 [
                    "-2.53",
                    1679961600000
                 ],
                 [
                    "1.35",
                    1680048000000
                 ],
                 [
                    "0.20",
                    1680134400000
                 ],
                 [
                    "1.77",
                    1680220800000
                 ],
                 [
                    "1.73",
                    1680307200000
                 ],
                 [
                    "0.71",
                    1680393600000
                 ]
              ],
              "user":[
                 [
                    null,
                    1679875200000
                 ],
                 [
                    null,
                    1679961600000
                 ],
                 [
                    null,
                    1680048000000
                 ],
                 [
                    null,
                    1680134400000
                 ],
                 [
                    null,
                    1680220800000
                 ],
                 [
                    null,
                    1680307200000
                 ],
                 [
                    null,
                    1680393600000
                 ]
              ]
           },
           "dailyProfitList":[
              [
                 null,
                 1679875200000
              ],
              [
                 null,
                 1679961600000
              ],
              [
                 null,
                 1680048000000
              ],
              [
                 null,
                 1680134400000
              ],
              [
                 null,
                 1680220800000
              ],
              [
                 null,
                 1680307200000
              ],
              [
                 null,
                 1680393600000
              ]
           ],
           "cumulativeReturnList":[
              [
                 null,
                 1679875200000
              ],
              [
                 null,
                 1679961600000
              ],
              [
                 null,
                 1680048000000
              ],
              [
                 null,
                 1680134400000
              ],
              [
                 null,
                 1680220800000
              ],
              [
                 null,
                 1680307200000
              ],
              [
                 null,
                 1680393600000
              ]
           ],
           "balanceList":[
              [
                 null,
                 1679875200000
              ],
              [
                 null,
                 1679961600000
              ],
              [
                 null,
                 1680048000000
              ],
              [
                 null,
                 1680134400000
              ],
              [
                 null,
                 1680220800000
              ],
              [
                 null,
                 1680307200000
              ],
              [
                 null,
                 1680393600000
              ]
           ]
        },
        "success":true
     }
}

function init() {
    document.querySelector("canvas").parentNode.id = config.renderTo

    let btc = getData()[0]
    let user = getData()[1]

    var chartDom = document.getElementById(config.renderTo) ? document.getElementById(config.renderTo) : alert("No such selector");
    let myChart = echarts.init(chartDom);


    const YELLOW = "#FFC35C"
    const ORANGE = "#F0960E"
    const LIGHT_GRAY = "#E9EDF2"
    const GRAY = "#adb1b8"
    const option = {
        animation: true,
        useUTC: true,
        color: YELLOW,
        // tooltip: {
        //     trigger: "axis",
        //     className: "profit-analysis-echarts-tooltip",
        //     axisPointer: {
        //         z: 0,
        //         axis: "x",
        //         label: {
        //             show: false
        //         },
        //         lineStyle: {
        //             width: 1,
        //             // Цвет вертикальной линии при наведении
        //             color: LIGHT_GRAY,
        //             type: [2, 3]
        //         }
        //     },
        //     formatter(event) {
        //         const result = event.map(e => `\n<p class="list-item">\n
        //                                         <span class="list-item">Фактические суммарные \nизменения цены BTC(%)</span>\n
        //                                         <span class="btc">${e.value}%</span>\n
        //                                     </p>\n
        //                                 `).join("");
        //         return `\n <div class="tooltip-content">\n
        //                     <p class="list-item time">\n
        //                         <span>${event[0].name}</span>\n
        //                     </p>\n
        //                     ${result}\n
        //                 </div>`
        //     }
        // },
        grid: {
            left: "0px",
            right: "5px",
            bottom: "0px",
            top: "32px",
            containLabel: true
        },
        xAxis: {
            type: "category",
            min: e => {
                if (Number.isNaN(e.max) && Number.isNaN(e.min))
                    return -1
            }
            ,
            max: e => {
                if (Number.isNaN(e.max) && Number.isNaN(e.min))
                    return -1
            },
            data: btc[0],
            boundaryGap: false,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 1,
                    color: "#E9EDF2",
                    type: [2, 3]
                }
            },
            axisTick: {
                show: false
            },
            splitNumber: -1,
            axisLabel: {
                formatter: (e, index) => {
                    return index === 0 ? `{left|${e}}` : e === btc[0][btc[0].length - 1] ? e : ""
                },
                rich: {
                    left: {
                        width: 0,
                        align: "left",
                        fontFamily: '"SFEIBMPlexSans", "-apple-system", "BlinkMacSystemFont", "Roboto", "Arial", sans-serif'
                    }
                },
                textStyle: {
                    align: "right"
                },
                showMinLabel: true,
                showMaxLabel: true,
                // ЦВЕТ даты
                color: GRAY,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 18,
                margin: 24,
                fontFamily: '"SFEIBMPlexSans", "-apple-system", "BlinkMacSystemFont", "Roboto", "Arial", sans-serif'
            },
            axisLine: {
                lineStyle: {
                    width: 1,
                    // Цвет линии по нулю
                    color: LIGHT_GRAY,
                    type: [2, 3]
                }
            },
        },
        yAxis: {
            type: "value",
            max: e => {
                if (Number.isNaN(e.max) && Number.isNaN(e.min))
                    return 10
            }
            ,
            min: e => {
                if (Number.isNaN(e.max) && Number.isNaN(e.min))
                    return -10
            },
            splitNumber: 5,
            splitLine: {
                lineStyle: {
                    // ЦВЕТ горизонтальных линий 
                    color: LIGHT_GRAY,
                    type: [2, 3]
                }
            },
            axisLabel: {
                // ЦВЕТ процентов слева
                color: GRAY,
                fontWeight: 400,
                fontSize: 12,
                lineHeight: 18,
                margin: 28,
                fontFamily: '"SFEIBMPlexSans", "-apple-system", "BlinkMacSystemFont", "Roboto", "Arial", sans-serif',
                formatter(e) {
                    return e + "%"
                }
            }
        },
        series: [{
            data: btc[1],
            smooth: true,
            type: "line",
            showSymbol: false,
            symbolSize: 6,
            lineStyle: {
                width: 1.5,
                color: YELLOW,
            }
        },
        {
            data: user[1],
            smooth: true,
            type: "line",
            showSymbol: false,
            symbolSize: 6,
            lineStyle: {
                width: 1.5,
                color: ORANGE,
            }
        }
    ]
    };

    option && myChart.setOption(option);
}

function getData() {
    const resultArr = []

    const { btc, user } = config?.data ? config.data.result.cumulativeReturnRateList : alert("Data required.")
    const btcResult = convertBTC(btc)
    const userResult = convertUser(user)

    resultArr.push(btcResult, userResult)
    return resultArr
}

function convertTime(timeArr) {
    const dateFormat = new Date(timeArr)
    const month = (dateFormat.getMonth() +1 ) >= "10" ? (dateFormat.getMonth() +1 ) : "0" + (dateFormat.getMonth() +1 )
    const day = dateFormat.getDate() >= "10" ? dateFormat.getDate() : "0" + dateFormat.getDate()
    const date = dateFormat.getFullYear() + "-" + month + "-" + day
    return date
}

function convertBTC(dataBtc) {
    const resultBtc = []
    const dateArr = []
    const percentArr = []

    dataBtc.forEach(([percent, timeStamp]) => {
        const time = convertTime(timeStamp)
        dateArr.push(time)
        percentArr.push(percent)
    });
    resultBtc.push(dateArr, percentArr)

    return resultBtc
}

function convertUser(dataUser) {
    const resultUser = []
    const dateArr = []
    const percentArr = []

    dataUser.forEach(([percent, timeStamp]) => {
        const time = convertTime(timeStamp)
        dateArr.push(time)
        percentArr.push(percent)
    });

    resultUser.push(dateArr, percentArr)

    return resultUser
}


setTimeout(() => {
    init()
    console.log("График построен.")
}, 5000)
