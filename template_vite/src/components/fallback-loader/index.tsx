const FallbackLoader = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center">
      <div className="bg-red relative h-40 w-200 rounded-full border shadow-inset-light">
        <div className="absolute inset-y-2 left-2 right-360 animate-slide rounded-full bg-secondary shadow-light"></div>
      </div>
    </div>
  )
}

export default FallbackLoader
