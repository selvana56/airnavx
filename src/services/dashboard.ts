<header className="flex justify-between items-center px-4 w-11/12 max-w-7xl mx-auto">
  <div className="flex-1">
    <Logo />
  </div>

  <div className="flex-1 flex items-center justify-between">
    <div className="flex items-center gap-1">
      <MapPin />
      <span className="text-xl">
        {data?.current_weather?.city || data?.location?.name || "Unknown City"},{" "}
        {data?.current_weather?.country || data?.location?.country || "??"}
      </span>
    </div>

    <form onSubmit={hanldeSearch} className="flex items-center relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      <Input
        name="city"
        type="search"
        placeholder="Search City"
        className="w-full pl-10 pr-4 rounded-tr-none rounded-br-none"
      />
      <Button
        type="submit"
        size="icon"
        className="py-3 rounded-tl-none rounded-bl-none"
      >
        <LocateFixed />
      </Button>
    </form>
  </div>
</header>
