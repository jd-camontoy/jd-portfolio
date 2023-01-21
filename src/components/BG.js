import bgVideo from '../assets/video/hero-vid.webm';

const BG = () => {
    return (
        <div className="bg-art">
            <video autoPlay muted loop>
                <source src={bgVideo} type="video/webm" />
                Your browser is not supported.
            </video>
        </div>
    );
}

export default BG;