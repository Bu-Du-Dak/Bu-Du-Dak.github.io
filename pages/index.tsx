import ReactGA from 'react-ga4'
import HomePage from "../src/components/unit/home/Home.index"
export default function Home() {
  if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS) {
    ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS);
  }
  return (
    <HomePage/>
  )
}
