/*!
 *
 * Centric - Bootstrap Admin Template
 *
 * Version: 1.2
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

// APP START
// -----------------------------------

(function() {
    'use strict';

    // Disable warning "Synchronous XMLHttpRequest on the main thread is deprecated.."
    $.ajaxPrefilter(function(options, originalOptions, jqXHR) {
        options.async = true;
    });

})();

(function(global) {
    'use strict';

    global.APP_COLORS = {
        'gray-darker':            '#263238',
        'gray-dark':              '#455A64',
        'gray':                   '#607D8B',
        'gray-light':             '#90A4AE',
        'gray-lighter':           '#ECEFF1',

        'primary':                '#448AFF',
        'success':                '#4CAF50',
        'info':                   '#03A9F4',
        'warning':                '#FFB300',
        'danger':                 '#F44336'
    };

})(window);

(function(global) {
    'use strict';

    global.Colors = new ColorsHandler();

    function ColorsHandler() {
        this.byName = byName;

        ////////////////

        function byName(name) {
            var color = APP_COLORS[name];
            if (!color && (typeof materialColors !== 'undefined')) {
                var c = name.split('-'); // red-500, blue-a100, deepPurple-500, etc
                if (c.length)
                    color = (materialColors[c[0]] || {})[c[1]];
            }
            return (color || '#fff');
        }
    }

})(window);
(function() {
    'use strict';

    $(initDashboard);

    function initDashboard() {

        if (!$.fn.plot || !$.fn.easyPieChart) return;

        // Main Flot chart
        var splineData = [{
            'label': 'Clicks',
            'color': Colors.byName('purple-300'),
            data: [
                ['1', 40],
                ['2', 50],
                ['3', 40],
                ['4', 50],
                ['5', 66],
                ['6', 66],
                ['7', 76],
                ['8', 96],
                ['9', 90],
                ['10', 105],
                ['11', 125],
                ['12', 135]

            ]
        }, {
            'label': 'Unique',
            'color': Colors.byName('green-400'),
            data: [
                ['1', 30],
                ['2', 40],
                ['3', 20],
                ['4', 40],
                ['5', 80],
                ['6', 90],
                ['7', 70],
                ['8', 60],
                ['9', 90],
                ['10', 150],
                ['11', 130],
                ['12', 160]
            ]
        }, {
            'label': 'Recurrent',
            'color': Colors.byName('blue-500'),
            data: [
                ['1', 10],
                ['2', 20],
                ['3', 10],
                ['4', 20],
                ['5', 6],
                ['6', 10],
                ['7', 32],
                ['8', 26],
                ['9', 20],
                ['10', 35],
                ['11', 30],
                ['12', 56]

            ]
        }];
        var splineOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: false,
                    radius: 3
                },
                splines: {
                    show: true,
                    tension: 0.39,
                    lineWidth: 5,
                    fill: 1,
                    fillColor: Colors.byName('primary')
                }
            },
            grid: {
                borderColor: '#eee',
                borderWidth: 0,
                hoverable: true,
                backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: 'transparent',
                mode: 'categories',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 220, // optional: use it for a clear representation
                tickColor: 'transparent',
                font: {
                    color: Colors.byName('blueGrey-200')
                },
                //position: 'right' or 'left',
                tickFormatter: function(v) {
                    return v /* + ' visitors'*/ ;
                }
            },
            shadowSize: 0
        };

        $('#flot-main-spline').each(function() {
            var $el = $(this);
            if ($el.data('height')) $el.height($el.data('height'));
            $el.plot(splineData, splineOptions);
        });


        // Bar chart stacked
        // ------------------------
        var stackedChartData = [{
            data: [
                [1, 45],
                [2, 42],
                [3, 45],
                [4, 43],
                [5, 45],
                [6, 47],
                [7, 45],
                [8, 42],
                [9, 45],
                [10, 43]
            ]
        }, {
            data: [
                [1, 35],
                [2, 35],
                [3, 17],
                [4, 29],
                [5, 10],
                [6, 7],
                [7, 35],
                [8, 35],
                [9, 17],
                [10, 29]
            ]
        }];

        var stackedChartOptions = {
            bars: {
                show: true,
                fill: true,
                barWidth: 0.3,
                lineWidth: 1,
                align: 'center',
                // order : 1,
                fillColor: {
                    colors: [{
                        opacity: 1
                    }, {
                        opacity: 1
                    }]
                }
            },
            colors: [Colors.byName('blue-100'), Colors.byName('blue-500')],
            series: {
                shadowSize: 3
            },
            xaxis: {
                show: true,
                position: 'bottom',
                ticks: 10,
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            yaxis: {
                show: false,
                min: 0,
                max: 60,
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 0,
                color: 'rgba(120,120,120,0.5)'
            },
            tooltip: true,
            tooltipOpts: {
                content: 'Value %x.0 is %y.0',
                defaultTheme: false,
                shifts: {
                    x: 0,
                    y: -20
                }
            }
        };

        $('#flot-stacked-chart').each(function() {
            var $el = $(this);
            if ($el.data('height')) $el.height($el.data('height'));
            $el.plot(stackedChartData, stackedChartOptions);
        });


        // Flot bar chart
        // ------------------
        var barChartOptions = {
            series: {
                bars: {
                    show: true,
                    fill: 1,
                    barWidth: 0.2,
                    lineWidth: 0,
                    align: 'center'
                },
                highlightColor: 'rgba(255,255,255,0.2)'
            },
            grid: {
                hoverable: true,
                clickable: true,
                borderWidth: 0,
                color: '#8394a9'
            },
            tooltip: true,
            tooltipOpts: {
                content: function getTooltip(label, x, y) {
                    return 'Visitors for ' + x + ' was ' + (y * 1000);
                }
            },
            xaxis: {
                tickColor: 'transparent',
                mode: 'categories',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            yaxis: {
                tickColor: 'transparent',
                font: {
                    color: Colors.byName('blueGrey-200')
                }
            },
            legend: {
                show: false
            },
            shadowSize: 0
        };

        var barChartData = [{
            'label': 'New',
            bars: {
                order: 0,
                fillColor: Colors.byName('primary')
            },
            data: [
                ['Jan', 20],
                ['Feb', 15],
                ['Mar', 25],
                ['Apr', 30],
                ['May', 40],
                ['Jun', 35]
            ]
        }, {
            'label': 'Recurrent',
            bars: {
                order: 1,
                fillColor: Colors.byName('green-400')
            },
            data: [
                ['Jan', 35],
                ['Feb', 25],
                ['Mar', 45],
                ['Apr', 25],
                ['May', 30],
                ['Jun', 15]
            ]
        }];

        $('#flot-bar-chart').each(function() {
            var $el = $(this);
            if ($el.data('height')) $el.height($el.data('height'));
            $el.plot(barChartData, barChartOptions);
        });

        // Small flot chart
        // ---------------------
        var chartTaskData = [{
            'label': 'Total',
            color: Colors.byName('primary'),
            data: [
                ['Jan', 14],
                ['Feb', 14],
                ['Mar', 12],
                ['Apr', 16],
                ['May', 13],
                ['Jun', 14],
                ['Jul', 19]
                //4, 4, 3, 5, 3, 4, 6
            ]
        }];
        var chartTaskOptions = {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: false
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 3,
                    fill: 1
                },
            },
            legend: {
                show: false
            },
            grid: {
                show: false,
            },
            tooltip: true,
            tooltipOpts: {
                content: function(label, x, y) {
                    return x + ' : ' + y;
                }
            },
            xaxis: {
                tickColor: '#fcfcfc',
                mode: 'categories'
            },
            yaxis: {
                min: 0,
                max: 30, // optional: use it for a clear representation
                tickColor: '#eee',
                //position: 'right' or 'left',
                tickFormatter: function(v) {
                    return v /* + ' visitors'*/ ;
                }
            },
            shadowSize: 0
        };

        $('#flot-task-chart').each(function() {
            var $el = $(this);
            if ($el.data('height')) $el.height($el.data('height'));
            $el.plot(chartTaskData, chartTaskOptions);
        });

        // Easy Pie charts
        // -----------------

        var pieOptionsTask = {
            lineWidth: 6,
            trackColor: 'transparent',
            barColor: Colors.byName('primary'),
            scaleColor: false,
            size: 90,
            lineCap: 'round',
            animate: {
                duration: 3000,
                enabled: true
            }
        };
        $('#dashboard-easypiechartTask').easyPieChart(pieOptionsTask);


        // Vector Map
        // -----------------

        // USA Map
        var usa_markers = [{
            latLng: [40.71, -74.00],
            name: 'New York'
        }, {
            latLng: [34.05, -118.24],
            name: 'Los Angeles'
        }, {
            latLng: [41.87, -87.62],
            name: 'Chicago',
            style: {
                fill: Colors.byName('pink-500'),
                r: 15
            }
        }, {
            latLng: [29.76, -95.36],
            name: 'Houston',
            style: {
                fill: Colors.byName('purple-500'),
                r: 10
            }
        }, {
            latLng: [39.95, -75.16],
            name: 'Philadelphia'
        }, {
            latLng: [38.90, -77.03],
            name: 'Washington'
        }, {
            latLng: [37.36, -122.03],
            name: 'Silicon Valley',
            style: {
                fill: Colors.byName('green-500'),
                r: 20
            }
        }];

        var usa_options = {
            map: 'us_mill_en',
            normalizeFunction: 'polynomial',
            backgroundColor: '#fff',
            regionsSelectable: false,
            markersSelectable: false,
            zoomButtons: false,
            zoomOnScroll: false,
            markers: usa_markers,
            regionStyle: {
                initial: {
                    fill: Colors.byName('blueGrey-200')
                },
                hover: {
                    fill: Colors.byName('gray-light'),
                    stroke: '#fff'
                },
            },
            markerStyle: {
                initial: {
                    fill: Colors.byName('blue-500'),
                    stroke: '#fff',
                    r: 10
                },
                hover: {
                    fill: Colors.byName('orange-500'),
                    stroke: '#fff'
                }
            }
        };

        $('#vector-map').vectorMap(usa_options);

        // Datepicker
        // -----------------

        

        // Sparklines
        // -----------------

        var sparkValue1 = [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6];
        var sparkValue2 = [2, 3, 4, 6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 5];
        var sparkValue3 = [4, 4, 3, 5, 3, 4, 6, 5, 3, 2, 3, 4, 6];
        var sparkValue4 = [6, 5, 4, 3, 5, 4, 3, 4, 3, 4, 3, 2, 2];
        var sparkOpts = {
            type: 'line',
            height: 20,
            width: '70',
            lineWidth: 2,
            valueSpots: {
                '0:': Colors.byName('blue-700'),
            },
            lineColor: Colors.byName('blue-700'),
            spotColor: Colors.byName('blue-700'),
            fillColor: 'transparent',
            highlightLineColor: Colors.byName('blue-700'),
            spotRadius: 0
        };

        initSparkline($('#sparkline1'), sparkValue1, sparkOpts);
        initSparkline($('#sparkline2'), sparkValue2, sparkOpts);
        initSparkline($('#sparkline3'), sparkValue3, sparkOpts);
        initSparkline($('#sparkline4'), sparkValue4, sparkOpts);
        // call sparkline and mix options with data attributes
        function initSparkline(el, values, opts) {
            el.sparkline(values, $.extend(sparkOpts, el.data()));
        }

    }
})();

