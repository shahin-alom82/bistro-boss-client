
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center lg:mx-[600px] mx-6">
            <i className="text-yellow-600 text-[18px]">--- {heading} ---</i>
            <h1 className="lg:text-4xl text-3xl uppercase border-y-4 py-4 mt-4">{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;