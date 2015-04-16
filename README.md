# HighchartsDirective
Wrapper around Highcharts for AngularJS - solves many Angular/jQuery integration problems

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

```html
<!-- ... then use it as you would with any angular directive -->
<div class="chart-wrapper" highcharts config="chart.config" series="chart.series"></div>
```

# Attributes

# API

The following methods are exposed in the `config` object that you passed to the directive through the `config` attribute

| Method              | Arguments | Description                                                                 |
|---------------------|-----------|-----------------------------------------------------------------------------|
| getChart            | none      | retrieves the underlying Highcharts object                                  |
| api.removeAllSeries | none      | removes all series from the current chart                                   |
| api.addSeries       | object    | add the given series                                                        |
| api.removeSeries    | object    | if `id` is set, series with given `id` will be removed, likewise for `name` |