(function() {
    'use strict';

    $(runBootstrap);

    function runBootstrap() {

        // POPOVER
        // -----------------------------------

        $('[data-toggle="popover"]').popover();

        // TOOLTIP
        // -----------------------------------

        $('[data-toggle="tooltip"]').tooltip({
            container: 'body'
        });

    }

})();

(function() {
    'use strict';

    $(runMasonry);

    function runMasonry() {

        if( ! $.fn.imagesLoaded ) return;

        // init Masonry after all images have loaded
        var $grid = $('.grid').imagesLoaded(function() {
            $grid.masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
            });
        });
    }

})();

(function() {
    'use strict';

    $(initNestable);

    function initNestable() {
        var updateOutput = function(e) {
            var list = e.length ? e : $(e.target),
                output = list.data('output');
            if (window.JSON) {
                output.text(window.JSON.stringify(list.nestable('serialize'))); //, null, 2));
            } else {
                output.text('JSON browser support required for this demo.');
            }
        };

        // activate Nestable for list 1
        $('#nestable').each(function() {
            $(this).nestable({
                group: 1
            })
            .on('change', updateOutput);

            // output initial serialised data
            updateOutput($(this).data('output', $('#nestable-output')));
        });

        $('.js-nestable-action').on('click', function(e) {
            var target = $(e.target),
                action = target.data('action');
            if (action === 'expand-all') {
                $('.dd').nestable('expandAll');
            }
            if (action === 'collapse-all') {
                $('.dd').nestable('collapseAll');
            }
        });
    }

})();

