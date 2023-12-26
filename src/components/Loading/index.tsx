const Loading = () => {
return(
    <div className="flex bg-black opacity-50 top-0 left-0 fixed justify-center align-middle h-full w-full items-center">
        <div className="relative h-10 w-10">
              <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-200 opacity-75"></div>
              <div className="relative inline-flex rounded-full h-10 w-10 bg-zinc-800"></div>
        </div>
    </div>
   
)
}
export {Loading}