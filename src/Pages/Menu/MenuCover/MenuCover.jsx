
const MenuCover = ({ img, title }) => {
    return (
        <div>
            <div className="hero h-[650px]" style={{ backgroundImage: `url("${img}")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content bg-black bg-opacity-40 mt-10">
                    <div className="max-w-md mt-10">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MenuCover;