(function() {
    'use strict';

    $(formUpload);

    function formUpload() {

        if(typeof Dropzone === 'undefined') return;

        // Dropzone settings
        Dropzone.options.dropzoneArea = {
            autoProcessQueue: false,
            uploadMultiple: true,
            parallelUploads: 100,
            maxFiles: 100,
            dictDefaultMessage: '<em class="ion-upload text-info icon-2x"></em><br>Drop files here to upload', // default messages before first drop
            paramName: 'file', // The name that will be used to transfer the file
            maxFilesize: 2, // MB
            addRemoveLinks: true,
            accept: function(file, done) {
                if (file.name === 'justinbieber.jpg') {
                    done('Naha, you dont. :)');
                } else {
                    done();
                }
            },
            init: function() {
                var dzHandler = this;

                this.element.querySelector('button[type=submit]').addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    dzHandler.processQueue();
                });
                this.on('addedfile', function(file) {
                    console.log('Added file: ' + file.name);
                });
                this.on('removedfile', function(file) {
                    console.log('Removed file: ' + file.name);
                });
                this.on('sendingmultiple', function() {

                });
                this.on('successmultiple', function(/*files, response*/) {

                });
                this.on('errormultiple', function(/*files, response*/) {

                });
            }

        };
    }

})();

(function() {
    'use strict';

    $(formEditor);

    function formEditor() {

        // Summernote HTML editor
        $('.summernote').each(function(){
            $(this).summernote({
                height: 380
            });
        });

        $('.summernote-air').each(function(){
            $(this).summernote({
                airMode: true
            });
        });

    }

})();

