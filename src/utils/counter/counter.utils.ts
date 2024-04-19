import axios from "axios";

export const getGoogleToken = async () => {
    try{
        const result = await axios.post('https://accounts.google.com/o/oauth2/token',{
                "client_id": `${process.env.NEXT_PUBLIC_OAUTH_ID}`,
                "client_secret": `${process.env.NEXT_PUBLIC_OAUTH_PW}`,
                "refresh_token": `${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_REFRESH_TOKEN}`,
                "grant_type": "refresh_token"
        })
        return result?.data.access_token
    }catch(e){console.log(e)}
}
export const getVisitedUser = async (token) => {
    const url = `https://analyticsdata.googleapis.com/v1beta/properties/${process.env.NEXT_PUBLIC_GOOGLE_ATTRUIBUTE_ID}:runReport`
    const headers = {
        'Authorization': `Bearer ${token}`,
    };
    const totalBody = {
        "metrics": [{ "name": "totalUsers" }],
        "dateRanges": [{ "startDate": "2024-01-01", "endDate": "today" }],
        "keepEmptyRows": true
    };
    const todayBody = {
        "metrics": [{ "name": "active1DayUsers" }],
        "dateRanges": [{ "startDate": "today", "endDate": "today" }],
        "keepEmptyRows": true
    };
    try{
        const todayResult = await axios.post(url, todayBody, { headers });
        const totalResult = await axios.post(url, totalBody, { headers });
        return([todayResult?.data.rows[0]?.metricValues[0].value,totalResult?.data.rows[0]?.metricValues[0].value])
    }catch(e){console.log(e)}
}