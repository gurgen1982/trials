$(function () {
    $("#grid").kendoGrid({
        dataSource: {
            type: "jsonp",
            transport: {
                read: {
                    url: readUrl,
                    //    dataType: "jsonp"
                },
                update: {
                    url: updateUrl,
                    // dataType: "jsonp"
                },
            },
            schema: {
                model: {
                    id: "ID",
                    fields: {
                        ID: { editable: false },
                        Title: { editable: true },
                        Url: { editable: false },
                    }
                },
            },
            batch: true,
            pageSize: 5,
            requestStart: function (e) {
                console.log("request started");
            },
            requestEnd: function (e) {
                //var response = e.response;
                //var type = e.type;
                //console.log(type); // displays "read"
                //console.log(response.length); // displays "77"
            },
        },
        // height: 550,
        groupable: false,
        sortable: false,
        editable: {
            mode: 'incell',
            update: true,
        },
        save: function (e) {
            //if (e.values.name !== "") {
            //    // the user changed the name field
            //    if (e.values.name !== e.model.name) {
            //        console.log("name is modified");
            //    }
            //} else {
            //    e.preventDefault();
            //    console.log("name cannot be empty");
            //}
        },
        //toolbar: ["create", "save", "cancel"],
        pageable: false,
        //    {
        //        refresh: true,
        //        pageSizes: true,
        //        buttonCount: 5
        //    },
        dataBinding: function (e) {
            console.log("dataBinding");
        },
        dataBound: function (e) {
            console.log("dataBound");
        },
        columns: [{
            field: "ID",
            title: "ID",
            width: 0,
            hidden: true,
        }, {
            field: "Title",
            title: "Title"
        }, {
            field: "Url",
            title: "Url",
            editable: false,
            template: function (data) {
                return "<img src='" + data.Url + "' style='width:100px'>"
            },
        }, { command: "destroy" }, ]
    });



    var dialog = $('#dialog'),
          undo = $("#undo");

    undo.click(function () {
        dialog.data("kendoDialog").open();
        undo.fadeOut();
    });

    function onClose() {
        undo.fadeIn();
    }

    dialog.kendoDialog({
        width: "600px",
        title: "Software Update",
        closable: true,
        modal: false,
        content: "<p>A new version of <strong>Kendo UI</strong> is available. Would you like to download and install it now?<p>",
        actions: [
            { text: 'Skip this version' },
            { text: 'Remind me later' },
            { text: 'Install update', primary: true }
        ],
        close: onClose
    });

});