(function() {
    'use strict';

    $(formValidation);

    function formValidation() {

        $('#form-register').validate({
            errorPlacement: errorPlacementInput,
            // Form rules
            rules: {
                email: {
                    required: true,
                    email: true
                },
                password1: {
                    required: true
                },
                confirm_match: {
                    required: true,
                    equalTo: '#id-password'
                }
            }
        });

        $('#form-login').validate({
            errorPlacement: errorPlacementInput,
            // Form rules
            rules: {
                loginemail: {
                    required: true,
                    email: true
                },
                loginpassword: {
                    required: true
                }
            }
        });

        $('#form-subscribe').validate({
            errorPlacement: errorPlacementInput,
            // Form rules
            rules: {
                feedemail: {
                    required: true,
                    email: true
                }
            }
        });

        $('#form-example').validate({
            errorPlacement: errorPlacementInput,
            // Form rules
            rules: {
                sometext: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                digits: {
                    required: true,
                    digits: true
                },
                url: {
                    required: true,
                    url: true
                },
                min: {
                    required: true,
                    min: 6
                },
                max: {
                    required: true,
                    max: 6
                },
                minlength: {
                    required: true,
                    minlength: 6
                },
                maxlength: {
                    required: true,
                    maxlength: 10
                },
                length: {
                    required: true,
                    range: [6,10]
                },
                match1: {
                    required: true
                },
                confirm_match: {
                    required: true,
                    equalTo: '#id-source'
                }
            }
        });

    }

    // Necessary to place dyncamic error messages
    // without breaking the expected markup for custom input
    function errorPlacementInput(error, element) {
        if( element.parent().parent().is('.mda-input-group') ) {
            error.insertAfter(element.parent().parent()); // insert at the end of group
        }
        else if( element.parent().is('.mda-form-control') ) {
            error.insertAfter(element.parent()); // insert after .mda-form-control
        }
        else if ( element.is(':radio') || element.is(':checkbox')) {
            error.insertAfter(element.parent());
        }
        else {
            error.insertAfter(element);
        }
    }

})();

(function() {
    'use strict';

    $(initHeader);

    function initHeader() {

        // Search modal
        var modalSearch = $('.modal-search');
        $('#header-search').on('click', function(e) {
            e.preventDefault();
            modalSearch
                .on('show.bs.modal', function() {
                    // Add class for white backdrop
                    $('body').addClass('modal-backdrop-soft');
                })
                .on('hidden.bs.modal', function() {
                    // Remove class for white backdrop (if not will affect future modals)
                    $('body').removeClass('modal-backdrop-soft');
                })
                .on('shown.bs.modal', function() {
                    // Auto focus the search input
                    $('.header-input-search').focus();
                })
                .modal()
                ;
        });

        // Settings modal
        var modalSettings = $('.modal-settings');
        $('#header-settings').on('click', function(){
            modalSettings
                .on('show.bs.modal', function() {
                    // Add class for soft backdrop
                    $('body').addClass('modal-backdrop-soft');
                })
                .on('hidden.bs.modal', function() {
                    // Remove class for soft backdrop (if not will affect future modals)
                    $('body').removeClass('modal-backdrop-soft');
                })
                .modal()
                ;
        });

    }

})();

