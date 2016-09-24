import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        changeSlide (title, event) {
            var carousel = this.$('.carousel');
            var seats = carousel.children('.carousel-seat');
            var toggle = this.$(event.target);
            var el = this.$('.is-ref');
            var new_seat;
            var i = 0;
            var j = 0;
            var ref = seats.length;

            function next (el) {
                if (el.next().length > 0) {
                    return el.next();
                } else {
                    return seats.first();
                }
            }
            function prev (el) {
                if (el.prev().length > 0) {
                    return el.prev();
                } else {
                    return seats.last();
                }
            }

            el.removeClass('is-ref');

            if (toggle.data('toggle') === 'next') {
                new_seat = next(el);
                carousel.removeClass('is-reversing');
            }
            else {
                new_seat = prev(el);
                carousel.addClass('is-reversing');
            }

            new_seat.addClass('is-ref').css('order', 1);

            for (i = j = 2; 2 <= ref ? j <= ref : j >= ref; i = 2 <= ref ? ++j : --j) {
                new_seat = next(new_seat).css('order', i);
            }

            carousel.removeClass('is-set');
            return setTimeout(function () {
                return carousel.addClass('is-set');
            }, 50);
        }
    }
});
