const LoadingPage = () => {
    return(
        <div className="flex justify-center align-middle items-center h-full w-full">
            <div className="relative h-10 w-10">
                  <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-800 opacity-75"></div>
                  <div className="relative inline-flex rounded-full h-10 w-10 bg-zinc-800"></div>
            </div>
        </div>
    )}
    export {LoadingPage}