(function() {
    'use strict';

    $(googleMapsFull);

    function googleMapsFull() {

        if (document.getElementById('mapfull-markers')) {

            var myMarkers = [
                {id: 0, name: 'Canada',        coords: {latitude: 56.130366, longitude: -106.346771 } },
                {id: 1, name: 'New York',      coords: {latitude: 40.712784, longitude: -74.005941 } },
                {id: 2, name: 'Toronto',       coords: {latitude: 43.653226, longitude: -79.383184 } },
                {id: 3, name: 'San Francisco', coords: {latitude: 37.774929, longitude: -122.419416 } },
                {id: 4, name: 'Utah',          coords: {latitude: 39.320980, longitude: -111.093731 } }
            ];

            var mapFull = new GMaps({
                div: '#mapfull-markers',
                lat: myMarkers[0].coords.latitude,
                lng: myMarkers[0].coords.longitude,
                zoom: 4
            });

            for (var i=0; i < myMarkers.length; i++) {
                mapFull.addMarker({
                    lat: myMarkers[i].coords.latitude,
                    lng: myMarkers[i].coords.longitude,
                    //title: 'Marker with InfoWindow',
                    infoWindow: {
                        content: '<p>' + myMarkers[i].name + '</p>'
                    }
                });
            }
            // Panto marker using the data attribute
            $('#markers-list').on('click', '[data-panto-marker]', function() {
                var markers = mapFull.markers;
                var id = $(this).data('pantoMarker');
                if (markers[id])
                    mapFull.map.panTo(markers[id].getPosition());
            });


        }

    }

})();

(function() {
    'use strict';

    $(vectorMap);

    function vectorMap() {

        if (document.getElementById('vector-map-world')) {

            var world_markers = [
                {'latLng': [47.14, 9.52],    'name': 'Liechtenstein'},
                {'latLng': [7.11, 171.06],   'name': 'Marshall Islands'},
                {'latLng': [17.3, -62.73],   'name': 'Saint Kitts and Nevis'},
                {'latLng': [3.2, 73.22],     'name': 'Maldives'},
                {'latLng': [35.88, 14.5],    'name': 'Malta'},
                {'latLng': [12.05, -61.75],  'name': 'Grenada'},
                {'latLng': [13.16, -61.23],  'name': 'Saint Vincent and the Grenadines'},
                {'latLng': [13.16, -59.55],  'name': 'Barbados'},
                {'latLng': [17.11, -61.85],  'name': 'Antigua and Barbuda'},
                {'latLng': [-4.61, 55.45],   'name': 'Seychelles'},
                {'latLng': [7.35, 134.46],   'name': 'Palau'},
                {'latLng': [42.5, 1.51],     'name': 'Andorra'}
            ];

            var world_options = {
                map: 'world_mill_en',
                normalizeFunction: 'polynomial',
                backgroundColor: '#fff',
                regionsSelectable: true,
                markersSelectable: true,
                markers: world_markers,
                regionStyle: {
                    initial: {
                        fill: Colors.byName('gray-lighter')
                    },
                    hover: {
                        fill: Colors.byName('indigo-500'),
                        stroke: '#fff'
                    },
                },
                markerStyle: {
                    initial: {
                        fill: Colors.byName('pink-500'),
                        stroke: '#fff',
                        r: 10
                    },
                    hover: {
                        fill: Colors.byName('amber-500'),
                        stroke: '#fff'
                    }
                }
            };

            // var series = {};

            $('#vector-map-world').vectorMap(world_options);
        }// world


            // USA Map
        if (document.getElementById('vector-map-usa')) {

            var usa_markers = [{
                latLng: [40.71, -74.00],
                name: 'New York'
            }, {
                latLng: [34.05, -118.24],
                name: 'Los Angeles'
            }, {
                latLng: [41.87, -87.62],
                name: 'Chicago'
            }, {
                latLng: [29.76, -95.36],
                name: 'Houston'
            }, {
                latLng: [39.95, -75.16],
                name: 'Philadelphia'
            }, {
                latLng: [38.90, -77.03],
                name: 'Washington'
            }, {
                latLng: [37.36, -122.03],
                name: 'Silicon Valley',
                style: {
                    fill: Colors.byName('green-500'),
                    r: 20
                }
            }];

            var usa_options = {
                map: 'us_mill_en',
                normalizeFunction: 'polynomial',
                backgroundColor: '#fff',
                regionsSelectable: true,
                markersSelectable: true,
                markers: usa_markers,
                regionStyle: {
                    initial: {
                        fill: Colors.byName('deepPurple-400')
                    },
                    hover: {
                        fill: Colors.byName('deepPurple-100'),
                        stroke: '#fff'
                    },
                },
                markerStyle: {
                    initial: {
                        fill: Colors.byName('amber-500'),
                        stroke: '#fff',
                        r: 10
                    },
                    hover: {
                        fill: Colors.byName('orange-500'),
                        stroke: '#fff'
                    }
                }
            };

            $('#vector-map-usa').vectorMap(usa_options);

        }

    }

})();

