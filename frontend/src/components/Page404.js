import '../css/page404.css'

function Page404()
{
    return <>
        <div className="Container404">
            <p className='statusCode'>404</p>
            <h2>Page not found</h2>
            <p className='errorMsg'>Sorry, we couldn't find page you looking for.</p>
            <button>Go back home</button>
        </div>
    </>
}

export default Page404