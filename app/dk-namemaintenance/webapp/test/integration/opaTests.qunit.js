sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'dknamemaintenance/test/integration/FirstJourney',
		'dknamemaintenance/test/integration/pages/NamesList',
		'dknamemaintenance/test/integration/pages/NamesObjectPage'
    ],
    function(JourneyRunner, opaJourney, NamesList, NamesObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('dknamemaintenance') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheNamesList: NamesList,
					onTheNamesObjectPage: NamesObjectPage
                }
            },
            opaJourney.run
        );
    }
);