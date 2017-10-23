//= require jquery
//= require jquery_ujs
//= require moment
//= require moment/fr
//= require fullcalendar
//= require fullcalendar/locale-all
//= require_self

$(function() {
  $('#calendar').fullCalendar({
    customButtons: {
      planning: {
        text: '(re)Plannifier cette semaine',
        click: function(o) {
          var moment = $('#calendar').fullCalendar('getDate');
          $.ajax({
            type: "POST",
            url: "/planning",
            data: { planning: { date: moment.format() } },
            success : function(e) {
              $('#calendar').fullCalendar( 'refetchEvents' );
            }
          })
        }
      }
    },
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'planning'
    },
    hiddenDays: [ 0 ],
    minTime: '09:00',
    maxTime: '20:00',
    height: 630,
    locale: 'fr',
    editable: false,
    resizable: true,
    defaultView: 'agendaWeek',
    events: '/planning/events'
  });
});

