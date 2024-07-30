export default function Card() {
  return (
    <>
      <div id="card">
        <h1 id="name">Patrick Bateman</h1>
        <p>
          <b>Vice President at Pierce & Pierce</b>
        </p>

        <p id="intro">
          I don't just crunch numbers, I redefine them. In a world where details matter, I stand
          unparalleled. My business card? Bone color, Silian Rail font – a statement in subtlety yet
          screams sophistication. Fitness enthusiast, connoisseur of haute cuisine, and an avid
          appreciator of Phil Collins. My expertise isn't just in mergers and acquisitions; it's in
          cultivating an aura of excellence. When I'm not revolutionizing Wall Street, you might
          find me at the trendiest eateries or updating my extensive wardrobe. Remember, it's not
          just about being the best – it's about looking the best while doing it.
        </p>
        <a href="https://youtu.be/YHgwxVCiMyI" target="_blank">
          Let's see Paul Allen's card.
        </a>
        <div id="glare"></div>
      </div>

      <div id="controls">
        <label id="spec-label">Opacity: 0.2</label>
        <input id="spec-range" type="range" min="0.1" max="1" step="0.1" value="0.2" />
        <a
          id="code-link"
          href="https://github.com/farshed/farshed.github.io/tree/main/src/pages/lab/glassmorphic-card.astro"
          target="_blank"
        >
          See code
        </a>
      </div>

      <div id="cloudy">
        <video
          src="/media/cloudy.mp4"
          poster="/media/cloudy-poster.jpg"
          autoplay
          playsinline
          muted
          loop
        ></video>
      </div>
    </>
  );
}
