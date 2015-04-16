# HighchartsDirective

Wrapper around Highcharts for AngularJS - solves many Angular/jQuery integration problems

It uses the jQuery resize plugin to ensure that the chart always re-sizes properly to container dimension changes. Traditionally Highcharts only resized on `window` resize events

The directive provides convienence methods for interacting with the underlying chart. 

Complete control of the underlying `Highcharts.Chart` or `Highcharts.StockChart` object can be achieved by retrieving the underlying chart object using `getChart()` method on the `config` object passed during directive construction.

# Install

`bower install highcharts-directive`
  
```html
<!-- include the file -->
<script src="../highcharts-directive.js"></script>
<!-- other dependencies -->
<script src="../bower_components/jquery/dist/jquery.js"></script>
<script src="../bower_components/highstock-release/highstock.js"></script>
<script src="../bower_components/angular/angular.min.js"></script>
<script src="../highcharts-directive.js"></script>
```

```js
var app = angular.module('App', ['highcharts-directive'])
```

```html
<!-- ... then use it as you would with any angular directive -->
<div class="chart-wrapper" highcharts config="chart.config" series="chart.series"></div>
```

# Attributes

| Name         | Type    | Description                                                                                                                                                              |
|--------------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| config       | object  | Highcharts configuration object (except the series property)                                                                                                             |
| series       | array   | Highcharts series array. This array may be watched and new series automatically rendered if `manageSeries` is set to true                                                |
| highstock    | boolean | indicate whether the underlying chart should be a StockChart or not                                                                                                      |
| manageSeries | boolean | if `true` the directive will `$watch` the `series` array for changes and render those changes accordingly. *This requires you to have an `id` property for every series* |

# API

The following methods are exposed in the `config` object that you passed to the directive through the `config` attribute

| Method              | Arguments | Description                                                                 |
|---------------------|-----------|-----------------------------------------------------------------------------|
| getChart            | none      | retrieves the underlying Highcharts object                                  |
| api.removeAllSeries | none      | removes all series from the current chart                                   |
| api.addSeries       | object    | add the given series                                                        |
| api.removeSeries    | object    | if `id` is set, series with given `id` will be removed, likewise for `name` |