(function(){
    'use strict';

    $(initMessages);

    function initMessages() {
        var msgList = $('.msg-display');

        msgList.each(function() {
            var msg = $(this);

            msg.on('click', function(e){
                // Ignores drodown click to avoid opening modal at the same time
                if( $(e.target).is('.dropdown') ||
                    $(e.target).parents('.dropdown').length > 0  ) {
                    return;
                }
                // Open modal
                $('.modal-message').modal();

            });

        });

        $('#compose').on('click', function(){
            $('.modal-compose').modal();
        });

    }

})();

(function() {
    'use strict';

    $(initProfile);

    function initProfile() {

        if (!$.fn.editable) return;

        var editables = $('.is-editable, #gender');

        $('#edit-enable').click(function(e) {
            e.preventDefault();
            editables.editable('toggleDisabled');
            $('#edit-disable').removeClass('hidden');
            $('#edit-enable').addClass('hidden');
        });
        $('#edit-disable').click(function(e) {
            e.preventDefault();
            editables.editable('toggleDisabled');
            $('#edit-enable').removeClass('hidden');
            $('#edit-disable').addClass('hidden');
        });


        $('.is-editable').each(function() {
            var opts = $(this).data();
            $(this).editable({
                showbuttons: 'bottom',
                disabled: true,
                mode: opts.mode || 'inline',
                type: opts.type || 'text'
            });
        });

        $('#gender').editable({
            // prepend: "not selected",
            disabled: true,
            mode: 'inline',
            url: '',
            source: [{
                value: 1,
                text: 'Male'
            }, {
                value: 2,
                text: 'Female'
            }]
        });

    }

})();

(function() {
    'use strict';

    $(initRipple);

    function initRipple() {
        $('.ripple').each(function(){
            new Ripple($(this));
        });
    }

})();


(function(global) {
    'use strict';

    // public interface
    global.Ripple = RippleEffect;

    /**
     * Ripple effect for common components
     * @param [element] jQuery or jqLite element
     */
    function RippleEffect(element) {
        var TRANSITION_END = 'transitionend webkitTransitionEnd';
        var jq = jQuery;

        this.element = element;
        this.rippleElement = this.getElement();
        this.$rippleElement = jq(this.rippleElement);

        var clickEv = this.detectClickEvent();

        var self = this;
        element.on(clickEv, function() {
            // remove animation on click
            self.$rippleElement.removeClass('md-ripple-animate');
            // Set ripple size and position
            self.calcSizeAndPos();
            // start to animate
            self.$rippleElement
                .addClass('md-ripple-animate');
        });

        this.$rippleElement.on(TRANSITION_END, function() {
            self.$rippleElement
                .removeClass('md-ripple-animate');
            // avoid weird affect when ripple is not active
            self.rippleElement.style.width = 0;
            self.rippleElement.style.height = 0;
        });
    }
    /**
     * Returns the elements used to generate the effect
     * If not exists, it is created by appending a new
     * dom element
     */
    RippleEffect.prototype.getElement = function() {
        var dom = this.element[0];
        var rippleElement = dom.querySelector('.md-ripple');

        if (rippleElement === null) {
            // Create ripple
            rippleElement = document.createElement('span');
            rippleElement.className = 'md-ripple';
            // Add ripple to element
            this.element.append(rippleElement);
        }
        return rippleElement;
    };

    /**
     * Determines the better size for the ripple element
     * based on the element attached and calculates the
     * position be fully centered
     */
    RippleEffect.prototype.calcSizeAndPos = function() {
        var size = Math.max(this.element.width(), this.element.height());
        this.rippleElement.style.width = size + 'px';
        this.rippleElement.style.height = size + 'px';
        // autocenter (requires css)
        this.rippleElement.style.marginTop = -(size / 2) + 'px';
        this.rippleElement.style.marginLeft = -(size / 2) + 'px';
    };

    RippleEffect.prototype.detectClickEvent = function() {
        var isIOS = ((/iphone|ipad/gi).test(navigator.appVersion));
        return isIOS ? 'touchstart' : 'click';
    };

})(window);


