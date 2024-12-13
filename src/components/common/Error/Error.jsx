

const Error = ({ error }) => {
    return (
        <nav className="bg-[#006d7e] h-12">
            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-center text-white">
                {error}
            </div>
        </nav>
    )
}

export default Error