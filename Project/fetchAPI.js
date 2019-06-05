//These variables are parameters for the fetched API to find specific data.
past = '/past';
future = '/upcoming';
latest = '/latest';
next = '/next';
falconheavy = '?rocket_id=falconheavy';
falcon9 = '?rocket_id=falcon9';

//This function fetches the API + a parameter that only fetches specific data.
function fetchLaunches(launchId) {
    fetch('https://api.spacexdata.com/v3/launches' + launchId)
        .then(response => {
            return response.json();
        })
        .then(data => {
            /* This checks if the returned api data is an array, and if it's not then it is pushed into one. */
            if (Array.isArray(data) == false) {
                data = [data];
            };
            return data;
        })
        .then(data => {
            let launchCardWrapper = document.getElementById("launchCards");
            while (launchCardWrapper.hasChildNodes()) {
                launchCardWrapper.removeChild(launchCardWrapper.lastChild);
            };
            for (i = 0; i < data.length; i++) {
                let launchCard = document.createElement("div");
                launchCard.classList.add('launchCard');
                let launchCardHeader = document.createElement("div");
                launchCardHeader.classList.add('launchCardHeader');

                let launchPatch = document.createElement("img");
                launchPatch.classList.add('launchPatch');
                if (data[i].links.mission_patch == null) {
                    launchPatch.src = 'images/mission_patch_placeholder.png';
                } else {
                    launchPatch.src = data[i].links.mission_patch;
                }
                launchPatch.alt = 'Image of the Mission Patch uniquely created for the launch';

                let launchMissionInfo = document.createElement("p");
                launchMissionInfo.classList.add('launchMissionInfo');
                launchMissionInfo.innerHTML = '#' + data[i].flight_number + ' '
                    + data[i].mission_name + '<br>' + data[i].rocket.rocket_id
                    + '<br>' + data[i].launch_date_utc.substring(0, 10);

                let launchDetails = document.createElement("details");
                launchDetails.classList.add('launchDetails');

                let launchDetailsTitle = document.createElement("summary");
                launchDetailsTitle.classList.add('launchDetailsTitle');
                launchDetailsTitle.innerHTML = 'Launch Details';

                let launchDetailsText = document.createElement("p");
                launchDetailsText.classList.add('launchDetailsText');
                /* If the API has no data for the details, it used this placeholder string instead. */
                if (data[i].details == null) {
                    launchDetailsText.innerHTML = "No details."
                } else {
                    launchDetailsText.innerHTML = data[i].details;
                }


                launchCardWrapper.appendChild(launchCard);
                launchCard.appendChild(launchCardHeader);
                launchCardHeader.appendChild(launchPatch);
                launchCardHeader.appendChild(launchMissionInfo);
                launchCard.appendChild(launchDetails);
                launchDetails.appendChild(launchDetailsTitle);
                launchDetails.appendChild(launchDetailsText);
            }
        });
};

//This function is called when loading the page so there is a card for the next launch.
fetchLaunches(next);