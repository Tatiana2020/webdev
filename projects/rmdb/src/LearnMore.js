import { ExternalLink } from './ExternalLink'
import { Section } from './Section'
import './LearnMore.scss'

export const LearnMore = () => (
    <Section title="Learn More" subtitle="Not sure what to pick? We're here to help." className="LearnMore">
        <ExternalLink url="https://www.imdb.com/what-to-watch/watch-guides/?ref_=hm_watch_wchgd" caption="Learn More"/>
        <ExternalLink url="https://www.imdb.com/what-to-watch/popular/?ref_=hm_watch_pop" caption="Most Popular"/>
    </Section>
)