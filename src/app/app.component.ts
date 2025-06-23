import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as echarts from 'echarts'
import { map } from 'rxjs';
import { TemperatureChartWidgetComponent } from './temperature-chart-widget/temperature-chart-widget/temperature-chart-widget.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,TemperatureChartWidgetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'poweroptimus';

  constructor(private http: HttpClient) { }

  // // from here
  // @ViewChild('chartContainer', { static: true }) chartContainer!: ElementRef;
  // // @Input() title: string = 'Smoothed Line Chart';
  // option!: echarts.EChartsOption;
  // private chartInstance!: echarts.ECharts;

  // // Static Data for x-axis and each series
  // // xData: string[] = ['10:00', '10:10', '10:20', '10:30', '10:40', '10:50', '11:00'];
  // // readingData: number[] = [120, 130, 125, 140, 150, 160, 170];
  // // actualData: number[] = [100, 110, 105, 108, 115, 118, 120];
  // // spotData: number[] = [90, 92, 91, 94, 97, 96, 98];

  // fullData: any
  // // Full static data (your JSON format)
  // // fullData = [
  // //   { sensorId: 1, readingValue: 60, readingTimestamp: '2025-06-10T10:00:00', spotValue: 75, actualValue: 52, valueDifference: 100 },
  // //   { sensorId: 1, readingValue: 75, readingTimestamp: '2025-06-10T10:01:00', spotValue: 80, actualValue: 5, valueDifference: 100 },
  // //   { sensorId: 1, readingValue: 85, readingTimestamp: '2025-06-10T10:02:00', spotValue: 30, actualValue: 10, valueDifference: 105 },
  // //   { sensorId: 1, readingValue: 90, readingTimestamp: '2025-06-10T10:03:00', spotValue: 20, actualValue: 25, valueDifference: 105 },
  // //   { sensorId: 1, readingValue: 100, readingTimestamp: '2025-06-10T10:04:00', spotValue: 600, actualValue: 20, valueDifference: 110 },
  // //   { sensorId: 1, readingValue: 60, readingTimestamp: '2025-06-10T10:00:00', spotValue: 500, actualValue: 60, valueDifference: 100 },
  // //   { sensorId: 1, readingValue: 75, readingTimestamp: '2025-06-10T10:01:00', spotValue: 80, actualValue: 51, valueDifference: 100 },
  // //   { sensorId: 1, readingValue: 85, readingTimestamp: '2025-06-10T10:02:00', spotValue: 30, actualValue: 45, valueDifference: 105 },
  // //   { sensorId: 1, readingValue: 90, readingTimestamp: '2025-06-10T10:03:00', spotValue: 20, actualValue: 78, valueDifference: 105 },
  // //   { sensorId: 1, readingValue: 100, readingTimestamp: '2025-06-10T10:04:00', spotValue: 100, actualValue: 75, valueDifference: 110 },
  // //   // add more for demo
  // // ];

  // // Current displayed data
  // xData: string[] = [];
  // readingSeries: number[] = [];
  // actualSeries: number[] = [];
  // spotSeries: number[] = [];
  // private intervalId: any;


  // ngOnInit(): void {
  //   this.fetchApi()
   
  //   // this.startSimulatedUpdates(); // Start fake live feed
  // }

  // ngAfterViewInit(){
  //   console.log('asdfnkalhh',this.fullData)
  //   setTimeout(() => {
  //     console.log('blhh')
  //     this.initChart();
  //   },1000)
  // }

  // // ngOnChanges(changes: SimpleChanges): void {
  // //   if (this.chartInstance) {
  // //     this.updateChart();
  // //   }
  // // }

  // initChart(): void {
  //   this.chartInstance = echarts.init(this.chartContainer.nativeElement);
  //   console.log('this.fd',this.fullData)
  //   this.setChartOptions();
  //   this.chartInstance.setOption(this.option);
  // }

  // // updateChart(): void {
  // //   this.setChartOptions();
  // //   this.chartInstance.setOption(this.option);
  // //   this.chartInstance.resize();
  // // }

  // setChartOptions() {
  //   this.option = {
  //     title: {
  //       text: 'Live Sensor Chart',
  //     },
  //     tooltip: {
  //       trigger: 'axis',
  //     },
  //     legend: {
  //       data: ['Reading', 'Actual', 'Spot'],
  //     },
  //     xAxis: {
  //       type: 'category',
  //       data: this.fullData.map((item: any) => item.reading_timestamp),
  //       boundaryGap: false,
  //     },
  //     yAxis: {
  //       type: 'value',
  //     },
  //     series: [
  //       {
  //         name: 'Reading',
  //         type: 'line',
  //         smooth: true,
  //         showSymbol: false,
  //         data: this.fullData.map((item: any) => item.reading_value),
  //       },
  //       {
  //         name: 'Actual',
  //         type: 'line',
  //         smooth: true,
  //         showSymbol: false,
  //         data: this.fullData.map((item: any) => item.actual_value),
  //       },
  //       {
  //         name: 'Spot',
  //         type: 'line',
  //         smooth: true,
  //         showSymbol: false,
  //         data: this.fullData.map((item: any) => item.spot_value),
  //       }
  //     ]
  //   }
  // }

  // // startSimulatedUpdates(): void {
  // //   let currentIndex = 0;

  // //   this.intervalId = setInterval(() => {
  // //     // if (currentIndex >= this.fullData.length) {
  // //     //   clearInterval(this.intervalId);
  // //     //   return;
  // //     // }
  // //     console.log('full data', this.fullData)
  // //     const point = this.fullData[currentIndex];
  // //     console.log('adsf', point)
  // //     const time = new Date(point.readingTimestamp);
  // //     const formattedTime = time.toLocaleTimeString([], {
  // //       hour: '2-digit',
  // //       minute: '2-digit',
  // //     });
  // //     this.xData.push(formattedTime);
  // //     this.readingSeries.push(point.readingValue);
  // //     this.actualSeries.push(point.actualValue);
  // //     this.spotSeries.push(point.spotValue);
  // //     currentIndex++;

  // //     this.chartInstance.setOption({
  // //       xAxis: {
  // //         data: this.xData,
  // //       },
  // //       series: [
  // //         { name: 'Reading', data: this.readingSeries },
  // //         { name: 'Actual', data: this.actualSeries },
  // //         { name: 'Spot', data: this.spotSeries },
  // //       ]
  // //     });
  // //   }, 2000);
  // // }

  // fetchApi() {
  //   console.log('ckadsf')
  //   let params = [
  //     {
  //       "sensor_id": 1,
  //       "reading_value": 50
  //     },

  //     {
  //       "sensor_id": 1,
  //       "reading_value": 100
  //     },
  //     {
  //       "sensor_id": 1,
  //       "reading_value": 200
  //     },

  //     {
  //       "sensor_id": 1,
  //       "reading_value": 300
  //     },
  //     {
  //       "sensor_id": 1,
  //       "reading_value": 400
  //     },
  //     {
  //       "sensor_id": 1,
  //       "reading_value": 500
  //     },
  //     {
  //       "sensor_id": 1,
  //       "reading_value": 600
  //     },
  //     {
  //       "sensor_id": 1,
  //       "reading_value": 700
  //     }

  //   ]
  //   this.http.post(`http://127.0.0.1:8000/insert-readings`, params).pipe((map((resp: any) => {
  //     console.log('from api', resp)
  //     return resp
  //   }))).subscribe((resp: any) => {
  //     console.log('after sub', resp)
  //     this.fullData = resp.readings
  //     console.log('this.fullData', this.fullData)

  //   })

  // }

  // temperatureData: { time: any; value: any }[] = [];
 
  ngOnInit() {
    // setInterval(() => {
    //   const now = Date.now();
    //   const value = Math.round(20 + Math.random() * 5);
    //   this.temperatureData.push({ time: now, value });
 
    //   console.log('nmbn',this.temperatureData)
    //   // Keep only last 60s
    //   this.temperatureData = this.temperatureData.filter(
    //     (d) => now - d.time <= 60000
    //   );
    // }, 1000);

    // let params = {
    //   "sensor_id": 1,
    //   "limit": 60
    // }
    // let sensor_id = 1;
    // this.http.post(`http://127.0.0.1:8000/start-random-readings/${sensor_id}`, params).pipe((map((resp: any) => {
    //   console.log('from api', resp)
    //   return resp
    // }))).subscribe((resp: any) => {
    //   console.log('after sub', resp)
    //   let arr = [];
    //   if(resp.length){
    //     for (const item of resp) {
    //       let ele = {
    //         time: item.reading_timestamp,
    //         value: Math.round(item.reading_value)
    //       }
    //       arr.push(ele)
    //     }
    //   }
      
    // })
    this.fetchAndAppendData();
    setInterval(() => this.fetchAndAppendData(), 4000);
    
  }



  // from here
  temperatureData: { time: number; value: number }[] = [];
  latestTemperature: number = 0;
  lastFetchedTime: number = 0;
 

 
  fetchAndAppendData() {
    // Replace with your real API call
    let params = {
      "sensor_id": 1,
      "limit": 60
    }
    let sensor_id = 1;
    this.http.post<any>(`http://127.0.0.1:8000/start-random-readings/${sensor_id}`,params).subscribe((response) => {


      const mapped = response.map((r:any) => ({
        time: new Date(r.reading_timestamp).getTime(),
        value: r.reading_value,
      }));

      const newData = mapped.filter((item:any) => item.time > this.lastFetchedTime);

      if (newData.length > 0) {
        this.lastFetchedTime = newData[newData.length - 1].time;

        // Append new readings
        this.temperatureData.push(...newData);

        // Keep only last 60 seconds of data
        this.temperatureData = this.temperatureData.filter(
          d => this.lastFetchedTime - d.time <= 60000
        );

        // For the left display
        this.latestTemperature = this.temperatureData.at(-1)?.value || 0;
      }
    });
  }

  // till here


}
