gadgets.HubSettings.onConnect = function () {
    gadgets.Hub
        .subscribe(
            'state-selected',
            function (topic, data, subscriberData) {

                switch (data.msg) {
                    case 'Apple':
                        $("#fruit")
                            .attr(
                                "src",
                                "https://localhost:9443/portal/store/carbon.super/gadget/subscriber-gadget/img/apple.png");
                        break;
                    case 'Orange':
                        $("#fruit")
                            .attr(
                                "src",
                                "https://localhost:9443/portal/store/carbon.super/gadget/subscriber-gadget/img/orange.jpeg");
                        break;
                    case 'Grapes':
                        $("#fruit")
                            .attr(
                                "src",
                                "https://localhost:9443/portal/store/carbon.super/gadget/subscriber-gadget/img/grapes.jpeg");
                        break;
                    case 'Pineapple':
                        $("#fruit")
                            .attr(
                                "src",
                                "https://localhost:9443/portal/store/carbon.super/gadget/subscriber-gadget/img/pineapple.png");
                        break;
                    case 'Mango':
                        $("#fruit")
                            .attr(
                                "src",
                                "https://localhost:9443/portal/store/carbon.super/gadget/subscriber-gadget/img/mango.png");
                        break;
                    case 'Strawberry':
                        $("#fruit")
                            .attr(
                                "src",
                                "https://localhost:9443/portal/store/carbon.super/gadget/subscriber-gadget/img/strawberry.jpeg");
                        break;
                    default:
                        $("#fruit")
                            .attr(
                                "src",
                                "https://localhost:9443/portal/store/carbon.super/gadget/subscriber-gadget/img/fruit.png");
                        break;
                }

            });
};
