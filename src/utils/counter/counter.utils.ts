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
        // 'Authorization': `Bearer ${process.env.NEXT_PUBLIC_GOOGLE_OAUTH_TOKEN}`,
        'Authorization': `Bearer ${token}`,
    };
    const body = {
        // "dimensions": [{ "name": "date" }],
        "metrics": [{ "name": "activeUsers" }, { "name": "totalUsers" }],
        "dateRanges": [{ "startDate": "2024-01-01", "endDate": "today" }],
        "keepEmptyRows": true
    };
    try{
        const result = await axios.post(url, body, { headers });
        return(result?.data.rows[0]?.metricValues)
    }catch(e){console.log(e)}
}