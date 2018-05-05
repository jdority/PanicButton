({
    handleClick : function(component, event, helper) {
        
        helper.buttonDown(component,helper);
        
    },
    onPlaybackEnded : function(component, event, helper) {
        helper.buttonUp(component,helper);
    },
    doInit: function(component, event, helper) {
        helper.callServer(
            component,
            "c.getMedia",
            function(response){
                var defaultSound = component.get('v.sound');
                component.set('v.soundOptions',response);
                
                for (var i=0; i<response.length; i++) {
                    if (response[i].Name == defaultSound) {

                        setTimeout(function() {
                            component.set('v.soundUrl',
                                          response[i].fileUrl__c);
                        },20);
                        break;
                    }
                }   
            }
        );
        
    }

})