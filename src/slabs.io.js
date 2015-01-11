/* global qwest:false */
(function(){
    'use strict';

    var slabs = {

        /**
         * sends data from settings input to core application
         * @param data
         */
        send: function(data){
            window.top.submitSlabData(data);
        },

        /**
         * asynchronously requests data from slabs to be used in an output slab
         * @returns {Promise}
         */
        getData: function(){
            var id = getUrlParameter('id');
            return qwest.get('/getdata/'+id, null, {dataType:'json', responseType:'json'});
        }
        
    };

    // utility function to grab the parameters from the URL
    function getUrlParameter(sParam) {
        var sPageURL = window.location.search.substring(1);
        var sURLVariables = sPageURL.split('&');
        for (var i = 0; i < sURLVariables.length; i++)
        {
            var sParameterName = sURLVariables[i].split('=');
            if (sParameterName[0] === sParam)
            {
                return sParameterName[1];
            }
        }
    }

    window.slabs = slabs;
}());
