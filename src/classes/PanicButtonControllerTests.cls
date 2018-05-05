@istest (SeeAllData = true)
public class PanicButtonControllerTests {
    static testMethod void testData(){
        List<SoundClip__c> SoundClips;
        SoundClips = PanicButtonServerController.getMedia();
        System.assertNotEquals(true, SoundClips.isEmpty());
    }

}