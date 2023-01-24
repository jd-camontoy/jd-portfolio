const BG = () => {
    return (
        <div className="bg-art">
            <video autoPlay muted loop>
                <source src="/hero-vid-sm.webm" type="video/webm" />
                Your browser is not supported.
            </video>
        </div>
    );
}

export default BG;