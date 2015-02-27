/* global qwest:false, Q:false */
(function(){
    'use strict';

    var slabs = {

        /**
         * sends data from settings input to core application
         * @param data
         */
        send: function(data){

            // if the send function is available then send the data, otherwise
            // the user is in test mode and should see the settings they are going to send.
            if(typeof window.top.submitSlabData === 'function'){
                window.top.submitSlabData(data);
            }else{
                alert('you have correctly sent data from your slab.');
                console.log(data);
            }

        },

        /**
         * asynchronously requests data from slabs to be used in an output slab
         * @returns {Promise}
         */
        getData: function(){

            var outputId = getUrlParameter('outputid');

            if(outputId !== undefined){
                return qwest.get('/getdata/'+outputId, null, { dataType:'json', responseType:'json' });
            }else{
                var deferred = Q.defer();
                deferred.resolve();
                return deferred.promise;
            }

        },

        /**
         * asynchronously requests the attached config objects so you can populate your settings
         * @returns {Promise}
         */
        getConfigs : function(){
            var deferred = Q.defer();
            deferred.resolve();
            return deferred.promise;
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
