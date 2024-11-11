export default function Navbar () {
    return (
        <>
            <div className='h-20 rounded bg-blue-400 pt-20'>
                <ul className="flex ">
                    <li><a href='/Home'>Home</a></li>
                    <li><a href='/Projects'>Projects</a></li>
                    <li><a href='/About'>About me</a></li>
                </ul>
            </div>
        </>
    )
}