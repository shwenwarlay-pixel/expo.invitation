import { InviteActions } from "./InviteActions";
import { OpeningExperience } from "./OpeningExperience";

const details = [
  ["Dates", "4 • 5 • 6 September 2026"],
  ["Venue", "Pan Pacific Yangon Hotel, Ballroom, R-Floor"],
  ["Visit us", "Booth No. 13"],
];

export default function Home() {
  return (
    <main>
      <OpeningExperience />

      <section className="welcome section" id="welcome" aria-labelledby="welcome-title">
        <div className="welcome-host">
          <img className="welcome-logo" src="/images/shwe-nwar-lay-logo-transparent.png" alt="Shwe Nwar Lay" />
          <p>With compliments from Shwe Nwar Lay</p>
        </div>
        <p className="eyebrow">Join us at</p>
        <h2 id="welcome-title">PAN PACIFIC<br />YANGON HOTEL</h2>
        <div className="gold-line" aria-hidden="true"><span /></div>
        <p className="event-name">Myanmar Business Trade Show &amp; Travel Expo 2026</p>
      </section>

      <section className="details section" aria-labelledby="details-title">
        <p className="eyebrow">Save the date</p>
        <h2 id="details-title">An invitation to<br /><em>come together.</em></h2>
        <div className="detail-list">
          {details.map(([label, value], index) => (
            <div className="detail-row" key={label}>
              <span className="detail-number">0{index + 1}</span>
              <div><p>{label}</p><strong>{value}</strong></div>
            </div>
          ))}
        </div>
      </section>

      <section className="closing section" aria-labelledby="closing-title">
        <img className="closing-logo" src="/images/shwe-nwar-lay-logo-transparent.png" alt="Shwe Nwar Lay" />
        <p className="eyebrow">Myanmar Business Trade Show &amp; Travel Expo 2026</p>
        <h2 id="closing-title">We Look Forward<br />to Welcoming You</h2>
        <div className="closing-details"><span>Booth No. 13</span><i aria-hidden="true" /><span>4–6 September 2026</span><i aria-hidden="true" /><span>Pan Pacific Yangon Hotel</span></div>
        <InviteActions />
      </section>
    </main>
  );
}