(function() {
    'use strict';

    $(initSettings);

    function initSettings() {

        // Themes setup
        var themes = [
            'theme-1',
            'theme-2',
            'theme-3',
            'theme-4',
            'theme-5',
            'theme-6',
            'theme-7',
            'theme-8',
            'theme-9'
        ];

        var body = $('body');
        var header = $('.layout-container > header');
        var sidebar = $('.layout-container > aside');
        var brand = sidebar.find('.sidebar-header');
        var content = $('.layout-container > main');

        // Handler for themes preview
        $('input[name="setting-theme"]:radio').change(function() {
            var index = this.value;
            if (themes[index]) {
                body.removeClass(themeClassname);
                body.addClass(themes[index]);
            }
        });
            // Regular expression for the pattern bg-* to find the background class
            function themeClassname(index, css) {
                var cmatch = css.match(/(^|\s)theme-\S+/g);
                return (cmatch || []).join(' ');
            }


        // Handler for menu links
        $('input[name="headerMenulink"]:radio').change(function() {
            var menulinks = $('.menu-link');
            // remove allowed classses
            menulinks.removeClass('menu-link-slide menu-link-arrow menu-link-close');
            // Add selected
            menulinks.addClass(this.value);
        });

        // Handlers for layout variations
        // var lContainer = $('.layout-container');
        $('#sidebar-showheader').change(function() {
            brand[this.checked ? 'show' : 'hide']();
        });
        var sidebarToolbar = $('.sidebar-toolbar');
        $('#sidebar-showtoolbar').change(function() {
            sidebarToolbar[this.checked ? 'show' : 'hide']();
        });

        $('#sidebar-offcanvas').change(function() {
            body[this.checked ? 'addClass' : 'removeClass']('sidebar-offcanvas');
        });
    }

})();
(function() {
    'use strict';

    $(sidebarNav);

    function sidebarNav() {

        var $sidebarNav = $('.sidebar-nav');
        var $sidebarContent = $('.sidebar-content');

        activate($sidebarNav);

        $sidebarNav.on('click', function(event) {
            var item = getItemElement(event);
            // check click is on a tag
            if (!item) return;

            var ele = $(item),
                liparent = ele.parent()[0];

            var lis = ele.parent().parent().children(); // markup: ul > li > a
            // remove .active from childs
            lis.find('li').removeClass('active');
            // remove .active from siblings ()
            $.each(lis, function(idx, li) {
                if (li !== liparent)
                    $(li).removeClass('active');
            });

            var next = ele.next();
            if (next.length && next[0].tagName === 'UL') {
                ele.parent().toggleClass('active');
                event.preventDefault();
            }
        });

        // find the a element in click context
        // doesn't check deeply, asumens two levels only
        function getItemElement(event) {
            var element = event.target,
                parent = element.parentNode;
            if (element.tagName.toLowerCase() === 'a') return element;
            if (parent.tagName.toLowerCase() === 'a') return parent;
            if (parent.parentNode.tagName.toLowerCase() === 'a') return parent.parentNode;
        }

        function activate(sidebar) {
            sidebar.find('a').each(function() {
                var href = $(this).attr('href').replace('#', '');
                if (href !== '' && window.location.href.indexOf(href) >= 0) {
                    var item = $(this).parents('li').addClass('active');
                    // Animate scrolling to focus active item
                    // $sidebarContent.animate({
                    //     scrollTop: $sidebarContent.scrollTop() + item.position().top
                    // }, 1200);
                    return false; // exit foreach
                }
            });
        }

        var layoutContainer = $('.layout-container');
        var $body = $('body');
        // Handler to toggle sidebar visibility on mobile
        $('#sidebar-toggler').click(function(e) {
            e.preventDefault();
            layoutContainer.toggleClass('sidebar-visible');
            // toggle icon state
            $(this).parent().toggleClass('active');
        });
        // Close sidebar when click on backdrop
        $('.sidebar-layout-obfuscator').click(function(e) {
            e.preventDefault();
            layoutContainer.removeClass('sidebar-visible');
            // restore icon
            $('#sidebar-toggler').parent().removeClass('active');
        });

        // Handler to toggle sidebar visibility on desktop
        $('#offcanvas-toggler').click(function(e) {
            e.preventDefault();
            $body.toggleClass('offcanvas-visible');
            // toggle icon state
            $(this).parent().toggleClass('active');
        });

        // remove desktop offcanvas when app changes to mobile
        // so when it returns, the sidebar is shown again
        window.addEventListener('resize', function() {
            if (window.innerWidth < 768) {
                $body.removeClass('offcanvas-visible');
                $('#offcanvas-toggler').parent().addClass('active');
            }
        });

    }

})();

