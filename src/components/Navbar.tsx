export default function Navbar () {
    return (
        <>
            <div className='flex w-[90vw] h-20 rounded-3xl items-center justify-center bg-blue-400 bg-opacity-40'>
                <ul className="flex space-x-10">
                    <li className="hover:underline"><a href='/Home'>Home</a></li>
                    <li className="hover:underline"><a href='/Projects'>Projects</a></li>
                    <li className="hover:underline"><a href='/About'>About me</a></li>
                </ul>
            </div>
        </>
    )
}