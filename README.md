# HighchartsDirective

Wrapper around Highcharts for AngularJS - solves many Angular/jQuery integration problems

It uses the jQuery resize plugin to ensure that the chart always re-sizes properly to container dimension changes. Traditionally Highcharts only resized on `window` resize events

The directive provides convienence methods for interacting with the underlying chart. 

Complete control of the underlying `Highcharts.Chart` or `Highcharts.StockChart` object can be achieved by retrieving the underlying chart object using `getChart()` method on the `config` object passed during directive construction.

# Development TODOs

  - Instead of polling, use a less resource intensive and safer way to trigger resize events [Currently using the following approach](https://github.com/cowboy/jquery-resize/)

# Install & Example Usage

`bower install highcharts-directive`
  
```html
<!-- include the file -->
<script src="../highcharts-directive.js"></script>
<!-- other dependencies -->
<script src="../bower_components/jquery/dist/jquery.js"></script>
<script src="../bower_components/highstock-release/highstock.js"></script>
<script src="../bower_components/angular/angular.min.js"></script>
```

```js
var app = angular.module('App', ['highcharts-directive'])
```

```html
<!-- ... then use it as you would with any angular directive -->
<div highcharts config="chart.config" series="chart.series" api="chart.api"></div>
```

```js
// assuming you have the following setup in your Controller
$scope.chart = { 
  config: { xAxis: {...}, ... },
  series: [...],
  api: {} // this empty object is used to store methods exposed by the directive, should you want to interact with the underlying charts
}

```

# Attributes

| Name         | Type    | Description                                                                                                                                                              |
|--------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config       | object  | Highcharts configuration object (except the series property)                                                                                                             |
| series       | array   | Highcharts series array. This array may be watched and new series automatically rendered if `manageSeries` is set to true                                                |
| highstock    | boolean | indicate whether the underlying chart should be a StockChart or not                                                                                                      |
| manageSeries | boolean | if `true` the directive will `$watch` the `series` array for changes and render those changes accordingly. *This requires you to have an `id` property for every series* |
| api | empty object | if set, the directive will expose, on the provided object, some rudimentary methods for interacting with the created Highchart object. see below for more info. |

# API

The following methods are exposed in the `config` object that you passed to the directive through the `config` attribute

| Method              | Arguments | Description                                                                 |
|---------------------|-----------|-----------------------------------------------------------------------------|
| getChart            | none      | retrieves the underlying Highcharts object                                  |
| removeAllSeries | none      | removes all series from the current chart                                   |
| addSeries       | object    | add the given series                                                        |
| removeSeries    | object    | if `id` is set, series with given `id` will be removed, likewise for `name` |

### Example
```js
  $scope.chart = { ..., api: {} };
  $scope.chart.api.removeSeries({id: 'myChart'});
```
