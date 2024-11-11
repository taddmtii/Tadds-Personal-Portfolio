export default function Navbar () {
    return (
        <>
            <div className='flex w-[90vw] h-20 rounded-3xl items-center justify-center bg-blue-400 bg-opacity-40'>
                <div className="flex font-bold font-mono">
                    <h1>Tadd Trumbull II</h1>
                </div>
                <ul className="flex space-x-10">
                    <li className="hover:underline font-bold font-mono"><a href='/Home'>Home</a></li>
                    <li className="hover:underline font-bold font-mono"><a href='/Projects'>Projects</a></li>
                    <li className="hover:underline font-bold font-mono"><a href='/About'>About me</a></li>
                </ul>
            </div>
        </>
    )
}