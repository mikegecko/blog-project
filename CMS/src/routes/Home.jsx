
export default function Home () {

    


    return(
        <>
            <h1>Home</h1>

            <h4>Continue editing</h4>

            <h4>Recently Published</h4>

            <h4>Recent Comments</h4>

            <h4>Site Stats</h4>

        </>
    )
}

export async function homeLoader () {
    //Return the data we need -> access data using useLoaderData()
    //Get most recent edited post
    //Get most recent published post
    //Get most recent comments
    //Get total user count for comments / total comments

    return null;
}