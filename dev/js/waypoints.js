var inviewDateBlock = new Waypoint.Inview({
    element: $('#date-block')[0],

    enter: function(direction) {
        $.notify('Enter triggered with direction ' + direction)
        // globalPosition: 'right middle', className:"success" })


        // cta background from white to yellow when line passes date
        if (direction === "up") {
            gsap.to("#home-options", {
                duration: 0.25,
                backgroundColor: "#EFB51D"
            })
        }

    },

    entered: function(direction) {
        $.notify('Entered triggered with direction ' + direction)
        // globalPosition: 'right middle', className:"success" })
        if (direction === "up") {
            gsap.to("#home-options", {
                duration: 0.25,
                backgroundColor: "#EFB51D"
            })
        }


    },

    exit: function(direction) {
        $.notify('Exit triggered with direction ' + direction)
        // globalPosition: 'right middle', className:"success" })
        if (direction === "down") {
            gsap.to("#home-options", {
                duration: 0.25,
                backgroundColor: "#EFB51D"
            })
        }


    },
    exited: function(direction) {
        $.notify('Exited triggered with direction ' + direction)
        // globalPosition: 'right middle', className:"success" })
        if (direction === "down") {
            gsap.to("#home-options", {
                duration: 0.25,
                backgroundColor: "#EFB51D"
            })
        }

    }
})
