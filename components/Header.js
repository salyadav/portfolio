export default function Header({heading}) {
    return (
        <div className="max-w-6xl mx-auto">
            <h1 className=" text-5xl md:text-9xl font-bold text-center text-gray-800 dark:text-gray-400 md:text-left">
            {heading}
            </h1>
        </div>
    );
}
