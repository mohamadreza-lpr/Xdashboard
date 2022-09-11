<template>
     <div class="container-fluid">
          <div class="row mt-4">
               <div class="col-md-4">
                    <div id="chart">
                         <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
                    </div>
               </div>
               <div class="col-md-4">
                    <div id="chart" class="mt-4">
                         <apexchart type="pie" width="380" :options="pie.chartOptions" :series="pie.series"></apexchart>
                    </div>
               </div>
               <div class="col-md-4">
                    <div id="chart">
                         <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
                    </div>
               </div>
          </div>
          <div class="row">
               <x-card>
                    <h1>Hello</h1>
               </x-card>
               <x-button>

               </x-button>
          </div>
     </div>
</template>

<script>
import ApexCharts from "apexcharts";
export default {
     components: {
          ApexCharts,
     },
     data() {
          return {
               series: [
                    {
                         name: "Desktops",
                         data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
                    },
               ],
               chartOptions: {
                    chart: {
                         height: 350,
                         type: "line",
                         zoom: {
                              enabled: false,
                         },
                    },
                    dataLabels: {
                         enabled: false,
                    },
                    stroke: {
                         curve: "straight",
                    },
                    title: {
                         text: "Product Trends by Month",
                         align: "left",
                    },
                    grid: {
                         row: {
                              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
                              opacity: 0.5,
                         },
                    },
                    xaxis: {
                         categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
                    },
               },
               pie: {
                    series: [44, 55, 13, 43, 22],
                    chartOptions: {
                         chart: {
                              width: 380,
                              type: "pie",
                         },
                         labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
                         responsive: [
                              {
                                   breakpoint: 480,
                                   options: {
                                        chart: {
                                             width: 200,
                                        },
                                        legend: {
                                             position: "bottom",
                                        },
                                   },
                              },
                         ],
                    },
               },
          };
     },
};
</script>

<style scoped></style>