(function() {
    'use strict';

    $(tableBootgrid);

    function tableBootgrid() {

        if ( !$.fn.bootgrid ) return;

        var ioniconCss = {
            icon: "icon",
            iconColumns: "ion-ios-list-outline",
            iconDown: "ion-chevron-down",
            iconRefresh: "ion-refresh",
            iconSearch: "ion-search",
            iconUp: "ion-chevron-up"
        }

        $('#bootgrid-basic').bootgrid({
            css: ioniconCss
        });

        $('#bootgrid-selection').bootgrid({
            css: ioniconCss,
            selection: true,
            multiSelect: true,
            rowSelect: true,
            keepSelection: true,
            templates: {
                select: '<label class="mda-checkbox">' +
                            '<input name="select" type="{{ctx.type}}" class="{{css.selectBox}}" value="{{ctx.value}}" {{ctx.checked}} />' +
                            '<em class="bg-warning"></em>' +
                        '</label>'
            }
        })
        ;

        $('#bootgrid-command').bootgrid({
            css: ioniconCss,
            formatters: {
                commands: function(column, row) {
                    return '<button type="button" class="btn btn-flat btn-sm btn-info" data-row-id="' + row.id + '"><em class="ion-edit"></em></button>' +
                        '<button type="button" class="btn btn-flat btn-sm btn-danger" data-row-id="' + row.id + '"><em class="ion-trash-a"></em></button>';
                }
            }
        });

    }

})();

(function() {
    'use strict';

    $(initTranslation);

    // Global configuration
    var preferredLang = 'en';
    var pathPrefix    = 'server/i18n'; // folder of json files
    var packName      = 'site';

    function initTranslation() {

        if (!$.fn.localize) return;

        // set initial options
        var opts = {
            language: preferredLang,
            pathPrefix: pathPrefix,
            callback: function(data, defaultCallback) {
                defaultCallback(data);
            }
        };

        // Set initial language
        setLanguage(opts);

        // Listen for changes
        $('[data-set-lang]').on('click', function() {

            var selectedLang = $(this).data('setLang');

            if (selectedLang && opts.language !== selectedLang) {

                opts.language = selectedLang;

                setLanguage(opts);

                activateDropdown($(this));
            }

        });
    }

    // Update translated text
    function setLanguage(options) {
        $('[data-localize]').localize(packName, options);
    }

    // Set the current clicked text as the active dropdown text
    function activateDropdown(elem) {
        var menu = elem.parents('.dropdown-menu');
        if (menu.length) {
            var toggle = menu.prev('button, a');
            toggle.text(elem.text());
        }
    }

})();

(function() {
    'use strict';

    $(initScreenfull);

    function initScreenfull() {
        var element = $('[data-toggle-fullscreen]');
            // Not supported under IE (requires jQuery Browser)
        if (window.jQBrowser.msie) {
            element.addClass('hide');
        } else {
            element.on('click', function(e) {
                e.preventDefault();

                if (screenfull.enabled) {

                    screenfull.toggle();

                } else {
                    // Fullscreen not enabled ;
                }

            });
        }
    }

})();
(function() {
    'use strict';

    $(initSvgReplace);

    function initSvgReplace() {
        var elements = $('[data-svg-replace]');

        elements.each(function() {
            var el = $(this);
            var src = el.data('svgReplace');

            if (!src || src.indexOf('.svg') < 0)
                throw "only support for SVG images";
            // return /*only support for SVG images*/;

            $.get(src).success(function(res) {
                var $svg = $(res).find('svg');
                $svg = $svg.removeAttr('xmlns:a');
                el.replaceWith($svg);
            })
        })

    }

})();
