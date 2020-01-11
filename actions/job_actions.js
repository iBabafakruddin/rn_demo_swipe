import axios from "axios";
import { FETCH_JOBS } from "./types";
import reversGeocode from "latlng-to-zip";
import qs from "qs";

const JOB_ROOT_URL = "http://api.indeed.com/ads/apisearch?";
const JOB_QUERY_PARAMS = {
  publisher: "4201738803816157",
  format: "json",
  v: "2",
  latlong: 1,
  radius: 10,
  q: "javascript"
};

const buildJobsUrl = zip => {
  const query = qs.stringify({ ...JOB_QUERY_PARAMS, l: zip });
  return `${JOB_ROOT_URL}${query}`;
};

const latLongToZip = async region => {
  let { latitude, longitude } = region;
  latitude = parseFloat(latitude).toFixed(5);
  longitude = parseFloat(longitude).toFixed(5);
  const url = `https://www.melissa.com/v2/lookups/latlngzip4/?lat=${latitude}&lng=${longitude}`;
  console.log(`zip url: ${url}`);
  try {
    let { zip } = await axios.get(url);
    console.log("zip");
    console.log(zip);
    return zip;
  } catch (error) {
    console.log(error);
  }
};

export const fetchJobs = region => async dispatch => {
  console.log("fetching jobs for region :");
  console.log(region);
  try {
    const key = "AIzaSyCxZCxLf5dE3ZVOD_y0O_YRy1JDVG1Dmj4&sensor=false";
    let zip = await reversGeocode(region, key);
    //let zip = await latLongToZip(region);
    console.log("zip" + zip);
    const url = buildJobsUrl(zip);
    console.log(url);
    let { data } = await axios.get(url);
    dispatch({ type: FETCH_JOBS, payload: data });
    console.log("FETCHED JOBS:");
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
