
export interface Status {
    id: number;
    name: string;
}

export interface LaunchServiceProvider {
    id: number;
    url: string;
    name: string;
    type: string;
}

export interface Configuration {
    id: number;
    launch_library_id: number;
    url: string;
    name: string;
    family: string;
    full_name: string;
    variant: string;
}

export interface Rocket {
    id: number;
    configuration: Configuration;
}

export interface Orbit {
    id: number;
    name: string;
    abbrev: string;
}

export interface Mission {
    id: number;
    launch_library_id?: number;
    name: string;
    description: string;
    launch_designator?: any;
    type: string;
    orbit: Orbit;
}

export interface Location {
    id: number;
    url: string;
    name: string;
    country_code: string;
    map_image: string;
    total_launch_count: number;
    total_landing_count: number;
}

export interface Pad {
    id: number;
    url: string;
    agency_id?: number;
    name: string;
    info_url?: any;
    wiki_url: string;
    map_url: string;
    latitude: string;
    longitude: string;
    location: Location;
    map_image: string;
    total_launch_count: number;
}

export interface Agency {
    id: number;
    url: string;
    name: string;
    type: string;
}

export interface Program {
    id: number;
    url: string;
    name: string;
    description: string;
    agencies: Agency[];
    image_url: string;
    start_date: Date;
    end_date?: any;
    info_url: string;
    wiki_url: string;
}

export interface Result {
    id: string;
    url: string;
    launch_library_id?: number;
    slug: string;
    name: string;
    status: Status;
    net: Date;
    window_end: Date;
    window_start: Date;
    inhold: boolean;
    tbdtime: boolean;
    tbddate: boolean;
    probability?: number;
    holdreason: string;
    failreason: string;
    hashtag?: any;
    launch_service_provider: LaunchServiceProvider;
    rocket: Rocket;
    mission: Mission;
    pad: Pad;
    webcast_live: boolean;
    image: string;
    infographic: string;
    program: Program[];
}

export interface RootObject {
    count: number;
    next: string;
    previous?: any;
    results: Result[];
}
