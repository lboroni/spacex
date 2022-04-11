import Api from "./services/Api";

function getRocket(id) {
    let rocket = {name: ""};
    Api.rockets.getByID(id).then(resp => {
        rocket = resp.data;
    }).catch(error => Api.error.default(error));
    return rocket;
}

const LaunchFactory = {
    builder(data) {
        let launch = {
            id: data.flight_number,
            flight_number: data.flight_number,
            mission_name: data.mission_name,
            launch_year: data.launch_year,
            launch_date_utc: data.launch_date_utc,
            launch_success: data.launch_success,
            launch_failure_details: data.launch_failure_details,
            rocket: {
                rocket_name: data.rocket.rocket_name,
            },
            links: {
                mission_patch: data.links.mission_patch,
                video_link: data.links.video_link,
                wikipedia: data.links.wikipedia
            },
            details: data.details
        };

        if (Api.version.toLowerCase() === "v4") {
            const rocket = getRocket(data.rocket);

            launch.id = data.id
            launch.mission_name = data.name;
            launch.launch_success = data.success;
            launch.launch_failure_details = (data.failures.length > 0) ? {reason: data.failures[0].reason} : launch.launch_failure_details;
            launch.launch_year = new Date(data.date_utc).getFullYear();
            launch.launch_date_utc = data.date_utc;
            launch.links.mission_patch = data.links.patch.small;
            launch.links.video_link = data.links.webcast;
            launch.rocket.rocket_name = rocket.name;

        }

        return launch;
    }
};

export default LaunchFactory;